import poolMssql from '../../connect/mssql.js';

export default async (req, res) => {
    poolMssql.query(
        `SELECT * FROM student`,
        (err, result) => {
            if (!err) res.json(result.recordset)
            else res.json(err.message)
        }
    );
}