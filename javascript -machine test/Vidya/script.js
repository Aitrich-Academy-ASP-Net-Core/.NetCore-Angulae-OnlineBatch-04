//Question 2
let item = document.getElementById('itemInput');
let quantity = document.getElementById('itemQuantity');
let shoppingList = document.getElementById('shoppingList')
let totalQuantity = document.getElementById('totalQuantity');
document.getElementById('addItemButton').addEventListener('click', function (event) {
    event.preventDefault();
    if (item.value != "" && item.value != "")
         { 
           
        let list = document.createElement('li');
        list.classList.add('li');
        let deletebutton = document.createElement('button');
        deletebutton.textContent = "Delete";
        deletebutton.classList.add('del')
        list.textContent = item.value + ": " + quantity.value + " ";
        list.appendChild(deletebutton)
        shoppingList.appendChild(list);
         
    //   let quantity=quantity.value;
        function addQty(){
        let addQuantity=0;

      (quantity.value).array.forEach(element => {
        addQuantity+= element;

        console.log(addQuantity);
        
      });
       
        }
      
        totalQuantity.innerHTML="Total Quantity: "+quantity.value;

        //  totalQuantity.innerHTML="Total Quantity: "+addQuantity;
        item.value = "";
        quantity.value = "";

        deletebutton.addEventListener('click', function (event) {
            event.preventDefault();
            shoppingList.removeChild(shoppingList.firstElementChild);

        })

    }
    else {
        document.getElementById('msg').textContent = "Invalid Entry";
    }


})

