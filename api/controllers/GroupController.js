/**
 * GroupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function (req, res) {
        try {
          const group = await Group.create({
            name: req.body.name,
            description: req.body.description
          }).fetch();
          return res.status(201).json(group);
        } catch (error) {
          return res.status(400).json({ error });
        }
      }
};

