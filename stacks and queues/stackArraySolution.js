class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    this.array = [];
    // top will be the far right
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Netflix");
console.log(myStack.peek());
// myStack.push("Udemy");
// myStack.push("BBC");
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
