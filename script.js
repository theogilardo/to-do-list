
var text = document.getElementById('text-input')
var btn = document.getElementById('btn-input')
var listItems = document.querySelector('.list-items')
var btnDelete = document.querySelector('.btn-delete')
var btnEdit = document.querySelector('btn-edit')

    btnDelete.addEventListener('click', deleteItem);

    btn.addEventListener('click', addItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            addItem();
        }
    });


function addItem(){

    var  newDiv, resultText, newItem, deleteBtn;

    // Add the Div containing input text + delete button
      if (text.value !== '') {

        // Add Div

            // Add Div Element
            newDiv = document.createElement('div')

            // Add Class on Div
            newDiv.classList.add('flex')

            // Attach div to the item container
            listItems.appendChild(newDiv)

        // Add the Item with text
            // Create new Item and store in a variable
            newItem = document.createElement('li')

            // Retrieve Text input
            resultText = text.value

            // Add the new input value to the new item created
            newItem.textContent = resultText

            // Add the style class to item
            newItem.classList.add('item')
            newItem.classList.add('minContent')

            // Attach the new item to the list ul
            newDiv.appendChild(newItem);

            // Reset Text to ""
            text.value = "";


        // Add the button

            // Create new Item and store in a variable
            deleteBtn = document.createElement('button')

            // Add delete x to button
            deleteBtn.textContent = 'X'

            // Add the style class to item
            deleteBtn.classList.add('btn-delete')

            // Allow click delete
            deleteBtn.addEventListener('click', deleteItem)

            // Attach the new item to the list ul
            newDiv.appendChild(deleteBtn);

      }


};

function deleteItem() {
    // Select parent (parent node) and apply class hidden to it
    this.parentNode.classList.add('hide')
}












