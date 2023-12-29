import { shallowMount } from '@vue/test-utils'
import EditConfig from '@/components/EditConfig.vue'

describe('EditConfig.vue', () => {
    beforeEach(() => {
        localStorage.clear();
      });

    it('sets data between fields and JSON', () => {
    const wrapper = shallowMount(EditConfig, {
      data() {
        return {
          selectedIndex: 0,
          selectedPlayBgmName: 1,
          selectedFinalStage: 2,
          selectedSkyBoxs: 3,
          selectedclearCountdownTimer: 4.0,
          enemyModelPropMoveSpeed: 5.0,
          enemyModelPropHpMax: 6,
          jsonData: {
            playBgmNames: [0, 0, 0, 0, 0],
            finalStages: [0, 0, 0, 0, 0],
            skyBoxs: [0, 0, 0, 0, 0],
            clearCountdownTimer: [0.0, 0.0, 0.0, 0.0, 0.0],
            EnemyModel: {
              prop: {
                moveSpeed: 0.0,
                hpMax: 0
              }
            }
          }
        }
      }
    })

    wrapper.vm.setBetweenFieldsAndJson()

    expect(wrapper.vm.jsonData.playBgmNames[0]).toBe(1)
    expect(wrapper.vm.jsonData.finalStages[0]).toBe(2)
    expect(wrapper.vm.jsonData.skyBoxs[0]).toBe(3)
    expect(wrapper.vm.jsonData.clearCountdownTimer[0]).toBe(4.0)
    expect(wrapper.vm.jsonData.EnemyModel.prop.moveSpeed).toBe(5.0)
    expect(wrapper.vm.jsonData.EnemyModel.prop.hpMax).toBe(6)
  })
})