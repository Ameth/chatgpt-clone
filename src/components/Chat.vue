<script setup>
import Mensaje from '@/components/Mensaje.vue'
import ChatForm from '@/components/ChatForm.vue'

const messages = [{
    id: 1,
    ia: false,
    message: 'Explica la segunda ley de la termodinamica'
}, {
    id: 2,
    ia: true,
    message: `Sí, en teoría es posible conectar el dispositivo de control biométrico Anviz GC150 a través de una dirección IP pública para leer los registros de forma remota. Sin embargo, hay varias consideraciones importantes que debe tener en cuenta antes de hacerlo.

En primer lugar, debe asegurarse de que el dispositivo esté configurado correctamente para permitir el acceso remoto y de que tenga una dirección IP pública asignada.Si no está seguro de cómo hacerlo, puede consultar el manual de usuario del dispositivo o contactar al fabricante para obtener ayuda.

En segundo lugar, debe tener en cuenta la seguridad de la conexión remota.El acceso remoto a un dispositivo a través de una dirección IP pública puede ser vulnerable a ataques y puede comprometer la seguridad de los datos almacenados en el dispositivo.Por lo tanto, es importante implementar medidas de seguridad adecuadas, como usar una conexión cifrada(por ejemplo, mediante el protocolo HTTPS), establecer contraseñas seguras y cambiarlas regularmente, y limitar el acceso remoto solo a usuarios autorizados.

En resumen, es posible conectar el dispositivo de control biométrico Anviz GC150 a través de una dirección IP pública para leer los registros de forma remota, pero es importante asegurarse de que esté configurado correctamente y de implementar medidas de seguridad adecuadas para proteger los datos.`
}]
</script>

<template>
    <div class="flex flex-col h-full flex-1 pl-64">
        <main>
            <Mensaje :messages="messages" />
        </main>
        <ChatForm />
    </div>
</template>