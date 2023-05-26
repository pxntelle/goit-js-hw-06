const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const inputLength = validationInput.value.length;
  const dataLength = Number(validationInput.getAttribute('data-length'));

//   if (inputLength === dataLength) {
//     validationInput.classList.remove('invalid');
//     validationInput.classList.add('valid');
//   } else {
//     validationInput.classList.remove('valid');
//     validationInput.classList.add('invalid');
//   }
// });

if (inputLength === dataLength) {
  setValidationClass('valid', 'invalid');
} else {
  setValidationClass('invalid', 'valid');
}
}

function setValidationClass(classToAdd, classToRemove) {
validationInput.classList.remove(classToRemove);
validationInput.classList.add(classToAdd);
});