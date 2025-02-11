import styles from "../styles/Login.module.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../services/AuthContext";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState<string>("testas@testas.lt");
  const [password, setPassword] = useState<string>("testas");
  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Handle submit");

    try {
      console.log("Bandymas", { email, password });
      login(email, password);
      console.log("Funckija kvieciama");
      navigate("/bnplius");
    } catch (error) {
      console.log("Klaida, ", error);
    }
  };

  return (
    <div>
      <div className={styles.loginForm}>
        <h2 style={{ textAlign: "center" }}>
          Prisijungimas {isAuthenticated ? "Prisijunges" : "Neprisijunges"}
          {typeof isAuthenticated}
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="El. paštas"
            required
            value={email}
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Slaptažodis"
            required
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button}>Prisijungti</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
