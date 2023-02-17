// const OPENAI_API_KEY = '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'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { prompt } = req.body

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Autorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Responde como si fueras la inteligencia artificial conversacional ChatGPT. El usuario te escribe un prompt y tú debes contestar de forma natural. El prompt es:\n\n${prompt}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    })

    if (!response.ok) {
      console.log(response.statusText)
      return res.status(500).json({ error: 'OpenAI API error' })
    }

    const json = await response.json()

    return res.status(200).json({ response: json.choices[0].text })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
}
