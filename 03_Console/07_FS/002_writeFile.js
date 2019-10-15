const fs = require("fs");
const util = require("util");

user = {
  fname: "Ivan",
  lname: "Ivanov",
  age: 25,
  position: "developer"
};
console.log("File writing...");
fs.writeFile("userProfile.txt", util.format("%j", user), function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File was wrote!");
});
