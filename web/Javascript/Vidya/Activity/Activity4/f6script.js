let eu = document.getElementById("errorUser");
 let ee = document.getElementById("errorEmail");
 let ep = document.getElementById("errorPassword");


 //const emailRegx = /@./ 
 const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const passwordRegx = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
function isValid()
{  let x = document.getElementById("uname").value;
  let y = document.getElementById("email").value;
  let p =document.getElementById("pwd").value;
  let cp = document.getElementById("cPwd").value;

 if(x.length<5)
 {
  
  eu.textContent="User Name should be atleast 5 character long";
  return false;
  
 }
  else if(!emailRegx.test(y))
 {  
 
 ee.textContent ="Please enter valid email";
 return false;

}else if(p!== cp ||!passwordRegx.test(p)){

 ep.textContent ="Please enter valid password";
 return false;
}
else{
 alert("Form Submited Successfully")

  
 }
}
