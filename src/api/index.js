import { useMessageStore } from '@/store/messages'
import { storeToRefs } from 'pinia'

export default async function apiOpenAI({ prompt }) {
  const messageStore = useMessageStore()

  const { isLoading } = storeToRefs(messageStore)
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
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

    isLoading.value = false
    return data
  } catch (e) {
    console.error(e)
    // res.status(500).json({ error: e })
  }
}
