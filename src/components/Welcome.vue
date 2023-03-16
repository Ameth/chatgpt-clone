<script setup>
import { SunIcon, VueIcon, GitHubIcon, TailwindLogo } from './Icons'

const EXAMPLES = [
    '¿Cómo iterar un array en JavaScript?',
    'Explícame por qué vuela un avión',
    '¿Por qué se dice que un gato tiene 7 vidas?'
]

const sendPrompt = ({ promt }) => {
    console.log(promt)
}

</script>

<template>
    <section class="flex justify-center w-full m-auto">
        <div
            className='w-full px-6 text-gray-800 md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col dark:text-gray-100'>
            <h1
                className='text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 flex gap-2 items-center justify-center text-green-300'>
                VueGPT
            </h1>

            <p className='block max-w-md m-auto mb-10 text-center align-middle'>
                Esta página <strong>no es la oficial de ChatGPT</strong>. Es un clon creado con Vue
                <VueIcon className="inline-block w-6 h-6" /> y Tailwind
                <TailwindLogo className="inline-block w-6 h-6" /> para fines educativos.
            </p>

            <div className='flex max-w-xl m-auto gap-x-2'>
                <a className='flex items-center justify-center w-[250px] p-2 font-bold text-white bg-black rounded-full gap-x-2 hover:bg-black/50 '
                    href='https://github.com/ameth/chatgpt-clone'>
                    <GitHubIcon className='w-6 h-6' /> Ver código en GitHub
                </a>
            </div>

            <h3 className='flex items-center justify-center mt-8 mb-2 text-lg gap-x-2'>
                <SunIcon />Ejemplos
            </h3>

            <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                <button v-for="(item, index) in EXAMPLES" :key="index" @click="sendPrompt({ promt: item })"
                    class='w-full p-3 rounded-md bg-gray-50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-gray-900'>
                    {{ item }} →
                </button>
            </ul>
        </div>
    </section>
</template>