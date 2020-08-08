var express = require('express');
var app = express();
var sql = require("mssql");
var config = {
        user: 'SA',
        password: 'Donga@1202',
        server: 'localhost', 
        database: 'Proj' 
    };
// Load the http module to create an http server.
var http = require('http'); 
var fs = require('fs');


// Create a function to handle every HTTP request
function handler(req, res){
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        console.log('The Page Has Been Opened');

        // create Request object
        if (req.url === "/") {
        fs.readFile("login.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
             
            resp.end();
        });
    }
    });
  var form;

  if(req.method == "GET"){ 
    
    form;

  //respond
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(form);
  
  } else if(req.method == 'POST'){

    //read form data
    req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();
        //console.log(formdata)

      //grab A and B values
   
      var aa = formdata.split("&")[0];
      var bb = formdata.split("&")[1];
        var a = aa.split("=")[1];
        var b = bb.split("=")[1];
        console.log(aa.split("="));
        console.log(b);
var request = new sql.Request();
        var qa="INSERT INTO info values('"+a+"','"+b+"')";
           
        // query to the database and get the records
        
        
        request.query(qa, function (err, recordset) {
                    if (err) console.log(err);

            //console.log("Inserted")
                //console.log(recordset)
        });
        
        
      //var result = calc(a,b);
   //*/
        
        
      //fill in the result and form values
    form = '<!doctype html> \
<html lang="en"> \
<head> \
    <meta charset="UTF-8">  \
    <title>Form Calculator Add Example</title> \
</head> \
<body> \
  <form name="myForm" action="/" method="post">\
<h1>Home</h1>\
<p>Username: '+a+'</p>\
<p>Password: '+b+'</p>\
      <br> \
  </form> \
</body> \
</html>';

    //respond
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(form);

    });

  } else {
    res.writeHead(200);
    res.end();
  };

};

//js functions running only in Node.JS
function calc(a,b){
  return  Number(a)+Number(b);;
}

// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(8000, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://localhost:8000/");
  };
});