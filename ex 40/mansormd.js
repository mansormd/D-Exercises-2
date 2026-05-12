




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


//  function changeImage() {

//     const image = document.querySelector('#image');

//     // const url = prompt("Please enter your image url")

//     image.setAttribute('src', 'https://i.pinimg.com/736x/e0/c1/4a/e0c14a4f636ac24aba405c819659ffab.jpg')
//     image.style.broder = "2px solid black";
//  }


 

// function setLightMode() {

//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";

// }

// function setDarkMode() {

//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";

// }


//       const picker = document.getElementById("colorPicker");
// const box = document.getElementById("colorBox");
// const code = document.getElementById("colorCode");

// picker.addEventListener("input", function() {
//     box.style.backgroundColor = picker.value;
//     code.textContent = picker.value; 
// });


// function addTodo() {
//   const input = document.getElementById("todoInput");
//   const imageInput = document.getElementById("imageInput");
//   const content = document.getElementById("content");
//   const text = input.value.trim();
//   if (text === "")
//    return; 

   
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo-item");

//   const todoText = document.createElement("span");
//   todoText.textContent = text;

//   const todoContent = document.createElement("p");
//   todoContent.textContent = content.value;

  
//   const img = document.createElement("img");
//   img.src = imageInput.value || prompt("Enter image URL:"); 


//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.addEventListener("click", function() {
//     const newText = prompt("Edit your todo:", todoText.textContent);
//     if (newText) todoText.textContent = newText;
//   });


//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.addEventListener("click", function() {
//     todoDiv.remove();
//   });

// // Isku dar walxaha todo item-ka
//   todoDiv.appendChild(todoText);
//   todoDiv.appendChild(img);
//    todoDiv.appendChild(todoContent);
//   todoDiv.appendChild(editBtn);
//   todoDiv.appendChild(deleteBtn);

//   // Ku dar DOM-ka
//   document.getElementById("todoContainer").appendChild(todoDiv);

  
//   input.value = "";
//   imageInput.value = "";
//   content.value = "";
// }

// // Dhageyso dhacdooyinka
// document.getElementById("addBtn").addEventListener("click", addTodo);

// document.getElementById("todoInput").addEventListener("keypress", function(e) {
//   if (e.key === "Enter") addTodo();
// });


// const toggleButton= document.querySelector(".toggle-button")
// const navbar =document.querySelector('.navbar')

// toggleButton.addEventListener("click", function(envent){
//      envent.preventDefault()
//     navbar.classList.toggle("active")
// })



// const translateBtn = document.getElementById("translateBtn");   
// const languages = {
//     en: "English",
//     so: "Somali",
//     ar: "Arabic",
//     fr: "French",
//     es: "Spanish",
//     de: "German",
//     it: "Italian",
//     tr: "Turkish",
//     sw: "Swahili",
//     am: "Amharic",
//     zh: "Chinese",
//     ru: "Russian",
//     hi: "Hindi",
//     pt: "Portuguese",
//     ja: "Japanese",
//     ko: "Korean"
// };
// const toSelect = document.getElementById("toLang");

// for (let code in languages) {
//     const option1 = document.createElement("option");
//     option1.value = code;
//     option1.textContent = languages[code];

//     const option2 = document.createElement("option");
//     option2.value = code;
//     option2.textContent = languages[code];

//     fromSelect.appendChild(option1);
//     toSelect.appendChild(option2);
// }

// fromSelect.value = "en";
// toSelect.value = "so";

// //         <!-- // /* 🔄 TRANSLATE FUNCTION */
// async function translateText() {
//     const text = document.getElementById("inputText").value.trim();
//     const from = fromSelect.value;
//     const to = toSelect.value;
//     const output = document.getElementById("outputText");

//     if (text === "") {
//         output.innerText = "Fadlan wax qor!";
//         return;
//     }

//     output.innerText = "Waa la turjumayaa...";

//     try {
//         const response = await fetch(
//             `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`
//         );

