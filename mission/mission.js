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
        logo.setAttribute('src', "images/dark-byui-logo.png")
        // logo.innerHTML = <img src="images/dark-byui-logo.png"></img>
        // code for changes to colors and logo
    } else {
        body.style.backgroundColor = "#FFF"
        body.style.color = "black"
        logo.setAttribute("src", "images/byui-logo.png")
        // code for changes to colors and logo
    }
}