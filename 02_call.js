// Polyfill call
Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

let person = {
  name: "Sidharth",
};

function testCall() {
  console.log(this.name);
}

console.log("Normal : ");
testCall();

console.log("Call : ");
testCall.call(person);

console.log("My Call : ");
testCall.myCall(person);
