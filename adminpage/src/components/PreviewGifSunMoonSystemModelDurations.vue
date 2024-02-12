<template>
  ボタンを押しっぱなしにした際に昼夜が切り替わる遷移速度の設定値になります。<br>
  値が<strong style="color: red;">0で遷移なし</strong>で値が<strong style="color: red;">大きいほど速く</strong>遷移されます。<br>
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
