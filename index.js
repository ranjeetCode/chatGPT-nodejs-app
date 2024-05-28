const axios = require('axios'); // Import the Axios library to make HTTP requests
require("dotenv").config(); // Load environment variables from a .env file into process.env

const apiKey = process.env.OPENAI_SECRET_KEY; // Retrieve the OpenAI API key from the environment variables
//console.log(apiKey); // Uncomment this line to print the API key to the console for debugging purposes

// Define an asynchronous function to get a response from ChatGPT
async function getChatGPTResponse(prompt) {
    const url = 'https://api.openai.com/v1/chat/completions'; // The endpoint for the OpenAI API to get chat completions
    const headers = {
        'Content-Type': 'application/json', // Specify the content type as JSON
        'Authorization': `Bearer ${apiKey}` // Set the Authorization header with the Bearer token
    };
    const data = {
        model: 'gpt-3.5-turbo', // Specify the model to use for generating responses
        messages: [{ role: 'user', content: prompt }], // Provide the prompt as a user message in the conversation
        max_tokens: 150, // Set the maximum number of tokens (words/pieces of words) in the response
        temperature: 0.7 // Set the temperature for the response (controls randomness)
    };

    try {
        // Make a POST request to the OpenAI API with the specified URL, data, and headers
        const response = await axios.post(url, data, { headers: headers });
        // Extract the generated text from the API response
        const generatedText = response.data.choices[0].message.content.trim();
        console.log('ChatGPT Response:', generatedText); // Print the generated response to the console
    } catch (error) {
        // Print an error message if the request fails, including detailed error information if available
        console.error('Error communicating with OpenAI API:', error.response ? error.response.data : error.message);
    }
}

// Define a sample prompt to send to ChatGPT
const userPrompt = "What is the capital of India?"; // Example prompt
// Call the function to get a response from ChatGPT with the specified prompt
getChatGPTResponse(userPrompt);
