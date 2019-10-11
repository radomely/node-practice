const fs = require("fs");
const writeData = "This is the write content!";

const writerStream = fs.createWriteStream("output.txt");
writerStream.write(writeData, "utf-8");
writerStream.end();

writerStream.on("finish", function() {
  console.log("Write complited");
});

writerStream.on("error", function(err) {
  console.log(err);
});

///////////////////////////////////////////////
let readData = "";
const readerStream = fs.createReadStream("output.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function(chunk) {
  readData += chunk;
});
readerStream.on("end", function() {
  console.log(readData);
});
readerStream.on("error", function(err) {
  console.log(err);
});
