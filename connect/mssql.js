import mssql from 'mssql/msnodesqlv8.js'
import dotenv from 'dotenv';
dotenv.config()

const { ConnectionPool } = mssql

const poolMssql = new ConnectionPool({
    server: process.env.SERVER_NAME_MSSQL,
    user: process.env.SERVER_USER_MSSQL,
    password: process.env.SERVER_PASSWORD_MSSQL,
    database: process.env.SERVER_DATEBASE_MSSQL,
    port: 1433,
    driver: "msnodesqlv8",
})

poolMssql.connect()
    .then((pool) => { console.log("db mssql connection successful"); return pool })
    .catch(err => { console.error('Error creating mssql connection pool : ', err.message) })

export { mssql }
export default poolMssql


