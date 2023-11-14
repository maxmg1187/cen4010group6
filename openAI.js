const API_URL = "<https://api.openai.com/v1/completions>";
const API_KEY = "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";
const promptInput = document.getElementById("input");
const generateBtn = document.getElementById("enterPrompt");
const resultText = document.getElementById("output");
const generate = async () => {
//
  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        prompt: [{ role: "user", content: promptInput.value }],
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



          