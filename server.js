
const express = require('express')
const requestIp = require('request-ip');

const app = express();
const port = process.env.PORT || 3000

// register client ip capture middlware and add to request object
app.use(requestIp.mw());
app.use(function(req, res) {
    var ip = req.clientIp;
    req.next();
    //res.end(ip + '\n');
});

const routes = require('./api/routes');
routes(app);

// catch all other inncorrect routes
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: 'Not found'
    });
});
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});