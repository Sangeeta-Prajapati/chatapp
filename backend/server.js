const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (res, req) => {
  res.send("API running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("api/chat/:id", (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5001;

app.listen(5001, console.log(`Server start at server ${PORT}`));
