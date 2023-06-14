myform.addEventListener('submit' , onSubmit);
deletes.addEventListener('click' , onClick);
edits.addEventListener('click', onEdit);




//  get request
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get('https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData')
        .then(response => {
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                console.log(response.data[i]);  
            }
        })
        .catch(error => {
            console.error(error)
        })
})
// post request
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
// delete request
function onClick(e){
    e.preventDefault();
    const userId = e.target.dataset.id;
    deleteUser(userId);
    expenses.removeChild(newExpense);
    document.getElementById("form").reset();
}
// delete function
function deleteUser(userId){
    axios  
        .delete(`https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData/${userId}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

// put request
function onEdit(e){
    e.preventDefault();
    const userId = e.target.dataset.id;
    document.getElementById('name').value = e.target.dataset.name;
    document.getElementById('email').value = e.target.dataset.email;
    document.getElementById('phone').value = e.target.dataset.phone;
    document.getElementById('time').value = e.target.dataset.time;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;
    editUser(userId,name,email,phone,time);
       
}
// edit function
function editUser(userId,name,email,phone,time){  
    axios
        .post(`https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData/${userId}`,{
        name : `${name}`,
        email : `${email}`,
        phone : `${phone}`,
        time : `${time}`
    })
    .then(response => {
        console.log(response); 
        })
    .catch(err => {
        console.error(err);
        });
}