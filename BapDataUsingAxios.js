myform.addEventListener('submit' , onSubmit);


window.addEventListener("DOMContentLoaded", () => {
    axios
        .get('https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData')
        .then(response => {
            console.log(response)
            for(var i=0;i<responde.data.length;i++){
                console.log(response.data[i]);
            }
        })
        .catch(error => {
            console.error(error)
        })
})

function onSubmit(e) {
    e.preventDefault();
    axios
        .post('https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData',{
            name : document.getElementById('name').value,
            email : document.getElementById('email').value,
            phone : document.getElementById('phone').value,
            time : document.getElementById('time').value,

        })
}