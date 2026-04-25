




// function changeContent() {
//      const header = document.getElementById("header");
    
//     if (header) {
//         header.textContent = "welcome to the dom";
//     } else {
//         console.error("Element with ID 'header' not found.");
//     }
// }


// function changeElement() {
//     const textElements = document.getElementsByClassName('text');

//     if (textElements.length > 0) {
//         textElements[0].innerHTML = "This is the <strong> result </strong>!";
//     } else {
//         console.error("No elements with class 'text' found.");
//     }
// }

// const btnAdd = document.getElementById('btnAdd');
const list = document.querySelector('.list')
// btnAdd.addEventListener('click', addItem);
function addItem() {
   
    console.log("Adding item to the list...");
    const newItem = document.createElement('li');
    newItem.textContent = "New Item";
    console.log({newItem});
    list.appendChild(newItem);
}


function removeItem() {
    const lastItem = list.lastElementChild;
    if (lastItem) {
        list.removeChild(lastItem);
    } else {
        console.error("No items to remove.");
    }
}