var itemList = document.querySelector('#items');
// // parent
// console.log(itemList.parentElement);
// // lastelementchild
// console.log(itemList.lastElementChild);
// // firstelementgchild
// console.log(itemList.firstElementChild);
// // firstchild
// console.log(itemList.firstChild);
// // lastchild
// console.log(itemList.lastChild);
// // editlastelementchild
// itemList.lastElementChild.textContent='4 Item';
// // nextsibling
// console.log(itemList.nextSibling);
// // nextelementsibling
// console.log(itemList.nextElementSibling);
// // previoussibling
// console.log(itemList.previousSibling);
// // previouselementsibling
// console.log(itemList.previousElementSibling); 
// // editprevioussibling
// itemList.previousElementSibling.style.color = 'red';




// create element
var newDiv = document.createElement('div');

//   add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// set attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World');
newDiv.style.fontSize= '30px';

// add text to div
newDiv.appendChild(newDivText);

// append to DOM Header
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

//  append top DOM Item1
var newLi = document.createElement('li')
newLi.className = 'list-group-item';
newLi.id = 'yo';
var newLiText = document.createTextNode('hello world');
newLi.appendChild(newLiText);


var liLi = (document.getElementById('items'));
liLi.appendChild(newLi)
var newLiLi = (`${newLi.innerHTMl}  ${liLi.innerHTML}`);
console.log(newLi.innerHTML)
console.log(liLi.textContent)
