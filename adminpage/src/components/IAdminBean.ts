export interface IAdminBean {
    playBgmNames: number[];
    finalStages: number[];
    skyBoxs: number[];
    clearCountdownTimer: number[];
	enemyModel: EnemyModel;
    enemiesSpawnModel: EnemiesSpawnModel;
    objectsPoolModel: ObjectsPoolModel;
    onmyoBulletModel: OnmyoBulletModel;
    pentagramSystemModel: PentagramSystemModel;
    pentagramTurnTableView: PentagramTurnTableView;
    pentagramTurnTableModel: PentagramTurnTableModel;
    playerModel: PlayerModel;
    wrapTurretModel: WrapTurretModel;
    graffitiTurretModel: GraffitiTurretModel;
    sunMoonSystemModel: SunMoonSystemModel;
    levelDesign: LevelDesign;
    clearCountdownTimerCircleView: ClearCountdownTimerCircleView;
    shikigamiSkillSystemModel: ShikigamiSkillSystemModel;
    // TODO:2.インターフェースを宣言
}

export interface EnemyModel {
	prop: prop;
    damageSufferedZoneOfEnemyModel: DamageSufferedZoneOfEnemyModel;
}

export interface prop {
	moveSpeed: number;
	hpMax: number;
}

export interface DamageSufferedZoneOfEnemyModel {
    invincibleTimeSec: number;
}

export interface EnemiesSpawnModel {
    invincibleTimeSec: number;
}

export interface ObjectsPoolModel {
    countLimit: number;
}

export interface OnmyoBulletModel {
    moveDirection: Vector2,
    moveSpeed: number
}

export interface Vector2 {
    x: number,
    y: number
}

export interface PentagramSystemModel {
    autoSpinSpeed: number,
    inputHistoriesLimit: number,
}

export interface PentagramTurnTableView {
    angleCorrectionValue: number
}

export interface PentagramTurnTableModel {
    distance: number
}

export interface PlayerModel {
    prop: prop;
    damageSufferedZoneOfPlayerModel: DamageSufferedZoneOfPlayerModel
}

export interface DamageSufferedZoneOfPlayerModel {
    invincibleTimeSec: number
}

export interface WrapTurretModel {
    moveDirection: Vector2,
}

export interface GraffitiTurretModel {
    moveDirection: Vector2,
}

export interface SunMoonSystemModel {
    durations: number[],
}

export interface LevelDesign {
    mainSkillLists: MainSkillList[],
}

export interface MainSkillList {
    shikigamiType: number,
    mainSkillType: number,
    skillRank: number,
    value: number,
    valueBuffMax: number,
}

export interface ClearCountdownTimerCircleView {
    maskAngle: number;
}

export interface ShikigamiSkillSystemModel {
    candleInfo: candleInfo,
}

export interface candleInfo {
    limitCandleResorceMax: number,
    rapidRecoveryTimeSec: number,
}
// TODO:1.インターフェースを新たに定
