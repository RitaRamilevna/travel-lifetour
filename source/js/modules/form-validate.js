const validateForm = async () => {
  const form = document.querySelector('.form__form');
  const phoneInput = document.querySelector('.form__input-phone');
  const emailInput = document.querySelector('.form__input-email');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^[^a-zа-яё\s]*$/i;
    if (!phoneRegex.test(phoneValue)) {
      isValid = false;
      phoneInput.classList.add('form__input-invalid');
    } else {
      phoneInput.classList.remove('form__input-invalid');
    }

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+(\w{2,}|xn--p1ai)$/;
    if (!emailRegex.test(emailValue)) {
      isValid = false;
      emailInput.classList.add('form__input-invalid');
    } else {
      emailInput.classList.remove('form__input-invalid');
    }

    if (isValid) {
      form.submit();
    }
  });
};

export { validateForm };
