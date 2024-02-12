<template>
  <div class="container">
    <h1 class="my-3">AdminBean - v0.4.0</h1>
    <hr/>
    <h2 class="my-3">入力</h2>
    <hr/>
    <div v-if='isUploaded'>
      <div class="card stage-select-content">
        <div class="card-body">
          <h3 class="card-title">{{ '🗺ステージ選択' }}</h3>
          <hr/>
          <label for="targetLevels">targetLevels:</label>
          <select id="targetLevels" class="form-control" v-model="selectedIndex" disabled>
              <option v-for="n in 20" :key="n-1" :value="n-1">{{ 'ステージ' + n }}</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-disabled" viewBox="0 0 16 16" role="img" aria-label="Disabled">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
        </div>
      </div>
      <div class="card current-stage-config-content">
        <div class="card-body">
          <h3 class="card-title">{{ '🚩ステージ' + (selectedIndex + 1) + '設定' }}</h3>
          <hr/>
          <label for="playBgmNames">playBgmNames:</label>
          &nbsp;<small>BGMトラック番号</small>
          <input id="playBgmNames" type="number" class="form-control" v-model.number="state.selectedPlayBgmName" @click='setTargetPreviewID' disabled>
          <label for="finalStages">finalStages:</label>
          &nbsp;<small>最終ステージ</small>
          <input id="finalStages" type="number" class="form-control" v-model.number="state.selectedFinalStage" @click='setTargetPreviewID' disabled>
          <label for="skyBoxs">skyBoxs:</label>
          &nbsp;<small>SkyBoxの種類番号</small>
          <input id="skyBoxs" type="number" class="form-control" v-model.number="state.selectedSkyBox" @click='setTargetPreviewID' disabled>
          <label for="selectedclearCountdownTimer">clearCountdownTimer:</label>
          &nbsp;<small>制限時間（秒）</small>
          <input id="selectedclearCountdownTimer" type="number" class="form-control" v-model.number="state.selectedclearCountdownTimer" @click='setTargetPreviewID' min="1">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-disabled" viewBox="0 0 16 16" role="img" aria-label="Disabled">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
        </div>
      </div>
      <div class="card all-stage-config-content">
        <div class="card-body">
          <h3 class="card-title">{{ '🏁ステージ共通設定' }}</h3>
          <hr/>
          <div class="card enemy-content">
            <div class="card-body">
              <h4 class="card-title">{{ '👾敵' }}</h4>
              <hr/>
              <label for="enemyModelPropMoveSpeed">EnemyModelPropMoveSpeed:</label>
              &nbsp;<small>移動速度</small>
              <input id="enemyModelPropMoveSpeed" type="number" class="form-control" v-model.number="state.enemyModelPropMoveSpeed" @click='setTargetPreviewID' min="0.01">
              <label for="enemyModelPropHpMax">EnemyModelPropHpMax:</label>
              &nbsp;<small>体力</small>
              <input id="enemyModelPropHpMax" type="number" class="form-control" v-model.number="state.enemyModelPropHpMax" @click='setTargetPreviewID' min="1">
              <label for="enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec">EnemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec:</label>
              &nbsp;<small>無敵時間（秒）</small>
              <input id="enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec" type="number" class="form-control" v-model.number="state.enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec" @click='setTargetPreviewID' disabled>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-disabled" viewBox="0 0 16 16" role="img" aria-label="Disabled">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </div>
          </div>
          <div class="card shikigami-content">
            <div class="card-body">
              <h4 class="card-title">{{ '☯️式神' }}</h4>
              <hr/>
              <label for="onmyoBulletModelMoveDirectionX">OnmyoBulletModelMoveDirectionX:</label>
              &nbsp;<small>陰陽玉の弾&nbsp;移動方角の座標X</small>
              <input id="onmyoBulletModelMoveDirectionX" type="number" class="form-control" v-model.number="state.onmyoBulletModelMoveDirectionX" @click='setTargetPreviewID'>
              <label for="onmyoBulletModelMoveDirectionY">OnmyoBulletModelMoveDirectionY:</label>
              &nbsp;<small>陰陽玉の弾&nbsp;移動方角の座標Y</small>
              <input id="onmyoBulletModelMoveDirectionY" type="number" class="form-control" v-model.number="state.onmyoBulletModelMoveDirectionY" @click='setTargetPreviewID'>
              <label for="onmyoBulletModelMoveSpeed">OnmyoBulletModelMoveSpeed:</label>
              &nbsp;<small>陰陽玉の弾&nbsp;移動速度</small>
              <input id="onmyoBulletModelMoveSpeed" type="number" class="form-control" v-model.number="state.onmyoBulletModelMoveSpeed" @click='setTargetPreviewID'>
              <label for="wrapTurretModelMoveDirectionX">WrapTurretModelMoveDirectionX:</label>
              &nbsp;<small>ラップの弾&nbsp;移動方角の座標X</small>
              <input id="wrapTurretModelMoveDirectionX" type="number" class="form-control" v-model.number="state.wrapTurretModelMoveDirectionX" @click='setTargetPreviewID'>
              <label for="wrapTurretModelMoveDirectionY">WrapTurretModelMoveDirectionY:</label>
              &nbsp;<small>ラップの弾&nbsp;移動方角の座標Y</small>
              <input id="wrapTurretModelMoveDirectionY" type="number" class="form-control" v-model.number="state.wrapTurretModelMoveDirectionY" @click='setTargetPreviewID'>
              <label for="graffitiTurretModelMoveDirectionX">GraffitiTurretModelMoveDirectionX:</label>
              &nbsp;<small>グラフの弾&nbsp;移動方角の座標X</small>
              <input id="graffitiTurretModelMoveDirectionX" type="number" class="form-control" v-model.number="state.graffitiTurretModelMoveDirectionX" @click='setTargetPreviewID'>
              <label for="graffitiTurretModelMoveDirectionY">GraffitiTurretModelMoveDirectionY:</label>
              &nbsp;<small>グラフの弾&nbsp;移動方角の座標Y</small>
              <input id="graffitiTurretModelMoveDirectionY" type="number" class="form-control" v-model.number="state.graffitiTurretModelMoveDirectionY" @click='setTargetPreviewID'>
              <label for="shikigamiSkillSystemModelCandleInfoLimitCandleResorceMax">ShikigamiSkillSystemModelCandleInfoLimitCandleResorceMax:</label>
              &nbsp;<small>蠟燭ゲージ</small>
              <input id="shikigamiSkillSystemModelCandleInfoLimitCandleResorceMax" type="number" class="form-control" v-model.number="state.shikigamiSkillSystemModelCandleInfo.limitCandleResorceMax" @click='setTargetPreviewID' min="1">
              <label for="shikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec">ShikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec:</label>
              &nbsp;<small>蠟燭ゲージ回復速度</small>
              <input id="shikigamiSkillSystemModelCandleInfoRapidRecoveryTimeSec" type="number" class="form-control" v-model.number="state.shikigamiSkillSystemModelCandleInfo.rapidRecoveryTimeSec" @click='setTargetPreviewID' min="0">
            </div>
          </div>
          <div class="card other-content">
            <div class="card-body">
              <h4 class="card-title">{{ '📌その他' }}</h4>
              <hr/>
              <label for="objectsPoolModelCountLimit">ObjectsPoolModelCountLimit:</label>
              &nbsp;<small>オブジェクトプール初期生成数最大</small>
              <input id="objectsPoolModelCountLimit" type="number" class="form-control" v-model.number="state.objectsPoolModelCountLimit" @click='setTargetPreviewID' min="0">
              <label for="sunMoonSystemModelDurations">SunMoonSystemModelDurations:</label>
              &nbsp;<small>ボタンホールドによる昼夜切り替え速度</small>
              <div v-for="(duration, index) in state.sunMoonSystemModelDurations" :key="'sunMoonDuration-' + index">
                <label :for="'sunMoonSystemModelDurations-' + index">SunMoonSystemModelDurations {{ index + 1 }}:</label>
                <input :id="'sunMoonSystemModelDurations'" type="number" class="form-control" v-model.number="state.sunMoonSystemModelDurations[index]" min="0" @click='setTargetPreviewID'>
              </div>
              <label for="clearCountdownTimerCircleViewMaskAngle">ClearCountdownTimerCircleViewMaskAngle:</label>
              &nbsp;<small>昼夜ゲージ欠け角度割合</small>
              <input id="clearCountdownTimerCircleViewMaskAngle" type="number" class="form-control" v-model.number="state.clearCountdownTimerCircleViewMaskAngle" @click='setTargetPreviewID'>
            </div>
          </div>
          <div class="card pentagram-content">
            <div class="card-body">
              <h4 class="card-title">{{ '🌟五芒星' }}</h4>
              <hr/>
              <label for="pentagramSystemModelAutoSpinSpeed">PentagramSystemModelAutoSpinSpeed:</label>
              &nbsp;<small>自動回転状態の速度</small>
              <input id="pentagramSystemModelAutoSpinSpeed" type="number" class="form-control" v-model.number="state.pentagramSystemModelAutoSpinSpeed" @click='setTargetPreviewID'>
              <label for="pentagramTurnTableViewAngleCorrectionValue">PentagramTurnTableViewAngleCorrectionValue:</label>
              &nbsp;<small>スティック回転速度の加算値</small>
              <input id="pentagramTurnTableViewAngleCorrectionValue" type="number" class="form-control" v-model.number="state.pentagramTurnTableViewAngleCorrectionValue" @click='setTargetPreviewID' min="0">
              <label for="pentagramTurnTableModelDistance">PentagramTurnTableModelDistance:</label>
              &nbsp;<small>中心からの外周までの距離</small>
              <input id="pentagramTurnTableModelDistance" type="number" class="form-control" v-model.number="state.pentagramTurnTableModelDistance" @click='setTargetPreviewID' min="0">
              <label for="pentagramSystemModelInputHistoriesLimit">PentagramSystemModelInputHistoriesLimit:</label>
              &nbsp;<small>ジョッキーコマンドの入力履歴最大件数</small>
              <input id="pentagramSystemModelInputHistoriesLimit" type="number" class="form-control" v-model.number="state.pentagramSystemModelInputHistoriesLimit" @click='setTargetPreviewID' min="0">
            </div>
          </div>
          <div class="card player-content">
            <div class="card-body">
              <h4 class="card-title">{{ '🎧プレイヤー' }}</h4>
              <hr/>
              <label for="PlayerModelPropMoveSpeed">PlayerModelPropMoveSpeed:</label>
              &nbsp;<small>移動速度</small>
              <input id="playerModelPropMoveSpeed" type="number" class="form-control" v-model.number="state.playerModelPropMoveSpeed" @click='setTargetPreviewID' disabled>
              <label for="playerModelPropHPMax">PlayerModelPropHPMax:</label>
              &nbsp;<small>体力</small>
              <input id="playerModelPropHPMax" type="number" class="form-control" v-model.number="state.playerModelPropHPMax" @click='setTargetPreviewID' min="1">
              <label for="playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec">PlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec:</label>
              &nbsp;<small>無敵時間（秒）</small>
              <input id="playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec" type="number" class="form-control" v-model.number="state.playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec" @click='setTargetPreviewID' min="0">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon-disabled" viewBox="0 0 16 16" role="img" aria-label="Disabled">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </div>
          </div>
          <!-- TODO:7.追加プロパティを設定するUIを追加 -->
        </div>
      </div>
      <div class="card level-design-content">
        <div class="card-body">
          <h3 class="card-title">{{ '🧭レベルデザイン' }}</h3>
          <hr/>
          <label for="LevelDesignMainSkillLists">LevelDesignMainSkillLists:</label>
          <br><small>式神のメインスキルパラメータの設定</small>
          <table class="table">
            <thead>
              <tr>
                <th>ShikigamiType</th>
                <th>MainSkillType</th>
                <th>SkillRank</th>
                <th>Value</th>
                <th>ValueBuffMax</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(skill, index) in state.levelDesignMainSkillLists" :key="index">
                <td><input type="number" class="form-control" v-model.number="skill.shikigamiType" min="0" max="3"></td>
                <td><input type="number" class="form-control" v-model.number="skill.mainSkillType"></td>
                <td><input type="number" class="form-control" v-model.number="skill.skillRank" min="0" max="4"></td>
                <td><input type="number" class="form-control" v-model.number="skill.value"></td>
                <td><input type="number" class="form-control" v-model.number="skill.valueBuffMax"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 class="my-3">出力</h2>
      <hr/>
      <button id="downloadJson" class="btn btn-primary" @click='downloadJson'>JSONをダウンロード</button>
    </div>
    <div v-else>
      <div class="custom-file">
        <input type='file' class="custom-file-input" id="customFile" @change='loadJson'>
        <label class="custom-file-label" for="customFile">Choose file</label>
      </div>
    </div>
  </div>
  <PreviewGif :targetPreviewID="targetPreviewID" />
