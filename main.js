// Fetch a user from the API
const fetchUser = async (count) => {
    const response = await fetch('https://randomuser.me/api/?results=${count}');
    const data = await response.json();
    return data.results;
};

//Display aditional user details when the button is clicked
const displayDetails = (user, userContainer) => {

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
        userContainer.classList.toggle('expanded');
    });
    userContainer.appendChild(expandButton);

    document.querySelector('.user-list').appendChild(userContainer);
};



// Fetch new user and display on window load
window.onload = async () => {
    const numberOfUsers = 5;
    const users = [];

    for (let i = 0; i < numberOfUsers; i++) {
        const user = await fetchUser();
        users.push(user);
    }

    //sort users alphabetically by name
    users.sort((a, b) => a.name.first.locale)
};
















