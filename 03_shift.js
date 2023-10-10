// Polyfill Shift
Array.prototype.myShift = function () {
  if (this.length > 0) {
    const firstElement = this[0];
    this.forEach((_, index) => {
      this[index] = this[index + 1];
    });

    this.length -= 1;
    return firstElement;
  }
};

// Normal Shift
let Arr = [1, 2, 3];
console.log(Arr.shift());
console.log(Arr);

// My Shift
let newArr = [1, 2, 3];
console.log(newArr.myShift());
console.log(newArr);
