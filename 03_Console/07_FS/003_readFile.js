const fs = require("fs");

fs.exists("userProfile.txt", function() {
  fs.readFile("userProfile.txt", { encoding: "utf-8" }, function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const obj = JSON.parse(data);
    console.log(
      "Hello",
      obj.fname,
      "Famaly name:",
      obj.lname,
      "age:",
      obj.age,
      "Position",
      obj.position
    );
  });
});
