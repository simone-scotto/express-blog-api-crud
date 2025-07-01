const express = require("express");

const router = express.Router();

const posts = require(`../data/posts`);
const { error } = require("console");

//INDEX

router.get(`/`, function (req, res) {
  let filteredPosts = posts;

  if (req.query.tags) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags));
  }
  res.json(filteredPosts);
});

// SHOW

router.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404);

    return res.json({
      error: "Not Found",
      message: "Item not found",
    });
  }
  res.json(post);
});

// DESTROY

router.delete("/:id", function (req, res) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: true,
      message: "items not found",
    });
  }

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);

  res.sendStatus(204);
});
module.exports = router;
