module.exports.swagger = {
    pkg: require('../package'),
    basePath: '/v1',
    host: 'https://crater-portal.herokuapp.com/',
    schemes: ['https'],
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    security: [{ jwt: [] }],
    swagger: '2.0',
    info: {
      title: 'My Sails.js API',
      version: '1.0.0',
      description: 'Documentation for My Sails.js API',
    },
    apis: ['api/controllers/*.js'],
  };
  