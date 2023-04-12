
var secondItem = document.querySelectorAll('li');
secondItem[1].style.color='green';
console.log(secondItem)



var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i < odd.length;i++){
     odd[i].style.backgroundColor = 'green';
}
