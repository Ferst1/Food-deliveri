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

// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Находим кнопки "Order Now" с атрибутом data-modal-open
  const modalOpenButtons = document.querySelectorAll('[data-modal-open]');

  // Находим модальное окно
  const modalOverlay = document.querySelector('.modal-overlay');

  // Находим кнопку закрытия модального окна
  const modalCloseButton = document.querySelector('[data-modal-close]');

  // Назначаем обработчик клика для каждой кнопки "Order Now"
  modalOpenButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Открываем модальное окно
      modalOverlay.style.display = 'block';
    });
  });

  // Назначаем обработчик клика для кнопки закрытия модального окна
  modalCloseButton.addEventListener('click', function () {
    // Закрываем модальное окно
    modalOverlay.style.display = 'none';
  });
});
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
