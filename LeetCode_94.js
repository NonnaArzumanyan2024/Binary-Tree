/*
94. Binary Tree Inorder Traversal
Easy

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var inorderTraversal = function(root) {
    let result = [];  // Initialize result array to store traversal order
    
    // Recursive helper function to traverse the tree inorder
    function traverse(node) {
        if (!node) return; // Base case: if node is null, stop recursion
        
        traverse(node.left);        // Traverse left subtree
        result.push(node.val);      // Visit current node and add value to result
        traverse(node.right);       // Traverse right subtree
    }
    
    traverse(root);  // Start traversal from the root node
    
    return result;   // Return the collected inorder traversal values
};
