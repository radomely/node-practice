const fs = require("fs");
const readerStream = fs.createReadStream("input.txt");
const writerStream = fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);

writerStream.on("finish", function() {
  console.log("Write complited!");

  let readData = "";
  const readerOutputStream = fs.createReadStream("output.txt");

  readerOutputStream.setEncoding("UTF8");

  readerOutputStream.on("data", function(chunk) {
    readData += chunk;
  });
  readerOutputStream.on("end", function() {
    console.log(readData);
  });
  readerOutputStream.on("error", function(err) {
    console.log(err);
  });
});
