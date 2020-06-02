// and this is our microservice
const geoReader = require('@maxmind/geoip2-node').Reader;

const options = {
    // you can use options like `cache` or `watchForUpdates`
};
// const client = new WebServiceClient('323655', 'ZvltVThbumPhghzR');

var ipService = {
    
    isValidIp: function(req, res, next) {
        let userId = req.params.userId;
        let userIp = req.ip;
        let userWhiteListedCountries = req.userValidCountriesList;

        let userCountry = ''; // damn maxmind api doesn't work

        // unfortunately to use the free version of this service it seems you have to download the 'countries database' and 
        // provide an absolute path to the db - to run this you guys will need to configure this path - obviously in production
        // one would have the paid subscription to the web service which would make this ugly path unneccessary
        geoReader.open('E:/HTMLJS/Typescript/Avoxi-Challenge-2/data/GeoLite2-Country.mmdb', options).then(reader => {

            if (userIp === '::1' || userIp === '::ffff:127.0.0.1' || userIp === '127.0.0.1' ) {
                res.send('surely pinging your own server is allowed..');
            } else {
                // get country name in English from GeoIP reader object
                userCountry = reader.country(userIp).country.names.en.trim();
                let validCountryArry = userWhiteListedCountries.split(',');
                if (validCountryArry.includes(userCountry)) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            }
        }).catch(err => {
            console.log(err.error);
            res.send(err.error);
        });
    }
 };

module.exports = ipService;