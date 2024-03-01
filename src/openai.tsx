// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({ apiKey: "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" });
// const openai = new OpenAIApi(configuration);
// import { openai } from 'https://cdn.jsdelivr.net/npm/openai/dist/openai.es.js';
import OpenAI from "openai";
const openai =  new OpenAI({ apiKey: "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" , dangerouslyAllowBrowser: true });
// const apiKey = "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"; // Replace this with your actual API key
// openai.apiKey = apiKey;


export async function sendMsgToOpenAi(message : string) {
    const res = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256
    });
    console.log(res.choices[0].text.trim());

    return res.choices[0].text.trim();

}

// import { openai } from 'https://cdn.jsdelivr.net/npm/openai/dist/openai.es.js';

//     const apiKey = "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"; // Replace this with your actual API key
//     openai.apiKey = apiKey;

//     const prompt = message; // Replace this with your actual prompt

//     openai.complete({
//       engine: 'gpt-3.5-turbo-instruct',
//       prompt: prompt,
//       maxTokens: 500, // You can adjust this based on your desired question length
//     })
//     .then(function(response) {
//       const question = response.choices[0].text.trim();
//       console.log(question);
//     })
//     .catch(function(err) {
//       console.error('Error:', err);
//     });