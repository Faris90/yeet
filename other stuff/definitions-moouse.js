// GUN DEFINITIONS
const combineStats = function(arr) {
    try {
        // Build a blank array of the appropiate length
        let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        arr.forEach(function(component) {
            for (let i = 0; i < data.length; i++) {
                data[i] = data[i] * component[i];
            }
        });
        return {
            reload: data[0],
            recoil: data[1],
            shudder: data[2],
            size: data[3],
            health: data[4],
            damage: data[5],
            pen: data[6],
            speed: data[7],
            maxSpeed: data[8],
            range: data[9],
            density: data[10],
            spray: data[11],
            resist: data[12],
        };
    } catch (er) {
        console.log(er);
        console.log(JSON.stringify(arr));
    }
};
const skillSet = (() => {
    let config = require('../config.json');
    let skcnv = {
        rld: 0,
        pen: 1,
        str: 2,
        dam: 3,
        spd: 4,

        shi: 5,
        atk: 6,
        hlt: 7,
        rgn: 8,
        mob: 9,
    };
    return args => {
        let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let s in args) {
            if (!args.hasOwnProperty(s)) continue;
            skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
        }
        return skills;
    };
})();
const g = { // Gun info here
    trap: [40, 1, 0.25, 0.6, 1.4, 0.2, 1, 5, 1, 1, 1, 15, 3],
    swarm: [36, 0.25, 0.05, 0.4, 1.2, 0.2, 1, 3.5, 1, 1, 1, 5, 1],
    drone: [72, 0.25, 0.1, 0.6, 5, 0.3, 1, 2.5, 1, 1, 1, 0.1, 1],
    factory: [72, 1, 0.1, 0.7, 2, 0.2, 1, 3, 1, 1, 1, 0.1, 1],
    basic: [16, 1.4, 0.1, 1, 2, 0.2, 1, 4.5, 1, 1, 1, 15, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bigger: [1, 1, 1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    k: [1, 1, 1, 0.25, 0.9, 1, 1, 1, 1, 1, 1, 1, 1],
    explode: [5, 0, 1.75, 1, 0.6, 0.6, 0.6, 2, 0.85, 0.95, 1.2, 360, 1],
    splitter: [1, 1, 0.005, 1, 1, 1, 1, 1, 1, 1, 1, 0.0005, 1],
    spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
    bot: [0.8, 1, 1, 1, 3, 3, 3, 2, 0.7, 1, 1, 1, 1.05],
    minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
    single: [1, 1, 1, 1, 0.9, 1, 0.9, 1.5, 1, 1, 1, 1, 1],
    sniper: [1.3, 1, 0.25, 1, 1, 1, 1.1, 1.3, 1.5, 1, 1.5, 0.25, 1.15],
    clicker: [1.3, 0.25, 0.25, 1, 0.5, 0.9, 0.5, 1, 1.1, 1, 1, 2, 1.15],
    rifle: [0.85, 0.8, 1.5, 1, 0.75, 0.75, 0.9, 1.1, 1, 1, 1.1, 2, 1],
    assass: [1.5, 1, 0.25, 1, 1, 1, 1.1, 1.1, 1.15, 1, 2.5, 0.5, 1.3],
    ranger: [1.25, 2, 0.25, 1, 1.05, 1.05, 1.05, 1.1, 1.15, 1, 2.5, 0.5, 1.3],

    hunter: [1.85, 0.65, 1, 0.75, 1, 1, 1, 1.05, 1, 1, 1.2, 1, 1.15],
    hunter2: [1, 1, 1, 0.8, 0.85, 0.75, 0.9, 1, 1, 1, 0.9, 1, 1],
    preda: [1.25, 1, 1, 1, 1.35, 0.9, 1.2, 1, 1, 1, 1, 1, 1],
    preda2: [1.0, 1, 1, 1, 1.35, 1, 1.2, 1, 0.9, 1, 1, 1, 1],
    snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
    sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
    snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    mach: [0.5, 0.8, 1.7, 1, 0.7, 0.75, 1, 1, 0.8, 1, 1, 2.5, 1],
    blaster: [1, 1.2, 1.25, 1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
    flame: [3, 1.2, 1, 0.3, 1.5, 1, 1.3, 0.4, 0.8, 1.1, 0.5, 1, 0.8],
    chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
    mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
    stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
    laser: [0.3, 0.1, 0.01, 1, 0.6, 0.6, 0.6, 1.5, 1, 1.5, 1, 0.01, 1],
    shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.5, 1.8, 0.6, 1, 1.2, 1.2, 1],
    vulc: [1.1, 0.01, 1, 0.8, 0.35, 0.45, 0.45, 1.3, 1.3, 1, 1, 0.4, 1],
    flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
    tri: [1, 0.9, 1, 1, 0.9, 0.95, 1, 0.8, 0.8, 0.6, 1, 1, 1],
    trifront: [1, 0.2, 1, 1, 1.1, 1.05, 1.1, 1.3, 1.1, 1.5, 1, 1, 1],
    thruster: [1, 1.33, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    auto: /*pure*/ [1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
    five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
    autosnipe: [2.1, 1, 0.25, 1.4, 1, 1, 1, 1.1, 1.18, 1, 3, 0.5, 1.3],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    pound: [2, 1.75, 1, 1, 1, 1.6, 1, 0.85, 0.8, 1, 1.6, 1, 1.15],
    destroy: [2.1, 2.5, 0.5, 1, 1.6, 1.6, 1.15, 0.7, 0.5, 1, 1.6, 1, 3],
    anni: [1.25, 1.2, 1, 1, 1.05, 1.05, 1.05, 1, 1, 1.25, 1, 1, 1],
    hive: [1.5, 0.8, 1, 0.8, 0.85, 0.6, 1, 1.05, 0.6, 1, 1, 1, 1],
    hiveshooter: [1.5, 0.8, 1, 0.8, 0.85, 0.9, 0.9, 1.4, 0.6, 1.4, 1, 1, 1],
    arty: [1.2, 0.75, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
    mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
    spreadmain: [0.78125, 0.25, 0.5, 1, 1, 1, 1, 1.5 / 0.78, 0.9 / 0.78, 1, 1, 1, 1],
    spread: [1.5, 1, 0.25, 1, 1.3, 1.3, 1.3, 0.7, 0.7, 1, 1, 0.25, 1],
    skim: [1.35, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
    rocket: [1.35, 1.2, 0.1, 1, 1.3, 1, 1.1, 0.9, 2.25, 1.1, 1, 1, 1.1],
    twin: [1, 0.5, 0.9, 1, 0.8, 0.9, 1, 1, 1, 1, 1, 1.2, 1],
    bent: [1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
    triple: [1.2, 0.667, 0.9, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    quint: [1.33, 0.667, 0.9, 1, 1, 1, 1, 1, 1, 1, 1.1, 0.9, 0.95],
    dual: [3, 1, 0.8, 1, 1.35, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
    double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
    hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
    puregunner: [1, 0.25, 1.5, 1, 1.4, 0.25, 1.25, 1, 1, 1, 1.5, 1, 1.2],
    machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
    gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.25, 1.2],
    power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
    nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
    fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
    turret: [2, 1, 1, 1, 0.7, 0.65, 0.7, 1, 1, 1, 0.1, 1, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    battle: [1, 1, 1, 1, 1.2, 1.1, 1, 1, 0.85, 1, 1, 1, 1.1],
    bees: [1, 1, 1, 1.4, 1.3, 1.5, 0.6, 3, 1.5, 1, 0.25, 1, 1],
    carrier: [1.1, 1, 1, 1, 1, 0.9, 1, 1.2, 1.2, 1.1, 1, 1, 1],
    hexatrap: [1.1, 1, 0.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
    block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
    circle: [3, 2, 0.1, 1.1, 2, 1.5, 1.5, 1, 2.5, 1.1, 1, 1, 1.25],
    construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
    boomerang: [0.8, 1, 1, 1, 1.1, 0.6, 1.5, 0.75, 0.75, 1.35, 1, 1, 1],
    quadtrap: [1.1, 1, 1, 1, 0.8, 0.9, 0.8, 1.2, 1, 1, 1, 1, 1.1],
    over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
    meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
    weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
    commander: [3, 1, 1, 0.7, 0.5, 0.85, 1, 1, 1, 0.1, 0.5, 1, 1],
    sunchip: [5, 1, 1, 1.4, 0.8, 0.8, 0.8, 0.8, 1, 1, 0.8, 1, 1],
    eggchip: [0.6, 1, 1, 0.35, 0.8, 0.8, 0.8, 1.1, 1, 1, 1, 1, 1],
    babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
    stronger: [1, 1, 1, 1, 1.05, 1.05, 1, 1.1, 1, 1, 1, 1, 1],
    bitlessknock: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 1, 0.95],
    suck: [0.2, 0.1, 1, 30, 10, 0, 1, 0, 1, 1, 0.95, 1, 1],
    bitweak: [1, 1, 1, 1, 0.95, 0.9, 1, 1, 1, 1, 1, 1, 1],
    lowweak: [2, 1, 1, 1, 0.7, 0.7, 0.85, 0.7, 0.7, 0.25, 0.3, 1, 1],
    lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    norecoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    opreload: [0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bitmorereload: [0.875, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    thirdreload: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    somelessreload: [1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bitlessreload: [1.05, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
    insanespeed: [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
    bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
    slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
    halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
    notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
    halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
    morerange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    bitmorerange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3, 1, 1, 1],
    fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    op: [1, 1.1, 1, 1.1, 20, 20, 20, 5, 2, 1.4, 4, 0.1, 1],
    moreop: [0.5, 0.5, 1, 1, 100, 100, 100, 1.5, 1, 1, 1, 0.5, 1],
    moreop2: [0.5, 0.5, 1, 100, 1000, 1000, 1000, 1.5, 1, 1, 1, 0.5, 1],
    protectorswarm: [2.5, 0, 1, 1, 500, 2, 1, 1, 1, 0.4, 10, 1, 10],
    protectordrone: [0.5, 0, 1, 1, 75000, 5, 1, 1, 1, 1, 10, 0.1, 10],
    destroyDominator: [4, 0, 1, 0.975, 8, 8, 6.25, 0.5, 1, 1, 1, 0.5, 1],
    gunnerDominator: [0.65, 0, 1, 0.5, 1.2, 1, 1.2, 1.25, 1, 0.7, 1, 1.25, 1],
    trapperDominator: [0.85, 0, 0.25, 1.1, 1.2, 1.2, 1.2, 0.6, 2, 0.7, 1, 0.5, 1],
    saber: [0.2, 0.1, 5, 20, 1, 1, 1, 1, 1, 0.05, 1, 0.1, 1],
};

const dfltskl = 9;

// NAMES
const statnames = {
    smasher: 1,
    drone: 2,
    necro: 3,
    swarm: 4,
    trap: 5,
    generic: 6,
};
const gunCalcNames = {
    default: 0,
    bullet: 1,
    drone: 2,
    swarm: 3,
    fixedReload: 4,
    thruster: 5,
    sustained: 6,
    necro: 7,
    trap: 8,
};

// ENTITY DEFINITIONS
exports.genericEntity = {
    NAME: '',
    LABEL: 'Unknown Entity',
    TYPE: 'unknown',
    DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    GROW: false,
    COLOR: 16,
    INDEPENDENT: false,
    CONTROLLERS: ['doNothing'],
    HAS_NO_MASTER: false,
    MOTION_TYPE: 'glide', // motor, swarm, chase
    FACING_TYPE: 'toTarget', // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: 'hardLocal', // hard, repel, never, hardWithBuffer
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
    GUNS: [],
    MAX_CHILDREN: 0,
    GUNS: [],
    TURRETS: [],


    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,

        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};

// FOOD
exports.food = {
    TYPE: 'food',
    DAMAGE_CLASS: 1,
    CONTROLLERS: ['moveInCircles'],
    HITS_OWN_TYPE: 'repel',
    MOTION_TYPE: 'drift',
    FACING_TYPE: 'turnWithSpeed',
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,

    HEALTH_WITH_LEVEL: false,
    GUNS: [],
    TURRETS: [],
    CAN_BE_ON_LEADERBOARD: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
    },
    LABEL: 'Alpha Pentagon',
    VALUE: 15000,
    SHAPE: -5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 20 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 150 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 1 * basePolygonHealth,
        REGEN: 0.0001,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
    },
    LABEL: 'Beta Pentagon',
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 3 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 100 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.pentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Pentagon',
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.triangle = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 2,
    },
    LABEL: 'Triangle',
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.square = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'Square',
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.egg = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 0,
    },
    LABEL: 'Egg',
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 18,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,


};

exports.greenpentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
        SHINY: true,
    },
    LABEL: 'Pentagon',
    VALUE: 30000,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.00375,
    },
    DRAW_HEALTH: true,
};
exports.greentriangle = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
        SHINY: true,
    },
    LABEL: 'Triangle',
    VALUE: 7000,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5,
        ACCELERATION: 0.0075,
    },
    DRAW_HEALTH: true,
};
exports.greensquare = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
        SHINY: true,
    },
    LABEL: 'Square',
    VALUE: 2000,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: 0.5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2,
        ACCELERATION: 0.005,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};

exports.gem = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 0,
        SHINY: true,
    },
    LABEL: 'Gem',
    VALUE: 2000,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
        ACCELERATION: 0.015,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.obstacle = {
    TYPE: 'wall',
    DAMAGE_CLASS: 1,
    LABEL: 'Rock',
    FACING_TYPE: 'turnWithSpeed',
    SHAPE: -9,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    GIVE_KILL_MESSAGE: true,
    ACCEPTS_SCORE: false,
    GUNS: [],
    TURRETS: [],
};
exports.babyObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 25,
    SHAPE: -7,
    LABEL: "Gravel",
};
exports.wallObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 150,
    SHAPE: 4,
    LABEL: "Wall",
    VARIES_IN_SIZE: false,
    FACING_TYPE: 'locksFacing',
};
exports.megaObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 80,
    SHAPE: 12,
    LABEL: "Boulder",
    VARIES_IN_SIZE: false,

};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.flame = {
    LABEL: 'Flame',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    GROW: true,
    GROWAMOUNT: 1.025,
    VARIES_IN_SIZE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 0.5,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,

    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.trailflame = {
    LABEL: 'Flame',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    GROW: true,
    GROWAMOUNT: 1.5,
    VARIES_IN_SIZE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 0.5,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,

    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};


exports.line = {
    LABEL: 'Line',
    TYPE: 'bullet',
    SHAPE: -1,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.casing = {
    PARENT: [exports.bullet],
    LABEL: 'Shell',
    TYPE: 'swarm',
};

exports.swarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    HITS_OWN_TYPE: 'never',
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.bee = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: 'Drone',
    HITS_OWN_TYPE: 'hardWithBuffer',
};
exports.autoswarm = {
    PARENT: [exports.swarm],
    AI: {
        farm: true,
    },
    INDEPENDENT: true,
};

exports.trap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.block = {
    LABEL: 'Set Trap',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget'],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.boomerang = {
    LABEL: 'Boomerang',
    PARENT: [exports.trap],
    CONTROLLERS: ['boomerang'],
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'never',
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};

exports.drone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 1,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.sunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        farm: true,
    },
    DRAW_HEALTH: false,
};
exports.eggchip = {
    PARENT: [exports.drone],
    SHAPE: 0,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        farm: true,
    },
    DRAW_HEALTH: false,
};
exports.autosunchip = {
    PARENT: [exports.sunchip],
    AI: {
        skynet: true,
        farm: true,
    },
    INDEPENDENT: true,
};

exports.missile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [0, 0, 1, 0, 0, -90, 5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.muchmorerecoil, g.morerecoil, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange, g.halfrange, g.halfrange, g.halfrange, g.halfrange]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.split1 = {
    PARENT: [exports.bullet],

    INDEPENDENT: true,

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [0, 0, 1, 0, 0, 90, 1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.morerecoil, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange, g.halfrange, g.halfrange, g.halfrange, g.halfrange]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {

        POSITION: [0, 0, 1, 0, 0, -90, 2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.muchmorerecoil, g.muchmorerecoil, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange, g.halfrange, g.halfrange, g.halfrange, g.halfrange]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.split2 = {
    PARENT: [exports.bullet],

    INDEPENDENT: true,

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [0, 0, 1, 0, 0, -90, 1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.morerecoil, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange, g.halfrange, g.halfrange, g.halfrange, g.halfrange]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [0, 0, 1, 0, 0, 90, 2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.muchmorerecoil, g.muchmorerecoil, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange, g.halfrange, g.halfrange, g.halfrange, g.halfrange]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.trapmissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 160,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

            POSITION: [15, 6, 1, 0, 0, 140, 0, ],
        }, {
            POSITION: [3, 6, 1.3, 15, 0, 140, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morereload, g.morerecoil]),
                TYPE: [exports.trap, {
                    PERSISTS_AFTER_DEATH: true,
                }],
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        }, {
            POSITION: [15, 6, 1, 0, 0, 220, 0, ],
        }, {
            POSITION: [3, 6, 1.3, 15, 0, 220, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morereload, g.morerecoil]),
                TYPE: [exports.trap, {
                    PERSISTS_AFTER_DEATH: true,
                }],
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },

    ],
};
exports.blockmissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 160,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

            POSITION: [15, 10, 1, 0, 0, 140, 0, ],
        }, {
            POSITION: [3, 10, 1.1, 15, 0, 140, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morereload, g.morerecoil, g.block, g.morespeed, g.morespeed]),
                TYPE: [exports.block, {
                    PERSISTS_AFTER_DEATH: true,
                }],
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        }, {
            POSITION: [15, 10, 1, 0, 0, 220, 0, ],
        }, {
            POSITION: [3, 10, 1.1, 15, 0, 220, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morereload, g.morerecoil, g.block, g.morespeed, g.morespeed]),
                TYPE: [exports.block, {
                    PERSISTS_AFTER_DEATH: true,
                }],
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },

    ],
};

