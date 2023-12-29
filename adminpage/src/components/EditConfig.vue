<template>
  <div>
    <div v-if='isUploaded'>
        <h1>AdminBean</h1>
        <p>targetLevels:
            <select v-model="selectedIndex">
                <option v-for="n in 20" :key="n-1" :value="n-1">{{ n-1 }}</option>
            </select>
        </p>
        <p>playBgmNames:<input type="number" v-model.number="selectedPlayBgmName"></p>
        <p>finalStages: <input type="number" v-model.number="selectedFinalStage"></p>
        <p>skyBoxs: <input type="number" v-model.number="selectedSkyBox"></p>
        <p>clearCountdownTimer: <input type="number" v-model.number="selectedclearCountdownTimer"></p>
        <p>EnemyModel moveSpeed: <input type="number" v-model.number="enemyModelPropMoveSpeed"></p>
        <p>EnemyModel hpMax: <input type="number" v-model.number="enemyModelPropHpMax"></p>
      <button @click='downloadJson'>JSONをダウンロード</button>
    </div>
    <div v-else>
      <input type='file' @change='loadJson' />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { type IAdminBean } from './IAdminBean'

export default defineComponent({
  name: 'EditConfig',
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
      drSetBetweenFieldsAndJson
    }
  }
})
</script>
