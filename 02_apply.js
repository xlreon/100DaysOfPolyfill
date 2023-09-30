// Polyfill Apply
Function.prototype.myApply = function (context, args = []) {
  context.fn = this;
  context.fn(...args);
};

let person = {
  name: "Sidharth",
};

function testApply() {
  console.log(this.name);
}

console.log("Normal : ");
testApply();

console.log("Apply : ");
testApply.apply(person);

console.log("My Apply : ");
testApply.myApply(person);