exports.lilmissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.trailmissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange, g.halfrange]),
            TYPE: [exports.trailflame, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.lilmissile2 = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [15, 6, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [3, 6, 1.3, 15, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morereload, g.morerecoil]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};

exports.minimissile = {
    PARENT: [exports.bullet],
    LABEL: 'Launched Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 80,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.gunner, g.tonsmorrecoil, g.muchmorerecoil]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.multimissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.morerange]),
            TYPE: [exports.minimissile, {
                PERSISTS_AFTER_DEATH: true,
            }],

        },
    }, ],
};
exports.curveR = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 100, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.doublereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.curveL = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 260, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.doublereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.torpedo = {
    PARENT: [exports.bullet],
    LABEL: 'Torpedo',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1.4, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.mach, g.muchmorerecoil, g.morerecoil]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};


exports.fatmissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 11, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.pound, g.bitmorereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.spinmissile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: 'fastspin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morereload, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morereload, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};

exports.rocket2 = {
    PARENT: [exports.bullet],
    LABEL: 'Rocket',
    BODY: {
        RANGE: 120,
    },


    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [10, 10, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed, g.mach, g.lotsmorrecoil, g.morerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Machine Thruster',
            AUTOFIRE: true,
        },
    }, ],
};
exports.hypermissile = {
    BODY: {
        RANGE: 480,
    },
    PARENT: [exports.missile],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 150, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 210, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -2, 90, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 270, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.hypermissile2 = {
    BODY: {
        RANGE: 150,
    },
    PARENT: [exports.bullet],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 150, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morespeed, g.doublereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 210, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morespeed, g.doublereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -2, 100, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed, g.doublereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 260, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed, g.doublereload]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.snake = {
    PARENT: [exports.bullet],
    LABEL: 'Snake',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            NEGATIVE_RECOIL: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.hive = {
    PARENT: [exports.bullet],
    LABEL: 'Hive',
    BODY: {
        RANGE: 90,
        FOV: 0.8,
    },
    FACING_TYPE: 'turnWithSpeed',
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster', 'alwaysFire'],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};

// TANK CLASSES
const base = {
    ACCELERATION: 1.6,
    SPEED: 5.25,
    HEALTH: 15,
    DAMAGE: 4,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 3,
    REGEN: 0.025,
    FOV: 1,
    DENSITY: 0.5,
};
exports.genericTank = {
    LABEL: 'Unknown Class',
    TYPE: 'tank',
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'toTarget',
    SIZE: 12,


    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    BODY: { // def
        ACCELERATION: base.ACCELERATION,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH * 0.4,
        DAMAGE: base.DAMAGE * 0.4,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 0.9,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
};
let gun = {};

exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.droneAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    CONTROLLERS: ['onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.twin, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.opdroneAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 6
    },
    COLOR: 16,
    CONTROLLERS: ['onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.twin, g.twin, g.op, g.opreload]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machineAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    BODY: {
        FOV: 1.5,

    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 11, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.mach, g.slow, g.turret]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machineAutoTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    BODY: {
        FOV: 1.5,

    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 11, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.power, g.morerecoil, g.mach, g.fast, g.auto]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machineAutoTurret3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    BODY: {
        FOV: 1.5,

    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 11, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.auto]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.autoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.pound, g.doublereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, {
        POSITION: [20, 6, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.pound, g.doublereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, ],
};
exports.oldAutoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 7, 1, 0, -5.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, {
        POSITION: [20, 7, 1, 0, 5.75, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, ],
};

exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.auto5gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
            TYPE: exports.bullet,
        },
    }],
};
exports.heavy3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.commanderGun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['nearestDifferentMaster', 'canRepel'],
    COLOR: 16,
    MAX_CHILDREN: 5,
    AI: {
        NO_LEAD: true,
        view360: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 14, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.droneGun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['nearestDifferentMaster', 'canRepel'],
    COLOR: 16,
    MAX_CHILDREN: 4,
    AI: {
        NO_LEAD: true,
        view360: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 16, 1.15, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over, g.bitweak]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.sniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.autosnipe]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0, ],
    }, ],
};
exports.bigsniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound, g.auto, g.autosnipe, g.stronger]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 12, -1.5, 5, 0, 0, 0, ],
    }, ],
};

exports.bansheegun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [26, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload, g.bitlessknock]),
            TYPE: exports.bullet,
        },
    }],
};
exports.auto4gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }],
};
exports.bigauto4gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 1, 0, -4.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1, 0, 4.5, 0, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1, 0, 0, 0, 0.6667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }],
};

exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 16, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 16, 1.1, 20, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.flank]),
            TYPE: exports.block,
        },
    }, ],
};
exports.smasherBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.smasherBody2 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -8,
    INDEPENDENT: true,
};
exports.spikeBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -4,
    INDEPENDENT: true,
};
exports.spikeBody1 = {
    LABEL: '',
    CONTROLLERS: ['fastspin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.spikeBody2 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.megasmashBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: true,
};
exports.dominationBody = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.baseSwarmTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: {
        NO_LEAD: true,
        shapefriend: true,
    },
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: [exports.swarm, {
                INDEPENDENT: true,
                AI: {
                    shapefriend: true,
                },
            }, ],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};
exports.baseGunTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Protector',
    BODY: {
        FOV: 5,
    },
    ACCEPTS_SCORE: false,
    CONTROLLERS: ['nearestDifferentMaster'],
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.insanespeed, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [11, 13, 1, 6, 0, 0, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.insanespeed, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [7, 13, -1.3, 6, 0, 0, 0, ],
    }],
};
exports.baseProtector = {
    PARENT: [exports.genericTank],
    LABEL: 'Base',
    TYPE: 'fixed',
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        RESIST: 100,
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    CAN_BE_ON_LEADERBOARD: false,
    //CONTROLLERS: ['nearestDifferentMaster'],
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody,
    }, {
        POSITION: [12, 7, 0, 45, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 135, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 225, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 315, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0, ],
    }, ],
};
exports.baseDroneSpawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Base',
    TYPE: 'fixed',
    SIZE: 20,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    HITS_OWN_TYPE: 'never',
    BODY: { // def
        RESIST: 100,
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 0.7,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    CAN_BE_ON_LEADERBOARD: false,

    AI: {
        shapefriend: true,
        parentView: true,
    },
    MAX_CHILDREN: 6,
    STAT_NAMES: statnames.drone,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.protectordrone]),
            TYPE: [exports.drone, {
                AI: {
                    shapefriend: true,
                    parentView: true
                },
            }, ],
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }],
};


exports.dominator = {
    PARENT: [exports.genericTank],
    LABEL: 'Dominator',
    TYPE: 'fixed',
    DANGER: 10,
    SIZE: 48,
    SKILL: skillSet({
        dam: 2,
        pen: 2,
        str: 1,
    }),
    BODY: {
        RESIST: 100,
        SPEED: 0,
        HEALTH: 250,
        DAMAGE: 10,
        PENETRATION: 0.25,
        FOV: 0.7,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN * 0.75,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    TURRETS: [{
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody,
    }],
    CAN_BE_ON_LEADERBOARD: false,
    GIVE_KILL_MESSAGE: false,
    ACCEPTS_SCORE: false,
};

exports.destroyerDominator = {
    PARENT: [exports.dominator],
    GUNS: [{
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
    }],
};
exports.swarmDominator = {
    PARENT: [exports.dominator],
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        FOV: 1.55
    },
    GUNS: [{
        POSITION: [5, 3, -1.6, 8, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morereload]),
            TYPE: exports.swarm,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 3, -1.6, 8, -3, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morereload]),
            TYPE: exports.swarm,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 3, -1.6, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morereload]),
            TYPE: exports.swarm,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};

exports.gunnerDominator = {
    PARENT: [exports.dominator],
    GUNS: [{
        POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15.85, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
    }],
};

exports.trapperDominator = {
    PARENT: [exports.dominator],
    FACING_TYPE: 'autospin',
    GUNS: [{
        POSITION: [3.5, 3.75, 1, 8, 0, 0, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 45, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 90, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 135, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 180, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 225, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 270, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [3.5, 3.75, 1, 8, 0, 315, 0],
    }, {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: exports.trap,
            AUTOFIRE: true,
        },
    }]
};
exports.bulletaccel = {
    PARENT: [exports.bullet],
    CONTROLLERS: ['alwaysFire'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 0.0001, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.tonsmorrecoil, g.weak, g.threequartersrof]),
            TYPE: exports.bullet,
            AUTOFIRE: true,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def
            MAX_CHILDREN: 0, // def
            ALT_FIRE: false, // def
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.homingbullet = {
    PARENT: [exports.bullet],
    BODY: {
        FOV: 1.1
    },
    FACING_TYPE: 'toTarget',
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 0.001, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.opreload, g.weak, g.halfrange]),
            TYPE: exports.bullet,
            AUTOFIRE: true,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def
            MAX_CHILDREN: 0, // def
            ALT_FIRE: false, // def
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};

exports.insanehomingbullet = {
    PARENT: [exports.bullet],
    BODY: {
        FOV: 1.1
    },
    FACING_TYPE: 'toTarget',
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 0.001, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.opreload, g.weak, g.halfrange, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            AUTOFIRE: true,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def
            MAX_CHILDREN: 0, // def
            ALT_FIRE: false, // def
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};


exports.twinminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.power, g.slow, g.minion, g.stronger, g.morereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.power, g.slow, g.minion, g.stronger, g.morereload]),
            TYPE: exports.bullet,
        },
    }],
};
exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.skimminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    SHAPE: 4,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.minion]),
            TYPE: exports.lilmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.droneminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 2,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.minion, g.fast, g.bitmorereload]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 4,
        },
    }, ],
};
exports.trapminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minion, g.stronger, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.sniperminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.triminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    BODY: {
        FOV: 0.9,
        SPEED: 2,
        ACCELERATION: 0.8,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    DANGER: 7,
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.minion, g.bitweak, g.bitweak]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {

        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.minion, ]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.minion]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense, g.stronger, g.bitlessspeed]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.mturret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    BODY: {
        FOV: 0.8,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.turret, g.slow, g.morereload, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.swarmpillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 0.9,
    },
    SHAPE: 4,
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 11, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.minion, g.morereload, g.turret, g.power, g.stronger]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.swarmpillboxTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    SHAPE: 4,
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 11, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.minion, g.morereload, g.turret, g.power, g.stronger, g.doublereload, g.doublereload, g.morereload]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.weakpillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense, g.bitlessspeed]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.missile2 = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 200,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 180, 0.25, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.mturret,
    }]
};
exports.pillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret,
    }]
};
exports.autodrone = {

    PARENT: [exports.drone],

    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.droneAutoTurret,
    }]
};
exports.opautodrone = {

    PARENT: [exports.drone],

    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.opdroneAutoTurret,
    }]
};
exports.autominion = {

    PARENT: [exports.minion],

    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.droneAutoTurret,
    }]
};
exports.swarmpillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.swarmpillboxTurret,
    }]
};
exports.trapcircle = {
    LABEL: 'Trap Launcher',
    PARENT: [exports.block],
    SHAPE: -4,
    FACING_TYPE: 'autospin',
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 5.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 5.5, 1.7, 12, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.bitweak, g.bitlessreload, g.bitweak]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: true,


        },
    }, {
        POSITION: [12, 5.5, 1, 0, 0, 90, 0, ],
    }, {
        POSITION: [3, 5.5, 1.7, 12, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.bitweak, g.bitlessreload, g.bitweak]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: true,


        },
    }, {
        POSITION: [12, 5.5, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [3, 5.5, 1.7, 12, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.bitweak, g.bitlessreload, g.bitweak]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: true,


        },
    }, {
        POSITION: [12, 5.5, 1, 0, 0, 270, 0, ],
    }, {
        POSITION: [3, 5.5, 1.7, 12, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.bitweak, g.bitlessreload, g.bitweak]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: true,

        },
    }, ],


};
exports.minipillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -3,
    CONTROLLERS: ['nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.weakpillboxTurret,
    }]
};
exports.dualpillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.block],
    SHAPE: -5,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.auto4gun,
    }]
};
exports.tripillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.block],
    SHAPE: -6,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.bigauto4gun,
    }]
};
exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1,
    },
    COLOR: 2,
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim, g.fast, g.stronger]),
            TYPE: exports.hypermissile,
        },
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.skimboss = {
    PARENT: [exports.genericTank],
    LABEL: 'Elite Skimmer',
    SHAPE: 3,
    COLOR: 2,
    SIZE: 20,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    FACING_TYPE: 'autospin',
    BODY: {
        FOV: 1.7,
        SPEED: base.SPEED * 0.2,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2,
    },
    SKILL: skillSet({
        rld: 0,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 0.3,
        atk: 0,
        hlt: 0,
        shi: 0,
        rgn: 0,
        mob: 0,
    }),
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 5, 0, 60, 170, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [15, 5, 0, 180, 170, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [15, 5, 0, 300, 170, 0],
        TYPE: exports.skimturret,
    }, ],
};

function makeAuto(type, name = -1, options = {}) {
    let turret = {
        type: exports.autoTurret,
        size: 10,
        independent: true,
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }

    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [turret.size, 0, 0, 180, 360, 1, ],
        TYPE: [turret.type, {
            CONTROLLERS: ['nearestDifferentMaster'],
            INDEPENDENT: turret.independent,
        }],
    };
    if (type.GUNS != null) {
        output.GUNS = type.GUNS;
    }
    if (type.TURRETS == null) {
        output.TURRETS = [autogun];
    } else {
        output.TURRETS = [...type.TURRETS, autogun];
    }
    if (name == -1) {
        output.LABEL = 'Auto-' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    output.DANGER = type.DANGER + 1;
    return output;
}

function makeHybrid(type, name = -1) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner = {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, {
                INDEPENDENT: true,
            }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 3,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner];
    } else {
        output.GUNS = [...type.GUNS, spawner];
    }
    if (name == -1) {
        output.LABEL = 'Hybrid ' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}

exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',



    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
                LABEL: '', // def
                STAT_CALCULATOR: 0, // def
                WAIT_TO_CYCLE: false, // def
                AUTOFIRE: false, // def
                SYNCS_SKILLS: false, // def
                MAX_CHILDREN: 0, // def
                ALT_FIRE: false, // def
                NEGATIVE_RECOIL: false, // def
            },
        },

    ],
};
exports.pentathing = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    SHAPE: 5,


    //CONTROLLERS: ['nearestDifferentMaster'],



};
exports.basicsplit = {
    PARENT: [exports.genericTank],
    LABEL: 'Splitter',



    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.splitter]),
                TYPE: exports.split1,
                LABEL: '', // def
                STAT_CALCULATOR: 0, // def
                WAIT_TO_CYCLE: false, // def
                AUTOFIRE: false, // def
                SYNCS_SKILLS: false, // def
                MAX_CHILDREN: 0, // def
                ALT_FIRE: false, // def
                NEGATIVE_RECOIL: false, // def
            },
        }, {
            POSITION: [18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.splitter]),
                TYPE: exports.split2,
                LABEL: '', // def
                STAT_CALCULATOR: 0, // def
                WAIT_TO_CYCLE: false, // def
                AUTOFIRE: false, // def
                SYNCS_SKILLS: false, // def
                MAX_CHILDREN: 0, // def
                ALT_FIRE: false, // def
                NEGATIVE_RECOIL: false, // def
            },
        },

    ],
};
exports.basicbot = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    BODY: {
        SPEED: base.SPEED * 1,
        FOV: 1.1,
        ACCELERATION: base.ACCELERATION * 0.8,
        HEALTH: base.HEALTH * 1.4,
        DAMAGE: base.DAMAGE * 1.1
    },
    LEVEL: 6969,



    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.bot]),
                TYPE: exports.bullet,
                LABEL: '', // def
                STAT_CALCULATOR: 0, // def
                WAIT_TO_CYCLE: false, // def
                AUTOFIRE: false, // def
                SYNCS_SKILLS: false, // def
                MAX_CHILDREN: 0, // def
                ALT_FIRE: false, // def
                NEGATIVE_RECOIL: false, // def
            },
        },

    ],
};
exports.multitool = {
    PARENT: [exports.genericTank],
    LABEL: 'Multitool',
    DANGER: 8,
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: 1.15,
        ACCELERATION: base.ACCELERATION * 0.8,
    },
    STAT_NAMES: statnames.generic,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bitweak, g.bitlessreload, g.halfrecoil, g.twin]),
                TYPE: exports.bullet,
                // def
                STAT_CALCULATOR: 0, // def
                WAIT_TO_CYCLE: false, // def
                AUTOFIRE: false, // def
                SYNCS_SKILLS: false, // def
                MAX_CHILDREN: 0, // def
                ALT_FIRE: false, // def
                NEGATIVE_RECOIL: false, // def
            },
        }, {

            POSITION: [12, 6, -1.6, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bitweak, g.halfrecoil, g.flank, g.twin]),
                TYPE: exports.swarm,
                // def
                STAT_CALCULATOR: gunCalcNames.swarm, // def
                WAIT_TO_CYCLE: false, // def
                AUTOFIRE: false, // def
                SYNCS_SKILLS: false, // def
                ALT_FIRE: false, // def
                NEGATIVE_RECOIL: false, // def
            },
        }, {

            POSITION: [6, 12, 1.2, 7, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.lessreload, g.twin]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        }, {
            POSITION: [6, 12, 1.2, 7, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.sunchip, g.twin]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        }, {
            POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
        }, {
            POSITION: [17, 13, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.twin, g.flank, g.bitlessreload, g.twin]),
                TYPE: exports.lilmissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.bitweak, g.slow, g.flank, g.twin]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [4.5, 8, 1, 10.5, 0, 0, 0, ],
        }, {
            POSITION: [1, 10, 1, 15, 0, 0, 0, ],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.bitlessreload, g.bitweak, g.flank]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        }, {
            POSITION: [3.5, 7, 1, 8, 0, 0, 0, ], //Factory
        }, {
            POSITION: [18, 7, 1, 0, 0, 180, 0, ],
        }, {
            POSITION: [2, 7, 1.1, 18, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap, g.bitweak, g.bitlessreload, g.bitweak, g.twin]),
                TYPE: exports.block,
                STAT_CALCULATOR: gunCalcNames.trap
            },
        }, {
            POSITION: [18, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [2, 7, 1.1, 18, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.slow, g.lessreload, g.twin]),
                TYPE: exports.minipillbox,
                STAT_CALCULATOR: gunCalcNames.trap
            },
        }, {
            POSITION: [4, 9, 1, 14, 0, 180, 0, ], //Boomer
        }, {
            POSITION: [5, 9, -1.5, 6, 0, 180, 0, ], //Boomer
        }, {
            //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
            //    }, {
            POSITION: [2, 7, 1.3, 16, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.flank, g.flank, g.halfreload, g.bitweak, g.twin]),
                TYPE: exports.boomerang,
                STAT_CALCULATOR: gunCalcNames.trap
            },
        },

    ],
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 10, 0, 0, 140, 0],
        TYPE: exports.bansheegun,
    }, ],
};


