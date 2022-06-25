import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import poolPg from './connect/pg.js';
import poolMysql from './connect/mysql.js'
import poolMssql from './connect/mssql.js'

// General configuration
dotenv.config()
const app = express();
app.use(cors(
    { origin: process.env.ORIGIN_CONNECTED, credentials: true }
));

app.get('/', (req, res) => {
    res.json({
        postgresql: '/postgresql',
        mysql: '/mysql',
        mssql: '/mssql'
    })
})

app.get('/postgresql', async (req, res) => {
    poolPg.query(
        `SELECT * FROM public."user"`,
        (err, result) => {
            if (!err) res.json(result.rows)

            else res.json(err.message)
        }
    );
})

app.get('/mysql', async (req, res) => {
    poolMysql.query(
        `SELECT * FROM users`,
        (err, rows, fields) => {
            if (!err) res.json(rows)
            else res.json(err.message)
        }
    );
})

app.get('/mssql', async (req, res) => {
    poolMssql.query(
        `SELECT * FROM student`,
        (err, result) => {
            if (!err) res.json(result.recordset)
            else res.json(err.message)
        }
    );
})

// run server
const port = process.env.PORT
app.listen(port, () => console.log(`http://localhost:${port}/`));
