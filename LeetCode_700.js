/*
700. Search in a Binary Search Tree

You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST such that the node's value equals val and return the subtree rooted with that node.
If such a node does not exist, return null.

Example 1:
Input:  root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:
Input:  root = [4,2,7,1,3], val = 5
Output: []

Constraints:
- The number of nodes in the tree is in the range [1, 5000].
- 1 <= Node.val <= 10⁷
- root is a binary search tree.
- 1 <= val <= 10⁷
*/

var searchBST = function(root, val) {
    // Keep looping until we reach a null node or find the target value
    while (root !== null) {
        // If current node matches the target value, return it
        if (val === root.val) return root;

        // If target value is smaller, go left (BST property)
        if (val < root.val) {
            root = root.left;
        } else {
            // If target value is greater, go right
            root = root.right;
        }
    }

    // If we reach a null node, the value doesn't exist in the tree
    return null;
};
