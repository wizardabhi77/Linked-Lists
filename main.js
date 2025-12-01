import LinkedList from './linkedList.js';

let list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('snake');
list.prepend('lion');
list.append('rabbit');

list.pop();

list.insertAt('frog', 2);

console.log(list.head);
console.log(list.tail);
console.log('SIZE:'+list.size);

list.toString();

list.at(3);

console.log(list.contains('dog'));
console.log(list.find('cat'));

console.log(list.contains('dragon'));
console.log(list.find('dragon'));

list.removeAt(3);

list.toString();