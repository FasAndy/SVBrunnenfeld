document.addEventListener("DOMContentLoaded", function () {
    // Function to sort by name
    function sortByName() {
        let players = document.querySelectorAll('.player');
        let squad = document.getElementById('squad');
        let sortedPlayers = Array.from(players).sort((a, b) => {
            let nameA = a.querySelector('h3').textContent.toLowerCase();
            let nameB = b.querySelector('h3').textContent.toLowerCase();
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
            let yearA = parseInt(a.querySelector('p').textContent.match(/Jahrgang:\s*(\d{4})/)[1]);
            let yearB = parseInt(b.querySelector('p').textContent.match(/Jahrgang:\s*(\d{4})/)[1]);
            return yearA - yearB; // Ascending order (older first)
        });
        squad.innerHTML = ''; // Clear current player list
        sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
    }

    // Attach event listeners for sorting buttons
    document.querySelector('button[onclick="sortByName()"]').addEventListener('click', sortByName);
    document.querySelector('button[onclick="sortByYear()"]').addEventListener('click', sortByYear);
});
