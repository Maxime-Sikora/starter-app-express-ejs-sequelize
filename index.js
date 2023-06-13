// npm i dotenv ejs express express-session pg sequelize nodemon

require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');

// Local imports
const router = require('./app/router');

// Body parser pour utilisation de route POST
app.use(express.urlencoded({ extended: true }));

// ! Si utilisation de session
// app.use(
//     session({
//         saveUninitialized: true,
//         resave: true,
//         secret: 'Un secret pour signer les id de sessions',
//     })
// );

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Statically served files (css, JS front, img, favicon.ico)
app.use(express.static(path.join(__dirname, './public')));

// Nos Routes
app.use(router);

// middleware 404 à configurer


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
