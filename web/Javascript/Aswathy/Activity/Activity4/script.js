const name = document.getElementById("uname");
const email=document.getElementById("email");
const form=document.getElementById("formi");
const nameerrormessage=document.getElementById("nameerrormessage")
const emailerrormessage=document.getElementById("emailerrormessage")
form.addEventListener("submit",(e)=>
{
    if(uname.value==""||uname.value == null)
    {
        e.preventDefault();
       nameerrormessage.innerHTML="Name is required"
    }
     
    if(email.value=="" ||email.value==null)
    {
        e.preventDefault()
        emailerrormessage.innerHTML="Email is required"
    }

})