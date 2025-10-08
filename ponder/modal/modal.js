const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal); // This triggers ANY time a click is detected.

function openModal(e) { // e is the Event Parameter.
    console.log(e.target); // e.target returns the nearest img element. That way we can select the img, then pass it into the modal later on!
    const img = e.target;
    
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sm', 'full'); // grab the same image, but change it to the full image.

    modalImage.src = full;
    modalImage.alt = alt;
    
    // modalImage.setAttribute('src', src);
    // modalImage.setAttribute('alt', alt); <-- Do these work?

    modal.showModal(); // NOT modalImage.showModal();

    // Code to show modal  - Use event parameter 'e'
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) { // how exactly does this work? I'm a little bit lost.
        modal.close();
    }
});