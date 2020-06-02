

const express = require('express')
const app = express();
const port = process.env.PORT || 3000

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