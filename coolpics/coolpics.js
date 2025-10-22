const gallery = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
    // console.log("Button");
})

modal.addEventListener('click', (event) => {
    if (event.target === 'modal') {
        modal.close();
        // console.log("Clicked out of img");
    }
})

let menuBtn = document.querySelector('.menu-btn');
let navigation = document.querySelector('nav');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // navigation.classList.toggle("hide");
}