
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

    prepend(value){
        if(!this.head){
            this.head = new Node();
            this.head.value = value;
            this.tail = this.head;
        }
        else {
            let newNode = new Node();
            newNode.value = value;
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    at(index) {
        if(index >= this.size) {
            console.log('index Out of Bounds');
        }
        else {
            let currNode = this.head;
            for (let i=0; i <= this.size; i++){
                if(i === index){
                    console.log(`(${currNode.value}) is at INDEX:${index}`);
                    break;
                }
                currNode = currNode.nextNode;
            }
        }
    }

    contains(value) {
        let currNode = this.head;

        for (let i=0; i < this.size; i++){
            if(currNode.value === value){
                return true;    
            }
            currNode = currNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currNode = this.head;

        for (let i=0; i < this.size; i++){
            if(currNode.value === value){
                return i;    
            }
            currNode = currNode.nextNode;
        }

        return null;
    }

    pop(){
        let currNode = this.head;

        for (let i=0; i < this.size-1; i++){
            currNode = currNode.nextNode;
        }

        this.tail = currNode;
        this.tail.nextNode = null;
        this.size--;
    }

    toString() {
        
        let currNode = this.head;

        for (let i=0; i < this.size; i++){
            console.log(`(${currNode.value}) ->`);
            currNode = currNode.nextNode;
        }
    }

    insertAt(value, index){
        
        let currNode = this.head;

        let newNode = new Node();
        newNode.value = value;

        for (let i=0; i < index-1; i++){
            
            currNode = currNode.nextNode;
        }
        
        newNode.nextNode = currNode.nextNode;
        currNode.nextNode = newNode;

        this.size++;

    }

    removeAt(index) {
        let prevNode = this.head;

        for (let i=0; i < index-1; i++){
            prevNode = prevNode.nextNode;
        }

        let nextNode = prevNode.nextNode.nextNode;
        let currNode = prevNode.nextNode;

        prevNode.nextNode = nextNode;
        currNode.nextNode = null;

        this.size--;

    }
}


class Node {
    constructor () {
        this.value = null;
        this.nextNode = null;
    }
}

export default LinkedList;