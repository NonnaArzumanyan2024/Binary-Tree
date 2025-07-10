/*
102. Binary Tree Level Order Traversal - Medium

Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level)

Example 1:
Input:  root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input:  root = [1]
Output: [[1]]

Example 3:
Input:  root = []
Output: []

Constraints:
- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000
*/

// Performs level-order traversal (BFS) of a binary tree and returns node values grouped by level.
var levelOrder = function(root) {
    if (!root) return []; // If the tree is empty, return an empty array

    let result = [];           // This will store the final level order traversal
    let queue = [root];        // Initialize the queue with the root node

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        let level = [];               // Array to store values for the current level

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();    // Dequeue the next node
            level.push(node.val);        // Add the node's value to the current level

            // Enqueue left and right children if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level); // Add the completed level to the result
    }

    return result; // Return the final level order traversal
};

