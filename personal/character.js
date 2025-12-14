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
    return `<div id="basic-info">
            <h2>${character.name}</h2>
            <ul>
                <li>
                    Home Planet: ${character.homePlanet}
                </li>
                <li>
                    Book Appearances: ${character.bookAppearances}
                </li>
                <li>
                    Magic Systems: ${character.magicSystems}
                </li>
                <li>
                    Alliances: ${character.alliances}
                </li>
            </ul>
            <div id="descriptions">
                <p>${character.desc1}</p>
                <p>${character.desc2}</p>
            </div>
        </div>
        <img src="${character.imgSrc}" alt="Picture of Hoid">`;
}

function renderCharacterPage(character){
    let html = getCharacterPageTemplate(character);
    characterPageContainer.innerHTML = html;
}

function init(){
    renderCharacterPage(currentCharacter);
}

init();