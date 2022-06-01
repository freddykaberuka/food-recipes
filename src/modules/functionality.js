const closeModalBtn = document.querySelector('.close');
const modalContainer = document.querySelector('.modal');

closeModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
