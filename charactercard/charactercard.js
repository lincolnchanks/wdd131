const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    imageSource: "images/snortleblat.webp",
    alive: true,
    attacked() {
        if (this.health != 0) {
            console.log(this.health);
            this.health -= 20;
            if (this.health == 0) {
                alert("Your character is DEAD.");
                console.log("Your character is DEAD.");
                this.alive = false;
            }
            refreshCharacterStats();
        }
    },
    levelUp() {
        if (this.alive) {
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

attackedButton.addEventListener("click", function() {
    characterCard.attacked();
});
levelUpButton.addEventListener("click", function() {
    characterCard.levelUp();
});

// attackedButton.addEventListener('click', function() {
//     if (characterCard.health != 0) {
//         console.log(characterCard.health);
//         characterCard.health -= 20;
//         if (characterCard.health == 0) {
//             alert("Your character is DEAD.");
//             console.log("Your character is DEAD.");
//             characterCard.alive = false;
//         }
//         refreshCharacterStats();
//     }
// })

// levelUpButton.addEventListener('click', function() {
//     if (characterCard.alive) {
//         console.log(characterCard.level);
//         characterCard.level += 1;
//         refreshCharacterStats();
//     }
// })