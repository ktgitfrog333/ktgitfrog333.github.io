<template>
  弾の移動速度の設定値になります。<br>
  <strong style="color: red;">現在（α版1.0）は陰陽玉、ラップ、グラフの弾へ同じパラメータが適用されます。</strong><br>
  <strong style="color: red;">0で停止して値が大きいほど速く</strong>なります。<br>
  👇下記はデフォルト速度と変更後速度の比較例になります。<br><br>
  <PreviewGifDefault />
  👆上記は<strong style="color: red;">デフォルト速度（8）</strong>のため<strong style="color: red;">通常速度</strong>で移動しています。
  <br><br>
  <img src="https://i.gyazo.com/2d70c5e9f9263549ddc4f60ca593e40d.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後速度（恐らく1？）</strong>のため<strong style="color: red;">遅延速度</strong>で移動しています。
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
