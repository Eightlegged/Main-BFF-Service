'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = 8000;

app.use((0, _expressSession2.default)({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true
}));

// SETUP MIDDLEWARE
app.use(_bodyParser2.default.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', _express2.default.static(__dirname + '/../../build'));

app.get('/session', function (req, res) {
  if (_expressSession2.default.username) {
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false
    });
  }
});

app.get('/hello', function (req, res) {
  res.send('hello');
});

// LOAD API FROM ROUTES
app.use('/api', _routes2.default);

// TO BE IMPLEMENTED

app.listen(port, function () {
  console.log('Express is listening on port', port);
});