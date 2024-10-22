
var fullname = document.getElementById("fName");
var username = document.getElementById("uName");
var email = document.getElementById("email");
var pnumber = document.getElementById("phoneNo");
var rfname = document.getElementById("rFname");
var runame =document.getElementById("rUname");
var remail = document.getElementById("rEmail")
var rphone =document.getElementById("rPhone");
var rbutton =document.getElementById("rBtn");
var rResult =document.getElementById("result");

document.getElementById("btn").addEventListener("click",function(){

    if(fullname.value&&username.value&&email.value&&pnumber.value !=""){
       
        var f = fullname.value;
        var u = username.value;
        var e = email.value;
        var p = pnumber.value;
        rfname.textContent = f;
        runame.textContent ="User Name:"+ u;
        remail.textContent = "Email:"+ e;
        rphone.textContent ="Phone:"+ p;
        rResult.style.display="block";
         document.getElementById("mainbox").style.display ="block";
       
    }

    else{
        alert("Please enter all form details")
    }

})
    
    function cbtnClose(){
    rResult.style.display="none";
    document.getElementById("mainbox").style.display ="none";
   // document.body.style.opacity =1;

}


 