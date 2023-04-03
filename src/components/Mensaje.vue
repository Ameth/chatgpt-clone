<script setup>
import { ref } from 'vue'
import snarkdown from 'snarkdown'
import Avatar from '@/components/Avatar.vue'
import { ChatGPTLogo } from '@/components/Icons.jsx'
import TypingEffect from '@/components/TypingEffect.vue'
import { SpeakIcon, StopSpeakIcon } from './Icons'

import { useMessageStore } from '@/store/messages'
import { storeToRefs } from 'pinia'

const messageStore = useMessageStore()
const { isLoading } = storeToRefs(messageStore)

const isSpeak = ref(false)

defineProps({
    messages: Object
})


const handleSpeak = (prompt) => {
    // console.log("Speaking...")
    if (isSpeak.value) {
        speechSynthesis.cancel()
        isSpeak.value = false
    } else {
        const utterance = new SpeechSynthesisUtterance(prompt)
        utterance.lang = "es-CO"
        utterance.rate = 0.9
        speechSynthesis.speak(utterance)
        isSpeak.value = speechSynthesis.pending
        // console.log(speechSynthesis.pending)

        // Agregar el evento "end" al objeto "utterance"
        utterance.addEventListener('end', () => {
            isSpeak.value = false
        })
    }
}

</script>
<template>
    <div v-for="message in messages" :key="message.id" :class="[message.ia ? 'bg-gptlightgray' : 'bg-gptgray']">
        <article class="flex gap-4 p-6 m-auto max-w-3xl">
            <Avatar>
                <ChatGPTLogo v-if="message.ia" />
                <img v-else src="https://avatars.githubusercontent.com/u/1568292?v=4" alt="Foto de Ameth">
            </Avatar>
            <div className='min-h-[20px] flex flex-1 flex-col items-start gap-4 whitespace-pre-wrap'>
                <div className='prose-invert w-full break-words'>
                    <p>
                        <TypingEffect :text="snarkdown(message.message)" :ia="message.ia" />
                    </p>
                    <button @click="handleSpeak(message.message)" class="hover:bg-gray-600 p-2 rounded-full mt-2"
                        v-show="!isLoading">
                        <SpeakIcon v-show="!isSpeak" className="w-6 h-6" />
                        <StopSpeakIcon v-show="isSpeak" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </article>
    </div>
</template>