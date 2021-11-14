const http = require('http')
const fs = require('fs');
http
    .createServer(function (req, res) {
        const db = JSON.parse(fs.readFileSync('./db/movies.json', 'utf8'));
        console.log(db)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(db));
        res.end();
    })
    .listen(3001, '127.0.0.1', () => {
        console.log('Сервер начал прослушивание запросов')
    })