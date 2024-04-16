function addItem() { 
    const itemName = document.getElementById("itemName").value; 
    const itemQuantity = document.getElementById("itemQuantity").value; 
    const itemPriority = document.getElementById("itemPriority").value; 
    const storeName = document.getElementById("storeName").value; 
    const storeSection = document.getElementById("storeSection").value;
    const itemPrice = document.getElementById("itemPrice").value; 
    const newItem = new ShoppingItem(itemName, itemQuantity, itemPriority, storeName, storeSection, itemPrice); 
    
    shoppingListModel.addItem(newItem); 
    shoppingListView.renderItemList(newItem); 
    shoppingListView.renderOrderSummary(newItem); 
}