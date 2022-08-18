class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
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
  remove(value) {
    // search for node
    let prevNode = null;
    let currentNode = this.root;
    while (currentNode.value !== value) {
      if (value < currentNode.value && currentNode.left) {
        prevNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.right) {
        prevNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    // check if leaf
    if (!currentNode.left && !currentNode.right) {
      prevNode.left.value === currentNode.value
        ? (prevNode.left = null)
        : (prevNode.right = null);
    }
    // if node has one child

    // else replace node with successor on right
    return this.root;
  }
}

module.exports = {
  BinarySearchTree: BinarySearchTree,
};
