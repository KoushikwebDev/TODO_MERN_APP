import express from "express";

const router = express.Router();

import {
  home,
  addTodo,
  getTodo,
  editTodo,
  addTaskOnly,
  editTitleOnly,
  deleteTodo,
} from "../Controllers/userControllers.js";

router.get("/", home);
router.post("/addtodo", addTodo);
router.get("/gettodo", getTodo);
router.put("/edittodo/:id", editTodo);
router.put("/addtaskonly/:id", addTaskOnly);
router.put("/edittitleonly/:id", editTitleOnly);
router.delete("/deletetodo/:id", deleteTodo);

export default router;
