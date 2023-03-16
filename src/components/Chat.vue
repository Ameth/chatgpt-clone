<script setup>
import Mensaje from '@/components/Mensaje.vue'
import ChatForm from '@/components/ChatForm.vue'
import { storeToRefs } from "pinia"
import { useMessageStore } from '@/store/messages'
import Welcome from './Welcome.vue'

const messageStore = useMessageStore()

const { messages } = storeToRefs(messageStore)

const valid = false
</script>

<template>
    <div class="flex flex-col h-full flex-1 pl-64">
        <main class="relative w-full">
            <div v-if="valid" className='flex-1 overflow-hidden'>
                <div className='h-full overflow-auto'>
                    <Mensaje :messages="messages" />
                    <div className='flex-shrink-0 w-full h-32 md:h-48 bg-gptgray' />
                </div>
            </div>
            <Welcome v-else />
        </main>
        <ChatForm />
    </div>
</template>