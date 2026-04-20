console.log ("part 2 js lessons in dugsiiye");



// function fetchUserDataSync(){
//     alert("guji badhanka ay ku qoran thay ok..."); "Great"
//     return {id: "Ad1221", name: "mansormd"}
// }

// console.log("Sart fetching user data...")
// let user = fetchUserDataSync();
// console.log ("user data:",user)
// console.log ("This message is bloched until user data is fetched.")


// function getUserData(callback) {
//     setTimeout(() => {
//         const userData = { id: "Ad1221", name: "mansormd" }; 
//         callback(userData); 
//     }, 1000); 
// }

// console.log("Starting to fetch user data...");

// getUserData(function(user) {
//     console.log("Here is the user data:", user); 
// });
// console.log("This message shows up immediately.");


// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; 
//             if (success) {
//                 resolve({ id: "Ad1221", name: "mansormd" });
//             } else {
//                 reject("Failed to fetch user data");
//             }
//         }, 200);
//     });
// }

// // fetchUserData()
// //     .then(data => console.log("User Data:", data))
// //     .catch(error => console.error("Error:", error));


// async function getUserDataAsync() {
//     try {
//         const data = await fetchUserData();
//         console.log("User Data:", data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// getUserDataAsync();

// async function getUserDataAsync() {
//     console.log("Starting to fetch user data...");
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log("Response received:", data);
// }
// getUserDataAsync();


// function greet (name) {
//     console.log ("Hello," + name )
// }

// function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
// }
// processUserInput(greet);


function operate (a,b, callback){
    return callback(a,b);
}

function add (a,b){
    return a + b;
}


function subtract (a,b){
    return a - b;
}

function multiply (a,b){
    return a * b;
}   



console.log("add", operate( 5,10, add));
console.log ("subtract", operate( 5,10, subtract));
console.log ("multiply", operate( 5,10, multiply));
