const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    imageSource: "images/snortleblat.webp",
    alive: true,
    attacked: function() {
        if (this.health != 0) {
            console.log(this.health);
            this.health -= 20;
            if (this.health == 0) {
                console.log("Your character is DEAD.");
                alive = false;
            }
            refreshCharacterStats();
        }
    },
    levelUp: function() {
        if (alive) {
            console.log(this.level);
            this.level += 1;
            refreshCharacterStats();
        }
    }
}

const attackedButton = document.querySelector('#attacked');
const levelUpButton = document.querySelector('#level-up');

const characterStats = document.querySelector('.stats');

function cardTemplate(character){
    //returns a template for the HTML
    return `
    <p id="class">Class: Swamp Beast Diplomat</p>
    <p id="level">Level: ${character.level}</p>
    <p id="health">Health: ${character.health}</p>`
}
function refreshCharacterStats(){
    characterStats.innerHTML = cardTemplate(characterCard);
}

attackedButton.addEventListener('click', function() {
    if (characterCard.health != 0) {
        console.log(characterCard.health);
        characterCard.health -= 20;
        if (characterCard.health == 0) {
            console.log("Your character is DEAD.");
            characterCard.alive = false;
        }
        refreshCharacterStats();
    }
})

levelUpButton.addEventListener('click', function() {
    if (characterCard.alive) {
        console.log(characterCard.level);
        characterCard.level += 1;
        refreshCharacterStats();
    }
})

// levelUpButton.addEventListener('click', characterCard.levelUp);

// characterCard.attacked();
// characterCard.attacked();
// characterCard.attacked();
// characterCard.attacked();
// characterCard.attacked();

// attackedButton.addEventListener('click', );

// characterCard.attacked
// console.log(characterCard.name);
// console.log(characterCard.class);
// console.log(characterCard.level);
// console.log(characterCard.health);
// console.log(characterCard.imageSource);