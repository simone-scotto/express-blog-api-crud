const express = require("express");

const app = express();

const port = 3050;

const routersPost = require(`./routers/posts`);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my server again");
});

app.use("/api/posts", routersPost);
