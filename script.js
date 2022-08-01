let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let verify = document.querySelector('.verify');
let error = document.querySelectorAll('.error');


confirmPassword.addEventListener("keyup", () => {
    if (password.value === confirmPassword.value){
        verify.textContent = "*Passwords match";
        verify.style.color = "green";
        error[0].style.borderColor = "green";
        error[1].style.borderColor = "green";
    }
    else {
        verify.textContent = "*Passwords do not match";
        verify.style.color = "red";
        error[0].style.borderColor = "red";
        error[1].style.borderColor = "red";
    }

    if (password.value === '' && confirmPassword.value === ''){
        verify.textContent = "*Passwords must match";
        verify.style.color = "black";
        error[0].style.borderColor = "#E5E7EB";
        error[1].style.borderColor = "#E5E7EB";
    }

    if(password.value === '' && confirmPassword.value === ''){
        error[1].style.borderColor = "blue";
    }
});

password.addEventListener("keyup", () => {
    if (password.value === confirmPassword.value){
        verify.textContent = "*Passwords match";
        verify.style.color = "green";
        error[0].style.borderColor = "green";
        error[1].style.borderColor = "green";
    }
    else if(confirmPassword.value != '') {
        verify.textContent = "*Passwords do not match";
        verify.style.color = "red";
        error[0].style.borderColor = "red";
        error[1].style.borderColor = "red";
    }

    if (password.value === '' && confirmPassword.value === ''){
        verify.textContent = "*Passwords must match";
        verify.style.color = "black";
        error[0].style.borderColor = "#E5E7EB";
        error[1].style.borderColor = "#E5E7EB";
    }

    if(password.value === '' && confirmPassword.value === ''){
        error[0].style.borderColor = "blue";
    }
});


confirmPassword.addEventListener("focus", () => {
    if(password.value === '' && confirmPassword.value === ''){
        error[1].style.borderColor = "blue";
    }
});

confirmPassword.addEventListener("blur", () => {
    if(password.value === '' && confirmPassword.value === ''){
        error[1].style.borderColor = "#E5E7EB";
    }
});

password.addEventListener("focus", () => {
    if(password.value === '' && confirmPassword.value === ''){
        error[0].style.borderColor = "blue";
    }
});

password.addEventListener("blur", () => {
    if(password.value === '' && confirmPassword.value === ''){
        error[0].style.borderColor = "#E5E7EB";
    }
    if(confirmPassword.value === ''){
        error[0].style.borderColor = "#E5E7EB";
    }
});