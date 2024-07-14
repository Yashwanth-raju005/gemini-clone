import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCI2_SOrDz8HAtY6e999xn-VGg_9yiPIdY");

async function run(prompt) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  // const prompt = ;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
  return response.text();
}

export default run;

