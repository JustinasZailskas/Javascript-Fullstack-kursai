const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { cacheMiddleware } = require("../middlewares/cacheMiddleware");
const corsHandler = require("../middlewares/corsHandler");

router.get("/", corsHandler, todoController.getAllTodos);
router.get("/:id", corsHandler, cacheMiddleware, todoController.getTodoById);
router.post("/", corsHandler, todoController.createTodo);
router.put("/:id", corsHandler, todoController.updateTodo);
router.delete("/:id", corsHandler, todoController.deleteTodo);

module.exports = router;
