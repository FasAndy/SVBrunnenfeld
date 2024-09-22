// Function to sort by name
function sortByName() {
    let players = document.querySelectorAll('.player');
    let squad = document.getElementById('squad');
    let sortedPlayers = Array.from(players).sort((a, b) => {
        let nameA = a.getAttribute('data-name').toLowerCase();
        let nameB = b.getAttribute('data-name').toLowerCase();
        return nameA.localeCompare(nameB);
    });
    squad.innerHTML = ''; // Clear current player list
    sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
}

// Function to sort by Jahrgang
function sortByYear() {
    let players = document.querySelectorAll('.player');
    let squad = document.getElementById('squad');
    let sortedPlayers = Array.from(players).sort((a, b) => {
        let yearA = parseInt(a.getAttribute('data-year'));
        let yearB = parseInt(b.getAttribute('data-year'));
        return yearA - yearB; // Ascending order (older first)
    });
    squad.innerHTML = ''; // Clear current player list
    sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
}
