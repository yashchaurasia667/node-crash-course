import http from 'http';

const server = http.createServer((req, res)=> {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write("<h1>Hello world!</h1>");
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.write(JSON.stringify({message: 'Internal Server Error...'}))
    res.end();
})

const PORT= 8000;
server.listen(PORT, ()=> { console.log(`Server started on port ${PORT}`)
})