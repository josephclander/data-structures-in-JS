class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
/**
 * recursive function to collect tree nodes
 * @param {object} node
 * @returns object
 */
const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
   * insert the value correctly in the BST
   * @param {number} value
   */
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let found = false;
    let currentNode = this.root;
    while (!found) {
      // compare values
      if (value < currentNode.value) {
        // LEFT ROUTE CHECK
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          found = true;
        }
      } else {
        // RIGHT ROUTE CHECK
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
  /**
   * find the value that you are looking for
   * @param {number} value
   * @return {object} node
   */
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.root);
console.log(tree.lookup(170));
// console.log(JSON.stringify(traverse(tree.root)));
//      9
//   4     20
// 1  6  15  170
