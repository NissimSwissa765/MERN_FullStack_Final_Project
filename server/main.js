const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))
require('./configs/dataBase');


const membersController = require('./members/memberController');
const moviesController = require('./movies/moviesController');
const subsController = require('./subscriptions/subscriptionsController')
const usersController = require('./users/usersController');

app.use('/users',usersController);
app.use('/members',membersController);
app.use('/movies',moviesController);
app.use('/subscriptions',subsController);

app.listen(8000)
console.log('Server is up on localhost, listening to port 8000');
