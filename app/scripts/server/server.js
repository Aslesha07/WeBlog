//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://dazzling-heat-3053.firebaseio.com/");

//Lets define a port we want to listen to
const PORT=8080; 

//function which handles requests and send response
function handleEverything(request, response){
     try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//now set up routes:

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//GET request    
dispatcher.onGet("/post1", function(req, res) {
    myFirebaseRef.child("post 1").on("value", function(snapshot) {
 		res.end(snapshot.val());
	});
});    

//POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

//Create a server
var server = http.createServer(handleEverything);

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});