</template>
<style scoped>
  .form-control:disabled {
    background-color: #e9ecef;
    opacity: 0.5;
  }
  .icon-disabled {
    width: 24px;
    height: 24px;
    fill: #dc3545; /* 警告色 */
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .level-design-content {
    background-color: #ffd79b;
  }
  .all-stage-config-content .player-content {
    background-color: #c4c4c4;
  }
  .all-stage-config-content .pentagram-content {
    background-color: #cce8ff;
  }
  .all-stage-config-content .other-content {
    background-color: #FFCCCC;
  }
  .all-stage-config-content .shikigami-content {
    background-color: #c4c4c4;
  }
  .all-stage-config-content .enemy-content {
    background-color: #e3b2ff;
  }
  .stage-select-content {
    background-color: #c8ffb2;
  }
  .current-stage-config-content {
    background-color: #FFCCCC;
  }
  .card {
    margin-bottom: 20px;
  }

  .table {
    margin-top: 10px;
  }

  .form-control {
    margin-bottom: 10px;
  }

  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  .custom-file-input {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .accordion-button:not(.collapsed) {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .accordion-button:focus {
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.5);
  }
</style>

<script lang="ts">
import _ from 'lodash'
import { defineComponent, reactive, ref, watch } from 'vue'
import { type IAdminBean } from './IAdminBean'
import PreviewGif from './PreviewGif.vue';

export default defineComponent({
  name: 'EditConfig',
  components: {
    PreviewGif
  },
  setup () {
    type StateType = {
      [key: string]: number | number[] | { [key: string]: number | number[] } | { [key: string]: number | number[] }[];
      selectedPlayBgmName: number,
      selectedFinalStage: number,
      selectedSkyBox: number,
      selectedclearCountdownTimer: number,
      enemyModelPropMoveSpeed: number,
      enemyModelPropHpMax: number,
      enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec: number,
      objectsPoolModelCountLimit: number,
      onmyoBulletModelMoveDirectionX: number,
      onmyoBulletModelMoveDirectionY: number,
      onmyoBulletModelMoveSpeed: number,
      pentagramSystemModelAutoSpinSpeed: number,
      pentagramTurnTableViewAngleCorrectionValue: number,
      pentagramTurnTableModelDistance: number,
      playerModelPropMoveSpeed: number,
      playerModelPropHPMax: number,
      playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec: number,
      wrapTurretModelMoveDirectionX: number,
      wrapTurretModelMoveDirectionY: number,
      graffitiTurretModelMoveDirectionX: number,
      graffitiTurretModelMoveDirectionY: number,
      sunMoonSystemModelDurations: number[],
      levelDesignMainSkillLists: { shikigamiType: number; mainSkillType: number; skillRank: number; value: number; valueBuffMax: number; }[],
      clearCountdownTimerCircleViewMaskAngle: number,
      shikigamiSkillSystemModelCandleInfo: { limitCandleResorceMax: number; rapidRecoveryTimeSec: number; },
      pentagramSystemModelInputHistoriesLimit: number,
      // TODO:4.データ型定義の追加
    };
    const state = reactive<StateType>({
      selectedPlayBgmName: 0,
      selectedFinalStage: 0,
      selectedSkyBox: 0,
      selectedclearCountdownTimer: (0.0),
      enemyModelPropMoveSpeed: (0.0),
      enemyModelPropHpMax: (0),
      enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec: (0),
      objectsPoolModelCountLimit: (0),
      onmyoBulletModelMoveDirectionX: (0),
      onmyoBulletModelMoveDirectionY: (0),
      onmyoBulletModelMoveSpeed: (0),
      pentagramSystemModelAutoSpinSpeed: (0),
      pentagramTurnTableViewAngleCorrectionValue: (0),
      pentagramTurnTableModelDistance: (0),
      playerModelPropMoveSpeed: (0),
      playerModelPropHPMax: (0),
      playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec: (0),
      wrapTurretModelMoveDirectionX: (0),
      wrapTurretModelMoveDirectionY: (0),
      graffitiTurretModelMoveDirectionX: (0),
      graffitiTurretModelMoveDirectionY: (0),
      sunMoonSystemModelDurations: ([0]),
      levelDesignMainSkillLists: ([{ shikigamiType: 0, mainSkillType: 0, skillRank: 0, value: 0, valueBuffMax: 0 }]),
      clearCountdownTimerCircleViewMaskAngle: 0,
      shikigamiSkillSystemModelCandleInfo: { limitCandleResorceMax: 0, rapidRecoveryTimeSec: 0 },
      pentagramSystemModelInputHistoriesLimit: 0,
      // TODO:5.追加したプロパティ用の変数を宣言
    })
    const selectedIndex = ref(0)
    const jsonData = ref<IAdminBean>({
      playBgmNames: [],
      finalStages: [],
      skyBoxs: [],
      clearCountdownTimer: [],
      enemyModel: {
        prop: {
          moveSpeed: 0,
          hpMax: 0
        },
        damageSufferedZoneOfEnemyModel: {
          invincibleTimeSec: 0
        }
      },
      enemiesSpawnModel: {
        invincibleTimeSec: 0
      },
      objectsPoolModel: {
        countLimit: 0
      },
      onmyoBulletModel: {
        moveDirection: {
          x: 0,
          y: 0
        },
        moveSpeed: 0
      },
      pentagramSystemModel: {
        autoSpinSpeed: 0,
        inputHistoriesLimit: 0,
      },
      pentagramTurnTableView: {
        angleCorrectionValue: 0
      },
      pentagramTurnTableModel: {
        distance: 0
      },
      playerModel: {
        prop: {
          moveSpeed: 0,
          hpMax: 0
        },
        damageSufferedZoneOfPlayerModel: {
          invincibleTimeSec: 0
        }
      },
      wrapTurretModel: {
        moveDirection: {
          x: 0,
          y: 0
        },
      },
      graffitiTurretModel: {
        moveDirection: {
          x: 0,
          y: 0
        },
      },
      sunMoonSystemModel: {
        durations: []
      },
      levelDesign: {
        mainSkillLists: []
      },
      clearCountdownTimerCircleView: {
        maskAngle: 0
      },
      shikigamiSkillSystemModel: {
        candleInfo: {
          limitCandleResorceMax: 0,
          rapidRecoveryTimeSec: 0
        }
      },
    })
    // TODO:3.インターフェースの追加
    const isUploaded = ref(false)

    watch(selectedIndex, (newIndex, oldIndex) => {
      setBetweenFieldsAndJson(oldIndex)
      setBetweenJsonAndFields(newIndex)
    })
    watch([state], () => {
      setBetweenFieldsAndJson()
    })

    const loadJson = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target && target.files && target.files.length > 0) {
        const file = target.files[0];
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target && typeof (e.target as FileReader).result === 'string') {
                try {
                  jsonData.value = JSON.parse((e.target as FileReader).result as string)
                  isUploaded.value = true
                  setBetweenJsonAndFields()
                } catch (error) {
                  console.error('Failed to parse JSON:', error)
                }
            }
          }
          reader.onerror = (error) => {
            console.error('Failed to read file:', error)
          }
          reader.readAsText(file)
        }
      }
    }  
    const downloadJson = (event: Event) => {
      setBetweenFieldsAndJson()
      const dataStr = 'data:text/jsoncharset=utf-8,' + encodeURIComponent(JSON.stringify(jsonData.value))
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute('href', dataStr)
      downloadAnchorNode.setAttribute('download', 'AdminData.json')
      document.body.appendChild(downloadAnchorNode) // required for firefox
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
      setTargetPreviewID(event)
    }

    const setBetweenJsonAndFields = (index = selectedIndex.value) => {
      if (jsonData.value && typeof jsonData.value === 'object') {
        syncData('jsonToFields', index)
      }
    }

    const setBetweenFieldsAndJson = (index = selectedIndex.value) => {
      syncData('fieldsToJson', index)
    }

    const syncData = (direction = 'jsonToFields', index = selectedIndex.value) => {
      if (!jsonData.value) return;

      const mappings = [
        { jsonPath: `playBgmNames[${index}]`, fieldPath: 'selectedPlayBgmName' },
        { jsonPath: `finalStages[${index}]`, fieldPath: 'selectedFinalStage' },
        { jsonPath: `skyBoxs[${index}]`, fieldPath: 'selectedSkyBox' },
        { jsonPath: `clearCountdownTimer[${index}]`, fieldPath: 'selectedclearCountdownTimer' },
        { jsonPath: 'enemyModel.prop.moveSpeed', fieldPath: 'enemyModelPropMoveSpeed' },
        { jsonPath: 'enemyModel.prop.hpMax', fieldPath: 'enemyModelPropHpMax' },
        { jsonPath: 'enemyModel.damageSufferedZoneOfEnemyModel.invincibleTimeSec', fieldPath: 'enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec' },
        { jsonPath: 'objectsPoolModel.countLimit', fieldPath: 'objectsPoolModelCountLimit' },
        { jsonPath: 'onmyoBulletModel.moveDirection.x', fieldPath: 'onmyoBulletModelMoveDirectionX' },
        { jsonPath: 'onmyoBulletModel.moveDirection.y', fieldPath: 'onmyoBulletModelMoveDirectionY' },
        { jsonPath: 'onmyoBulletModel.moveSpeed', fieldPath: 'onmyoBulletModelMoveSpeed' },
        { jsonPath: 'pentagramSystemModel.autoSpinSpeed', fieldPath: 'pentagramSystemModelAutoSpinSpeed' },
        { jsonPath: 'pentagramTurnTableView.angleCorrectionValue', fieldPath: 'pentagramTurnTableViewAngleCorrectionValue' },
        { jsonPath: 'pentagramTurnTableModel.distance', fieldPath: 'pentagramTurnTableModelDistance' },
        { jsonPath: 'playerModel.prop.moveSpeed', fieldPath: 'playerModelPropMoveSpeed' },
        { jsonPath: 'playerModel.prop.hpMax', fieldPath: 'playerModelPropHPMax' },
        { jsonPath: 'playerModel.damageSufferedZoneOfPlayerModel.invincibleTimeSec', fieldPath: 'playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec' },
        { jsonPath: 'wrapTurretModel.moveDirection.x', fieldPath: 'wrapTurretModelMoveDirectionX' },
        { jsonPath: 'wrapTurretModel.moveDirection.y', fieldPath: 'wrapTurretModelMoveDirectionY' },
        { jsonPath: 'graffitiTurretModel.moveDirection.x', fieldPath: 'graffitiTurretModelMoveDirectionX' },
        { jsonPath: 'graffitiTurretModel.moveDirection.y', fieldPath: 'graffitiTurretModelMoveDirectionY' },
        { jsonPath: 'sunMoonSystemModel.durations', fieldPath: 'sunMoonSystemModelDurations' },
        { jsonPath: 'levelDesign.mainSkillLists', fieldPath: 'levelDesignMainSkillLists' },
        { jsonPath: 'clearCountdownTimerCircleView.maskAngle', fieldPath: 'clearCountdownTimerCircleViewMaskAngle' },
        { jsonPath: 'shikigamiSkillSystemModel.candleInfo', fieldPath: 'shikigamiSkillSystemModelCandleInfo' },
        { jsonPath: 'pentagramSystemModel.inputHistoriesLimit', fieldPath: 'pentagramSystemModelInputHistoriesLimit' },
        // TODO:6.セットするプロパティを追加
      ];

      mappings.forEach(mapping => {
        const jsonValue = _.get(jsonData.value, mapping.jsonPath);
        const fieldValue = state[mapping.fieldPath];

        if (direction === 'jsonToFields') {
          if (jsonValue !== undefined) state[mapping.fieldPath] = jsonValue;
        } else if (direction === 'fieldsToJson') {
          if (fieldValue !== undefined) {
            _.set(jsonData.value, mapping.jsonPath, fieldValue);
          }
        }
      });
    };

    const drSetBetweenJsonAndFields = (index = selectedIndex.value) => setBetweenJsonAndFields(index)
    const drSetBetweenFieldsAndJson = (index = selectedIndex.value) => setBetweenFieldsAndJson(index)
    const targetPreviewID = ref('')
    const setTargetPreviewID = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target) 
        targetPreviewID.value = target.id
    }

    return {
      selectedIndex,
      state,
      jsonData,
      isUploaded,
      loadJson,
      downloadJson,
      drSetBetweenJsonAndFields,
      drSetBetweenFieldsAndJson,
      setTargetPreviewID,
      targetPreviewID
    }
  }
})
</script>
