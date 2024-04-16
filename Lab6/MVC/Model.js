class ShoppingItem { 
    constructor(name, quantity, priority, storeName, storeSection, price) { 
        this.name = name; 
        this.quantity = quantity; 
        this.priority = priority; 
        this.storeName = storeName; 
        this.storeSection = storeSection; 
        this.price = price; 
    } 
} 

class ShoppingListModel { 
    constructor() { 
        this.items = []; 
    } 
    
    addItem(item) {
    this.items.push(item); 
} 
} 

const shoppingListModel = new ShoppingListModel();