const submit = document.getElementById('submit');
const password = document.getElementById('password');
const email = document.getElementById('email');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
submit.addEventListener('click',function(event){
    const passwordValue = password.value;
    const emailValue = email.value;
    let errorMessage = '';
    if(passwordValue.length < 8){
        errorMessage +='The password must be at least 8 characters long.\n';
    }
    if(!emailRegex.test(emailValue)){
        errorMessage+="Please enter valid email adress!\n";
    }

    if(errorMessage){
        alert(errorMessage);
        event.preventDefault();
        return; /*prevents the rest of the code to be excuted */
    }
  console.log(`email adress: ${emailValue}`);
  console.log(`password: ${passwordValue}`);
});
