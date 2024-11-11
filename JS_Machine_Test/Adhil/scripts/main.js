
let add_btn= document.getElementById("add_btn")

let list=document.createElement("ul")
list.classList.add("list")
list.setAttribute("type","circle")

let total_qty=document.getElementById("total_qty")
total_qty.innerText="0"

add_btn.addEventListener("click",()=>{
    
    let input=document.getElementById("input").value
    let input2=document.getElementById("input2").value
    let list_item=document.createElement("li")
    let qty=document.createElement("span")
    let delete_btn=document.createElement("button")
    delete_btn.classList.add("delete_btn")
    qty.classList.add("qty")
    delete_btn.innerText=`Delete ${input}`
    delete_btn.addEventListener("click",()=>{
        total_qty.innerText=parseInt(total_qty.innerText)-parseInt(input2)
        list.removeChild(list_item)
        
    });
    qty.innerHTML=`- Quantity: <strong>${input2}</strong>`
    let num=1

    let itemError=document.getElementById("itemError")
    let qtyError=document.getElementById("qtyError")
    itemError.innerText=""
    qtyError.innerText=""
    if(input==""){
        
        itemError.innerText="Please Fill Item Field"
        

    }else if(parseInt(input)+num>=0){
        
        itemError.innerText="Please Enter String Items in item field"
        

    }else if(input2==""){
       
       qtyError.innerText="Please Fill Quantity Field"

    }
    else{
        list_item.innerHTML=`<strong>${input}</strong>`
        total_qty.innerText=parseInt(total_qty.innerText)+parseInt(input2)
        
        document.body.appendChild(list).appendChild(list_item).appendChild(qty).appendChild(delete_btn)
        document.getElementById("input").value=""
        document.getElementById("input2").value=""
    }
    
    

    

});