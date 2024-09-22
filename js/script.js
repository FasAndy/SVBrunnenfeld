let nameSortOrder = 'asc'; // Initial sort order for names
let yearSortOrder = 'asc';  // Initial sort order for years

function sortByName() {
    console.log("Sort by Name clicked"); // Log button click

    let players = document.querySelectorAll('.player');
    let squad = document.getElementById('squad');
    let sortedPlayers = Array.from(players).sort((a, b) => {
        let nameA = a.querySelector('h3').textContent.toLowerCase();
        let nameB = b.querySelector('h3').textContent.toLowerCase();

        // Determine sort order
        return nameSortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    // Toggle sort order for the next click
    nameSortOrder = nameSortOrder === 'asc' ? 'desc' : 'asc';

    squad.innerHTML = ''; // Clear current player list
    sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
}

function sortByYear() {
    console.log("Sort by Jahrgang clicked"); // Log button click

    let players = document.querySelectorAll('.player');
    let squad = document.getElementById('squad');
    let sortedPlayers = Array.from(players).sort((a, b) => {
        let yearAElement = a.querySelector('p:nth-of-type(1)');
        let yearBElement = b.querySelector('p:nth-of-type(1)');

        let yearA = yearAElement ? parseInt(yearAElement.textContent.replace(/\D/g, '')) : 0;
        let yearB = yearBElement ? parseInt(yearBElement.textContent.replace(/\D/g, '')) : 0;

        // Determine sort order
        return yearSortOrder === 'asc' ? yearA - yearB : yearB - yearA;
    });

    // Toggle sort order for the next click
    yearSortOrder = yearSortOrder === 'asc' ? 'desc' : 'asc';

    squad.innerHTML = ''; // Clear current player list
    sortedPlayers.forEach(player => squad.appendChild(player)); // Append sorted players
}
