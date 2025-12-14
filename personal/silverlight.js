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

    // Sort characters.
    let sortedCharacters = filterCharacters.sort(compareNames);

    // Clear out character card screen.
    characterCardContainer.innerHTML = "";

    // Render screen with new characters.
    sortedCharacters.forEach(function(character){
        renderCharacterCard(character);
    });
}
// Sort characters based on names.
function compareNames(a, b){
    if (a.name < b.name){
        return -1;
    } else if (a.name > b.name){
        return 1;
    }
    return 0;
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
    let initSortCharacters = characters.sort(compareNames);
    initSortCharacters.forEach(function(character){
        renderCharacterCard(character);
    });
}

init();