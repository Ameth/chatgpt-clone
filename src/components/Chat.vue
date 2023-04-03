<script setup>
import { ref } from 'vue'
import Mensaje from '@/components/Mensaje.vue'
import ChatForm from '@/components/ChatForm.vue'
import Welcome from './Welcome.vue'
import { useMessageStore } from '@/store/messages'
import { storeToRefs } from 'pinia'

const messageStore = useMessageStore()

const { messages, selectedConversation, startChat } = storeToRefs(messageStore)

// const valid = ref(false)
</script>

<template>
    <div class="flex flex-col h-full flex-1 pl-64">
        <main class="relative w-full">
                    <div v-if="startChat" className="flex-1 overflow-hidden">
                    <div className="h-full overflow-auto">
                        <Mensaje :messages="messages" />
                        <div className="flex-shrink-0 w-full h-32 md:h-48 bg-gptgray" />
                </div>
            </div>
            <Welcome v-else />
        </main>
        <ChatForm />
    </div>
</template>
