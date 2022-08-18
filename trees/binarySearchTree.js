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
}

module.exports = {
  BinarySearchTree: BinarySearchTree,
};
// author solution for remove()
// if (!this.root) {
//   return false;
// }
// let currentNode = this.root;
// let parentNode = null;
// while(currentNode){
//   if(value < currentNode.value){
//     parentNode = currentNode;
//     currentNode = currentNode.left;
//   } else if(value > currentNode.value){
//     parentNode = currentNode;
//     currentNode = currentNode.right;
//   } else if (currentNode.value === value) {
//     //We have a match, get to work!

//     //Option 1: No right child:
//     if (currentNode.right === null) {
//       if (parentNode === null) {
//         this.root = currentNode.left;
//       } else {

//         //if parent > current value, make current left child a child of parent
//         if(currentNode.value < parentNode.value) {
//           parentNode.left = currentNode.left;

//         //if parent < current value, make left child a right child of parent
//         } else if(currentNode.value > parentNode.value) {
//           parentNode.right = currentNode.left;
//         }
//       }

//     //Option 2: Right child which doesnt have a left child
//     } else if (currentNode.right.left === null) {
//       currentNode.right.left = currentNode.left;
//       if(parentNode === null) {
//         this.root = currentNode.right;
//       } else {

//         //if parent > current, make right child of the left the parent
//         if(currentNode.value < parentNode.value) {
//           parentNode.left = currentNode.right;

//         //if parent < current, make right child a right child of the parent
//         } else if (currentNode.value > parentNode.value) {
//           parentNode.right = currentNode.right;
//         }
//       }

//     //Option 3: Right child that has a left child
//     } else {

//       //find the Right child's left most child
//       let leftmost = currentNode.right.left;
//       let leftmostParent = currentNode.right;
//       while(leftmost.left !== null) {
//         leftmostParent = leftmost;
//         leftmost = leftmost.left;
//       }

//       //Parent's left subtree is now leftmost's right subtree
//       leftmostParent.left = leftmost.right;
//       leftmost.left = currentNode.left;
//       leftmost.right = currentNode.right;

//       if(parentNode === null) {
//         this.root = leftmost;
//       } else {
//         if(currentNode.value < parentNode.value) {
//           parentNode.left = leftmost;
//         } else if(currentNode.value > parentNode.value) {
//           parentNode.right = leftmost;
//         }
//       }
//     }
//   return true;
//   }
// }
