<template>
<a :href="imageUrl"><img :src="imageUrl" :alt="imageAlt" :width="imageWidth"/></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
name: 'DefaultImage',
props: {
    imageUrl: {
    type: String,
    default: 'https://i.gyazo.com/09fe58662ecd67becf8887846afa18e9.gif'
    },
    imageAlt: {
    type: String,
    default: 'Image from Gyazo'
    },
    imageWidth: {
    type: String,
    default: '1280'
    }
}
})
</script>
