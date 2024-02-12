<template>
  昼夜ゲージの上部の欠け部分を補正するためのマスク角度の設定値になります。<br>
  値が<strong style="color: red;">0で真円（360度）</strong>で値が<strong style="color: red;">大きいほど上部を中止に切り開かれる様に欠け（359度以下）</strong>表示になります。<br>
  <img src="https://i.gyazo.com/18eee14b5470c6655f693bf890555096.png" alt="Image from Gyazo" width="730"/>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import PreviewGifDefault from './PreviewGifDefault.vue';

export default defineComponent({
  name: 'PreviewGifOnmyoBulletModelMoveDirectionX',
  components: {
    PreviewGifDefault
  },
})
</script>
