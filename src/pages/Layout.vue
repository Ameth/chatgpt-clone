<script setup>
import Aside from '../components/Aside.vue'
</script>

<template>
    <div class="w-full relative bg-gptgray h-screen">
        <Aside />
        <slot />
    </div>
</template>