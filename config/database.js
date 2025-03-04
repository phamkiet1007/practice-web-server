require('dotenv').config();
const mysql = require('mysql2/promise');

//test connection
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT, //default 3306
    user: process.env.DB_USER, //default empty 
    password: process.env.DB_PASS,  //default empty
    database: process.env.DB_NAME, //default empty
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0, 
});

//query database
// connection.query(
//     'select * from Users u',
//     function (err, results, fields) {
//         if (err) {
//             console.log("error: ", err);
//             return;
//         }
//         console.log(" results: ", results); // results contains rows returned by server
//     }
// );


module.exports = connection;