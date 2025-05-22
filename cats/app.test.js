const request = require ("supertest");
const app = require("./app.js");

/* Endpoint   Method   Response data
 /myCat     GET{"name": "Garfield"}*/

describe("/myCat", () => {
    test('it responds with the expected cat data', async () => {
        const response = await request(app).get("/myCat");

        console.log(response);
        expect(response.body).toEqual({ "name": "Garfield" });
        expect(response.status).toBe(200);
    })
})