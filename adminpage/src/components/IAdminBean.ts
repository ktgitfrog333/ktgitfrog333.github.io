export interface IAdminBean {
    playBgmNames: number[];
    finalStages: number[];
    skyBoxs: number[];
    clearCountdownTimer: number[];
	EnemyModel: EnemyModel;
}

export interface EnemyModel {
	prop: prop;
}

export interface prop {
	moveSpeed: number;
	hpMax: number;
}
