const searchButton = document.getElementById("search-btn");

const container = document.getElementById("container")
const imgContainer = document.getElementById("img")
const textField = document.getElementById("pokemon")
const pokemonName = document.getElementById("name")
const pokeStats = document.getElementById("poke-stats")
const pokeDiv = document.getElementById("poke-div")




let renderPokemon = function(data) {

    const statData = data.stats;

     pokemonName.innerHTML = data.name
        
        pokeStats.innerHTML = "";
        for (let i = 0; i < statData.length; i++) {
            const paragraph = document.createElement("p")

            paragraph.textContent = `${statData[i].stat.name}: ${statData[i].base_stat} `

            pokeStats.appendChild(paragraph)
            
        }
         imgContainer.src  = data.sprites.front_default
          pokeStats.style.visibility = "visible"
         pokeDiv.style.visibility = "visible"
          imgContainer.style.visibility = "visible"

        
}


searchButton.addEventListener("click", async function(event) {

    const pokemonChoice = textField.value
   console.log(pokemonChoice)

    try {
             
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`)

         if (!apiResponse.ok) {
            throw new Error("error thrown")
        }

        const data =  await apiResponse.json();

        
        console.log(data)
        console.log(data.sprites.front_default)

        renderPokemon(data);

 

       
        

        

        

    } catch (error) {

        console.error(error.message)
        pokemonName.innerHTML = "ERROR: you seem to of typed something thats not a pokemon name, please try again."
        pokeDiv.style.visibility = "visible"
        pokeStats.style.visibility = "hidden"
        imgContainer.style.visibility = "hidden"
        
    }

    
})



