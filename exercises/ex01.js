// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners - slow and fast
// (The slow runner moves one node at a time, the fast runner moves two nodes at a time. When the fast runner is at the very last node, then the slow runner will eventually be in the middle of the list. You can then return its value)

const SLL = require('../lib/SLL');

function findMiddle(list) {
  // your code here
  let runner1 = list.head
  let runner2 = list.head
  while(runner1 !== null){
    runner2 = runner2.next
    runner1 = runner1.next.next
    return runner1.data  
  }

}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3