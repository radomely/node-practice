const fs = require("fs");

console.log("Going to open file!");
fs.open("domofile.txt", "w+", function(err, fd) {
  console.log("Opening file!");
  if (err) {
    console.log(err);
  } else {
    fs.write(fd, "This is the file content!", { encoding: "utf-8" }, function(
      err,
      written,
      string
    ) {
      console.log("Writing to file!");
      if (err) throw err;
      console.log(written);
      console.log(string);
    });
    const arr = new Int16Array(1024);
    const buff = Buffer.from(arr.buffer);

    fs.read(fd, buff, 0, buff.length, 0, function(err, bytes) {
      console.log("reading from file!");
      if (err) throw err;
      console.log(bytes);
      console.log(buff.slice(0, bytes).toString());
    });
    fs.close(fd, function(err) {
      if (err) throw err;
      console.log("File closed!");
    });
  }
});
