// const btn = document.querySelector('.btn');

// btn.addEventListener('click' ,() =>  {
//     btn.styles.color='green'

// });
// btn.addEventListener('mouseover' , () => {
//     btn.style.color='blue';

// });
// btn.addEventListener('mouseout', () => {
//     btn.style.color='red';
// });      



// myform.addEventListener('submit' , onSubmit);
// deletes.addEventListener('click' , onClick);
// edits.addEventListener('click', onEdit);

// function onSubmit(e) {
//     e.preventDefault();
// // creating object
//     let myObj = {
//         name : document.getElementById('name').value,
//         email : document.getElementById('email').value,
//         phone : document.getElementById('phone').value,
//         time : document.getElementById('time').value 
//     };
// // to make the object a string
//     let myObj_serial = JSON.stringify(myObj);
//     var objName = document.getElementById('email').value;
//     // setting the key value to  name element and creating different element
//     localStorage.setItem(objName, myObj_serial);
// }
// function onClick(e){
//     e.preventDefault();
    
//     localStorage.removeItem(document.getElementById('email').value);
//     document.getElementById("myform").reset();
// }
// function onEdit(e){
//     e.preventDefault();
//     localStorage.removeItem(document.getElementById('email').value);
// }

myform.addEventListener('submit' , onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // var name = document.getElementById('name').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    // var time = document.getElementById('time').value; 

    axios
        .post('https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData',{
            name : document.getElementById('name').value,
            email : document.getElementById('email').value,
            phone : document.getElementById('phone').value,
            time : document.getElementById('time').value,

        })

}