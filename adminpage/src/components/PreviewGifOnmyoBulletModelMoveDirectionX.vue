<template>
  <strong style="color: red;">XとY共通</strong><br>
  弾の移動方角（座標）の設定値になります。<br>
  👇下記はデフォルト座標と変更後座標の比較例になります。<br><br>
  <PreviewGifDefault />
  👆上記は<strong style="color: red;">デフォルト座標（0, -1）</strong>のため当該オブジェクトを起点に<strong style="color: red;">下方向</strong>へ移動しています。
  <br><br>
  <img src="https://i.gyazo.com/82842e42573ab613d61451a444254c5d.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後座標（0, 1）</strong>のため当該オブジェクトを起点に<strong style="color: red;">上方向</strong>へ移動しています。
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
