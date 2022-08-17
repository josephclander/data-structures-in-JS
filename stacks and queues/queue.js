class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * First In First Out
 * so first is at the front of the queue
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    /**
     last next first
     */
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // need to remember the edge cases!
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null; // one update as next line sets first.next to null anyway
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// myQueue.enqueue("Samir");
console.log(myQueue);
console.log(myQueue.dequeue());
