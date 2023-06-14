const form = document.getElementById("form");
const users = document.getElementById("users");

form.addEventListener("submit", addUser);

function addUser(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    // creating new expense
    const newUser = document.createElement('li');
    newUser.className = 'list-group-items';
    newUser.appendChild(document.createTextNode(name + '-'));
    newUser.appendChild(document.createTextNode(email + '-'));
    newUser.appendChild(document.createTextNode(phone));
    users.appendChild(newUser);

    // adding delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm float-middle delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    newUser.appendChild(deleteBtn);
    users.appendChild(newUser);
    deleteBtn.addEventListener('click', () => {
      deleteUser(newUser);
      newUser.remove();
    });

    // add edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-middle edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    newUser.appendChild(editBtn);
    users.appendChild(newUser);
    editBtn.addEventListener('click', () => {
      editUser(newUser, name, email, phone);
    });
  }

  // get request
window.addEventListener("DOMContentLoaded", () => {
    axios
      .get('https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData')
      .then(response => {
        console.log(response);
        response.data.forEach(user => {
          addUserToList(user);
        });
      })
      .catch(error => {
        console.error(error);
      });
  });

//   post request
function addUserToList(user) {
    const { name, email, phone } = user;
    const newUser = document.createElement('li');
    newUser.className = 'list-group-items';
    newUser.appendChild(document.createTextNode(`${name} - ${email} - ${phone}`));
    users.appendChild(newUser);
  }

function addUser(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    axios
      .post('https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData', {
        name: name,
        email: email,
        phone: phone,
      })
      .then(response => {
        console.log(response);
        addUserToList(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    form.reset();
  }

  // delete request
function deleteUser(userElement) {
    const userId = userElement.dataset.id;
    axios
      .delete(`https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData/${userId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // put request
function editUser(userElement, name, email, phone) {
    const userId = userElement.dataset.id;

    axios
      .put(`https://crudcrud.com/api/e140e4f94e344e999514a05b05cc827c/savingData/${userId}`, {
        name: name,
        email: email,
        phone: phone,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }