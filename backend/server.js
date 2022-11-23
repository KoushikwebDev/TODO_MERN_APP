import app from "./app.js";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("App is running at port: " + PORT);
});
