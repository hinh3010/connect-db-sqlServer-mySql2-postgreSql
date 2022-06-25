import index from '../../controllers/mssql/index.js'

export default function (path, router) {
    router.get(`${path}/`, index)
    router.get(`${path}/test`, (req, res) => res.json('success'))
}