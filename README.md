# ChatGPT Nodejs Sample

This is an example of using the ChatGPT API with a Node.js application.

## Configure and Run this Project

Follow the steps below to configure and run the project:

1. **Clone this repository:**

    ```sh
    git clone <url>
    ```

2. **Navigate to the chatGPT-nodejs-app directory:**

    ```sh
    cd chatGPT-nodejs-app
    ```

3. **Create a `.env` file and add your OpenAI API key:**

    ```sh
    echo "OPENAI_SECRET_KEY=Your OpenAI Key" > .env
    ```

4. **Install the required dependencies:**

    ```sh
    npm install
    ```

5. **Run the Node.js script:**

    ```sh
    node index.js
    ```

## Explanation

This project demonstrates how to use the OpenAI API to get responses from ChatGPT using Node.js. The example includes setting up the environment, making a request to the API, and handling the response.

### Key Files

- `index.js`: The main script that makes the API request.
- `.env`: A file to securely store your OpenAI API key.

### Dependencies

- `axios`: For making HTTP requests.
- `dotenv`: For loading environment variables from a `.env` file.

### Example Prompt

The script includes a sample prompt: "What is the capital of India?" Modify the prompt as needed to get different responses from ChatGPT.

## Notes

- Ensure you have Node.js installed on your machine.
- Keep your API key secure and do not expose it in public repositories.
- Check your OpenAI usage and billing to avoid exceeding your quota.

Feel free to modify and expand this project as needed.
