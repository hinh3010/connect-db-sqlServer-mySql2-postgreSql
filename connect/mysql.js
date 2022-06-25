import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

const { createPool } = mysql2

const poolMysql = createPool({
    host: process.env.SERVER_NAME_MYSQL2,
    user: process.env.SERVER_USER_MYSQL2,
    database: process.env.SERVER_DATEBASE_MYSQL2,
    password: process.env.SERVER_PASSWORD_MYSQL2,
    connectionLimit: 10,
    // waitForConnections: true,
    // queueLimit: 0
});

poolMysql.query(
    `SELECT * FROM users`,
    (err, rows, fields) => {
        if (!err) console.log("db mysql2 connection successful")
        else console.error('Error creating mysql2 connection pool : ', err.message)
    }
);

export { mysql2 }
export default poolMysql;
