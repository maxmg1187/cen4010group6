const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "";
const promptInput = document.getElementById("input");
const generateBtn = document.getElementById("submit");
const resultText = document.getElementById("output");

const controller = new AbortController();
const signal = controller.signal;

function insertNewLineBeforeNumbers(inputString) {
  for(let i = 0; i < inputString.length; i++){
    if(inputString.charAt(i) === 'number') {
      inputString = inputString.substring(0, i) + "\n" + inputString.substring(i, inputString.length);
    }
  }
  console.log(inputString);
  return inputString;
}

/* Conversation history*/
let conversation = [];

/* Initial prompt*/
promptInput.value = "You are a game master for a DND game, in less than 100 words, create a story and 3 actions for the player to choose from. It should be an interactive rpg game.";
resultText.value = "Loading...";
/* ChatGPT request*/
const generate = async () => {

  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
    conversation.push({ role: 'user', content: promptInput.value });
    const response = await fetch(API_URL, {
      method: 'POST', 
      signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: conversation,
      }),
    });

    const data = await response.json();
    resultText.value = insertNewLineBeforeNumbers(data.choices[0].message.content);

    conversation.push({ role: 'assistant', content: resultText.value });

    console.log(conversation);

  } catch (error) {
    console.error("Error:", error);
    resultText.innerText = "Error occurred while generating.";
  }
};

/* Runs request with the first initial prompt */
generate();
promptInput.value = '';

/* Runs request after submit button is clicked */
generateBtn.addEventListener("click", () => {
  resultText.value = "Loading...";
  generate();
  promptInput.value = '';
});
