<template>
  自動回転状態の時の回転速度の設定値になります。<br>
  👇下記はデフォルト速度と変更後速度の比較例になります。<br><br>
  <PreviewGifDefault />
  👆上記は<strong style="color: red;">デフォルト速度（0.01）</strong>のため<strong style="color: red;">通常速度</strong>で回転しています。
  <br><br>
  <img src="https://i.gyazo.com/042916ee8bf97df3afea13b407721edb.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後速度（恐らく0.1？）</strong>のため<strong style="color: red;">高速</strong>で回転しています。
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
