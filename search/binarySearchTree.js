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
    // didn't complete [was extension exercise -- mostly right]
    if (!this.root) return false;
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
    // checks for children
    const isNodeLeft = currentNode.left !== null;
    const isNodeRight = currentNode.right !== null;
    // check if leaf
    if (!isNodeLeft && !isNodeRight) {
      prevNode.left.value === currentNode.value
        ? (prevNode.left = null)
        : (prevNode.right = null);
    }
    // if node has one child
    if (isNodeLeft && !isNodeRight) {
      // find side current node is of previous node
      if (prevNode.left.value === currentNode.value) {
        prevNode.left = currentNode.left;
      } else {
        prevNode.right = currentNode.left;
      }
    }
    if (!isNodeLeft && isNodeRight) {
      // find side current node is of previous node
      if (prevNode.left.value === currentNode.value) {
        prevNode.left = currentNode.right;
      } else {
        prevNode.right = currentNode.right;
      }
    }
    // else replace node with successor on right
    if (isNodeLeft && isNodeRight) {
      // check if is root node
      if (currentNode === this.root) {
        this.root;
      }
      // find side current node is of previous node
      if (prevNode.left.value === currentNode.value) {
        prevNode.left = currentNode.right;
      } else {
        prevNode.right = currentNode.right;
      }
      currentNode.right.left = currentNode.left;
    }
    return this.root;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; // the answer we return
    let queue = []; // a way to keep track of the children
    queue.push(currentNode);

    while (queue.length > 0) {
      //shift() built-in - return and remove first item in the queue
      currentNode = queue.shift();
      // put the first answer in your list
      list.push(currentNode.value);
      // now look at what you add to the queue for next part
      // left then right
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
    // while loop queue iterations
    // queue = [9]
    // queue = [4, 20]
    // queue = [1, 6]
    // queue = [15, 170]
    // BFS = [9, 4, 20, 1, 6, 15, 170];
  }
  breadthFirstSearchR(queue, list) {
    // base case
    if (!queue.length) {
      return list;
    }
    // note that queue and list are passed in each time
    // otherwise we would be re-initialising them
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
}
function traverseInOrder(node, list) {
  // keep checking left
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  // when done checking left, start adding these nodes in this order to the list
  list.push(node.value);
  // on each node on the way 'back up' check the right side
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

//        9
//     4    20
//   1  6  15  170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('PreOrder', tree.DFSPreorder());
console.log('InOrder', tree.DFSInorder());
console.log('PostOrder', tree.DFSPostorder());

module.exports = { BinarySearchTree };
