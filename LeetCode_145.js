/*
145. Binary Tree Postorder Traversal - Easy

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Postorder traversal visits nodes in this order:
1. Left subtree
2. Right subtree
3. Root

Example 1:
Input:  root = [1,null,2,3]
Output: [3,2,1]

Example 2:
Input:  root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]

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

var postorderTraversal = function(root) {
    let result = []; // Array to store the result of postorder traversal

    // Recursive helper function to traverse the tree
    function traverse(node) {
        if (!node) return;         // Base case: return if the node is null

        traverse(node.left);       // Step 1: Traverse the left subtree
        traverse(node.right);      // Step 2: Traverse the right subtree
        result.push(node.val);     // Step 3: Visit the current node (Root)
    }

    traverse(root); // Start the traversal from the root node

    return result;  // Return the final postorder traversal result
};

