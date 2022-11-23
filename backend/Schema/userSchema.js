import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    unique: true,
    require: [true, "Title is required."],
    trim: true,
  },
  tasks: [String],
});

let model = mongoose.model("todo", todoSchema);

export default model;
