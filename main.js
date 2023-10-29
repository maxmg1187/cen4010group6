const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: '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',
});
const prompt = 'Translate the following English text to French: "Hello, how are you?"';

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();