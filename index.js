import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import poolMssql from './connect/mssql.js'
import routePg from './routes/pg/index.js'
import routeMysql from './routes/mysql/index.js'
import routeMssql from './routes/mssql/index.js'

// General configuration
dotenv.config()
const app = express();
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors({ origin: process.env.ORIGIN_CONNECTED, credentials: true }));

app.get('/', (req, res) => {
    res.json({
        postgresql: '/postgresql',
        mysql: '/mysql',
        mssql: '/mssql'
    })
})

routePg('/postgresql', app)
routeMysql('/mysql', app)
routeMssql('/mssql', app)

// run server
const port = process.env.PORT
app.listen(port, () => console.log(`http://localhost:${port}/`));
