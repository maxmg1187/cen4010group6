const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = your key
const promptInput = document.getElementById("input");
const generateBtn = document.getElementById("enterPrompt");
const resultText = document.getElementById("output");

const controller = new AbortController();
const signal = controller.signal;

const generate = async () => {

  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
    const response = await fetch(API_URL, {
      method: 'POST', signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: 'user', content: promptInput.value}],
      }),
    });

    const data = await response.json();
    resultText.innerText = data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    resultText.innerText = "Error occurred while generating.";
  }
};
promptInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    generate();
  }
});
generateBtn.addEventListener("click", generate);

/* async function sendRequest() {
  chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: promptInput.value}],
    model: 'gpt-3.5-turbo',
  });
  const data = await response.json();
  resultText.innerText = data.choices[0].message.content;
} */



          