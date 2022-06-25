import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config()

const { Pool } = pg;

const poolPg = new Pool({
    host: process.env.SERVER_NAME_PG,
    user: process.env.SERVER_USER_PG,
    database: process.env.SERVER_DATEBASE_PG,
    password: process.env.SERVER_PASSWORD_PG,
    port: 5432,
})

poolPg.connect()
    .then((pool) => { console.log("db postgresql connection successful"); return pool })
    .catch(err => { console.error('Error creating postgresql connection pool : ', err.message); })

export { pg }
export default poolPg