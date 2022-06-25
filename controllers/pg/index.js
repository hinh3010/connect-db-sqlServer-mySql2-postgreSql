import poolPg from '../../connect/pg.js';

export default async (req, res) => {
    poolPg.query(
        `SELECT * FROM public."user"`,
        (err, result) => {
            if (!err) res.json(result.rows)

            else res.json(err.message)
        }
    );
}
