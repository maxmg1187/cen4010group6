import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "Um5rMfu1UXOSOXFsLooKT3BlbkFJ57wiMPwFqkDvgagjPON3"
});

const chatCompletion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Hello!"}],
});
console.log(chatCompletion.choices[0].message);

const completion = await openai.completions.create({
  model: "text-davinci-003",
  prompt: "This story begins",
  max_tokens: 30,
});
console.log(completion.choices[0].text);