document.addEventListener('DOMContentLoaded', function () {
    const pokedexContainer = document.getElementById('pokedex');

    function createCard(pokemon) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = pokemon.image;
        img.alt = pokemon.name;
        card.appendChild(img);

        const name = document.createElement('p');
        name.textContent = 'Name: ${pokemon.name}';
        card.appendChild(name);

        const id = document.createElement('p');
        id.textContent = 'ID: ${pokemon.id}';
        card.appendChild(id);

        const type = document.createElement('p');
        type.textContent = 'Type: ${pokemon.type}';
        card.appendChild(type);

        return card;
    }

    function displayPokemons(pokemonData) {
        pokemonData.forEach(pokemon => {
            const card = createCard(pokemon);
            pokedexContainer.appendChild(card);
        });
    }

    fetch('pokemonData.json')
        .then(response => response.json())
        .then(data => displayPokemons(data))
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});