import bcrypt from "bcrypt";
import nonogramTest from "./NonogramTest.js";

// console.log(nonogramTest.dog[2]);

function arrToNums(arr) {
  let newArr;
  let trueCount = 0;
  let falseCount = 0;
  for (let i = 0; i < arr.length; i++) {
    
}
arrToNums(nonogramTest.dog[2]);

const myPlaintextPassword = "momo";
const saltRounds = 10;
const salt = "NONODASU";

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  //   console.log(hash);
});