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
            // {id: 0, name: 'Rice', calories: 1000},
            // {id: 1, name: 'Beef', calories: 1200},
            // {id: 2, name: 'Cake', calories: 700},
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
        getItemById: function( id ){
            let found = null;

            data.items.forEach(function(item){
                if (item.id === id ){
                    found = item;
                }
            });

            return found;
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
        getTotalCalories: function(){
            let total = 0;
            data.items.forEach(function(item){
                total += item.calories;
            });

            // Set total cal in the data stracture
            data.totalCalories = total;
            return data.totalCalories;
        },
        updateItem: function(name, calories){
            let found = null;

            data.items.forEach(function(item){
                // Match the id where to update the item
                if (item.id === ItemCtrl.getCurrentItem().id ){
                    item.name = name;
                    item.calories = parseInt(calories);
                    found = item;
                }
            });

            return found;
        },
        setCurrentItem: function( item ){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
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
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',
        collectionItem: '.collection-item'
    }

    // Return the module
    // Public method
    return {
        renderItems: function(items){
            let html = '';

            items.forEach(element => {
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
        addListItem: function(item){
            let li               = document.createElement('li');
                li.className     = 'collection-item';
                li.id            = `item-${item.id}`;

                li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>`;
              
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function(item){

        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearFields: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        clearEditState: function(){
            UICtrl.clearFields();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addItem).style.display = 'inline';
        },
        addItemToFrom: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;

            // Show edit state
            UICtrl.showEditState();
        },
        showEditState: function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addItem).style.display = 'none';
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

        // Disable enter button on submit
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });

        // Edit item
        document.querySelector(UISelectors.itemList).addEventListener('click', editItem);

        // Item update submit
        document.querySelector(UISelectors.updateBtn).addEventListener('click', updateItem);
    }

    // Add Item to the list
    const addItem = function(e){
        e.preventDefault();

        // console.log('Add');
        const inputs = UICtrl.getItemInput();

        // Check values
        if( inputs.name != '' && inputs.calories != '' ){
            // Add item to data structure
            let newItem = ItemCtrl.addItem(inputs.name, inputs.calories);

            // Add item to the UI
            UICtrl.addListItem(newItem);

            // Get total calories
            let totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Clear fields
            UICtrl.clearFields();
        }
    }

    const editItem = function(e){
        e.preventDefault();

        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(e.target.classList);
        if( e.target.classList.contains('edit-item') ){
            // Get list item id 
            let listId = e.target.parentNode.parentNode.id;

            // Break into an array
            let listIdArr = listId.split('-');

            // Actual id
            let id = parseInt(listIdArr[1]);

            // Get item from data stracture
            let itemToEdit = ItemCtrl.getItemById(id);

            // Set current item for edit state
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToFrom();
        }
    }

    const updateItem = function(e){
        e.preventDefault();

        // Update data to data stracture
        let name     = UICtrl.getItemInput().name;
        let calories = UICtrl.getItemInput().calories;
        let item = ItemCtrl.updateItem(name, calories);

        // Update data to list item UI
        UICtrl.updateListItem(item);

        // Update total calories UI
        let totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Clear update state
        UICtrl.clearEditState();
        
        // currentItem
        let currentItme = ItemCtrl.getCurrentItem();
        ItemCtrl.setCurrentItem();
    }

    // Public method
    return {
        init: function(){
            // console.log('Initializing the app....');
            // Don't show edit state field for first laod
            UICtrl.clearEditState();

            // Fetch items from deta stracture
            let items = ItemCtrl.getItems();

            // Populate list with items
            UICtrl.renderItems(items);

            // Show total calories for first load
            let totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);

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
- Access parent dome using e.target.parentNode
- Get class list of an element suing e.target.classList
- PHP explode = JS split
- split is used like this text.split(" ")
- On click edit item
    - Get the item id
    - Get item data from data stracture by the item id
    - show the item data in the form
    - Hide add button and show update, delete and back button
    - Disable enter button
    - Update calorie total
    - Update list item
*/