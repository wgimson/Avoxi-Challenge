'use strict'

const controller = require('./controller');

module.exports = function(app) {
    app.route('/verifyIp/:userId')
       .get(controller.verifyIp);
}