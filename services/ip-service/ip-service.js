// and this is our microservice
const request = require('request');
const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;
const client = new WebServiceClient('323655', 'ZvltVThbumPhghzR');

var ipService = {
    
    isValidIp: function(req, res, next) {
        let userId = req.params.userId;
        let userIp = req.clientIpAddress;
        let userWhiteListedCountries = req.userValidCountriesList;

        let userCountry = 'USA' // damn maxmind api doesn't work

        let validCountryArry = userWhiteListedCountries.split(',');
        if (validCountryArry.includes(userCountry)) {
            res.send(true);
        } else {
            res.send(false);
        }
    }
 };

module.exports = ipService;