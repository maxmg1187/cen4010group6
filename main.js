const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: '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',
});
const prompt = 'Translate the following English text to French: "Hello, how are you?"';
const inputElement = document.getElementById("chatgptinput");
const outputElement = document.getElementById("chatgptoutput");

async function sendRequest() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });
}

inputElement.addEventListener("input", function(){
  prompt = inputElement.textContent();
  sendRequest();
  outputElement.textContent = chatCompletion.choices[0].message.content;
})