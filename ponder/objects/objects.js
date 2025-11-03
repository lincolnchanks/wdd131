const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum //Get the right section number.
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++; //Add 1 to enrolled number in the section
          renderSections(this.sections);
        }
      }
};

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
} // Populate the section table.

function renderSections(sections) {
    const html = sections.map(sectionTemplate); // for each section, add the table row with its data to the HTML.
    document.querySelector("#sections").innerHTML = html.join(""); // add the new HTML to the sections HTML
}

renderSections(aCourse.sections); //Render using the course's sections.

document.querySelector("#enrollStudent").addEventListener("click", function () { //Add event to add button
    const sectionNum = document.querySelector("#sectionNumber").value; //Get the section number from the input box.
    aCourse.enrollStudent(sectionNum); //Pass it into enrollStudent and call it.
});

//Populate the headings
document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;

let logo = document.querySelector("img");
logo.setAttribute("src", aCourse.logo);
logo.setAttribute("alt", "The course logo.");
logo.style.width = "100px";