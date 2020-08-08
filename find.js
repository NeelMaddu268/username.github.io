//1.
var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    console.log("Url: "+req.url);
    if (req.url === "/") {
        fs.readFile("login.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');