<template>
  <div class="container">
    <PreviewGif :targetPreviewID="targetPreviewID" />
    <h1 class="my-3">AdminBean - v0.3.2</h1>
    <hr/>
    <h2 class="my-3">入力</h2>
    <hr/>
    <div v-if='isUploaded'>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{{ 'ステージ選択' }}</h3>
          <hr/>
          <label for="targetLevels">targetLevels:</label>
          <select id="targetLevels" class="form-control" v-model="selectedIndex" disabled>
              <option v-for="n in 20" :key="n-1" :value="n-1">{{ 'ステージ' + n }}</option>
          </select>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{{ 'ステージ' + (selectedIndex + 1) + '設定' }}</h3>
          <hr/>
          <label for="playBgmNames">playBgmNames:</label>
          <input id="playBgmNames" type="number" class="form-control" v-model.number="selectedPlayBgmName" @click='setTargetPreviewID' disabled>
          <label for="finalStages">finalStages:</label>
          <input id="finalStages" type="number" class="form-control" v-model.number="selectedFinalStage" @click='setTargetPreviewID' disabled>
          <label for="skyBoxs">skyBoxs:</label>
          <input id="skyBoxs" type="number" class="form-control" v-model.number="selectedSkyBox" @click='setTargetPreviewID' disabled>
          <label for="clearCountdownTimer">clearCountdownTimer:</label>
          <input id="selectedclearCountdownTimer" type="number" class="form-control" v-model.number="selectedclearCountdownTimer" @click='setTargetPreviewID'>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{{ 'ステージ共通設定' }}</h3>
          <hr/>
          <label for="EnemyModelPropMoveSpeed">EnemyModelPropMoveSpeed:</label>
          <input id="enemyModelPropMoveSpeed" type="number" class="form-control" v-model.number="enemyModelPropMoveSpeed" @click='setTargetPreviewID'>
          <label for="EnemyModelPropHpMax">EnemyModelPropHpMax:</label>
          <input id="enemyModelPropHpMax" type="number" class="form-control" v-model.number="enemyModelPropHpMax" @click='setTargetPreviewID'>
          <label for="EnemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec">EnemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec:</label>
          <input id="enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec" type="number" class="form-control" v-model.number="enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec" @click='setTargetPreviewID' disabled>
          <label for="EnemiesSpawnModelInvincibleTimeSec">EnemiesSpawnModelInvincibleTimeSec:</label>
          <input id="enemiesSpawnModelInvincibleTimeSec" type="number" class="form-control" v-model.number="enemiesSpawnModelInvincibleTimeSec" @click='setTargetPreviewID'>
          <label for="ObjectsPoolModelCountLimit">ObjectsPoolModelCountLimit:</label>
          <input id="objectsPoolModelCountLimit" type="number" class="form-control" v-model.number="objectsPoolModelCountLimit" @click='setTargetPreviewID'>
          <label for="OnmyoBulletModelMoveDirectionX">OnmyoBulletModelMoveDirectionX:</label>
          <input id="onmyoBulletModelMoveDirectionX" type="number" class="form-control" v-model.number="onmyoBulletModelMoveDirectionX" @click='setTargetPreviewID'>
          <label for="OnmyoBulletModelMoveDirectionY">OnmyoBulletModelMoveDirectionY:</label>
          <input id="onmyoBulletModelMoveDirectionY" type="number" class="form-control" v-model.number="onmyoBulletModelMoveDirectionY" @click='setTargetPreviewID'>
          <label for="OnmyoBulletModelMoveSpeed">OnmyoBulletModelMoveSpeed:</label>
          <input id="onmyoBulletModelMoveSpeed" type="number" class="form-control" v-model.number="onmyoBulletModelMoveSpeed" @click='setTargetPreviewID'>
          <label for="OnmyoTurretModelInstanceRateTimeSec">OnmyoTurretModelInstanceRateTimeSec:</label>
          <input id="onmyoTurretModelInstanceRateTimeSec" type="number" class="form-control" v-model.number="onmyoTurretModelInstanceRateTimeSec" @click='setTargetPreviewID'>
          <label for="PentagramSystemModelAutoSpinSpeed">PentagramSystemModelAutoSpinSpeed:</label>
          <input id="pentagramSystemModelAutoSpinSpeed" type="number" class="form-control" v-model.number="pentagramSystemModelAutoSpinSpeed" @click='setTargetPreviewID'>
          <label for="PentagramTurnTableViewAngleCorrectionValue">PentagramTurnTableViewAngleCorrectionValue:</label>
          <input id="pentagramTurnTableViewAngleCorrectionValue" type="number" class="form-control" v-model.number="pentagramTurnTableViewAngleCorrectionValue" @click='setTargetPreviewID'>
          <label for="PentagramTurnTableModelDistance">PentagramTurnTableModelDistance:</label>
          <input id="pentagramTurnTableModelDistance" type="number" class="form-control" v-model.number="pentagramTurnTableModelDistance" @click='setTargetPreviewID'>
          <label for="PlayerModelPropMoveSpeed">PlayerModelPropMoveSpeed:</label>
          <input id="playerModelPropMoveSpeed" type="number" class="form-control" v-model.number="playerModelPropMoveSpeed" @click='setTargetPreviewID' disabled>
          <label for="PlayerModelPropHPMax">PlayerModelPropHPMax:</label>
          <input id="playerModelPropHPMax" type="number" class="form-control" v-model.number="playerModelPropHPMax" @click='setTargetPreviewID'>
          <label for="PlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec">PlayerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec:</label>
          <input id="playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec" type="number" class="form-control" v-model.number="playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec" @click='setTargetPreviewID'>
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
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { type IAdminBean } from './IAdminBean'
import PreviewGif from './PreviewGif.vue';

