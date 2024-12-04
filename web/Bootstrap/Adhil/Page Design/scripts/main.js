
    
 let btn=document.getElementById("signIn")
 let btn3=document.getElementById("btn")
 
 btn.addEventListener("click",()=>{
     console.log("reached");
     
                 let input=document.getElementById("input1").value
                 let input2=document.getElementById("input2").value
                 if(input!="" && input2!=""){
                     btn3.click()
                 }
 
 })
 
 btn3.addEventListener("click",()=>{
     console.log("Adad");
     
 })

 