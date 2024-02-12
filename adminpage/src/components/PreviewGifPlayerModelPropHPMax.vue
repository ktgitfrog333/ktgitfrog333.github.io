<template>
  プレイヤーの最大体力の設定値になります。<br>
  <strong style="color: red;">1以上の値</strong>を設定して下さい。<br>
  👇下記はデフォルト最大体力値と変更後最大体力値の比較例になります。<br><br>
  <PreviewGifDefault />
  👆上記は<strong style="color: red;">デフォルト最大体力値（10）</strong>のため攻撃を<strong style="color: red;">10回</strong>受けてリザルト画面表示となります。
  <br><br>
  <img src="https://i.gyazo.com/e12b8efd96129673fd59d9afcd50d830.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後最大体力値（3）</strong>のため攻撃を<strong style="color: red;">3回</strong>受けてリザルト画面表示となります。
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
