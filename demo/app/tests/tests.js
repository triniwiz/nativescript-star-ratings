var StarRatings = require("nativescript-star-ratings").StarRatings;
var starRatings = new StarRatings();

describe("greet function", function() {
    it("exists", function() {
        expect(starRatings.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(starRatings.greet()).toEqual("Hello, NS");
    });
});