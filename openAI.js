/*const { OpenAI } = require('openai');

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
*/








// Initialize an empty conversation history
let conversation = [];

// Function to add a user message to the conversation
function addUserMessage(message) {
  conversation.push({ role: 'system', content: 'You are a user' });
  conversation.push({ role: 'user', content: message });
}

// Function to add a chatbot message to the conversation
function addChatbotMessage(message) {
  conversation.push({ role: 'system', content: 'You are a chatbot' });
  conversation.push({ role: 'assistant', content: message });
}

// When the user submits a message
function submitUserMessage() {
  const userInput = document.getElementById('input').value;
  addUserMessage(userInput);
  
  // Make a request to GPT-3.5-turbo
  fetchGPTResponse(conversation);

  // Clear the input field
  document.getElementById('input').value = '';
}

// Function to fetch GPT-3.5-turbo response
function fetchGPTResponse(conversation) {
  const apiUrl = 'https://api.openai.com/v1/gpt-3.5-turbo/completions';
  const apiKey = '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';

  // Send a request to the GPT-3.5-turbo API
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: conversation,
    }),
  })
    .then(response => response.json())
    .then(data => {
      // Extract the chatbot's response
      const chatbotResponse = data.choices[0].message.content;
      addChatbotMessage(chatbotResponse);
      // Display the conversation
      displayConversation();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to display the conversation
function displayConversation() {
  const outputTextarea = document.getElementById('output');
  outputTextarea.value = conversation
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => `${message.role === 'user' ? 'User: ' : 'Chatbot: '}${message.content}`)
    .join('\n');

  console.log(outputTextarea.value);
}
          