exports.single = {
    PARENT: [exports.genericTank],
    LABEL: 'Single',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }],

};

let smshskl = 12; //13;
exports.smash = {
    PARENT: [exports.genericTank],
    LABEL: 'Smasher',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
        SPEED: base.SPEED * 1,
    },
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [21.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.smasherBody,
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
};
exports.jumpsmash = {
    PARENT: [exports.genericTank],
    LABEL: 'Jump Smasher',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
        SPEED: base.SPEED * 0.85,
    },
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [24, 0, 0, 0, 360, 0, ],
        TYPE: exports.smasherBody2,
    }],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2, 0, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.tonsmorrecoil, g.tonsmorrecoil, g.threequartersrof, g.halfreload, g.halfreload, g.threequartersrof, g.weak]),
            TYPE: exports.bullet,
            LABEL: 'Jump', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def
            MAX_CHILDREN: 0, // def
            ALT_FIRE: false, // def
            NEGATIVE_RECOIL: false, // def
        },
    }, ],

    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
};
exports.megasmash = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega-Smasher',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 1.05,
        FOV: base.FOV * 1.1,
        DENSITY: base.DENSITY * 4,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [24, 0, 0, 0, 360, 0, ],
        TYPE: exports.megasmashBody,
    }],
};
exports.landmine = {
    PARENT: [exports.genericTank],
    LABEL: 'Landmine',

    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [21.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.smasherBody,
    }, { /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [21.5, 0, 0, 90, 360, 0, ],
        TYPE: exports.smasherBody,
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
};
exports.spike = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0, ],
        TYPE: exports.spikeBody,
    }],
};
exports.weirdspike = {
    PARENT: [exports.genericTank],
    LABEL: 'Butcher',
    DANGER: 7,
    BODY: {
        DAMAGE: base.DAMAGE,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 1.15,
        SPEED: base.SPEED * 1.35,
        HEALTH: base.HEALTH * 0.9
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody1,
    }, {
        POSITION: [20.5, 0, 0, 180, 360, 0, ],
        TYPE: exports.spikeBody2,
    }],
};
exports.autosmash = makeAuto(exports.smash, 'Auto-Smasher', {
    type: exports.autoSmasherTurret,
    size: 11,
});
exports.weird = makeAuto(exports.genericTank, '', {
    type: exports.swarmpillboxTurret,
    size: 20,
});
exports.autosmash.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, ];

exports.twin = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.heavytwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Assault',
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, -6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 15.2, 1.5, -3, 0, 0, 0, ],
    }, ],
};
exports.heavydouble = {
    PARENT: [exports.genericTank],
    LABEL: 'Mirror Assault',
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [15, 10, 1, 6, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.pound]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, -6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 15.2, 1.5, -3, 0, 0, 0, ],
    }, {
        POSITION: [15, 10, 1, 6, 6.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.pound]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, -6.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 15.2, 1.5, -3, 0, 180, 0, ],
    }, ],
};
exports.dualarty = {
    PARENT: [exports.genericTank],
    LABEL: 'Evicerator',
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 2.5, 1, 6, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 10, 1, 6, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.arty]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2.5, 1, 6, -6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, -6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.arty]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [10, 15.2, 1.5, -3, 0, 0, 0, ],
    }, ],
};
exports.heavybent = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Blast',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 10, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 10, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.heavytriple = {
    PARENT: [exports.genericTank],
    LABEL: 'Decimator',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, 6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 6, -6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [10, 15.2, 1.5, -3, 0, 0, 0, ],
    }, ],
};
exports.twinsniper = {
    PARENT: [exports.genericTank],
    LABEL: 'Snipetwin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.doubletwinsniper = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Snipetwin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.double]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 8, 1, 0, 5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.double]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, -5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.twinoblit = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Obliterator',
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 10, 1, 6, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.sniper]),
            TYPE: exports.bullet,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 10, 1, 6, -6.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 15.2, 1.5, -3, 0, 0, 0, ],
    }, ],
};
exports.twinrifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Rifle',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15.5, 19.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [18, 7, 1, 0, 4.15, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.rifle]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 7, 1, 0, -4.15, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.twin, g.rifle]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.gatling = {
    PARENT: [exports.genericTank],
    LABEL: 'Gatling',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 3, 1, 0, -8, 0, 0.666667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.twin, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3, 1, 0, 8, 0, 0.666667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.twin, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1, 0, -4.5, 0, 0.333333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [14, 5, 1, 0, 4.5, 0, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [16, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }],
};
exports.dunker = {
    PARENT: [exports.genericTank],
    LABEL: 'Dunker',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 1.4, 0, -4.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1.4, 0, 4.5, 0, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1.4, 0, 0, 0, 0.6667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }],
};
exports.tridunker = {
    PARENT: [exports.genericTank],
    LABEL: 'Clouder',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 1.4, 0, -4.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1.4, 0, 4.5, 0, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1.4, 0, 0, 0, 0.6667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1.4, 0, -4.5, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1.4, 0, 4.5, 120, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1.4, 0, 0, 120, 0.6667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1.4, 0, -4.5, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1.4, 0, 4.5, 240, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1.4, 0, 0, 240, 0.6667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.flank]),
            TYPE: exports.bullet,
        },
    }],
};
exports.gatlingdunker = {
    PARENT: [exports.genericTank],
    LABEL: 'Washer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 5, 1.4, 0, -4.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.chain]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1.4, 0, 4.5, 0, 0.3333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.chain]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 5, 1.4, 0, 0, 0, 0.6667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.fast, g.chain]),
            TYPE: exports.bullet,
        },
    }],
};
exports.gunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bentgunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Hewn Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 3.5, 1, 0, -3.75, 20, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 3.5, 1, 0, 3.75, -20, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.heavygunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Striker',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 12.75, 1.5, -3, 0, 0, 0, ],
    }, ],
};
exports.piper = {
    PARENT: [exports.genericTank],
    LABEL: 'Piper',
    DANGER: 7,
    BODY: {
        FOV: 1.15
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.sniper, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.sniper, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 3.5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.sniper, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 3.5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.sniper, g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.weirdgunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 6, -1.4, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.halfreload]),
            TYPE: exports.boomerang,
        },
    }, {
        POSITION: [12, 6, -1.4, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.halfreload]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [16, 6, -1.4, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.halfreload]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [16, 6, -1.4, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.halfreload]),
            TYPE: exports.boomerang,
        },
    }, ],
};
exports.machinegunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gunner',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 3, 4.0, -3, 5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, -3, -5, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun], g.fast),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 3, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, ]
};
exports.machinegunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gunner',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 3, 4.0, -3, 5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, -3, -5, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun], g.fast),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 3, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, ]
};
exports.gatlingunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Gatling Gunner',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 3, 4.0, -3, 5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.chain]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3, 4.0, -3, -5, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.chain]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3, 4.0, 0, 2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.chain]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3, 4.0, 0, -2.5, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.chain]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3, 4.0, 3, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.chain]),
            TYPE: exports.bullet,
        },
    }, ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Nailgun',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.pellet = {
    PARENT: [exports.genericTank],
    LABEL: 'Pelleteer',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2.5, 1, 0, -2, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2.5, 1, 0, 2, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.bentpellet = {
    PARENT: [exports.genericTank],
    LABEL: 'Hewnleteer',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 2.5, 1, 0, -1, 20, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2.5, 1, 0, 1, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2.5, 1, 0, -2, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2.5, 1, 0, 2, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.punt = {
    PARENT: [exports.genericTank],
    LABEL: 'Punt Gun',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, -2.5, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1, 0, -2.5, 0, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, 2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1, 0, 2.5, 0, 0.7, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.bentpunt = {
    PARENT: [exports.genericTank],
    LABEL: 'Cushioner',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 2, 1, 0, -2.5, 25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1, 0, -2.5, 25, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 2, 1, 0, -2.5, 25, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, 2.5, -25, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1, 0, 2.5, -25, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 2, 1, 0, 2.5, -25, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, -2.5, 0, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1, 0, -2.5, 0, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, 2.5, 0, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1, 0, 2.5, 0, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.halfreload, g.lessreload, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.barrage = {
    PARENT: [exports.genericTank],
    LABEL: 'Barrage',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1.4, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1.4, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1.4, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1.4, 0, 2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1.6, 0, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, {


        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.supersoaker = {
    PARENT: [exports.genericTank],
    LABEL: 'Super Soaker',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 2, 1.4, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1.4, 0, -2.5, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1.4, 0, -2.5, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 2, 1.4, 0, 2.5, 0, 0.45, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1.4, 0, 2.5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1.4, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 2, 1.6, 0, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1.6, 0, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1.6, 0, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1.6, 0, 0, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach, g.mach, g.twin, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {


        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.nanogun = {
    PARENT: [exports.genericTank],
    LABEL: 'Nanogun',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 0.75, 1, 0, -5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, -4.25, 0, 1 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, -3.5, 0, 1 / 4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, -2.25, 0, 3 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, 5, 0, 1 / 2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, 4.25, 0, 5 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, 3.5, 0, 3 / 4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 0.75, 1, 0, 2.25, 0, 7 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.gunner, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, {


        POSITION: [12, 11, -1.4, 2, 0, 0, 0, ],
    }, ],
};
exports.pebbler = {
    PARENT: [exports.genericTank],
    LABEL: 'Pebbler',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 1.25, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 1.25, 1, 0, -2.5, 0, 1 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 1.25, 1, 0, -2.5, 0, 2 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 1.25, 1, 0, -2.5, 0, 3 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1.25, 1, 0, 2.5, 0, 4 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 1.25, 1, 0, 2.5, 0, 5 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 1.25, 1, 0, 2.5, 0, 6 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 1.25, 1, 0, 2.5, 0, 7 / 8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.fast, g.fast, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.pellet3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Piercer',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 2.5, 1, 0, 2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.fast, g.stronger, g.lessreload, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [25, 2.5, 1, 0, -2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.fast, g.stronger, g.lessreload, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [20, 4, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.3, 6.5, 0, 0, 0, ],
    }, ],
};
exports.spiker = {
    PARENT: [exports.genericTank],
    LABEL: 'Spiker',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 1.5, 1, 0, -2, 0, 4 / 5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [19, 1.5, 1, 0, 2, 0, 3 / 5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [19, 1.5, 1, 0, 1, 0, 2 / 5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [19, 1.5, 1, 0, -1, 0, 1 / 5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [19, 1.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, {
        POSITION: [5.5, 6, 1.35, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.morereload, g.fake, g.opreload, g.halfreload]),
            TYPE: exports.trap,
        },
    }, ],
};
exports.pellet2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Danger',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.poundpellet2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Whacker',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {



        POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0, ],
    }, {
        POSITION: [15, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machpellet = {
    PARENT: [exports.genericTank],
    LABEL: 'Penetrator',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 2, 1.4, 5, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 2, 1.4, 5, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [7, 10, -1.8, 5, 0, 0, 0, ],
    }, ],
};
exports.borer = {
    PARENT: [exports.genericTank],
    LABEL: 'Borer',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.bentborer = {
    PARENT: [exports.genericTank],
    LABEL: 'Hewn Borer',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 2, 1, 0, 2.5, -20, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, -2.5, 20, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 2, 1, 0, -2.5, 0.5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.4, 6.5, 0, 0, 0, ],
    }, ],
};
exports.gunrifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Sharpshooter',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 11.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 2, 1, 0, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.rifle]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2, 1, 0, 2, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.rifle]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.puntborer = {
    PARENT: [exports.genericTank],
    LABEL: 'Punt Borer',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, -2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 2.5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, 2.5, 0, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.longborer = {
    PARENT: [exports.genericTank],
    LABEL: 'Driller',
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.275,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [25, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.swarmpellet = {
    PARENT: [exports.genericTank],
    LABEL: 'Sailor',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 4.5, -1.4, 0, 6.5, 5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [10, 4.5, -1.4, 0, -6.5, -5, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.swarmerpellet = {
    PARENT: [exports.genericTank],
    LABEL: 'Captain',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 4.5, -1.4, 0, 6.5, 5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [8, 4.5, -1.4, 0, 6.5, 5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [10, 4.5, -1.4, 0, -6.5, -5, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [8, 4.5, -1.4, 0, -6.5, -5, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};

exports.idk = {
    PARENT: [exports.genericTank],
    LABEL: 'Hecc',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 5, -1.4, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [19, 5, -1.4, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [20, 5, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [5.5, 10, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.hurricane = {
    PARENT: [exports.genericTank],
    LABEL: 'Hurricane',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 3.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 60, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 90, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 150, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 180, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 210, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 300, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 3.5, 1, 0, 0, 330, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.vulcan = {
    PARENT: [exports.genericTank],
    LABEL: 'Vulcan',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.6,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [30, 1.5, 1, 0, 0, 0, 0.7, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 14, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [5, 14, 1, 20, 0, 0, 0, ],
    }, ],
};
exports.double = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Twin',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.doubleswarm = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Swarm',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.tripletwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Twin',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 120, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 240, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.autodouble = makeAuto(exports.double, 'Auto-Double');
exports.split = {
    PARENT: [exports.genericTank],
    LABEL: 'Hewn Double',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 5.5, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.muchmorerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.muchmorerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.saberbeam = {
    LABEL: 'beam',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: -1,
    BODY: {
        PENETRATION: 1,
        SPEED: 6,
        RANGE: 200,
        DENSITY: 5,
        HEALTH: 0.2 * wepHealthFactor,
        DAMAGE: 1.7 * wepDamageFactor,
        PUSHABILITY: 0,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.saber = {
    PARENT: [exports.genericTank],
    LABEL: 'Saber',
    DANGER: 7,
    BODY: {
        FOV: 1.2,
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 7, -2, 0, 0, 0, 0, ],
    }, {
        POSITION: [17, 1, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.saber]),
            TYPE: exports.saberbeam,
        },
    }, {
        POSITION: [17, 1, 1, -1, 0, 0, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.saber]),
            TYPE: exports.saberbeam,
        },
    }, {
        POSITION: [17, 1, 1, -2, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.saber]),
            TYPE: exports.saberbeam,
        },
    }, {
        POSITION: [17, 0, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.bent = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bentsnipe = {
    PARENT: [exports.genericTank],
    LABEL: 'Seeker',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        ACCELERATION: base.ACCELERATION * 0.8
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.ktank = {
    PARENT: [exports.genericTank],
    LABEL: 'k',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 5,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 4, 1, 13, -12, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, 12, -40, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 35, 1, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.k]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.ktank2 = {
    PARENT: [exports.genericTank],
    LABEL: 'k',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 5,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 4, 1, 13, -12, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, 12, -40, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 35, 1, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.opreload, g.insanespeed]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.kkktank = {
    PARENT: [exports.genericTank],
    LABEL: 'k',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 5,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 4, 1, 13, -12, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, 12, -40, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 35, 1, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, -12, 160, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, 12, 80, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 35, 1, 10, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, -12, 280, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 4, 1, 13, 12, 200, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 35, 1, 10, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.triblaster = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Blaster',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.7,
        FOV: 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 10, 1.6, 8, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [9, 10, 1.6, 8, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 10, 1.6, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bentdouble = {
    PARENT: [exports.genericTank],
    LABEL: 'Ribbon',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -1, -25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -1, 155, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, -155, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.triplebent = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Triple Shot',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -1, -25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -1, 120 - 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, 120 + 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -1, 240 - 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, 240 + 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bent = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.penta = {
    PARENT: [exports.genericTank],
    LABEL: 'Penta Shot',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 8, 1, 0, -3, -30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, 3, 30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -2, -15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.benthybrid = makeHybrid(exports.bent, 'Bent Hybrid');

exports.triple = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Triplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 8, 1, 0, 5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machtriple = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Machriplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1.4, 0, 5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 10, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.triple2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Bent Triplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 8, 1, 0, -3, -30, 0.667, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak, g.triple]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [16, 8, 1, 0, 3, 30, 0.667, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bitweak, g.triple]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [18, 8, 1, 0, 5.5, 0, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.bitweak]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [18, 8, 1, 0, -5.5, 0, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.bitweak]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [21, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.bitweak]),
                TYPE: exports.bullet,
            },
        },

    ],
};
exports.triplesnipe = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Snipelet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.tripledouble = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Flanklet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 8, 1, 0, 5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, -5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.quint = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Quintuplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 8, 1, 0, -5.5, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, 5.5, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -3.25, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 3.25, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.dual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Dual',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.65, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.tripledual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Triple',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.triple]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.triple]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [20, 7, 1, 0, 0, 0, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower, g.triple]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8.5, 1, 0, 0, 0, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple]),
            TYPE: exports.bullet,
        },
    }, ],
};


exports.sniper = {
    PARENT: [exports.genericTank],
    LABEL: 'Sniper',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.clicker = {
    PARENT: [exports.genericTank],
    LABEL: 'Clicker',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 8.5, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.snapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Snapper',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */


        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.clicker]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [8, 8.5, -1.3, 5, 0, 0, 0, ],
    }, {
        POSITION: [5, 4, 1.5, 22, 0, 0, 0, ],
    }, {
        POSITION: [4, 8.5, 1.3, 13, 0, 0, 0, ],
    }, ],
};
exports.swarmclicker = {
    PARENT: [exports.genericTank],
    LABEL: 'Compass',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 5, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.clicker, g.bitmorereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [24, 5, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.clicker, g.bitmorereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [24, 5, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.clicker, g.bitmorereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [24, 5, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.clicker, g.bitmorereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [24, 5, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.clicker, g.bitmorereload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [24, 5, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.clicker, g.bitmorereload]),
            TYPE: exports.swarm,
        },
    }, {

        POSITION: [8, 8.5, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.miniclicker = {
    PARENT: [exports.genericTank],
    LABEL: 'Clunker',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 2.5, 1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.puregunner, g.mach, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {




        POSITION: [8, 8.5, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.multiclicker = {
    PARENT: [exports.genericTank],
    LABEL: 'Mini Clicker',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 4, 1, 0, 0, 0, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 4, 1, 0, 0, 0, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 4, 1, 0, 0, 0, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 4, 1, 0, 0, 0, 2 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 4, 1, 0, 0, 0, 2 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 4, 1, 0, 0, 0, 2 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.mini]),
            TYPE: exports.bullet,
        },
    }, {



        POSITION: [8, 8.5, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.basher = {
    PARENT: [exports.genericTank],
    LABEL: 'Basher',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 8.5, 1, 5, 0, 0, 0, ],
        }, {
            POSITION: [24, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.clicker]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [24, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.clicker]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [24, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.clicker]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [24, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.clicker]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [24, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.clicker]),
                TYPE: exports.bullet,
            },
        },

    ],
};
exports.puncher = {
    PARENT: [exports.genericTank],
    LABEL: 'Puncher',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 5.5, 1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.power, g.slow, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 5.5, 1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.power, g.slow, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 5.5, 1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.power, g.slow, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 5.5, 1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.power, g.slow, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 5.5, 1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.clicker, g.power, g.slow, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [10, 8.5, -1.4, 5, 0, 0, 0, ],
    }, ],
};
exports.clipper = {
    PARENT: [exports.genericTank],
    LABEL: 'Clipper',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        FOV: base.FOV * 1.3,
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [26, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.clicker, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [26, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.clicker, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [26, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.clicker, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [26, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.clicker, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [26, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.clicker, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 8.5, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.obliterator = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Obliterator',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.flankobliterator = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Presser',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 0, 0, ],
    }, {
        POSITION: [25, 12, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 120, 0, ],
    }, {
        POSITION: [25, 12, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 240, 0, ],
    }, ],
};
exports.wreckingball = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Wrecking Ball',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [22, 6, 2, 5, 0, 0, 0, ],
        }, {
            POSITION: [12, 13, 1, 22, 0, 0, 0.075, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.sniper, g.hunter, g.hunter2, g.fast, g.fast, g.bitmorereload]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [12, 15, 1, 20, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.sniper, g.hunter, g.fast, g.fast, g.bitmorereload]),
                TYPE: exports.bullet,
            },
        },


    ],
};
exports.destructor = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Destructor',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [28, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.hunter, g.hunter2, g.bigger, g.bigger]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [25, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.hunter, g.bigger, g.bigger]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.plow = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Plow',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 12, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.mach, g.bitmorereload, g.stronger, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 13, -1.3, 5, 0, 0, 0, ],
    }, ],
};
exports.crush = makeHybrid(exports.obliterator, 'Crusher');
exports.bulldozer = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Bulldozer',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.55,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [28, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assass, g.threequartersrof]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 0, 0, ],
    }, ],
};

