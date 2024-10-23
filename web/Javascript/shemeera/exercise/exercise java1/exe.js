
function openPopup(){
  
event.preventDefault();
let name=document.querySelector('#name');
let username=document.querySelector('#username');
let email=document.querySelector('#email');
let phone=document.querySelector('#phone');
let mydiv=document.querySelector('#mydiv');
let big=document.querySelector('#big');
let allvalues=document.querySelector('#allvalues');

big.innerHTML=name.value;
allvalues.innerHTML= "username :"+username.value+"\n"+"email:"+email.value+"\n"+"phone:"+phone.value;
console.log(allvalues);

mydiv=document.getElementById('mydiv').style.display="block";


}
function closepopup(){
 mydiv.style.display="none";
}


