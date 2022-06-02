const closeModalBtn = document.querySelector('.close');
const modalContainer = document.querySelector('.modal');
console.log(closeModalBtn);

closeModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

export default closeModalBtn;
