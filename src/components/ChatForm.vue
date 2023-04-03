<script setup>
import { ref } from 'vue'
import { SendIcon } from '@/components/Icons.jsx'
import LoadingButton from './LoadingButton.vue'
import { useMessageStore } from '@/store/messages'
import { storeToRefs } from "pinia"

const messageStore = useMessageStore()

const { isLoading, startChat } = storeToRefs(messageStore)
const { sendPrompt } = messageStore

const newText = ref("")
const textArea = ref(null)

const handleSubmit = (event) => {
    event?.preventDefault()
    if (newText.value !== "") {
        isLoading.value = true
        startChat.value = true
        sendPrompt({ prompt: newText.value })
        newText.value = ""
        textArea.value.style.height = '24px'
    }
}

const handleChange = (e) => {
    // console.log(e)

    const el = e.target
    const scrollHeight = el.scrollHeight
    el.style.height = scrollHeight + 'px'

}

// Reemplazado por @keydown.enter.exact="handleSubmit"

// const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//         e.preventDefault()
//         handleSubmit()
//     }
// }

</script>
<template>
    <section
        class="fixed bottom-0 left-0 right-0 w-full px-2 border-t lg:ml-32 md:border-t-0 dark:border-white/20 md:border-transparent bg-gradient">
        <form action="" class="flex flex-row max-w-3xl pt-6 m-auto mb-2" @submit="handleSubmit"
            @keydown.enter.exact="handleSubmit">
            <div
                class="relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-gptlightgray border-gray-900/50">
                <textarea ref="textArea" v-model="newText" @input="handleChange" rows="1" tabindex="0" autofocus
                    class="w-full h-[24px] resize-none bg-transparent m-0 border-0 outline-none">
                                                        </textarea>
                <button type="submit" class="absolute p-1 rounded-md bottom-2.5 right-2.5">
                    <LoadingButton v-if="isLoading" />
                    <SendIcon v-else />
                </button>
            </div>
        </form>
        <div className='px-3 pt-2 pb-3 text-xs text-center text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6'>
            Clon de ChatGPT creado por <a href='https://twitter.com/amethordonez' target='_blank' rel='noreferrer'
                className='underline'>@ameth</a> basado en el desarrollo realizado por <a href='https://twitch.tv/midudev'
                target='_blank' rel='noreferrer' className='underline'>@midudev</a>
            . Creado con fines educativos y de aprendizaje.
        </div>
    </section>
</template>