exports.rifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Rifle',

    BODY: {
        FOV: 1.225
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [24, 7, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: exports.bullet,
            },
        }

    ],
};
exports.pistol = {
    PARENT: [exports.genericTank],
    LABEL: 'Pistol',

    BODY: {
        FOV: 1.225
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 10.5, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [20, 7, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.rifle, g.fast]),
                TYPE: exports.bullet,
            },
        }

    ],
};
exports.heavyrifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Carbine',

    BODY: {
        FOV: 1.225
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 14.5, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [24, 10.5, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pound]),
                TYPE: exports.bullet,
            },
        }

    ],
};
exports.blunderbuss = {
    PARENT: [exports.genericTank],
    LABEL: 'Blunderbuss',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21.5, 10.5, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [13, 4, 1, 0, -3, -9, 0.15, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.halfreload]),
                TYPE: exports.bullet,
                LABEL: 'Smoke',
            },
        }, {
            POSITION: [15, 4, 1, 0, -2.5, -6, 0.1, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.halfreload]),
                TYPE: exports.bullet,
                LABEL: 'Smoke',
            },
        }, {
            POSITION: [16, 4, 1, 0, -2, -3, 0.05, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.halfreload]),
                TYPE: exports.bullet,
                LABEL: 'Smoke',
            },
        }, {
            POSITION: [13, 4, 1, 0, 3, 9, 0.15, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.halfreload]),
                TYPE: exports.bullet,
                LABEL: 'Smoke',
            },
        }, {
            POSITION: [15, 4, 1, 0, 2.5, 6, 0.1, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.halfreload]),
                TYPE: exports.bullet,
                LABEL: 'Smoke',
            },
        }, {
            POSITION: [16, 4, 1, 0, 2, 3, 0.05, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.halfreload]),
                TYPE: exports.bullet,
                LABEL: 'Smoke',
            },
        }, {
            POSITION: [25.5, 7, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.halfreload, g.somelessreload]),
                TYPE: exports.bullet,
                LABEL: 'Rifle',
            },
        },

    ],
};
exports.assaultrifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Assault Rifle',

    BODY: {
        FOV: 1.225,
        SPEED: base.SPEED * 0.9
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 11.5, 0.95, 0, 0, 0, 0, ],
        }, {
            POSITION: [24, 7, 1.4, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.mach]),
                TYPE: exports.bullet,
            },
        }

    ],
};
exports.homingrifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Homing Rifle',

    BODY: {
        FOV: 1.225
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 10.5, 0.9, 0, 0, 0, 0, ],
        }, {
            POSITION: [24, 7, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.bitlessspeed, g.bitlessspeed]),
                TYPE: exports.homingbullet,
            },
        }

    ],
};

exports.rifle2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Sniper Rifle',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.3,
        SPEED: base.SPEED * 0.9
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 10.5, 1, 0, 0, 0, 0, ]
    }, {
        POSITION: [8, 10.5, -1.6, 5, 0, 0, 0, ],
    }, {
        POSITION: [28, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.rifle]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.marksman = makeHybrid(exports.rifle, 'Marksman');
exports.assassin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Assassin',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.35,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.assassin2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Knifer',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.35,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 2.5, -4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.fast, g.bitweak, g.bitweak, g.fast, g.fast, g.fast, g.bitmorereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.swarmassassin = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Guardsman',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.35,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [7, 8, 0.6, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morereload, g.morereload, g.stronger]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.huntsman = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Huntsman',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.35,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 4, 1, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast, g.fast]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};



exports.ranger = {
    PARENT: [exports.genericTank],
    LABEL: 'Ranger',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.4,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.ranger]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.autoass = makeAuto(exports.assassin, "Auto-Assassin");

exports.hunter = {
    PARENT: [exports.genericTank],
    LABEL: 'Hunter',
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 11, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bufferer = {
    PARENT: [exports.genericTank],
    LABEL: 'Bufferer',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.65,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 7, 1.5, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 11, 1.4, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.preda = {
    PARENT: [exports.genericTank],
    LABEL: 'Predator',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 11, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 14, 1, 0, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.ypreda = {
    PARENT: [exports.genericTank],
    LABEL: 'Y-Predator',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [28, 4, 1, 0, 0, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.xpreda = {
    PARENT: [exports.genericTank],
    LABEL: 'X Predator',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.35,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.preda, g.preda2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.preda, g.preda2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.preda, g.preda2, ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 20, 1, 0, 0, 0, 0.45, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.preda2, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.poach = makeHybrid(exports.hunter, 'Poacher');
exports.sidewind = {
    PARENT: [exports.genericTank],
    LABEL: 'Sidewinder',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 11, -0.5, 14, 0, 0, 0, ],
    }, {
        POSITION: [21, 12, -1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, g.stronger, g.fast]),
            TYPE: exports.snake,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.director = {
    PARENT: [exports.genericTank],
    LABEL: 'Director',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        FOV: base.FOV * 1.05,
    },
    MAX_CHILDREN: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.controller = {
    PARENT: [exports.genericTank],
    LABEL: 'Controller',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.9,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 5,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.director3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Cruncher',
    STAT_NAMES: statnames.drone,
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 14, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.morereload, g.morespeed]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.overseer3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Whipper',
    STAT_NAMES: statnames.drone,
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.85
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 14, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.bitmorereload]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, {
        POSITION: [6, 14, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.bitmorereload]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.director4 = {
    PARENT: [exports.genericTank],
    LABEL: 'Blender',
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 16, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.morereload, g.destroy, g.morespeed, g.morespeed]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.director2 = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        FOV: base.FOV * 1.05,
    },
    MAX_CHILDREN: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.test1]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.manager = {
    PARENT: [exports.genericTank],
    LABEL: 'Manager',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.15,
    },

    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.bitmorereload]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.commander = {
    PARENT: [exports.genericTank],
    LABEL: 'Commander',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        FOV: base.FOV * 1.15,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [16, 1, 0, 0, 0, 0],
        TYPE: exports.commanderGun
    }, {
        POSITION: [16, 1, 0, 120, 0, 0],
        TYPE: exports.commanderGun
    }, {
        POSITION: [16, 1, 0, 240, 0, 0],
        TYPE: exports.commanderGun
    }, ],
};

exports.overseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Overseer',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overseer2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Overdrive',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.stronger]),
            TYPE: exports.autodrone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.stronger]),
            TYPE: exports.autodrone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.lightning = {
    PARENT: [exports.genericTank],
    LABEL: 'Lightning',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    MAX_CHILDREN: 10,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 10, 1.2, 8, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.bitweak, g.insanespeed, g.slow]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 10, 1.2, 8, 0, -45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.bitweak, g.insanespeed, g.slow]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overlord = {
    PARENT: [exports.genericTank],
    LABEL: 'Overlord',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overtrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Overtrapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.banshee = {
    PARENT: [exports.genericTank],
    LABEL: 'Banshee',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 120, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 240, 80, 0],
        TYPE: exports.bansheegun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.stronger]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.stronger]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 300, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.stronger]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, ]
};
exports.autoover = makeAuto(exports.overseer, 'Auto-Seer');
exports.overgunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Overgunner',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, ],
};

function makeSwarmSpawner(guntype) {
    return {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['nearestDifferentMaster'],
        COLOR: 16,
        AI: {
            NO_LEAD: true,
            view360: true,
        },
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 15, 0.6, 8, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.auto, g.lessreload]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }],
    };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
    PARENT: [exports.genericTank],
    LABEL: 'Cruiser',
    DANGER: 6,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.machcruiser = {
    PARENT: [exports.genericTank],
    LABEL: 'Zipper',
    DANGER: 7,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.mach, g.bitmorereload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [2, 4, 1.2, 14, 4, 0, 0, ],
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.mach, g.bitmorereload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [2, 4, 1.2, 14, -4, 0, 0, ],
    }, ],
};
exports.submarine = {
    PARENT: [exports.genericTank],
    LABEL: 'Submarine',
    DANGER: 7,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, -10, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 10, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.fatcruiser = {
    PARENT: [exports.genericTank],
    LABEL: 'Frigate',
    DANGER: 6,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 12, 0.6, 5, 4, 25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.fast, g.morereload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [9, 12, 0.6, 5, -4, -25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.fast, g.morereload]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};

exports.battleship = {
    PARENT: [exports.genericTank],
    LABEL: 'Battleship',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCELERATION,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bitweak]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bitweak]),
            TYPE: [exports.swarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 120, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 240, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous'
        },
    }, ],
};
exports.warship = {
    PARENT: [exports.genericTank],
    LABEL: 'Warship',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,

        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: [exports.swarm],
            STAT_CALCULATOR: gunCalcNames.swarm,

        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: [exports.swarm],
            STAT_CALCULATOR: gunCalcNames.swarm,

        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,

        },
    }, ],
};
exports.carrier = {
    PARENT: [exports.genericTank],
    LABEL: 'Carrier',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, -2, -30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 2, 30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};
exports.autocruiser = makeAuto(exports.cruiser, "Auto-Cruiser");
exports.fortress = {
    PARENT: [exports.genericTank],
    LABEL: 'Fortress',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 60, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 300, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.underseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Underseer',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, ],
};
exports.undertrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Undertrapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.bitmorereload]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            MAX_CHILDREN: 11,
        },
    }, {

        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.eggseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Eggseer',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 0,
    MAX_CHILDREN: 22,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.eggchip]),
            TYPE: exports.eggchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.eggchip]),
            TYPE: exports.eggchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, ],
};
exports.eggseercocaine = {
    PARENT: [exports.genericTank],
    LABEL: 'Eggseer on cocaine',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 0,
    MAX_CHILDREN: 666,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 10, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.eggchip, g.opreload, g.opreload]),
            TYPE: exports.eggchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.eggchip, g.opreload, g.opreload]),
            TYPE: exports.eggchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, ],
};
exports.undergunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Undergunner',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 12,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 12, 1.2, 8, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.morereload]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        }, {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,

            },
        }, {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,

            },
        }, {
            POSITION: [12, 11, 1, 0, 0, 0, 0, ],
        },

    ],
};
exports.necromancer = {
    PARENT: [exports.genericTank],
    LABEL: 'Necromancer',
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    FACING_TYPE: 'autospin',
    MAX_CHILDREN: 20,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.autosunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.autosunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, ],
};

exports.lilfact = {
    PARENT: [exports.genericTank],
    LABEL: 'Spawner',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }],
};
exports.warpdrive = {
    PARENT: [exports.genericTank],
    LABEL: 'Warp Drive',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.autominion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }],
};
exports.dronefact = {
    PARENT: [exports.genericTank],
    LABEL: 'Wizard',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 14, 1.6, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 3,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.droneminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }, ],
};
exports.snipefact = {
    PARENT: [exports.genericTank],
    LABEL: 'Sniper Spawner',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 10, 1, 12, 0, 0, 0, ],
    }, {
        POSITION: [4, 12, 1, 17, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.sniperminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }],
};

exports.machfact = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Spawner',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1.4, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.4, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.machminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1.4, 8, 0, 0, 0, ],
    }],
};
exports.twinfact = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Spawner',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 3,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.twinminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }, {
        POSITION: [20, 1, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.trapfact = {
    PARENT: [exports.genericTank],
    LABEL: 'Trappory',
    DANGER: 7,
    SHAPE: -4,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCELERATION * 0.5,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
        }, {
            POSITION: [1, 12, 1, 15, 0, 0, 0, ],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.trapminion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        }, {
            POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
        },

    ],
};
exports.factory = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.factorycocaine = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory on cocaine',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 6969,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.opreload, g.opreload, g.opreload, g.opreload, g.norecoil]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,

            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.factory2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Speedster',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 3,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 3,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.bitlessreload]),
            TYPE: exports.triminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
    }, ],


};

