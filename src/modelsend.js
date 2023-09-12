document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.modal-form');
  const nameInput = document.getElementById('modal-form-name');
  const phoneInput = document.getElementById('modal-form-phone');
  const emailInput = document.getElementById('modal-form-email');
  const sendButton = document.querySelector('.modal-send-btn');
  const modalOverlay = document.querySelector('.modal-overlay');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Проверяем, заполнены ли все поля
    if (
      nameInput.value.trim() === '' ||
      phoneInput.value.trim() === '' ||
      emailInput.value.trim() === ''
    ) {
      // Если не все поля заполнены, выводим сообщение и делаем поля красного цвета
      alert('Заполните все поля');
      nameInput.style.borderColor = 'red';
      phoneInput.style.borderColor = 'red';
      emailInput.style.borderColor = 'red';
    } else {
      // Если все поля заполнены, отправляем форму и скрываем ее
      form.reset(); // Очищаем поля формы
      modalOverlay.style.display = 'none'; // Скрываем модальный оверлей
      alert('Форма отправлена!'); // Можно добавить свой код для отправки данных на сервер
    }
  });
});
