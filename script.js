const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', searchPokemon)

function searchPokemon() {
    // Get the value of the input
    const searchValue = searchInput.value;
    // Fetch the data from the API
    try {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
                alert('Pokemon not found!');
            });
    } catch (error) {
        console.error(error);
        alert('An error occurred while searching for the Pokemon!');
    }
}