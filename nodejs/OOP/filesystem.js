//built in

const fs = require("fs");

// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(`error: ${err}`);
//     return;
//   }
//   console.log("Data: ", data);
// });

// const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
// const temdegtuud = "[]+=";
// console.log(
//   "================================================================="
// );
// console.log("DD", data);
// console.log(
//   "================================================================="
// );

// fs.writeFile("test.txt", "HELLO BOROODORS", (err) => {
//   if (err) {
//     console.log("Write Err ", err);
//   }
//   console.log("Succeeded");
// });

//File ruu nemj bichih
// fs.appendFile("test.txt", " HELLO BOROODORS", (err) => {
//   if (err) {
//     console.log("Write Err ", err);
//   }
//   console.log("Succeeded");
// });
const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
let result = data.replaceAll(" ", "");

console.log("Data: ", data.length);
console.log(result.length);

const parsedData = data.split(" ");
console.log("Niit ugiin too:", parsedData.length);
console.log("Niit ugiin too:", parsedData);

const count = parsedData.reduce((prev, cur) => {
  return prev + cur.length;
}, 0);
console.log(count);

// const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const sum = arr.reduce((prev, cur) => {
//   return prev + cur;
// }, "");
// console.log(sum);
