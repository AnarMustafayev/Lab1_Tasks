// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data; 
        this.next = next;  
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    insertFirst(data) {
        const newNode = new Node(data); 
        if (this.head) { 
            newNode.next = this.head; 
        }
        this.head = newNode; 
    }

    size() {
        let count = 0;
        let node = this.head; 
        while (node) { 
            count++; 
            node = node.next; 
        }
        return count; 
    }

    getFirst() {
        return this.head; 
    }

    getLast() {
        if (!this.head) return null; 
        let node = this.head;
        while (node) {
            if (!node.next) return node; 
            node = node.next; 
        }
    }

    clear() {
        this.head = null; 
    }

    removeFirst() {
        if (!this.head) return; 
        this.head = this.head.next; 
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) { 
            this.head = null; 
            return;
        }
        let previousNode = this.head;
        let node = this.head.next;
        while (node.next) { 
            previousNode = node;
            node = node.next;
        }
        previousNode.next = null; 
    }

    insertLast(data) {
        const newNode = new Node(data); 
        if (!this.head) { 
            this.head = newNode; 
        } else {
            let node = this.head;
            while (node.next) { 
                node = node.next;
            }
            node.next = newNode; 
        }
    }

    getAt(index) {
        let count = 0;
        let node = this.head; 
        while (node) {
            if (count === index) return node; 
            count++; 
            node = node.next; 
        }
        return null; 
    }

    removeAt(index) {
        if (!this.head) return; 
        if (index === 0) {
            this.removeFirst(); 
            return;
        }
        let previousNode = this.getAt(index - 1); 
        if (!previousNode || !previousNode.next) return; 
        previousNode.next = previousNode.next.next; 
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertFirst(data); 
            return;
        }
        const newNode = new Node(data); 
        const previousNode = this.getAt(index - 1); 
        if (!previousNode) { 
            this.insertLast(data); 
        } else {
            newNode.next = previousNode.next; 
            previousNode.next = newNode; 
        }
    }

    forEach(callback) {
        let node = this.head; 
        while (node) {
            callback(node); 
            node = node.next; 
        }
    }

    *[Symbol.iterator]() {
        let node = this.head; 
        while (node) {
            yield node; 
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

