// Array Some polyfill
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) return true;
  }
  return false;
};

// Array Some
console.log([1, 2, 3].some((ele) => ele % 2 === 0));

// Array MySome
console.log([1, 2, 3].mySome((ele) => ele % 2 === 0));