exports.machine = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gun',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.blaster = {
    PARENT: [exports.genericTank],
    LABEL: 'Blaster',
    BODY: {
        FOV: base.FOV * 0.9,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 10, 1.6, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.splasher = {
    PARENT: [exports.genericTank],
    LABEL: 'Splasher',
    BODY: {
        FOV: base.FOV * 0.9,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil, g.bitlessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [9, 10, 1.6, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.flamethrower = {
    PARENT: [exports.genericTank],
    LABEL: 'Flamethrower',
    BODY: {
        FOV: base.FOV,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 10, 1.6, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.flame]),
            TYPE: exports.flame,
        },
    }, ],
};
exports.grinder = {
    PARENT: [exports.genericTank],
    LABEL: 'Grinder',
    BODY: {
        FOV: base.FOV * 0.85,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 10, 1.8, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.blaster, g.morereload]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.maxim = {
    PARENT: [exports.genericTank],
    LABEL: 'Maxim Gun',
    BODY: {
        FOV: base.FOV * 1.15,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.longmaxim = {
    PARENT: [exports.genericTank],
    LABEL: 'Rusher',
    BODY: {
        FOV: base.FOV * 1.25,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.chain]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.gatlingaccel = {
    PARENT: [exports.genericTank],
    LABEL: 'Accelerator',
    BODY: {
        FOV: base.FOV * 1.3,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [25, 2, -1.4, 0, 0, 0, 0, ],
    }, {
        POSITION: [15, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.halfspeed, g.lessreload, g.halfspeed]),
            TYPE: exports.bulletaccel,
        },
    }, ],
};


exports.gatlingspray = {
    PARENT: [exports.genericTank],
    LABEL: 'Searcher',
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 7, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.halfnhalf = {
    PARENT: [exports.genericTank],
    LABEL: 'Half N` Half',
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 10, 1.6, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.spray = {
    PARENT: [exports.genericTank],
    LABEL: 'Sprayer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil, g.bitlessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.bitlessreload]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.mini = {
    PARENT: [exports.genericTank],
    LABEL: 'Minigun',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.miniswarm = {
    PARENT: [exports.genericTank],
    LABEL: 'Miniswarm',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 9.5, 0.6, 12, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.mini, g.bitmorereload, g.battle, g.fast]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [10, 9.5, 0.6, 10, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.mini, g.bitmorereload, g.battle, g.fast]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [10, 9.5, 0.6, 8, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.mini, g.bitmorereload, g.battle, g.fast]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.mini2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Mini Gunner',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.25,
        SPEED: base.SPEED * 0.7,
        ACCELERATION: base.ACCELERATION * 0.5
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 6, 1, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 6, 1, 0, 5, 0, 1 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 6, 1, 0, 5, 0, 2 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 6, 1, 0, -5, 0, 3 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 6, 1, 0, -5, 0, 4 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 6, 1, 0, -5, 0, 5 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 6, 1, 0, 0, 0, 6 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 6, 1, 0, 0, 0, 7 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 6, 1, 0, 0, 0, 8 / 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.halfrecoil, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [10, 6, -1.2, 3, 5, 0, 0, ],
    }, {
        POSITION: [10, 6, -1.2, 3, -5, 0, 0, ],
    }, {
        POSITION: [10, 6, -1.2, 5, 0, 0, 0, ],
    }, ],
};
exports.minipellet = {
    PARENT: [exports.genericTank],
    LABEL: 'Pelter',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.flooder = {
    PARENT: [exports.genericTank],
    LABEL: 'Flooder',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 8, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1.4, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 8, 1.4, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.laser = {
    PARENT: [exports.genericTank],
    LABEL: 'Laser',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
            TYPE: exports.line,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
            TYPE: exports.line,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
            TYPE: exports.line,
        },
    }, {
        POSITION: [25, 1, 0, 0, 0, 0, 0, ],
    }, ],
};
exports.silo = {
    PARENT: [exports.genericTank],
    LABEL: 'Silo',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.35,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.basichybrid = makeHybrid(exports.basic, 'Basic Hybrid');
exports.autobasichybrid = makeAuto(exports.basichybrid, 'Auto-Basic-Hybrid');
exports.hotshot = {
    PARENT: [exports.genericTank],
    LABEL: 'Hot Shot',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 12, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.stream = {
    PARENT: [exports.genericTank],
    LABEL: 'Streamliner',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 8, 1, 0, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hybridmini = makeHybrid(exports.mini, "Crop Duster");
exports.minitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Barricade',
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.3, 22, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.doublereload, g.morereload, g.stronger]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 8, 1.3, 18, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.doublereload, g.morereload, g.stronger]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 8, 1.3, 14, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.doublereload, g.morereload, g.stronger]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.pound = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
    },
    LABEL: 'Pounder',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hammerer = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
    },
    LABEL: 'Hammerer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mach, g.halfrecoil]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flankhammerer = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
    },
    LABEL: 'Tri-Hammerer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mach, g.halfrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 12, 1.4, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mach, g.halfrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 12, 1.4, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mach, g.halfrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hammerer2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {

        ACCELERATION: base.ACCELERATION * 0.6,
    },
    LABEL: 'Howitzer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [21, 12, 1.3, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mach, g.halfrecoil, g.arty]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.destroy = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
    },
    LABEL: 'Destroyer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.buster = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
    },
    LABEL: 'Buster',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.bitweak, g.bitweak, g.bitlessreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitweak, g.bitweak, g.bitlessreload]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.homingdestroy = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
    },
    LABEL: 'Directed Destroyer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 2, 0.5, 5, 0, 0, 0, ],
        }, {
            POSITION: [21, 14, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.halfreload, g.bitweak, g.bitmorerange]),
                TYPE: exports.homingbullet,
            },
        },

    ],
};
exports.anni = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
    },
    LABEL: 'Annihilator',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hiveshooter = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.75,
        SPEED: base.SPEED * 0.8,
    },
    LABEL: 'Swarmer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 14, -1.2, 5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hiveshooter]),
            TYPE: exports.hive,
        },
    }, {
        POSITION: [15, 12, 1, 5, 0, 0, 0, ],
    }],
};
exports.hybrid = makeHybrid(exports.destroy, 'Hybrid');
exports.multishot = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Multi-Shot',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 12, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.turretthing = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Turret',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {

        POSITION: [11, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.turret]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.exploder = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Exploder',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 4, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [4, 3, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [20, 20, 1, -10, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.explode, g.fake]),
                TYPE: exports.bullet,
            },
        },



    ],
};
exports.manyshot = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Birdshot',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 1.5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 2, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {


        POSITION: [15, 10, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.gunner, g.fast, g.fake]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 10, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.trapshot = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Trap Blast',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [15, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.fake]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 12, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.shotgun, g.morereload, g.fake]),
            TYPE: exports.trap,
        },
    }, {

        POSITION: [8, 12, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.bigshot = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Big Shot',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.5,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 5, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 6, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 5, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 6, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 5, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 5, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 15, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.pound]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 15, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.wrecker = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Wrecker',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 10.5, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.fast, g.bitweak]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
        },
    }, {
        POSITION: [15, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 12, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.longshot = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Buckshot',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.sniper]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [2, 14, 1, 24, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.sniper]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 12, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.machshot = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Overpowerer',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 12, 1.25, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.mach]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 13, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.machshot2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Showerer',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak, g.mach, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak, g.mach, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak, g.mach, g.mach]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak, g.mach, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak, g.mach, g.mach]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.bitweak, g.mach, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 12, 1.6, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.mach, g.mach, g.mach]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14.5, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.shotgun2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Shotgun',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.trapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Trapper',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.95,
        ACCELERATON: base.ACCELERATION * 0.9
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.bigger]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.cruisertrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Swamper',
    DANGER: 7,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.bigger]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.machtrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Trapper',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.95,
        ACCELERATON: base.ACCELERATION * 0.9
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1.6, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 11, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.blastrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Blazer',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.95,
        ACCELERATON: base.ACCELERATION * 0.9
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 6, 1.8, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 12, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach, g.blaster]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.chaintrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Infector',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.95,
        ACCELERATON: base.ACCELERATION * 0.9
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1.6, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 11, 1.7, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach, g.chain]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.trimachtrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Stronghold',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.8,
        ACCELERATON: base.ACCELERATION * 0.75
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1.6, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 11, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1.6, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 11, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1.6, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 11, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.machbuilder = {
    PARENT: [exports.genericTank],
    LABEL: 'Planter',
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1.4, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 13, 1.8, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.block]),
            TYPE: exports.block,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.megatrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Trapper',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 13, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 13, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morereload, g.pound, g.bigger, g.bigger, g.fast, g.bitmorerange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.machmegatrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Logger',
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.85,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 11, 1.4, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 13, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitmorereload, g.mach, g.pound, g.bigger]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.gigatrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Giga Trapper',
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.8,
        ACCELERATON: base.ACCELERATION * 0.75
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 16, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 16, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morereload, g.bitmorereload, g.pound, g.destroy, g.bigger, g.bigger, g.fast, g.stronger, g.morerange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.trapper2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Arsenal',
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [5, 13, 1, 5, 0, 0, 0, ],
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.stronger, g.slow, g.threequartersrof, g.slow]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.machtrapper2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Sieger',
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1.4, 0, 0, 0, 0, ],
    }, {
        POSITION: [5, 13, 1.4, 5, 0, 0, 0, ],
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.stronger, g.slow, g.threequartersrof, g.slow, g.mach]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.megatrapper2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Holder',
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 13, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [5, 16, 1, 5, 0, 0, 0, ],
    }, {
        POSITION: [3, 13, 1.5, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.stronger, g.slow, g.threequartersrof, g.pound, g.bigger, g.stronger, g.bitmorereload, g.slow, g.bitmorerange]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.trappercocaine = {
    PARENT: [exports.genericTank],
    LABEL: 'Trapper on cocaine',
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.opreload, g.opreload, g.opreload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.tritrapper = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Trapper',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.triarsenal = {
    PARENT: [exports.genericTank],
    LABEL: 'Castle',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.7,
        ACCELERATION: base.ACCELERATION * 0.55,
        FOV: base.FOV * 1.15
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [5, 13, 1, 5, 0, 0, 0, ],
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.threequartersrof, g.slow]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [5, 13, 1, 5, 0, 120, 0, ],
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.threequartersrof, g.slow]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [5, 13, 1, 5, 0, 240, 0, ],
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.threequartersrof, g.slow]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.tritrapper2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Contagion',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.85,
        ACCELERATON: base.ACCELERATION * 0.75
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 6, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 6, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.contagion = {
    PARENT: [exports.genericTank],
    LABEL: 'Contagion',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitweak, g.flank]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.stormer = {
    PARENT: [exports.genericTank],
    LABEL: 'Stormer',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.slow]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.diver = {
    PARENT: [exports.genericTank],
    LABEL: 'Diver',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.buildcontagion = {
    PARENT: [exports.genericTank],
    LABEL: 'Fort',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.85,
        ACCELERATON: base.ACCELERATION * 0.8
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
exports.dronecontagion = {
    PARENT: [exports.genericTank],
    LABEL: 'Magician',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.7
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitweak, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.bitweak]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            MAX_CHILDREN: 4,
        },
    }, {

        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.longcontagion = {
    PARENT: [exports.genericTank],
    LABEL: 'Virus',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.9,
        ACCELERATON: base.ACCELERATION * 0.7
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.bitweak]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}
exports.machcontagion = {
    PARENT: [exports.genericTank],
    LABEL: 'Thrower',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
        SPEED: base.SPEED * 0.85,
        ACCELERATON: base.ACCELERATION * 0.7
    },
    STAT_NAMES: statnames.generic,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.bitweak, g.mach]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}

exports.builder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Builder',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
//I still see you.
exports.engineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Engineer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 6,
            DESTROY_OLDEST_CHILD: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
            TYPE: exports.pillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.swarmengineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Harbor',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1.1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 0.8, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 0.8, 18, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 6,
            DESTROY_OLDEST_CHILD: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
            TYPE: exports.swarmpillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 0.8, 8, 0, 0, 0, ]
    }],
};
exports.machinist = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Machinist',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 11, 1, 10.5, 0, 0, 0, ],
    }, {

        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.circle]),
            TYPE: exports.trapcircle,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 2,
            DESTROY_OLDEST_CHILD: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.mechanic = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Mechanic',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {

            MAX_CHILDREN: 7,
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
            TYPE: exports.dualpillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.design = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Designer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {


            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
            TYPE: exports.tripillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.construct = {
    PARENT: [exports.genericTank],
    LABEL: 'Constructor',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: exports.block,
        },
    }, ],
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Conqueror',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
exports.bentboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Juggler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 10, 1, 8, -2, -35, 0, ],
    }, {
        POSITION: [8, 10, 1, 8, 2, 35, 0, ],
    }, {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
        POSITION: [2, 10, 1.3, 16, 2, 35, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, ],
};
exports.boomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Boomer',
    STAT_NAMES: statnames.trap,
    FACING_TYPE: 'locksFacing',
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //}, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang,
        },
    }, ],
};
exports.quadtrapper = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Waller',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 45, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 135, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 225, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 225, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 315, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 315, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
            TYPE: exports.block,
        },
    }, ],
};

