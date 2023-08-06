const { config } = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

config();

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }]
}).then(res => {
    console.log(res.data.choices[0].message.content);
}).catch(err => {
    console.error("Error:", err);
});
