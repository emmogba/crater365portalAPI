/**
 * Group.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
      name: {
        type: 'string',
        required: true
      },
      description: {
        type: 'string',
        defaultsTo: ''
      },
      avatar: {
        type: 'string',
        required: true
      },
      coverImage: {
        type: 'string',
        required: true
      },
      type: {
        type: 'string',
        required: true
      },
      members: {
        collection: 'Users',

      }
  },

};

