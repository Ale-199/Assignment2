/* 
Author:Alejandro zhengzheng
Student ID: 301083081
Date:2022 - 02 -05
 */

console.log('Goes to the client side.');

if (getTitle == "Buinsess contact List") {
    let deleteButtons = document.querySelectorAll('.btn-danger');

    for (button of deleteButtons) {
        button.addEventListener('click', (event) => {
            if (!confirm("Are you sure?")) {
                // Cancels the action
                event.preventDefault();
            }
        });
    }
}


if (getTitle == "Sign-up Form") {
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange);
}


function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');

    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}

//add a eventlistener to the button
document.getElementById("cont-btn").addEventListener("click", email);

//this function will alert the message and back to the first page
function email() {
    alert("Thanks for your message");
    window.location = '/';
}