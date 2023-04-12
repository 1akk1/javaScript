var itemList = document.querySelector('#items');
// parent
console.log(itemList.parentElement);
// lastelementchild
console.log(itemList.lastElementChild);
// firstelementgchild
console.log(itemList.firstElementChild);
// firstchild
console.log(itemList.firstChild);
// lastchild
console.log(itemList.lastChild);
// editlastelementchild
itemList.lastElementChild.textContent='4 Item';
// nextsibling
console.log(itemList.nextSibling);
// nextelementsibling
console.log(itemList.nextElementSibling);
// previoussibling
console.log(itemList.previousSibling);
// previouselementsibling
console.log(itemList.previousElementSibling); 
// editprevioussibling
itemList.previousElementSibling.style.color = 'red';




// create element
var newDiv = document.createElement('div');

//   add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// set attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('hello world');

// add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);


