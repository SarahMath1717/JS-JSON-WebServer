// Requires relevant modules from your node_modules (nvm use node, npm init -y)
// Don't forget to also install cors and express before running this code!
const express = require("express");
const cors = require("cors");

const app = express(); // Creates an Express application
app.use(cors()): // allows "cross-origin" requests

const port = 3000; // assigns the local port where the server should run

app.listen(port, () => {
    console.log("now listening on port"); // Confirms port is connected and available for requests
});
// you can run this with 'node app.js'