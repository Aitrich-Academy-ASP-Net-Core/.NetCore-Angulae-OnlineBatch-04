

document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errormsg = document.getElementById('errormsg');
    const errormessage=document.getElementById('errormessage');
    if(!email)
            {
              
              
                errormsg.innerText='*****email can not be empty*****';
                return
            }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errormsg.innerText = 'Please enter a valid email address.';
        return;
    }
    errormsg.innerText = '';
    if(!password)
    {
        errormessage.innerText='****password can not be empty***';
        return
    }
 
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        errormessage.innerText = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        return;
    }

    errormsg.innerText = '';
    errormessage.innerText='';
    // alert('Login successful!');
});
