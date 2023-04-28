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
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var time = document.getElementById('time').value; 
    
    localStorage.setItem('name',name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('time', time);
}