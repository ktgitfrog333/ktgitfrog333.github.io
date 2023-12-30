import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EditConfig from '@/components/EditConfig.vue'

describe('EditConfig.vue', () => {
  it('setBetweenFieldsAndJson updates jsonData.value correctly', async () => {
    const wrapper = mount(EditConfig)

    // 初期値を設定
    wrapper.vm.selectedIndex = 0
    wrapper.vm.selectedPlayBgmName = 1
    wrapper.vm.selectedFinalStage = 2
    wrapper.vm.selectedSkyBox = 3
    wrapper.vm.selectedclearCountdownTimer = 4.0
    wrapper.vm.enemyModelPropMoveSpeed = 5.0
    wrapper.vm.enemyModelPropHpMax = 6
    wrapper.vm.jsonData = {
        playBgmNames: [0],
        finalStages: [0],
        skyBoxs: [0],
        clearCountdownTimer: [0],
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
      }, // ここに適切な値を設定してください
      ObjectsPoolModel: {
        countLimit: 0
      }, // ここに適切な値を設定してください
      OnmyoBulletModel: {
        moveDirection: {
          x: 0,
          y: 0
        },
        moveSpeed: 0
      }, // ここに適切な値を設定してください
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
        DamageSufferedZoneOfPlayerModel: {
          invincibleTimeSec: 0
        },
        prop: {
          hpMax: 0,
          moveSpeed: 0
        }
      }
    }
    // メソッドを呼び出す
    await wrapper.vm.drSetBetweenFieldsAndJson()

    // 結果を検証
    expect(wrapper.vm.jsonData.playBgmNames[0]).toBe(1)
    expect(wrapper.vm.jsonData.finalStages[0]).toBe(2)
    expect(wrapper.vm.jsonData.skyBoxs[0]).toBe(3)
    expect(wrapper.vm.jsonData.clearCountdownTimer[0]).toBe(4.0)
    expect(wrapper.vm.jsonData.EnemyModel.prop.moveSpeed).toBe(5.0)
    expect(wrapper.vm.jsonData.EnemyModel.prop.hpMax).toBe(6)
  })
})
describe('EditConfig.vue', () => {
    it('setBetweenJsonAndFields correctly sets values', async () => {
        const wrapper = mount(EditConfig)

        // テストデータを設定
        wrapper.vm.jsonData = {
          playBgmNames: [1],
          finalStages: [2],
          skyBoxs: [3],
          clearCountdownTimer: [4],
          EnemyModel: {
              prop: {
              moveSpeed: 5,
              hpMax: 6
              },
              DamageSufferedZoneOfEnemyModel: {
                invincibleTimeSec: 0
              }
          },
          EnemiesSpawnModel: {
            invincibleTimeSec: 0
          }, // ここに適切な値を設定してください
          ObjectsPoolModel: {
            countLimit: 0
          }, // ここに適切な値を設定してください
          OnmyoBulletModel: {
            moveDirection: {
              x: 0,
              y: 0
            },
            moveSpeed: 0
          }, // ここに適切な値を設定してください
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
            DamageSufferedZoneOfPlayerModel: {
              invincibleTimeSec: 0
            },
            prop: {
              hpMax: 0,
              moveSpeed: 0
            }
          }
        }

        // メソッドを呼び出す
        await wrapper.vm.drSetBetweenJsonAndFields()

        // 値が正しく設定されていることを確認
        expect(wrapper.vm.selectedPlayBgmName).toBe(1)
        expect(wrapper.vm.selectedFinalStage).toBe(2)
        expect(wrapper.vm.selectedSkyBox).toBe(3)
        expect(wrapper.vm.selectedclearCountdownTimer).toBe(4)
        expect(wrapper.vm.enemyModelPropMoveSpeed).toBe(5)
        expect(wrapper.vm.enemyModelPropHpMax).toBe(6)
    })
})
