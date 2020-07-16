const express = require("express");
const app = express();

app.use((req, res, next) => {
  next();
});

app.use("/api/posts", (req, res, next) => {
  const post = [
    { id: "qwtyuk11", title: "HarryPotter", content: "myPost" },
    { id: "qwtyuk11", title: "HarryPotter", content: "myPost" },
    { id: "qwtyuk11", title: "HarryPotter", content: "myPost" },
  ];
  return res.status(200).json({
      message: 'Post fetched',
      post: post
  });
});

module.exports = app;
