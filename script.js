"use strict";

let formRegistration = document.getElementById("registration");

formRegistration.addEventListener("submit", function(event){
    event.preventDefault();
    let errors = {};
    let form = event.target;

    let username = document.getElementById("usernamefield").value;

    if(username == "" && username.length < 5){
        errors.username = "Username field cant be empty and must be more than 5 characters";
    }

    let password = document.getElementById("passwordfield").value;
    let repassword = document.getElementById("repasswordfield").value;

    if(password == ""){
        errors.passw = "Password field can not be empty";
    }
    if(password != repassword){
        errors.passw2 = "Passwords do not match";
    }

    let email = document.getElementById("emailfield").value;

    if(email == ""){
        errors.email = "Email field can not be empty";
    }

    let agree = document.getElementById("agree").checked;
    if (!agree) {
        errors.agree = "You must agree terms and conditions";
    }

    let gender = false ;
    form.querySelectorAll('[name="gender"]').forEach( item =>{
        if(item.checked) {
            gender = true ;
        }
    })

    if(!gender) {
       errors.gender = "Please select your gender"; 
    }

    console.log(errors);

    form.querySelectorAll(".error-text").forEach( (element) => {
        element.textContent = " ";
    })
    for (let item in errors){
       let spanContent = document.getElementById("error_" + item);
       if(spanContent){
        spanContent.textContent = errors[item];
       }
    }

    if(Object.keys(errors) == 0) {
        form.submit();
    }
});
    

let showPassword = document.getElementById("passwordfield");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function(){
    if(showPassword.type == "password"){
        showPassword.setAttribute("type", "text");
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }else{
        showPassword.setAttribute("type", "password");
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
});


let showPassword2 = document.getElementById("repasswordfield");
let toggleIcon2 = document.getElementById("toggleIcon2");

toggleIcon2.addEventListener("click", function(){
    if(showPassword2.type == "password"){
        showPassword2.setAttribute("type", "text");
        toggleIcon2.classList.remove("fa-eye");
        toggleIcon2.classList.add("fa-eye-slash");
    }else{
        showPassword2.setAttribute("type", "password");
        toggleIcon2.classList.remove("fa-eye-slash");
        toggleIcon2.classList.add("fa-eye");
    }
});

