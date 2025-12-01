import LinkedList from './linkedList.js';

let list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('snake');

console.log(list.head);
console.log(list.tail);
console.log(list.size);

list.toString();