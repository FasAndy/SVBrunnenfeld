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
            // Extract year safely with null check
            let yearAElement = a.querySelector('p:nth-of-type(1)');
            let yearBElement = b.querySelector('p:nth-of-type(1)');
            
            let yearA = yearAElement ? parseInt(yearAElement.textContent.replace(/\D/g, '')) : 0;
            let yearB = yearBElement ? parseInt(yearBElement.textContent.replace(/\D/g, '')) : 0;

            console.log("Player A Year:", yearA); // Debug output
            console.log("Player B Year:", yearB); // Debug output

            return yearA - yearB; // Ascending order (older first)
        });
        
        console.log("Sorted players by year:", sortedPlayers); // Debug sorted result

        squad.innerHTML = ''; // Clear current player list
        sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
    }

    // Attach event listeners for sorting buttons
    document.querySelector('#sortByName').addEventListener('click', sortByName);
    document.querySelector('#sortByYear').addEventListener('click', sortByYear);
});
