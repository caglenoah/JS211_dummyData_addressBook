// this is how i broke it down into function before figuring out how to display it on the HTML

// // creates a variable to store api data as we fetch
// let addressBook;



// // gets one user
// // This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as address and saved into the variable, addressBook
// // const getUser = () => {
// //   fetch('https://randomuser.me/api/')
// //     .then(res => res.json())
// //     .then(user => {
// //       addressBook = user;
// //       consoleAddressBook();
// //     });
// // };


// //gets multiple users
// const getTenUsers = () => {
//   fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(tenUsers => {
//       addressBook.push(tenUsers); // stores each user in the addresBook array
//       if (addressBook.length === 10) {
//         console.log('Fetched 10 users:', addressBook);
//       } else {
//         getTenUsers();           // will continue to get users until the parameters are met
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }


// // function to store fetched users in console
// // const consoleAddressBook = () => {
// //   console.log(addressBook)
// // }


// // loads the window when the browser renders the page, oppose to having something the user must interact with
// window.onload = function () {
//   getTenUsers();
// }


