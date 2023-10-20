//Module
const { huvaah, sum, hasah, multiple, power, squareroot } = require("./math");

const a = 10;
const b = 4;

console.log("huvaah = ", huvaah(a, b));
console.log("sum = ", sum(a, b));
console.log("hasah = ", hasah(a, b));
console.log("multiple = ", multiple(a, b));
//power
console.log("power = ", power(a));
//square root
console.log("squareroot = ", squareroot(b));

// x^2 + 4x + 4 = 0
let aa = 1;
let bb = 4;
let cc = 4;
let discriminant = bb * bb - 4 * aa * cc;

console.log("x1", (-bb + Math.sqrt(discriminant)) / (2 * aa));
console.log("x2", (-bb - Math.sqrt(discriminant)) / (2 * aa));

//derivative
//differential
//integral
