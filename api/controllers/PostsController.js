/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res) {
        try {
          const post = await Post.create({
            title: req.body.title,
            body: req.body.body
          }).fetch();
    
          return res.json(post);
        } catch (error) {
          return res.serverError(error);
        }
      }

};

