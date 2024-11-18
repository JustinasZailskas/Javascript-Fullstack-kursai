const Todo = require("../models/todo");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.getAllTodos = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const todoItems = await Todo.find({});
        res.json(todoItems);
      } else {
        res.status(400).json({ error: "Neteisingas slaptazodis" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};

exports.getTodoById = async (req, res) => {
  const id = req.params.id;
  try {
    const elementas = await Todo.findById(id);
    if (!elementas) {
      res.status(404).json({ message: "Toks elementas nerastas" });
    }
    res.json(elementas);
  } catch (error) {
    if (error.statusCode === 404 || error.kind === "ObjectId") {
      res
        .status(404)
        .json({ error: "Toks elementas nerastas: " + error.toString() });
    }
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};

exports.createTodo = async (req, res) => {
  try {
    console.log(req.body);
    const { title, author, status, createdAt } = req.body;
    if (!title || !author || !status || !createdAt) {
      res
        .status(400)
        .json({ error: "Uzpildykite visus laukelius: " + error.toString() }); //4xx klaidos yra kliento klaidos
    }
    const todo = new Todo({ title, author, status, createdAt });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  try {
    const { title, author, status, createdAt } = req.body;

    const elementas = await Todo.findById(id);
    if (!elementas) {
      res
        .status(404)
        .json({ error: "Toks elementas nerastas, negalima atnaujinti" });
    }

    elementas.title = title;
    elementas.author = author;
    elementas.status = status;
    elementas.createdAt = createdAt;

    await elementas.save();

    res.json({ message: "Elementas atnaujintas" });
  } catch (error) {
    if (error.statusCode === 404 || error.kind === "ObjectId") {
      res.status(404).json({ error: "Blogas identifikavimo kodas: " });
      return;
    }
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const elementas = await Todo.findByIdAndDelete(id);
    console.log(elementas);

    if (!elementas) {
      res.json({ error: "Elementas nerastas" });
    }
    res.json({ message: "Elementas yra istrintas" });
  } catch (error) {
    res.status(400).json({
      error: "Elementas neistrintas, nes jis nerastas: " + error.toString(),
    });
  }
};

//   app.patch("/todo/:id", async (req, res) => {
//     const id = req.params.id;

//     try {
//       const { title, author, status, createdAt } = req.body;
//       const elementas = await Todo.findById(id);
//       console.log(elementas);
//       if (!elementas) {
//         res
//           .status(404)
//           .json({ error: "Toks elementas nerastas, negalima atnaujinti" });
//       }

//       if (title !== undefined) {
//         elementas.title = title;
//       }
//       if (author !== undefined) {
//         elementas.author = author;
//       }
//       if (status !== undefined) {
//         elementas.status = status;
//       }
//       if (createdAt !== undefined) {
//         elementas.createdAt = createdAt;
//       }
//       await elementas.save();

//       res.json({ message: "Elementas atnaujintas" });
//     } catch (error) {
//       if (error.statusCode === 404 || error.kind === "ObjectId") {
//         res.status(404).json({ error: "Blogas identifikavimo kodas: " });
//         return;
//       }
//       res
//         .status(500)
//         .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
//     }
//   });
