const http = require('http');

const server = http.createServer((req, res) =>{

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>HELLO</title><meta charset="UTF-8"></head>');
        res.write('<body><h4>HELLO THERE!</h4><form action="/createuser" method="POST"><input type="text" name="username" placeholder="name"><button type="submit">SUBMIT</button></form></body>'); 
        res.write('</html>');
        return res.end();
    }

    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><meta charset="UTF-8"></head>');
        res.write('<body><ul><li>Jan Bak</li><li>Anna Kowalska</li><ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/createuser'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () =>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        })
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello Captain Kenobi</title><meta charset="UTF-8"></head>');
        res.write('<body><h4>HELLO THERE AGAIN CAPTAIN KENOBI!</h4></body>'); 
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);