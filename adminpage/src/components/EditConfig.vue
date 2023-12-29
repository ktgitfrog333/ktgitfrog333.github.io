<template>
  <div>
    <div v-if='jsonData'>
        <h1>AdminBean</h1>
        <p>targetLevels:
            <select v-model="selectedIndex">
                <option v-for="n in 20" :key="n-1" :value="n-1">{{ n-1 }}</option>
            </select>
        </p>
        <p>playBgmNames:<input type="number" v-model.number="selectedPlayBgmName"></p>
        <p>finalStages: <input type="number" v-model.number="selectedFinalStage"></p>
        <p>skyBoxs: <input type="number" v-model.number="selectedSkyBoxs"></p>
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

<script>
export default {
  name: 'EditConfig',
  data () {
    return {
      selectedIndex: 0,
      selectedPlayBgmName: 0,
      selectedFinalStage: 0,
      selectedSkyBoxs: 0,
      selectedclearCountdownTimer: 0.0,
      enemyModelPropMoveSpeed: 0.0,
      enemyModelPropHpMax: 0,
      jsonData: null
    }
  },
  watch: {
    selectedIndex (newIndex, oldIndex) {
      this.setBetweenFieldsAndJson(oldIndex)
      this.setBetweenJsonAndFields(newIndex)
    }
  },
  created () {
    this.setBetweenJsonAndFields()
  },
  methods: {
    loadJson (event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.jsonData = JSON.parse(e.target.result)
          this.setBetweenJsonAndFields()
        }
        reader.readAsText(file)
      }
    },
    downloadJson () {
      this.setBetweenFieldsAndJson()
      const dataStr = 'data:text/jsoncharset=utf-8,' + encodeURIComponent(JSON.stringify(this.jsonData))
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute('href', dataStr)
      downloadAnchorNode.setAttribute('download', 'data.json')
      document.body.appendChild(downloadAnchorNode) // required for firefox
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    },
    setBetweenJsonAndFields (index = this.selectedIndex) {
      this.selectedPlayBgmName = Number(this.jsonData.playBgmNames[index])
      this.selectedFinalStage = Number(this.jsonData.finalStages[index])
      this.selectedSkyBoxs = Number(this.jsonData.skyBoxs[index])
      this.selectedclearCountdownTimer = Number(this.jsonData.clearCountdownTimer[index])
      this.enemyModelPropMoveSpeed = Number(this.jsonData.EnemyModel.prop.moveSpeed)
      this.enemyModelPropHpMax = Number(this.jsonData.EnemyModel.prop.hpMax)
    },
    setBetweenFieldsAndJson (index = this.selectedIndex) {
      this.jsonData.playBgmNames[index] = this.selectedPlayBgmName
      this.jsonData.finalStages[index] = this.selectedFinalStage
      this.jsonData.skyBoxs[index] = this.selectedSkyBoxs
      this.jsonData.clearCountdownTimer[index] = parseFloat(this.selectedclearCountdownTimer)
      this.jsonData.EnemyModel.prop.moveSpeed = parseFloat(this.enemyModelPropMoveSpeed)
      this.jsonData.EnemyModel.prop.hpMax = this.enemyModelPropHpMax
    }
  }
}
</script>
