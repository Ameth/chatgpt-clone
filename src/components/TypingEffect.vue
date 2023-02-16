<script setup>
import { ref, computed, onMounted, reactive } from 'vue'

const props = defineProps({
    text: String,
    ia: Boolean
})

const text = computed(() => props.text)
const ia = computed(() => props.ia)

const displayText = ref("")
const currentIndex = ref(0)
const showCursor = ref(true)


onMounted(() => {
    if (!text.value?.length) return

    const randomTime = Math.floor(Math.random() * 40) + 15

    const intervalId = setInterval(() => {
        if (currentIndex.value >= text.value.length) {
            clearInterval(intervalId)
            showCursor.value = false
            return
        }

        const nextIndex = text.value.indexOf(' ', currentIndex.value + 1)
        if (nextIndex < 0) { // ha llegado al final
            displayText.value = text.value
            currentIndex.value = text.value.length
            return
        }

        displayText.value = text.value.slice(0, nextIndex)
        currentIndex.value += 1
    }, randomTime)

    return () => clearInterval(intervalId)
})

const classObjetc = computed(() => ({
    'after:content-["▋"] after:ml-1 after:animate-typing': showCursor.value
}))

const textElement = computed(() => ia.value ? displayText.value : text.value)

</script>
<template>
    <span :class="classObjetc">
        {{ textElement }}
    </span>
</template>