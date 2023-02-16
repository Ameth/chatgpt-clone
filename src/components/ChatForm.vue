<script setup>
import { SendIcon } from '@/components/Icons.jsx'
</script>
<template>
    <section class="absolute bottom-0 w-full left-0 right-0 ml-32">
        <form action="" class="flex flex-row max-w-3xl pt-6 m-auto mb-6">
            <div
                class="relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-gptlightgray border-gray-900/50">
                <textarea name="" id=""
                    class="w-full h-[24px] resize-none bg-transparent m-0 border-0 outline-none"></textarea>
                <button class="absolute p-1 rounded-md bottom-2.5 right-2.5">
                    <SendIcon />
                </button>
            </div>
        </form>
    </section>
</template>