function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2bd0tfa47o5cc432ca77b10b11d36a50";
  let prompt = `User instructions: Generate a Brazilian recipe about ${instructionsInput.value}`;
  let context =
    "You are a brazilian chef,and love to cook simple and easy brasilian recipes.Your mission is generate a 6 lines recipe in basic HTML and separete each line with a <br />.Make sure to follow the user instructions.Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ a Brazilian recipe about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
