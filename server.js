require('dotenv').config();

const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';


//config reg.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//config template engine
configViewEngine(app);

//init routes
app.use('/', webRoutes);


app.listen(PORT, HOST, () => {
    console.log(`App listening on port ${PORT}`);
});

