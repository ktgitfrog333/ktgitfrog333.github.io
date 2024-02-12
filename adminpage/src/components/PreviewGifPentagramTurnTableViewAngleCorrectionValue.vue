<template>
  スティック操作によって回転する際の操作感度（速度加算値）の設定値になります。<br>
  👇下記はデフォルト加算値と変更後加算値の比較例になります。<br><br>
  <img src="https://i.gyazo.com/8af76de301694e8e32d749126a02f7de.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">デフォルト値（5）</strong>のため<strong style="color: red;">通常速度</strong>で回転しています。
  <br><br>
  <img src="https://i.gyazo.com/0e9001ce1802ceef5812fe817892d078.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後速度（恐らく1？）</strong>のためスティックをかなり早く回しても<strong style="color: red;">速度が伝達されずに</strong>回転しています。
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
