var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click',removeItem); 

filter.addEventListener('keyup',filterItems)


var btclas = document.getElementsByTagName('li');

for(i=0;i<btclas.length;i++){
    var newBtn = document.createElement('button');
    newBtn.className = 'btn btn-info btn-sm float-right delete';
    newBtn.appendChild(document.createTextNode('Edit'))
    btclas[i].appendChild(newBtn);
}

// add item func
function addItem(e){
    e.preventDefault();
    //  get input value
    
    var newItem2 = document.getElementById('item').value;
    var newItem = document.getElementById('description').value;
    // create new element
    var li = document.createElement('li');
    li.className = "list-group-item"
    // add text node
    li.appendChild(document.createTextNode(newItem2));
    li.appendChild(document.createTextNode(newItem));

    // create del btn
    var deleteBtn = document.createElement('button');
    // add class to del btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // append btn to li
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);

    // create edit btn
    var editBtn = document.createElement('button');
    //  add btn class
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    // append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    // append btn to li
    li.appendChild(editBtn);
    // append li to list
    itemList.appendChild(li);

}


//  remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){

        var itemName = item.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
        });
}