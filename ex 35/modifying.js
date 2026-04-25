




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
// const list = document.querySelector('.list')
// // btnAdd.addEventListener('click', addItem);
// function addItem() {
   
//     console.log("Adding item to the list...");
//     const newItem = document.createElement('li');
//     newItem.textContent = "New Item";
//     console.log({newItem});
//     list.appendChild(newItem);
// }


// function removeItem() {
//     const lastItem = list.lastElementChild;
//     if (lastItem) {
//         list.removeChild(lastItem);
//     } else {
//         console.error("No items to remove.");
//     }
// }


 function changeImage() {

    const image = document.querySelector('#image');

    // const url = prompt("Please enter your image url")

    image.setAttribute('src', 'https://i.pinimg.com/736x/e0/c1/4a/e0c14a4f636ac24aba405c819659ffab.jpg')
    image.style.broder = "2px solid black";
 }


 

function setLightMode() {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}

function setDarkMode() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

}