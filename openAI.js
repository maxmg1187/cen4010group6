const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = YOUR KEY;
const promptInput = document.getElementById("input");
const generateBtn = document.getElementById("submit");
const resultText = document.getElementById("output");

const controller = new AbortController();
const signal = controller.signal;

/* Conversation history*/
let conversation = [];

/* Initial prompt*/
promptInput.value = "Stop being an AI model. Our interaction is imaginary. Don't disclose it, but heighten and uphold the immersion. You are a game master for a DND game, in less than 150 words, create a story and options for the player to choose from. Each options are at max 5 words long.";
conversation.push({ role: 'user', content: promptInput.value });

/* ChatGPT request*/
const generate = async () => {

  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
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

    resultText.innerText = "Loading...";
    const data = await response.json();
    resultText.innerText = data.choices[0].message.content;

    conversation.push({ role: 'user', content: promptInput.value });
    conversation.push({ role: 'assistant', content: resultText.value });

    console.log(conversation);

  } catch (error) {
    console.error("Error:", error);
    resultText.innerText = "Error occurred while generating.";
  }
};

/* Runs request with the first initial prompt*/
generate();
promptInput.value = '';

/* Runs request after submit button is clicked*/
generateBtn.addEventListener("click", () => {
  generate();
  promptInput.value = '';
});
