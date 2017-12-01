var exportedFunction = function() {
  console.log("hello, the function has been called");
  privateFunction();
}

var privateFunction = function() {
  console.log("this is the private function");
}

module.exports = {
  exportedFunction : exportedFunction
}