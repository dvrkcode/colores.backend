import { Configuration, OpenAIApi } from "openai";

async function AICall(require) {
  const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const prompt = `Listame una paleta de 3 colores con su nombre y codigo hexadecimal, separados por saltos de lineas en format '#codigo hex'-nombre color, para ${require}, que combinen, enfocados en la creacion de una marca o aplicación, List.`
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.8,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  return response.data
};

export default AICall;