<template>
  蠟燭ゲージの急速回復時の回復速度の設定値になります。<br>
  値が<strong style="color: red;">0で回復なし</strong>で値が<strong style="color: red;">大きいほど速く</strong>なります。
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
