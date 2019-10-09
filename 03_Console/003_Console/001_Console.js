console.log("Simple message.");
console.info("Some data");

console.error(new Error("Somesing goes wrong!"));
const name = "---";
console.warn(`Danger ${name}!`);

const obj = {
  name: "Ivan",
  age: 25
};
console.dir(obj);
console.log(obj);

const arr = [];
console.time("1-st");
for (let i = 0; i < 1000000; i++) {
  arr[i] = (i + 1) * 2;
}
console.timeEnd("1-st");
