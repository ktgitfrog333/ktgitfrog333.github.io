<template>
  ジョッキーコマンドの入力履歴最大件数の設定値になります。<br>
  ※ジョッキーコマンドとは、五芒星回転により発生するスクラッチ等のコマンドを指します。<br>
  値が<strong style="color: red;">0でコマンド無し</strong>で値が<strong style="color: red;">大きいほどコマンド発動判定が甘く</strong>なります。<br><br>
  👇下記の表はスクラッチ検証の際のサンプルになります。<br>
  <strong style="color: red;">赤枠選択箇所</strong>がコマンドの入力が保持された件数になります。<br>
  <img src="https://i.gyazo.com/6d68163967c931ae3aa1d5aa6f0a80c3.png" alt="Image from Gyazo" width="730"/>
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
