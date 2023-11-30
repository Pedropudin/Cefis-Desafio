const http = require("http");
const app = require("./app");

//PORT
//Use the seted port, in case none where cited use 3000
const port = process.env.PORT || 8000;

//Insert more Latter
//I don't actually know what it means
const server = http.createServer(app);

//Start the server
server.listen(port, () =>{
    console.log("Server is running in http:localhost:"+port)
});