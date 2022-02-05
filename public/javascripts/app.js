/* 
Author:Alejandro zhengzheng
Student ID: 301083081
Date:2022 - 02 -05
 */
//add a eventlistener to the button
document.getElementById("cont-btn").addEventListener("click", email);

//this function will alert the message and back to the first page
function email() {
    alert("Thanks for your message");
    window.location = '/';
}