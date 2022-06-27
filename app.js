const http = require('http')

const server = http.createServer((req, res) =>{
    

    if (req.url === '/')
    {
        console.log(req)
        res.end('Welcome to out home page');
    }

    if (req.url === '/about')
    {
        res.end('Here is out short story');
    }

    res.end(
        `<h1>Sike!!</h1>`
    )

})

server.listen(5000)