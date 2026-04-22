console.log("hello dugsiiye");






function changeContent() {
     const header = document.getElementById("header");
    
    if (header) {
        header.textContent = "welcome to the dom";
    } else {
        console.error("Element with ID 'header' not found.");
    }
}


function changeElement() {
    const textElements = document.getElementsByClassName('text');

    if (textElements.length > 0) {
        textElements[0].innerHTML = "This is the <strong> result </strong>!";
    } else {
        console.error("No elements with class 'text' found.");
    }
}