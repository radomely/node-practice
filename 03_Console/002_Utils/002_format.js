const util = require("util");

const user = {
  name: "Ivan",
  age: 25,
  salary: 10000,
  bonus: 15
};

const str = util.format(
  "Hello, my name is %s. I am %d years old! My bonuses from the salary are %d%%",
  user.name,
  user.age,
  user.bonus
);

console.log(str, "\n");
console.log("%j", user);
console.log(user);
