export default [
    {
        path: "/meter",
        method: "get",
        handler: [(req, res) => { res.json({ message: "hello" }) }]
    }
]