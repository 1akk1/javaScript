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
    let myObj = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        time : document.getElementById('time').value 
    };
    let myObj_serial = JSON.stringify(myObj);
    localStorage.setItem("myObj", myObj_serial);
    console.log(myObj_serial);
}