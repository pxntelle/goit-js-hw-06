const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredient = (ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
};

const ingredientsElements = ingredients.map(createIngredient);
ingredientsList.append(...ingredientsElements);
