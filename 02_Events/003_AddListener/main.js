"use strict";

let count = 0;
const print = () => {
  count++;
  console.log("Click - ", count);
};

const evt = require("events");
const emt = new evt.EventEmitter();

emt.on("click", print);
emt.addListener("click", print);
emt.once("click", print);

emt.emit("click");
emt.emit("click");
