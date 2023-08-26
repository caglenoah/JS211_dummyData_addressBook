// for convenient copy and paste- https://randomuser.me/api/ -


let addressBook = [];

//Fetch user data from the API
const getUsers = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const users = await response.json();
        return users.results[0];        // exxtracts the user object from the api response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// display the fetched users in the html
const displayUsers = async () => {
    const fetchPromises = [];

    //queue up fetch promises to fetch a user 10 times
    for (let i = 0; i < 10; i++) {
        fetchPromises.push(getUsers());
    }

    try {
        const fetchedUsers = await Promise.all(fetchPromises);
        addressBook = fetchedUsers; // Store all fetched users in addressBook

        //get the container element where i want to dipslay the users
        const userContainer = document.getElementById('userContainer');

        // clear any previously existing content
        userContainer.innerHTML = '';

        // i need to loop through fetched users and create HTML elements
        fetchedUsers.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = ` 
            <img src="${user.picture.large}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <div id="moreInfo">
                <h3>Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</h3>
                <h3>Email: ${user.email}</h3>
                <h3>Phone: ${user.phone}</h3>
                <h3>Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}</h3>
            </div>`
                ;
            userContainer.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error while fetching users:', error);
    }
}

window.onload = function () {
    displayUsers();
}