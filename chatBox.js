const scriptURL = '' //chatGPT scripts if need
  const form = document.forms['submit-to-chatGPT']

  // Get references to the input and output text areas
  const outputTextarea = document.getElementById('output');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the user's message from the textarea
    const userMessage = form.elements['input'].value;

    // Process the message (you can use your chatbot logic here)

    // Update the output textarea with the response
    const response = userMessage;

    outputTextarea.value = response;

    // Clear the input textarea
    form.elements['input'].value = '';
});