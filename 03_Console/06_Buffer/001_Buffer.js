const buff1 = Buffer.alloc(10);
console.log("Empty buffer:", buff1);

const nibuff = Buffer.allocUnsafe(10);
console.log("uninitialized buffer:", nibuff);

console.log("Length of buffer:", buff1.length);
