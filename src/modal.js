(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// ----------------------------------------------------------на месте нажатия кнопки----------------

// document.addEventListener('DOMContentLoaded', () => {
//   const openModalBtns = document.querySelectorAll('[data-modal-open]');
//   const modal = document.querySelector('[data-modal]');
//   const closeModalBtn = document.querySelector('[data-modal-close]');

//   openModalBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
// Определите позицию кнопки относительно окна браузера
// const btnRect = btn.getBoundingClientRect();

// Установите позицию модального окна относительно кнопки
//       modal.style.top = `${btnRect.bottom}px`;
//       modal.style.left = `${btnRect.left}px`;

//       modal.classList.remove('is-hidden');
//     });
//   });

//   closeModalBtn.addEventListener('click', () => {
//     modal.classList.add('is-hidden');
//   });
// });
