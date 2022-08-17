class QueueStack {
  constructor() {
    this.stack = [];
  }
  /**
   * push element value to the back of the queue
   * @param {string} value
   * @return {this} stack
   */
  push(value) {
    this.stack.unshift(value);
    return this;
  }
  /**
   * returns element from in front of the queue
   * @return {this} stack
   */
  pop() {
    this.stack.pop();
    return this;
  }
  /**
   * get the front element
   * @returns {string}
   */
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const myQueue = new QueueStack();
myQueue.push("Google");
myQueue.push("Netflix");
myQueue.push("Udemy");
console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue.peek());
