/**
 * CommentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function (req, res) {
        try {
          let comment = await Comment.create({
            text: req.body.text,
            author: req.user.id,
            post: req.params.postId
          }).fetch();
          return res.json(comment);
        } catch (error) {
          return res.serverError(error);
        }
      },
      find: async function (req, res) {
        try {
          let comments = await Comment.find({
            post: req.params.postId
          }).populate('author');
          return res.json(comments);
        } catch (error) {
          return res.serverError(error);
        }
      },
      delete: async function (req, res) {
        try {
          let comment = await Comment.destroy({
            id: req.params.id,
            author: req.user.id
          }).fetch();
          if (comment.length === 0) {
            return res.notFound();
          }
          return res.json(comment[0]);
        } catch (error) {
          return res.serverError(error);
        }
      }
};

