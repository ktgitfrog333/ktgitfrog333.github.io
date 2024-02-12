<template>
  <img src="https://i.gyazo.com/dbff3d96c1924e0ba564ddf7e8f981f5.gif" alt="Image from Gyazo" width="730"/>
  制限時間（秒）が設定可能です。<br>
  設定した時間から<strong style="color: red;">1秒ずつカウントダウン</strong>して0で止まります。
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PreviewGifSelectedclearCountdownTimer',
})
</script>
