import { OpenAI } from '/node_modules/openai';

const openai = new OpenAI({
  apiKey: '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',
});

const form = document.forms['submit-to-chatGPT']
let chatCompletion;

// When the user submits a message
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Get the user's message from the textarea
  const userInput = form.elements['input'].value;

  sendRequest(prompt);

  //Testing
  console.log('user:', userInput);

  // Clear the input textarea
  form.elements['input'].value = '';
});

async function sendRequest(promt) {
  chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });

  displayConversation();
}

// Function to display the conversation
function displayConversation() {
  const outputTextarea = document.getElementById('output');
  
  outputTextarea.value += chatCompletion.choices[0].message.content;

  console.log('end:', outputTextarea);
}


          