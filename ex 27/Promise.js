console.log ("part 2 js lessons");



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


function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve({ id: 1, name: "mansormd" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 200);
    });
}

fetchUserData()
    .then(data => console.log("User Data:", data))
    .catch(error => console.error("Error:", error));
