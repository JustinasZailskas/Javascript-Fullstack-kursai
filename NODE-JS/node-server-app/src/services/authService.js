const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
    async login(email, password) {
        const user = await userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ userID: user._id }, "your-secret-key", {
            expiresIn: "1h",
        });

        await userRepository.updateToken(user, token);
        return token;
    }

    async register(username, email, password) {
        if (!username || !email || !password) {
            throw new Error('Missing required fields');
        }

        const existingUser = await userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        return await userRepository.create({
            username,
            email,
            password: hashedPassword
        });
    }
}

module.exports = new AuthService();
