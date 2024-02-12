import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EditConfig from '@/components/EditConfig.vue'

describe('EditConfig.vue', () => {
  it('setBetweenFieldsAndJson updates jsonData.value correctly', async () => {
    const wrapper = mount(EditConfig)

    // 初期値を設定
    wrapper.vm.selectedIndex = 0
    wrapper.vm.state.selectedPlayBgmName = 1
    wrapper.vm.state.selectedFinalStage = 2
    wrapper.vm.state.selectedSkyBox = 3
    wrapper.vm.state.selectedclearCountdownTimer = 4.0
    wrapper.vm.state.enemyModelPropMoveSpeed = 5.0
    wrapper.vm.state.enemyModelPropHpMax = 6
    wrapper.vm.state.enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec = 7
    // wrapper.vm.state.enemiesSpawnModelInvincibleTimeSec = 8
    wrapper.vm.state.objectsPoolModelCountLimit = 9
    wrapper.vm.state.onmyoBulletModelMoveDirectionX = 10
    wrapper.vm.state.onmyoBulletModelMoveDirectionY = 11
    wrapper.vm.state.onmyoBulletModelMoveSpeed = 12.0
    wrapper.vm.state.pentagramSystemModelAutoSpinSpeed = 13.0
    wrapper.vm.state.pentagramTurnTableViewAngleCorrectionValue = 14
    wrapper.vm.state.pentagramTurnTableModelDistance = 15
    wrapper.vm.state.playerModelPropMoveSpeed = 16.0
    wrapper.vm.state.playerModelPropHPMax = 17
    wrapper.vm.state.playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec = 18
    wrapper.vm.state.wrapTurretModelMoveDirectionX = 19
    wrapper.vm.state.wrapTurretModelMoveDirectionY = 20
    wrapper.vm.state.graffitiTurretModelMoveDirectionX = 21
    wrapper.vm.state.graffitiTurretModelMoveDirectionY = 22
    wrapper.vm.state.sunMoonSystemModelDurations = [23, 24, 25]
    wrapper.vm.state.levelDesignMainSkillLists = [{ shikigamiType: 1, mainSkillType: 2, skillRank: 3, value: 26, valueBuffMax: 27 }]
    wrapper.vm.state.clearCountdownTimerCircleViewMaskAngle = 28
    wrapper.vm.state.shikigamiSkillSystemModelCandleInfo = { limitCandleResorceMax: 29, rapidRecoveryTimeSec: 30 }
    wrapper.vm.state.pentagramSystemModelInputHistoriesLimit = 31
    wrapper.vm.jsonData = {
        playBgmNames: [0],
        finalStages: [0],
        skyBoxs: [0],
        clearCountdownTimer: [0],
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
      }, // ここに適切な値を設定してください
      objectsPoolModel: {
        countLimit: 0
      }, // ここに適切な値を設定してください
      onmyoBulletModel: {
        moveDirection: {
          x: 0,
          y: 0
        },
        moveSpeed: 0
      }, // ここに適切な値を設定してください
      pentagramSystemModel: {
        autoSpinSpeed: 0,
        inputHistoriesLimit: 0
      },
      pentagramTurnTableView: {
        angleCorrectionValue: 0
      },
      pentagramTurnTableModel: {
        distance: 0
      },
      playerModel: {
        damageSufferedZoneOfPlayerModel: {
          invincibleTimeSec: 0
        },
        prop: {
          hpMax: 0,
          moveSpeed: 0
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
        durations: [0]
      },
      levelDesign: {
        mainSkillLists: [{ shikigamiType: 0, mainSkillType: 0, skillRank: 0, value: 0, valueBuffMax: 0 }]
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
    }
    // メソッドを呼び出す
    await wrapper.vm.drSetBetweenFieldsAndJson()

    // 結果を検証
    expect(wrapper.vm.jsonData.playBgmNames[0]).toBe(1)
    expect(wrapper.vm.jsonData.finalStages[0]).toBe(2)
    expect(wrapper.vm.jsonData.skyBoxs[0]).toBe(3)
    expect(wrapper.vm.jsonData.clearCountdownTimer[0]).toBe(4.0)
    expect(wrapper.vm.jsonData.enemyModel.prop.moveSpeed).toBe(5.0)
    expect(wrapper.vm.jsonData.enemyModel.prop.hpMax).toBe(6)
    expect(wrapper.vm.jsonData.enemyModel.damageSufferedZoneOfEnemyModel.invincibleTimeSec).toBe(7)
    expect(wrapper.vm.jsonData.enemiesSpawnModel.invincibleTimeSec).toBe(8)
    expect(wrapper.vm.jsonData.objectsPoolModel.countLimit).toBe(9)
    expect(wrapper.vm.jsonData.onmyoBulletModel.moveDirection.x).toBe(10)
    expect(wrapper.vm.jsonData.onmyoBulletModel.moveDirection.y).toBe(11)
    expect(wrapper.vm.jsonData.onmyoBulletModel.moveSpeed).toBe(12.0)
    expect(wrapper.vm.jsonData.pentagramSystemModel.autoSpinSpeed).toBe(13.0)
    expect(wrapper.vm.jsonData.pentagramTurnTableView.angleCorrectionValue).toBe(14)
    expect(wrapper.vm.jsonData.pentagramTurnTableModel.distance).toBe(15)
    expect(wrapper.vm.jsonData.playerModel.prop.moveSpeed).toBe(16.0)
    expect(wrapper.vm.jsonData.playerModel.prop.hpMax).toBe(17)
    expect(wrapper.vm.jsonData.playerModel.damageSufferedZoneOfPlayerModel.invincibleTimeSec).toBe(18)
    expect(wrapper.vm.jsonData.wrapTurretModel.moveDirection.x).toBe(19)
    expect(wrapper.vm.jsonData.wrapTurretModel.moveDirection.y).toBe(20)
    expect(wrapper.vm.jsonData.graffitiTurretModel.moveDirection.x).toBe(21)
    expect(wrapper.vm.jsonData.graffitiTurretModel.moveDirection.y).toBe(22)
    expect(wrapper.vm.jsonData.sunMoonSystemModel.durations).toEqual([23, 24, 25])
    expect(wrapper.vm.jsonData.levelDesign.mainSkillLists).toEqual([{ shikigamiType: 1, mainSkillType: 2, skillRank: 3, value: 26, valueBuffMax: 27 }])
    expect(wrapper.vm.jsonData.clearCountdownTimerCircleView.maskAngle).toBe(28)
    expect(wrapper.vm.jsonData.shikigamiSkillSystemModel.candleInfo.limitCandleResorceMax).toBe(29)
    expect(wrapper.vm.jsonData.shikigamiSkillSystemModel.candleInfo.rapidRecoveryTimeSec).toBe(30)
    expect(wrapper.vm.jsonData.pentagramSystemModel.inputHistoriesLimit).toBe(31)
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
          enemyModel: {
              prop: {
              moveSpeed: 5,
              hpMax: 6
              },
              damageSufferedZoneOfEnemyModel: {
                invincibleTimeSec: 7
              }
          },
          enemiesSpawnModel: {
            invincibleTimeSec: 8
          }, // ここに適切な値を設定してください
          objectsPoolModel: {
            countLimit: 9
          }, // ここに適切な値を設定してください
          onmyoBulletModel: {
            moveDirection: {
              x: 10,
              y: 11
            },
            moveSpeed: 12.0
          }, // ここに適切な値を設定してください
          pentagramSystemModel: {
            autoSpinSpeed: 13.0,
            inputHistoriesLimit: 31
          },
          pentagramTurnTableView: {
            angleCorrectionValue: 14
          },
          pentagramTurnTableModel: {
            distance: 15
          },
          playerModel: {
            damageSufferedZoneOfPlayerModel: {
              invincibleTimeSec: 18
            },
            prop: {
              hpMax: 17,
              moveSpeed: 16.0
            }
          },
          wrapTurretModel: {
            moveDirection: {
              x: 19,
              y: 20
            },
          },
          graffitiTurretModel: {
            moveDirection: {
              x: 21,
              y: 22
            },
          },
          sunMoonSystemModel: {
            durations: [23, 24, 25]
          },
          levelDesign: {
            mainSkillLists: [{ shikigamiType: 1, mainSkillType: 2, skillRank: 3, value: 26, valueBuffMax: 27 }]
          },
          clearCountdownTimerCircleView: {
            maskAngle: 28
          },
          shikigamiSkillSystemModel: {
            candleInfo: {
              limitCandleResorceMax: 29,
              rapidRecoveryTimeSec: 30
            }
          },
        }

        // メソッドを呼び出す
        await wrapper.vm.drSetBetweenJsonAndFields()

        // 値が正しく設定されていることを確認
        expect(wrapper.vm.state.selectedPlayBgmName).toBe(1)
        expect(wrapper.vm.state.selectedFinalStage).toBe(2)
        expect(wrapper.vm.state.selectedSkyBox).toBe(3)
        expect(wrapper.vm.state.selectedclearCountdownTimer).toBe(4)
        expect(wrapper.vm.state.enemyModelPropMoveSpeed).toBe(5)
        expect(wrapper.vm.state.enemyModelPropHpMax).toBe(6)
        expect(wrapper.vm.state.enemyModelDamageSufferedZoneOfEnemyModelInvincibleTimeSec).toBe(7)
        // expect(wrapper.vm.state.enemiesSpawnModelInvincibleTimeSec).toBe(8)
        expect(wrapper.vm.state.objectsPoolModelCountLimit).toBe(9)
        expect(wrapper.vm.state.onmyoBulletModelMoveDirectionX).toBe(10)
        expect(wrapper.vm.state.onmyoBulletModelMoveDirectionY).toBe(11)
        expect(wrapper.vm.state.onmyoBulletModelMoveSpeed).toBe(12.0)
        expect(wrapper.vm.state.pentagramSystemModelAutoSpinSpeed).toBe(13.0)
        expect(wrapper.vm.state.pentagramTurnTableViewAngleCorrectionValue).toBe(14)
        expect(wrapper.vm.state.pentagramTurnTableModelDistance).toBe(15)
        expect(wrapper.vm.state.playerModelPropMoveSpeed).toBe(16.0)
        expect(wrapper.vm.state.playerModelPropHPMax).toBe(17)
        expect(wrapper.vm.state.playerModelDamageSufferedZoneOfPlayerModelInvincibleTimeSec).toBe(18)
        expect(wrapper.vm.state.wrapTurretModelMoveDirectionX).toBe(19)
        expect(wrapper.vm.state.wrapTurretModelMoveDirectionY).toBe(20)
        expect(wrapper.vm.state.graffitiTurretModelMoveDirectionX).toBe(21)
        expect(wrapper.vm.state.graffitiTurretModelMoveDirectionY).toBe(22)
        expect(wrapper.vm.state.sunMoonSystemModelDurations).toEqual([23, 24, 25])
        expect(wrapper.vm.state.levelDesignMainSkillLists).toEqual([{ shikigamiType: 1, mainSkillType: 2, skillRank: 3, value: 26, valueBuffMax: 27 }])
        expect(wrapper.vm.state.clearCountdownTimerCircleViewMaskAngle).toBe(28)
        expect(wrapper.vm.state.shikigamiSkillSystemModelCandleInfo.limitCandleResorceMax).toBe(29)
        expect(wrapper.vm.state.shikigamiSkillSystemModelCandleInfo.rapidRecoveryTimeSec).toBe(30)
        expect(wrapper.vm.state.pentagramSystemModelInputHistoriesLimit).toBe(31)
        })
})
