
var modal = document.querySelector('#modal');
var modalBody = document.querySelector('#modal-body');

var closeModal = document.querySelector('#close-modal');

Modal = () => {
    modal.style.display = 'flex';
    modalBody.style.display = 'flex';


    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.style.display = 'none';
    })
};

