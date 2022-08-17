class LinkedList {
  constructor() {
    this.head = { a: null }; // ref 1
    this.tail = this.head; // ref 1
    this.length = 1;
  }
  append() {
    const newNode = { a: null };
    this.tail.a = newNode; // ref 1.a
    this.tail = newNode; // ref 2
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append();
myLinkedList.append();

console.log(myLinkedList);

/*
append() {
  const newNode = { a: null };
  this.tail.a = newNode; // ref 1.a
  this.tail = newNode; // ref 2
  this.length++;
  return this;
}
*/
