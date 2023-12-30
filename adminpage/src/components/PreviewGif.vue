<template>
  <div v-if="targetPreviewID === IPreviewGif.selectedPlayBgmName">
    <div class="gif-container">
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.selectedFinalStage">
    <div class="gif-container">
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.selectedSkyBox">
    <div class="gif-container">
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.selectedclearCountdownTimer">
    <div class="gif-container">
      <img src="https://i.gyazo.com/dbff3d96c1924e0ba564ddf7e8f981f5.gif" alt="Image from Gyazo" width="730"/>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.enemyModelPropMoveSpeed">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/066c7c4101aca52ed8283efc621a6540"><img src="https://i.gyazo.com/066c7c4101aca52ed8283efc621a6540.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.enemyModelPropHpMax">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/4cac4af09d8a70e9ccd617cd19821cb5"><img src="https://i.gyazo.com/4cac4af09d8a70e9ccd617cd19821cb5.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec">
    <div class="gif-container">
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.enemiesSpawnModelInvincibleTimeSec">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/e636f773962238dfec99a3cee1b209cf"><img src="https://i.gyazo.com/e636f773962238dfec99a3cee1b209cf.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.objectsPoolModelCountLimit">
    <div class="gif-container">
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.onmyoBulletModelMoveDirectionX">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/82842e42573ab613d61451a444254c5d"><img src="https://i.gyazo.com/82842e42573ab613d61451a444254c5d.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.onmyoBulletModelMoveDirectionY">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/82842e42573ab613d61451a444254c5d"><img src="https://i.gyazo.com/82842e42573ab613d61451a444254c5d.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.onmyoBulletModelMoveSpeed">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/2d70c5e9f9263549ddc4f60ca593e40d"><img src="https://i.gyazo.com/2d70c5e9f9263549ddc4f60ca593e40d.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.onmyoTurretModelInstanceRateTimeSec">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/0377a26cd3d4941e133e338abc5aaef7"><img src="https://i.gyazo.com/0377a26cd3d4941e133e338abc5aaef7.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.pentagramSystemModelAutoSpinSpeed">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/042916ee8bf97df3afea13b407721edb"><img src="https://i.gyazo.com/042916ee8bf97df3afea13b407721edb.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.pentagramTurnTableViewAngleCorrectionValue">
    <div class="gif-container">
      <a href="https://gyazo.com/8af76de301694e8e32d749126a02f7de"><img src="https://i.gyazo.com/8af76de301694e8e32d749126a02f7de.gif" alt="Image from Gyazo" width="1280"/></a>
      <a href="https://gyazo.com/0e9001ce1802ceef5812fe817892d078"><img src="https://i.gyazo.com/0e9001ce1802ceef5812fe817892d078.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.pentagramTurnTableModelDistance">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/fe6f1fbc95caaf4eb58877bb1ef4683d"><img src="https://i.gyazo.com/fe6f1fbc95caaf4eb58877bb1ef4683d.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.playerModelPropMoveSpeed">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/e12b8efd96129673fd59d9afcd50d830"><img src="https://i.gyazo.com/e12b8efd96129673fd59d9afcd50d830.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.playerModelPropHPMax">
    <div class="gif-container">
      <PreviewGifDefault />
      <a href="https://gyazo.com/e12b8efd96129673fd59d9afcd50d830"><img src="https://i.gyazo.com/e12b8efd96129673fd59d9afcd50d830.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec">
    <div class="gif-container">
      <a href="https://gyazo.com/9b6e80e825226a1c1650b37a65be0a6c"><img src="https://i.gyazo.com/9b6e80e825226a1c1650b37a65be0a6c.gif" alt="Image from Gyazo" width="1280"/></a>
      <a href="https://gyazo.com/ce3a0df33ea9ba7e1e85212bd3fa6048"><img src="https://i.gyazo.com/ce3a0df33ea9ba7e1e85212bd3fa6048.gif" alt="Image from Gyazo" width="1280"/></a>
    </div>
  </div>
  <div v-else-if="targetPreviewID === IPreviewGif.downloadJson">
    <div class="gif-container">
      <a href="https://gyazo.com/18e787727f85e81eeaf79f309dda06f8"><img src="https://i.gyazo.com/18e787727f85e81eeaf79f309dda06f8.gif" alt="Image from Gyazo" width="1138"/></a>
      <a href="https://gyazo.com/e9e6b0fc5dfdbfb67bc7ad42dd11a0b2"><img src="https://i.gyazo.com/e9e6b0fc5dfdbfb67bc7ad42dd11a0b2.gif" alt="Image from Gyazo" width="740"/></a>
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
import PreviewGifDefault from "./PreviewGifDefault.vue";
export default defineComponent({
  name: 'PreViewGif',
  components: {
    PreviewGifDefault
  },
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

