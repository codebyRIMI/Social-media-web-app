const express = require('express')
const router = express.Router()
const{ comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleWares");


router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const Comments = await comments.findAll({ where: { postId: postId }});
    res.json(Comments);
  });


  router.post("/",validateToken, async(req, res) => {
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    const newComment = await comments.create(comment);
    res.json(newComment);
  });



  router.delete("/:commentId", validateToken, async (req, res) => {
    const commentId = req.params.commentId;

    
  
    await comments.destroy({
      where: {
        id: commentId,
      },
    });
    res.json("DELETED SUCCESSFULLY");
  });



module.exports = router