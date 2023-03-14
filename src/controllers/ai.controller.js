import AICall from "../services/ai.service.js"
import AIAdapter from '../adapters/ai-response.adapter.js';

async function AIController(req, res) {
  try {
    const { message } = req.body
    const AIResponse = await AICall(message)
    const dataAdapter = AIAdapter(AIResponse)
    res.status(200).send(dataAdapter)
  } catch ( err ) {
    console.log(err)
  }
}

export default AIController;