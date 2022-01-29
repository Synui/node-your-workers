const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'DB_USER',
        password: 'DB-PW',
        database: 'staff'
    },
    console.log('Connected to the staff database')
);

module.exports = db;