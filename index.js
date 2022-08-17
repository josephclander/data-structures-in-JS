const { BinarySearchTree } = require('./trees/binarySearchTree');

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
//      9
//   4     20
// 1  6  15  170
