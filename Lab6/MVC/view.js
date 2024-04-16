class ShoppingListView { 
    constructor() { 
        this.itemList = document.getElementById("itemList").getElementsByTagName('tbody')[0]; 
        this.orderSummary = document.getElementById("orderSummary"); 
        this.itemForm = document.getElementById("itemForm"); 
    } 
    
    renderItemList(item) { 
        const newRow = this.itemList.insertRow(this.itemList.rows.length); 
        
        for (let key in item) { 
            const cell = newRow.insertCell(); 
            cell.innerHTML = item[key]; 
        } 
    } 
    
    renderOrderSummary(item) { 
        const summaryRow = this.orderSummary.insertRow(0); 
        const summaryCell = summaryRow.insertCell(0); 
        summaryCell.innerHTML = `Added: ${item.quantity} ${item.name}(s) to your order for $${parseFloat(item.price).toFixed(2)}`; 
    } 
} 

const shoppingListView = new ShoppingListView();