/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res) {
        try {
          const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content
          }).fetch();
    
          return res.json({
            message: "Post created successfully",
            post: newPost
          });
        } catch (error) {
          return res.serverError(error);
        }
      }
};

