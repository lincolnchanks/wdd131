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