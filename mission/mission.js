let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let text = document.getElementsByTagName('p')

const darkImage = document.createElement('img')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == "dark") {
        body.style.backgroundColor = "#222";
        body.style.color = "#FFF"
        // logo.innerHTML = <img src="images/dark-byui-logo.png"></img>
        // code for changes to colors and logo
    } else {
        // code for changes to colors and logo
    }
}