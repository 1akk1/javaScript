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



myform.addEventListener('submit' , onSubmit);

function onSubmit(e) {
    e.preventDefault();
// creating object
    let myObj = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        time : document.getElementById('time').value 
    };
// to make the object a string
    let myObj_serial = JSON.stringify(myObj);
    // setting the key value to  name element and creating different element
    localStorage.setItem(document.getElementById('name').value , myObj_serial);
}