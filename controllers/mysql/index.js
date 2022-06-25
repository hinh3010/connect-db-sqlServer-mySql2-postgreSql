import poolMysql from '../../connect/mysql.js';

export default async (req, res) => {
    poolMysql.query(
        `SELECT * FROM users`,
        (err, rows, fields) => {
            if (!err) res.json(rows)
            else res.json(err.message)
        }
    );
}
