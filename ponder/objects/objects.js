const aCourse = { // this is an object and code, name, and logo are attributes.
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function () {
        console.log('student enrolled');
    }
            
};

console.log(aCourse.code);

document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;

let logo = document.querySelector("img");
logo.setAttribute("src", aCourse.logo);
logo.setAttribute("alt", "The course logo.");
logo.style.width = "100px";

console.log(aCourse.sections[0].roomNum); // Print room number
aCourse.enrollStudent();