import {characters} from "./characters-object.js";

let characterCardContainer = document.querySelector("#character-cards");
let searchBtn = document.querySelector("#search-btn");

// let hoidLink = document.querySelector("#hoid");
// let kelsierLink = document.querySelector("#kelsier");
// let vinLink = document.querySelector("#vin");
// let elendLink = document.querySelector("#elend");
// let kaladinLink = document.querySelector("#kaladin");
// let shallanLink = document.querySelector("#shallan");
// let dalinarLink = document.querySelector("#dalinar");
// let adolinLink = document.querySelector("#adolin");
// let sigzilLink = document.querySelector("#sigzil");
// let tanavastLink = document.querySelector("#tanavast");
// let rashekLink = document.querySelector("#rashek");

// let hoidBtn = document.querySelector("#hoid-btn");
// let kelsierBtn = document.querySelector("#kelsier-btn");
// let vinBtn = document.querySelector("#vin-btn");
// let elendBtn = document.querySelector("#elend-btn");
// let kaladinBtn = document.querySelector("#kaladin-btn");
// let shallanBtn = document.querySelector("#shallan-btn");
// let dalinarBtn = document.querySelector("#dalinar-btn");
// let adolinBtn = document.querySelector("#adolin-btn");
// let sigzilBtn = document.querySelector("#sigzil-btn");
// let tanavastBtn = document.querySelector("#tanavast-btn");
// let rashekBtn = document.querySelector("#rashek-btn");

// hoidBtn.addEventListener("click", updateSelectedCharacter("hoid"));

// let selectedCharacter = "";

searchBtn.addEventListener("click", search);

// console.log(characters[0]);

// hoidLink.addEventListener("click", updateSelectedCharacter(characters[0]));

// let characterPageContainer = document.querySelector("#character-info");

// function updateSelectedCharacter(charString){
//     console.log(charString);
// }

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

// function getCharacterPageTemplate(character){
//     return `<p>${character.name}</p>`;
// }

function getCharacterCardTemplate(character){
    return `<div class="char-card">
                <h2>${character.name}</h2>
                <div class="char-img-container">
                    <img src="${character.imgSrc}" alt="Picture of ${character.name}">
                </div>
                <p>${character.descPreview}... <a href="character.html?characterName=${character.linkID}">Read more</a></p>
            </div>`;
}

// function renderCharacterPage(character){
//     let html = getCharacterPageTemplate(character);
//     characterPageContainer.innerHTML += html;
// }

function renderCharacterCard(characterCard){
    let html = getCharacterCardTemplate(characterCard);
    characterCardContainer.innerHTML += html;
}

// function characterPageInit(character){
//     renderCharacterPage(character);
// }

function init(){
    characters.forEach(function(character){
        renderCharacterCard(character);
    });
}

init();