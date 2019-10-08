var evt = require("events");

function ReadFile() {
  this.file = "";
}

ReadFile.prototype = new evt.EventEmitter();
ReadFile.prototype.readDataFromFile = function(path, callBack) {
  this.file = path;
  if (typeof callBack == "function") {
    this.on("readData", callBack);
  }
  this._read();
};

ReadFile.prototype._read = function() {
  console.log("Loading...");
  var someDataFromFile = "Text text text";
  console.log("Data was read.");
  this.emit("readData", someDataFromFile);
};

module.exports.Reader = ReadFile;
