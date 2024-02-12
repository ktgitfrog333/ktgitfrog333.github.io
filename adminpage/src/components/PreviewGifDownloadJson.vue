<template>
  <img src="https://i.gyazo.com/18e787727f85e81eeaf79f309dda06f8.gif" alt="Image from Gyazo" width="780"/>
  ダウンロードしたJSONファイルを<strong style="color: red;">ゲームデータへ反映</strong>して下さい。<br>
  <ol>
    <li>ダウンロードフォルダ内のJSONファイルをコピーする</li>
    <li>ゲームデータのディレクトリを開く</li>
    <ul><li>&nbsp;ここでは、<span style="background-color: rgb(207, 207, 207); color: red;">＜デスクトップ＞\DJ_Onmyoji_AKA_AbeNoSeimei_v0.3.0\SaveDatas</span>を開いています。</li></ul>
    <li>コピーしたJSONファイルを張り付け（上書きする）</li>
  </ol>
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
