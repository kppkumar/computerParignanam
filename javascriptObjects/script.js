var users = [];
var userName = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var userList = document.getElementById("userList");

function addNewUser() {
    let user = {};
    if (userName.value == "") {
        message.innerText = "Please provide name";
        return;
    }
    if (email.value == "") {
        message.innerText = "Please provide email ID";
        return;
    }
    if ( !validateEmail(email.value) ) {
        message.innerText = "Not a valid email ID";
        return;
    }
    for (x in users) {
        if(users[x].emailID == email.value) {
            message.innerText = "Email already exists!";
            return;
        }
    }
    user.userName = userName.value;
    user.emailID = email.value;
    users.push(user);

    message.innerHTML = "&nbsp;"
    while(userList.rows.length > 1) {
        userList.deleteRow(1);
    }
    for ( x in users) {
        let userRow = document.createElement("tr");
        let nameVal = document.createElement("td");
        let emailVal = document.createElement("td");
        nameVal.innerText = users[x].userName;
        emailVal.innerText = users[x].emailID;
        userRow.appendChild(nameVal);
        userRow.appendChild(emailVal);
        userList.appendChild(userRow);
    }
}
function validateEmail(email) {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}