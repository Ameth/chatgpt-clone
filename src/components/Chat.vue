<script setup>
import Mensaje from '@/components/Mensaje.vue'
import ChatForm from '@/components/ChatForm.vue'
import { storeToRefs } from "pinia"
import { useMessageStore } from '@/store/messages'

const messageStore = useMessageStore()

const { messages } = storeToRefs(messageStore)

// const messages = []
</script>

<template>
    <div class="flex flex-col h-full flex-1 pl-64">
        <main>
            <Mensaje :messages="messages" />
        </main>
        <ChatForm />
    </div>
</template>