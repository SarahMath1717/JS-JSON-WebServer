// Requires relevant modules from your node_modules (nvm use node, npm init -y)
// Don't forget to also install cors and express before running this code!
const express = require("express");
const cors = require("cors");

const app = express(); // Creates an Express application
app.use(cors()); // allows "cross-origin" requests

const port = 3000; // assigns the local port where the server should run

app.listen(port, () => {
    console.log("Now listening on port", port); // Confirms port is connected and available for requests
});
// you can run this with 'node app.js'

// Structure for the requests will alwaus be:
// URL
// METHOD
// Write a function that will run when the endpoint is called

app.get("/cats", (req, res) => {    // use APP to manage GET request to endpoint /CATS
    const data = {catsArray: ["Ragdoll", "Tabby", "Moggie"]}    //assign the data that will be called
    res.send(data)    //identify what response will be sent in relation to the request. This will be sent back in JSON form.
});
// we don't detail the request at this stage because there is only one option and we don't need to post etc.





