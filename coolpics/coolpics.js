const gallery = document.querySelector('#pics');
const modal = document.querySelector('dialog');
const modalImage = document.querySelector('img');
const closeButton = document.querySelector('.close-viewer');

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