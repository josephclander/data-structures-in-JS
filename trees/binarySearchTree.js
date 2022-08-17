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
    } else {
    }
  }
  /**
   * find the value that you are looking for
   * @param {number} value
   */
  lookup(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);
// JSON.stringify(traverse(tree.root));
//      9
//   4     20
// 1  6  15  170
