function arrRemake(arr) {
  let arr1 = [...arr];
  arr1 = arr1.join(" ");
  arr1 = arr1.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr1[i] === "true") {
      arr1[i] = true;
    } else {
      arr1[i] = false;
    }
  }
  return arr1;
}

export default function arrDenester(arr) {
  let arr1 = [...arr];
  for (let j = 0; j < arr1.length; j++) {
    arr1[j] = arrRemake(arr1[j]);
  }
  return arr1;
}
