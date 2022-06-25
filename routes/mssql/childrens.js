
export default function (path, router) {
    router.get(`${path}/test`, (req, res) => res.json('success'))
    router.get(`${path}/adu`, (req, res) => res.json('adu'))
    router.get(`${path}/ec`, (req, res) => res.json('ec'))
}