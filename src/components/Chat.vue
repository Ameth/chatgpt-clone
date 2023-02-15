<script setup>
import Avatar from '@/components/Avatar.vue'

const messages = [{
    id: 1,
    ia: false,
    message: 'Explica la segunda ley de la termodinamica'
}, {
    id: 2,
    ia: true,
    message: 'Al igual que ocurren con otras leyes de termodinámica, el segundo principio es de tipo empírico, llegamos a él a través de la experimentación. La termodinámica no se preocupa de demostrar por qué las cosas son así, y no de otra forma.'
}]
</script>

<template>
    <div class="flex flex-col h-full flex-1 pl-64">
        <main>
            <div v-for="message in messages" :key="message.id" :class="[message.ia ? 'bg-gptlightgray' : 'bg-gptgray']">
                <article class="flex gap-4 p-4 m-auto max-w-3xl">
                    <Avatar>
                        <img src="https://avatars.githubusercontent.com/u/1568292?v=4" alt="Foto de Ameth">
                    </Avatar>
                    <p>{{ message.message }}</p>
                </article>
            </div>
        </main>
    </div>
</template>