//         const data = await response.json();

//         console.log(data);

//         output.innerText = data.responseData.translatedText;

//     } catch (error) {
//         console.error(error);
//         output.innerText = "Qalad ayaa dhacay ❌";
//     }
// }



// document.addEventListener("DOMContentLoaded", function () {

//     const languages = {
//     ar: "Arabic",
//     so: "Somali",
//     en: "English",
//     fr: "French",
//     es: "Spanish",
//     de: "German",
//     it: "Italian",
//     tr: "Turkish",
//     sw: "Swahili",
//     am: "Amharic",
//     zh: "Chinese",
//     ru: "Russian",
//     hi: "Hindi",
//     pt: "Portuguese",
//     ja: "Japanese",
//     ko: "Korean"
//     };

//     const fromSelect = document.getElementById("fromLang");
//     const toSelect = document.getElementById("toLang");

//     // buuxi dropdown
//     for (let code in languages) {
//         const option1 = document.createElement("option");
//         option1.value = code;
//         option1.textContent = languages[code];

//         const option2 = document.createElement("option");
//         option2.value = code;
//         option2.textContent = languages[code];

//         fromSelect.appendChild(option1);
//         toSelect.appendChild(option2);
//     }

//     fromSelect.value = "en";
//     toSelect.value = "so";

//     // FUNCTION
//     window.translateText = async function () {
//         const text = document.getElementById("inputText").value.trim();
//         const from = fromSelect.value;
//         const to = toSelect.value;
//         const output = document.getElementById("outputText");
//         if (text === "") {
//             output.innerText = "Fadlan wax ku qor mesha aad ka tagtay!";
//             return;
//         }
//         output.innerText = "Waa la turjumayaa...";
//         try {
//             const response = await fetch(
//                 `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`
//             );

//             const data = await response.json();

//             output.innerText = data.responseData.translatedText;

//         } catch (error) {
//             console.error(error);
//             output.innerText = "Qalad ayaa dhacay ❌";
//         }
//     };

// });



const video = document.getElementById("video");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const videos = [
    { src: "https://www.w3schools.com/html/movie.mp4" },]
    { src: "https://www.w3schools.com/html/mov_bbb.mp4" }

let index = 0;

function loadVideo(i) {
    video.src = videos[i].src;
    video.load();
    play.innerText = "▶";
}

loadVideo(index);
play.onclick = () => {
    if (video.paused) {
        video.play();
        play.innerText = "⏸";
    } else {
        video.pause();
        play.innerText = "▶";
    }
};

next.onclick = () => {
    index = (index + 1) % videos.length;
    loadVideo(index);
    video.play();
    play.innerText = "⏸";
};

prev.onclick = () => {
    index = (index - 1 + videos.length) % videos.length;
    loadVideo(index);
    video.play();
    play.innerText = "⏸";
};

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
}

video.ontimeupdate = () => {
    if (!video.duration) return;

    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + "%";

    current.innerText = formatTime(video.currentTime);
    duration.innerText = formatTime(video.duration);
};

progressBar.onclick = (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    video.currentTime = (clickX / width) * video.duration;
};

volume.oninput = (e) => {
    video.volume = e.target.value;
};

speed.onchange = (e) => {
    video.playbackRate = parseFloat(e.target.value);
};

video.onended = () => {
    next.click();
};

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Space":
            e.preventDefault();
            play.click();
            break;
        case "ArrowRight":
            video.currentTime = Math.min(video.currentTime + 5, video.duration);
            break;
        case "ArrowLeft":
            video.currentTime = Math.max(video.currentTime - 5, 0);
            break;
        case "ArrowUp":
            e.preventDefault();
            video.volume = Math.min(video.volume + 0.1, 1);
            volume.value = video.volume;
            break;
        case "ArrowDown":
            e.preventDefault();
            video.volume = Math.max(video.volume - 0.1, 0);
            volume.value = video.volume;
            break;
    }
});