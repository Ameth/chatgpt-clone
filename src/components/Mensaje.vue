<script setup>
import Avatar from '@/components/Avatar.vue'
import { ChatGPTLogo } from '@/components/Icons.jsx'
import TypingEffect from '@/components/TypingEffect.vue'

defineProps({
    messages: Object
})

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
                        <TypingEffect :text="message.message" :ia="message.ia" />
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>