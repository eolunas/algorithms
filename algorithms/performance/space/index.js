let count = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

let repeat = (array) => {
  let repeatedArray = array;
  return repeatedArray;
};

let changeToString = (array) => {
  let rta = array.map((obj) => obj.toString());
  return rta;
};

let array2D = (value) => {
  let x = new Array(value);
  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0);
  }
  return x;
};

console.log(array2D(5));
