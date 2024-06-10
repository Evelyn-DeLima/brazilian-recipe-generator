function displayRecipe(response) {
  console.log("recipe generating");
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
    "You are a brazilian chef,and love to cook simple and easy brasilian recipes.Your mission is generate a 6 lines recipe in basic HTML and separete each line with a <br />.Make sure to follow the user instructions. ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log("Generating recipe");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
