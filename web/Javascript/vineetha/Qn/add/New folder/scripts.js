document.getElementById('addItemButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const quantityInput = document.getElementById('quantityInput');

    const itemName = itemInput.value.trim();
    const quantity = parseInt(quantityInput.value.trim());

    if (!itemName || isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid item name and quantity.');
        return;
    }

    const itemList = document.getElementById('itemList');
    const li = document.createElement('li');

    li.innerHTML = `${itemName} - Quantity: ${quantity} <button class="removeButton">Remove</button>`;
    itemList.appendChild(li);

    updateTotalQuantity();

    li.querySelector('.removeButton').addEventListener('click', function() {
        itemList.removeChild(li);
        updateTotalQuantity();
    });

    itemInput.value = '';
    quantityInput.value = '';
});

function updateTotalQuantity() {
    const items = document.querySelectorAll('#itemList li');
    let totalQuantity = 0;

    items.forEach(item => {
        const quantity = parseInt(item.innerHTML.match(/Quantity: (\d+)/)[1]);
        totalQuantity += quantity;
    });

    document.getElementById('totalQuantity').innerText = totalQuantity;
}