exports.artillery = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Artillery',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.tower = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Jet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.bitweak]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.bitweak]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.bitweak]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.fieldgun = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Field Gun',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, -0.5, 7, 0, 0, 0, ],
    }, {
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak]),
            TYPE: exports.lilmissile,
            LABEL: 'Skimmer',
        },
    }, ],
};
exports.aagun = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'AA Gun',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [23, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.artillery3 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Mortar',
    GUNS: [{ /**LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, {
        POSITION: [17, 6, 1.4, 0, 0, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.mach, g.morereload]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, ],
};
exports.cannoneer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Cannoneer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.sheller = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Sheller',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -7.5, -5, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 7.5, 5, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.artillery2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Swarmsman',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 6, -1.4, 0, -6, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            LABEL: '',
        },
    }, {
        POSITION: [17, 6, -1.4, 0, 6, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            LABEL: '',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.bitmorereload]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.battery = {
    PARENT: [exports.genericTank],
    LABEL: 'Battery',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 3, 1, 0, -8, -7, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [13, 3, 1, 0, 8, 7, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, -6, -7, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.skimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.missile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.scythe = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Scythe',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1.3, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.missile2,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.hyperskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.5,
    },
    LABEL: 'Skimmer on cocaine',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.insanespeed, g.insanespeed, g.opreload, g.insanespeed, g.insanespeed]),
            TYPE: exports.missile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.spinner = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Twister',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 13, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 14, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitmorerange, g.fast, g.fast, g.fast, g.bitweak]),
            TYPE: exports.spinmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.lilskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Launcher',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak]),
            TYPE: exports.lilmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.miniskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.2,
    },
    LABEL: 'Seeper',
    DANGER: 7,
    // Made by Moouse
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, -0.5, 13, 0, 0, 0, ],
    }, {
        POSITION: [21, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.mini, g.fast]),
            TYPE: exports.lilmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, {
        POSITION: [18, 13, 1, 0, 0, 0, 0.33, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.mini, g.fast]),
            TYPE: exports.lilmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, {
        POSITION: [15, 13, 1, 0, 0, 0, 0.66, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.mini, g.fast]),
            TYPE: exports.lilmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
    //Made by Moouse
};
exports.rewind = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Rewinder',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
            TYPE: exports.lilmissile2,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.trebu = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Trebuchet',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 6, -1.4, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 14, -1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
            TYPE: exports.multimissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.multiskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Focuser',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [10, 12, -0.5, 6, 0, 40, 0, ],
    }, {
        POSITION: [14, 13, 1, 0, 0, 40, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.halfreload]),
            TYPE: exports.curveR,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, {
        POSITION: [10, 12, -0.5, 6, 0, -40, 0, ],
    }, {
        POSITION: [14, 13, 1, 0, 0, -40, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.halfreload]),
            TYPE: exports.curveL,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, {
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.halfreload]),
            TYPE: exports.lilmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.torpedoer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.1,

    },
    LABEL: 'Torpedoer',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 10, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [15, 10, -1.6, 0, 0, 180, 0, ],
    }, {
        POSITION: [17, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.mach, g.morereload, g.bitlessreload, g.bitweak, g.fast, g.fast, g.fast, g.fast]),
            TYPE: exports.torpedo,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.trapskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    LABEL: 'Pather',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 0, 0, ],
    }, {
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.fast, g.lessreload, g.fast]),
            TYPE: exports.trapmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.blockskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    LABEL: 'Crane',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 13, -1.5, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 0, 0, ],
    }, {
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [2, 13, 1.2, 17, 0, 0, 0, ],
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bitweak, g.fast, g.lessreload, g.fast]),
            TYPE: exports.blockmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.fatskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.05,
        ACCELERATION: base.ACCELERATION * 0.8
    },
    LABEL: 'Bumper',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 17, -0.5, 9, 0, 0, 0, ],
    }, {

        POSITION: [16, 18, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty, g.arty, g.skim, g.threequartersrof]),
            TYPE: exports.fatmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.harrower = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.05,
        SPEED: base.SPEED * 0.9,
    },
    LABEL: 'Harrower',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload, g.threequartersrof, g.stronger, g.stronger]),
            TYPE: exports.hypermissile2,
        },
    }, {
        POSITION: [15, 10, -1, 9, 0, 0, 0, ],
    }, ],
};
exports.rocketeer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.3,
        SPEED: base.SPEED * 0.85,
        ACCELERATION: base.ACCELERATION * 0.75,
    },
    LABEL: 'Rocketeer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 7, 1.7, 17, 0, 0, 0, ],
    }, {
        POSITION: [18, 13, 0.8, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.rocket]),
            TYPE: exports.rocket2,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.spread = {
    PARENT: [exports.genericTank],
    LABEL: 'Spreadshot',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 10, 1, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
        },
    }, ],
};

exports.flank = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Guard',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flanksnipe = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Sniper',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flankmach = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Machine',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flankgunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Gun',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 120, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 240, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 240, 0, ],
    }, ],
};
exports.flankpound = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Pounder',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flankdestroy = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Destroyer',
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 14, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 14, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexa = {
    PARENT: [exports.genericTank],
    LABEL: 'Hexa Tank',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexasnipe = {
    PARENT: [exports.genericTank],
    LABEL: 'Whirlwind',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexamachine = {
    PARENT: [exports.genericTank],
    LABEL: 'Cyclone',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1.4, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.deathstar = {
    PARENT: [exports.genericTank],
    LABEL: 'Death Star',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.octo = {
    PARENT: [exports.genericTank],
    LABEL: 'Octo Tank',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 45, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 135, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 225, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 315, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.manytrap = (() => {
    let a = 360 / 13,
        d = 1 / 13;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Typhoon',
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [15, 4, 1, 0, 0, 0, 0, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 0, 0, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, a, 0, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, a, 5 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 2 * a, d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 2 * a, d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 3 * a, 9 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 3 * a, 9 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 4 * a, 2 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 4 * a, 2 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 5 * a, 12 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 5 * a, 12 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 6 * a, 7 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 6 * a, 7 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 7 * a, 3 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 7 * a, 3 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 8 * a, 6 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 8 * a, 6 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 9 * a, 8 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 9 * a, 8 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 10 * a, 13 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 10 * a, 13 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 11 * a, 4 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 11 * a, 4 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            }, {
                POSITION: [15, 4, 1, 0, 0, 12 * a, 10 * d, ],
            }, {
                POSITION: [3, 4, 1.5, 15, 0, 12 * a, 10 * d, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.twin, g.twin]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },

        ],
    };
})();
exports.heptatrap = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Hepta-Trapper',
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, a, 4 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, a, 4 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.bitmorereload]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, ],
    };
})();
exports.hexatrap = makeAuto({
    PARENT: [exports.genericTank],
    LABEL: 'Hexa-Trapper',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    SHAPE: 6,
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}, 'Hexa-Trapper');

exports.tri = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Angle',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.trigun = {
    PARENT: [exports.genericTank],
    LABEL: 'Infuser',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.tri2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Angle Page 2',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};

exports.rocket = {
    PARENT: [exports.genericTank],
    LABEL: 'Rocket',

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [10, 10, 1.4, 8, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.mach, g.norecoil]),
                TYPE: exports.bullet,
                LABEL: 'Machine Thruster',
                LABEL: gunCalcNames.thruster,
            },
        }, {
            POSITION: [0, 0, 1, 0, 0, 180, 0.1, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrange, g.halfrange, g.halfrange]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        }, {
            POSITION: [0, 0, 1, 0, 0, 180, 0.1, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrange, g.halfrange, g.halfrange]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },

    ],
};
exports.rocketinsane = {
    PARENT: [exports.genericTank],
    LABEL: 'REEE SUPER SANIC',
    BODY: {
        SPEED: base.SPEED * 2
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [10, 10, 1.4, 8, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.mach, g.norecoil]),
                TYPE: exports.bullet,
                LABEL: 'Machine Thruster',
                LABEL: gunCalcNames.thruster,
            },
        }, {
            POSITION: [0, 0, 1, 0, 0, 180, 0.1, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrange, g.halfrange, g.halfrange, g.tonsmorrecoil]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        }, {
            POSITION: [0, 0, 1, 0, 0, 180, 0.1, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrange, g.halfrange, g.halfrange, g.tonsmorrecoil]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },

    ],
};
exports.missilet = {
    PARENT: [exports.genericTank],
    LABEL: 'Lurcher',

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1, 0, 0, 140, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.gunner, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 5, 1, 0, 0, 220, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.gunner, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [10, 14, 1, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Rear Thruster',
        },
    }, ],
};


exports.poundangle = {
    PARENT: [exports.genericTank],
    LABEL: 'Slammer',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, .6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil, g.pound]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 12, 1, 0, -2, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.pound]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 12, 1, 0, 2, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.pound]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.booster = {
    PARENT: [exports.genericTank],
    LABEL: 'Booster',
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.5,
        DENSITY: base.DENSITY * 0.2,
    },
    DANGER: 7,

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18.000001, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.fighter = {
    PARENT: [exports.genericTank],
    LABEL: 'Fighter',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, -1, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Side',
        },
    }, {
        POSITION: [16, 8, 1, 0, 1, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Side',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.brutalizer = {
    PARENT: [exports.genericTank],
    LABEL: 'Surfer',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -1, 90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 1, -90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.bomber = {
    PARENT: [exports.genericTank],
    LABEL: 'Bomber',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [15, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: 'Wing',
        },
    }, {
        POSITION: [15, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: 'Wing',
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil, ]),
            TYPE: exports.minipillbox,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
    SPEED: base.SPEED,
};
exports.falcon = {
    PARENT: [exports.genericTank],
    LABEL: 'Falcon',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
            TYPE: exports.bullet,
            LABEL: 'Assassin',
            ALT_FIRE: true,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.ostrich = {
    PARENT: [exports.genericTank],
    LABEL: 'Ostrich',
    DANGER: 6,

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.seagull = {
    PARENT: [exports.genericTank],
    LABEL: 'Seagull',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.bitweak]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.bitweak]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.twinostrich = {
    PARENT: [exports.genericTank],
    LABEL: 'Turkey',
    DANGER: 6,

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.twin, g.bitweak, g.twin, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 7, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.twin, g.bitweak, g.twin, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.penguin = {
    PARENT: [exports.genericTank],
    LABEL: 'Penguin',
    DANGER: 7,
    BODY: {
        HEALTH: base.HEALTH * 0.7,
        DAMAGE: base.DAMAGE * 0.5,
        SPEED: base.SPEED * 0.9
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.twin, g.bitweak, g.twin, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 8, 1, 0, -1, 150, 0.66666, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, -1, 165, 0.33333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 1, 210, 0.666666, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 1, 195, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.hawk = {
    PARENT: [exports.genericTank],
    LABEL: 'Hawk',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        ACCELERATION: base.ACCELERATION * 0.8,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper]),
            TYPE: exports.bullet,
            ALT_FIRE: true,
        },
    }, {
        POSITION: [8, 12, -1.3, 5, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.eagle = {
    PARENT: [exports.genericTank],
    LABEL: 'Eagle',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCELERATION,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
            ALT_FIRE: true,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};

exports.auto3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-3',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun,
    }, ],
};
exports.multitank = {
    PARENT: [exports.genericTank],
    LABEL: 'Multitank',
    BODY: {
        FOV: 1.1,
        SPEED: base.SPEED * 0.9,
        ACCELERATION: base.ACCELERATION * 0.75
    },
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.droneGun,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.sniper3gun,
    }, ],
};
exports.fidgetspinner = {
    PARENT: [exports.genericTank],
    LABEL: 'Fidget Spinner',
    DANGER: 6,
    FACING_TYPE: 'fastspin',

    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 12, 0, 0, 190, 0],
        TYPE: exports.genericTank,
    }, {
        POSITION: [11, 12, 0, 120, 190, 0],
        TYPE: exports.genericTank,
    }, {
        POSITION: [11, 12, 0, 240, 190, 0],
        TYPE: exports.genericTank,
    }, ],
};


exports.cruiser3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Swarm-3',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.cruiserGun,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.cruiserGun,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.cruiserGun,
    }, ],
};
exports.mach3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine-3',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.machineAutoTurret3,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.machineAutoTurret3,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.machineAutoTurret3,
    }, ],
};
exports.skim3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-3',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.skimturret,
    }, ],
};
exports.protectorhell = {
    PARENT: [exports.genericTank],
    LABEL: 'Protector-3',
    DANGER: 6,
    BODY: {
        SIZE: 20,
        FOV: 2.5,
        HEALTH: 100000,
        REGEN: 1000

    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.baseGunTurret,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.baseGunTurret
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.baseGunTurret,
    }, ],
};
exports.auto5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5gun
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5gun
    }, ],
};

exports.toolset = {
    PARENT: [exports.genericTank],
    LABEL: 'Soviet Toolbox',
    DANGER: 7,
    SHAPE: 5,
    FACING_TYPE: 'autospin',
    BODY: {
        SPEED: base.SPEED * 0.7,
        HEALTH: base.HEALTH * 0.5,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.heptatrap,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.cruiser,
    }, {
        POSITION: [11, 8, 0, -72, 190, 0],
        TYPE: exports.factory,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.assassin,
    }, {
        POSITION: [11, 8, 0, -144, 190, 0],
        TYPE: exports.twin,
    }, ],
};
exports.heavy3 = {
    BODY: {
        SPEED: base.SPEED * 0.95,
    },
    PARENT: [exports.genericTank],
    LABEL: 'Mega-3',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 8, 0, 0, 190, 0],
        TYPE: exports.heavy3gun,
    }, {
        POSITION: [14, 8, 0, 120, 190, 0],
        TYPE: exports.heavy3gun,
    }, {
        POSITION: [14, 8, 0, 240, 190, 0],
        TYPE: exports.heavy3gun,
    }, ],
};
exports.tritrap = {
    LABEL: 'Architect',
    BODY: {
        SPEED: base.SPEED * 1.1,
        FOV: base.FOV * 1.15,
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.tritrapgun,
    }, ],
};
exports.sniper3 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Sniper-3',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 170, 0],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [13, 8, 0, 120, 170, 0],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [13, 8, 0, 240, 170, 0],
        TYPE: exports.sniper3gun,
    }, ],
};
exports.auto4 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Auto-4',
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4gun,
    }, ],
};


exports.flanktrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Trap Guard',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.poundtrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Pound Guard',
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.rifletrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Infantryman',
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: base.FOV * 1.225
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.bulwark = {
    PARENT: [exports.genericTank],
    LABEL: 'Bulwark',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.twin, g.morereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 5.5, 190, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 5.5, 190, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, -5.5, 170, 0.5, ],
    }, {
        POSITION: [4, 8, 1.7, 13, -5.5, 170, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.guntrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner Trapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [13, 11, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.testgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Raptor',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 2, 1, 0, -4, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [17, 2, 1, 0, 4, 0, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil]),
                TYPE: exports.bullet,
            },
        }, {
            POSITION: [12, 12, 1, 0, 0, 0, 0, ],
        },

    ],
};
exports.bushwhack = {
    PARENT: [exports.genericTank],
    LABEL: 'Bushwhacker',
    BODY: {
        ACCELERATION: base.ACCELERATION * 0.7,
        FOV: base.FOV * 1.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.arenaCloser = {
    PARENT: [exports.genericTank],
    LABEL: 'Arena Closer',
    VALUE: 10000000,
    DANGER: 20,
    SIZE: 80,
    SKILL: skillSet({
        dam: 1,
        pen: 1,
        str: 1,
    }),
    BODY: { // def
        SHIELD: 1000000,
        REGEN: 100000,
        HEALTH: 1000000,
        DAMAGE: 50,
        DENSITY: 30,
        FOV: 10,
        SPEED: 8,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, g.moreop]),
            TYPE: exports.bullet,
        },
    }, ],


    BROADCAST_MESSAGE: 'somethin happened lol',
};

exports.developer = {
    PARENT: [exports.genericTank],
    LABEL: 'Developer',
    DANGER: 12,
    LEVEL: -1,
    RESET_UPGRADES: true,


    BODY: { // def
        SHIELD: 100000,
        REGEN: 10000,
        HEALTH: 100000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 4,
        SPEED: 20,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, g.opreload]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};

exports.wiper = {
    PARENT: [exports.genericTank],
    LABEL: 'Arena Wiper',
    DANGER: 696969,


    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        SHIELD: 100000,
        REGEN: 10000,
        HEALTH: 100000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 4,
        SPEED: 20,
    },

    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, g.opreload, g.moreop, g.moreop, g.moreop2]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};

exports.god = {
    PARENT: [exports.genericTank],
    LABEL: 'THE TRUE GOD',


    DANGER: 69,
    RESET_UPGRADES: true,
    BODY: { // def
        SHIELD: 100000,
        REGEN: 100000,
        HEALTH: 100000,
        DAMAGE: 0,
        DENSITY: 1,
        FOV: 6,
        SPEED: 20,
    },
    AI: {
        skynet: true
    },
    MAX_CHILDREN: 69,
    STAT_NAMES: statnames.drone,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.moreop, g.opreload, g.morespeed, g.opreload, g.insanespeed]),
            TYPE: exports.opautodrone,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }],
    ACCEPTS_SCORE: false,
    HITS_OWN_TYPE: 'never',
    INTANGIBLE: true,
    CAN_BE_ON_LEADERBOARD: false,
    CAN_GO_OUTSIDE_ROOM: true,
};
exports.odd = makeAuto(exports.overlord, 'y am i doing this', {
    type: exports.hotshot,
    size: 11,
});

exports.spectator = {
    PARENT: [exports.genericTank],
    LABEL: 'Spectator',


    DANGER: 0,
    RESET_UPGRADES: true,
    BODY: { // def
        SHIELD: 100000,
        REGEN: 100000,
        HEALTH: 100000,
        DAMAGE: 0,
        DENSITY: 1,
        FOV: 6,
        SPEED: 20,
        SIZE: 0.01
    },
    ACCEPTS_SCORE: false,
    HITS_OWN_TYPE: 'never',
    INTANGIBLE: true,
    CAN_BE_ON_LEADERBOARD: false,
    CAN_GO_OUTSIDE_ROOM: true,
};
exports.ammo1 = {
    PARENT: [exports.genericTank],
    LABEL: 'Ammunition 1',
    RESET_UPGRADES: true,


    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.ammo2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Ammunition 2',
    RESET_UPGRADES: true,


    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.ammo3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Ammunition 3',
    RESET_UPGRADES: true,


    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.food1 = {
    PARENT: [exports.genericTank],
    LABEL: 'Food 1',
    RESET_UPGRADES: true,


    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.food2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Food 2',
    RESET_UPGRADES: true,


    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};

exports.betaTester = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester A',
    RESET_UPGRADES: true,


    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.betaTester2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester B',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.betaTester3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester C',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.betaTester4 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester D',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.betaTester5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester E',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.betaTester6 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester F',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.betaTester7 = {
    PARENT: [exports.genericTank],
    LABEL: 'Beta Tester G',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.bosses = {
    PARENT: [exports.genericTank],
    LABEL: 'Bosses',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.bosses2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Page 2',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.bosses3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Page 3',
    //Moouse's tank
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};

exports.autoturrets = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto Turrets',
    //Made by moouse
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.autoturrets2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto Turrets 2',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};
exports.autoturrets3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto Turrets 3',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    BODY: { // def
        FOV: 2,
        HEALTH: 10000,
        REGEN: 1000,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, -1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: [exports.bullet, {
                SHAPE: 5,
            }],
        },
    }, ],
};


// NPCS:
exports.crasher = {
    TYPE: 'crasher',
    LABEL: 'Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 5,
        ACCELERATION: 1.4,
        HEALTH: 0.4,
        DAMAGE: 4,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    AI: {
        view360: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 14, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
            AUTOFIRE: true,
        },
    }, ],
};
exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Sentry',
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    VALUE: 5000,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCELERATION: 1.1,
        DAMAGE: base.DAMAGE * 2,
        HEALTH: base.HEALTH * 4,
        SPEED: base.SPEED * 0.3,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [7, 14, 0.6, 7, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stronger]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', {
    type: exports.heavy3gun,
    size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', {
    type: exports.trapTurret,
    size: 12,
});
exports.sentryBoost = makeAuto(exports.sentry, 'Sentry', {
    type: exports.booster,
    size: 12,
});

exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: {
        NO_LEAD: true,
    },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.part1 = {
    LABEL: '',
    SHAPE: 4,
    SIZE: 12,
    COLOR: 2,



    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.turret, g.halfrecoil, g.power]),
            TYPE: exports.bullet,
            SYNCS_SKILLS: true,

        },
    }, {
        POSITION: [3, 1.5, 1.5, 10, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
            TYPE: exports.bullet,
            SYNCS_SKILLS: true,


        },
    }, {
        POSITION: [3, 1.5, 1.5, 10, -5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
            TYPE: exports.bullet,
            SYNCS_SKILLS: true,

        },
    }, {
        POSITION: [5, 5, 1.5, 9, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [5, 5, 1.5, 9, 0, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,

        },
    }, {
        POSITION: [3, 5, 1.5, 9, 5, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [3, 5, 1.5, 9, 5, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,

        },
    }, {
        POSITION: [3, 5, 1.5, 9, -5, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [3, 5, 1.5, 9, -5, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,

        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */

        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 2,
        }]
    }, ],

};
exports.part4spam = {
    LABEL: '',
    SHAPE: 4,
    SIZE: 12,
    COLOR: 20,



    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        }, {
            POSITION: [17, 15, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.power, g.slow, g.slow, g.stronger, g.turret, g.threequartersrof]),
                TYPE: exports.blockmissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        }, {
            POSITION: [17, 15, 1, 0, 0, 0, 0.4, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.power, g.slow, g.slow, g.stronger, g.turret, g.threequartersrof]),
                TYPE: exports.hypermissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        }, {
            POSITION: [3, 1.5, 1.5, 10, 5, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [3, 1.5, 1.5, 8, 5, 0, 0.33333, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [3, 1.5, 1.5, 6, 5, 0, 0.666667, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [3, 1.5, 1.5, 10, -5, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [3, 1.5, 1.5, 8, -5, 0, 0.3333, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [3, 1.5, 1.5, 6, -5, 0, 0.6666667, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [5, 5, 1.5, 9, 0, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,
            },
        }, {
            POSITION: [5, 5, 1.5, 9, 0, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,
            },
        }, {
            POSITION: [5, 5, 1.5, 9, 0, -90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,

            },
        }, {
            POSITION: [5, 5, 1.5, 9, 0, -90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,

            },
        },

    ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */

        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 2,
        }]
    }, ],

};
exports.part4 = {
    LABEL: '',
    SHAPE: 4,
    SIZE: 12,
    COLOR: 2,



    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        }, {
            POSITION: [17, 15, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.pound, g.arty, g.stronger, g.turret, g.lessreload, g.stronger, g.stronger, g.fast]),
                TYPE: exports.hypermissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        }, {
            POSITION: [3, 1.5, 1.5, 10, 5, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [3, 1.5, 1.5, 10, -5, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [5, 5, 1.5, 9, 0, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,
            },
        }, {
            POSITION: [5, 5, 1.5, 9, 0, -90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,

            },
        },

    ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */

        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 2,
        }]
    }, ],

};
exports.part3 = {
    LABEL: '',
    SHAPE: 5,
    SIZE: 12,
    COLOR: 20,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
        }, {
            POSITION: [17, 13, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.pound, g.arty, g.stronger, g.turret, g.lessreload, g.power, g.slow, g.stronger, g.stronger, g.stronger, g.stronger]),
                TYPE: exports.lilmissile2,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        }, {
            POSITION: [20, 3, 2, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.bitmorereload, g.turret, g.morespeed]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [18, 3, 2, 0, 0, 0, 0.333, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.bitmorereload, g.turret, g.morespeed]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [16, 3, 2, 0, 0, 0, 0.667, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.machgun, g.bitmorereload, g.turret, g.morespeed]),
                TYPE: exports.bullet,
                SYNCS_SKILLS: true,

            },
        }, {
            POSITION: [16, 6, 1.5, 0, 0, 72, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.turret, g.stronger]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 5,
                STAT_CALCULATOR: gunCalcNames.drone,

            },
        }, {
            POSITION: [16, 6, 1.5, 0, 0, -72, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.turret]),
                TYPE: exports.drone,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 5,
                STAT_CALCULATOR: gunCalcNames.drone,


            },
        },


    ],


    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */


        POSITION: [5, 7, 0, 0, 360, 1, ],
        TYPE: [exports.heavy3gun, {
            INDEPENDENT: true,
            COLOR: 20,
        }]
    }, {
        POSITION: [5, 7, 0, 120, 360, 1, ],
        TYPE: [exports.heavy3gun, {
            INDEPENDENT: true,
            COLOR: 20,
        }]
    }, {
        POSITION: [5, 7, 0, 240, 360, 1, ],
        TYPE: [exports.heavy3gun, {
            INDEPENDENT: true,
            COLOR: 20,
        }]
    }, ],

};
exports.part2 = {
    LABEL: '',
    SHAPE: 4,
    SIZE: 12,
    COLOR: 2,



    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 12, 1.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.turret, g.mach, g.morerecoil, g.destroy, g.mach, g.tonsmorrecoil, g.power, g.slow]),
            TYPE: exports.bullet,
            SYNCS_SKILLS: true,

        },
    }, {
        POSITION: [3, 1.5, 1.5, 10, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
            TYPE: exports.bullet,
            SYNCS_SKILLS: true,


        },
    }, {
        POSITION: [3, 1.5, 1.5, 10, -5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.machgun, g.power, g.turret]),
            TYPE: exports.bullet,
            SYNCS_SKILLS: true,

        },
    }, {
        POSITION: [3, 5, 1.5, 9, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 8,
        },
    }, {
        POSITION: [3, 5, 1.5, 9, 0, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 8,

        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */

        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 2,
        }]
    }, ],
};
exports.crasherSpawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Spawned',
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 5,
    INDEPENDENT: true,
    AI: {
        chase: true,
    },
    MAX_CHILDREN: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, {
                LABEL: 'Crasher',
                VARIES_IN_SIZE: true,
                DRAW_HEALTH: true
            }],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.sentrySpawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Spawned',
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 5,
    INDEPENDENT: true,
    AI: {
        chase: true,
    },
    MAX_CHILDREN: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.slow]),
            TYPE: [exports.autodrone, {
                LABEL: 'Sentry',
                VARIES_IN_SIZE: true,
                DRAW_HEALTH: true,
                BODY: {
                    FOV: 2,
                }
            }],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
