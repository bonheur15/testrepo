var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello!!!");
  response.end();
});

server.listen(8000);
console.log("Server is listening at: " + server.address().address);
