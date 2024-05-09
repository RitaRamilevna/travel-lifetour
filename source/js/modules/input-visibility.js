export function manageInputLabelVisibility() {
  const inputFields = document.querySelectorAll('.form__input');
  const labels = document.querySelectorAll('.form__label');

  inputFields.forEach((inputField, index) => {
    inputField.addEventListener('input', () => {
      if (inputField.value !== '') {
        labels[index].style.opacity = '0';
      } else {
        labels[index].style.opacity = '1';
      }
    });
  });
}
