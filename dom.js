var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click',removeItem); 

// add item func
function addItem(e){
    e.preventDefault();
    //  get input value
    var newItem = document.getElementById('item').value;
    // create new element
    var li = document.createElement('li');
    li.className = "list-group-item"
    // add text node
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
    editBtn.appendChild(document.createTextNode('E'));
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


