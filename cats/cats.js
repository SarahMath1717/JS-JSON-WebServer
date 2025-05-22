
const express = require("express");
const cors = require("cors");

const app = express(); // Creates an Express application
app.use(cors()); // allows "cross-origin" requests

const port = 3000; // assigns the local port where the server should run

app.listen(port, () => {
    console.log("Now listening on port", port); // Confirms port is connected and available for requests
});
// you can run this with 'node app.js'

app.get("/cats", (req, res) => {    
    const data = {catsArray: ["Ragdoll", "Tabby", "Moggie"]}    
    res.send(data)
});





