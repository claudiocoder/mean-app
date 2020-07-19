const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  res.status(201).json({message: 'Post added success'});
});

app.get("/api/posts", (req, res, next) => {
  const post = [
    { id: "qwtyuk11", title: "HarryPotter", content: "myPost" },
    { id: "qwtyuk11", title: "HarryPotter", content: "myPost" },
    { id: "qwtyuk11", title: "HarryPotter", content: "myPost" },
  ];
  return res.status(200).json({
    message: "Post fetched",
    post: post,
  });
});

module.exports = app;
