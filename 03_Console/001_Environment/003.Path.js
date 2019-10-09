const path = require("path");
const filename = path.basename(__filename);
console.log("Current file: ", filename);
console.log(path.resolve("./tesede"));
const extension = path.extname(__filename);
console.log("Current file, has", extension, "extensions!");
console.log("Check if path is absolute - " + path.isAbsolute(__filename)); //true
const file = "003.Path.js";
const filePath = path.join(__dirname, file);
console.log(__dirname);
console.log(filePath);
const pathParts = path.parse(filePath);
console.log(pathParts);
console.log("System separator: ", path.sep);
const objPath = {
  root: "C:\\",
  dir: "C:\\GoIT\\node-practice\\03_Console\\001_Environment",
  base: "004.Path.js",
  ext: ".js",
  name: "004.Path"
};
console.log(path.format(objPath));
