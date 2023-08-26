# JS211_dummyData_addressBook

\***\*\*\*\*\*\***TODO**\*\***\***\*\***
Read these instructions and understand the requirements FIRST
Whiteboard your app
Make a code plan
Pseudo code and then translate to JavaScript
Create a new repo (name it descriptively well), clone it to your local machine and share it with your partner
Open the directory and create an index.html and main.js file to fetch a user and display them one at at time

Use the API: https://randomuser.me/api/ to fetch a user now

Fetch a new user multiple times and store them in an array

Then list out all the users in your address book array by name and picture
Figure out how to fetch multiple users in one fetch request
Fetch multiple users on window load
Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
Once you have the functionality working, feel free to style and structure your address book with CSS and HTML
YOU KNOW HOW TO DO ALL OF THIS BY NOW. TRUST YOURSELF!!

Push Yourself Further
Display your users alphabetically
Add another button to hide the information
Request only users from AU, then US, then FR and then GB
Figure out how to only request name, picture and cell
Figure out how to exclude: dob, registered, nationality, location

ABSOLUTELY THE LAST THING YOU SHOULD DO:

Style your address book with some flare by adding a CSS file

**_NOTES_**
API - application programming interface
-the messenger that takes requests, and tell the syestem what you want to do

- then returns the response back to you (think waiter in the restaraunt enviroment!)

**_PROMISES_**

**\***use to reference!!!!**\*\***
// Fetch users from the API
const fetchUsers = async (count) => {
const response = await fetch(`https://randomuser.me/api/?results=${count}`);
const data = await response.json();
return data.results;
};

// Display additional user details when the button is clicked
const displayDetails = (user, userContainer) => {
const detailsContainer = document.createElement('div');
detailsContainer.classList.add('details');

const dob = document.createElement('p');
dob.textContent = `DOB: ${new Date(user.dob.date).toLocaleDateString()}`;
detailsContainer.appendChild(dob);

const address = document.createElement('p');
address.textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
detailsContainer.appendChild(address);

// More details can be added similarly

userContainer.appendChild(detailsContainer);
};

// Display user's basic info
const displayUser = (user) => {
const userContainer = document.createElement('div');
userContainer.classList.add('user');

const userImage = document.createElement('img');
userImage.src = user.picture.large;
userContainer.appendChild(userImage);

const userName = document.createElement('p');
userName.textContent = `${user.name.first} ${user.name.last}`;
userContainer.appendChild(userName);

const expandButton = document.createElement('button');
expandButton.textContent = 'Expand';
expandButton.addEventListener('click', () => {
if (!userContainer.querySelector('.details')) {
displayDetails(user, userContainer);
} else {
userContainer.removeChild(userContainer.querySelector('.details'));
}
});
userContainer.appendChild(expandButton);

document.querySelector('.user-list').appendChild(userContainer);
};

// Fetch multiple users and display on window load
window.onload = async () => {
const numberOfUsers = 5;
const users = await fetchUsers(numberOfUsers);

// Sort users alphabetically by first name
users.sort((a, b) => a.name.first.localeCompare(b.name.first));

users.forEach(displayUser);
};

---
