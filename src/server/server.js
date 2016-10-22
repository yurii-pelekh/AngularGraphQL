const express = require('express'),
    bodyParser = require('body-parser'),
    initializeRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../../dist'));
app.use(bodyParser.urlencoded({extended: true}));

initializeRoutes(app);

app.listen(port);
