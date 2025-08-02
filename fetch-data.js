// Define the async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);              // Fetch the data
        const users = await response.json();               // Parse JSON data

        dataContainer.innerHTML = '';                      // Clear loading text

        const userList = document.createElement('ul');     // Create <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li>
            listItem.textContent = user.name;              // Set name
            userList.appendChild(listItem);                // Append to list
        });

        dataContainer.appendChild(userList);               // Display list in DOM
    } catch (error) {
        dataContainer.innerHTML = '';                      // Clear existing content
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);              // Optional logging
    }
}

// Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);