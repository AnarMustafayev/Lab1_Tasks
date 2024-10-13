// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    const visitedNodes = []; 
    let currentNode = list.head; 
    while (currentNode) {
        if (visitedNodes.includes(currentNode)) {
            return true; 
        }
        
        visitedNodes.push(currentNode);
        currentNode = currentNode.next;
    }
    return false;
}

module.exports = circular;
