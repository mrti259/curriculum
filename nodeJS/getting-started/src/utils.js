const path = require("path")

exports.view = (url) => {
    const filename = (url === "/" ? "index" : url) + ".html"
    return path.join(__dirname, "html", filename)
}

exports.writeHead = (response, statusCode, more) => {
    response.writeHead(statusCode, {
        "content-type": "text/html",
        ...more
    })
}
