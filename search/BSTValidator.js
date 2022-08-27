class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let found = false;
    let currentNode = this.root;
    while (!found) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          found = true;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          found = true;
        }
      }
    }
    return this;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
}

const tree1 = new BinarySearchTree();
tree1.insert(9);
tree1.insert(4);
tree1.insert(6);
tree1.insert(20);
tree1.insert(170);
tree1.insert(15);
tree1.insert(1);
// console.log(tree1.root);

tree2 = {
  value: 5,
  left: { value: 1, left: null, right: null },
  right: {
    value: 4,
    left: { value: 3, left: null, right: null },
    right: { value: 6, left: null, right: null },
  },
};

tree3 = {
  value: 2,
  left: { value: 1, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const isValidBST = (root) => {
  let currentNode = root;
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      if (currentNode.left.value > currentNode.value)
        return {
          result: false,
          reason: `${currentNode.left.value} more than ${currentNode.value}`,
        };
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      if (currentNode.right.value < currentNode.value)
        return {
          result: false,
          reason: `${currentNode.right.value} less than ${currentNode.value}`,
        };
      queue.push(currentNode.right);
    }
  }
  return { result: true };
};

console.log(isValidBST(tree1));
console.log(isValidBST(tree2));
console.log(isValidBST(tree3));
