<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const loadingStates = [
    [true, false, false],
    [true, true, false],
    [true, true, true]
]

const index = ref(0)
// const showSecond = ref(loadingStates[index.value][1])
// const showThird = ref(loadingStates[index.value][2])

const intervalId = ref(null)

onMounted(() => {
    // console.log("Loading Montado")
    const intervalId = setInterval(() => {
        index.value = (prevIndex => {
            const newIndex = prevIndex + 1
            return newIndex > 2 ? 0 : newIndex
        })(index.value)
        // console.log(index.value)
    }, 400)
})

onUnmounted(() => clearInterval(intervalId.value))

// const [, showSecond, showThird] = loadingStates[index.value]
const showSecond = computed(() => loadingStates[index.value][1])
const showThird = computed(() => loadingStates[index.value][2])

</script>
<template>
    <div class='text-2xl'>
        <span class=''>·</span>
        <span :class="{ invisible: !showSecond }">·</span>
        <span :class="{ invisible: !showThird }">·</span>
    </div>
</template>