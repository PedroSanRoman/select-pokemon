const pokemonselect = document.getElementById('pokemon-select')
const content = document.getElementById('content')
const getPokemon = document.getElementById('get-pokemon')

console.log(content)


getPokemon.addEventListener('click' , () => {
    const seleccionado = pokemonselect.value
    if (seleccionado == "bulbasaur") {
        pokemon (seleccionado) 
    }
    else if (seleccionado == "charmander"){
        pokemon (seleccionado) 
    }
    else if (seleccionado=="squirtle"){
        pokemon (seleccionado) 
    }
}
)

function pokemon(seleccionado) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${seleccionado}`)
    .then (response =>  {
        if (!response.ok) {
            throw new Error (`Error: ${response.status}`)};    
        return response.json()
    })
    .then (data => {
        content.innerHTML = `    
        <div>
        <h2>
            ${data.name}
        </h2>
        <img src=${data.sprites.front_default}>
        <ul>
            <li>${data.order}</li>
            <li>${data.weight}</li>
            <li>${data.height}</li>     
        </ul>
    </div>`
    })
    .catch(err => console.warn("Error:", err.message))
}