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