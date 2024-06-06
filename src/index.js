function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: "Brigadeiro",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
