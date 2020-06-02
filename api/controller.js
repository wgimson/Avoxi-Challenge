// this would be our gateway
'use strict';

var forwarded = require('forwarded-for');
const status = require('http-status');

// references to all services
var verifyIpService = require('../services/ip-service/ip-service');

const userIpDict = {
    1: 'USA,Brazil,Netherlands',
    2: 'USA,Brazil,Netherlands',
    3: 'USA,Brazil,Netherlands'
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
            req.clientIpAddress = forwarded(req, req.headers);

            verifyIpService.isValidIp(req, res, function(err, isValid) {
                if (err)
                    res.send(err);
                res.json(isValid);
            });
        }
    }
};

module.exports = controllers;