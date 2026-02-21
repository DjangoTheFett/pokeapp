const searchButton = document.getElementById("search-btn");

const container = document.getElementById("container")
const imgContainer = document.getElementById("img")
const textField = document.getElementById("pokemon")
const pokemonName = document.getElementById("name")
const pokeStats = document.getElementById("poke-stats")
const pokeDiv = document.getElementById("poke-div")
const compBtnOne = document.getElementById("comp-btn-one")
const compDivOne = document.getElementById("pokemon-1")
const compStatsOne = document.getElementById("stats-1")
const compImgOne = document.getElementById("poke-img-one")
const compTextOne = document.getElementById("comp-text-one")
const compBtntwo = document.getElementById("comp-btn-two")
const compDivtwo = document.getElementById("pokemon-2")
const compStatstwo = document.getElementById("stats-2")
const compImgtwo = document.getElementById("poke-img-two")
const compTexttwo = document.getElementById("comp-text-two")
const compNameTwo = document.getElementById("comp-name-two")
const battleSearchBtn = document.getElementById("battle-search-btn")
const battleChoiceContainer = document.getElementById("battle-pokemon")
const battleName = document.getElementById("battle-name")
const battleStats = document.getElementById("battle-stats-container")
const battleSearchInput = document.getElementById("battle-search-input")
const battleImg = document.getElementById("battle-img")
const compNameOne = document.getElementById("comp-name-one")







//--------------------------------------------------------------------------------------------------------

const apiCall = async function(text,stats,pContainer,pImg,nameContainer){

    const compPokeone = text.value
  
   console.log(compPokeone)
    
       try {
             
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${compPokeone}`)

         if (!apiResponse.ok) {
            throw new Error("error thrown")
        }

        const data =  await apiResponse.json();
        console.log(data)
        

         renderPokemon(data,stats,pContainer,pImg,compPokeone,nameContainer)

        
     
        

     

 

       
        

        
  
          

    } catch (error) {

        console.error(error.message)
       
        
    }

} 

// ------------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------


let renderPokemon = function(data,compStats,rContainer,pokeImg,name,nameContainer) {

    const statData = data.stats;

     
        
     compStats.innerHTML = "";
        for (let i = 0; i < statData.length; i++) {
            const paragraph = document.createElement("p")

            paragraph.textContent = `${statData[i].base_stat} - ${statData[i].stat.name} `

            compStats.appendChild(paragraph)
            
        }
         pokeImg.src  = data.sprites.front_default
           nameContainer.innerHTML = name 
          compStats.style.visibility = "visible"
         rContainer.style.visibility = "visible"
          pokeImg.style.visibility = "visible"

        
}


//----------------------------------------------------------------------------------------------------------------------------------




if (searchButton) {
searchButton.addEventListener("click", function () {
    apiCall(textField,pokeStats,pokeDiv,imgContainer,pokemonName)
})
} 
    

if(compBtnOne) {
compBtnOne.addEventListener("click", function () {

    apiCall(compTextOne,compStatsOne,compDivOne,compImgOne,compNameOne)
})}

if(compBtntwo){
compBtntwo.addEventListener("click", function() {
    apiCall(compTexttwo,compStatstwo,compDivtwo,compImgtwo,compNameTwo)
})}

if(battleSearchBtn) {

    battleSearchBtn.addEventListener("click", function() {
        apiCall(battleSearchInput,battleStats,battleChoiceContainer,battleImg,battleName)

    }  )
}


