<template>
  <div class="accordion sticky-bottom" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed blinking-background" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          💡{{ IPreviewGif[targetPreviewID] }}の使い方はこちら
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div v-if="targetPreviewID === IPreviewGif.selectedPlayBgmName">
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.selectedFinalStage">
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.selectedSkyBox">
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.selectedclearCountdownTimer">
            <PreviewGifSelectedclearCountdownTimer />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.enemyModelPropMoveSpeed">
            <PreviewGifEnemyModelPropMoveSpeed />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.enemyModelPropHpMax">
            <PreviewGifEnemyModelPropHpMax />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec">
          </div>
          <!-- <div v-else-if="targetPreviewID === IPreviewGif.enemiesSpawnModelInvincibleTimeSec">
            <PreviewGifDefault />
            <img src="https://i.gyazo.com/e636f773962238dfec99a3cee1b209cf.gif" alt="Image from Gyazo" width="1280"/>
          </div> -->
          <div v-else-if="targetPreviewID === IPreviewGif.objectsPoolModelCountLimit">
            <PreviewGifObjectsPoolModelCountLimit />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.onmyoBulletModelMoveDirectionX">
            <PreviewGifOnmyoBulletModelMoveDirectionX />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.onmyoBulletModelMoveDirectionY">
            <PreviewGifOnmyoBulletModelMoveDirectionX />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.onmyoBulletModelMoveSpeed">
            <PreviewGifOnmyoBulletModelMoveSpeed />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.pentagramSystemModelAutoSpinSpeed">
            <PreviewGifPentagramSystemModelAutoSpinSpeed />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.pentagramTurnTableViewAngleCorrectionValue">
            <PreviewGifPentagramTurnTableViewAngleCorrectionValue />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.pentagramTurnTableModelDistance">
            <PreviewGifPentagramTurnTableModelDistance />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.playerModelPropMoveSpeed">
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.playerModelPropHPMax">
            <PreviewGifPlayerModelPropHPMax />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec">
            <PreviewGifPlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.wrapTurretModelMoveDirectionX">
            <PreviewGifOnmyoBulletModelMoveDirectionX />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.wrapTurretModelMoveDirectionY">
            <PreviewGifOnmyoBulletModelMoveDirectionX />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.graffitiTurretModelMoveDirectionX">
            <PreviewGifOnmyoBulletModelMoveDirectionX />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.graffitiTurretModelMoveDirectionY">
            <PreviewGifOnmyoBulletModelMoveDirectionX />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.sunMoonSystemModelDurations">
            <PreviewGifSunMoonSystemModelDurations />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.levelDesignMainSkillLists">
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.clearCountdownTimerCircleViewMaskAngle">
            <PreviewGifClearCountdownTimerCircleViewMaskAngle />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.shikigamiSkillSystemModelCandleInfoLimitCandleResorceMax">
            <PreviewGifShikigamiSkillSystemModelCandleInfoLimitCandleResorceMax />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.shikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec">
            <PreviewGifShikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec />
          </div>
          <div v-else-if="targetPreviewID === IPreviewGif.pentagramSystemModelInputHistoriesLimit">
            <PreviewGifPentagramSystemModelInputHistoriesLimit />
          </div>
          <!-- TODO:9.画面入力イメージGIF判定を追加 -->
          <div v-else-if="targetPreviewID === IPreviewGif.downloadJson">
            <PreviewGifDownloadJson />
          </div>
          <div v-else>
            <PreviewGifInitialize />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#collapseOne {
  background-color: #ffffe0; /* 薄黄色のカラーコード */
}
@keyframes slowBlink {
  0%, 100% { background-color: #ffffff; } /* 点滅の開始と終了の色 */
  50% { background-color: #fff347; } /* 点滅の中間の色 */
}

.blinking-background {
  animation: slowBlink 3s infinite; /* 3秒間隔で無限に繰り返す */
}
.sticky-bottom {
  position: sticky;
  bottom: 0;
  height: auto; /* または必要に応じて調整 */
  overflow-y: auto;
}
</style>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { IPreviewGif } from './IPreviewGif'
import PreviewGifDefault from './PreviewGifDefault.vue'
import PreviewGifSelectedclearCountdownTimer from './PreviewGifSelectedclearCountdownTimer.vue'
import PreviewGifEnemyModelPropMoveSpeed from './PreviewGifEnemyModelPropMoveSpeed.vue'
import PreviewGifEnemyModelPropHpMax from './PreviewGifEnemyModelPropHpMax.vue'
import PreviewGifObjectsPoolModelCountLimit from "./PreviewGifObjectsPoolModelCountLimit.vue"
import PreviewGifOnmyoBulletModelMoveDirectionX from "./PreviewGifOnmyoBulletModelMoveDirectionX.vue";
import PreviewGifOnmyoBulletModelMoveSpeed from "./PreviewGifOnmyoBulletModelMoveSpeed.vue";
import PreviewGifPentagramSystemModelAutoSpinSpeed from './PreviewGifPentagramSystemModelAutoSpinSpeed.vue'
import PreviewGifPentagramTurnTableViewAngleCorrectionValue from './PreviewGifPentagramTurnTableViewAngleCorrectionValue.vue'
import PreviewGifPentagramTurnTableModelDistance from './PreviewGifPentagramTurnTableModelDistance.vue'
import PreviewGifPlayerModelPropHPMax from './PreviewGifPlayerModelPropHPMax.vue'
import PreviewGifPlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec from './PreviewGifPlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec.vue'
import PreviewGifSunMoonSystemModelDurations from './PreviewGifSunMoonSystemModelDurations.vue'
import PreviewGifClearCountdownTimerCircleViewMaskAngle from './PreviewGifClearCountdownTimerCircleViewMaskAngle.vue'
import PreviewGifShikigamiSkillSystemModelCandleInfoLimitCandleResorceMax from './PreviewGifShikigamiSkillSystemModelCandleInfoLimitCandleResorceMax.vue'
import PreviewGifShikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec from './PreviewGifShikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec.vue'
import PreviewGifPentagramSystemModelInputHistoriesLimit from './PreviewGifPentagramSystemModelInputHistoriesLimit.vue'
import PreviewGifDownloadJson from './PreviewGifDownloadJson.vue'
import PreviewGifInitialize from './PreviewGifInitialize.vue'
export default defineComponent({
  name: 'PreViewGif',
  components: {
    PreviewGifDefault,
    PreviewGifSelectedclearCountdownTimer,
    PreviewGifEnemyModelPropMoveSpeed,
    PreviewGifEnemyModelPropHpMax,
    PreviewGifObjectsPoolModelCountLimit,
    PreviewGifOnmyoBulletModelMoveDirectionX,
    PreviewGifOnmyoBulletModelMoveSpeed,
    PreviewGifPentagramSystemModelAutoSpinSpeed,
    PreviewGifPentagramTurnTableViewAngleCorrectionValue,
    PreviewGifPentagramTurnTableModelDistance,
    PreviewGifPlayerModelPropHPMax,
    PreviewGifPlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec,
    PreviewGifSunMoonSystemModelDurations,
    PreviewGifClearCountdownTimerCircleViewMaskAngle,
    PreviewGifShikigamiSkillSystemModelCandleInfoLimitCandleResorceMax,
    PreviewGifShikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec,
    PreviewGifPentagramSystemModelInputHistoriesLimit,
    PreviewGifDownloadJson,
    PreviewGifInitialize,
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

