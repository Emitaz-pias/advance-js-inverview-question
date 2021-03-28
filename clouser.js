function stopwatch() {
  let count = 1;
  return function () {
    count++;
    // console.log("this is my yard");
    return count;
  };
}
const clock1 = stopwatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());

console.log(clock2());
console.log(clock1());
