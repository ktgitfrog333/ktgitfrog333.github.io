<template>
  <div class="container">
    <PreviewGif :targetPreviewID="targetPreviewID" />
    <h1 class="my-3">AdminBean</h1>
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
          <input id="playBgmNames" type="number" class="form-control" v-model.number="selectedPlayBgmName" disabled>
          <label for="finalStages">finalStages:</label>
          <input id="finalStages" type="number" class="form-control" v-model.number="selectedFinalStage" disabled>
          <label for="skyBoxs">skyBoxs:</label>
          <input id="skyBoxs" type="number" class="form-control" v-model.number="selectedSkyBox" disabled>
          <label for="clearCountdownTimer">clearCountdownTimer:</label>
          <input id="selectedclearCountdownTimer" type="number" class="form-control" v-model.number="selectedclearCountdownTimer" @click='setTargetPreviewID'>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{{ 'ステージ共通設定' }}</h3>
          <hr/>
          <label for="EnemyModelPropMoveSpeed">EnemyModelPropMoveSpeed:</label>
          <input id="EnemyModelPropMoveSpeed" type="number" class="form-control" v-model.number="enemyModelPropMoveSpeed">
          <label for="EnemyModelPropHpMax">EnemyModelPropHpMax:</label>
          <input id="EnemyModelPropHpMax" type="number" class="form-control" v-model.number="enemyModelPropHpMax">
        </div>
      </div>
      <h2 class="my-3">出力</h2>
      <hr/>
      <button class="btn btn-primary" @click='downloadJson'>JSONをダウンロード</button>
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
    const jsonData = ref<IAdminBean>({
      playBgmNames: [],
      finalStages: [],
      skyBoxs: [],
      clearCountdownTimer: [],
      EnemyModel: {
        prop: {
          moveSpeed: 0,
          hpMax: 0
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
    const downloadJson = () => {
      setBetweenFieldsAndJson()
      const dataStr = 'data:text/jsoncharset=utf-8,' + encodeURIComponent(JSON.stringify(jsonData.value))
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute('href', dataStr)
      downloadAnchorNode.setAttribute('download', 'data.json')
      document.body.appendChild(downloadAnchorNode) // required for firefox
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    }

    const setBetweenJsonAndFields = (index = selectedIndex.value) => {
      if (jsonData.value && typeof jsonData.value === 'object') {
        selectedPlayBgmName.value = jsonData.value.playBgmNames[index]
        selectedFinalStage.value = jsonData.value.finalStages[index]
        selectedSkyBox.value = jsonData.value.skyBoxs[index]
        selectedclearCountdownTimer.value = jsonData.value.clearCountdownTimer[index]
        enemyModelPropMoveSpeed.value = jsonData.value.EnemyModel.prop.moveSpeed
        enemyModelPropHpMax.value = jsonData.value.EnemyModel.prop.hpMax
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
