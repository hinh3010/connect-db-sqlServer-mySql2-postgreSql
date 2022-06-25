import index from '../../controllers/pg/index.js'

export default function (path, router) {
    router.get(`${path}/`, index)
    router.get(`${path}/test`, (req, res) => res.json('success'))
}