// Storage controller

// Item controller
const ItemCtrl = (function(){
    // Item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data stracture / state
    const data = {
        items: [
            {id: 0, name: 'Rice', calories: 1000},
            {id: 1, name: 'Beef', calories: 1200},
            {id: 2, name: 'Cake', calories: 700},
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Return the module
    // Public method
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name, calories){
            let id;

            // Generate ID
            if( data.items.length > 0 ){
                id = data.items[data.items.length - 1].id + 1;
            } else {
                id = 0;
            }

            // Make sure calories input is number
            calories = Number.parseInt(calories);

            // Create new item
            let newItem = new Item(id, name, calories);

            // Push item to the deta stracture
            data.items.push(newItem);

            return newItem;
        },
        logData: function(){
            return data;
        }
    }
})();

// UI controller
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list',
        addItem: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
    }

    // Return the module
    // Public method
    return {
        renderItems: function(items){
            let html = '';

            items.forEach(element => {
                console.log(element);
                html += `
                <li class="collection-item" id="item-${element.id}">
                    <strong>${element.name}: </strong> <em>${element.calories} Calories</em>
                    <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                    </a>
               </li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        getSelectors: function(){
            return UISelectors; // const UISelectors is private var so needed to create a getter method
        }
    }
})();

// APP controller
// Insert each controller in the main controller
const App = (function(ItemCtrl, UICtrl){
    // console.log(ItemCtrl.logData()); // for debugging

    // Add event listeners
    const loadEventListeners = function(){
        let UISelectors = UICtrl.getSelectors();

        // Add item
        document.querySelector(UISelectors.addItem).addEventListener('click', addItem);
    }

    // Add Item to the list
    const addItem = function(e){
        e.preventDefault();

        // console.log('Add');
        const inputs = UICtrl.getItemInput();

        // Check values
        if( inputs.name != '' && inputs.calories != '' ){
            ItemCtrl.addItem(inputs.name, inputs.calories);
        }
        console.log(inputs);
    }

    // Public method
    return {
        init: function(){
            // console.log('Initializing the app....');

            // Fetch items from deta stracture
            let items = ItemCtrl.getItems();

            // Populate list with items
            UICtrl.renderItems(items);

            // Event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();

/*
/// Summary ///
- Used iffe
- Followed module pattern
- 
*/