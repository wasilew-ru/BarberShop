const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]')

function openModal () {
    modalButtons.forEach(function (item) {
    item.addEventListener('click', function() {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        //запрещаем передавать клики родителю
        modal.querySelector('.modal-window').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
})

modalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function() {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})

// закрыть по фону
allModals.forEach(function (item) {
    item.addEventListener('click', function() {
        this.classList.add('hidden');
    })
})
}

export default openModal;