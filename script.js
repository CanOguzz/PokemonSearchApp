const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');    
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');         
const pokemonType = document.getElementById('types');
const pokemonHp = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack');
const pokemonDefense = document.getElementById('defense');
const pokemonSpecialAttack = document.getElementById('special-attack');
const pokemonSpecialDefense = document.getElementById('special-defense');
const pokemonSpeed = document.getElementById('speed');
const pokemonImage = document.getElementById('sprite'); 

searchButton.addEventListener('click', searchPokemon)

function searchPokemon() {
    // Get the value of the input
    const searchValue = searchInput.value.toLowerCase();
    // Fetch the data from the API
   
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                pokemonType.textContent = '';

                pokemonName.textContent = data.name;
                pokemonId.textContent = "#"+data.id;
                pokemonHeight.textContent = data.height;
                pokemonWeight.textContent = data.weight;
                pokemonHp.textContent = data.stats[0].base_stat;
                pokemonAttack.textContent = data.stats[1].base_stat;
                pokemonDefense.textContent = data.stats[2].base_stat;
                pokemonSpecialAttack.textContent = data.stats[3].base_stat;
                pokemonSpecialDefense.textContent = data.stats[4].base_stat;
                pokemonSpeed.textContent = data.stats[5].base_stat;
                pokemonType.textContent = data.types[0].type.name.toUpperCase();
                pokemonImage.src = data.sprites.front_default;

                if (data.types && data.types.length > 0) {
                    data.types.forEach((typeInfo) => {
                        const typeElement = document.createElement('span');
                        typeElement.textContent = typeInfo.type.name.toUpperCase();
                        pokemonType.appendChild(typeElement);
                    });
                }
                
            })
            .catch(error => {
                console.error(error);
                alert('Pokemon not found');
            });
    
    // Display the data on the page 
    
}