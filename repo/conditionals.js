const x = 4;
const y = 5;
let operation = "+" || "-" || "*" || "/";
let opertation = "+";

if (operation === "+") {
  console.log(`${x} + ${y} = ${x + y}`);
} else if (operation === "-") {
  console.log(`${x} - ${y} = ${x - y}`);
} else if (operation === "*") {
  console.log(`${x} * ${y} = ${x * y}`);
} else if (operation === "/") {
  console.log(`${x} / ${y} = ${x / y}`);
}
