<script setup>
import { PlusIcon } from '@/components/Icons.jsx'
import { useMessageStore } from '@/store/messages'
import { storeToRefs } from "pinia"

const messageStore = useMessageStore()

const { isLoading, startChat, messages } = storeToRefs(messageStore)

function newChat() {
    isLoading.value = false
    startChat.value = false
    messages.value = []
}



</script>
<template>
        <div class="bg-gptdarkgray fixed flex w-64 h-screen flex-col">
            <nav class="flex flex-col flex-1 h-full p-2 space-y-1">
                <button
                    className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20'
                    @click="newChat"
                >
                <PlusIcon />
                New chat
            </button>
        </nav>
    </div>
</template>