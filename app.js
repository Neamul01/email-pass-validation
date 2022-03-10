const getId = id => document.getElementById(id);
const reg="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
getId('submit-btn').addEventListener('click', validate = () => {
    const emailField = getId('input-email');
    const passField = getId('input-password');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value)) {
        getId('email-success').classList.remove('display-none');
        getId('email-fail').classList.add('display-none');
        emailField.style.marginBottom='0';
    }
    else {
        getId('email-success').classList.add('display-none');
        getId('email-fail').classList.remove('display-none');
        emailField.style.marginBottom='0';
    }
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passField.value)){
        getId('pass-success').classList.remove('display-none');
        getId('pass-fail').classList.add('display-none');
    }
    else{
        getId('pass-success').classList.add('display-none');
        getId('pass-fail').classList.remove('display-none');
    }
})
