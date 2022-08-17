class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // basically saying this.head.next
    this.tail = newNode; // just writing it out
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    // const newNode = { value, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value) {
    if (index < 0 || index > this.length)
      return console.log("Error: invalid Index");
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    let before = this.traverseToIndex(index);
    const newNode = new Node(value);
    const after = before.next;
    newNode.next = after;
    before.next = newNode;
    if (index === this.length) this.tail = newNode;
    this.length++;
    return this.printList();
  }
  delete(index) {
    if (index < 0 || index > this.length - 1) {
      return console.log("Error: invalid Index");
    }
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    }
    let before = this.traverseToIndex(index - 1);
    if (index === this.length - 1) {
      before.next = null;
      this.tail = before;
      return this.printList();
    }
    let after = this.traverseToIndex(index + 1);
    before.next = after;
    this.length--;
    return this.printList();
  }
  reverse() {
    let before = null; // as this is the end value now
    let current = this.head;
    let after = null;
    // loop through nodes switching the references around
    while (current) {
      // deal with 3 values at a time
      after = current.next; // save the next node
      current.next = before; // update ref to current to node behind
      // advance pointers
      before = current;
      current = after;
    }
    this.tail = this.head;
    this.head = before;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(3);
myLinkedList.append(5);
myLinkedList.append(7);
myLinkedList.append(9);
myLinkedList.reverse();

console.log(myLinkedList);
console.log(myLinkedList.printList());

// myLinkedList.append(25);

// console.log(myLinkedList);
// console.log(myLinkedList.printList());

// const newNode = { value, next: null };
/*
    remember, this.tail.next references this.head.next on the first go
    so...
    this.tail.next is really...
    this.head.next
    it is a pointer and so you are referencing that point and not the
    */
