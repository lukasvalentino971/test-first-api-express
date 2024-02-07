// app.js
const express = require('express');
const routesUser = require('./src/routes/userRoutes');
const routeAuth = require('./src/routes/authRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// middleware for passing json
app.use(express.json());

app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/user', routesUser);
app.use('/auth', routeAuth);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});