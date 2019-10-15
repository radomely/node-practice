console.log(Buffer.byteLength("hello world", "utf-8"));
const buff1 = Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90]);
const buff2 = Buffer.from("Hello world!!!", "utf8");

const buff3 = Buffer.from([50, 60, 70, 80, 90, 10, 20, 30, 40]);

console.log(buff1[2]);

console.log("Compare buffer:", buff1.compare(buff2));
console.log("Index compare: ", buff1.compare(buff3, 5, 9, 0, 4));

const newBuff = Buffer.concat([buff1, buff2]);
console.log(newBuff);
console.log(Buffer.isBuffer(newBuff));

let symb = buff2.indexOf("l");
console.log("Position of symbol 'l' from start", symb);

symb = buff2.lastIndexOf("l");
console.log("Position of symbol 'l' from end", symb);
