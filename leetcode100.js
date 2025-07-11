var isSameTree = function(p, q) {
    // check if both nodes are null
    if (p === null && q== null) {
         return true;
    }
    // check if one node is null and the other isnt and the subtrees on the left hnd side are the same 
    if (p == null || q == null || p.val !== q.val) {
        return false ;
    }
    
    // check right trees are the same and left subtrees are the same 
    let sameLeftTree = isSameTree(p.left, q.left);

    let sameRightTree = isSameTree(p.right, q.right);

    return sameLeftTree && sameRightTree
};