export default defineComponent({
  name: 'EditConfig',
  components: {
    PreviewGif
  },
  setup () {
    const selectedIndex = ref(0)
    const selectedPlayBgmName = ref(0)
    const selectedFinalStage = ref(0)
    const selectedSkyBox = ref(0)
    const selectedclearCountdownTimer = ref(0.0)
    const enemyModelPropMoveSpeed = ref(0.0)
    const enemyModelPropHpMax = ref(0)
    const enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec = ref(0)
    const enemiesSpawnModelInvincibleTimeSec = ref(0)
    const objectsPoolModelCountLimit = ref(0)
    const onmyoBulletModelMoveDirectionX = ref(0)
    const onmyoBulletModelMoveDirectionY = ref(0)
    const onmyoBulletModelMoveSpeed = ref(0)
    const onmyoTurretModelInstanceRateTimeSec = ref(0)
    const pentagramSystemModelAutoSpinSpeed = ref(0)
    const pentagramTurnTableViewAngleCorrectionValue = ref(0)
    const pentagramTurnTableModelDistance = ref(0)
    const playerModelPropMoveSpeed = ref(0)
    const playerModelPropHPMax = ref(0)
    const playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec = ref(0)
    const jsonData = ref<IAdminBean>({
      playBgmNames: [],
      finalStages: [],
      skyBoxs: [],
      clearCountdownTimer: [],
      EnemyModel: {
        prop: {
          moveSpeed: 0,
          hpMax: 0
        },
        DamageSufferedZoneOfEnemyModel: {
          invincibleTimeSec: 0
        }
      },
      EnemiesSpawnModel: {
        invincibleTimeSec: 0
      },
      ObjectsPoolModel: {
        countLimit: 0
      },
      OnmyoBulletModel: {
        moveDirection: {
          x: 0,
          y: 0
        },
        moveSpeed: 0
      },
      OnmyoTurretModel: {
        instanceRateTimeSec: 0
      },
      PentagramSystemModel: {
        autoSpinSpeed: 0
      },
      PentagramTurnTableView: {
        angleCorrectionValue: 0
      },
      PentagramTurnTableModel: {
        distance: 0
      },
      PlayerModel: {
        prop: {
          moveSpeed: 0,
          hpMax: 0
        },
        DamageSufferedZoneOfPlayerModel: {
          invincibleTimeSec: 0
        }
      }
    })
    const isUploaded = ref(false)

    watch(selectedIndex, (newIndex, oldIndex) => {
      setBetweenFieldsAndJson(oldIndex)
      setBetweenJsonAndFields(newIndex)
    })
    watch([selectedPlayBgmName,
      selectedFinalStage,
      selectedSkyBox,
      selectedclearCountdownTimer,
      enemyModelPropMoveSpeed,
      enemyModelPropHpMax], () => {
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
        selectedPlayBgmName.value = jsonData.value.playBgmNames[index]
        selectedFinalStage.value = jsonData.value.finalStages[index]
        selectedSkyBox.value = jsonData.value.skyBoxs[index]
        selectedclearCountdownTimer.value = jsonData.value.clearCountdownTimer[index]
        enemyModelPropMoveSpeed.value = jsonData.value.EnemyModel.prop.moveSpeed
        enemyModelPropHpMax.value = jsonData.value.EnemyModel.prop.hpMax
        enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec.value = jsonData.value.EnemyModel.DamageSufferedZoneOfEnemyModel.invincibleTimeSec
        enemiesSpawnModelInvincibleTimeSec.value = jsonData.value.EnemiesSpawnModel.invincibleTimeSec
        objectsPoolModelCountLimit.value = jsonData.value.ObjectsPoolModel.countLimit
        onmyoBulletModelMoveDirectionX.value = jsonData.value.OnmyoBulletModel.moveDirection.x
        onmyoBulletModelMoveDirectionY.value = jsonData.value.OnmyoBulletModel.moveDirection.y
        onmyoBulletModelMoveSpeed.value = jsonData.value.OnmyoBulletModel.moveSpeed
        onmyoTurretModelInstanceRateTimeSec.value = jsonData.value.OnmyoTurretModel.instanceRateTimeSec
        pentagramSystemModelAutoSpinSpeed.value = jsonData.value.PentagramSystemModel.autoSpinSpeed
        pentagramTurnTableViewAngleCorrectionValue.value = jsonData.value.PentagramTurnTableView.angleCorrectionValue
        pentagramTurnTableModelDistance.value = jsonData.value.PentagramTurnTableModel.distance
        playerModelPropMoveSpeed.value = jsonData.value.PlayerModel.prop.moveSpeed
        playerModelPropHPMax.value = jsonData.value.PlayerModel.prop.hpMax
        playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec.value = jsonData.value.PlayerModel.DamageSufferedZoneOfPlayerModel.invincibleTimeSec
      }
    }

    const setBetweenFieldsAndJson = (index = selectedIndex.value) => {
      if (jsonData.value) {
        jsonData.value.playBgmNames[index] = selectedPlayBgmName.value
        jsonData.value.finalStages[index] = selectedFinalStage.value
        jsonData.value.skyBoxs[index] = selectedSkyBox.value
        jsonData.value.clearCountdownTimer[index] = selectedclearCountdownTimer.value
        jsonData.value.EnemyModel.prop.moveSpeed = enemyModelPropMoveSpeed.value
        jsonData.value.EnemyModel.prop.hpMax = enemyModelPropHpMax.value
        jsonData.value.EnemyModel.DamageSufferedZoneOfEnemyModel.invincibleTimeSec = enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec.value
        jsonData.value.EnemiesSpawnModel.invincibleTimeSec = enemiesSpawnModelInvincibleTimeSec.value
        jsonData.value.ObjectsPoolModel.countLimit = objectsPoolModelCountLimit.value
        jsonData.value.OnmyoBulletModel.moveDirection.x = onmyoBulletModelMoveDirectionX.value
        jsonData.value.OnmyoBulletModel.moveDirection.y = onmyoBulletModelMoveDirectionY.value
        jsonData.value.OnmyoBulletModel.moveSpeed = onmyoBulletModelMoveSpeed.value
        jsonData.value.OnmyoTurretModel.instanceRateTimeSec = onmyoTurretModelInstanceRateTimeSec.value
        jsonData.value.PentagramSystemModel.autoSpinSpeed = pentagramSystemModelAutoSpinSpeed.value
        jsonData.value.PentagramTurnTableView.angleCorrectionValue = pentagramTurnTableViewAngleCorrectionValue.value
        jsonData.value.PentagramTurnTableModel.distance = pentagramTurnTableModelDistance.value
        jsonData.value.PlayerModel.prop.moveSpeed = playerModelPropMoveSpeed.value
        jsonData.value.PlayerModel.prop.hpMax = playerModelPropHPMax.value
        jsonData.value.PlayerModel.DamageSufferedZoneOfPlayerModel.invincibleTimeSec = playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec.value
      }
    }

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
      selectedPlayBgmName,
      selectedFinalStage,
      selectedSkyBox: selectedSkyBox,
      selectedclearCountdownTimer,
      enemyModelPropMoveSpeed,
      enemyModelPropHpMax,
      enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec,
      enemiesSpawnModelInvincibleTimeSec,
      objectsPoolModelCountLimit,
      onmyoBulletModelMoveDirectionX,
      onmyoBulletModelMoveDirectionY,
      onmyoBulletModelMoveSpeed,
      onmyoTurretModelInstanceRateTimeSec,
      pentagramSystemModelAutoSpinSpeed,
      pentagramTurnTableViewAngleCorrectionValue,
      pentagramTurnTableModelDistance,
      playerModelPropMoveSpeed,
      playerModelPropHPMax,
      playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec,
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
