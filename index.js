var http = require('http');
var url = require('url');


const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);

    // Header.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h3>Matthew Beaulieu Assignment Portfolio</h3>')

    //Sprint 1
    response.write("Sprint 1:<br>");
    response.write("- <a href='https://calm-pond-031de9810.azurestaticapps.net/'>Getting to Know Me </a><br><br>");

    //Sprint 2 
    response.write("Sprint 2:<br>");
    response.write("- <a href='https://wonderful-hill-09b0ee910.azurestaticapps.net'>Resume</a><br>");
    response.write("- <a href='https://happy-dune-0996a0c10.azurestaticapps.net'>RegExp</a><br>");
    response.write("- <a href='https://orange-dune-04a121b10.azurestaticapps.net'>Dice Roller</a><br><br>");

    //Sprint 3 
    response.write("Sprint 3:<br>")

    // Close the response
    response.end('<br><h3>Thats it.</h3>');
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
