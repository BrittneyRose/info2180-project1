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