//Bosses
exports.elite = {
    PARENT: [exports.miniboss],
    LABEL: 'Elite Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 25,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 10,
        SHIELD: base.SHIELD * 2,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    SKILL: skillSet({
        rld: 0.5,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 0.5,
        atk: 0,
        hlt: 1,
        shi: 0,
        rgn: 0,
        mob: 0,
    }),
};
exports.elite_destroyer = {
    PARENT: [exports.elite],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 16, 1, 6, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.fast]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1, 6, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.fast]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1, 6, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.fast]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 180, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 60, 360, 0, ],
        TYPE: [exports.sentrySpawner]
    }, {
        POSITION: [11, 0, 0, -60, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 5,
        }]
    }, ],
};
exports.elite_gunner = {
    PARENT: [exports.elite],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 16, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 16, 1.5, 14, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: true,
            }],
        },
    }, {
        POSITION: [6, 14, -2, 2, 0, 60, 0, ],
    }, {
        POSITION: [6, 14, -2, 2, 0, 300, 0, ],
    }],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 60, 180, 0, ],
        TYPE: [exports.oldAutoSmasherTurret],
    }, {
        POSITION: [10, 8, 0, 300, 180, 0, ],
        TYPE: [exports.oldAutoSmasherTurret],
    }],
};
exports.devastator = {
    //Made by Moouseeeee
    PARENT: [exports.genericTank],
    SIZE: 25,
    COLOR: 4,
    LABEL: 'Devastator',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.05,
        HEALTH: base.HEALTH * 20,
        SHIELD: base.SHIELD * 2,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },

    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 0.8,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 16, 1, 6, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.morereload]),
            TYPE: exports.bullet,

        },
    }, {
        POSITION: [5, 16, 1, 6, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.morereload]),
            TYPE: exports.bullet,

        },
    }, {
        POSITION: [5, 16, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.morereload]),
            TYPE: exports.bullet,

        },
    }, {
        POSITION: [5, 16, 1, 6, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.morereload]),
            TYPE: exports.bullet,

        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [6, 8, 0, 180, 120, 0, ],
        TYPE: [exports.heavy3gun]
    }, {
        POSITION: [6, 8, 0, 90, 120, 0, ],
        TYPE: [exports.heavy3gun]
    }, {
        POSITION: [6, 8, 0, 0, 120, 0, ],
        TYPE: [exports.heavy3gun]
    }, {
        POSITION: [6, 8, 0, 270, 120, 0, ],
        TYPE: [exports.heavy3gun]
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigsniper3gun]
    }]

};

exports.nailer = {
    PARENT: [exports.genericTank],
    SIZE: 25,
    COLOR: 1,
    //Made by moouse
    LABEL: 'Nailer',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 10,
        SHIELD: base.SHIELD * 2,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    SHAPE: 4,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 8, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
            TYPE: exports.trap,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.trap,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [0, 8, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.twinminion,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 5,
        },
    }, {
        POSITION: [6, 8, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
            TYPE: exports.trap,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.trap,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 8, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
            TYPE: exports.trap,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.trap,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 8, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
            TYPE: exports.trap,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.trap,
            WAIT_TO_CYCLE: true,
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 10, 0, 45, 180, 0, ],
        TYPE: [exports.auto4gun],
    }, {
        POSITION: [10, 10, 0, 135, 180, 0, ],
        TYPE: [exports.auto4gun],
    }, {
        POSITION: [10, 10, 0, -135, 180, 0, ],
        TYPE: [exports.auto4gun],
    }, {
        POSITION: [10, 0, 0, 0, 180, 1, ],
        TYPE: [exports.bigauto4gun],
    }, {

        POSITION: [10, 10, 0, -45, 180, 0, ],
        TYPE: [exports.auto4gun],
    }],
};
exports.testboss2 = {
    //Made by Moouse
    PARENT: [exports.genericTank],
    SIZE: 30,
    COLOR: 13,
    LABEL: 'TESTBED',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.075,
        HEALTH: base.HEALTH * 15,
        SHIELD: base.SHIELD * 5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5,

    },
    SHAPE: 0,
    VARIES_IN_SIZE: true,

    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 8, 1.2, 8, 0, 25, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.morereload, g.stronger]),
                TYPE: exports.twinminion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 6,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, 4, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {

            POSITION: [6, 4, -1.6, 9, -4, 90, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, 4, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, -4, 0, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, 4, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, -4, 180, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, 4, 270, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, -4, 270, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [5, 14, 1, 8, 0, 0, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [5, 14, 1, 8, 0, 90, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [5, 14, 1, 8, 0, 180, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,


            },
        }, {
            POSITION: [5, 14, 1, 8, 0, 270, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,


            },
        }, {
            //Made by moouse
            POSITION: [15, 10, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 10, 1, 0, 0, 90, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 10, 1, 0, 0, 180, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 10, 1, 0, 0, 270, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 270, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },




    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [6, 10, 0, 45, 180, 0, ],
        TYPE: [exports.commanderGun],
    }, {
        POSITION: [6, 10, 0, 135, 180, 0, ],
        TYPE: [exports.commanderGun],
    }, {
        POSITION: [6, 10, 0, -135, 180, 0, ],
        TYPE: [exports.commanderGun],
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [6, 10, 0, -45, 180, 0, ],
        TYPE: [exports.commanderGun],
    }],
};
exports.testboss3 = {
    //Made by Moouse
    PARENT: [exports.genericTank],
    SIZE: 30,
    COLOR: 0,
    SHAPE: 4,
    LABEL: 'TESTBED',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.075,
        HEALTH: base.HEALTH * 15,
        SHIELD: base.SHIELD * 5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5,

    },

    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 7, 1, 0, 5, 90, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 13, 5, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [13, 7, 1, 0, -5, 90, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 13, -5, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [13, 7, 1, 0, 5, -90, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 13, 5, -90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [13, 7, 1, 0, -5, -90, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 13, -5, -90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },




    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 0, 0, 0, ],
        TYPE: [exports.part1],
    }, {

        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [6, 0, 0, 0, 360, 0, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 2,
        }]
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 180, 0, 0, ],
        TYPE: [exports.part2],

    }],
};
exports.pentaboss = {
    //Made by Moouse
    PARENT: [exports.genericTank],
    SIZE: 30,
    COLOR: 14,
    SHAPE: 5,
    LABEL: 'TESTBED',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.075,
        HEALTH: base.HEALTH * 15,
        SHIELD: base.SHIELD * 5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5,

    },

    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),


    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{


        POSITION: [11, 10, 0, 0 + 180, 190, 0],
        TYPE: exports.turretthing
    }, {
        POSITION: [11, 10, 0, 144 + 180, 190, 0],
        TYPE: exports.turretthing
    }, {
        POSITION: [11, 10, 0, 72 + 180, 190, 0],
        TYPE: exports.turretthing
    }, {
        POSITION: [11, 10, 0, 288 + 180, 190, 0],
        TYPE: exports.turretthing

    }, {
        POSITION: [11, 10, 0, 216 + 180, 190, 0],
        TYPE: exports.turretthing
    }, {
        POSITION: [9, 0, 0, 0, 190, 1],
        TYPE: exports.homingdestroy
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [24, 0, 0, 0, 0, 0, ],
        TYPE: [exports.pentathing],
    }, ],
};
exports.testboss4 = {
    //Made by Moouse
    PARENT: [exports.genericTank],
    SIZE: 30,
    COLOR: 20,
    SHAPE: 4,
    LABEL: 'Satan',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.075,
        HEALTH: base.HEALTH * 15,
        SHIELD: base.SHIELD * 5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5,

    },

    SKILL: skillSet({
        rld: 0.1,
        dam: 0.6,
        pen: 0.6,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.6,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

            POSITION: [3, 8, 1, 1, 1, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: exports.skimminion,
                STAT_CALCULATOR: gunCalcNames.trap,
                MAX_CHILDREN: 7,
            },
        },




    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 0, 0, 0, ],
        TYPE: [exports.part4spam],
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 18, 0, 0, 360, 1, ],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 20
        }],
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 18, 0, 90, 360, 1, ],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 20
        }],
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 18, 0, 270, 360, 1, ],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 20
        }],
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 18, 0, 180, 360, 1, ],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 20
        }],
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 90, 0, 0, ],
        TYPE: [exports.part3],
    }, {
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 270, 0, 0, ],
        TYPE: [exports.part3],
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            COLOR: 20,
        }],
    }, {


        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 180, 0, 0, ],
        TYPE: [exports.part4spam],

    }],
};

exports.trapperinsane = {
    PARENT: [exports.miniboss],
    SIZE: 25,
    COLOR: 13,
    LABEL: 'Trap Dweller',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0,
        HEALTH: base.HEALTH * 25,
        SHIELD: base.SHIELD * 2,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    SHAPE: 4,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    //Made by Moouse
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 10, 1, 0, 0, 270, 0, ],
    }, {
        POSITION: [3, 10, 1.7, 15, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 10, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 90, 0, ],
    }, {
        POSITION: [3, 10, 1.7, 15, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 10, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [3, 10, 1.7, 15, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [0, 8, 1.2, 8, 0, 25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.trapminion,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 6,
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [6, 10, 0, 45, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }, {
        POSITION: [6, 10, 0, 135, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }, {
        POSITION: [6, 10, 0, -135, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.heptatrap],
    }, {
        POSITION: [6, 10, 0, -45, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }],
};


exports.elite_sprayer = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.gatlingspray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, 60, 190, 0],
        TYPE: [exports.gatlingspray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, -60, 190, 0],
        TYPE: [exports.gatlingspray, {
            COLOR: 5,
        }],
    }, ],
};
exports.elite_director = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.manager, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, 60, 190, 0],
        TYPE: [exports.manager, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, -60, 190, 0],
        TYPE: [exports.manager, {
            COLOR: 5,
        }],
    }, ],
};
exports.elite_sniper = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 6, 0, 180, 190, 0],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 5,
        }],
    }, {
        POSITION: [11, 6, 0, 60, 190, 0],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 5,
        }],
    }, {
        POSITION: [11, 6, 0, -60, 190, 0],
        TYPE: [exports.bigsniper3gun, {
            COLOR: 5,
        }],
    }, ],
};
exports.palisade = (() => {
    let props = {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.thirdreload]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
    };
    return {
        PARENT: [exports.miniboss],
        LABEL: 'Rogue Palisade',
        COLOR: 17,
        SHAPE: 6,
        SIZE: 40,
        VALUE: 500000,
        BODY: {
            FOV: 1.8,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 10,
            SHIELD: base.SHIELD * 3,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        SKILL: skillSet({
            rld: 0,
            dam: 1,
            pen: 1,
            str: 1,
            spd: 0,
            atk: 0,
            hlt: 1,
            shi: 0,
            rgn: 0,
            mob: 0,
        }),
        GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4, 6, -1.6, 8, 0, 0, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 60, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 120, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 180, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 240, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 300, 0, ],
            PROPERTIES: props,
        }, ],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [5, 10, 0, 30, 110, 0],
            TYPE: exports.trapTurret,
        }, {
            POSITION: [5, 10, 0, 90, 110, 0],
            TYPE: exports.trapTurret,
        }, {
            POSITION: [5, 10, 0, 150, 110, 0],
            TYPE: exports.trapTurret,
        }, {
            POSITION: [5, 10, 0, 210, 110, 0],
            TYPE: exports.trapTurret,
        }, {
            POSITION: [5, 10, 0, 270, 110, 0],
            TYPE: exports.trapTurret,
        }, {
            POSITION: [5, 10, 0, 330, 110, 0],
            TYPE: exports.trapTurret,
        }, ],
    };
})();
//Made by AC
exports.arenac_preda = {
    PARENT: [exports.miniboss],
    LABEL: 'ArenaC Predating Machine',
    SIZE: 32,
    SHAPE: 0,
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC   LAYER */
        POSITION: [11, 5, 0, 180, 145, 0, ],
        TYPE: [exports.xpreda]
    }, {
        POSITION: [11, 5, 0, 60, 145, 0, ],
        TYPE: [exports.xpreda]
    }, {
        POSITION: [11, 5, 0, -60, 145, 0, ],
        TYPE: [exports.xpreda]
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.ypreda, {
            INDEPENDENT: true,
            COLOR: 5,
        }]
    }, ],
};
//END OF BOSSES

exports.bot = {
    FACING_TYPE: 'looseToTarget',
    BODY: {
        SIZE: 10,
    },
    //COLOR: 17,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
    AI: {
        STRAFE: true,
    },
};

exports.ball = {
    PARENT: [exports.genericEntity],
    LABEL: 'Ball',
    COLOR: 3,
    SIZE: 50,
    DAMAGE_EFFECTS: false,
    GIVE_KILL_MESSAGE: false,
    DRAW_HEALTH: false,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    BODY: { // def
        SHIELD: 100000,
        REGEN: 10000,
        HEALTH: 100000,
        DAMAGE: base.DAMAGE * 10,
        DENSITY: 0.1,
        FOV: 1,
        SPEED: base.SPEED,
        PUSHABILITY: 1,
    },
};
exports.bentweird = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.insanespeed]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.insanespeed]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet
        },
    }, ],
};
exports.hybridpellet = makeHybrid(exports.pellet, 'Pelletbrid');
exports.hybridtrapper = makeHybrid(exports.trapper, 'Drone Trapper');

//Balls in different colors idrk
exports.ballBlue = {
    PARENT: [exports.ball],
    LABEL: 'Blue Ball',
    COLOR: 10,
};

exports.ballGreen = {
    PARENT: [exports.ball],
    LABEL: 'Green Ball',
    COLOR: 11,
};

exports.ballRed = {
    PARENT: [exports.ball],
    LABEL: 'Red Ball',
    COLOR: 12,
};

exports.ballMagenta = {
    PARENT: [exports.ball],
    LABEL: 'Magenta Ball',
    COLOR: 15,
};

exports.ball.UPGRADES_TIER_1 = [exports.ballBlue, exports.ballGreen, exports.ballRed, exports.ballMagenta];
exports.sniperturret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 1.15
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [26, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.masterGun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    MAX_CHILDREN: 6,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 14, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.boomerturret = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    FACING_TYPE: 'locksFacing',
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.auto]),
            TYPE: exports.boomerang,
        },
    }, ],
};

