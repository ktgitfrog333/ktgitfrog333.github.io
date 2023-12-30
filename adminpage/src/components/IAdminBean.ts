export interface IAdminBean {
    playBgmNames: number[];
    finalStages: number[];
    skyBoxs: number[];
    clearCountdownTimer: number[];
	EnemyModel: EnemyModel;
    EnemiesSpawnModel: EnemiesSpawnModel;
    ObjectsPoolModel: ObjectsPoolModel;
    OnmyoBulletModel: OnmyoBulletModel;
    OnmyoTurretModel: OnmyoTurretModel;
    PentagramSystemModel: PentagramSystemModel;
    PentagramTurnTableView: PentagramTurnTableView;
    PentagramTurnTableModel: PentagramTurnTableModel;
    PlayerModel: PlayerModel;
}

export interface EnemyModel {
	prop: prop;
    DamageSufferedZoneOfEnemyModel: DamageSufferedZoneOfEnemyModel;
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

export interface OnmyoTurretModel {
    instanceRateTimeSec: number
}

export interface PentagramSystemModel {
    autoSpinSpeed: number
}

export interface PentagramTurnTableView {
    angleCorrectionValue: number
}

export interface PentagramTurnTableModel {
    distance: number
}

export interface PlayerModel {
    prop: prop;
    DamageSufferedZoneOfPlayerModel: DamageSufferedZoneOfPlayerModel
}

export interface DamageSufferedZoneOfPlayerModel {
    invincibleTimeSec: number
}