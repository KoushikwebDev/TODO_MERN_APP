import Todo from "../Schema/userSchema.js";

const home = (req, res) => {
  res.send("<h1>Hello Koushik Saha Welcome to Backend</h1>");
};

const addTodo = async (req, res) => {
  try {
    const { title, tasks } = req.body;

    if (!(title && tasks)) {
      res.send("All fields are required.");
      return;
    }

    let existingTodo = await Todo.findOne({ title });

    if (existingTodo) {
      res.status(401).send("This Todo Title already exists.");
      return;
    }
    let myTaskArray = tasks.split(",");
    let todo = {
      title,
      tasks: myTaskArray,
    };

    let newTodo = await Todo.create(todo);

    res.status(200).json(newTodo);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getTodo = async (req, res) => {
  try {
    let todo = await Todo.find();

    res.status(200).json({
      success: true,
      todo,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err.message,
    });
  }
};

const editTodo = async (req, res) => {
  try {
    const { title, tasks } = req.body;
    let newTask = tasks.split(",");
    let newUpdatedTodo = {
      title,
      tasks: newTask,
    };
    let todo = await Todo.findByIdAndUpdate(req.params.id, newUpdatedTodo);

    res.status(200).json({
      success: true,
      message: "Todo Updated.",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

const addTaskOnly = async (req, res) => {
  try {
    const { tasks } = req.body;
    let todo = await Todo.findById(req.params.id);

    let newTasks = tasks.split(",");

    todo.tasks.push(...newTasks);

    let todos = await Todo.findByIdAndUpdate(req.params.id, todo);

    res.status(200).json({
      success: true,
      message: "Task Updated.",
      todo,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

const editTitleOnly = async (req, res) => {
  try {
    const { title } = req.body;
    let todo = await Todo.findById(req.params.id);

    todo.title = title;

    let todos = await Todo.findByIdAndUpdate(req.params.id, todo);

    res.status(200).json({
      success: true,
      message: "Title Updated.",
      todo,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    let todo = await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Todo Deleted.",
      title: todo.title,
      todo,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  home,
  addTodo,
  getTodo,
  editTodo,
  addTaskOnly,
  editTitleOnly,
  deleteTodo,
};
