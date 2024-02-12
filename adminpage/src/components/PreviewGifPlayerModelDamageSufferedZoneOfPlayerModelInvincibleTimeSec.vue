<template>
  プレイヤーが攻撃を受けた時の無敵時間（秒）の設定値になります。<br>
  値が<strong style="color: red;">大きいほど長く</strong>、<strong style="color: red;">小さいほど短い</strong>時間無敵になります。<br>
  👇下記はデフォルト無敵時間と変更後無敵時間の比較例になります。<br><br>
  <img src="https://i.gyazo.com/e12b8efd96129673fd59d9afcd50d830.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">デフォルト無敵時間（1）</strong>のため攻撃を<strong style="color: red;">1秒</strong>以上ごとに受けています。
  <br><br>
  <img src="https://i.gyazo.com/ce3a0df33ea9ba7e1e85212bd3fa6048.gif" alt="Image from Gyazo" width="730"/>
  👆上記は<strong style="color: red;">変更後無敵時間（3）</strong>のため攻撃を<strong style="color: red;">3秒</strong>以上ごとに受けています。
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
