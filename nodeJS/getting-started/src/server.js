const http = require("http")
const fs = require("fs")
const { writeHead, view } = require("./utils")

const PORT = process.env.PORT || 8000
const server = http.createServer()

server.listen(PORT, err => {
    if (err) console.error(err)
    console.log(`Listening on port ${PORT}!`)
})

server.on("request", (req, res) => {
    fs.readFile(view(req.url), (err, data) => {
        if (err) {
            writeHead(res, 404)
            res.write("Not found")
        }
        else {
            writeHead(res, 200)
            res.write(data)
        }
        res.end()
    })
})
