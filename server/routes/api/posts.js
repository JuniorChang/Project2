const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostCollection();
  res.send( posts.find({}).toArray());
  
});

// Add Post
router.post("/", async (req, res) => {
  const posts = await loadPostCollection();
  await this.post.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// Delete post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://Jr:simplemongopassword@class31stjuly.myynu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  return client.db("myFirstDataBase").collection("posts");
}

module.exports = router;
