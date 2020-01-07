function testResponse() {
  if (convStarter == undefined) {
    return "Sever test response.";
  }
  return "Successfully recieved conversation starter : " + convStarter;
}

module.exports.testResponse = testResponse;