exports.hk1template = {
    LABEL: 'HK-1',
    SIZE: 32,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    SHAPE: 6,
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [9, 8, 0, 60, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [9, 8, 0, 180, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [9, 8, 0, 300, 190, 0],
        TYPE: exports.tritrapgun,
    }, ],
};
exports.hk1 = makeAuto(exports.hk1template, 'HK-1', {
    type: exports.gcruiser,
    size: 11,

});
exports.hk2template = {
    LABEL: 'HK-2 template',
    SIZE: 32,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    SHAPE: 6,
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [9, 8, 0, 60, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [9, 8, 0, 180, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [9, 8, 0, 300, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [6, 8, 0, 90, 190, 0],
        TYPE: exports.dual,
    }, {
        POSITION: [6, 8, 0, 210, 190, 0],
        TYPE: exports.dual,
    }, {
        POSITION: [6, 8, 0, 330, 190, 0],
        TYPE: exports.dual,
    }, {
        POSITION: [6, 8, 0, 150, 190, 0],
        TYPE: exports.dual,
    }, {
        POSITION: [6, 8, 0, 270, 190, 0],
        TYPE: exports.dual,
    }, {
        POSITION: [6, 8, 0, 30, 190, 0],
        TYPE: exports.dual,
    }, ],
};
exports.hk2 = makeAuto(exports.hk2template, 'HK-2', {
    type: exports.preda,
    size: 11,

});
exports.hk2_1 = makeAuto(exports.hk2, 'HK-2.1', {
    type: exports.gunner,
    size: 11,

});

exports.sfactminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.9,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    SHAPE: 4,
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }],
};
exports.hpk2minion = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Minion',
        TYPE: 'minion',
        DAMAGE_CLASS: 0,
        HITS_OWN_TYPE: 'hardWithBuffer',
        FACING_TYPE: 'smoothToTarget',
        SHAPE: 7,
        BODY: {
            FOV: 0.9,
            SPEED: 3,
            ACCELERATION: 0.4,
            HEALTH: 5,
            SHIELD: 0,
            DAMAGE: 1.2,
            RESIST: 1,
            PENETRATION: 1,
            DENSITY: 0.4,
        },
        DRAW_HEALTH: false,
        CLEAR_ON_MASTER_UPGRADE: true,
        GIVE_KILL_MESSAGE: false,
        CONTROLLERS: [
            'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
        ],
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [{
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, a, 4 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, a, 4 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, ],
    };
})();
exports.hk3 = {
    LABEL: 'HK-3',
    SIZE: 38,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    SHAPE: 6,
    PARENT: [exports.genericTank],
    DANGER: 10,
    FACING_TYPE: 'autospin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 8, 1.2, 8, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
                TYPE: exports.trap,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.trap,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [0, 5.5, 1.2, 8, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: exports.twinminion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 5,
            },
        }, {
            POSITION: [6, 8, 1.2, 8, 0, 120, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
                TYPE: exports.trap,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.trap,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 8, 1.2, 8, 0, 240, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
                TYPE: exports.trap,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.trap,
                WAIT_TO_CYCLE: true,
            },
        },



    ],
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 0, 0, 0, 360, 1, ],
        TYPE: [exports.sniper3gun, {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [4, 6.5, 0, 0, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [4, 6.5, 0, 120, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [4, 6.5, 0, 240, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [6, 8, 0, 0, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [6, 8, 0, 120, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [6, 8, 0, 240, 190, 0],
        TYPE: exports.boomerturret,
    }, {
        POSITION: [6, 8, 0, 60, 190, 0],
        TYPE: exports.masterGun,
    }, {
        POSITION: [6, 8, 0, 180, 190, 0],
        TYPE: exports.masterGun,
    }, {
        POSITION: [6, 8, 0, 300, 190, 0],
        TYPE: exports.masterGun,
    }, {
        POSITION: [6, 8, 0, 30, 190, 0],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [6, 8, 0, 90, 190, 0],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [6, 8, 0, 150, 190, 0],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [6, 8, 0, 210, 190, 0],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [6, 8, 0, 270, 190, 0],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [6, 8, 0, 330, 190, 0],
        TYPE: exports.machineAutoTurret,
    }, ],
};
exports.hk4 = {
    PARENT: [exports.genericTank],
    SIZE: 40,

    LABEL: 'HK-4',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.075,
        HEALTH: base.HEALTH * 10,
        SHIELD: base.SHIELD * 4,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5,
        REGEN: base.REGEN * 1.5
    },
    SHAPE: 6,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['alwaysFire'],
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 6, 1.2, 8, 0, 25, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.morereload, g.stronger]),
                TYPE: exports.hk1,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        }, {
            POSITION: [10, 4, -1.6, 9, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {

            POSITION: [6, 4, -1.6, 9, 0, 60, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [10, 4, -1.6, 9, 0, 120, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, 0, 180, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [10, 4, -1.6, 9, 0, 240, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {
            POSITION: [6, 4, -1.6, 9, 0, 300, 0.5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.autoswarm,

                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
            },
        }, {

            POSITION: [5, 6, 1.3, 8, 0, 60, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3


            },
        }, {
            POSITION: [5, 6, 1.3, 8, 0, 180, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3


            },
        }, {
            POSITION: [5, 6, 1, 8, 0, 300, 0.25, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),

                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3


            },
        }, {




            POSITION: [15, 10, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 10, 1, 0, 0, 120, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 120, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 10, 1, 0, 0, 240, 0, ],
        }, {
            POSITION: [3, 10, 1.7, 15, 0, 240, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },




    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 10, 0, 0, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }, {
        POSITION: [8, 10, 0, 120, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }, {
        POSITION: [8, 10, 0, 240, 180, 0, ],
        TYPE: [exports.sniper3gun],
    }, {
        POSITION: [8, 0, 0, 0, 360, 1, ],
        TYPE: [exports.heavy3gun, {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [4, 6.5, 0, 0, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [4, 6.5, 0, 120, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [4, 6.5, 0, 240, 190, 1],
        TYPE: exports.bigauto4gun,
    }, ],
};
exports.hk5 = {
    PARENT: [exports.genericTank],
    SIZE: 45,

    LABEL: 'HK-5',
    BODY: {
        FOV: 1.6,
        SPEED: base.SPEED * 0.075,
        HEALTH: base.HEALTH * 10,
        SHIELD: base.SHIELD * 4,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5,
        REGEN: base.REGEN * 1.5
    },
    SHAPE: 6,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['alwaysFire'],
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 0.7,
        shi: 0.2,
        rgn: 0.2,
        mob: 0.3,
    }),
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [4.5, 6, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 8, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.mini]),
            TYPE: exports.twinminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 8, 1, 8, 0, 0, 0, ],
    }, {
        POSITION: [4.5, 6, 1, 10.5, 0, 240, 0, ],
    }, {
        POSITION: [1, 8, 1, 15, 0, 240, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.mini]),
            TYPE: exports.twinminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 6, 1, 8, 0, 240, 0, ],
    }, {
        POSITION: [4.5, 6, 1, 10.5, 0, 120, 0, ],
    }, {
        POSITION: [1, 8, 1, 15, 0, 120, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.mini]),
            TYPE: exports.twinminion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 6, 1, 8, 0, 120, 0, ],
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4, 10, 0, 0, 180, 0, ],
        TYPE: [exports.sniperturret],
    }, {
        POSITION: [4, 10, 0, 60, 180, 0, ],
        TYPE: [exports.sniperturret],
    }, {
        POSITION: [4, 10, 0, 120, 180, 0, ],
        TYPE: [exports.sniperturret],
    }, {
        POSITION: [4, 10, 0, 180, 180, 0, ],
        TYPE: [exports.sniperturret],
    }, {
        POSITION: [4, 10, 0, 240, 180, 0, ],
        TYPE: [exports.sniperturret],
    }, {
        POSITION: [4, 10, 0, 300, 180, 0, ],
        TYPE: [exports.sniperturret],
    }, {
        POSITION: [8, 0, 0, 0, 360, 2, ],
        TYPE: [exports.autoTurret, {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [4, 6.5, 0, 0, 190, 1],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [4, 6.5, 0, 60, 190, 1],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [4, 6.5, 0, 120, 190, 1],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [4, 6.5, 0, 180, 190, 1],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [4, 6.5, 0, 240, 190, 1],
        TYPE: exports.machineAutoTurret,
    }, {
        POSITION: [4, 6.5, 0, 300, 190, 1],
        TYPE: exports.machineAutoTurret,
    }, ],
};

// Upgrades
//Max of  per tank
exports.wiper.UPGRADES_TIER_1 = [
    exports.developer
];
exports.developer.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester,
    exports.god,
    exports.spectator,
    exports.bosses,
    exports.arenaCloser,



    exports.ball

];
exports.ammo1.UPGRADES_TIER_1 = [
    exports.bullet,
    exports.trap,
    exports.block,
    exports.boomerang,
    exports.pillbox,
    exports.missile,
    exports.snake,
    exports.ammo2
];

exports.ammo2.UPGRADES_TIER_1 = [
    exports.swarm,
    exports.bee,
    exports.sunchip,

    exports.drone,
    exports.line,
    exports.minion,
    exports.ammo3
];
exports.ammo3.UPGRADES_TIER_1 = [
    exports.spinmissile,
    exports.hive,
    exports.rocket2,
    exports.fatmissile,
    exports.lilmissile,
    exports.hypermissile
];
exports.dominator.UPGRADES_TIER_1 = [
    exports.destroyerDominator,
    exports.gunnerDominator,
    exports.trapperDominator,
    exports.swarmDominator
];
exports.food1.UPGRADES_TIER_1 = [
    exports.egg,
    exports.square,
    exports.triangle,
    exports.pentagon,
    exports.bigPentagon,
    exports.hugePentagon,
    exports.gem,
    exports.food2
];
exports.food2.UPGRADES_TIER_1 = [
    exports.greensquare,
    exports.greentriangle,
    exports.greenpentagon,
    exports.obstacle,
    exports.babyObstacle,
    exports.megaObstacle,
    exports.wallObstacle

];
exports.betaTester.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester2,
    exports.ammo1,
    exports.autoturrets,
    exports.food1,
    exports.rewind,
    exports.wreckingball,




];

exports.betaTester2.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester3,
    exports.tripledual,
    exports.xpreda,
    exports.ypreda,
    exports.crasherSpawner,
    exports.sentrySpawner,
    exports.scythe,
    exports.sentryBoost



];

exports.betaTester3.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester4,
    exports.fidgetspinner,

    exports.multitool,
    exports.mechanic,
    exports.supersoaker,
    exports.trebu,
    exports.gatlingunner



];
exports.betaTester4.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester5,
    exports.design,
    exports.swarmengineer,

    exports.basicsplit




];
exports.betaTester5.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester6,
    exports.machshot2,
    exports.ktank,
    exports.kkktank,
    exports.ktank2,
    exports.rocketinsane,


];
exports.betaTester6.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester7,
];
exports.betaTester6.UPGRADES_TIER_1 = [
    exports.basic,
    exports.betaTester,
];
exports.bosses.UPGRADES_TIER_1 = [
    exports.elite_destroyer,
    exports.elite_gunner,
    exports.elite_sprayer,
    exports.elite_sniper,
    exports.sentrySwarm,
    exports.sentryGun,
    exports.sentryTrap,
    exports.skimboss,
    exports.bosses2,


];
exports.bosses2.UPGRADES_TIER_1 = [
    exports.testboss2,
    exports.testboss3,
    exports.testboss4,
    exports.nailer,
    exports.devastator,
    exports.trapperinsane,
    exports.pentaboss,
    exports.elite_director,
    exports.bosses3
];
exports.bosses3.UPGRADES_TIER_1 = [
    exports.hk1,
    exports.hk2,
    exports.hk3,
    exports.hk4,
    exports.arenac_preda,
    exports.bosses
];
exports.autoturrets.UPGRADES_TIER_1 = [
    exports.autoTurret,
    exports.machineAutoTurret,
    exports.machineAutoTurret2,
    exports.machineAutoTurret3,
    exports.sniper3gun,
    exports.pillboxTurret,
    exports.commanderGun,
    exports.autoturrets2,
    exports.swarmpillboxTurret2
];
exports.autoturrets2.UPGRADES_TIER_1 = [
    exports.heavy3gun,
    exports.auto4gun,
    exports.autoSmasherTurret,
    exports.oldAutoSmasherTurret,
    exports.bigauto4gun,
    exports.tritrapgun,
    exports.trapTurret,
    exports.autoturrets3
];
exports.autoturrets3.UPGRADES_TIER_1 = [
    exports.bigsniper3gun,
    exports.auto5gun,
    exports.auto3gun,
    exports.baseSwarmTurret,
    exports.cruiserGun

];
exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.flank, exports.director, exports.pound, exports.trapper, exports.pellet];

exports.basic.UPGRADES_TIER_2 = [exports.smash];
exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash, exports.landmine, exports.jumpsmash, exports.weirdspike];

exports.trapper.UPGRADES_TIER_2 = [exports.flanktrap, exports.builder, exports.tritrapper, exports.contagion, exports.trapper2, exports.megatrapper, exports.machtrapper, exports.hybridtrapper];
exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder, exports.engineer, exports.boomer, exports.tritrap, exports.conq, exports.quadtrapper, exports.bentboomer, exports.buildcontagion];
exports.contagion.UPGRADES_TIER_3 = [exports.tritrapper2, exports.machcontagion, exports.longcontagion, exports.dronecontagion, exports.buildcontagion, exports.diver, exports.stormer];
exports.trapper2.UPGRADES_TIER_3 = [exports.engineer, exports.trapskimmer, exports.machinist, exports.megatrapper2, exports.triarsenal, exports.machtrapper2];
exports.megatrapper.UPGRADES_TIER_3 = [exports.construct, exports.machmegatrap, exports.gigatrapper, exports.megatrapper2];
exports.machtrapper.UPGRADES_TIER_3 = [exports.minitrap, exports.machmegatrap, exports.machbuilder, exports.trimachtrapper, exports.machtrapper2, exports.chaintrapper, exports.blastrapper];
exports.hybridtrapper.UPGRADES_TIER_3 = [exports.undertrap, exports.overtrap, exports.dronecontagion, exports.cruisertrapper]




exports.pellet.UPGRADES_TIER_2 = [exports.nailgun, exports.swarmpellet, exports.borer, exports.spiker, exports.punt, exports.pellet2, exports.gunner, exports.dunker, exports.bentpellet];

exports.dunker.UPGRADES_TIER_3 = [exports.machinegunner, exports.gatlingdunker, exports.tridunker];
exports.pellet2.UPGRADES_TIER_3 = [exports.minipellet, exports.poundpellet2];
exports.punt.UPGRADES_TIER_3 = [exports.nanogun, exports.barrage, exports.pebbler, exports.puntborer, exports.testgun, exports.bentpunt];
exports.borer.UPGRADES_TIER_3 = [exports.longborer, exports.pellet3, exports.puntborer, exports.bentborer];
exports.bentpellet.UPGRADES_TIER_3 = [exports.bentborer, exports.bentpunt, exports.bentgunner];
exports.swarmpellet.UPGRADES_TIER_3 = [];




exports.pound.UPGRADES_TIER_2 = [exports.destroy, exports.artillery, exports.builder, exports.obliterator, exports.flankpound, exports.lilskimmer, exports.multishot, exports.hammerer];
exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid, exports.construct, exports.shotgun2, exports.homingdestroy, exports.buster];
exports.flankpound.UPGRADES_TIER_3 = [exports.heavy3, exports.poundangle, exports.deathstar];

exports.artillery.UPGRADES_TIER_3 = [exports.battery, exports.spread, exports.tower, exports.artillery2, exports.sheller, exports.cannoneer, exports.artillery3, exports.aagun, exports.fieldgun];
exports.obliterator.UPGRADES_TIER_3 = [exports.bulldozer, exports.crush, exports.heavyrifle, exports.plow, exports.destructor, exports.longshot, exports.hawk];
exports.pound.UPGRADES_TIER_3 = [exports.hotshot]
exports.lilskimmer.UPGRADES_TIER_3 = [exports.skimmer, exports.multiskimmer, exports.harrower, exports.rocketeer, exports.torpedoer, exports.fatskimmer, exports.spinner, exports.blockskimmer, exports.trapskimmer];
exports.multishot.UPGRADES_TIER_3 = [exports.shotgun2, exports.blunderbuss, exports.machshot, exports.longshot, exports.wrecker, exports.bigshot, exports.trapshot, exports.manyshot, exports.exploder];



exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.gunner, exports.hexa, exports.twinsniper, exports.triple, exports.cruiser, exports.heavytwin];

exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.split, exports.autodouble, exports.bentdouble, exports.doubleswarm, exports.heavydouble, exports.doubletwinsniper];
exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.spread, exports.benthybrid, exports.bentdouble, exports.triblaster, exports.multiskimmer, exports.heavybent, exports.bentsnipe];
exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.nailgun, exports.machinegunner, exports.hurricane, exports.vulcan, exports.piper, exports.heavygunner, exports.gatling, exports.testgun];
exports.twinsniper.UPGRADES_TIER_3 = [exports.twinrifle, exports.twinoblit, exports.piper, exports.doubletwinsniper, exports.hexasnipe];
exports.triple.UPGRADES_TIER_3 = [exports.quint, exports.heavytriple, exports.tripledouble, exports.triplesnipe, exports.triple2, exports.machtriple, exports.tripledual];
exports.heavytwin.UPGRADES_TIER_3 = [exports.deathstar, exports.heavytriple, exports.heavybent, exports.heavygunner, exports.dualarty, exports.heavydouble];



exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini, exports.rifle, exports.twinsniper, exports.clicker, exports.maxim, exports.obliterator];

exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack, exports.sniper3];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon, exports.assassin2, exports.bulldozer, exports.swarmassassin, exports.rifle2, exports.huntsman, exports.silo, exports.single];
exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach, exports.sidewind, exports.dual, exports.destructor, exports.bufferer];
exports.rifle.UPGRADES_TIER_3 = [exports.marksman, exports.rifle2, exports.rifletrap, exports.gunrifle, exports.homingrifle, exports.assaultrifle, exports.blunderbuss, exports.heavyrifle, exports.pistol];
exports.clicker.UPGRADES_TIER_3 = [exports.clipper, exports.puncher, exports.basher, exports.multiclicker, exports.miniclicker, exports.swarmclicker, exports.snapper];



exports.machine.UPGRADES_TIER_2 = [exports.mini, exports.gunner, exports.maxim, exports.blaster, exports.spray, exports.hammerer, exports.artillery, exports.flankmach];

exports.machine.UPGRADES_TIER_3 = [exports.mach3];
exports.maxim.UPGRADES_TIER_3 = [exports.gatlingspray, exports.gatlingaccel, exports.halfnhalf, exports.bufferer, exports.plow, exports.longmaxim];
exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.multiclicker, exports.hybridmini, exports.hotshot, exports.minitrap, exports.silo, exports.vulcan, exports.laser, exports.flooder];
exports.blaster.UPGRADES_TIER_3 = [exports.triblaster, exports.halfnhalf, exports.grinder, exports.flamethrower, exports.splasher];
exports.hammerer.UPGRADES_TIER_3 = [exports.hotshot, exports.plow, exports.dualarty, exports.hammerer2, exports.flankhammerer];



exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap, exports.flankpound, exports.tritrapper, exports.flankmach, exports.flanksnipe, exports.ostrich];

exports.tri.UPGRADES_TIER_3 = [exports.fighter, exports.booster, exports.missilet, exports.bomber, exports.autotri, exports.brutalizer, exports.poundangle, exports.rocket, exports.trigun];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap, exports.hurricane, exports.heptatrap, exports.deathstar, exports.hexamachine, exports.hexasnipe];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.banshee, exports.sniper3, exports.mach3, exports.cruiser3, exports.tritrap, exports.multitank];
exports.flanktrap.UPGRADES_TIER_3 = [exports.bushwhack, exports.guntrap, exports.bomber, exports.conq, exports.bulwark, exports.poundtrap];
exports.tritrapper.UPGRADES_TIER_3 = [exports.hexatrap, exports.heptatrap, exports.fortress, exports.tritrap, exports.tritrapper2, exports.manytrap, exports.triarsenal, exports.trimachtrapper];
exports.flankmach.UPGRADES_TIER_3 = [exports.flankgunner, exports.hexamachine, exports.flankhammerer];
exports.flanksnipe.UPGRADES_TIER_3 = [exports.hexasnipe];
exports.ostrich.UPGRADES_TIER_3 = [exports.falcon, exports.eagle, exports.hawk, exports.penguin, exports.twinostrich, exports.seagull];

exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.lilfact, exports.director3];
exports.director.UPGRADES_TIER_3 = [exports.manager];
exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.overtrap, exports.overgunner, exports.banshee, exports.commander, exports.autoover, exports.lightning, exports.overseer2];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.undergunner, exports.eggseer, exports.undertrap];
exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.battleship, exports.fortress, exports.miniswarm, exports.warship, exports.machcruiser, exports.cruiser3, exports.fatcruiser, exports.controller, exports.cruisertrapper];
exports.lilfact.UPGRADES_TIER_3 = [exports.factory, exports.twinfact, exports.machfact, exports.snipefact, exports.factory2, exports.trapfact, exports.dronefact, exports.warpdrive];
exports.director3.UPGRADES_TIER_3 = [exports.overseer3, exports.director4, exports.fatcruiser];

/*exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash];

exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
    exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
    exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
    exports.triple.UPGRADES_TIER_3 = [exports.quint];

exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
    exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
    exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
        , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
    exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
    exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];

exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
    exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
    exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
    exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer];
    exports.machine.UPGRADES_TIER_3 = [exports.spray];

exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
    exports.hexa.UPGRADES_TIER_3 = [exports.octo];
    exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
    exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
    exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/