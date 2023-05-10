const express = require("express");
const bodyParser = require("body-parser");
const db = require("mongoose");
const port = "3000";
const app = express();
app.use(express.static("../dist"));
app.use(bodyParser.json());
const connectDB = async () => {
  try {
    await db.connect(
      "mongodb+srv://talperets3:ykspy8949@cluster0.ad29uqg.mongodb.net/task"
    );
  } catch (error) {
    console.log(error);
  }
  console.log("Connected to DB");
};
const userSchema = db.Schema({
  username: String,
  password: String,
});
const taskSchema = db.Schema({
  name: String,
  desc: String,
  worker: String,
});
const taskModel = db.model("tasks", taskSchema);
const finishedtaskModel = db.model("finishedTasks", taskSchema);
const userModel = db.model("users", userSchema);
let temp = [
  { username: "tal", password: "123123" },
  { username: "tarek", password: "123123" },
  { username: "ohad", password: "123123" },
  { username: "sharon", password: "123123" },
];
app.get("/getalltasks", async (req, res) => {
  let temp = await taskModel.find();
  res.json(temp);
});
app.get("/getfinishedtasks", async (req, res) => {
  let temp = await finishedtaskModel.find();
  res.json(temp);
});
app.post("/find", async (req, res) => {
  let result = await userModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (result == null) {
    res.status(404).json({ messege: "not found" });
  } else {
    res.status(200).json({ messege: "good" });
  }
});
app.post("/sendtask", async (req, res) => {
  let temp = {
    name: req.body.name,
    desc: req.body.desc,
    worker: req.body.worker,
  };
  await taskModel.insertMany(temp);
  res.status(200).json({ message: "OK" });
});
app.post("/finishtask", async (req, res) => {
  let temp = {
    name: req.body.name,
    desc: req.body.desc,
    worker: req.body.worker,
  };
  let name = { name: req.body.name };
  await taskModel.deleteOne(name);
  await finishedtaskModel.insertMany(temp);
  res.status(200).json({ message: "OK" });
});
connectDB().then(() => {
  app.listen(port, () => console.log(`Server is connected to port ${port}`));
});
