import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import apiOpenAI from '@/api'
import { clearText } from '@/utils'

export const useMessageStore = defineStore('message', () => {
  const messages = ref([])
  const isLoading = ref(false)
  const startChat = ref(false)
  const conversationsMessages = reactive({})
  const conversationsInfo = reactive({})
  const selectedConversation = ref(null)

  const selectConversation = computed(() => {
    return ({ id }) => {
      selectedConversation.value = id
    }
  })

  const sendPrompt = async ({ prompt }) => {
    // console.log('Desde el store:', prompt)
    const messageIAId = messages.value.length + 1

    // actualizar el estado de los mensajes
    // con el mensaje del usuario y crear
    // un mensaje de la IA vacio
    // mientras hacemos el fetching de datos

    messages.value = [
      ...messages.value,
      {
        id: messages.value.length,
        ia: false,
        message: clearText(prompt)
      },
      {
        id: messageIAId,
        ia: true,
        message: ''
      }
    ]

    try {
      const json = await apiOpenAI({ prompt })
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
    startChat,
    conversationsMessages,
    conversationsInfo,
    selectedConversation,
    selectConversation,
    sendPrompt
  }
})