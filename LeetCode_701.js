/*
701. Insert into a Binary Search Tree
Medium

You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
Return the root node of the BST after the insertion. 
It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Example 1:
Input:  root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Example 2:
Input:  root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Example 3:
Input:  root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]

Constraints:
- The number of nodes in the tree will be in the range [0, 10⁴].
- -10⁸ <= Node.val <= 10⁸
- All the values Node.val are unique.
- -10⁸ <= val <= 10⁸
- It's guaranteed that val does not exist in the original BST.
*/

var insertIntoBST = function(root, val) {

    // Define a recursive function to insert a value into the BST
    function insert(root, val) {
        // If the current node is null, create a new node with the value
        if (root === null) {
            return { val, left: null, right: null };
        }

        // If the value is smaller than the current node, go to the left subtree
        if (val < root.val) {
            root.left = insert(root.left, val);
        } else {
            // Otherwise, go to the right subtree
            root.right = insert(root.right, val);
        }

        // Return the (possibly updated) root node
        return root;
    }

    // Call the insert function starting from the root
    return insert(root, val);
};

