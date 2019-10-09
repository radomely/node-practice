const util = require("util");

const obj = { name: "Some object" };
const numb = 10;
const str = "Some string";
const und = null;
const arr = [1, 2, 3, 4, 5];

console.log("arr is Array:", util.isArray(arr));
console.log("obj is object:", util.isObject(obj));
console.log("numb is Number:", util.isNumber(numb));
console.log("str is stirng:", util.isString(str));
console.log("und is NULL", util.isNull(und));
console.log("is und a function", util.isFunction(und));
