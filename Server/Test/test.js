var functions = require("../functions");
var assert = require("chai").assert;

suite("Functions test suite", function()  {
  test("Test testResponse function", function() {
    //Test for given word.
    var testWord = "Time";
    var testWordResult = functions.testResponse(testWord);
    assert.equal("Successfully recieved conversation starter : Time", testWordResult, "Wrong message returned");

    //Test for no given word.
    var testNoWordResult = functions.testResponse(null);
    assert.equal("Sever test response.", testNoWordResult, "Wrong message returned");
  })
})
