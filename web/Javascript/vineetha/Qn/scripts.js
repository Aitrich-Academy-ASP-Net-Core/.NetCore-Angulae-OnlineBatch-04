document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const li = document.createElement('li');
            li.textContent = itemText;
            shoppingList.appendChild(li);
            itemInput.value = '';
        }
    });
});