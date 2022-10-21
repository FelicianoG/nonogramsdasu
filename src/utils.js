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

export function rowColumnMaker(arr) {
  let arry = arrDenester(arr);
  let arr2 = [];
  let prov = [];
  for (let k = 0; k < arry.length; k++) {
    prov = [];

    for (let i = 0; i < arry.length; i++) {
      prov.push(arry[i].splice(0, 1)[0]);
    }
    arr2.push(prov);
  }
  return [arr, arr2];
}

export function arrayToBlocks(arr) {
  let newArr = [];
  let gap = 0;
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      number++;
    } else if (i !== 0 && number !== 0) {
      newArr.push(number);
      gap = 0;
      number = 0;
    }
  }
  if (!gap && number !== 0) {
    newArr.push(number);
  }
  return newArr;
}

export function arrNegative(nestedArr) {
  let arr = JSON.parse(JSON.stringify([...nestedArr]));
  arr.map((a, i) => {
    a.map((element, j) => {
      arr[i][j] = !nestedArr[i][j];
      return i;
    });
    return i;
  });
  return arr;
}
