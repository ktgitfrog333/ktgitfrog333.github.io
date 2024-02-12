<template>
  陰陽玉系のUIオブジェクト<strong style="color: red;">（小さい5つの円）</strong>がプレイヤーを中心とした場合に外周に向けての距離の設定値になります。<br>
  <strong style="color: red;">ピクセル単位ではない</strong>ので注意。<br>
  👇下記はデフォルト距離と変更後距離の比較例になります。<br><br>
  <PreviewGifDefault />
  👆上記は<strong style="color: red;">デフォルト距離（恐らく5？）</strong>のため<strong style="color: red;">陰陽玉2.5個分ほど</strong>の距離感になります。
  <br><br>
  <img src="https://i.gyazo.com/fe6f1fbc95caaf4eb58877bb1ef4683d.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後距離（恐らく1？）</strong>のため<strong style="color: red;">陰陽玉0個分ほど</strong>の距離感になります。
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
