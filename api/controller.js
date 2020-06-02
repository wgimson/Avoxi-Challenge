// this would be our gateway
'use strict';

const status = require('http-status');

// references to all services
var verifyIpService = require('../services/ip-service/ip-service');

// this mocks the client-specific db that would hold whitelisted countries list
const userIpDict = {
    1: 'USA,Brazil,Netherlands,Australia',
    2: 'USA,Brazil,Netherlands',
    3: 'USA,Brazil,Netherlands'
};

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};

var controllers = {

    verifyIp: function(req, res) {
        let userId = req.params.userId;
        let userValidCountriesList = userIpDict[userId];

        // handle unknown user
        if (!userValidCountriesList) {
            res.send(status.UNAUTHORIZED)
        } else {
            // send the client's valid countries list along with their IP address
            req.userValidCountriesList = userValidCountriesList;
            verifyIpService.isValidIp(req, res, function(err, isValid) {
                if (err)
                    res.send(err);
                res.json(isValid);
            });
        }
    }
};

module.exports = controllers;