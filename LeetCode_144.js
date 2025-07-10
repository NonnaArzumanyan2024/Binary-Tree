/*
144. Binary Tree Preorder Traversal
Easy

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Preorder traversal visits nodes in this order:
1. Root
2. Left subtree
3. Right subtree

Example 1:
Input:  root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input:  root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

Example 3:
Input:  root = []
Output: []

Example 4:
Input:  root = [1]
Output: [1]

Constraints:
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100
*/

var preorderTraversal = function(root) {
    let result = []; // Array to store preorder traversal result

    // Recursive function to traverse the tree
    function traverse(node) {
        if (!node) return;           // Base case: if node is null, return
        result.push(node.val);       // Step 1: Visit the current node (Root)
        traverse(node.left);         // Step 2: Traverse the left subtree
        traverse(node.right);        // Step 3: Traverse the right subtree
    }

    traverse(root); // Start traversal from the root
    return result;  // Return the final result array
};
