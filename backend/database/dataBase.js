const mysql = require('mysql2/promise');
require('dotenv').config()

const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1234',
});

mysqlPool.getConnection().then(conn => {
    return conn
    .ping()
    .then(()=>{
        console.log('✅ MySQL pool connected successfully.');
        conn.release();
    })
}).catch(err =>{
    console.log('❌ Unable to connect to MySQL:', err.message);
    process.exit(1)
})


module.exports = mysqlPool;
