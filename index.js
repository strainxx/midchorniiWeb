const http = require("http")
const fs = require("fs")



const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url.match("static")){
        console.log(req.url);
        let rs = fs.readFileSync(`.${req.url}`)
        res.writeHead(200, {
            'Content-Type': 'image/png',
        })
        res.write(rs)
        res.end()
    }
    let rs = fs.createReadStream("index.html")
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    rs.pipe(res)
})

server.listen("8080", ()=>{
    console.log("Server started!")
})