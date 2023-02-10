/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    surname: {type:'string', required:true},
    firstname: {type:'string', required:true},
    phone: {type:'number', required:true},
    designation: {type:'string', required:true},
    sex: {type:'string', required:true},
    location: {type:'string', required:true},
    email: {type:'string', required:true},
    password: {type:'string', required:true},


  },

};

