// Constants and Variables
const PI = 3.14; // const: creates constants (capitalize name)
let radius = 3; // let: creates variables

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);
// Type Coersion
const one = 1;
const two = '2';

let result = one * two; // So JavaScript just changes a string to a number when you try math.
console.log(result) //console.log() = print()?

result = one + Number(two); // So now it sees this as concatenation, unless you include Number() (so it's like int())
console.log(result)

// Global and Block Scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course); //Works just fine, course is global
    console.log(student); //Works just fine, it's being accessed in the block
}
console.log(course); //Works fine, course is global
// console.log(student); //Doesn't work, can't access a block variable outside the block

// Basically, global vs. local variables depends on whether a variable is defined inside a code block or not

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    document.querySelector('#html').style.color = 'black';
    document.querySelector('#css').style.color = 'black';
    document.querySelector('#js').style.color = 'black';
    let codeValue = selectElem.value;
    console.log(codeValue); // Grab value they chose, put it into code, print it to console.
    document.getElementById(codeValue).style.color = "red"; // Makes option turn red
})

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added text";

const topics = document.getElementById("#topics");
// topics.appendChild(newParagraph);

// 9/24/25

const image = document.querySelector('img');
image.setAttribute('src', 'images/html_js_css.jpg');
image.setAttribute('alt', 'New logo with black background');

document.body.className = 'blue';
document.body.style.backgroundColor = 'lightblue';