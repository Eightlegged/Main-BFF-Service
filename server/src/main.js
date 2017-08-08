import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';
import session from 'express-session';


const app = express();

let port = 8000;

app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true,
 isLoggedIn: false,
 email: ''
}));

// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../build'));

app.get('/session', (req, res) => {
  res.json({
    session: req.session
  })
})

app.get('/hello', (req, res) => {
  res.send('hello');
})

// LOAD API FROM ROUTES
app.use('/api', api);

// TO BE IMPLEMENTED

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
