
class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    append(value) {
        if(!this.head){
            this.head = new Node();
            this.head.value = value;
            this.tail = this.head;
        }
        else {
            let newNode = new Node();
            newNode.value = value;
            this.tail.nextNode = newNode;
            this.tail = newNode;
            this.tail.nextNode = null;
        }
        this.size++;
    }

    toString() {
        
        let currNode = this.head;

        for (let i=0; i < this.size; i++){
            console.log(`(${currNode.value}) ->`);
            currNode = currNode.nextNode;
        }
    }
}

class Node {
    constructor () {
        this.value = null;
        this.nextNode = null;
    }
}

export default LinkedList;