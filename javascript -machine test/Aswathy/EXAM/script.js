
        const itemInput=document.getElementById('itemInput');
        const quantityInput=document.getElementById('quantityInput');
        const addItemButton=document.getElementById('addItemButton');
        const shoppingList=document.getElementById('shoppingList');
        const totalQuantityElement=document.getElementById('totalQuantity');
        const totalQuantitydisplay=document.getElementById('totalQuantity');
        let totalQuantity=0;
        addItemButton.addEventListener('click',addItem);
        function addItem()
        {
            const itemName=itemInput.value.trim();
            const quantity=parseInt(quantityInput.value.trim());
            if(itemName && quantity > 0)
                {
                    const listItem = document.createElement('li');
                    listItem.innerHTML=`${itemName} * ${quantity}
                    <button class="delete-button" onclick="deleteItem(this)"> Delete </button>`;
                    shoppingList.appendChild(listItem);
                    totalQuantity=totalQuantity+quantity;
                    totalQuantityElement.textContent=`Total quantity: ${totalQuantity}`;
                    itemInput.value='';
                    quantityInput.value='';
                }

            }
        function deleteItem(button,quantity)
        {
            
            button.parentElement.remove();
            totalQuantity(-quantity);
           
        function updatetotalQuantity(quantity)
        {
            totalQuantity-=quantity;
            totalQuantityElement.textContent=`Total quantity: ${totalQuantity}`;
          
        }
    }