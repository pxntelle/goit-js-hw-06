const counter = document.querySelector('#counter');
const valueSpan = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const updateValue = () => {
  valueSpan.textContent = counterValue;
};

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateValue();
});

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateValue();
});
