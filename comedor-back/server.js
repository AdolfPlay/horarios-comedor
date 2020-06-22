const express   = require('express'),
      router    = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');  
var path = require('path');
var routes 		= require('./routes');

const logger = require('./logger');
const PORT = 3000;

const winston = require('winston');
logger.add(new winston.transports.Console({
  format: winston.format.simple()
}));
  
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
    res.send(200);
    }
    else {
    next();
    }
};
   
  
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.use(cors());
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public')));

routes.configure(app);


var server = app.listen(PORT, function() {
    logger.log({
      level: 'info',
      message: 'Puerto '+PORT
    });
});