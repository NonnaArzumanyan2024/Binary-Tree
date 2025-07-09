/*
450. Delete Node in a BST
Medium

Given a root node reference of a Binary Search Tree (BST) and a key, delete the node with the given key in the BST. 
Return the root node reference (possibly updated) of the BST.

The deletion can be divided into two stages:
1. Search for the node to remove.
2. If the node is found, delete it following BST rules.

Example 1:
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]

Example 2:
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]

Example 3:
Input: root = [], key = 0
Output: []

Constraints:
- The number of nodes in the tree is in the range [0, 10⁴].
- -10⁵ <= Node.val <= 10⁵
- Each node has a unique value.
- root is a valid binary search tree.
- -10⁵ <= key <= 10⁵
*/

var deleteNode = function(root, key) {

    // Helper recursive function to delete the node
    function deleteNode(node, val) {
        if (!node) return null; // Base case: node not found

        // Search in the left subtree if target is smaller
        if (val < node.val) {
            node.left = deleteNode(node.left, val);
        } 
        // Search in the right subtree if target is greater
        else if (val > node.val) {
            node.right = deleteNode(node.right, val);
        } 
        // Node to delete is found
        else {
            // Case 1: Node is a leaf (no children)
            if (!node.left && !node.right) {
                return null;
            }

            // Case 2: Node has only one child
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Case 3: Node has two children
            // Find the in-order successor (smallest value in right subtree)
            let next = node.right;
            while (next.left) {
                next = next.left;
            }

            // Replace current node's value with successor's value
            node.val = next.val;

            // Recursively delete the in-order successor
            node.right = deleteNode(node.right, next.val);
        }

        // Return the updated node
        return node;
    }

    // Start the deletion from the root
    return deleteNode(root, key);    
};
