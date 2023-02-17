<script setup>
import { ref } from 'vue'
import { SendIcon } from '@/components/Icons.jsx'
import { useMessageStore } from '@/store/messages'

const messageStore = useMessageStore()
const { sendPrompt } = messageStore

const newText = ref("")
const textArea = ref(null)

const handleSubmit = (event) => {
    event?.preventDefault()
    if (newText.value !== "") {
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
    <section class="absolute bottom-0 w-full left-0 right-0 ml-32">
        <form action="" class="flex flex-row max-w-3xl pt-6 m-auto mb-6" @submit="handleSubmit"
            @keydown.enter.exact="handleSubmit">
            <div
                class="relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-gptlightgray border-gray-900/50">
                <textarea ref="textArea" v-model="newText" @input="handleChange" rows="1" tabindex="0" autofocus
                    class="w-full h-[24px] resize-none bg-transparent m-0 border-0 outline-none"></textarea>
                <button type="submit" class="absolute p-1 rounded-md bottom-2.5 right-2.5">
                    <SendIcon />
                </button>
            </div>
        </form>
    </section>
</template>