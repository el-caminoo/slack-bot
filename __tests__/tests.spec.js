var request = require("supertest");
var express = require("express");
var { getData } = require("../api/index");

var app = express();

// ---- var result is the content of my local postgres DB. Feel free to make changes locally depending on yours   ----//

var result = [
    {
        id: "1234ddf",
        feeling: "feeling",
        favourite_hobbies: []
    }
]
  
    // ---------  Testing the getData function from /api  ----------------- //

app.get("/response/get", getData);

describe("Testing API calls", () => {
    test("test /response/get endpoint status code ", async () => {
        const response = await request(app).get("/response/get")
        expect(response.statusCode).toBe(200);
    });

    test("test /response/get endpoint body content", async () => {
        const response = await request(app).get("/response/get")
        expect(response.body).toEqual(result);
    });
});
