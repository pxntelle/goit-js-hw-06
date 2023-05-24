const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Забороняє перезавантаження сторінки при відправленні форми

  const formData = {};
  const formElements = event.target.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.type !== "submit") {
      if (element.value === "") {
        alert("Всі поля повинні бути заповнені");
        return;
      }

      formData[element.name] = element.value;
    }
  }

  console.log(formData);
  loginForm.reset();
}
