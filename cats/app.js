
const express = require("express");
const cors = require("cors");

const app = express(); // Creates an Express application
app.use(cors()); // allows "cross-origin" requests


app.get("/cats", (req, res) => {    // use APP to manage GET request to endpoint /CATS
    const data = {catsArray: ["Ragdoll", "Tabby", "Moggie"]}    //assign the data that will be called
    res.send(data)    //identify what response will be sent in relation to the request. This will be sent back in JSON form.
});

/* Endpoint   Method   Response data
 /myCat     GET{"name": "Garfield"}*/

 app.get("/myCat", (req,res) => {
    res.send({ "name": "Garfield" })
 })

module.exports = app;



