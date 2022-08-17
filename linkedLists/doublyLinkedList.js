class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = { value, prev: null, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; // basically saying this.head.next
    this.tail = newNode; // just writing it out
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    // const newNode = { value, next: null };
    newNode.next = this.head;
    this.head.prev = newNode;
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
    newNode.prev = before;
    const after = before.next;
    after.prev = newNode;
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
    after.prev = before;
    before.next = after;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(3);
myLinkedList.append(5);
myLinkedList.prepend(1);

// console.log(myLinkedList.printList());
// myLinkedList.insert(0, 1);
// console.log(myLinkedList.printList());
// console.log(myLinkedList);
// myLinkedList.delete(2);
console.log(myLinkedList);

// const newNode = { value, next: null };
/*
    remember, this.tail.next references this.head.next on the first go
    so...
    this.tail.next is really...
    this.head.next
    it is a pointer and so you are referencing that point and not the
    */
