let sendmssg=document.getElementById("sendbtn")
let chatbox=document.getElementById("chatboxborder")

sendmssg.addEventListener("click",function (){
   
   chatbox.style.border="none"
   
   let input = document.getElementById("message").value;
   if (!input.trim()) return;  // Avoid sending empty messages
   
   

   
   
   
   

   let chatBubble = document.createElement("div");
   
   chatBubble.classList.add("chat-bubble"); // Add chat-bubble class


  
   
   
   
   chatBubble.textContent = input;
   
   
   
   
   
 
   
   

  document.querySelector("body").appendChild(chatBubble)
 // Clear the input field after sending the message
 document.getElementById("message").value = "";
  // Scroll to the bottom of the page
// document.documentElement.scrollTop = document.documentElement.scrollHeight;
window.scrollTo({
  behavior:'smooth',
  top:document.body.scrollHeight
})
 
  
            
})