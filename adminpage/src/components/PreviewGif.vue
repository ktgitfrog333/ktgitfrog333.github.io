<template>
  <div v-if="targetPreviewID === IPreviewGif.selectedclearCountdownTimer">
    <div class="gif-container">
      <img src="https://i.gyazo.com/dbff3d96c1924e0ba564ddf7e8f981f5.gif" alt="Image from Gyazo" width="730"/>
    </div>
  </div>
  <div v-else>
    <div class="gif-container">
      <img src="https://i.gyazo.com/dc39a282f1d96fd086c0ac7568724391.gif" alt="Image from Gyazo" width="824"/>
    </div>
  </div>
</template>

<style scoped>
.gif-container {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
}
</style>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { IPreviewGif } from "./IPreviewGif";
export default defineComponent({
  name: 'PreViewGif',
  props: {
    targetPreviewID: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const targetPreviewID = ref<IPreviewGif>(IPreviewGif[props.targetPreviewID as keyof typeof IPreviewGif])
    watch (() => props.targetPreviewID, (newVal) =>
    {
      targetPreviewID.value = IPreviewGif[newVal as keyof typeof IPreviewGif]
    })

    return {
      targetPreviewID,
      IPreviewGif
    }
  }
})
</script>
