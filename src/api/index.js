export default async function apiOpenAI({ prompt }) {
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`
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

    // console.log('response', response)

    if (!response.ok) {
      console.log(response.statusText)
      // return res.status(500).json({ error: 'OpenAI API error' })
    }

    // console.log('json api', json)

    const json = await response.json()

    if (json.error) {
      console.log(json.error.message)
    }

    const data = { response: json.choices[0].text }

    return data
  } catch (e) {
    console.error(e)
    // res.status(500).json({ error: e })
  }
}
