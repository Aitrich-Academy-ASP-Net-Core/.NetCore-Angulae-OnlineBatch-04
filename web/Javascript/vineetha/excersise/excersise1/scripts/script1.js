function formValidation()
{
  document.getElementById('form1').addEventListener('submit',function(event){
    // var email=document.form1.email.value;  
    // var pwd=document.form1.pwd.value; 
    // const form1=document.getElementById('form1').value;
    const email=document.getElementById('email').value ;
    const pwd=document.getElementById('password').value;
    let errormsg='';
    if(!email)
    {
      
        errormsg +="*****email can not be empty*****";
    }
    
            if (!email.includes('@'))
                 {
                    errormsg +="*****not a valid email*****";
                 }
         if(!pwd) 
            {
                errormsg +="*****password can not be empty*****";
            }   
            if(errormsg)
                {
                    event.preventDefault();
                    document.getElementById('errormsg').innerText.errormsg;
                }    
            });
}
