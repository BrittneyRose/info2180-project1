"use strict";

document.addEventListener('DOMContentLoaded', function(){

    let form = document.querySelector('form');
    let mes = document.querySelector('.message');
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        var enterredEmail = document.getElementById("email").value;

        if (enterredEmail){
            mes.textContent = "Thank you! Your email address '" + enterredEmail + "' has been added to our mailing list!";
        }
        else{
            mes.textContent = "Please enter a valid email address.";
            }
    });

});









// /* Add your JavaScript to this file */
// "use strict";
// console.log("hello")
// document.addEventListener("DOMContentLoaded", function(){
//     const form = document.querySelector("form");
//     const mes = document.querySelector(".message");
//     console.log("hello2")

//     //mes.textContent = "Thank you! Your email address ${enterredEmail} has been added to our mailing list!";

//     form.addEventListener("submit", function(event){
//         event.preventDefault();
//         var enterredEmail = document.getElementById("email").value;
//         console.log(enterredEmail)

//         message.textContent = "Thank you! Your email address ${enterredEmail} has been added to our mailing list!";

//         // if (enterredEmail != none){
//         //     message.textContent = "Thank you! Your email address" + enterredEmail + "has been added to our mailing list!";
//         // }
//         // else{
//         //     message.textContent = "Please enter a valid email address.";
//         // }

//         // enterredEmail.value = "";
//     });
// });