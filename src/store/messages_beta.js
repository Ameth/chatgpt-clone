import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { compress } from 'lz-ts'
import apiOpenAI from '@/api'
import { clearText } from '@/utils'

export const useMessageStore = defineStore('message', () => {
  const messages = ref([])
  const isLoading = ref(false)
  const conversationsMessages = ref([])
  const conversationsInfo = ref([])
  const selectedConversation = ref(null)

  const selectConversation = computed(() => {
    return ({ id }) => {
      selectedConversation.value = id
    }
  })

  const sendPrompt = async ({ prompt }) => {
    let actualConversation = selectedConversation.value

    const userMessageID = crypto.randomUUID()
    const IAMessageID = crypto.randomUUID()

    // const messageIAId = messages.value.length + 1

    // actualizar el estado de los mensajes
    // con el mensaje del usuario y crear
    // un mensaje de la IA vacio
    // mientras hacemos el fetching de datos

    const partialNewConversation = [
      {
        id: userMessageID,
        ia: false,
        message: prompt
      },
      {
        id: IAMessageID,
        ia: true,
        message: ''
      }
    ]

    let fullConversation = partialNewConversation

    // Falta compara bien con el de midu para saber como están estrucutrados los objetos, porque no se bien si el resultado es un objeto o un array
    if (!actualConversation) {
      actualConversation = crypto.randomUUID()

      isLoading.value = true
      selectedConversation.value = actualConversation
      conversationsMessages.value.push({
        [actualConversation]: partialNewConversation
      })
      conversationsInfo.value.push({
        [actualConversation]: {
          id: actualConversation,
          name: 'New conversation'
        }
      })
    } else {
      fullConversation = reactive([
        ...conversationsMessages.value,
        ...partialNewConversation
      ])

      isLoading.value = true
      conversationsMessages.value.push({
        [actualConversation]: fullConversation
      })
    }

    const compressedConversation = compress(JSON.stringify(fullConversation))

    // messages.value = [
    //   ...messages.value,
    //   {
    //     id: messages.value.length,
    //     ia: false,
    //     message: clearText(prompt)
    //   },
    //   {
    //     id: messageIAId,
    //     ia: true,
    //     message: ''
    //   }
    // ]

    try {
      const json = await apiOpenAI({ prompt, compressedConversation })

      //   console.log('Respuesta desde api:', json.response)

      //   messages.value[1].message = json.response

      // Actualizar el mensaje de la IA
      // que tenía el mensaje vacio,
      // con el texto completo

      messages.value = messages.value.map((item) => {
        if (item.id === messageIAId) {
          return {
            ...item,
            message: clearText(json.response)
          }
        }
        return item
      })

      //   console.log('Array de mensajes', messages.value)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    messages,
    isLoading,
    conversationsMessages,
    conversationsInfo,
    selectedConversation,
    selectConversation,
    sendPrompt
  }
})
