let count = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

let startTime = performance.now();
count(5);
let durationTime = performance.now() - startTime;

console.log(`the duration time of the algorithm is ${durationTime}`);
