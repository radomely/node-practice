const fs = require("fs");

fs.watch("userProfile.txt", function(event, filename) {
  console.log("File %s is %s.", filename, event);
});

fs.writeFile("userProfile.txt", "test string", function(err) {
  if (err) throw err;
  console.log("Data was wrote!");
});
