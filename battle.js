const selectBtn = document.getElementById("choose");
const battleSearch = document.getElementById("battle-search")
const pokemonInventory = document.getElementById("pokemon-inventory")
const pokemonOne = document.getElementById("pokemon-1")
const bottomUi = document.getElementById("bottom-ui")


let choice = {
    name: "",
    att: 0,
    hp: 0,
    def: 0,
    spcAtt:0,
    spcDef:0,
    speed:0,

    
}


let currentPokemon = []

const myKeys = Object.keys(choice)

let statsArray = []

selectBtn.addEventListener("click" , function() {
    console.log("choose")

    statsArray = Array.from(battleStats.children, element => element.textContent)
    console.log(statsArray)
    
    choice.name = battleName.textContent
    choice.att = parseInt(statsArray[0])
    choice.hp = parseInt(statsArray[1])
    choice.def = parseInt(statsArray[2])
    choice.spcAtt = parseInt(statsArray[3])
    choice.spcDef = parseInt(statsArray[4])
    choice.speed = parseInt(statsArray[5])
    battleChoiceContainer.style.display = "none"
    battleSearch.style.display = "none"

    console.log(choice)

    currentPokemon.push(choice)
    console.log(currentPokemon[0].name)
    
    pokemonOne.src = battleImg.src
    bottomUi.style.display = "flex"


    






 
    
    
})








