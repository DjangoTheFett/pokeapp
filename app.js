const searchButton = document.getElementById("search-btn");

const container = document.getElementById("container")
const imgContainer = document.getElementById("img")
const textField = document.getElementById("pokemon")
const pokemonName = document.getElementById("name")




searchButton.addEventListener("click", async function(event) {

    const pokemonChoice = textField.value
   console.log(pokemonChoice)

    try {
             
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`)

        const data =  await apiResponse.json();

        
        console.log(data)
        console.log(data.sprites.front_default)

        pokemonName.innerHTML = data.name
        imgContainer.src  = data.sprites.front_default

        

        

    } catch (error) {

        console.error(error)
    }

    
})



