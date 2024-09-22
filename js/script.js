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
            // Extract year from "Jahrgang" line using text content
            let yearA = parseInt(a.querySelector('p:nth-of-type(2)').textContent.replace(/\D/g, ''));
            let yearB = parseInt(b.querySelector('p:nth-of-type(2)').textContent.replace(/\D/g, ''));
            return yearA - yearB; // Ascending order (older first)
        });
        squad.innerHTML = ''; // Clear current player list
        sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
    }

    // Add event listeners for sorting buttons, using addEventListener for mobile compatibility
    document.querySelector('button[onclick="sortByName()"]').addEventListener('click', sortByName);
    document.querySelector('button[onclick="sortByYear()"]').addEventListener('click', sortByYear);
});
