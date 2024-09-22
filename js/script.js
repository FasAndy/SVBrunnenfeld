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

    // Function to sort by Jahrgang with logging for debugging
    function sortByYear() {
        let players = document.querySelectorAll('.player');
        let squad = document.getElementById('squad');
        let sortedPlayers = Array.from(players).sort((a, b) => {
            // Extract year with debug logging
            let yearA = parseInt(a.querySelector('p:nth-of-type(2)').textContent.replace(/\D/g, ''));
            let yearB = parseInt(b.querySelector('p:nth-of-type(2)').textContent.replace(/\D/g, ''));
            
            console.log("Player A Year:", yearA); // Debug output
            console.log("Player B Year:", yearB); // Debug output

            return yearA - yearB; // Ascending order (older first)
        });
        
        console.log("Sorted players by year:", sortedPlayers); // Debug sorted result

        squad.innerHTML = ''; // Clear current player list
        sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
    }

    // Event listeners for sorting buttons
    document.querySelector('button[onclick="sortByName()"]').addEventListener('click', sortByName);
    document.querySelector('button[onclick="sortByYear()"]').addEventListener('click', sortByYear);
});
