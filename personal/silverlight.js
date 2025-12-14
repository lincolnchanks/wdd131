import {characters} from "./characters-object.js";

let characterCardContainer = document.querySelector("#character-cards");
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", search);

function search(){
    let characterQuery = document.querySelector("#search-input").value;
    console.log(characterQuery);

    // return an array of characters, filtering only for those whose names match the query.
    let filterCharacters = characters.filter(function(character){
        return (character.name.toLowerCase().includes(characterQuery.toLowerCase()));
    });
    
    // DEBUG: PRINT ALL FILTERED CHARACTERS
    // filterCharacters.forEach(function(character){
    //     console.log(character.name);
    // });

    // TO-DO: Add a sort function.

    // Clear out character card screen.
    characterCardContainer.innerHTML = "";

    // Render screen with new characters.
    filterCharacters.forEach(function(character){
        renderCharacterCard(character);
    });
}

function getCharacterCardTemplate(character){
    return `<div class="char-card">
                <h2>${character.name}</h2>
                <div class="char-img-container">
                    <img src="${character.imgSrc}" alt="Picture of ${character.name}">
                </div>
                <p>${character.descPreview}...</p>
                <a href="character.html?characterName=${character.linkID}">Read more</a>
            </div>`;
}

function renderCharacterCard(characterCard){
    let html = getCharacterCardTemplate(characterCard);
    characterCardContainer.innerHTML += html;
}

function init(){
    characters.forEach(function(character){
        renderCharacterCard(character);
    });
}

init();