// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const widths = []; 
    const queue = [root]; 

    while (queue.length) {
        const levelSize = queue.length; 
        widths.push(levelSize); 

    
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); 
            for (let child of node.children) {
                if (child) {
                    queue.push(child);
                }
            }
        }
    }

    return widths;
}

module.exports = levelWidth;
