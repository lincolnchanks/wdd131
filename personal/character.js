import { characters } from "./characters-object.js";

let characterNameParams = new URLSearchParams(window.location.search);

let characterName = characterNameParams.get("characterName");

console.log(characterName);
let currentCharacter = characters[0];

characters.forEach(function(character){
    if (characterName == character.linkID){
        currentCharacter = character;
    }
})

let characterPageContainer = document.querySelector("#character-info");

function getCharacterPageTemplate(character){
    return `<p>${character.name}</p>`;
}

function renderCharacterPage(character){
    let html = getCharacterPageTemplate(character);
    characterPageContainer.innerHTML += html;
}

function init(){
    renderCharacterPage(currentCharacter);
}

init();