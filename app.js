const searchButton = document.getElementById("search-btn");

const container = document.getElementById("container")
const imgContainer = document.getElementById("img")
const textField = document.getElementById("pokemon")
const pokemonName = document.getElementById("name")
const pokeHp = document.getElementById("poke-hp")
const pokeAtt = document.getElementById("poke-att")
const pokeDef = document.getElementById("poke-def")
const pokeSpecAtt = document.getElementById("poke-specatt")
const pokeSpecDef = document.getElementById("poke-specdef")
const pokeSpeed = document.getElementById("poke-speed")
const pokeStats = document.getElementById("poke-stats")
const pokeDiv = document.getElementById("poke-div")




let renderPokemon = function(data) {

     pokemonName.innerHTML = data.name
        imgContainer.src  = data.sprites.front_default
        pokeHp.innerHTML = `HP: ${data.stats[0].base_stat}`
        pokeAtt.innerHTML = `ATT: ${data.stats[1].base_stat}`
        pokeDef.innerHTML = `DEF: ${data.stats[2].base_stat}`
        pokeSpecAtt.innerHTML = `SPEC ATT: ${data.stats[3].base_stat}`
        pokeSpecDef.innerHTML = `SPEC DEF: ${data.stats[4].base_stat}`
        pokeSpeed.innerHTML = `SPEED: ${data.stats[5].base_stat}`
        pokeStats.style.visibility = "visible"
        pokeDiv.style.visibility = "visible"
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



