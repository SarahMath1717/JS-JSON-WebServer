const app = require("./app.js");

const port = 3000; // assigns the local port where the server should run

app.listen(port, () => {
    console.log("Now listening on port", port); // Confirms port is connected and available for requests
});
// you can run this with 'node app.js'