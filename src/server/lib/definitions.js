// Tank Definitions
// TO DO: Experiment with DESTROY_OLDEST_CHILD on a drone tank

const combineStats = function(array) {
	try {
		let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		array.forEach(function(component) {
			for (let i = 0; i < data.length; ++i) data[i] *= component[i];
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
			resist: data[12]
		};
	} catch (err) {
		console.log(err);
		console.log(JSON.stringify(array));
	}
};
const g = {
	/*RELOAD, RECOIL, SHUDDER, SIZE, HEALTH, DAMAGE, PEN, SPEED, MAX, RANGE, DENSITY, SPRAY, RESIST*/
	blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	trap: [40, 1, 0.2, 0.6, 1, 0.2, 1, 5, 1, 1, 1, 15, 3],
	swarm: [36, 0.25, 0.05, 0.4, 1.2, 0.19, 1, 3.5, 1, 1, 1.3, 5, 1.3],
	drone: [66, 0.25, 0.1, 0.6, 5, 0.28, 1, 2.5, 1, 1, 2, 0.1, 2],
	factory: [72, 1, 0.1, 0.7, 2, 0.2, 1, 3, 1, 1, 1, 0.1, 1],
	basic: [16, 1.4, 0.1, 1, 2, 0.2, 1, 4.5, 1, 1, 1, 15, 1],
	command: [3, 1.5, 0.1, 1.25, 1, 0.75, 0.85, 1, 1, 1, 1, 1, 1],
	spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
	minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
	single: [1.1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05, 1.05, 1, 1, 1, 1],
	sniper: [1.3, 1, 0.25, 1, 1, 1, 1, 1.2, 1.2, 1, 1.2, 0.25, 1.2],
	assassin: [1.5, 1, 0.25, 1, 1, 1, 1, 1.1, 1.1, 1, 1.1, 0.5, 1.1],
	snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
	sidewind: [1.5, 2, 1, 1, 1.6, 1, 1, 0.2, 0.6, 1, 1, 1, 1],
	snake_skin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
	hunter: [1.5, 0.7, 1, 0.95, 0.9, 0.8, 1, 1, 0.8, 1, 1.2, 1, 1.15],
	hunter2: [1, 1, 1, 0.9, 0.9, 0.85, 0.9, 1, 1, 1, 0.9, 1, 1],
	preda: [1.3, 1, 1, 0.8, 1.35, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
	mach: [0.5, 0.8, 1.7, 1, 0.7, 0.75, 1, 1, 0.8, 1, 1, 2.5, 1],
	mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
	barricade: [0.475, 1, 1, 1, 0.9, 1, 0.9, 1.1, 1, 0.5, 1, 1, 1],
	stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
	sgun: [8, 0.2, 1, 1.5, 1, 0.3, 0.7, 1.8, 0.6, 1, 1.2, 1.2, 1],
	flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
	tri: [1, 0.9, 1, 1, 0.9, 0.95, 1, 0.8, 0.8, 0.6, 1, 1, 1],
	tri_front: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
	thruster: [1, 1.33, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
	auto: [1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
	super_auto: [3.5, 0, 0.65, 0.9, 0.85, 0.75, 1.15, 1.1, 1.1, 0.875, 1.3, 1.1, 1.25],
	five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 1.5, 1, 1],
	seven: [1.25, 0.9, 1, 1, 1, 1, 0.95, 1, 1, 1.05, 1.75, 1.1, 1],
	defend_auto: [1.25, 1, 1.1, 1, 1, 1, 1, 1.2, 1, 1.1, 1, 1.1, 1],
	snipe3: [2.1, 1, 0.25, 1.4, 0.9, 0.95, 0.95, 1, 1, 1, 2, 0.5, 1.3],
	pound: [2, 1.75, 1, 1, 1, 1.6, 1, 0.85, 0.8, 1, 1.6, 1, 1.15],
	destroy: [2.1, 1.75, 0.5, 1, 1.7, 1.7, 1.2, 0.75, 0.5, 1, 1.6, 1, 3],
	anni: [0.9, 1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	decentralize: [1.25, 1.3, 1.1, 1.2, 1.1, 1, 1.1, 1.05, 1, 1, 1, 1, 1],
	op_anni: [0.5, 0, 0.25, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	hive: [0.75, 0.3, 1, 0.8, 0.85, 0.3, 1, 1.05, 0.6, 1, 1, 1, 1],
	arty: [1.2, 0.75, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
	mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
	spread_main: [0.75, 0.25, 0.5, 1, 0.55, 1, 0.9, 1.92, 1.154, 1, 1, 1, 1],
	spread: [1.5, 1, 0.25, 1, 1.1, 1.1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
	skim: [1.3, 0.8, 0.8, 0.9, 1.35, 0.9, 2, 0.35, 0.35, 1.3, 1, 1, 1.1],
	twin: [1, 0.5, 0.9, 1, 0.8, 0.875, 1, 1, 1, 1, 1, 1.2, 1],
	bent: [1, 1, 0.8, 1, 0.8, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
	triple: [1.2, 0.667, 0.9, 1, 0.8, 0.8, 0.91, 1, 1, 1, 1.1, 0.9, 0.95],
	quint: [1.4, 0.667, 1, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
	dual: [2.9, 1, 0.8, 1, 1.35, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
	double: [1, 1, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 1, 1, 1],
	hewn: [1.25, 1.5, 1, 1, 0.85, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
	pure_gunner: [1, 0.25, 1.5, 1.2, 1.4, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
	machgun: [0.65, 0.8, 2, 1, 1, 0.8, 1, 1.2, 0.8, 1, 1, 2.5, 1],
	gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.25, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
	power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
	nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
	fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
	faster: [1, 1, 1, 1, 1, 1, 1, 1.1, 1.1, 1, 1, 1, 1],
	turret: [2, 1, 1, 0.85, 0.6, 0.6, 0.6, 0.9, 0.85, 1, 0.1, 1, 1],
	bees: [1.8, 1, 1, 1.4, 1.3, 1.1, 0.6, 3, 1.5, 1, 0.25, 1, 1],
	battle: [1, 1, 1, 1, 1.2, 1.1, 1, 1, 0.85, 1, 1, 1, 1.1],
	carrier: [1.1, 1, 1, 1, 1, 0.9, 1, 1.2, 1.2, 1.1, 1, 1, 1],
	hexatrap: [1.25, 1, 1.2, 1, 1, 1, 1, 0.8, 1, 0.575, 1, 1, 1],
	octog: [1.25, 0, 0.25, 1.45, 1, 1, 1, 0.6, 1, 1.1, 1, 1, 1],
	defend: [1.25, 1, 0.25, 0.85, 1.1, 1.1, 1.1, 0.85, 1, 2.25, 1, 1, 1],
	block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
	construct: [1.3, 1, 1, 0.9, 1, 1.4, 1, 1, 1, 1, 1, 1, 1],
	boomerang: [0.8, 1, 1, 1, 1.1, 0.7, 1.5, 0.8, 0.75, 1.35, 1, 1, 1],
	over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
	meta: [1.25, 1, 1, 1, 0.85, 0.8, 1, 1, 1, 1, 1, 1, 1],
	weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
	master: [3, 1, 1, 0.7, 0.4, 0.4, 0.5, 1, 1, 0.1, 0.5, 1, 1],
	sunchip: [5, 1, 1, 1.35, 0.4, 0.3, 0.5, 0.8, 1, 1, 0.6, 1, 1],
	malefict: [1, 1, 1, 1.05, 1.1, 1.1, 1.1, 0.8, 0.8, 1, 1.15, 1, 1],
	summon: [0.35, 1, 1, 1.125, 0.25, 0.25, 0.15, 1, 1, 1, 0.8, 1, 1],
	baby_factory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
	no_recoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	half_recoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	less_recoil: [1, 0.65, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	more_recoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	much_more_recoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	lots_more_recoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	tons_more_recoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	double_reload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	more_reload: [0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	bit_more_reload: [0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	bit_less_reload: [1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	one_fourth_reload: [1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	one_third_reload: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	less_reload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	half_reload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	dominator: [6.5, 0, 1, 0.975, 6.25, 6.25, 6.25, 0.5, 1, 1, 1, 0.5, 1],
	gun_dominator: [1, 0, 1, 0.5, 0.5, 0.5, 1, 1.15, 1, 1, 1, 1.25, 1],
	trap_dominator: [1.25, 0, 0.25, 1, 1.75, 1.5, 1.75, 0.5, 2, 0.75, 1, 0.5, 1],
	drone_dominator: [1.25, 1, 1, 1, 1.25, 1.25, 1.25, 1, 0.9, 1, 2, 1, 1],
	dem_trap: [1.35, 0, 0.5, 1.25, 1.05, 1, 1.25, 0.5, 1.55, 1, 1, 0.5, 1],
	dem_mach: [2.85, 0, 1.25, 0.55, 0.75, 0.25, 0.75, 1, 0.85, 1, 1, 1.25, 1],
	dem_factory: [175, 0, 0.25, 0.315, 0.5, 0.5, 0.5, 2.45, 1, 1, 1, 0.5, 1],
	dem_minion: [1.35, 0.95, 1.85, 0.9, 0.4, 0.35, 0.4, 0.5, 1, 0.75, 1, 1.85, 1],
	more_speed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
	bit_slow: [1, 1, 1, 1, 1, 1, 1, 0.9, 0.9, 1, 1, 1, 1],
	slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
	charge: [1, 1, 0.5, 1, 1, 0.9, 1, 0.75, 0.75, 1, 1, 1.15, 1],
	not_dense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
	half_range: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
	less_range: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1],
	more_range: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.15, 1, 1, 1],
	double_range: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
	fake: [1, 0, 1, 1e-5, 1e-4, 1, 1, 1e-5, 2, 0, 1, 1, 1],
	testbed: [0.75, 0.25, 1, 1, 2, 2, 2, 1.25, 2, 1.25, 4, 1, 1],
	closer: [1.25, 0, 1, 1, 100, 100, 100, 2.5, 2.25, 1.4, 4, 0.25, 1],
	closer_ai: [0.625, 1, 1, 1, 1e5, 1e5, 1e5, 6, 5, 1.5, 10, 0.25, 10],
	protect_swarm: [4, 0, 1, 1.5, 200, 5, 5, 1.25, 1, 0.62, 5, 1, 10],
	dread: [0.85, 0.25, 0.75, 0.95, 1.25, 1.05, 1.05, 1.05, 1, 1, 1, 1.25, 1],
	dread_trap: [1.15, 0.5, 0.25, 0.975, 1.05, 1.05, 1.05, 1.1, 1, 1, 1, 1, 3],
	half_speed: [1, 0, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
	bit_smaller: [1, 1, 1, 0.84, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	smaller: [1, 1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	even_smaller: [1, 1, 1, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	pellet: [0.85, 1, 1.25, 1, 1, 1.1, 1, 1.1, 1.05, 1, 1, 1, 1],
	bore: [1.275, 1, 0.8, 1, 0.9, 1, 1, 1.4, 1.325, 1, 1, 0.8, 1],
	punt: [1.25, 1, 1.5, 1, 0.8, 0.8, 0.8, 0.95, 0.925, 1, 1, 2, 1],
	steam: [1.15, 1, 0.85, 1, 1, 1, 1, 1.25, 1.1, 1, 1, 1, 1],
	bigger: [1, 1, 1, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	bit_bigger: [1, 1, 1, 1.16, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	little_bit_bigger: [1, 1, 1, 1.091, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	double_size: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	near_double_size: [1, 1, 1, 1.85, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	low_power: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
	lower_power: [1, 0, 1.25, 1, 0.5, 0.5, 0.75, 1, 1, 1, 1, 1.25, 1],
	half_power: [1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1],
	less_power: [1, 1, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 1, 1, 1],
	more_power: [1, 1, 1, 1, 1.1, 1.1, 1.1, 1, 1, 1, 1, 1, 1],
	more_damage: [1, 1, 1, 1, 1.15, 1.1, 1, 1, 1, 1, 1, 1, 1],
	bit_more_damage: [1, 1, 1, 1, 1.05, 1.1, 1, 1, 1, 1, 1, 1, 1],
	bit_less_damage: [1, 1, 1, 1, 0.95, 0.9, 1, 1, 1, 1, 1, 1, 1],
	less_damage: [1, 1, 1, 1, 0.9, 0.85, 1, 1, 1, 1, 1, 1, 1],
	half_damage: [1, 1, 1, 1, 0.6, 0.5, 1, 1, 1, 1, 1, 1, 1],
	vulc: [1.25, 0.01, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
	fallen_overlord: [0.25, 1, 1, 0.35, 0.4, 0.3, 0.4, 0.76, 0.9, 1, 2, 1, 1],
	low_damage: [1, 1, 1.5, 1, 1, 0.75, 1, 1, 1, 1, 1, 0.75, 0.75],
	rocketr: [2, 2, 1, 0.85, 1.25, 1.5, 1.15, 0.15, 0.5, 1, 1, 1, 1],
	rocket: [0.48, 2, 1.5, 0.85, 0.25, 0.25, 0.25, 0.75, 1, 0.5, 1, 1.25, 1],
	jump: [10, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	blast: [1, 1.2, 1.25, 1.1, 0.9, 0.9, 0.66, 0.8, 0.375, 0.65, 0.5, 1.5, 0.8],
	chain: [1.25, 1.1, 0.8, 1, 0.8, 1, 1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
	guardian: [0.45, 8, 1, 0.7, 2, 1, 1, 1, 1, 1.8, 0.25, 1, 0.25],
	flame: [2.35, 1.25, 2, 0.25, 2, 1.75, 2, 0.75, 0, 3, 2, 0.85, 2],
	levi_five: [1.15, 0, 1, 1, 0.95, 0.95, 0.95, 1.125, 1.1, 1.15, 2, 1.1, 1],
	levi: [2, 0, 1.25, 1, 1, 1, 1, 0.65, 1, 0.75, 1, 1, 1],
	a_lotta_damage: [0.8, 1, 1, 1.2, 1.5, 1.75, 1.25, 1, 1, 1, 1, 1, 1],
	trap_minion: [1, 1, 1, 1.15, 0.7, 0.7, 1.15, 1, 1, 0.75, 1, 1.1, 1],
	very_fast_launch: [1, 1, 1, 1, 1, 1, 1, 2.2, 1, 1, 1, 1, 1],
	fast_launch: [1, 1, 1, 1, 1, 1, 1, 1.4, 1, 1, 1, 1, 1],
	rifle: [0.85, 0.8, 1.5, 0.95, 0.775, 0.775, 0.9, 1.1, 1.05, 1, 1, 2, 1],
	hyperspeed: [1, 1, 1, 1, 1, 1, 1, 2, 2.1, 1, 1, 0.11, 1],
	less_spread: [1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 1],
	no_spread: [1, 1, 0.001, 1, 1, 1, 1, 1, 1, 1, 1, 0.001, 1],
	click: [1.3, 0.25, 0.5, 1, 0.575, 0.575, 0.525, 0.95, 0.95, 1, 0.9, 2, 0.9],
	circle: [3, 2, 1, 1.1, 1, 1.1, 1.05, 1, 1, 1, 1, 1, 1.1],
	mothership: [1.25, 1, 1, 1, 1.1, 1.1, 1.2, 0.825, 0.825, 15, 1, 1, 1.25],
	skimboss: [1, 0.5, 1, 0.9, 1.2, 1.2, 1.2, 1.1, 1, 0.7, 1, 1, 1],
	quadtrap: [1.1, 1, 1, 1, 0.8, 1, 0.8, 1.2, 1, 1, 1, 1, 1.1],
	laser: [0.3, 0.1, 1, 1, 0.6, 0.8, 0.7, 1.5, 1, 1.5, 1, 0.01, 1],
	basemaker: [6.25, 1.4, 0.1, 1, 1, 0.75, 1, 0.5, 1, 1, 1, 15, 1],
	heavy3: [0.95, 1, 1, 1, 1.075, 1.075, 1, 1, 1, 1, 1, 1, 1],
	giga3: [1.25, 1.3, 1, 1.1, 0.9, 0.9, 0.9, 1, 0.95, 1, 1, 1, 1],
	boomer3: [1.1, 1, 1, 1.25, 0.95, 0.95, 0.95, 1, 0.95, 1, 1, 1, 1],
	smother: [1.2, 1, 1.1, 1, 0.95, 0.95, 1, 1, 1, 1, 1, 0.9, 1],
	pebble: [1, 1, 1, 1.2, 1, 0.95, 1, 1.1, 1.1, 1, 0.5, 1, 0.5],
	nano: [1.05, 1, 1, 1.25, 0.95, 0.9, 1, 1.15, 1.15, 1, 0.4, 1, 0.4],
	intercept: [1.4, 1, 1, 1, 0.9, 0.9, 0.9, 1.1, 1, 1, 1, 1, 1],
	decalibrate: [1.45, 1, 1, 1, 1.1, 1.15, 1.1, 0.95, 0.925, 1, 1, 1, 1],
	auto_turret: [2.5, 0.2875, 0.9, 1.122, 0.6, 0.225, 0.9375, 1.62, 1.156, 1, 0.3, 0.75, 1.8],
	pistol: [0.8, 0.7, 1.75, 1, 1.05, 1.025, 1.05, 0.9, 0.9, 1, 0.9, 2.5, 0.9],
	wreck: [1.25, 0.7, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 0.9, 1, 0.9],
	penta_sunchip: [1.1, 1, 1, 0.9, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 1.15, 1, 1.15],
	staple: [1.25, 1, 1.1, 1, 0.95, 0.65, 1, 1, 1, 1, 1, 0.9, 1],
	stronger: [1, 1, 1, 1, 1.05, 1.05, 1, 1.1, 1, 1, 1, 1, 1]
	//bit_less_knock: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 1, 0.95]
};
const setSkill = (s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) => [s7, s5, s4, s6, s3, s10, s1, s2, s9, s8];
const statNames = {
	smasher: 1,
	drone: 2,
	necro: 3,
	swarm: 4,
	trap: 5,
	generic: 6,
	autosmash: 7,
	minion: 8
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
	trap: 8
};

function makeAuto(type, name = -1, options = {}) {
	let turret = {
		type: exports.autoTurret,
		size: 10,
		independent: true,
		angle: 180,
		x: 0
	};
	if (options.type != null) turret.type = options.type;
	if (options.size != null) turret.size = options.size;
	if (options.independent != null) turret.independent = options.independent;
	if (options.angle != null) turret.angle = options.angle;
	if (options.x != null) turret.x = options.x;
	let output = JSON.parse(JSON.stringify(type)),
		gun = {
			POSITION: [turret.size, turret.x, 0, turret.angle, 361, 1],
			TYPE: [turret.type, {
				CONTROLLERS: ['nearestDifferentMaster'],
				INDEPENDENT: turret.independent
			}]
		};
	if (type.GUNS != null) output.GUNS = type.GUNS;
	if (type.DANGER != null) output.DANGER = type.DANGER + 1;
	output.TURRETS = type.TURRETS == null ? [gun] : [...type.TURRETS, gun];
	output.LABEL = name == -1 ? 'Auto-' + type.LABEL : name;
	return output;
}
function makeHybrid(type, name = -1) {
	let output = JSON.parse(JSON.stringify(type)),
		gun = {
			POSITION: [7, 12, 1.2, 8, 0, 180, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
				TYPE: [exports.drone, {
					INDEPENDENT: true
				}],
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				WAIT_TO_CYCLE: false,
				MAX_CHILDREN: 3
			}
		};
	if (type.TURRETS != null) output.TURRETS = type.TURRETS;
	output.GUNS = type.GUNS == null ? [gun] : [...type.GUNS, gun];
	output.LABEL = name == -1 ? 'Hybrid ' + type.LABEL : name;
	output.STAT_NAMES = statNames.generic;
	return output;
}

exports.genericEntity = {
	NAME: '',
	LABEL: 'Generic Entity',
	TYPE: 'unknown',
	DAMAGE_CLASS: 0, // 0: default, 1: food, 2: tanks, 3: obstacles
	DANGER: 0,
	VALUE: 0,
	SHAPE: 0,
	COLOR: 16,
	INDEPENDENT: false,
	CONTROLLERS: ['doNothing'],
	HAS_NO_MASTER: false,
	MOTION_TYPE: 'glide', // motor, swarm, chase, glide
	FACING_TYPE: 'toTarget',
	DRAW_HEALTH: false,
	DRAW_SELF: true,
	DAMAGE_EFFECTS: true,
	RATEFFECTS: true,
	MOTION_EFFECTS: true,
	INTANGIBLE: false,
	ACCEPTS_SCORE: true,
	GIVE_KILL_MESSAGE: false,
	CAN_GO_OUTSIDE_ROOM: false,
	HAS_NO_SKILL_POINTS: false,
	HITS_OWN_TYPE: 'normal', // hard, repel, never, hardWithBuffer, normal
	DIE_AT_LOW_SPEED: false,
	DIE_AT_RANGE: false,
	CLEAR_ON_MASTER_UPGRADE: false,
	PERSISTS_AFTER_DEATH: false,
	VARIES_IN_SIZE: false,
	HEALTH_WITH_LEVEL: true,
	CAN_BE_ON_LEADERBOARD: true,
	HAS_NO_RECOIL: false,
	AUTO_UPGRADE: 'none',
	BUFF_VS_FOOD: false,
	OBSTACLE: false,
	CRAVES_ATTENTION: false,
	NECRO: false,
	UPGRADES_TIER_1: [],
	UPGRADES_TIER_2: [],
	UPGRADES_TIER_3: [],
	UPGRADES_TIER_4: [],
	SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	LEVEL: 0,
	SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
	GUNS: [],
	TURRETS: [],
	MAX_CHILDREN: 0,
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
		HETERO: 2
	},
	FOOD: {
		LEVEL: -1
	},
	DIES_TO_TEAM_BASE: true,
	GOD_MODE: false,
	COLOR_OVERRIDE: -1,
	DONT_HIT_OBSTACLES: false,
	IGNORE_SHAPES: false,
	LAYER: -1,
	INVISIBLE: [0, 0, 1],
	BOSS_TIER_TYPE: -1,
	SYNC_TURRET_SKILLS: false,
	IS_ARENA_CLOSER: false
};
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
		PUSHABILITY: 1
	},
	DAMAGE_EFFECTS: false,
	RATEFFECTS: false,
	HEALTH_WITH_LEVEL: false,
	GUNS: [],
	TURRETS: []
};
exports.greenBetaPentagon = {
	PARENT: [exports.food],
	LABEL: 'Green Beta Pentagon',
	FOOD: {
		LEVEL: 10
	},
	VALUE: 1e4,
	SHAPE: 5,
	SIZE: 26,
	COLOR: 31,
	BODY: {
		DAMAGE: 2.5,
		DENSITY: 30,
		HEALTH: 250,
		RESIST: Math.pow(1.3, 2),
		SHIELD: 40,
		REGEN: 0.3
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.greenPentagon = {
	PARENT: [exports.food],
	LABEL: 'Green Pentagon',
	FOOD: {
		LEVEL: 10
	},
	VALUE: 6000,
	SHAPE: 5,
	SIZE: 12,
	COLOR: 31,
	BODY: {
		DAMAGE: 3,
		DENSITY: 8,
		HEALTH: 200,
		RESIST: 1.25,
		PENETRATION: 1.1
	},
	DRAW_HEALTH: true
};
exports.greenTriangle = {
	PARENT: [exports.food],
	LABEL: 'Green Triangle',
	FOOD: {
		LEVEL: 10
	},
	VALUE: 4000,
	SHAPE: 3,
	SIZE: 6.5,
	COLOR: 31,
	BODY: {
		DAMAGE: 1,
		DENSITY: 6,
		HEALTH: 60,
		RESIST: 1.15,
		PENETRATION: 1.5
	},
	DRAW_HEALTH: true
};
exports.greenSquare = {
	PARENT: [exports.food],
	LABEL: 'Green Square',
	FOOD: {
		LEVEL: 10
	},
	VALUE: 2000,
	SHAPE: 4,
	SIZE: 7.5,
	COLOR: 31,
	BODY: {
		DAMAGE: 1,
		DENSITY: 4,
		HEALTH: 20,
		PENETRATION: 2
	},
	DRAW_HEALTH: true
};
exports.decagon = {
	PARENT: [exports.food],
	LABEL: 'Decagon',
	FOOD: {
		LEVEL: 10
	},
	VALUE: 25000,
	SHAPE: -10,
	SIZE: 78,
	COLOR: 35,
	BODY: {
		DAMAGE: 3.75,
		DENSITY: 95,
		HEALTH: 850,
		RESIST: Math.pow(1.5, 3),
		SHIELD: 101,
		REGEN: 0.4
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.nonagon = {
	PARENT: [exports.food],
	LABEL: 'Nonagon',
	FOOD: {
		LEVEL: 9
	},
	VALUE: 2e4,
	SHAPE: -9,
	SIZE: 74,
	COLOR: 28,
	BODY: {
		DAMAGE: 3.5,
		DENSITY: 90,
		HEALTH: 800,
		RESIST: Math.pow(1.45, 3),
		SHIELD: 100,
		REGEN: 0.4
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.octagon = {
	PARENT: [exports.food],
	LABEL: 'Octagon',
	FOOD: {
		LEVEL: 8
	},
	VALUE: 15000,
	SHAPE: -8,
	SIZE: 70,
	COLOR: 0,
	BODY: {
		DAMAGE: 3.25,
		DENSITY: 85,
		HEALTH: 750,
		RESIST: Math.pow(1.4, 3),
		SHIELD: 95,
		REGEN: 0.4
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.heptagon = {
	PARENT: [exports.food],
	LABEL: 'Heptagon',
	FOOD: {
		LEVEL: 7
	},
	VALUE: 12500,
	SHAPE: -7,
	SIZE: 66,
	COLOR: 24,
	BODY: {
		DAMAGE: 3,
		DENSITY: 80,
		HEALTH: 700,
		RESIST: Math.pow(1.35, 3),
		SHIELD: 90,
		REGEN: 0.5
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.hexagon = {
	PARENT: [exports.food],
	LABEL: 'Hexagon',
	FOOD: {
		LEVEL: 6
	},
	VALUE: 1e4,
	SHAPE: -6,
	SIZE: 62,
	COLOR: 22,
	BODY: {
		DAMAGE: 2.5,
		DENSITY: 80,
		HEALTH: 650,
		RESIST: Math.pow(1.3, 3),
		SHIELD: 85,
		REGEN: 0.4
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.alphaPentagon = {
	PARENT: [exports.food],
	LABEL: 'Alpha Pentagon',
	FOOD: {
		LEVEL: 5
	},
	VALUE: 7500,
	SHAPE: -5,
	SIZE: 58,
	COLOR: 14,
	BODY: {
		DAMAGE: 2,
		DENSITY: 80,
		HEALTH: 600,
		RESIST: Math.pow(1.25, 3),
		SHIELD: 80,
		REGEN: 0.4
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.betaPentagon = {
	PARENT: [exports.food],
	LABEL: 'Beta Pentagon',
	FOOD: {
		LEVEL: 4
	},
	VALUE: 2500,
	SHAPE: 5,
	SIZE: 30,
	COLOR: 14,
	BODY: {
		DAMAGE: 2,
		DENSITY: 30,
		HEALTH: 100,
		RESIST: Math.pow(1.25, 2),
		SHIELD: 40,
		REGEN: 0.25
	},
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.pentagon = {
	PARENT: [exports.food],
	LABEL: 'Pentagon',
	FOOD: {
		LEVEL: 3
	},
	VALUE: 400,
	SHAPE: 5,
	SIZE: 16,
	COLOR: 14,
	BODY: {
		DAMAGE: 1.5,
		DENSITY: 8,
		HEALTH: 20,
		RESIST: 1.25,
		PENETRATION: 1.1
	},
	DRAW_HEALTH: true
};
exports.triangle = {
	PARENT: [exports.food],
	LABEL: 'Triangle',
	FOOD: {
		LEVEL: 2
	},
	VALUE: 120,
	SHAPE: 3,
	SIZE: 9,
	COLOR: 2,
	BODY: {
		DAMAGE: 1,
		DENSITY: 6,
		HEALTH: 6,
		RESIST: 1.15,
		PENETRATION: 1.5
	},
	DRAW_HEALTH: true
};
exports.square = {
	PARENT: [exports.food],
	LABEL: 'Square',
	FOOD: {
		LEVEL: 1
	},
	VALUE: 30,
	SHAPE: 4,
	SIZE: 10,
	COLOR: 13,
	BODY: {
		DAMAGE: 1,
		DENSITY: 4,
		HEALTH: 2,
		PENETRATION: 2
	},
	DRAW_HEALTH: true,
	INTANGIBLE: false
};
exports.egg = {
	PARENT: [exports.food],
	LABEL: 'Egg',
	FOOD: {
		LEVEL: 0
	},
	VALUE: 10,
	SHAPE: 0,
	SIZE: 5,
	COLOR: 6,
	INTANGIBLE: true,
	BODY: {
		DAMAGE: 0,
		DENSITY: 2,
		HEALTH: 0.001,
		PUSHABILITY: 0
	},
	DRAW_HEALTH: false
};
exports.megaObstacle = {
	LABEL: 'Obstacle',
	TYPE: 'wall',
	DAMAGE_CLASS: 1,
	FACING_TYPE: 'turnWithSpeed',
	SHAPE: -11,
	BODY: {
		PUSHABILITY: 0,
		HEALTH: 1e4,
		SHIELD: 1e4,
		REGEN: 1000,
		DAMAGE: 1,
		RESIST: 100,
		STEALTH: 1
	},
	VALUE: 0,
	SIZE: 95,
	COLOR: 16,
	VARIES_IN_SIZE: true,
	GIVE_KILL_MESSAGE: true,
	ACCEPTS_SCORE: false,
	GUNS: [],
	TURRETS: []
};
exports.obstacle = {
	PARENT: [exports.megaObstacle],
	SIZE: 60,
	SHAPE: -9
};
exports.babyObstacle = {
	PARENT: [exports.megaObstacle],
	SIZE: 25,
	SHAPE: -7
};
exports.mazeObstacle = {
	PARENT: [exports.megaObstacle],
	LABEL: 'Maze Wall',
	FACING_TYPE: '',
	SIZE: 100,
	VARIES_IN_SIZE: false,
	SHAPE: 4
};
exports.bullet = {
	LABEL: 'Bullet',
	TYPE: 'bullet',
	ACCEPTS_SCORE: false,
	BODY: {
		PENETRATION: 1,
		SPEED: 3.75,
		RANGE: 90,
		DENSITY: 1.25,
		HEALTH: 0.165,
		DAMAGE: 6,
		PUSHABILITY: 0.3
	},
	FACING_TYPE: 'smoothWithMotion',
	CAN_GO_OUTSIDE_ROOM: true,
	HITS_OWN_TYPE: 'never',
	DIE_AT_RANGE: true
};
exports.bulletLayer6 = {
	PARENT: [exports.bullet],
	LAYER: 6
};
exports.casing = {
	PARENT: [exports.bullet],
	LABEL: 'Shell',
	TYPE: 'swarm'
};
exports.casingLayer6 = {
	PARENT: [exports.casing],
	LAYER: 6
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
		HEALTH: 0.175,
		DAMAGE: 2.25,
		SPEED: 4.5,
		RESIST: 1.6,
		RANGE: 225,
		DENSITY: 12,
		PUSHABILITY: 0.5,
		FOV: 1.5
	},
	DIE_AT_RANGE: true,
	BUFF_VS_FOOD: true
};
exports.bee = {
	PARENT: [exports.swarm],
	LABEL: 'Bee',
	PERSISTS_AFTER_DEATH: true,
	SHAPE: 4,
	HITS_OWN_TYPE: 'hardWithBuffer'
};
exports.autoSwarm = {
	PARENT: [exports.swarm],
	LABEL: 'AI Swarm Drone',
	AI: {
		FARMER: true
	},
	INDEPENDENT: true
};
exports.protectorSwarm = {
	PARENT: [exports.swarm],
	IGNORE_SHAPES: true,
	AI: {
		FARMER: true
	},
	HITS_OWN_TYPE: 'never',
	DONT_HIT_OBSTACLES: true,
	INDEPENDENT: true
};
exports.trap = {
	LABEL: 'Trap',
	TYPE: 'trap',
	ACCEPTS_SCORE: false,
	SHAPE: -3,
	MOTION_TYPE: 'glide',
	FACING_TYPE: 'turnWithSpeed',
	HITS_OWN_TYPE: 'push',
	DIE_AT_RANGE: true,
	BODY: {
		HEALTH: 0.5,
		DAMAGE: 3,
		RANGE: 450,
		DENSITY: 2.5,
		RESIST: 2.5,
		SPEED: 0
	}
};
exports.block = {
	PARENT: [exports.trap],
	LABEL: 'Block',
	SHAPE: -4,
	MOTION_TYPE: 'motor',
	CONTROLLERS: ['goToMasterTarget'],
	BODY: {
		SPEED: 1,
		DENSITY: 5
	}
};
exports.blockTrap = {
	PARENT: [exports.trap],
	LABEL: 'Block',
	SHAPE: -4
};
exports.boomerang = {
	PARENT: [exports.trap],
	LABEL: 'Boomerang',
	CONTROLLERS: ['boomerang'],
	MOTION_TYPE: 'motor',
	HITS_OWN_TYPE: 'never',
	SHAPE: -5,
	BODY: {
		SPEED: 1.25,
		RANGE: 120
	}
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
	CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal', 'hangOutNearMaster'],
	AI: {
		BLIND: true
	},
	BODY: {
		PENETRATION: 1.2,
		PUSHABILITY: 0.6,
		ACCELERATION: 0.05,
		HEALTH: 0.3,
		DAMAGE: 3.375,
		SPEED: 3.8,
		RANGE: 200,
		DENSITY: 0.03,
		RESIST: 1.5,
		FOV: 0.5
	},
	HITS_OWN_TYPE: 'hardOnlyDrones',
	DRAW_HEALTH: false,
	CLEAR_ON_MASTER_UPGRADE: true,
	BUFF_VS_FOOD: true
};
exports.squareDrone = {
	PARENT: [exports.drone],
	SHAPE: 4,
	DIES_TO_TEAM_BASE: false
};
exports.sunchip = {
	PARENT: [exports.drone],
	LABEL: 'Sunchip',
	SHAPE: 4,
	NECRO: true,
	BODY: {
		FOV: 0.5
	},
	AI: {
		BLIND: true,
		FARMER: true
	},
	HITS_OWN_TYPE: 'hardWithBuffer'
};
exports.pentaSunchip = {
	PARENT: [exports.sunchip],
	LABEL: 'Pentachip',
	SHAPE: 5
};
exports.missile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, -2, 130, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 2, 230, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.rocket = {
	PARENT: [exports.bullet],
	LABEL: 'Rocket',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [6, 10.5, 1.5, 9, 0, 180, 7.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.rocket]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.hive = {
	PARENT: [exports.bullet],
	LABEL: 'Hive',
	BODY: {
		RANGE: 90,
		FOV: 0.5
	},
	FACING_TYPE: 'turnWithSpeed',
	INDEPENDENT: true,
	CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf'],
	AI: {
		NO_LEAD: true
	},
	GUNS: [{
		POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
			TYPE: exports.bee,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
			TYPE: exports.bee,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
			TYPE: exports.bee,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
			TYPE: exports.bee,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
			TYPE: exports.bee,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.autoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 1
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [21.5, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto_turret]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.sniperAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 1.25
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [26, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.machineAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 1
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [14, 11, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.doubleAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.925
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.hexaAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.925
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto_turret, g.bit_more_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.destroyAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.9
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.pelletAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.95
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [17, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.auto_turret, g.more_power, g.bit_more_reload]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [17, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.auto_turret, g.more_power, g.bit_more_reload]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.trapAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.95
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 14, 1.8, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.auto_turret, g.more_power, g.more_power, g.more_power]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.poundAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.95
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.flankAutoTurret = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 1
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [21.5, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [21.5, 10, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [21.5, 10, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto_turret]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.auto3gun = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [22, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
			TYPE: exports.bullet
		}
	}]
};
exports.auto5gun = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [24, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
			TYPE: exports.bullet
		}
	}]
};
exports.auto7gun = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [24.5, 11.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five, g.seven]),
			TYPE: exports.bullet
		}
	}]
};
exports.twin3gun = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.auto, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.auto, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.twin5gun = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.auto, g.five, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.auto, g.five, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.machine3gun = {
	LABEL: '',
	COLOR: 16,
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [14, 11, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.auto]),
			TYPE: exports.bullet
		}
	}]
};
exports.machine5gun = {
	LABEL: '',
	COLOR: 16,
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [14, 11, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.auto, g.five, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.defenderGun = {
	LABEL: '',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [24, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.defend_auto]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.heavy3gun = {
	LABEL: '',
	BODY: {
		FOV: 2,
		SPEED: 0.9
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [22, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.heavy3]),
			TYPE: exports.bullet
		}
	}]
};
exports.heavy5gun = {
	LABEL: '',
	BODY: {
		FOV: 2,
		SPEED: 0.9
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [22, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.heavy3, g.five, g.bit_bigger, g.less_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.warhorse4gun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [22, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.half_power, g.half_reload, g.bit_less_reload, g.bit_slow]),
			TYPE: exports.bullet
		}
	}]
};
exports.obliterator3gun = {
	LABEL: '',
	BODY: {
		FOV: 2,
		SPEED: 0.9
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [12, 12, 1.01, 13.4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.auto, g.fast, g.bit_bigger]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.57, 1.4, 5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.auto, g.fake]),
			TYPE: exports.bullet
		}
	}]
};
exports.giga3gun = {
	LABEL: '',
	BODY: {
		FOV: 1.75,
		SPEED: 0.8
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [23, 16, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.auto, g.giga3, g.bit_bigger]),
			TYPE: exports.bullet
		}
	}]
};
exports.boomer3gun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [5, 10, 1, 14, 0, 0, 0]
	}, {
		POSITION: [6, 10, -1.5, 7, 0, 0, 0]
	}, {
		POSITION: [2, 10, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.auto, g.boomer3]),
			TYPE: exports.boomerang
		}
	}]
};
exports.superHeavyGun = {
	LABEL: '',
	BODY: {
		FOV: 1.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [4.5, 14, 1, 10, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.super_auto]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [11, 14, -1.35, 0, 0, 0, 0]
	}]
};
exports.superHeavyMach = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [14.25, 5, 1, 3, -3.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dem_mach]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.25, 5, 1, 3, 3.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dem_mach]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15.85, 5, 1, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dem_mach]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.25, 14, -1.35, 0, 0, 0, 0]
	}]
};
exports.machineGunAuto = {
	LABEL: '',
	COLOR: 16,
	BODY: {
		FOV: 2
	},
	GUNS: [{
		POSITION: [14, 11, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.auto_turret, g.smaller, g.slow, g.bit_more_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.trishot3gun = {
	LABEL: '',
	COLOR: 16,
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [19, 8, 1, 0, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.twinAuto = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [16, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.auto, g.bit_less_reload]),
			TYPE: exports.bulletLayer6,
			PERSISTS_AFTER_DEATH: true
		}
	}, {
		POSITION: [16, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.auto, g.bit_less_reload]),
			TYPE: exports.bulletLayer6,
			PERSISTS_AFTER_DEATH: true
		}
	}]
};
exports.tripleAuto = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [15, 10, 1, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 10, 1, 0, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.constructAuto = {
	LABEL: '',
	BODY: {
		FOV: 1.4
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [17, 18, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 18, 1.2, 17, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.half_reload, g.fast]),
			TYPE: exports.blockTrap
		}
	}]
};
exports.derogatorGun = {
	LABEL: '',
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [22, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.borerAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [20, 3.5, 1, 0, 3.65, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 3.5, 1, 0, -3.65, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoRangerGun = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.autoPound = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.bit_more_damage, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.eliteBorerAuto = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.slow, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoSmashTurret = {
	LABEL: '',
	COLOR: 16,
	GUNS: [{
		POSITION: [19, 6, 1, 0, -5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lots_more_recoil, g.half_reload, g.half_speed]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.fixedReload
		}
	}, {
		POSITION: [19, 6, 1, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lots_more_recoil, g.half_reload, g.half_speed]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.fixedReload
		}
	}]
};
exports.heavyGunSentry = {
	PARENT: [exports.heavy3gun],
	HAS_NO_RECOIL: true
};
exports.trapTurret = {
	LABEL: '',
	INDEPENDENT: true,
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [16, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 14, 1.8, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.low_power, g.fast, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}]
};
exports.sentryTrapTurret = {
	PARENT: [exports.trapTurret],
	BODY: {
		FOV: 0.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	AI: {
		SKYNET: true,
		FULL_VIEW: true
	}
};
exports.octogeddonTurret = {
	LABEL: '',
	INDEPENDENT: true,
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [16, 9, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 9, 1.8, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.low_power, g.half_reload, g.octog]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}]
};
exports.crasherSpawner = {
	LABEL: 'Spawned',
	STAT_NAMES: statNames.drone,
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 5,
	INDEPENDENT: true,
	AI: {
		chase: true
	},
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
			TYPE: [exports.drone, {
				LABEL: 'Crasher',
				VARIES_IN_SIZE: true,
				DRAW_HEALTH: true
			}],
			SYNCS_SKILLS: true,
			AUTOFIRE: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.sniperAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 4
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [27, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assassin, g.snipe3]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.5, 8, 0, 0, 0]
	}]
};
exports.sniper3gun = {
	PARENT: [exports.sniperAutoGun],
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
};
exports.sniper5gun = {
	LABEL: '',
	BODY: {
		FOV: 4
	},
	COLOR: 16,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [27, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.auto, g.snipe3, g.five]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.5, 8, 0, 0, 0]
	}]
};
exports.assassin3gun = {
	LABEL: '',
	BODY: {
		FOV: 5
	},
	COLOR: 16,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [30, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.auto, g.snipe3, g.faster, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.5, 8, 0, 0, 0]
	}]
};
exports.bansheeGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [26, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.less_reload, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.auto4gun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 4, 1, 0, -3.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow, g.stronger]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow, g.stronger]),
			TYPE: exports.bullet
		}
	}]
};
exports.auto6gun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 4, 1, 0, -3.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow, g.five, g.less_damage, g.bit_slow]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow, g.five, g.less_damage, g.bit_slow]),
			TYPE: exports.bullet
		}
	}]
};
exports.bigAuto3Gun = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 1
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [14, 5, 1, 0, -4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.builder3gun = {
	LABEL: '',
	BODY: {
		FOV: 1
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [20, 16, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 16, 1.1, 20, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.bit_less_damage]),
			TYPE: exports.block
		}
	}]
};
exports.builder4gun = {
	PARENT: [exports.builder3gun],
	GUNS: [{
		POSITION: [20, 16, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 16, 1.1, 20, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.less_power]),
			TYPE: exports.block
		}
	}]
};
exports.smasherBody = {
	CONTROLLERS: ['spin'],
	COLOR: 9,
	SHAPE: 6,
	INDEPENDENT: true
};
exports.landmineBody = {
	CONTROLLERS: ['slowSpin'],
	COLOR: 9,
	SHAPE: 6,
	INDEPENDENT: true
};
exports.megamineBody = {
	CONTROLLERS: ['slowSpin'],
	COLOR: 9,
	SHAPE: -6,
	INDEPENDENT: true
};
exports.spikeBody = {
	CONTROLLERS: ['spin'],
	COLOR: 9,
	SHAPE: -4,
	INDEPENDENT: true
};
exports.megaSmashBody = {
	CONTROLLERS: ['spin'],
	COLOR: 9,
	SHAPE: -6,
	INDEPENDENT: true
};
exports.baseProtectBody = {
	CONTROLLERS: ['dontTurn'],
	COLOR: 9,
	SHAPE: 8,
	INDEPENDENT: true
};
exports.dominationBody = {
	CONTROLLERS: ['dontTurn2'],
	COLOR: 9,
	SHAPE: 6,
	INDEPENDENT: true
};
exports.jumpSmashBody = {
	LABEL: '',
	CONTROLLERS: ['spin'],
	COLOR: 9,
	SHAPE: -8,
	INDEPENDENT: true
};
exports.baseSwarmTurret = {
	IGNORE_SHAPES: true,
	LABEL: '',
	COLOR: 16,
	MAX_CHILDREN: 4,
	BODY: {
		FOV: 1
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	AI: {
		NO_LEAD: true
	},
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.protect_swarm]),
			TYPE: exports.protectorSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.protect_swarm]),
			TYPE: exports.protectorSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.protect_swarm]),
			TYPE: exports.protectorSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};

const base = {
	ACCEL: 1.6,
	SPEED: 5.25,
	HEALTH: 20,
	DAMAGE: 3,
	RESIST: 1,
	PENETRATION: 1.05,
	SHIELD: 3,
	REGEN: 0.025,
	DENSITY: 0.5
};

exports.genericTank = {
	LABEL: 'Unknown Class',
	TYPE: 'tank',
	DAMAGE_CLASS: 2,
	DANGER: 5,
	ALPHA: 1,
	MOTION_TYPE: 'motor',
	FACING_TYPE: 'toTarget',
	SIZE: 12,
	MAX_CHILDREN: 0,
	DAMAGE_EFFECTS: false,
	BODY: {
		ACCELERATION: base.ACCEL,
		SPEED: base.SPEED,
		HEALTH: base.HEALTH,
		DAMAGE: base.DAMAGE,
		PENETRATION: base.PENETRATION,
		SHIELD: base.SHIELD,
		REGEN: base.REGEN,
		FOV: 1,
		DENSITY: base.DENSITY,
		PUSHABILITY: 0.9,
		HETERO: 3
	},
	GUNS: [],
	TURRETS: [],
	GIVE_KILL_MESSAGE: true,
	DRAW_HEALTH: true,
	HAS_NO_SKILL_POINTS: false,
	COLOR_OVERRIDE: -1,
	DONT_HIT_OBSTACLES: false,
	IGNORE_SHAPES: false,
	CAN_GO_OUTSIDE_ROOM: false,
	LAYER: -1,
	TEAM: -1,
	INVISIBLE: [0, 0, 1],
	HITS_OWN_TYPE: 'hardOnlyTanks',
	BOSS_TIER_TYPE: -1,
	SYNC_TURRET_SKILLS: false,
	IS_ARENA_CLOSER: false,
	HAS_NO_RECOIL: false
};
exports.baseProtector = {
	PARENT: [exports.genericTank],
	LABEL: 'Base Protector',
	TYPE: 'wall',
	DANGER: 0,
	SIZE: 45,
	DAMAGE_CLASS: 0,
	ACCEPTS_SCORE: false,
	CAN_BE_ON_LEADERBOARD: false,
	GIVE_KILL_MESSAGE: false,
	SKILL: setSkill(0, 0, 9, 8, 8, 8, 9, 0, 0, 0),
	BODY: {
		HEALTH: 1e8,
		DAMAGE: 10,
		SHIELD: 1e8,
		REGEN: 1e8,
		FOV: 1.25,
		PUSHABILITY: 0,
		HETERO: 0
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [25, 0, 0, 0, 360, 0],
		TYPE: exports.baseProtectBody
	}, {
		POSITION: [12, 7, 0, 45, 100, 0],
		TYPE: exports.baseSwarmTurret
	}, {
		POSITION: [12, 7, 0, 135, 100, 0],
		TYPE: exports.baseSwarmTurret
	}, {
		POSITION: [12, 7, 0, 225, 100, 0],
		TYPE: exports.baseSwarmTurret
	}, {
		POSITION: [12, 7, 0, 315, 100, 0],
		TYPE: exports.baseSwarmTurret
	}],
	GUNS: [{
		POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
	}, {
		POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
	}, {
		POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
	}, {
		POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
	}, {
		POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
	}, {
		POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
	}, {
		POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
	}, {
		POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
	}],
	BROADCAST_MESSAGE: 'A base protector died? lol I think something broke...',
	IGNORE_SHAPES: true
};
exports.minion = {
	PARENT: [exports.genericTank],
	LABEL: 'Minion',
	TYPE: 'minion',
	DAMAGE_CLASS: 0,
	HITS_OWN_TYPE: 'hardWithBuffer',
	FACING_TYPE: 'smoothToTarget',
	BODY: {
		FOV: 0.6,
		SPEED: 3,
		ACCELERATION: 0.4,
		HEALTH: 5,
		SHIELD: 0,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.4,
		RANGE: 100
	},
	AI: {
		BLIND: true
	},
	DRAW_HEALTH: false,
	CLEAR_ON_MASTER_UPGRADE: true,
	GIVE_KILL_MESSAGE: false,
	CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
	GUNS: [{
		POSITION: [17, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.halfReloadMinion = {
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [17, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.half_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.sniperMinion = {
	PARENT: [exports.minion],
	BODY: {
		FOV: 0.6,
		SPEED: 2.75,
		ACCELERATION: 0.25,
		HEALTH: 5,
		SHIELD: 0,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.4
	},
	GUNS: [{
		POSITION: [23, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.minion]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.machineMinion = {
	PARENT: [exports.minion],
	BODY: {
		FOV: 0.5,
		SPEED: 2.5,
		ACCELERATION: 0.5,
		HEALTH: 7.5,
		SHIELD: 0,
		DAMAGE: 1,
		RESIST: 1.2,
		PENETRATION: 1,
		DENSITY: 0.4
	},
	GUNS: [{
		POSITION: [11.5, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.minion, g.one_fourth_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.demolishMinion = {
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [17, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dem_minion]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.demolishFactory = {
	PARENT: [exports.genericTank],
	BODY: {
		FOV: 3
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	MAX_CHILDREN: 3,
	AI: {
		NO_LEAD: true,
		SKYNET: true,
		FULL_VIEW: true
	},
	GUNS: [{
		POSITION: [2, 12.65, 1.1, 11.25, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.dem_factory]),
			TYPE: exports.demolishMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}]
};
exports.demolishBody1 = {
	LABEL: '',
	COLOR: 34,
	SHAPE: 6
};
exports.demolishBody2 = {
	GUNS: [{
		POSITION: [17.5, 107.5, 1.4, 86.5, -80, -60, 0]
	}]
};
exports.pillboxTurret = {
	LABEL: '',
	COLOR: 16,
	BODY: {
		FOV: 2
	},
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.pillbox = {
	PARENT: [exports.trap],
	LABEL: 'Pillbox',//Auto-Block
	SHAPE: -4,
	MOTION_TYPE: 'motor',
	CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
	INDEPENDENT: true,
	BODY: {
		SPEED: 1,
		DENSITY: 5
	},
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.pillboxTurret
	}]
};
exports.pillboxTurretWeak = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.half_power, g.not_dense, g.bit_slow]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.pillboxWeak = {
	PARENT: [exports.pillbox],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.pillboxTurretWeak
	}]
};
exports.twinPillboxTurret = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion, g.turret, g.power, g.auto, g.not_dense, g.bit_more_damage]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion, g.turret, g.power, g.auto, g.not_dense, g.bit_more_damage]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.twinPillbox = {
	PARENT: [exports.pillbox],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.twinPillboxTurret
	}]
};
exports.machPillboxTurret = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 10.08, 1.5, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger, g.little_bit_bigger]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.machPillbox = {
	PARENT: [exports.pillbox],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.machPillboxTurret
	}]
};
exports.boomerangPillbox = {
	PARENT: [exports.trap],
	LABEL: 'Boombox',//Auto-Boomerang
	SHAPE: -5,
	MOTION_TYPE: 'motor',
	CONTROLLERS: ['boomerang', 'nearestDifferentMaster'],
	HITS_OWN_TYPE: 'never',
	INDEPENDENT: true,
	BODY: {
		SPEED: 1.25,
		RANGE: 120
	},
	DIE_AT_RANGE: true,
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.pillboxTurret
	}]
};
exports.poundPillboxTurret = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [18, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger, g.bit_more_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.poundPillbox = {
	PARENT: [exports.pillbox],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.poundPillboxTurret
	}]
};
exports.flankPillboxTurret = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger, g.bit_less_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [22, 11, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger, g.bit_less_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [22, 11, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger, g.bit_less_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.flankPillbox = {
	PARENT: [exports.pillbox],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.flankPillboxTurret
	}]
};
exports.snipePillboxTurret = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [27, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.minion, g.turret, g.power, g.auto, g.not_dense, g.stronger]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.snipePillbox = {
	PARENT: [exports.pillbox],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.snipePillboxTurret
	}]
};
exports.weakPillboxTurret = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.not_dense, g.slow, g.less_power, g.bit_less_damage]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.miniPillbox = {
	PARENT: [exports.trap],
	LABEL: 'Trapbox',
	SHAPE: -3,
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	TURRETS: [{
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.weakPillboxTurret
	}]
};
exports.weakPillboxTurret2 = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.minion, g.turret, g.power, g.auto, g.not_dense, g.slow, g.less_power, g.bit_less_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.miniPillbox2 = {
	PARENT: [exports.miniPillbox],
	TURRETS: [{
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.weakPillboxTurret2
	}]
};
exports.weakPillboxTurret3 = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.not_dense, g.bit_slow]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.miniPillbox3 = {
	PARENT: [exports.miniPillbox],
	TURRETS: [{
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.weakPillboxTurret3
	}]
};
exports.weakPillboxTurret4 = {
	PARENT: [exports.pillboxTurret],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.minion, g.turret, g.power, g.auto, g.not_dense, g.slow, g.less_power, g.less_power, g.one_fourth_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.miniPillbox4 = {
	PARENT: [exports.miniPillbox],
	TURRETS: [{
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.weakPillboxTurret4
	}]
};
exports.engineer3gun = {
	LABEL: '',
	BODY: {
		FOV: 1
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 14, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.bigger, g.stronger]),
			TYPE: exports.pillboxWeak,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [4, 14, 1, 8, 0, 0, 0]
	}]
};
exports.hypermissile = {
	PARENT: [exports.missile],
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, -2, 150, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_recoil, g.low_power, g.skimboss]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 2, 210, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_recoil, g.low_power, g.skimboss]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, -2, 90, 0.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_recoil, g.low_power, g.skimboss]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 2, 270, 0.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_recoil, g.low_power, g.skimboss]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.skimTurret = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 2,
	GUNS: [{
		POSITION: [10, 14, -0.5, 9, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.skimboss, g.half_reload, g.less_reload]),
			TYPE: exports.hypermissile
		}
	}, {
		POSITION: [17, 15, 1, 0, 0, 0, 0]
	}]
};
exports.basic = {
	PARENT: [exports.genericTank],
	LABEL: 'Basic',
	DANGER: 4,
	LEVEL: -1,
	RESET_UPGRADES: true,
	SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic]),
			TYPE: exports.bullet,
			LABEL: '',
			STAT_CALCULATOR: 0,
			WAIT_TO_CYCLE: false,
			AUTOFIRE: false,
			SYNCS_SKILLS: false,
			MAX_CHILDREN: 0,
			ALT_FIRE: false,
			NEGATIVE_RECOIL: false
		}
	}],
	DAMAGE_CLASS: 2,
	CAN_BE_ON_LEADERBOARD: true,
	DIES_TO_TEAM_BASE: true,
	IS_SMASHER: false
};
exports.single = {
	PARENT: [exports.genericTank],
	LABEL: 'Single',
	DANGER: 7,
	GUNS: [{
		POSITION: [19, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.single]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.smash = {
	PARENT: [exports.genericTank],
	LABEL: 'Smasher',
	DANGER: 6,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 1.1,
		DENSITY: base.DENSITY * 2
	},
	TURRETS: [{
		POSITION: [21.5, 0, 0, 0, 360, 0],
		TYPE: exports.smasherBody
	}],
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher
};
exports.megaSmash = {
	PARENT: [exports.genericTank],
	LABEL: 'Mega Smasher',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 1.15,
		DENSITY: base.DENSITY * 4
	},
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher,
	TURRETS: [{
		POSITION: [24, 0, 0, 0, 360, 0],
		TYPE: exports.megaSmashBody
	}]
};
exports.spike = {
	PARENT: [exports.genericTank],
	LABEL: 'Spike',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		DAMAGE: base.DAMAGE * 1.1,
		SPEED: base.SPEED * 1.05,
		DENSITY: base.DENSITY * 2
	},
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher,
	TURRETS: [{
		POSITION: [20.5, 0, 0, 0, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20.5, 0, 0, 120, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20.5, 0, 0, 240, 360, 0],
		TYPE: exports.spikeBody
	}]
};
exports.autoSmash = makeAuto(exports.smash, 'Auto-Smasher', {
	type: exports.autoSmashTurret,
	size: 11
});
exports.autoSmash.SKILL_CAP = [12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
exports.autoSmash.STAT_NAMES = statNames.autosmash;
exports.twin = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin',
	DANGER: 5,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
			TYPE: exports.bullet
		}
	}]
};
exports.gunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Gunner',
	DANGER: 6,
	GUNS: [{
		POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}]
};
exports.machineGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Machine Gunner',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [14, 3, 4, -3, 5, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 4, -3, -5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 4, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoGunner = makeAuto(exports.gunner);
exports.nailgun = {
	PARENT: [exports.genericTank],
	LABEL: 'Nailgun',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.double = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Flank',
	DANGER: 6,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoDouble = makeAuto(exports.double, 'Auto-Double');
exports.tripleTwin = {
	PARENT: [exports.genericTank],
	LABEL: 'Triple Twin',
	DANGER: 7,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
			TYPE: exports.bullet
		}
	}]
};
exports.hewnDouble = {
	PARENT: [exports.genericTank],
	LABEL: 'Hewn Double',
	DANGER: 7,
	GUNS: [{
		POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -5.5, -25, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
			TYPE: exports.bullet
		}
	}]
};
exports.bent = {
	PARENT: [exports.genericTank],
	LABEL: 'Triple Shot',
	DANGER: 6,
	GUNS: [{
		POSITION: [19, 8, 1, 0, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
			TYPE: exports.bullet
		}
	}]
};
exports.bentDouble = {
	PARENT: [exports.genericTank],
	LABEL: 'Bent Double',
	DANGER: 7,
	GUNS: [{
		POSITION: [19, 8, 1, 0, -1, -25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 1, 25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -1, 155, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 1, -155, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.penta = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta Shot',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [16, 8, 1, 0, -3, -30, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, 0, 3, 30, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -2, -15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.benthybrid = makeHybrid(exports.bent, 'Bent Hybrid');
exports.triple = {
	PARENT: [exports.genericTank],
	LABEL: 'Triplet',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 10, 1, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 10, 1, 0, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
			TYPE: exports.bullet
		}
	}]
};
exports.quint = {
	PARENT: [exports.genericTank],
	LABEL: 'Quintuplet',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.05,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [16, 10, 1, 0, -5, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1, 0, 5, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 10, 1, 0, -3, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 10, 1, 0, 3, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
			TYPE: exports.bullet
		}
	}]
};
exports.dual = {
	PARENT: [exports.genericTank],
	LABEL: 'Dual',
	DANGER: 7,
	BODY: {
		ACCELARATION: base.ACCEL * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [18, 7, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
			TYPE: exports.bullet
		}
	}]
};
exports.sniper = {
	PARENT: [exports.genericTank],
	LABEL: 'Sniper',
	DANGER: 5,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [24, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
			TYPE: exports.bullet
		}
	}]
};
exports.assassin = {
	PARENT: [exports.genericTank],
	LABEL: 'Assassin',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.autoAssassin = makeAuto(exports.assassin);
exports.ranger = {
	PARENT: [exports.genericTank],
	LABEL: 'Ranger',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.8,
		FOV: 1.4
	},
	GUNS: [{
		POSITION: [32, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.observer = {
	PARENT: [exports.genericTank],
	LABEL: 'Observer',
	//INVISIBLE: [1, 1, 0],
	ALPHA: 0.1,
	BODY: {
		FOV: 3,
		SPEED: 15,
		ACCELERATION: 3.7,
		HEALTH: 1e6,
		SHIELD: 1e6,
		REGEN: 1e6,
		RESIST: 1e6,
		DAMAGE: 1e-4,
		PUSHABILITY: 0.15
	},
	DONT_HIT_OBSTACLES: true,
	HAS_NO_SKILL_POINTS: true,
	SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	DIES_TO_TEAM_BASE: false,
	CAN_GO_OUTSIDE_ROOM: true
};
exports.hunter = {
	PARENT: [exports.genericTank],
	LABEL: 'Hunter',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
			TYPE: exports.bullet
		}
	}]
};
exports.predator = {
	PARENT: [exports.genericTank],
	LABEL: 'Predator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.85,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 16, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
			TYPE: exports.bullet
		}
	}]
};
exports.poach = makeHybrid(exports.hunter, 'Poacher');
exports.rocketeer = {
	PARENT: [exports.genericTank],
	LABEL: 'Rocketeer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [10, 12.5, -0.5, 9.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),//g.basic, g.sniper, g.hunter, g.rocketr
			TYPE: exports.rocket,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [16.5, 11.5, -1.5, 0, 0, 0, 0]
	}]
};
exports.director = {
	PARENT: [exports.genericTank],
	LABEL: 'Director',
	STAT_NAMES: statNames.drone,
	DANGER: 5,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		FOV: 1.05
	},
	MAX_CHILDREN: 6,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.overseer = {
	PARENT: [exports.genericTank],
	LABEL: 'Overseer',
	DANGER: 6,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	MAX_CHILDREN: 8,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.overlord = {
	PARENT: [exports.genericTank],
	LABEL: 'Overlord',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 8,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.master = {
	PARENT: [exports.genericTank],
	LABEL: 'Master',
	FACING_TYPE: 'autospin',
	STAT_NAMES: statNames.drone,
	DANGER: 7,
	//MAX_CHILDREN: 18,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.75,
		FOV: 1.125
	},
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 6
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 120, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 6
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 240, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master]),
			TYPE: [exports.drone, {
				INDEPENDENT: true
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 6
		}
	}]
};
exports.overtrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Overtrapper',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [6, 11, 1.2, 8, 0, 125, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [6, 11, 1.2, 8, 0, 235, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.banshee = {
	PARENT: [exports.genericTank],
	LABEL: 'Banshee',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [10, 8, 0, 0, 80, 0],
		TYPE: exports.bansheeGun
	}, {
		POSITION: [10, 8, 0, 120, 80, 0],
		TYPE: exports.bansheeGun
	}, {
		POSITION: [10, 8, 0, 240, 80, 0],
		TYPE: exports.bansheeGun
	}],
	GUNS: [{
		POSITION: [6, 11, 1.2, 8, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [6, 11, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [6, 11, 1.2, 8, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}]
};
exports.autoOverseer = makeAuto(exports.overseer);//Autoseer
exports.overgunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Overgunner',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [6, 11, 1.2, 8, 0, 125, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [6, 11, 1.2, 8, 0, 235, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [19, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.power, g.slow, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.power, g.slow, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}]
};
exports.cruiser = {
	PARENT: [exports.genericTank],
	LABEL: 'Cruiser',
	DANGER: 6,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.autoCruiser = makeAuto(exports.cruiser);
exports.battleship = {
	PARENT: [exports.genericTank],
	LABEL: 'Battleship',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELARATION: base.ACCEL * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.carrier = {
	PARENT: [exports.genericTank],
	LABEL: 'Carrier',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELARATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.95,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: [exports.swarm, {
				//CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: [exports.swarm, {
				//CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: [exports.swarm, {
				//CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.fortress = {
	PARENT: [exports.genericTank],
	LABEL: 'Fortress',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_more_damage]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 120, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_more_damage]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 240, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_more_damage]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 60, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 300, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.underseer = {
	PARENT: [exports.genericTank],
	LABEL: 'Underseer',
	DANGER: 6,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	SHAPE: 4,
	MAX_CHILDREN: 14,
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}]
};
exports.autoUnderseer = makeAuto(exports.underseer);
exports.necromancer = {
	PARENT: [exports.genericTank],
	LABEL: 'Necromancer',
	DANGER: 7,
	STAT_NAMES: statNames.necro,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	SHAPE: 4,
	FACING_TYPE: 'autospin',
	MAX_CHILDREN: 15,
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.double_reload]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 4,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.double_reload]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 4,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}]
};
exports.factory = {
	PARENT: [exports.genericTank],
	LABEL: 'Factory',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 6,
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.01, 15.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [4, 14, 1, 8, 0, 0, 0]
	}]
};
exports.machine = {
	PARENT: [exports.genericTank],
	LABEL: 'Machine Gun',
	DANGER: 5,
	GUNS: [{
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoMachine = makeAuto(exports.machine, 'Auto-Machine');
exports.spray = {
	PARENT: [exports.genericTank],
	LABEL: 'Sprayer',
	DANGER: 7,
	GUNS: [{
		POSITION: [23, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.low_power, g.mach]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
			TYPE: exports.bullet
		}
	}]
};
exports.mini = {
	PARENT: [exports.genericTank],
	LABEL: 'Minigun',
	DANGER: 6,
	BODY: {
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [21, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 8, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoMini = makeAuto(exports.mini);
exports.stream = {
	PARENT: [exports.genericTank],
	LABEL: 'Streamliner',
	DANGER: 7,
	BODY: {
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [23, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 8, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 8, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 8, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}]
};
exports.hybridMini = makeHybrid(exports.mini, 'Cropduster');
exports.minitrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Barricade',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.3, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.destroyer = {
	PARENT: [exports.genericTank],
	LABEL: 'Destroyer',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoDestroy = makeAuto(exports.destroyer);
exports.annihilator = {
	PARENT: [exports.genericTank],
	LABEL: 'Annihilator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
			TYPE: exports.bullet
		}
	}]
};
exports.hiveShooter = {
	PARENT: [exports.genericTank],
	LABEL: 'Swarmer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.8,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [14, 14, -1.2, 5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive, g.faster]),
			TYPE: exports.hive
		}
	}, {
		POSITION: [15, 12, 1, 5, 0, 0, 0]
	}]
};
exports.hybrid = makeHybrid(exports.destroyer, 'Hybrid');
exports.shotgun = {
	PARENT: [exports.genericTank],
	LABEL: 'Shotgun',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [4, 3, 1, 11, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 3, 1, 13, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 2, 1, 13, 2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 2, 1, 13, -2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [15, 14, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [8, 14, -1.3, 4, 0, 0, 0]
	}]
};
exports.builder = {
	PARENT: [exports.genericTank],
	LABEL: 'Builder',
	DANGER: 6,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block]),
			TYPE: exports.block
		}
	}]
};
exports.engineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Engineer',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 14, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
			TYPE: exports.pillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [5, 14, 1, 7, 0, 0, 0]
	}]
};
exports.construct = {
	PARENT: [exports.genericTank],
	LABEL: 'Constructor',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	STAT_NAMES: statNames.trap,
	GUNS: [{
		POSITION: [18, 18, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 18, 1.2, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
			TYPE: exports.block
		}
	}]
};
exports.autoBuilder = makeAuto(exports.builder);
exports.boomer = {
	PARENT: [exports.genericTank],
	LABEL: 'Boomer',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [5, 10, 1, 14, 0, 0, 0]
	}, {
		POSITION: [6, 10, -1.5, 7, 0, 0, 0]
	}, {
		POSITION: [2, 10, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.bit_more_damage]),
			TYPE: exports.boomerang
		}
	}]
};
exports.artillery = {
	PARENT: [exports.genericTank],
	DANGER: 6,
	LABEL: 'Artillery',
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.autoArtillery = makeAuto(exports.artillery);
exports.mortar = {
	PARENT: [exports.genericTank],
	LABEL: 'Mortar',
	DANGER: 7,
	GUNS: [{
		POSITION: [13, 3, 1, 0, -8, -7, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [13, 3, 1, 0, 8, 7, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, -6, -7, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.skimmer = {
	PARENT: [exports.genericTank],
	LABEL: 'Skimmer',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [10, 14, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [17, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
			TYPE: exports.missile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
var spreadshotProps = {
	SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
	TYPE: [exports.bullet, {
		LABEL: 'Secondary'
	}]
};
exports.spread = {
	PARENT: [exports.genericTank],
	LABEL: 'Spreadshot',
	DANGER: 7,
	GUNS: [{
		POSITION: [13, 4, 1, 0, -0.8, -75, 0.833],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14.5, 4, 1, 0, -1, -60, 0.667],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, -1.6, -45, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -2.4, -30, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -3, -15, 0.167],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 4, 1, 0, 0.8, 75, 0.833],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14.5, 4, 1, 0, 1, 60, 0.667],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1.6, 45, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 2.4, 30, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 3, 15, 0.167],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 8.5, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.flank = {
	PARENT: [exports.genericTank],
	LABEL: 'Flank Guard',
	DANGER: 5,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.hexa = {
	PARENT: [exports.genericTank],
	LABEL: 'Hexa Tank',
	DANGER: 6,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.autohexa = makeAuto(exports.hexa);
exports.octo = {
	PARENT: [exports.genericTank],
	LABEL: 'Octo Tank',
	DANGER: 7,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 315, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.hexaTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Hexa Trapper',
	DANGER: 7,
	SHAPE: 6,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.8
	},
	STAT_NAMES: statNames.trap,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [15, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 120, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 240, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.tri = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Angle',
	DANGER: 6,
	BODY: {
		HEALTH: base.HEALTH * 0.8,
		SHIELD: base.SHIELD * 0.8,
		DENSITY: base.DENSITY * 0.6
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.booster = {
	PARENT: [exports.genericTank],
	LABEL: 'Booster',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.6,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.fighter = {
	PARENT: [exports.genericTank],
	LABEL: 'Fighter',
	BODY: {
		DENSITY: base.DENSITY * 0.6
	},
	DANGER: 7,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [16, 8, 1, 0, -1, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Side'
		}
	}, {
		POSITION: [16, 8, 1, 0, 1, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Side'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.surfer = {
	PARENT: [exports.genericTank],
	LABEL: 'Surfer',
	DANGER: 7,
	BODY: {
		DENSITY: base.DENSITY * 0.6
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.bomber = {
	PARENT: [exports.genericTank],
	LABEL: 'Bomber',
	DANGER: 7,
	BODY: {
		DENSITY: base.DENSITY * 0.6
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 130, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.less_power]),
			TYPE: exports.bullet,
			LABEL: 'Wing'
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 230, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.less_power]),
			TYPE: exports.bullet,
			LABEL: 'Wing'
		}
	}, {
		POSITION: [14, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autotri = makeAuto(exports.tri);
exports.falcon = {
	PARENT: [exports.genericTank],
	LABEL: 'Falcon',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload, g.bit_more_damage]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Assassin'
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.auto3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Auto-3',
	DANGER: 6,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [11, 8, 0, 120, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [11, 8, 0, 240, 190, 0],
		TYPE: exports.auto3gun
	}]
};
exports.auto5 = {
	PARENT: [exports.genericTank],
	LABEL: 'Auto-5',
	DANGER: 7,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 190, 0],
		TYPE: exports.auto5gun
	}, {
		POSITION: [11, 8, 0, 72, 190, 0],
		TYPE: exports.auto5gun
	}, {
		POSITION: [11, 8, 0, 144, 190, 0],
		TYPE: exports.auto5gun
	}, {
		POSITION: [11, 8, 0, 216, 190, 0],
		TYPE: exports.auto5gun
	}, {
		POSITION: [11, 8, 0, 288, 190, 0],
		TYPE: exports.auto5gun
	}]
};
exports.heavy3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Mega-3',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.95
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [14, 8, 0, 0, 190, 0],
		TYPE: exports.heavy3gun
	}, {
		POSITION: [14, 8, 0, 120, 190, 0],
		TYPE: exports.heavy3gun
	}, {
		POSITION: [14, 8, 0, 240, 190, 0],
		TYPE: exports.heavy3gun
	}]
};
exports.builder3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Architect',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.05
	},
	STAT_NAMES: statNames.trap,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 190, 0],
		TYPE: exports.builder3gun
	}, {
		POSITION: [12, 8, 0, 120, 190, 0],
		TYPE: exports.builder3gun
	}, {
		POSITION: [12, 8, 0, 240, 190, 0],
		TYPE: exports.builder3gun
	}]	
};
exports.sniper3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Sniper-3',
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	DANGER: 7,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [13, 8, 0, 0, 170, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [13, 8, 0, 120, 170, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [13, 8, 0, 240, 170, 0],
		TYPE: exports.sniper3gun
	}]
};
exports.machine3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Machine-3',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [13, 8, 0, 0, 190, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [13, 8, 0, 120, 190, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [13, 8, 0, 240, 190, 0],
		TYPE: exports.machine3gun
	}]
};
exports.trishot3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Triple Shot-3',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [13, 8, 0, 0, 170, 0],
		TYPE: exports.trishot3gun
	}, {
		POSITION: [13, 8, 0, 120, 170, 0],
		TYPE: exports.trishot3gun
	}, {
		POSITION: [13, 8, 0, 240, 170, 0],
		TYPE: exports.trishot3gun
	}]
};
exports.auto4 = {
	PARENT: [exports.genericTank],
	LABEL: 'Auto-4',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [13, 6, 0, 45, 160, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [13, 6, 0, 135, 160, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [13, 6, 0, 225, 160, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [13, 6, 0, 315, 160, 0],
		TYPE: exports.auto4gun
	}]
};
exports.flankTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Trap Guard',
	DANGER: 6,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.guntrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Gunner Trapper',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [19, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tons_more_recoil, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tons_more_recoil, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [13, 11, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 11, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.half_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.snipeGuard = {
	PARENT: [exports.genericTank],
	LABEL: 'Snipe Guard',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.2
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [24, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flank, g.more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.twinBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Builder',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0]
	}, {
		POSITION: [2, 8, 1.1, 18, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.low_power]),
			TYPE: exports.block
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5]
	}, {
		POSITION: [2, 8, 1.1, 18, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.low_power]),
			TYPE: exports.block
		}
	}]
};
var mothershipProps = {
	MAX_CHILDREN: 2,
	SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
	TYPE: exports.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	STAT_CALCULATOR: gunCalcNames.drone,
	WAIT_TO_CYCLE: true
};
var mothershipAutoProps = {
	MAX_CHILDREN: 2,
	SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
	TYPE: [exports.drone, {
		AI: {
			skynet: true
		},
		INDEPENDENT: true
	}],
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	STAT_CALCULATOR: gunCalcNames.drone,
	WAIT_TO_CYCLE: true
};
exports.mothership = {
	PARENT: [exports.genericTank],
	LABEL: 'Mothership',
	MAX_CHILDREN: 32,
	DANGER: 8,
	SHAPE: 16,
	SIZE: 30,
	STAT_NAMES: statNames.drone,
	BODY: {
		REGEN: 0.001,
		ACCELERATION: 0.5,
		SPEED: 1,
		HEALTH: 1000,
		PUSHABILITY: 0.15,
		DENSITY: 0.2
	},
	GUNS: [{
		POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 45, 0.0625],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, 0.9375],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 90, 0.125],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, 0.875],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 135, 0.1875],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, 0.8125],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 180, 0.25],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, 0.75],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 225, 0.3125],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, 0.6875],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 270, 0.375],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, 0.625],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 315, 0.4375],
		PROPERTIES: mothershipAutoProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, 0.5625],
		PROPERTIES: mothershipProps
	}, {
		POSITION: [4.3, 3.1, 1.2, 8, 0, 360, 0.5],
		PROPERTIES: mothershipAutoProps
	}]
};
exports.arenaCloser = {
	PARENT: [exports.genericTank],
	LABEL: 'Arena Closer',
	DANGER: 10,
	SIZE: 34,
	COLOR: 13,
	LAYER: 13,
	BODY: {
		SHIELD: 1e6,
		REGEN: 1e6,
		HEALTH: 1e6,
		DENSITY: 30,
		DAMAGE: 1e4,
		FOV: 1.15,
		SPEED: 8
	},
	GUNS: [{
		POSITION: [14, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}],
	DIES_TO_TEAM_BASE: false,
	DRAW_HEALTH: false,
	HITS_OWN_TYPE: 'never',
	DONT_HIT_OBSTACLES: true
};
exports.dominator = {
	PARENT: [exports.genericTank],
	LABEL: 'Dominator',
	DANGER: 10,
	SIZE: 30,
	BODY: {
		RESIST: 100,
		SPEED: 1.32,
		ACCELERATION: 0.8,
		HEALTH: 225,
		DAMAGE: 8,
		PENETRATION: 0.25,
		FOV: 0.7,
		PUSHABILITY: 0,
		HETERO: 0,
		SHIELD: base.SHIELD * 1.25,
		REGEN: base.REGEN * 0.75
	},
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 360, 0],
		TYPE: exports.dominationBody
	}],
	GIVE_KILL_MESSAGE: true
};
exports.destroyerDominator = {
	PARENT: [exports.dominator],
	GUNS: [{
		POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dominator]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0]
	}]
};
exports.gunnerDominator = {
	PARENT: [exports.dominator],
	GUNS: [{
		POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gun_dominator]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gun_dominator]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15.85, 3, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gun_dominator]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
	}]
};
exports.trapperDominator = {
	PARENT: [exports.dominator],
	STAT_NAMES: statNames.trap,
	FACING_TYPE: 'autospin',
	GUNS: [{
		POSITION: [4, 3.75, 1, 8, 0, 0, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 45, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 90, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 135, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 180, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 225, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 270, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 3.75, 1, 8, 0, 315, 0]
	}, {
		POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator]),
			TYPE: exports.trap
		}
	}]
};
var droneDominatorProps = {
	SHOOT_SETTINGS: combineStats([g.drone, g.drone_dominator]),
	TYPE: exports.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	STAT_CALCULATOR: gunCalcNames.drone,
	WAIT_TO_CYCLE: true,
	MAX_CHILDREN: 3
};
exports.droneDominator = {
	PARENT: [exports.dominator],
	FACING_TYPE: 'autospin',
	GUNS: [{
		POSITION: [3.75, 4, 1.2, 8.5, 0, 0, 0],
		PROPERTIES: droneDominatorProps
	}, {
		POSITION: [3.75, 4.45, -1.6, 7.2, 0, 0, 0]
	}, {
		POSITION: [3.75, 4, 1.2, 8.5, 0, 60, 0.167],
		PROPERTIES: droneDominatorProps
	}, {
		POSITION: [3.75, 4.45, -1.6, 7.2, 0, 60, 0]
	}, {
		POSITION: [3.75, 4, 1.2, 8.5, 0, 120, 0.333],
		PROPERTIES: droneDominatorProps
	}, {
		POSITION: [3.75, 4.45, -1.6, 7.2, 0, 120, 0]
	}, {
		POSITION: [3.75, 4, 1.2, 8.5, 0, 180, 0.5],
		PROPERTIES: droneDominatorProps
	}, {
		POSITION: [3.75, 4.45, -1.6, 7.2, 0, 180, 0]
	}, {
		POSITION: [3.75, 4, 1.2, 8.5, 0, 240, 0.667],
		PROPERTIES: droneDominatorProps
	}, {
		POSITION: [3.75, 4.45, -1.6, 7.2, 0, 240, 0]
	}, {
		POSITION: [3.75, 4, 1.2, 8.5, 0, 300, 0.833],
		PROPERTIES: droneDominatorProps
	}, {
		POSITION: [3.75, 4.45, -1.6, 7.2, 0, 300, 0]
	}]
};
exports.sentry = {
	PARENT: [exports.genericTank],
	LABEL: 'Sentry',
	DANGER: 5,
	SHAPE: 3,
	COLOR: 5,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 0.95,
		ACCELARATION: base.ACCEL * 0.95
	},
	MOTION_TYPE: 'motor',
	FACING_TYPE: 'locksFacing',
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.sentrySwarm = {
	PARENT: [exports.sentry],
	LABEL: 'Sentry',
	GUNS: [{
		POSITION: [7, 14, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.more_recoil]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', {
	type: exports.heavyGunSentry,
	size: 12
});
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', {
	type: exports.sentryTrapTurret,
	size: 12
});
exports.sentryRanger = makeAuto(exports.sentry, 'Sentry', {
	type: exports.autoRangerGun,
	size: 12
});
exports.eliteSprayer = {
	PARENT: [exports.genericTank],
	LABEL: 'Elite Sprayer',
	SHAPE: 3,
	SIZE: 20,
	DANGER: 10,
	COLOR: 5,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.25,
		ACCELARATION: base.ACCEL * 0.75,
		HEALTH: 1000,
		DAMAGE: base.DAMAGE * 1.25
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [14, 6, 0, 180, 190, 0],
		TYPE: [exports.spray, {
			COLOR: 5,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [14, 6, 0, 60, 190, 0],
		TYPE: [exports.spray, {
			COLOR: 5,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [14, 6, 0, -60, 190, 0],
		TYPE: [exports.spray, {
			COLOR: 5,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}]
};
exports.eliteDestroyer = {
	PARENT: [exports.genericTank],
	LABEL: 'Elite Destroyer',
	SHAPE: 3,
	SIZE: 20,
	DANGER: 10,
	COLOR: 5,
	BODY: {
		FOV: 1.15,
		HEALTH: 2500,
		DAMAGE: base.DAMAGE * 1.5,
		SPEED: base.SPEED * 0.25,
		ACCELARATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [5, 16, 1, 6, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 16, 1, 6, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 16, 1, 6, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 180, 360, 0],
		TYPE: exports.crasherSpawner
	}, {
		POSITION: [11, 0, 0, 60, 360, 0],
		TYPE: exports.crasherSpawner
	}, {
		POSITION: [11, 0, 0, -60, 360, 0],
		TYPE: exports.crasherSpawner
	}, {
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: [exports.bigAuto3Gun, {
			COLOR: 5
		}]
	}]
};
var palisadeProps = {
	SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.less_reload]),
	TYPE: exports.demolishMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	MAX_CHILDREN: 1,
	SYNCS_SKILLS: true,
	WAIT_TO_CYCLE: true
};
exports.palisade = {
	PARENT: [exports.genericTank],
	LABEL: 'Palisade',
	SHAPE: 6,
	SIZE: 30,
	FACING_TYPE: 'autospin',
	DANGER: 8,
	COLOR: 19,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.15,
		RESIST: 50,
		SPEED: base.SPEED * 0.25,
		ACCELARATION: base.ACCEL * 0.5,
		HEALTH: 250, 
		DAMAGE: 10, 
		PENETRATION: 0.25, 
		PUSHABILITY: 0,
		HETERO: 0,
		SHIELD: base.SHIELD * 1.25,
		REGEN: base.REGEN * 0.15
	},
	GUNS: [{
		POSITION: [4, 6, -1.6, 8, 0, 0, 0],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 60, 0.5],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 120, 0],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 180, 0.5],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 240, 0],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 300, 0.5],
		PROPERTIES: palisadeProps
	}],
	TURRETS: [{
		POSITION: [5, 10, 0, 30, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 90, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 150, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 210, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 270, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 330, 0, 0],
		TYPE: exports.trapTurret
	}]
};
exports.eliteGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Elite Gunner',
	SHAPE: 3,
	SIZE: 20,
	DANGER: 10,
	COLOR: 5,
	BODY: {
		FOV: 1.15,
		HEALTH: base.HEALTH * 15,
		SHIELD: base.SHIELD * 1.5,
		DAMAGE: base.DAMAGE * 1.5,
		SPEED: base.SPEED * 0.25,
		ACCELARATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [14, 16, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 16, 1.5, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: [exports.pillbox, {
				INDEPENDENT: false,
				CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster', 'canRepel'],
			}]
		}
	}, {
		POSITION: [6, 14, -2, 2, 0, 60, 0]
	}, {
		POSITION: [6, 14, -2, 2, 0, 300, 0]
	}],
	TURRETS: [{
		POSITION: [14, 8, 0, 60, 180, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [14, 8, 0, 300, 180, 0],
		TYPE: exports.auto4gun
	}]
};
exports.testbed_parent = {
	PARENT: [exports.genericTank],
	LABEL: '',
	DANGER: 8,
	BODY: {
		SHIELD: 15,
		REGEN: 5,
		HEALTH: 15,
		DAMAGE: 5,
		DENSITY: 15,
		FOV: 1.25,
		SPEED: base.SPEED * 1.15
	},
	GUNS: [{
		POSITION: [18, 10, -1.4, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.testbed]),
			TYPE: exports.bullet,
		}
	}]
};
exports.testbed = {
	PARENT: [exports.testbed_parent],
	LABEL: 'TESTBED',
	RESET_UPGRADES: true,
	SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
};
exports.testbed_boss = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Bosses'
};
exports.testbed_boss_2 = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Page 2'
};
exports.testbed_boss_3 = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Page 3'
};
exports.testbed_dominator = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Dominators'
};
exports.testbed_sentry = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Sentries'
};
exports.testbed_misc = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Miscellaneous'
};
exports.testbed_misc_2 = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Page 2'
};
exports.testbed_beta_tanks = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Beta Tanks'
};
exports.testbed_beta_tanks_2 = {
	PARENT: [exports.testbed_parent],
	LABEL: 'Page 2'
};
exports.testbed_X_K_X_bosses = {
	PARENT: [exports.testbed_parent],
	LABEL: 'X-K-X Bosses'
};
exports.blitzkrieg = makeAuto({//dreadnought
	PARENT: [exports.genericTank],
	DANGER: 8,
	SHAPE: 3,
	COLOR: 19,
	BODY: {
		FOV: 1.25,
		HEALTH: 750,
		SHIELD: base.SHIELD * 1.25,
		REGEN: base.REGEN * 1.25,
		SPEED: base.SPEED * 0.5,
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [15, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.dread_trap]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [12, 4, 1, 0, -23, 15, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dread]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 4, 1, 0, 23, -15, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dread]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 4, 1, 0, -18, 15, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dread]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 4, 1, 0, 18, -15, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.dread]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 6, 1, 1, 3.5, 75, 0]
	}, {
		POSITION: [24, 6, 1, 1, -3.5, -75, 0]
	}]
}, 'Blitzkrieg', {
	type: exports.bigAuto3Gun,
	size: 10
});
exports.defender = {
	PARENT: [exports.genericTank],
	LABEL: 'Defender',
	SIZE: 20,
	DANGER: 8,
	SHAPE: 3,
	COLOR: 2,
	COLOR_OVERRIDE: 13,
	BODY: {
		FOV: 1.15,
		HEALTH: 3500,
		DAMAGE: base.DAMAGE * 1.25,
		REGEN: base.REGEN * 0.75,
		SPEED: base.SPEED * 0.35,
		ACCELARATION: base.ACCEL * 0.4
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [4.85, 6.7, 0, 0, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [4.85, 6.7, 0, 120, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [4.85, 6.7, 0, 240, 360, 1],
		TYPE: exports.defenderGun
	}],
	GUNS: [{
		POSITION: [15, 7, 1, -2, 0, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 13, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, -2, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, -2, 0, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 13, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
var hurricaneProps = {
	SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.stronger]),
	TYPE: exports.bullet
};
exports.hurricane = {
	PARENT: [exports.genericTank],
	LABEL: 'Hurricane',
	DANGER: 7,
	GUNS: [{
		POSITION: [15, 3.5, 1, 0, 0, 0, 0],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 30, 0.167],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 60, 0.333],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 90, 0.5],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 120, 0.667],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 150, 0.833],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 180, 0],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 210, 0.167],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 240, 0.333],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 300, 0.667],
		PROPERTIES: hurricaneProps
	}, {
		POSITION: [15, 3.5, 1, 0, 0, 330, 0.833],
		PROPERTIES: hurricaneProps
	}]
};
exports.octogeddon = {
	PARENT: [exports.genericTank],
	LABEL: 'Octogeddon',
	SIZE: 22,
	SHAPE: 8,
	DANGER: 8,
	BODY: {
		HEALTH: 2750,
		DAMAGE: base.DAMAGE * 1.25,
		REGEN: base.REGEN * 0.75,
		SPEED: base.SPEED * 0.3,
		ACCELARATION: base.ACCEL * 0.5
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [6, 4.7, 0, 0, 360, 1],
		TYPE: exports.superHeavyGun
	}, {
		POSITION: [6, 4.7, 0, 120, 360, 1],
		TYPE: exports.superHeavyGun
	}, {
		POSITION: [6, 4.7, 0, 240, 360, 1],
		TYPE: exports.superHeavyGun
	}, {
		POSITION: [6, 9.75, 0, 0, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 45, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 90, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 135, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 180, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 225, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 270, 0, 0],
		TYPE: exports.octogeddonTurret
	}, {
		POSITION: [6, 9.75, 0, 315, 0, 0],
		TYPE: exports.octogeddonTurret
	}]
};
exports.weirdSpikeBody1 = {
	LABEL: '',
	CONTROLLERS: ['fastSpin'],
	COLOR: 9,
	SHAPE: 3,
	INDEPENDENT: true
};
exports.weirdSpikeBody2 = {
	LABEL: '',
	CONTROLLERS: ['reverseSpin'],
	COLOR: 9,
	SHAPE: 3,
	INDEPENDENT: true
};
exports.weirdSpike = {
	PARENT: [exports.genericTank],
	LABEL: 'Weird Spike',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		DAMAGE: base.DAMAGE * 1.1,
		SPEED: base.SPEED * 1.05,
		DENSITY: base.DENSITY * 2
	},
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher,
	TURRETS: [{
		POSITION: [20.5, 0, 0, 0, 360, 0],
		TYPE: exports.weirdSpikeBody1
	}, {
		POSITION: [20.5, 0, 0, 180, 360, 0],
		TYPE: exports.weirdSpikeBody2
	}]
};
exports.quadTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Quad Builder',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 45, 0]
	}, {
		POSITION: [2, 6, 1.1, 14, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
			TYPE: exports.block
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 135, 0]
	}, {
		POSITION: [2, 6, 1.1, 14, 0, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
			TYPE: exports.block
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 225, 0]
	}, {
		POSITION: [2, 6, 1.1, 14, 0, 225, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
			TYPE: exports.block
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 315, 0]
	}, {
		POSITION: [2, 6, 1.1, 14, 0, 315, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap]),
			TYPE: exports.block
		}
	}]
};
exports.bentBoomer = {
	PARENT: [exports.genericTank],
	LABEL: 'Bent Boomer',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		ACCELERATION: base.ACCEL * 0.75,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [8, 10, 1, 8, -2, -35, 0]
	}, {
		POSITION: [8, 10, 1, 8, 2, 35, 0]
	}, {
		POSITION: [2, 10, 1.3, 16, -2, -35, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.bent, g.stronger]),
			TYPE: exports.boomerang
		}
	}, {
		POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.bent, g.stronger]),
			TYPE: exports.boomerang
		}
	}]
};
exports.ball = {
	PARENT: [exports.genericTank],
	LABEL: 'Ball',
	NAME: '',
	COLOR: 2,
	SIZE: 50,
	DAMAGE_EFFECTS: false,
	GIVE_KILL_MESSAGE: false,
	DRAW_HEALTH: false,
	ACCEPTS_SCORE: false,
	CAN_BE_ON_LEADERBOARD: false,
	HAS_NO_SKILL_POINTS: true,
	DIES_TO_TEAM_BASE: false,
	MOTION_TYPE: 'glideBall',
	BODY: {
		SHIELD: 1e6,
		REGEN: 1e6,
		HEALTH: 1e6,
		DAMAGE: 1e-4,
		PUSHABILITY: 10
	}
};
exports.skimBoss = {
	PARENT: [exports.genericTank],
	LABEL: 'Elite Skimmer',
	SIZE: 20,
	DANGER: 8,
	COLOR: 2,
	BODY: {
		HEALTH: 1000,
		SPEED: base.SPEED * 0.25,
		ACCELERATION: base.ACCEL * 0.5
	},
	SHAPE: 3,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [15, 5, 0, 60, 170, 0],
		TYPE: exports.skimTurret
	}, {
		POSITION: [15, 5, 0, 180, 170, 0],
		TYPE: exports.skimTurret
	}, {
		POSITION: [15, 5, 0, 300, 170, 0],
		TYPE: exports.skimTurret
	}]
};
exports.opAnnihilator = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 7,
	GUNS: [{
		POSITION: [18.25, 19.5, 1, 0, 0, -30, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.op_anni]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18.25, 19.5, 1, 0, 0, 30, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.op_anni]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 19.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.op_anni]),
			TYPE: exports.bullet
		}
	}]
}, 'OP Annihilator', {
	type: exports.machine3gun
});
exports.crasher = {
	TYPE: 'crasher',
	LABEL: 'Crasher',
	VALUE: 2,
	COLOR: 5,
	SHAPE: 3,
	SIZE: 5,
	VARIES_IN_SIZE: true,
	CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
	AI: {
		NO_LEAD: true
	},
	BODY: {
		SPEED: 5,
		ACCELERATION: 1.4,
		HEALTH: 0.5,
		DAMAGE: 5,
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
	GUNS: [],
	TURRETS: []
};
exports.sentryAI = {
	PARENT: [exports.genericTank],
	TYPE: 'crasher',
	LABEL: 'Sentry',
	DANGER: 6,
	COLOR: 5,
	SHAPE: 3,
	SIZE: 10,
	SKILL: setSkill(7, 0, 9, 1, 7, 7, 5, 0, 6, 0),
	VALUE: 2000,
	VARIES_IN_SIZE: true,
	CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
	AI: {
		NO_LEAD: true
	},
	BODY: {
		FOV: 0.5,
		ACCELERATION: 0.75,
		SPEED: base.SPEED * 0.5
	},
	MOTION_TYPE: 'motor',
	FACING_TYPE: 'smoothToTarget',
	HITS_OWN_TYPE: 'hard',
	HAS_NO_MASTER: true,
	DRAW_HEALTH: true,
	GIVE_KILL_MESSAGE: true
};
exports.sentrySwarmAI = {
	PARENT: [exports.sentryAI],
	GUNS: [{
		POSITION: [7, 14, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.more_recoil]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.sentryGunAI = makeAuto(exports.sentryAI, 'Sentry', {
	type: exports.heavyGunSentry,
	size: 12
});
exports.sentryTrapAI = makeAuto(exports.sentryAI, 'Sentry', {
	type: exports.sentryTrapTurret,
	size: 12
});
exports.sentryRangerAI = makeAuto(exports.sentryAI, 'Sentry', {
	type: exports.autoRangerGun,
	size: 12
});
exports.miniboss = {
	PARENT: [exports.genericTank],
	TYPE: 'miniboss',
	DANGER: 8,
	SKILL: setSkill(3, 9, 2, 7, 5, 7, 6, 0, 6, 6),
	LEVEL: 45,
	CONTROLLERS: ['nearestDifferentMaster', 'minion'/*, 'fleeAtLowHealth'*/, 'canRepel'],
	AI: {
		NO_LEAD: true
	},
	FACING_TYPE: 'autospin',
	HITS_OWN_TYPE: 'hard'
};
exports.elite = {
	PARENT: [exports.miniboss],
	LABEL: 'Elite',
	COLOR: 5,
	SHAPE: 3,
	SIZE: 20,
	VARIES_IN_SIZE: true,
	VALUE: 15e4,
	SKILL: setSkill(0, 9, 5, 9, 9, 9, 5, 0, 0, 0),
	BODY: {
		FOV: 1.25,
		SPEED: base.SPEED * 0.1,
		HEALTH: base.HEALTH * 7,
		DAMAGE: base.DAMAGE * 2.5
	}
};
exports.eliteDestroyerAI = {
	PARENT: [exports.elite],
	LABEL: 'Elite Destroyer',
	GUNS: [{
		POSITION: [5, 16, 1, 6, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.more_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 16, 1, 6, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.more_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 16, 1, 6, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.more_power]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 180, 360, 0],
		TYPE: exports.crasherSpawner
	}, {
		POSITION: [11, 0, 0, 60, 360, 0],
		TYPE: exports.crasherSpawner
	}, {
		POSITION: [11, 0, 0, -60, 360, 0],
		TYPE: exports.crasherSpawner
	}, {
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: [exports.bigAuto3Gun, {
			INDEPENDENT: true,
			COLOR: 5
		}]
	}],
	BROADCAST_MESSAGE: 'An Elite Destroyer has been killed!'
};
exports.eliteGunnerAI = {
	PARENT: [exports.elite],
	LABEL: 'Elite Gunner',
	FACING_TYPE: 'smoothToTarget',
	GUNS: [{
		POSITION: [14, 16, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 16, 1.5, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: [exports.pillbox, {
				INDEPENDENT: true
			}]
		}
	}, {
		POSITION: [6, 14, -2, 2, 0, 60, 0]
	}, {
		POSITION: [6, 14, -2, 2, 0, 300, 0]
	}],
	AI: {
		NO_LEAD: false
	},
	TURRETS: [{
		POSITION: [14, 8, 0, 60, 180, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [14, 8, 0, 300, 180, 0],
		TYPE: exports.auto4gun
	}],
	BROADCAST_MESSAGE: 'An Elite Gunner has been killed!'
};
exports.arenaCloserAI = {
	PARENT: [exports.genericTank],
	LABEL: 'Arena Closer',
	DANGER: 20,
	NAME: 'Arena Closer',
	HITS_OWN_TYPE: 'hard',
	SIZE: 70,
	COLOR: 3,
	LAYER: 13,
	VARIES_IN_SIZE: true,
	SKILL: setSkill(0, 0, 0, 9, 9, 9, 0, 0, 0, 0),
	BODY: {
		SHIELD: 1e6,
		REGEN: 1e5,
		HEALTH: 1e6,
		DAMAGE: 50,
		DENSITY: 0.1,
		FOV: 10,
		SPEED: 8,
		PUSHABILITY: 0
	},
	AI: {},
	GUNS: [{
		POSITION: [14, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer_ai]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}],
	IS_ARENA_CLOSER: true,
	CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal', 'spinWhileIdle'],
	DRAW_HEALTH: false,
	CAN_GO_OUTSIDE_ROOM: true,
	CAN_BE_ON_LEADERBOARD: false,
	ACCEPTS_SCORE: false,
	DIES_TO_TEAM_BASE: false,
	GOD_MODE: true,
	DONT_HIT_OBSTACLES: true,
	BROADCAST_MESSAGE: 'An Arena Closer died? lol I think something broke...'
};
exports.fallenBooster = {
	PARENT: [exports.genericTank],
	LABEL: 'Fallen Booster',
	DANGER: 8,
	BODY: {
		HEALTH: 1000,
		REGEN: base.REGEN * 0.5,
		ACCELARATION: base.ACCEL * 0.5,
		PUSHABILITY: 0.4
	},
	COLOR: 18,
	SIZE: 22,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}],
	SKILL: setSkill(2, 2, 5, 3, 2, 3, 7, 2, 0, 0),
	HAS_NO_SKILL_POINTS: true
};
exports.fallenBoosterAI = {
	PARENT: [exports.fallenBooster],
	TYPE: 'miniboss',
	FACING_TYPE: 'smoothToTarget',
	LEVEL: 45,
	VALUE: 5e4,
	CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
	AI: {
		skynet: true
	},
	BROADCAST_MESSAGE: 'A Fallen Booster has been killed!'
};
exports.sent = {
	PARENT: [exports.genericTank],
	LABEL: 'Sentinel',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: 4.2,
		FOV: 1.1
	},
	SHAPE: 4,
	GUNS: [{
		POSITION: [32, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet,
			ALT_FIRE: true
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro,
			MAX_CHILDREN: 10
		}
	}]
};
exports.seek = {
	PARENT: [exports.genericTank],
	LABEL: 'Seeker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.95,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [19, 8, 1, 0, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.more_speed]),
			TYPE: exports.bullet
		}
	}]
};
exports.chimera = {
	PARENT: [exports.genericTank],
	LABEL: 'Chimera',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
			TYPE: [exports.drone, {
				INDEPENDENT: true
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: false,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autoMatonGun = {
	LABEL: '',
	SHAPE: 4,
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [26, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoMaton = {
	PARENT: [exports.genericTank],
	LABEL: 'Automaton',
	DANGER: 7,
	BODY: {
		FOV: 1.2
	},
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 90, 0],
		TYPE: exports.autoMatonGun
	}]
};
exports.pellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Pelleter',
	DANGER: 5,
	GUNS: [{
		POSITION: [17, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.hewnPellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Hewn Pelleter',
	DANGER: 6,
	GUNS: [{
		POSITION: [17, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 1.95, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 1.95, 1, -2.7, 2, 22.5, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, -2.7, -2, -22.5, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.sail = {
	PARENT: [exports.genericTank],
	LABEL: 'Sailor',
	DANGER: 6,
	GUNS: [{
		POSITION: [17, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 5, 0.6, 6, 5.5, 15.2, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.bigger, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 5, 0.6, 6, -5.5, -15.2, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.bigger, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.borer = {
	PARENT: [exports.genericTank],
	LABEL: 'Borer',
	DANGER: 6,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [22, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.punt = {
	PARENT: [exports.genericTank],
	LABEL: 'Punt Gun',
	DANGER: 6,
	GUNS: [{
		POSITION: [18, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, 0, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.steamroll = {
	PARENT: [exports.genericTank],
	LABEL: 'Steamroller',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [10, 14, 1.01, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.steam]),
			TYPE: exports.bullet
		}
	}]
};
exports.eliteTwin = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 8,
	COLOR: 5,
	SHAPE: 3,
	SIZE: 18,
	BODY: {
		SPEED: 1.75,
		HEALTH: 1250,
		DAMAGE: 6,
		REGEN: 0.019
	},
	GUNS: [{
		POSITION: [16, 8, 1, -5.5, 7, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.no_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, -5.5, -7, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.no_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 12, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_third_reload, g.smaller]),
			TYPE: exports.bullet
		}
	}]
}, 'Elite Twin', {
	type: exports.twinAuto,
	size: 12,
	angle: 0
});
exports.eliteTrap = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 8,
	COLOR: 5,
	SHAPE: 3,
	SIZE: 18,
	FACING_TYPE: 'autospin',
	BODY: {
		SPEED: 1.75,
		HEALTH: 1250,
		DAMAGE: 6,
		REGEN: 0.019
	},
	GUNS: [{
		POSITION: [7.1, 7, 1, 7.9, 9.75, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 9.75, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, -9.75, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, -9.75, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, 9.75, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 9.75, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, -9.75, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, -9.75, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, 9.75, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 9.75, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, -10, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, -10, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [3, 13, 0, 0, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [3, 13, 0, 120, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [3, 13, 0, 240, 360, 1],
		TYPE: exports.defenderGun
	}]
}, 'Elite Trapper', {
	type: exports.constructAuto,
	independent: false,
	size: 13.5
});
exports.derogator = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 8,
	COLOR: 2,
	SHAPE: 16,
	SIZE: 30,
	FACING_TYPE: 'spinSlowly',
	BODY: {
		SPEED: 1.5,
		ACCELERATION: base.ACCEL * 0.75,
		HEALTH: 1250,
		SHIELD: 6,
		DAMAGE: 4,
		REGEN: 0.021
	},
	TURRETS: [{
		POSITION: [3.75, 10, 0, 0, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 22.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 45, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 67.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 90, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 112.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 135, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 157.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 180, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 202.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 225, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 247.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 270, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 292.5, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 315, 45, 0],
		TYPE: exports.derogatorGun
	}, {
		POSITION: [3.75, 10, 0, 337.5, 45, 0],
		TYPE: exports.derogatorGun
	}]
}, 'Derogator', {
	type: exports.superHeavyGun,
	size: 6
});
exports.marauder = {
	PARENT: [exports.genericTank],
	LABEL: 'Marauder',
	DANGER: 7,
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.lib = {
	PARENT: [exports.genericTank],
	LABEL: 'Liberator',
	DANGER: 7,
	BODY: {
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [28, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 10, 0, 360, 0],
		TYPE: exports.borerAutoGun
	}, {
		POSITION: [11, 0, -10, 0, 360, 0],
		TYPE: exports.borerAutoGun
	}]
};
exports.twinAuto2 = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.95
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [16, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.autoTurret3 = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 0.95
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [21.5, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto_turret, g.bit_less_damage]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.basicAutoBullet = makeAuto(exports.bullet, 'Intercepting Bullet', {
	type: exports.autoTurret3
});
exports.interceptBasicGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [22, 8.25, 1, 0, 0, 0, 0],
	}]
};
exports.intercept = {
	PARENT: [exports.genericTank],
	LABEL: 'Interceptor',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.basicAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptBasicGun
	}]
};
var eliteMachineProps = {
	SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.lower_power, g.more_damage]),
	TYPE: exports.bullet
};
exports.eliteMachine = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 8,
	COLOR: 5,
	SHAPE: 3,
	SIZE: 18,
	BODY: {
		SPEED: 1.75,
		HEALTH: 1250,
		DAMAGE: 6,
		REGEN: 0.01875
	},
	GUNS: [{
		POSITION: [5, 3.5, 1.4, 8, -10, 60, 0],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 10, 60, 0.25],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -3.5, 60, 0.5],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 3.5, 60, 0.75],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -10, 180, 0],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 10, 180, 0.25],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -3.5, 180, 0.5],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 3.5, 180, 0.75],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -10, 300, 0],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 10, 300, 0.25],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -3.5, 300, 0.5],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 3.5, 300, 0.75],
		PROPERTIES: eliteMachineProps
	}]
}, 'Elite Machine', {
	type: exports.autoPound,
	size: 12
});
exports.eliteBorer = makeAuto({
	PARENT: [exports.genericTank],
	SIZE: 18,
	DANGER: 8,
	SHAPE: 3,
	COLOR: 5,
	BODY: {
		SPEED: 1.75,
		HEALTH: 1250,
		DAMAGE: 6,
		REGEN: 0.01875
	},
	GUNS: [{
		POSITION: [17.5, 1.5, 1, 0, 1.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 1.5, 1, 0, -1.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 15.25, 1.3, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_third_reload, g.smaller, g.smaller]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [12, 7, 0, 60, 190, 0],
		TYPE: exports.borerAutoGun
	}, {
		POSITION: [12, 7, 0, 300, 190, 0],
		TYPE: exports.borerAutoGun
	}]
}, 'Elite Borer', {
	type: exports.eliteBorerAuto,
	size: 12,
	x: 0.85
});
exports.vulcan = {
	PARENT: [exports.genericTank],
	LABEL: 'Vulcan',
	DANGER: 7,
	GUNS: [{
		POSITION: [30, 1.5, 1, 0, -4.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.9],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 1.5, 1, 0, 0, 0, 0.7],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 16, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5, 16, 1, 20, 0, 0, 0]
	}]
};
var hexadecagorGuns = (delay, a) => {
	return [{
		POSITION: [2.2, 2.25, 1, 9, 0, a, 0]
	}, {
		POSITION: [0.5, 2.25, 1.7, 11.5, 0, a, delay],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_dominator, g.one_third_reload, g.lower_power]),
			TYPE: exports.trap
		}
	}];
};
exports.hexadecagor = {
	PARENT: [exports.genericTank],
	LABEL: 'Hexadecagor',
	FACING_TYPE: 'spinSlowly',
	SIZE: 30,
	SHAPE: 16,
	DANGER: 8,
	COLOR: 2,
	BODY: {
		HEALTH: 2500,
		SPEED: 1.31,
		ACCELARATION: 0.8,
		FOV: 0.85
	},
	STAT_NAMES: statNames.generic,
	GUNS: [],
	TURRETS: [{
		POSITION: [4.85, 6.5, 0, 0, 360, 1],
		TYPE: exports.superHeavyGun
	}, {
		POSITION: [4.85, 6.5, 0, 90, 360, 1],
		TYPE: exports.superHeavyGun
	}, {
		POSITION: [4.85, 6.5, 0, 180, 360, 1],
		TYPE: exports.superHeavyGun
	}, {
		POSITION: [4.85, 6.5, 0, 270, 360, 1],
		TYPE: exports.superHeavyGun
	}]
};
exports.shift = {
	PARENT: [exports.genericTank],
	LABEL: 'Shifter',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 12, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.more_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.cannon = {
	PARENT: [exports.genericTank],
	LABEL: 'Cannon',
	DANGER: 7,
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6.25, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double_reload, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6.25, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double_reload, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Pounder'
		}
	}]
};
exports.twinSniper = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Sniper',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [22, 7.75, 1, 0, 5.625, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.bit_less_damage, g.less_reload, g.bit_more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 7.75, 1, 0, -5.625, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.bit_less_damage, g.less_reload, g.bit_more_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.volcano = {
	PARENT: [exports.genericTank],
	LABEL: 'Volcano',
	DANGER: 7,
	GUNS: [{
		POSITION: [23.5, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23.5, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
			TYPE: exports.bullet
		}
	}]
};
exports.fallenOverlord = {
	PARENT: [exports.genericTank],
	LABEL: 'Fallen Overlord',
	DANGER: 8,
	STAT_NAMES: statNames.drone,
	SIZE: 22,
	COLOR: 18,
	MAX_CHILDREN: 28,
	FACING_TYPE: 'spinSlowly',
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: 1.32,
		FOV: 1.1,
		HEALTH: 1500
	},
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 180, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.fallenOverlordAI = {
	PARENT: [exports.fallenOverlord],
	LEVEL: 45,
	TYPE: 'miniboss',
	CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
	AI: {
		NO_LEAD: true
	},
	BODY: {
		FOV: 1,
		RANGE: 50
	},
	SKILL: setSkill(0, 0, 9, 6, 6, 6, 9, 0, 0, 0),
	VALUE: 6e4,
	BROADCAST_MESSAGE: 'A Fallen Overlord has been killed!'
};
exports.rotoMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Roto Missile',
	FACING_TYPE: 'turnWithSpeed',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 0, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 90, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 270, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.demoman = {
	PARENT: [exports.genericTank],
	LABEL: 'Demoman',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [14, 10, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.one_third_reload, g.low_damage]),
			TYPE: exports.rotoMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [11, 12, -1.5, 3, 0, 0, 0]
	}]
};
exports.k = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 8,
	BODY: {
		DENSITY: 0.125,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [27, 7.5, 1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 7.5, -1.55, 18, 0, 0, 0]
	}, {
		POSITION: [10.6, 11.85, -1.35, 7, 0, 0, 0]
	}],
	TURRETS: [{
		POSITION: [11, 10, 0, 270, 360, 0],
		TYPE: exports.sniper
	}, {
		POSITION: [11, 10, 0, 90, 360, 0],
		TYPE: exports.borerAutoGun
	}]
}, 'k', {
	type: exports.tripleAuto,
	size: 13.75,
	angle: 0
});
exports.hotshot = {
	PARENT: [exports.genericTank],
	LABEL: 'Hot Shot',
	DANGER: 7,
	BODY: {
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [22, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini]),
			TYPE: exports.bullet
		}
	}]
};
var demolisherProps = {
	SHOOT_SETTINGS: combineStats([g.trap, g.dem_trap]),
	TYPE: exports.trap,
	AUTOFIRE: true
};
exports.demolisher = {
	PARENT: [exports.genericTank],
	LABEL: 'Demolisher',
	SHAPE: 6,
	COLOR: 21,
	SIZE: 40,
	DANGER: 8,
	FACING_TYPE: 'autospin2',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.96,
		SPEED: 1.3,
		ACCELERATION: 0.4,
		HEALTH: 1500
	},
	HAS_NO_SKILL_POINTS: true,
	SKILL: setSkill(5, 5, 9, 7, 7, 7, 9, 9, 5, 5),
	GUNS: [{
		POSITION: [4, 2.5, 1, 7, 3, 0, 0]
	}, {
		POSITION: [1, 2.5, 1.7, 11, 3, 0, 0],
		PROPERTIES: demolisherProps
	}, {
		POSITION: [4, 2.5, 1, 7, -3, 0, 0]
	}, {
		POSITION: [1, 2.5, 1.7, 11, -3, 0, 0.5],
		PROPERTIES: demolisherProps
	}, {
		POSITION: [4, 2.5, 1, 7, 3, 120, 0]
	}, {
		POSITION: [1, 2.5, 1.7, 11, 3, 120, 0],
		PROPERTIES: demolisherProps
	}, {
		POSITION: [4, 2.5, 1, 7, -3, 120, 0]
	}, {
		POSITION: [1, 2.5, 1.7, 11, -3, 120, 0.5],
		PROPERTIES: demolisherProps
	}, {
		POSITION: [4, 2.5, 1, 7, 3, 240, 0]
	}, {
		POSITION: [1, 2.5, 1.7, 11, 3, 240, 0],
		PROPERTIES: demolisherProps
	}, {
		POSITION: [4, 2.5, 1, 7, -3, 240, 0]
	}, {
		POSITION: [1, 2.5, 1.7, 11, -3, 240, 0.5],
		PROPERTIES: demolisherProps
	}],
	TURRETS: [{
		POSITION: [1.3, 6.05, 0, 0, 0, 1],
		TYPE: exports.demolishBody2
	}, {
		POSITION: [1.3, 6.05, 0, 120, 0, 1],
		TYPE: exports.demolishBody2
	}, {
		POSITION: [1.3, 6.05, 0, 240, 0, 1],
		TYPE: exports.demolishBody2
	}, {
		POSITION: [5, 6, 0, 0, 144, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [5, 6, 0, 120, 144, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [5, 6, 0, 240, 144, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [21.15, 0, 0, 0, 0, 0],
		TYPE: exports.demolishBody1
	}, {
		POSITION: [16, 1, 0, 60, 0, 0],
		TYPE: exports.demolishFactory
	}, {
		POSITION: [16, 1, 0, 180, 0, 0],
		TYPE: exports.demolishFactory
	}, {
		POSITION: [16, 1, 0, 300, 0, 0],
		TYPE: exports.demolishFactory
	}]
};
exports.pentaTrap = {
	PARENT: [exports.trap],
	SHAPE: -5
};
exports.levi5gun = {
	PARENT: [exports.auto3gun],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.levi_five]),
			TYPE: exports.bullet
		}
	}]
};
exports.leviathan = makeAuto({
	PARENT: [exports.genericTank],
	SHAPE: 5,
	COLOR: 14,
	SIZE: 30,
	FACING_TYPE: 'autospin',
	DANGER: 8,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.86,
		HEALTH: 2000,
		SHIELD: base.SHIELD * 1.3,
		DAMAGE: base.DAMAGE * 1.5,
		SPEED: base.SPEED * 0.2,
		ACCELARATION: base.ACCEL * 0.5
	},
	GUNS: [{
		POSITION: [3, 8.9, 1.05, 8, 0, 36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.levi]),
			TYPE: exports.pentaTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [3, 8.9, 1.05, 8, 0, 108, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.levi]),
			TYPE: exports.pentaTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [3, 8.9, 1.05, 8, 0, 180, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.levi]),
			TYPE: exports.pentaTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [3, 8.9, 1.05, 8, 0, 252, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.levi]),
			TYPE: exports.pentaTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [3, 8.9, 1.05, 8, 0, 324, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.levi]),
			TYPE: exports.pentaTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [3.25, 9.85, 0, 0, 190, 1],
		TYPE: exports.levi5gun
	}, {
		POSITION: [3.25, 9.85, 0, 72, 190, 1],
		TYPE: exports.levi5gun
	}, {
		POSITION: [3.25, 9.85, 0, 144, 190, 1],
		TYPE: exports.levi5gun
	}, {
		POSITION: [3.25, 9.85, 0, 216, 190, 1],
		TYPE: exports.levi5gun
	}, {
		POSITION: [3.25, 9.85, 0, 288, 190, 1],
		TYPE: exports.levi5gun
	}]
}, 'Leviathan', {
	type: exports.superHeavyGun,
	size: 7,
	independent: true
});
exports.stalk = {
	PARENT: [exports.genericTank],
	LABEL: 'Stalker',
	DANGER: 7,
	INVISIBLE: [0.08, 0.03, 0.02],
	BODY: {
		ACCELERATION: base.ACCEL * 0.55,
		SPEED: base.SPEED * 0.85,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [25, 8.5, -1.75, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet
		}
	}]
};
exports.landmine = {
	PARENT: [exports.genericTank],
	LABEL: 'Landmine',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 1.1,
		DENSITY: 1
	},
	INVISIBLE: [0.08, 0.01, 0.02],
	TURRETS: [{
		POSITION: [21.5, 0, 0, 0, 360, 0],
		TYPE: exports.smasherBody
	}, {
		POSITION: [21.5, 0, 0, 90, 360, 0],
		TYPE: exports.landmineBody
	}],
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher
};
exports.manager = {
	PARENT: [exports.genericTank],
	LABEL: 'Manager',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85,
		FOV: 1.1
	},
	INVISIBLE: [0.08, 0.03, 0.02],
	MAX_CHILDREN: 8,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.more_reload, g.half_recoil]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.sunburst = {
	PARENT: [exports.genericTank],
	LABEL: 'Sunburst',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.95
	},
	GUNS: [{
		POSITION: [19, 3, 1, 0, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, 2, -20, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, -2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, 2, 20, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 3, 1, 0, -2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	},{
		POSITION: [22, 3, 1, 0, 2, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}]
};
exports.jumpSmash = {
	PARENT: [exports.genericTank],
	LABEL: 'Jump Smasher',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 1.1,
		DENSITY: 1
	},
	TURRETS: [{
		POSITION: [24, 0, 0, 0, 360, 0],
		TYPE: exports.jumpSmashBody
	}],
	GUNS: [{
		POSITION: [2, 2, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.jump]),
			TYPE: [exports.bullet, {
				ALPHA: 0
			}]
		}
	}],
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.autosmash
};
exports.littleFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Spawner',
	DANGER: 6,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [1, 12, 1.01, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 12, 1, 8, 0, 0, 0]
	}]
};
exports.sniperFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Sniper Spawner',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [1, 12, 1.01, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory]),
			TYPE: exports.sniperMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 12, -1.15, 8, 0, 0, 0]
	}]
};
exports.bulwark = {
	PARENT: [exports.genericTank],
	LABEL: 'Bulwark',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 5.5, 190, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 5.5, 190, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.less_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, -5.5, 170, 0.5]
	}, {
		POSITION: [4, 8, 1.7, 13, -5.5, 170, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.less_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.machineFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Machine Spawner',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [1, 12, 1.01, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory]),
			TYPE: exports.machineMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 10.75, 1.15, 8, 0, 0, 0]
	}]
};
exports.deathStar = {
	PARENT: [exports.genericTank],
	LABEL: 'Death Star',
	DANGER: 8,
	SIZE: 15,
	COLOR: 27,
	GUNS: [{
		POSITION: [17, 16, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 16, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 16, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 16, 1, 0, 0, 60, 0.05],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 16, 1, 0, 0, 180, 0.05],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 16, 1, 0, 0, 300, 0.05],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.blaster = {
	PARENT: [exports.genericTank],
	LABEL: 'Blaster',
	DANGER: 6,
	BODY: {
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [9, 10, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast]),
			TYPE: exports.bullet
		}
	}]
};
exports.bentBlaster = {
	PARENT: [exports.genericTank],
	LABEL: 'Bent Blaster',//Tri-Blaster
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [9, 10, 1.6, 8, 2, 16, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 10, 1.6, 8, -2, -16, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 10, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.gatling = {
	PARENT: [exports.genericTank],
	LABEL: 'Gatling Gun',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.85,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [16, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
			TYPE: exports.bullet
		}
	}]
};
exports.charger = {
	PARENT: [exports.genericTank],
	LABEL: 'Charger',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [8, 0.1, -55, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.fake]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.charge]),
			TYPE: [exports.bullet, {
				MOTION_TYPE: 'accelerate'
			}]
		}
	}]
};
exports.guardian = {
	PARENT: [exports.genericTank],
	LABEL: 'Guardian',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 5,
	SIZE: 20,
	MAX_CHILDREN: 24,
	STAT_NAMES: statNames.drone,
	SKILL: setSkill(4, 4, 9, 6, 6, 6, 9, 1, 1, 1),
	BODY: {
		FOV: 1.25,
		HEALTH: 3000,
		REGEN: 0.0038,
		SPEED: 1.58,
		ACCELERATION: 1.04
	},
	HAS_NO_SKILL_POINTS: true,
	GUNS: [{
		POSITION: [6, 12, 1.25, 6, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.more_recoil, g.guardian]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'hangOutNearMaster'],
				HITS_OWN_TYPE: 'hard',
				DIES_TO_TEAM_BASE: false
			}],
			STAT_CALCULATOR: gunCalcNames.swarm,
			AUTOFIRE: true
		}
	}]
};
exports.summoner = {
	PARENT: [exports.genericTank],
	LABEL: 'Summoner',
	DANGER: 7,
	STAT_NAMES: statNames.necro,
	COLOR: 13,
	SIZE: 22,	
	COLOR_OVERRIDE: 32,
	SKILL: setSkill(2, 2, 4, 8, 8, 8, 9, 1, 2, 2),
	HAS_NO_SKILL_POINTS: true,
	DIES_TO_TEAM_BASE: false,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: 1.32,
		FOV: 1.1,
		HEALTH: 3000,
		REGEN: 0.0063
	},
	SHAPE: 4,
	FACING_TYPE: 'spinSlowly',
	MAX_CHILDREN: 28,
	GUNS: [{
		POSITION: [3.5, 8.65, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [3.5, 8.65, 1.2, 8, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [3.5, 8.65, 1.2, 8, 0, 180, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.twinBlaster = {
	PARENT: [exports.genericTank],
	LABEL: 'Dual Blaster',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [9, 10, 1.6, 12, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 10, 1.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.fast, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.carnivore = {
	PARENT: [exports.genericTank],
	LABEL: 'Carnivore',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.275
	},
	GUNS: [{
		POSITION: [26, 7, 1, 4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.hunter, g.hunter2]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 11, 1, 4, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.hunter, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.1, 11, -1.6, 4.9, 0, 0, 0]
	}]
};
exports.split = {
	PARENT: [exports.genericTank],
	LABEL: 'Split',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [17, 2.5, 1, 0, 2, 10, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2.5, 1, 0, -3, 10, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.6, 7, 0, 10, 0]
	}, {
		POSITION: [17, 2.5, 1, 0, 3, -10, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2.5, 1, 0, -2, -10, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.6, 7, 0, -10, 0]
	}, {
		POSITION: [17, 2.5, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2.5, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.less_reload, g.pound, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.6, 7, 0, 0, 0]
	}]
};
exports.shuriken = {
	PARENT: [exports.genericTank],
	LABEL: 'Shuriken',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [10, 8, 0, 0, 80, 0],
		TYPE: exports.bansheeGun
	}, {
		POSITION: [10, 8, 0, 120, 80, 0],
		TYPE: exports.bansheeGun
	}, {
		POSITION: [10, 8, 0, 240, 80, 0],
		TYPE: exports.bansheeGun
	}],
	GUNS: [{
		POSITION: [14, 9, 1, 0, 0, 60, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 300, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.heatMissile = {
	PARENT: [exports.swarm],
	LABEL: 'Heat Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 200
	},
	SHAPE: 3,
	GUNS: [],
	TURRETS: []
};
exports.array = {
	PARENT: [exports.genericTank],
	LABEL: 'Array',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [20, 8.5, 1, 0, 5, 35, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.heatMissile
		}
	}, {
		POSITION: [3, 16, 1, 17, 5, 35, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8.5, 1, 0, -5, 325, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.heatMissile
		}
	}, {
		POSITION: [3, 16, 1, 17, -5, 325, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 8.5, 1, 0, 4, 20, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.heatMissile
		}
	}, {
		POSITION: [3, 16, 1, 21, 4, 20, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 8.5, 1, 0, -4, 340, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.heatMissile
		}
	}, {
		POSITION: [3, 16, 1, 21, -4, 340, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.half_recoil, g.half_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.sheller = {
	PARENT: [exports.genericTank],
	LABEL: 'Sheller',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [17, 3, 1, 0, -7.5, -5, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 7.5, 5, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty, g.less_damage, g.bit_more_reload]),
			TYPE: exports.bullet,
			LABEL: 'Destroyer'
		}
	}]
};
exports.battery = {
	PARENT: [exports.genericTank],
	LABEL: 'Battery',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [18, 3.25, 1, 0, -2.55, 0, 0],
		PROPERTIES: { 
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 3.25, 1, 0, 2.55, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 3.25, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, { 
		POSITION: [12, 2, 1, 0, 3.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 2, 1, 0, -3.5, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.25, 2, 1, 0, 2.25, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.25, 2, 1, 0, -2.25, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.5, 2, 1, 0, 0, 0, 0.50],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.less_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.musket = {
	PARENT: [exports.genericTank],
	LABEL: 'Musketeer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.95,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.more_power, g.not_dense, g.more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 1.5, 1, 11, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.more_power, g.not_dense, g.more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [4, 2, 1, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.more_power, g.not_dense, g.more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [1, 2, 1, 12, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.more_power, g.not_dense, g.more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [1, 2.5, 1, 11, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.more_power, g.not_dense, g.more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [15, 4, 1, 6, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 4, 1, 6, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 7, -1.3, 0, 0, 180, 0]
	}, {
		POSITION: [4, 12, 1.7, 17, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.more_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.swarmAssassin = {
	PARENT: [exports.genericTank],
	LABEL: 'Guardsman',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 8, 0.6, 10, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.fatCruiser = {
	PARENT: [exports.genericTank],
	LABEL: 'Frigate',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [9, 12, 0.6, 5, 3, 25, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [9, 12, 0.6, 5, -3, -25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.half = {
	PARENT: [exports.genericTank],
	LABEL: "Half N' Half",
	DANGER: 7,
	HAS_NO_RECOIL: true,
	BODY: {
		SPEED: base.SPEED * 0.85,
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [9, 10, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
			TYPE: exports.bullet
		}
	}]
};
exports.twinMinion = {
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [17, 7.75, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 7.75, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion]),
			TYPE: exports.bullet
		}
	}]
};
exports.nailer = makeAuto({
	PARENT: [exports.genericTank],
	DANGER: 8,
	FACING_TYPE: 'spinSlowly',
	BODY: {
		FOV: 1.25,
		SPEED: 1.32,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1750,
		SHIELD: 16,
		DAMAGE: 6
	},
	SIZE: 25,
	COLOR: 3,
	SHAPE: 4,
	GUNS: [{
		POSITION: [0, 8, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.twinMinion,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 4
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			AUTOFIRE: true,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			AUTOFIRE: true,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			AUTOFIRE: true,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			AUTOFIRE: true,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [10, 10, 0, 45, 180, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [10, 10, 0, 135, 180, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [10, 10, 0, -135, 180, 0],
		TYPE: exports.auto4gun
	}, {
		POSITION: [10, 10, 0, -45, 180, 0],
		TYPE: exports.auto4gun
	}]
}, 'Nailer', {
	type: exports.bigAuto3Gun,
	size: 11
});
exports.bigTriAuto3Gun = {
	LABEL: '',
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [14, 5, 1, 0, -4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, -4.5, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, 4.5, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 5, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, -4.5, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, 4.5, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 5, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoCrasherSpawner = {
	PARENT: [exports.genericTank],
	LABEL: 'Spawned',
	STAT_NAMES: statNames.drone,
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	COLOR: 16,
	MAX_CHILDREN: 8,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.less_reload, g.one_third_reload]),
			TYPE: [exports.autoSwarm, {
				LABEL: 'Crasher',
				VARIES_IN_SIZE: true,
				DRAW_HEALTH: true
			}],
			SYNCS_SKILLS: true,
			AUTOFIRE: true,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.ultimateDestroyer = {
	PARENT: [exports.genericTank],
	LABEL: 'Ultimate',
	FACING_TYPE: 'autospin',
	DANGER: 8,
	COLOR: 5,
	SHAPE: 6,
	SIZE: 40,
	BODY: {
		FOV: 1.2,
		SPEED: 1.32,
		ACCELERATION: 0.72,
		HEALTH: 2000,
		SHIELD: 10,
		DAMAGE: 6
	},
	GUNS: [{
		POSITION: [7, 11, 1, 6, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 11, 1, 6, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 11, 1, 6, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 8, 1.7, 11, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.one_fourth_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [11, 8, 1, 0, 0, 120, 0]
	}, {
		POSITION: [2, 8, 1.7, 11, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.one_fourth_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [11, 8, 1, 0, 0, 240, 0]
	}, {
		POSITION: [2, 8, 1.7, 11, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.one_fourth_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 180, 120, 0],
		TYPE: exports.autoCrasherSpawner
	}, {
		POSITION: [11, 0, 0, 60, 120, 0],
		TYPE: exports.autoCrasherSpawner
	}, {
		POSITION: [11, 0, 0, 300, 120, 0],
		TYPE: exports.autoCrasherSpawner
	}, {
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.bigTriAuto3Gun
	}]
};
exports.pounder = {
	PARENT: [exports.genericTank],
	LABEL: 'Pounder',
	DANGER: 5,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
			TYPE: exports.bullet
		}
	}]
};
exports.flankPound = {
	PARENT: [exports.genericTank],
	LABEL: 'Flank Pounder',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.78
	},
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.insect = {
	PARENT: [exports.genericTank],
	LABEL: 'Insect',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 245, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 295, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 115, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 65, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.heavyQuad = {
	PARENT: [exports.genericTank],
	LABEL: 'Terminator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.bigSniper3Gun = {
	LABEL: '',
	BODY: {
		FOV: 4
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [27, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound, g.auto, g.snipe3, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 12, -1.5, 5, 0, 0, 0]
	}]
};
exports.eliteSniper = {
	PARENT: [exports.genericTank],
	LABEL: 'Elite Sniper',
	DANGER: 8,
	FACING_TYPE: 'autospin',
	COLOR: 5,
	SHAPE: 3,
	SIZE: 18,
	BODY: {
		SPEED: 1.75,
		HEALTH: 1000,
		DAMAGE: 6,
		REGEN: 0.0125
	},
	TURRETS: [{
		POSITION: [11, 6, 0, 180, 190, 0],
		TYPE: exports.bigSniper3Gun
	}, {
		POSITION: [11, 6, 0, 60, 190, 0],
		TYPE: exports.bigSniper3Gun
	}, {
		POSITION: [11, 6, 0, -60, 190, 0],
		TYPE: exports.bigSniper3Gun
	}]
};
exports.flamethrow = {
	PARENT: [exports.genericTank],
	LABEL: 'Flamethrower',
	DANGER: 7,
	GUNS: [{
		POSITION: [3, 18, -1.2, 14, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.flame]),
			TYPE: [exports.bullet, {
				MOTION_TYPE: 'grow',
				HITS_OWN_TYPE: 'hard'
			}]
		}
	}, {
		POSITION: [7, 14, 1.85, 7, 0, 0, 0]
	}]
};
exports.weirdBoomerTurret = {
	LABEL: 'Mega Boomer',
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [5, 10, 1, 14, 0, 0, 0]
	}, {
		POSITION: [2.25, 10, -1.5, 12, 0, 0, 0]
	}, {
		POSITION: [12, 15, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 10, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.pound, g.less_reload, g.bit_bigger]),
			TYPE: exports.boomerang
		}
	}]
};
exports.boomerAutoTurret = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [5, 10, 1, 14, 0, 0, 0]
	}, {
		POSITION: [6, 10, -1.5, 7, 0, 0, 0]
	}, {
		POSITION: [2, 10, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.one_third_reload]),
			TYPE: exports.boomerang
		}
	}]
};
exports.cutter = {
	PARENT: [exports.genericTank],
	LABEL: 'Cutter',
	DANGER: 8,
	FACING_TYPE: 'autospin',
	COLOR: 5,
	SHAPE: -5,
	SIZE: 28,
	BODY: {
		FOV: 1.15,
		SPEED: 0.53,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 400,
		SHIELD: 16,
		DAMAGE: 9
	},
	TURRETS: [{
		POSITION: [7, 8, 0, 36, 190, 0],
		TYPE: exports.boomerAutoTurret
	}, {
		POSITION: [7, 8, 0, 108, 190, 0],
		TYPE: exports.boomerAutoTurret
	}, {
		POSITION: [7, 8, 0, 252, 190, 0],
		TYPE: exports.boomerAutoTurret
	}, {
		POSITION: [7, 8, 0, 180, 190, 0],
		TYPE: exports.boomerAutoTurret
	}, {
		POSITION: [7, 8, 0, 324, 190, 0],
		TYPE: exports.boomerAutoTurret
	}, {
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.weirdBoomerTurret
	}]
};
exports.clover = {
	PARENT: [exports.genericTank],
	LABEL: 'Clover',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 6.5, 1, 0, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 6.5, 1, 0, 0, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 6.5, 1, 0, 0, 225, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 6.5, 1, 0, 0, 315, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 6.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4.5, 6.5, 2.65, 14, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.bigger, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 6.5, 1, 0, 0, 90, 0]
	}, {
		POSITION: [4.5, 6.5, 2.65, 14, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.bigger, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 6.5, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4.5, 6.5, 2.65, 14, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.bigger, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 6.5, 1, 0, 0, 270, 0]
	}, {
		POSITION: [4.5, 6.5, 2.65, 14, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.bigger, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.explosion = {
	PARENT: [exports.bullet],
	LABEL: 'Explosion',
	INDEPENDENT: true,
	BODY: {
		SPEED: 1,
		DENSITY: 5,
		RANGE: 100
	},
	GUNS: [{
		POSITION: [2, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.half_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 5, 1, 0, 0, 72, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.half_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 5, 1, 0, 0, 144, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.half_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 5, 1, 0, 0, 216, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.half_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 5, 1, 0, 0, 288, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.half_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.nuke = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [2, 12, 1, 0, 0, 0, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 40, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 80, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 120, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 160, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 200, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 240, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 280, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [2, 12, 1, 0, 0, 320, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.less_reload]),
			TYPE: [exports.explosion, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.corroder = {
	PARENT: [exports.genericTank],
	LABEL: 'Corroder',
	DANGER: 7,
	GUNS: [{
		POSITION: [14.5, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.more_speed]),
			TYPE: exports.nuke
		}
	}]
};
exports.silo = {
	PARENT: [exports.genericTank],
	LABEL: 'Silo',
	DANGER: 7,
	BODY: {
		FOV: 1.3,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [26, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8, -1.6, 8, 0, 0, 0]
	}]
};
exports.flankDestroy = {
	PARENT: [exports.genericTank],
	LABEL: 'Defeater',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.sandstm = {
	PARENT: [exports.genericTank],
	LABEL: 'Sandstorm',
	DANGER: 7,
	FACING_TYPE: 'autospin',
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 270, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.triCruiser = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Cruiser',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELARATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.slow, g.less_range]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.slow, g.less_range]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.slow, g.less_range]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.slow, g.less_range]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.slow, g.less_range]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.slow, g.less_range]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.bot = {
	ACCEPTS_SCORE: true,
	IS_BOT: true,
	FACING_TYPE: 'smoothToTarget',
	SIZE: 12,
	LEVEL: 45,
	CONTROLLERS: [/*'avoid', */'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'],
	AI: {
		STRAFE: true
	}
};
exports.bot2 = {
	ACCEPTS_SCORE: true,
	IS_BOT: true,
	FACING_TYPE: 'smoothToTarget',
	SIZE: 12,
	LEVEL: 45,
	CONTROLLERS: [/*'avoid', */'nearestDifferentMaster', 'mapTargetToGoal', 'fleeAtLowHealth2'],
	AI: {
		STRAFE: true
	}
};
exports.hunterAuto = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 5,
	GUNS: [{
		POSITION: [18, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15, 14, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.twinTrapAuto = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 7, 1, 0, 6, 0, 0]
	}, {
		POSITION: [2, 7, 1.1, 18, 6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.half_power, g.half_reload, g.bigger, g.less_range]),
			TYPE: exports.block
		}
	}, {
		POSITION: [18, 7, 1, 0, -6, 0, 0.5]
	}, {
		POSITION: [2, 7, 1.1, 18, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.half_power, g.half_reload, g.bigger, g.less_range]),
			TYPE: exports.block
		}
	}]
};
exports.predatorAuto = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [24, 6, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 9, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 15, 1, 0, 0, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 18, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoRangerGun2 = {
	LABEL: 'Ranger',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [28, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.legendaryCrasher = {
	PARENT: [exports.genericTank],
	LABEL: 'Legendary Crasher',
	DANGER: 9,
	SIZE: 50,
	COLOR: 5,
	SHAPE: 3,
	BODY: {
		SPEED: 1.31,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 3000,
		DAMAGE: 8,
		REGEN: base.REGEN * 0.5,
		FOV: 0.9
	},
	GUNS: [{
		POSITION: [4.35, 5, 1.5, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.75, 3.5, 1.5, 8, -8, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.75, 3.5, 1.5, 8, 8, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 0.6875, 1, 4, 2.05, 60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 0.6875, 1, 4, -2.45, 60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.25, 0.6875, 1, 4, 1.3, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.25, 0.6875, 1, 4, -1.7, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 0.6875, 1, 4, 0.55, 60, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 0.6875, 1, 4, -0.95, 60, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.75, 0.75, 1, 4, -0.2, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 0.75, 1, 4, -2.05, -60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 0.75, 1, 4, 2.45, -60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.25, 0.75, 1, 4, -1.3, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.25, 0.75, 1, 4, 1.7, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 0.75, 1, 4, -0.55, -60, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 0.75, 1, 4, 0.95, -60, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.75, 0.75, 1, 4, 0.2, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [4.5, 9.5, 3.25, 0, 190, 0],
		TYPE: exports.hunterAuto
	}, {
		POSITION: [4.5, 9.5, -3.25, 0, 190, 0],
		TYPE: exports.hunterAuto
	}, {
		POSITION: [4.5, -2.75, 10.25, 0, 190, 0],
		TYPE: exports.hunterAuto
	}, {
		POSITION: [4.5, -2.75, -10.25, 0, 190, 0],
		TYPE: exports.hunterAuto
	}, {
		POSITION: [2.85, 12.6, 0, 0, 120, 1],
		TYPE: exports.twinTrapAuto
	}, {
		POSITION: [2.85, 12.6, 0, 120, 120, 1],
		TYPE: exports.twinTrapAuto
	}, {
		POSITION: [2.85, 12.6, 0, 240, 120, 1],
		TYPE: exports.twinTrapAuto
	}, {
		POSITION: [3.5, -4, 6.1, 0, 360, 1],
		TYPE: exports.autoRangerGun2
	}, {
		POSITION: [3.5, -4, -6.1, 0, 360, 1],
		TYPE: exports.autoRangerGun2
	}, {
		POSITION: [8, 0, 0, 0, 360, 1],
		TYPE: exports.predatorAuto
	}]
};
exports.singleMinion = {
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [19, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.single]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.pentaAuto = {
	LABEL: '',
	BODY: {
		FOV: 2.75
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 8, 1, 0, -3, -20, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, 0, 3, 20, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, -2, -10, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 2, 10, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.awp_neph = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-Neph',
	DANGER: 9,
	SIZE: 30,
	COLOR: 19,
	BODY: {
		SPEED: 1.35,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 2000,
		DAMAGE: 4,
		REGEN: base.REGEN * 0.25,
		FOV: 0.9
	},
	TURRETS: [{
		POSITION: [3, 9.75, 0, 36, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [3, 9.75, 0, 60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [3, 9.75, 0, -36, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [3, 9.75, 0, -60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [5.75, 9.5, 0, 180, 190, 0],
		TYPE: exports.pentaAuto
	}, {
		POSITION: [5.75, 9.5, 0, 90, 225, 0],
		TYPE: exports.pentaAuto
	}, {
		POSITION: [5.75, 9.5, 0, 270, 225, 0],
		TYPE: exports.pentaAuto
	}, {
		POSITION: [5.5, 4.4, 0, 45, 120, 1],
		TYPE: [exports.tripleAuto, {
			CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
		}]
	}, {
		POSITION: [5.5, 4.4, 0, 135, 120, 1],
		TYPE: [exports.tripleAuto, {
			CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
		}]
	}, {
		POSITION: [5.5, 4.4, 0, 225, 120, 1],
		TYPE: [exports.tripleAuto, {
			CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
		}]
	}, {
		POSITION: [5.5, 4.4, 0, 315, 120, 1],
		TYPE: [exports.tripleAuto, {
			CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
		}]
	}],
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.a_lotta_damage, g.fast, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.222, 4.889, 1, 10.667, 0, 135, 0]
	}, {
		POSITION: [0.9, 6.222, 1, 12.889, 0, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.singleMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [5.778, 6.222, 1, 5.556, 0, 135, 0]
	}, {
		POSITION: [2.222, 4.889, 1, 10.667, 0, -135, 0]
	}, {
		POSITION: [0.9, 6.222, 1, 12.889, 0, -135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.singleMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [5.778, 6.222, 1, 5.556, 0, -135, 0]
	}]
};
exports.carrierAuto = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
	COLOR: 16,
	GUNS: [{
		POSITION: [7, 7, 0.7, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7, 0.7, 7, 2, 40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7, 0.7, 7, -2, -40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.cruiserAuto = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [14, 7, 0.6, 5, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bigger, g.half_reload, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 7, 0.6, 5, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bigger, g.half_reload, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.lamper = {
	PARENT: [exports.genericTank],
	LABEL: 'Hexaswarmer',
	DANGER: 9,
	SIZE: 35,
	COLOR: 22,
	SHAPE: -6,
	FACING_TYPE: 'spinSlowly',
	BODY: {
		SPEED: 1.25,
		ACCELERATION: 0.75,
		HEALTH: 2250,
		DAMAGE: 4,
		REGEN: base.REGEN * 0.25,
		FOV: 0.85
	},
	STAT_NAMES: statNames.drone,
	GUNS: [{
		POSITION: [6.25, 3.15, 0.5, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, 3.65, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, -3.65, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, 3.65, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, -3.65, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, 3.65, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.25, 3.15, 0.5, 7, -3.65, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [2, 7.65, 1.8, 9, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.smaller, g.smaller]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 10
		}
	}, {
		POSITION: [2, 7.65, 1.8, 9, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.smaller, g.smaller]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 10
		}
	}, {
		POSITION: [2, 7.65, 1.8, 9, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.smaller, g.smaller]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 10
		}
	}],
	TURRETS: [{
		POSITION: [6, 0, 0, 90, 360, 1],
		TYPE: exports.carrierAuto
	}, {
		POSITION: [4.15, 7.5, 0, 30, 120, 1],
		TYPE: exports.cruiserAuto
	}, {
		POSITION: [4.15, 7.5, 0, 90, 120, 1],
		TYPE: exports.cruiserAuto
	}, {
		POSITION: [4.15, 7.5, 0, 150, 120, 1],
		TYPE: exports.cruiserAuto
	}, {
		POSITION: [4.15, 7.5, 0, 210, 120, 1],
		TYPE: exports.cruiserAuto
	}, {
		POSITION: [4.15, 7.5, 0, 270, 120, 1],
		TYPE: exports.cruiserAuto
	}, {
		POSITION: [4.15, 7.5, 0, 330, 120, 1],
		TYPE: exports.cruiserAuto
	}]
};
exports.miniSpread = {
	PARENT: [exports.genericTank],
	LABEL: 'Spreadling',
	DANGER: 6,
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 8.5, 1.25, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.autoMiniSpread = makeAuto(exports.miniSpread);
exports.spreadbow = {
	PARENT: [exports.genericTank],
	LABEL: 'Spreadbow',
	DANGER: 7,
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, 135, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.much_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, 152.5, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.much_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 4, 1, 0, -2, 170, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.much_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 1, 225, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.much_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 207.5, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.much_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 4, 1, 0, 2, 190, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.much_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 7.5, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [13, 7, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.pelletAutoGun = {
	PARENT: [exports.auto3gun],
	LABEL: 'Pelleter',
	GUNS: [{
		POSITION: [17, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.pellet, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.pellet, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.autoPelletAutoGun = makeAuto(exports.pelletAutoGun);
exports.autoPelletAutoGun.SYNC_TURRET_SKILLS = true;
exports.marauderAutoGun = {
	PARENT: [exports.auto3gun],
	LABEL: 'Marauder',
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bullet,
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.half_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.half_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.cruiserAutoGun = {
	PARENT: [exports.auto3gun],
	LABEL: 'Cruiser',
	GUNS: [{
		POSITION: [8, 7.5, 0.65, 6, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 7.5, 0.65, 6, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.artilleryAutoGun = {
	LABEL: 'Artillery',
	BODY: {
		FOV: 2.5
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.pounderAutoGun = {
	PARENT: [exports.auto3gun],
	LABEL: 'Pounder',
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.one_fourth_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.pistonAutoGun = {
	PARENT: [exports.auto3gun],
	LABEL: 'Piston',
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.double_reload, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 5, 5, 205, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 5, -5, -205, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.pistonAutoGun2 = {
	PARENT: [exports.auto3gun],
	LABEL: 'Piston',
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 5, 5, 25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 5, -5, -25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.half_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.clock = {
	PARENT: [exports.genericTank],
	LABEL: 'C.L.O.C.K.',
	DANGER: 9,
	SHAPE: 12,
	SIZE: 55,
	COLOR: 2,//32
	FACING_TYPE: 'spinSlowly',
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: 1,
		ACCELERATION: 0.5,
		HEALTH: 2500,
		DAMAGE: 6,
		REGEN: base.REGEN * 0.75,
		FOV: 0.65
	},
	GUNS: [{
		POSITION: [13, 2, 1, 0, 0, -30, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 2, 1, 0, 0, -210, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [4.5, 0, 0, 0, 360, 1],
		TYPE: [exports.tripleAuto, {
			CONTROLLERS: ['nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.1, 8.5, 0, 15, 120, 1],
		TYPE: exports.marauderAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 105, 120, 1],
		TYPE: exports.marauderAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 195, 120, 1],
		TYPE: exports.marauderAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 285, 120, 1],
		TYPE: exports.marauderAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 45, 120, 1],
		TYPE: exports.autoPelletAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 135, 120, 1],
		TYPE: exports.autoPelletAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 225, 120, 1],
		TYPE: exports.autoPelletAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 315, 120, 1],
		TYPE: exports.autoPelletAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 75, 120, 1],
		TYPE: exports.pistonAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 165, 120, 1],
		TYPE: exports.pistonAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 255, 120, 1],
		TYPE: exports.pistonAutoGun
	}, {
		POSITION: [3.1, 8.5, 0, 345, 120, 1],
		TYPE: exports.pistonAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, 30, 120, 0],
		TYPE: exports.pounderAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, 210, 120, 0],
		TYPE: exports.pounderAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, 90, 120, 0],
		TYPE: exports.cruiserAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, 270, 120, 0],
		TYPE: exports.cruiserAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, -60, 120, 0],
		TYPE: exports.pelletAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, -240, 120, 0],
		TYPE: exports.pelletAutoGun
	}, {
		POSITION: [3.15, 10.1, 0, 0, 120, 0],
		TYPE: [exports.artilleryAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.15, 10.1, 0, 180, 120, 0],
		TYPE: [exports.artilleryAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.15, 10.1, 0, -120, 120, 0],
		TYPE: exports.pistonAutoGun2
	}, {
		POSITION: [3.15, 10.1, 0, -300, 120, 0],
		TYPE: exports.pistonAutoGun2
	}]
};
exports.griefer = {
	PARENT: [exports.genericTank],
	LABEL: 'Griefer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9
	},
	INVISIBLE: [0.08, 0.0075, 0.03],
	GUNS: [{
		POSITION: [21, 14, -1.25, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.halfReloadMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, -2, 130, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 2, 230, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.weirdAutoTurret = {
	LABEL: '',
	SHAPE: 4,
	COLOR: 16,
	GUNS: [{
		POSITION: [3, 6, 1.2, 7.5, 4.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, -4.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, 4.75, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, -4.75, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, 4.75, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, -4.75, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, 4.75, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [3, 6, 1.2, 7.5, -4.75, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.half_reload, g.half_damage]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}],
	TURRETS: [{
		POSITION: [16.75, 0, 0, 0, 360, 1],
		TYPE: exports.genericTank
	}]
};
exports.octagron = {
	PARENT: [exports.genericTank],
	LABEL: 'Octagron',
	DANGER: 8,
	SHAPE: 8,
	SIZE: 30,
	COLOR: 2,
	FACING_TYPE: 'spinSlowly',
	BODY: {
		SPEED: 1.32,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 2000,
		DAMAGE: 6,
		REGEN: base.REGEN * 0.5,
		FOV: 0.85
	},
	TURRETS: [{
		POSITION: [6.5, 9, 0, 45, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [6.5, 9, 0, 135, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [6.5, 9, 0, 225, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [6.5, 9, 0, 315, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [14.5, 0, 0, 0, 0, 1],
		TYPE: exports.weirdAutoTurret
	}],
	GUNS: [{
		POSITION: [13.75, 6.25, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.75, 6.25, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.75, 6.25, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.75, 6.25, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.nightseeker = {
	PARENT: [exports.genericTank],
	LABEL: 'Nightseeker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.25
	},
	INVISIBLE: [0.08, 0.01, 0.02],
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, -1.2, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
			TYPE: exports.bullet
		}
	}]
};
exports.sounder = {
	PARENT: [exports.genericTank],
	LABEL: 'Sounder',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.95,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [14, 7, 0.6, 7, 4.25, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.faster]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 7, 0.6, 7, -4.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.fast]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.fielder = {
	PARENT: [exports.genericTank],
	LABEL: 'Fielder',
	DANGER: 7,
	GUNS: [{
		POSITION: [12, 4, 1, 0, -0.6, -90, 0.857],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 4, 1, 0, -0.8, -75, 0.714],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14.5, 4, 1, 0, -1, -60, 0.571],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, -1, -45, 0.429],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -0.4, -30, 0.286],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 0, -15, 0.143],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [12, 4, 1, 0, 0.6, 90, 0.857],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 4, 1, 0, 0.8, 75, 0.714],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14.5, 4, 1, 0, 1, 60, 0.571],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.429],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 0.4, 30, 0.286],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 0, 15, 0.143],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 4, 1, 8, 0, 0, 0],
		PROPERTIES: spreadshotProps
	}]
};
exports.carnivoreAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [26, 7, 1, 4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.sniper, g.less_damage, g.one_fourth_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 11, 1, 4, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sniper, g.less_damage, g.one_fourth_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 10.5, -1.6, 6, 0, 0, 0]
	}]
};
exports.ultraCannon = {
	PARENT: [exports.genericTank],
	LABEL: 'Ultra Cannon',
	DANGER: 8,
	COLOR: 8,
	SIZE: 28,
	BODY: {
		SPEED: 1.5,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 750,
		DAMAGE: 6,
		REGEN: base.REGEN * 0.25,
		FOV: 0.95
	},
	GUNS: [{
		POSITION: [26, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 7, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 10, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 13, 1, 0, 0, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 16, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [4.5, 7.5, 0, 60, 180, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [4.5, 7.5, 0, 180, 180, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [4.5, 7.5, 0, 300, 180, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [5.5, 6.5, 0, 0, 120, 1],
		TYPE: exports.carnivoreAutoGun
	}, {
		POSITION: [5.5, 6.5, 0, 120, 120, 1],
		TYPE: exports.carnivoreAutoGun
	}, {
		POSITION: [5.5, 6.5, 0, 240, 120, 1],
		TYPE: exports.carnivoreAutoGun
	}, {
		POSITION: [5.5, 9.5, 0, 72, 180, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
		}]
	}, {
		POSITION: [5.5, 9.5, 0, 144, 120, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
		}]
	}, {
		POSITION: [5.5, 9.5, 0, -72, 180, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
		}]
	}, {
		POSITION: [5.5, 9.5, 0, -144, 120, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
		}]
	}]
};
exports.weirdGunnerAuto1 = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [15, 5, 1, 0, 6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 5, 1, 0, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.squareBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'MK-1',
	DANGER: 8,
	SHAPE: 4,
	COLOR: 13,
	SIZE: 24,
	BOSS_TIER_TYPE: 1,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.9,
		SPEED: 1.5,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 500
	},
	TURRETS: [{
		POSITION: [7.5, 0, 0, 180, 360, 1],
		TYPE: [exports.autoRangerGun2, {
			INDEPENDENT: true
		}]
	}],
	GUNS: [{
		POSITION: [21, 4.9, 1, 0, 3.25, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fast, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 4.9, 1, 0, -3.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fast, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 11.65, -1.5, 9.15, 0, 0, 0],
	}]
};
exports.hybridAutoGun = makeHybrid({
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
}, 'Hybrid');
exports.squareBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'MK-2',
	DANGER: 8,
	SHAPE: 4,
	COLOR: 13,
	SIZE: 26,
	BOSS_TIER_TYPE: 1,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.875,
		SPEED: 1.25,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1500,
		DAMAGE: 5,
		REGEN: 0.015
	},
	TURRETS: [{
		POSITION: [7.5, 4.65, 4.65, 180, 360, 1],
		TYPE: [exports.autoRangerGun2, {
			INDEPENDENT: true
		}]
	}, {
		POSITION: [7.5, 4.65, -4.65, 180, 360, 1],
		TYPE: [exports.autoRangerGun2, {
			INDEPENDENT: true
		}]
	}, {
		POSITION: [7.5, 4.65, 0, 0, 360, 1],
		TYPE: exports.hybridAutoGun
	}],
	GUNS: [{
		POSITION: [21, 4.9, 1, 0, 3.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fast, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 4.9, 1, 0, -3.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fast, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23.25, 4.9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fast, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 11.65, -1.5, 9.15, 0, 0, 0],
	}, {
		POSITION: [8.2, 5, 0.4, 7, 3.2, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8.2, 5, 0.4, 7, -3.2, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8.2, 5, 0.4, 7, -3.2, -90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8.2, 5, 0.4, 7, 3.2, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.twinAutoGun = {
	LABEL: 'Twin',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [20, 7.25, 1, 0, 5.875, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 7.25, 1, 0, -5.875, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.MK3_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 4,
	COLOR: 13,
	SIZE: 20,
	BODY: {
		FOV: 0.5,
		SPEED: 1.25,
		ACCELERATION: 0.35,
		HEALTH: 10,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [8, 7, 0.9, 5, 4.5, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 7, 0.9, 5, -4.5, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.one_third_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 7, 0.9, 5, 4.5, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 7, 0.9, 5, -4.5, -90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.one_third_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [7.45, 4.5, 4.5, 0, 120, 1],
		TYPE: exports.twinAutoGun
	}, {
		POSITION: [7.45, 4.5, -4.5, 0, 120, 1],
		TYPE: exports.twinAutoGun
	}, {
		POSITION: [7.45, 4.5, 4.5, 180, 120, 1],
		TYPE: exports.twinAutoGun
	}, {
		POSITION: [7.45, 4.5, -4.5, 180, 120, 1],
		TYPE: exports.twinAutoGun
	}]
};
exports.trapperAutoGun = {
	LABEL: 'Trapper',
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	INDEPENDENT: true,
	COLOR: 16,
	GUNS: [{
		POSITION: [19, 9, 1, 0, 0, 0, 0],
	}, {
		POSITION: [3, 9, 2, 19, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.directorAutoGun = {
	LABEL: 'Director',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	COLOR: 16,
	MAX_CHILDREN: 2,
	GUNS: [{
		POSITION: [6.1, 12, 1.25, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.bigger, g.half_reload]),
			TYPE: [exports.drone, {
				LAYER: 6
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.minionSpawnerMK3 = {
	LABEL: '',
	MAX_CHILDREN: 1,
	GUNS: [{
		POSITION: [4, 14, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.slow, g.double_size, g.very_fast_launch]),
			TYPE: exports.MK3_Minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}]
};
exports.squareBossTier3 = {
	PARENT: [exports.genericTank],
	LABEL: 'MK-3',
	DANGER: 9,
	SHAPE: 4,
	COLOR: 13,
	SIZE: 40,
	BOSS_TIER_TYPE: 1,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.7,
		SPEED: 1.15,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 2000
	},
	GUNS: [{
		POSITION: [6.333, 2.667, 1, 6, 6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.667, 2.667, 1, 6, 6, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 2.667, 1, 6, 6, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.333, 2.667, 1, 6, -6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.667, 2.667, 1, 6, -6, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 2.667, 1, 6, -6, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7.667, 2.667, 1, 6, 2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 2.667, 1, 6, 2, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.333, 2.667, 1, 6, 2, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.667, 2.667, 1, 6, 2, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 2.667, 1, 6, 2, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7.667, 2.667, 1, 6, -2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 2.667, 1, 6, -2, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.333, 2.667, 1, 6, -2, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.667, 2.667, 1, 6, -2, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 2.667, 1, 6, -2, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.one_third_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 4, 1.6, 6, 5.1, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.smaller, g.double_reload]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro,
			MAX_CHILDREN: 5
		}
	}, {
		POSITION: [4, 4, 1.6, 6, -5.1, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.smaller, g.double_reload]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro,
			MAX_CHILDREN: 5
		}
	}],
	TURRETS: [{
		POSITION: [3.4, 6.6, 0, 180, 180, 1],
		TYPE: exports.trapperAutoGun
	}, {
		POSITION: [3.5, 6.6, 2.5, 90, 120, 1],
		TYPE: exports.directorAutoGun
	}, {
		POSITION: [3.5, 6.6, -2.5, 90, 120, 1],
		TYPE: exports.directorAutoGun
	}, {
		POSITION: [3.5, 6.6, 2.5, -90, 120, 1],
		TYPE: exports.directorAutoGun
	}, {
		POSITION: [3.5, 6.6, -2.5, -90, 120, 1],
		TYPE: exports.directorAutoGun
	}, {
		POSITION: [9, 0, 2, 90, 360, 0],
		TYPE: exports.minionSpawnerMK3
	}, {
		POSITION: [9, 0, -2, -90, 360, 0],
		TYPE: exports.minionSpawnerMK3
	}, {
		POSITION: [9, 0, 2, 0, 360, 0],
		TYPE: exports.minionSpawnerMK3
	}, {
		POSITION: [9, 0, -2, 0, 360, 0],
		TYPE: exports.minionSpawnerMK3
	}, {
		POSITION: [8, 0, 0, 0, 360, 1],
		TYPE: [exports.artilleryAutoGun, {
			CONTROLLERS: ['nearestDifferentMaster'],
			LABEL: 'Sheller'
		}]
	}]
};
exports.guardSpreadling = makeHybrid(exports.miniSpread, 'Spreadguard');
exports.boxer = {
	PARENT: [exports.genericTank],
	LABEL: 'Boxer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.flooder = {
	PARENT: [exports.genericTank],
	LABEL: 'Flooder',
	DANGER: 7,
	BODY: {
		FOV: 1.2,
		ACCELERATION: base.ACCEL * 0.925
	},
	GUNS: [{
		POSITION: [14, 8, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8, 1.4, 4, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8, 1.4, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdAssassinAutoGun = {
	LABEL: 'Weird Assassin',
	BODY: {
		FOV: 2.8
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	INDEPENDENT: true,
	COLOR: 16,
	GUNS: [{
		POSITION: [35, 2, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.sniper, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [31, 6, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.sniper, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [28, 10, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.sniper, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 10, -1.75, 5, 0, 0, 0]
	}]
};
exports.MK4_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 4,
	COLOR: 13,
	SIZE: 18,
	BODY: {
		FOV: 0.5,
		SPEED: 1.15,
		ACCELERATION: 0.25,
		HEALTH: 15,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [24, 5.1, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 5.1, -2, 8, 0, 0, 0]
	}, {
		POSITION: [11, 12, 1.45, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_third_reload, g.smaller, g.minion]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [5.5, 9.25, 4, 90, 220, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [5.5, 9.25, -4, 90, 220, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [5.5, 9.25, 4, -90, 220, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [5.5, 9.25, -4, -90, 220, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [11, 0, 0, 180, 360, 1],
		TYPE: exports.weirdAssassinAutoGun
	}]
};
exports.opQuintAutoGun = {
	LABEL: 'OP Quintuplet',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 13,
	GUNS: [{
		POSITION: [14, 3.333, 1, 0, -1.667, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, 1.667, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, -1, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, 1, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3.333, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, -1.667, 90, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, 1.667, 90, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, -1, 90, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, 1, 90, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3.333, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, -1.667, 180, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, 1.667, 180, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, -1, 180, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, 1, 180, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3.333, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, -1.667, 270, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.333, 1, 0, 1.667, 270, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, -1, 270, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15.5, 3.333, 1, 0, 1, 270, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3.333, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.one_third_reload, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [6, 9, -1.75, 5, 0, 0, 0]
	}, {
		POSITION: [6, 9, -1.75, 5, 0, 90, 0]
	}, {
		POSITION: [6, 9, -1.75, 5, 0, 180, 0]
	}, {
		POSITION: [6, 9, -1.75, 5, 0, 270, 0]
	}]
};
exports.sounderAutoGun = {
	LABEL: 'Sounder',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [16.5, 9, 0.6, 4, 5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.half_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16.5, 9, 0.6, 4, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.half_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.frigateAutoGun = {
	LABEL: 'Frigate',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [11, 12, 0.65, 5, 3, 25, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.half_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 12, 0.65, 5, -3, -25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.half_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.barricadeAutoGun = {
	LABEL: 'Barricade',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.3, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.minionSpawnerMK4 = {
	LABEL: '',
	MAX_CHILDREN: 1,
	GUNS: [{
		POSITION: [4, 14, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.slow, g.double_size, g.very_fast_launch]),
			TYPE: exports.MK4_Minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}]
};
var squareBossProps1 = {
	SHOOT_SETTINGS: combineStats([g.factory]),
	TYPE: exports.minion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1
};
exports.squareBossTier4 = {
	PARENT: [exports.genericTank],
	LABEL: 'MK-4',
	DANGER: 9,
	SHAPE: 4,
	COLOR: 13,
	SIZE: 60,
	BOSS_TIER_TYPE: 1,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'spinSlowly',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.65,
		SPEED: 1.1,
		ACCELERATION: 0.7,
		HEALTH: 2500
	},
	GUNS: [{
		POSITION: [11, 3.35, 1, 0, 0, 0, 0]
	}, {
		POSITION: [0.6, 3.35, 1.25, 11, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.less_range]),
			TYPE: exports.block
		}
	}, {
		POSITION: [11, 3.35, 1, 0, 0, 90, 0]
	}, {
		POSITION: [0.6, 3.35, 1.25, 11, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.less_range]),
			TYPE: exports.block
		}
	}, {
		POSITION: [11, 3.35, 1, 0, 0, 180, 0]
	}, {
		POSITION: [0.6, 3.35, 1.25, 11, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.less_range]),
			TYPE: exports.block
		}
	}, {
		POSITION: [11, 3.35, 1, 0, 0, 270, 0]
	}, {
		POSITION: [0.6, 3.35, 1.25, 11, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.less_range]),
			TYPE: exports.block
		}
	}, {
		POSITION: [0.93, 2.2, 1, 10, 4.5, 0, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, 4.5, 0, 0],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, 4.5, 0, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, -4.5, 0, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, -4.5, 0, 0.5],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, -4.5, 0, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, 4.5, 90, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, 4.5, 90, 0],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, 4.5, 90, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, -4.5, 90, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, -4.5, 90, 0.5],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, -4.5, 90, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, 4.5, 180, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, 4.5, 180, 0],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, 4.5, 180, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, -4.5, 180, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, -4.5, 180, 0.5],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, -4.5, 180, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, 4.5, 270, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, 4.5, 270, 0],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, 4.5, 270, 0]
	}, {
		POSITION: [0.93, 2.2, 1, 10, -4.5, 270, 0]
	}, {
		POSITION: [0.4, 2.85, 1, 11, -4.5, 270, 0.5],
		PROPERTIES: squareBossProps1
	}, {
		POSITION: [2.75, 2.8, 1, 7.5, -4.5, 270, 0]
	}],
	TURRETS: [{
		POSITION: [3.5, 12.5, 0, 45, 120, 0],
		TYPE: exports.barricadeAutoGun
	}, {
		POSITION: [3.5, 12.5, 0, 135, 120, 0],
		TYPE: exports.barricadeAutoGun
	}, {
		POSITION: [3.5, 12.5, 0, 225, 120, 0],
		TYPE: exports.barricadeAutoGun
	}, {
		POSITION: [3.5, 12.5, 0, 315, 120, 0],
		TYPE: exports.barricadeAutoGun
	}, {
		POSITION: [3.5, 9.1, 0, 45, 160, 1],
		TYPE: exports.sounderAutoGun
	}, {
		POSITION: [3.5, 9.1, 0, 135, 160, 1],
		TYPE: exports.sounderAutoGun
	}, {
		POSITION: [3.5, 9.1, 0, 225, 160, 1],
		TYPE: exports.sounderAutoGun
	}, {
		POSITION: [3.5, 9.1, 0, 315, 160, 1],
		TYPE: exports.sounderAutoGun
	}, {
		POSITION: [3.5, 6.435, 0, 0, 160, 1],
		TYPE: exports.frigateAutoGun
	}, {
		POSITION: [3.5, 6.435, 0, 90, 160, 1],
		TYPE: exports.frigateAutoGun
	}, {
		POSITION: [3.5, 6.435, 0, 180, 160, 1],
		TYPE: exports.frigateAutoGun
	}, {
		POSITION: [3.5, 6.435, 0, 270, 160, 1],
		TYPE: exports.frigateAutoGun
	}, {
		POSITION: [6.5, 0, 0, 0, 360, 1],
		TYPE: exports.opQuintAutoGun
	}, {
		POSITION: [7.5, 0, 2, 0, 360, 0],
		TYPE: exports.minionSpawnerMK4
	}, {
		POSITION: [7.5, 0, -2, 120, 360, 0],
		TYPE: exports.minionSpawnerMK4
	}, {
		POSITION: [7.5, 0, 2, 240, 360, 0],
		TYPE: exports.minionSpawnerMK4
	}]
};
exports.howitzer = {
	PARENT: [exports.genericTank],
	LABEL: 'Howitzer',
	DANGER: 7,
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 12, 1.2, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.more_reload, g.more_reload]),
			TYPE: exports.bullet,
			LABEL: 'Pounder'
		}
	}]
};
exports.scaler = {
	PARENT: [exports.genericTank],
	LABEL: 'Scaler',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [16, 3, 1, 0, 7.9, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 0, -7.9, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 4, 1, 0, 5.1, 0, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -5.1, 0, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic]),
			TYPE: exports.bullet,
		}
	}]
};
exports.dreadnought = {
	PARENT: [exports.genericTank],
	LABEL: 'Dreadnought',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.85,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.drone,
			MAX_CHILDREN: 4,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.drone,
			MAX_CHILDREN: 4,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.trapion = {
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.trap_minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.trapperFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Trappory',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	MAX_CHILDREN: 4,
	//SHAPE: -3,
	GUNS: [{
		POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [1.5, 12, 1.5, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory]),
			TYPE: exports.trapion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 12, 1, 8, 0, 0, 0]
	}]
	/*GUNS: [{
		POSITION: [7, 12, 1.2, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory]),
			TYPE: exports.trapion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}]*/
};
exports.fogtrap = {
	LABEL: 'Trap',
	TYPE: 'trap',
	ACCEPTS_SCORE: false,
	SHAPE: -3,
	MOTION_TYPE: 'glide',
	FACING_TYPE: 'turnWithSpeed',
	HITS_OWN_TYPE: 'push',
	DIE_AT_RANGE: true,
	BODY: {
		HEALTH: 0.5,
		DAMAGE: 3,
		RANGE: 400,
		DENSITY: 2.5,
		RESIST: 2.5,
		SPEED: 0
	},
	GUNS: [{
		POSITION: [14, 3, 4, 0, 0, 60, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 3, 4, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 3, 4, 0, 0, 300, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.foghorn = {
	PARENT: [exports.genericTank],
	LABEL: 'Foghorn',
	STAT_NAMES: statNames.generic,
	DANGER: 7,
	GUNS: [{
		POSITION: [13, 12, 1, 0, 0, 0, 0]
	}, { 
		POSITION: [6, 4, 1, 17, 0, 0, 0]
	}, {
		POSITION: [4, 12, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.fogtrap,
			MAX_CHILDREN: 8,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.heatSwarmMissile = {
	PARENT: [exports.swarm],
	LABEL: 'Heat Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 200
	}, 
	SHAPE: 4,
	GUNS: [{
		POSITION: [8.5, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		},
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.cart = {
	PARENT: [exports.genericTank],
	LABEL: 'Cartridge',
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [24, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
			TYPE: exports.heatSwarmMissile
		}
	}, {
		POSITION: [3, 16, 1, 21, 0, 0, 0],
			PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.fake]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 180, 0]
	}]
};
exports.spreadTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Trapling',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 8.5, 1, 8, 0, 0, 0],
	}, {
		POSITION: [3, 8.5, 1.3, 21, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.hewnGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Hewn Gunner',
	DANGER: 7,
	GUNS: [{
		POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3.25, 1, -2, 8, 40, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3.25, 1, -2, -8, -40, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet
		}
	}]
};
exports.rifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Rifle',
	DANGER: 6,
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [20, 10.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [24, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
			TYPE: exports.bullet
		}
	}]
};
exports.gunRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Sharpshooter',
	DANGER: 7,
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [12, 6.1, -1.8, 8, 0, 0, 0]
	}, {
		POSITION: [24, 2, 1, 0, -2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin, g.bit_less_damage, g.bit_less_damage, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 2, 1, 0, 2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin, g.bit_less_damage, g.bit_less_damage, g.fast]),
			TYPE: exports.bullet
		}
	}]
};
exports.heavyRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Carbine',
	DANGER: 7,
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [20, 14.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [24, 10.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pound]),
			TYPE: exports.bullet
		}
	}]
};
exports.spreadRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Dispenser',
	BODY: {
		FOV: 1.225,
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.7
	},
	DANGER: 7,
	GUNS: [{
		POSITION: [13, 4, 1, 0, -3, -9, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 4, 1, 0, -2.5, -6, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, -2, -3, 0.05],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 4, 1, 0, 3, 9, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 4, 1, 0, 2.5, 6, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 2, 3, 0.05],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.gunner, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 10.5, 1, 0, 0, 0, 0]
	}]
};
exports.assaultRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Assault Rifle',
	DANGER: 7,
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [20, 11.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [24, 7, 1.4, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.mach, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.sniperRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Sniper Rifle',
	DANGER: 7,
	BODY: {
		FOV: 1.3,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [28, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.rifle, g.faster]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10.5, 0.8, 13, 0, 0, 0]
	}, {
		POSITION: [8, 10.5, -1.6, 5, 0, 0, 0]
	}]
};
exports.assassinMinion = {
	PARENT: [exports.minion],
	BODY: {
		FOV: 0.6,
		SPEED: 2.75,
		ACCELERATION: 0.25,
		HEALTH: 5,
		SHIELD: 0,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.4
	},
	GUNS: [{
		POSITION: [30, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.assassinAuto = {
	PARENT: [exports.auto3gun],
	GUNS: [{
		POSITION: [31, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [6, 8, -1.6, 8, 0, 0, 0]
	}]
};
exports.awpSnipeMinion = makeAuto({
	PARENT: [exports.minion],
	FACING_TYPE: 'autospin',
	BODY: {
		FOV: 0.65,
		SPEED: 1.5,
		ACCELERATION: 0.15,
		HEALTH: 10,
		SHIELD: 0,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5
	},
	GUNS: [],
	TURRETS: [{
		POSITION: [7, 10, 0, 0, 140, 0],
		TYPE: exports.assassinAuto
	}, {
		POSITION: [7, 10, 0, 90, 140, 0],
		TYPE: exports.assassinAuto
	}, {
		POSITION: [7, 10, 0, 180, 140, 0],
		TYPE: exports.assassinAuto
	}, {
		POSITION: [7, 10, 0, 270, 140, 0],
		TYPE: exports.assassinAuto
	}]
}, 'Minion', {
	size: 6
});
exports.predatorAutoGun = {
	LABEL: 'Predator',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [16, 19, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 12, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 15, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.awp_snipe = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-Snipe',
	DANGER: 8,
	SIZE: 30,
	COLOR: 33,
	BODY: {
		FOV: 0.9,
		SPEED: 1.4,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1500,
		DAMAGE: 4,
		REGEN: base.REGEN * 0.25,
	},
	TURRETS: [{
		POSITION: [6.5, 9.7, 0, 90, 220, 0],
		TYPE: exports.assassinAuto
	}, {
		POSITION: [6.5, 9.7, 0, 270, 220, 0],
		TYPE: exports.assassinAuto
	}, {
		POSITION: [7, 0, 0, 0, 360, 1],
		TYPE: exports.predatorAutoGun
	}],
	GUNS: [{
		POSITION: [28, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.more_power, g.half_range]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 14, 0.5, 12.5, 0, 0, 0]
	}, {
		POSITION: [10.5, 14, -1.4, 2, 0, 0, 0]
	}, {
		POSITION: [2.25, 7, -1.85, 23, 0, 0, 0],
	}, {
		POSITION: [2.86, 6.29, 1, 12.5, 0, 180, 0]
	}, {
		POSITION: [1.25, 8.5, 1, 15.36, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size]),
			TYPE: exports.awpSnipeMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.29, 8, 1, 8.07, 0, 180, 0]
	}, {
		POSITION: [2.86, 6.29, 1, 12, 0, 135, 0]
	}, {
		POSITION: [1.25, 8.5, 1, 14.86, 0, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.assassinMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.29, 8, 1, 7.57, 0, 135, 0]
	}, {
		POSITION: [2.86, 6.29, 1, 12, 0, 225, 0]
	}, {
		POSITION: [1.25, 8.5, 1, 14.86, 0, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.assassinMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.29, 8, 1, 7.57, 0, 225, 0]
	}]
};
exports.stalkRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Silencer',
	INVISIBLE: [0.08, 0.03, 0.02],
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.65
	},
	DANGER: 7,
	GUNS: [{
		POSITION: [20, 10.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [20, 9, 0.7, 4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.bit_smaller]),
			TYPE: exports.bullet
		}
	}]
};
exports.sprayerAutoGun = {
	LABEL: 'Sprayer',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	INDEPENDENT: true,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [23, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.low_power, g.mach, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.bit_less_damage]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.awpMachineMinion = {
	PARENT: [exports.minion],
	FACING_TYPE: 'autospin',
	BODY: {
		FOV: 0.65,
		SPEED: 1.6,
		ACCELERATION: 0.15,
		HEALTH: 12,
		SHIELD: 0,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5
	},
	TURRETS: [{
		POSITION: [7, 10.7, 0, 45, 160, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7, 10.7, 0, 135, 160, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7, 10.7, 0, 225, 160, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7, 10.7, 0, 315, 160, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [12, 0, 0, -22.5, 360, 1],
		TYPE: [exports.sprayerAutoGun, {
			CONTROLLERS: ['nearestDifferentMaster']
		}]
	}],
	GUNS: [{
		POSITION: [11.5, 6, 0.62, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.5, 6, 0.62, 7, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.5, 6, 0.62, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.5, 6, 0.62, 7, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.streamlinerAutoGun2 = {
	PARENT: [exports.auto3gun],
	GUNS: [{
		POSITION: [32, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [28, 10, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 10, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 10, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdAutoMachineGun = {
	PARENT: [exports.auto3gun],
	BODY: {
		FOV: 1.5
	},
	GUNS: [{
		POSITION: [15, 4.8, 1.5, 12, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.5, 8, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.one_third_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 10, 1.85, 7, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdDualAutoGun = {
	PARENT: [exports.auto3gun],
	COLOR: 2,
	BODY: {
		FOV: 1.7
	},
	GUNS: [{
		POSITION: [13, 7, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 7, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 8.5, 1, 0, 5.5, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 8.5, 1, 0, -5.5, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 3, 1, 0, -2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gun_dominator, g.bigger, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 3, 1, 0, 2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gun_dominator, g.bigger, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.5, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gun_dominator, g.bigger, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 9, -2, 4.25, 0, 0, 0]
	}]
};
exports.awp_machine = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-Machine',
	DANGER: 8,
	SIZE: 32,
	COLOR: 2,
	BODY: {
		FOV: 0.9,
		SPEED: 1.35,
		ACCELERATION: 0.75,
		HEALTH: 1750,
		DAMAGE: 4,
		REGEN: base.REGEN * 0.25
	},
	GUNS: [{
		POSITION: [8.7, 7, 1.6, 13, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_fourth_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.7, 8.5, 1.6, 10.5, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_fourth_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.7, 10, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.86, 6.09, 1, 11, 0, 180, 0]
	}, {
		POSITION: [1.25, 8.3, 1, 13.86, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size]),
			TYPE: exports.awpMachineMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.29, 7.8, 1, 6.57, 0, 180, 0]
	}],
	TURRETS: [{
		POSITION: [5.5, 0, 4.2, 0, 360, 1],
		TYPE: exports.streamlinerAutoGun2
	}, {
		POSITION: [5.5, 0, -4.2, 0, 360, 1],
		TYPE: exports.streamlinerAutoGun2
	}, {
		POSITION: [5, 5, 8.5, 0, 360, 0],
		TYPE: exports.weirdAutoMachineGun
	}, {
		POSITION: [5, 5, -8.5, 0, 360, 0],
		TYPE: exports.weirdAutoMachineGun
	}, {
		POSITION: [12, 9, 0, 116, 160, 0],
		TYPE: exports.weirdDualAutoGun
	}, {
		POSITION: [12, 9, 0, -116, 160, 0],
		TYPE: exports.weirdDualAutoGun
	}]
};
exports.beehive = {
	PARENT: [exports.genericTank],
	LABEL: 'Beehive',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELARATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [6.6, 2.4, 0.7, 7, 2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, -2.5, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, 2.6, 40, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, -2.6, -40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, -2, 40, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, 2, -40, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.streamlinerAutoGun = {
	PARENT: [exports.auto3gun],
	GUNS: [{
		POSITION: [28, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 10, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 10, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 10, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdTripletAutoGun = {
	LABEL: 'Weird Triplet',
	BODY: {
		FOV: 2.2
	},
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 6, 1, 0, 4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 6, 1, 0, -4.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6.8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 15, -1.3, 2, 0, 0, 0]
	}]
};
exports.MK5_Minion_1 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 4,
	COLOR: 13,
	SIZE: 30,
	BODY: {
		FOV: 0.6,
		SPEED: 1.1,
		ACCELERATION: 0.2,
		HEALTH: 20,
		SHIELD: 1,
		DAMAGE: 1.5,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	TURRETS: [{
		POSITION: [4.4, 9.2, 4.5, 90, 220, 0],
		TYPE: exports.streamlinerAutoGun
	}, {
		POSITION: [4.4, 9.2, -4.5, 90, 220, 0],
		TYPE: exports.streamlinerAutoGun
	}, {
		POSITION: [4.4, 9.2, 4.5, 270, 220, 0],
		TYPE: exports.streamlinerAutoGun
	}, {
		POSITION: [4.4, 9.2, -4.5, 270, 220, 0],
		TYPE: exports.streamlinerAutoGun
	}, {
		POSITION: [16.8, 0, 0, 0, 360, 1],
		TYPE: exports.weirdTripletAutoGun
	}],
	GUNS: [{
		POSITION: [5, 2.1, 1.8, 8, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_third_reload, g.half_recoil, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 2.1, 1.8, 8, -5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_third_reload, g.half_recoil, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [3.2, 5, 1.8, 9, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.one_third_reload, g.less_recoil, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [18, 11, 0.56, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_recoil, g.even_smaller, g.more_power, g.minion]),
			TYPE: exports.bullet
		}
	}]
};
exports.carbineAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [28, 10.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pound, g.minion, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.5, 10.5, -1.6, 5, 0, 0, 0]
	}]
};
exports.megaRangerGun = {
	LABEL: '',
	BODY: {
		FOV: 3.15
	},
	COLOR: 16,
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [32, 9.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload, g.half_reload, g.sniper, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [3.8, 15.3, 0.6, 12, 0, 0, 0]
	}, {
		POSITION: [12, 18, 0.85, 0, 0, 0, 0]
	}]
};
var squareBossProps2 = (type, a) => {
	return [{
		POSITION: [1.68, 3.7, 1, 10.06, 0, a, 0]
	}, {
		POSITION: [0.74, 5, 1, 11.74, 0, a, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload]),
			TYPE: [exports[type], {
				HITS_OWN_TYPE: 'hard'
			}],
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.11, 4.71, 1, 7.45, 0, a, 0]
	}];
};
var squareBossProps3 = (y, delay, a) => {
	return [{
		POSITION: [10.4, 3.4, 1, 0, y, a, 0]
	}, {
		POSITION: [0.9, 3.4, 1.35, 10.5, y, a, delay],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.minion, g.less_range, g.less_range, g.less_reload]),
			TYPE: exports.block
		}
	}];
};
exports.MK5_Minion_2 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 4,
	COLOR: 13,
	SIZE: 36,
	FACING_TYPE: 'spinSlowly',
	BODY: {
		FOV: 0.6,
		SPEED: 1,
		ACCELERATION: 0.15,
		HEALTH: 25,
		SHIELD: 1,
		DAMAGE: 1.6,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [],
	TURRETS: [{
		POSITION: [3.2, 6.1, 0, 0, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 45, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 90, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 135, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 180, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 225, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 270, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [3.2, 6.1, 0, 315, 160, 1],
		TYPE: exports.carbineAutoGun
	}, {
		POSITION: [7, 0, 0, 22.5, 360, 1],
		TYPE: exports.megaRangerGun
	}]
};
exports.weirdSpreadAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.5
	},
	COLOR: 13,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [16, 4, 1, 0, -3, -15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, 3, 15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1.35, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, -3, 75, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, 3, 105, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1.35, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, -3, 165, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, 3, 195, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1.35, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, -3, 255, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [16, 4, 1, 0, 3, 285, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1.35, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17.5, 5, 1.35, 0, 0, 45, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17.5, 5, 1.35, 0, 0, 135, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17.5, 5, 1.35, 0, 0, 225, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17.5, 5, 1.35, 0, 0, 315, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.beehiveAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [6.6, 2.4, 0.7, 7, 2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.half_reload, g.one_third_reload, g.less_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, -2.5, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.half_reload, g.one_third_reload, g.less_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, 2.6, 40, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.half_reload, g.one_third_reload, g.less_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, -2.6, -40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.half_reload, g.one_third_reload, g.less_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, -2, 40, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.half_reload, g.one_third_reload, g.less_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.6, 2.4, 0.7, 7, 2, -40, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.less_damage, g.half_reload, g.one_third_reload, g.less_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.sounderAutoGun2 = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	GUNS: [{
		POSITION: [19, 8, 0.6, 4, 5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [19, 8, 0.6, 4, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.predatorAuto2 = {
	LABEL: '',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.half_reload, g.no_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.half_reload, g.no_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 16, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.half_reload, g.half_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdTripletAutoGun2 = {
	LABEL: 'OP Triplet',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	GUNS: [{
		POSITION: [16.6, 5, 1, 0, 6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 7.5, 0.65, 2, 6, 0, 0]
	}, {
		POSITION: [16.6, 5, 1, 0, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 7.5, 0.65, 2, -6, 0, 0]
	}, {
		POSITION: [20, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 5, -1.6, 8, 0, 0, 0]
	}]
};
exports.squareBossTier5 = {
	PARENT: [exports.genericTank],
	LABEL: 'MK-5',
	DANGER: 9,
	SHAPE: 4,
	COLOR: 13,
	SIZE: 100,
	BOSS_TIER_TYPE: 1,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'spinSlowly2',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.8,
		SPEED: 1,
		ACCELERATION: 0.4,
		HEALTH: 3000
	},
	GUNS: [{
		POSITION: [0.75, 1.6, 1, 12.7, 0, 45, 0]
	}, {
		POSITION: [0.33, 2.18, 1.01, 13.45, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.MK5_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [2, 2.05, 1, 10.92, 0, 45, 0]
	}, {
		POSITION: [0.75, 1.6, 1, 12.7, 0, 225, 0]
	}, {
		POSITION: [0.33, 2.18, 1.01, 13.45, 0, 225, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.MK5_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [2, 2.05, 1, 10.92, 0, 225, 0]
	}, {
		POSITION: [0.75, 1.6, 1, 12.7, 0, 135, 0]
	}, {
		POSITION: [0.33, 2.18, 1.01, 13.45, 0, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.MK5_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [2, 2.05, 1, 10.92, 0, 135, 0]
	}, {
		POSITION: [0.75, 1.6, 1, 12.7, 0, 315, 0]
	}, {
		POSITION: [0.33, 2.18, 1.01, 13.45, 0, 315, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.MK5_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [2, 2.05, 1, 10.92, 0, 315, 0]
	}],
	TURRETS: [{
		POSITION: [2.4, 6.8, 2, 0, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, -2, 0, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, 2, 90, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, -2, 90, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, 2, 180, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, -2, 180, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, 2, 270, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.8, -2, 270, 140, 1],
		TYPE: exports.beehiveAutoGun
	}, {
		POSITION: [2.4, 6.5, 0, 45, 160, 1],
		TYPE: exports.sounderAutoGun2
	}, {
		POSITION: [2.4, 6.5, 0, 135, 160, 1],
		TYPE: exports.sounderAutoGun2
	}, {
		POSITION: [2.4, 6.5, 0, 225, 160, 1],
		TYPE: exports.sounderAutoGun2
	}, {
		POSITION: [2.4, 6.5, 0, 315, 160, 1],
		TYPE: exports.sounderAutoGun2
	}, {
		POSITION: [2.5, 9, 5.4, 0, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, -5.4, 0, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, 5.4, 90, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, -5.4, 90, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, 5.5, 180, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, -5.5, 180, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, 5.5, 270, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [2.5, 9, -5.5, 270, 140, 0],
		TYPE: exports.predatorAuto2
	}, {
		POSITION: [7.71, 9, 0, 0, 190, 0],
		TYPE: exports.weirdTripletAutoGun2
	}, {
		POSITION: [7.71, 9, 0, 90, 190, 0],
		TYPE: exports.weirdTripletAutoGun2
	}, {
		POSITION: [7.71, 9, 0, 180, 190, 0],
		TYPE: exports.weirdTripletAutoGun2
	}, {
		POSITION: [7.71, 9, 0, 270, 190, 0],
		TYPE: exports.weirdTripletAutoGun2
	}, {
		POSITION: [6.5, 0, 0, 0, 360, 1],
		TYPE: exports.weirdSpreadAutoGun
	}]
};
exports.flankMachine = {
	PARENT: [exports.genericTank],
	LABEL: 'Flank Machine',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.triMachine = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Machine',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.95
	},
	GUNS: [{
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.blasterSpray = {
	PARENT: [exports.genericTank],
	LABEL: 'Splasher',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [20, 7, 1.3, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.low_power, g.mach, g.more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 10, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast]),
			TYPE: exports.bullet
		}
	}]
};
exports.littleMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.fieldGun = {
	PARENT: [exports.genericTank],
	LABEL: 'Field Gun',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [15, 10, -0.5, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.fake]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bit_less_damage]),
			TYPE: exports.littleMissile
		}
	}]
};
exports.aagun = {
	PARENT: [exports.genericTank],
	LABEL: 'AA Gun',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.arty]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 12, -1.4, 5, 0, 0, 0]
	}]
};
exports.batteryAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [13, 3.3, 1, 0, 8, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 3.3, 1, 0, -8, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.3, 1, 0, 4, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.3, 1, 0, -4, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.swarmSquare = {
	PARENT: [exports.genericTank],
	LABEL: 'Swarm Square',
	DANGER: 8,
	SHAPE: 4,
	COLOR: 13,
	SIZE: 26,
	BODY: {
		SPEED: 1.7,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1000,
		DAMAGE: 4,
		REGEN: 0.019
	},
	GUNS: [{
		POSITION: [10, 12, 1.5, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_fourth_reload, g.smaller]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [28.4, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26.2, 5, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 7.8, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 7.8, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7.8, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, 6.5, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, 3.25, 90, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, 0, 90, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, -3.25, 90, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, -6.5, 90, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, -6.5, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, -3.25, -90, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, 0, -90, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, 3.25, -90, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6.5, 2.5, 0.55, 7, 6.5, -90, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_third_reload, g.bigger]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.batteryAutoGun
	}]
};
exports.hunterAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [24.2, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 11, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'TK-1',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 2,
	SIZE: 22,
	BOSS_TIER_TYPE: 2,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: 1.6,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1000,
		DAMAGE: 4,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [8, 5.8, 1, 6, 0, 60, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, 8, 60, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, 8, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, -8, 60, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, -8, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, 0, -60, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, 8, -60, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, 8, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, -8, -60, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, -8, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, 0, 180, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, 8, 180, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, 8, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [8, 5.8, 1, 6, -8, 180, 0]
	}, {
		POSITION: [1.8, 5.8, 1.15, 14, -8, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}],
	TURRETS: [{
		POSITION: [8, -0.6, 0, 0, 360, 1],
		TYPE: exports.hunterAutoGun
	}]
};
exports.tripleTrapAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.2
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [18, 6, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 6, 1.5, 18, 6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [18, 6, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 6, 1.5, 18, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [21, 6, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 6, 1.5, 21, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.triangleBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'TK-2',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 2,
	SIZE: 28,
	BOSS_TIER_TYPE: 2,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: 1.45,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1500,
		DAMAGE: 4,
		REGEN: 0.015
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [7, 6, 1, 6, 8.5, 60, 0]
	}, {
		POSITION: [1.8, 6, 1.15, 13, 8.5, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [7, 6, 1, 6, -8.5, 60, 0]
	}, {
		POSITION: [1.8, 6, 1.15, 13, -8.5, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [7, 6, 1, 6, 8.5, -60, 0]
	}, {
		POSITION: [1.8, 6, 1.15, 13, 8.5, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [7, 6, 1, 6, -8.5, -60, 0]
	}, {
		POSITION: [1.8, 6, 1.15, 13, -8.5, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [7, 6, 1, 6, 8.5, 180, 0]
	}, {
		POSITION: [1.8, 6, 1.15, 13, 8.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [7, 6, 1, 6, -8.5, 180, 0]
	}, {
		POSITION: [1.8, 6, 1.15, 13, -8.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_fourth_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [2.27, 6, 1, 9.77, 0, 60, 0]
	}, {
		POSITION: [1, 7.5, 1, 12.05, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload]),
			TYPE: exports.trapion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [2.82, 7.36, 1, 7.64, 0, 60, 0]
	}, {
		POSITION: [2.27, 6, 1, 9.77, 0, -60, 0]
	}, {
		POSITION: [1, 7.5, 1, 12.05, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload]),
			TYPE: exports.trapion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [2.82, 7.36, 1, 7.64, 0, -60, 0]
	}, {
		POSITION: [2.27, 6, 1, 9.77, 0, 180, 0]
	}, {
		POSITION: [1, 7.5, 1, 12.05, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload]),
			TYPE: exports.trapion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [2.82, 7.36, 1, 7.64, 0, 180, 0]
	}],
	TURRETS: [{
		POSITION: [3.1, 12.7, 0, 0, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [3.1, 12.7, 0, 120, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [3.1, 12.7, 0, 240, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [7.2, 0, 0, 0, 360, 1],
		TYPE: exports.tripleTrapAutoGun
	}]
};
exports.blasterAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [8.8, 10, 1.64, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.half_reload, g.more_speed, g.no_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.TK3_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: -100,
	COLOR: 2,
	SIZE: 50,
	BODY: {
		FOV: 0.6,
		SPEED: 1,
		ACCELERATION: 0.14,
		HEALTH: 25,
		SHIELD: 1,
		DAMAGE: 1.6,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [7, 3.4, 1, 0, 0, 60, 0]
	}, {
		POSITION: [1.2, 3.4, 1.7, 7, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7, 3.4, 1, 0, 0, -60, 0]
	}, {
		POSITION: [1.2, 3.4, 1.7, 7, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7, 3.4, 1, 0, 0, 180, 0]
	}, {
		POSITION: [1.2, 3.4, 1.7, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [10, 2.5, 0.36, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [10, 2.5, 0.36, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [10, 2.5, 0.36, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [3.9, 0, 0, 60, 360, 1],
		TYPE: exports.blasterAutoGun
	}]
};
exports.weirdGunnerAuto2 = {
	LABEL: '',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [11, 2.5, 1, 0, 8.7, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 2.5, 1, 0, -8.7, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.5, 2.5, 1, 0, 7.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.5, 2.5, 1, 0, -7.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2.5, 1, 0, 5.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2.5, 1, 0, -5.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.5, 2.4, 1, 0, 3.2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.5, 2.4, 1, 0, -3.2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleBossTier3 = {
	PARENT: [exports.genericTank],
	LABEL: 'TK-3',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 2,
	SIZE: 33,
	BOSS_TIER_TYPE: 2,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: 1.36,
		ACCELERATION: 0.7,
		HEALTH: 2000,
		DAMAGE: 4,
		REGEN: 0.015
	},
	GUNS: [{
		POSITION: [7, 5.6, 1, 6, 9, 180, 0]
	}, {
		POSITION: [1.3, 5.6, 1.26, 13, 9, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_third_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [7, 5.6, 1, 6, -9, 180, 0]
	}, {
		POSITION: [1.3, 5.6, 1.26, 13, -9, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.less_range, g.one_third_reload]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [3.7, 10.4, 1, 6, 0, 180, 0]
	}, {
		POSITION: [1.3, 10.4, 1.3, 9.7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow, g.half_reload, g.one_third_reload, g.more_power]),
			TYPE: exports.blockTrap
		}
	}, {
		POSITION: [3.15, 7.03, 1, 9.3, 4, 60, 0]
	}, {
		POSITION: [1.65, 9.46, 1, 12.45, 4, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.bigger]),
			TYPE: exports.TK3_Minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.05, 8.91, 1, 4.43, 4, 60, 0]
	}, {
		POSITION: [3.15, 7.03, 1, 9.3, -4, -60, 0]
	}, {
		POSITION: [1.65, 9.46, 1, 12.45, -4, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.bigger]),
			TYPE: exports.TK3_Minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.05, 8.91, 1, 4.43, -4, -60, 0]
	}, {
		POSITION: [6.6, 1.7, 1, 7, 4, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6.6, 1.7, 1, 7, -4, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.5, 1.7, 1, 7.3, 2.1, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.5, 1.7, 1, 7.3, -2.1, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.75, 2, 1, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.no_recoil]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [11.6, -0.5, 0, 0, 360, 1],
		TYPE: exports.weirdGunnerAuto2
	}]
};
exports.TK4_Minion_1 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 101,
	COLOR: 2,
	SIZE: 28,
	BODY: {
		FOV: 0.6,
		SPEED: 0.75,
		ACCELERATION: 0.4,
		HEALTH: 15,
		SHIELD: 1,
		DAMAGE: 1.4,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [22, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 18, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 14, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 18, 1, 0, 0, 120, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 14, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.half_reload, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 18, 1, 0, 0, 240, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.one_third_reload, g.minion]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [8, 0, 0, 60, 360, 1],
		TYPE: [exports.autoTurret, {
			COLOR: 2
		}]
	}]
};
exports.tripletHunterAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.6
	},
	COLOR: 2,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 7, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8.5, 1, 0, 5.5, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7, 1, 0, -5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8.5, 1, 0, -5.5, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 7, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8.5, 1, 0, 0, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.minion]),
			TYPE: exports.bullet
		}
	}]
};
exports.TK4_Minion_2 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 101,
	COLOR: 2,
	SIZE: 30,
	BODY: {
		FOV: 0.6,
		SPEED: 0.65,
		ACCELERATION: 0.35,
		HEALTH: 20,
		SHIELD: 1,
		DAMAGE: 1.5,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [19.5, 7.6, 1, 4, 5.7, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 7.6, 1, 4, -5.7, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 9.5, 1, 4, 5.7, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 9.5, 1, 4, -5.7, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 7.6, 1, 4, 5.7, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 7.6, 1, 4, -5.7, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 9.5, 1, 4, 5.7, 120, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 9.5, 1, 4, -5.7, 120, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 7.6, 1, 4, 5.7, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 7.6, 1, 4, -5.7, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 9.5, 1, 4, 5.7, 240, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 9.5, 1, 4, -5.7, 240, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.minion]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [12.5, 0, 0, 90, 360, 1],
		TYPE: exports.tripletHunterAutoGun
	}]
};
exports.triCruiserAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.75
	},
	COLOR: 2,
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [11.3, 6.4, 0.58, 5, 4.6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.half_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4.6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel'],
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4.6, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.half_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4.6, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel'],
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4.6, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.half_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4.6, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.half_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel'],
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.twinAutoGun2 = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [21, 7.25, 1, 0, 5.875, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [21, 7.25, 1, 0, -5.875, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.minion, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.TK4_Minion_3 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 50,
	BODY: {
		FOV: 0.6,
		SPEED: 0.56,
		ACCELERATION: 0.25,
		HEALTH: 25,
		SHIELD: 1,
		DAMAGE: 1.6,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [7.7, 5, 0.55, 6.1, 3.15, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, -3.15, 60, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, 9.3, 60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, -9.3, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, 3.15, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, -3.15, -60, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, 9.3, -60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, -9.3, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, 3.15, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, -3.15, 180, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, 9.3, 180, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.7, 5, 0.55, 6.1, -9.3, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [8.6, 0, 0, 0, 360, 1],
		TYPE: exports.triCruiserAutoGun
	}, {
		POSITION: [3.5, 11, 0, 0, 190, 1],
		TYPE: exports.twinAutoGun2
	}, {
		POSITION: [3.5, 11, 0, 120, 190, 1],
		TYPE: exports.twinAutoGun2
	}, {
		POSITION: [3.5, 11, 0, 240, 190, 1],
		TYPE: exports.twinAutoGun2
	}]
};
exports.dualAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	COLOR: 2,
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 7, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8.5, 1, 0, 5.5, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8.5, 1, 0, -5.5, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.shifterAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	COLOR: 2,
	GUNS: [{
		POSITION: [19, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 15, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleBossTier4 = {
	PARENT: [exports.genericTank],
	LABEL: 'TK-4',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 2,
	SIZE: 45,
	BOSS_TIER_TYPE: 2,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.9,
		SPEED: 1.15,
		ACCELERATION: 0.65,
		HEALTH: 2500,
		DAMAGE: 4,
		REGEN: 0.015
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [7.5, 4.2, 0.58, 6.1, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, 9, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, -9, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [3.1, 5.63, 1, 7.6, 4.5, 60, 0]
	}, {
		POSITION: [1.5, 7.8, 1, 10.75, 4.5, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.bit_smaller, g.half_reload, g.very_fast_launch]),
			TYPE: exports.TK4_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.5, 7.2, 1, 2.53, 4.5, 60, 0]
	}, {
		POSITION: [3.1, 5.63, 1, 7.6, -4.5, 60, 0]
	}, {
		POSITION: [1.5, 7.8, 1, 10.75, -4.5, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.bit_smaller, g.half_reload, g.very_fast_launch]),
			TYPE: exports.TK4_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.5, 7.2, 1, 2.53, -4.5, 60, 0]
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, 9, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, -9, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [3.1, 5.63, 1, 7.6, 4.5, -60, 0]
	}, {
		POSITION: [1.5, 7.8, 1, 10.75, 4.5, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.TK4_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.5, 7.2, 1, 2.53, 4.5, -60, 0]
	}, {
		POSITION: [3.1, 5.63, 1, 7.6, -4.5, -60, 0]
	}, {
		POSITION: [1.5, 7.8, 1, 10.75, -4.5, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.TK4_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.5, 7.2, 1, 2.53, -4.5, -60, 0]
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, 9, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7.5, 4.2, 0.58, 6.1, -9, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.smaller, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [3.1, 5.63, 1, 7.6, 4.5, 180, 0]
	}, {
		POSITION: [1.5, 7.8, 1, 10.75, 4.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.TK4_Minion_3,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.5, 7.2, 1, 2.53, 4.5, 180, 0]
	}, {
		POSITION: [3.1, 5.63, 1, 7.6, -4.5, 180, 0]
	}, {
		POSITION: [1.5, 7.8, 1, 10.75, -4.5, 180, 0.5],
		//PROPERTIES:
	}, {
		POSITION: [6.5, 7.2, 1, 2.53, -4.5, 180, 0]
	}],
	TURRETS: [{
		POSITION: [2.5, 4.2, 2, 60, 160, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [2.5, 4.2, -2, 60, 160, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [2.5, 4.2, 2, -60, 160, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [2.5, 4.2, -2, -60, 160, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [2.5, 4.2, 2, 180, 160, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [2.5, 4.2, -2, 180, 160, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [5.8, 8.5, 0, 0, 190, 1],
		TYPE: exports.triCruiserAutoGun
	}, {
		POSITION: [5.8, 8.5, 0, 120, 190, 1],
		TYPE: exports.dualAutoGun
	}, {
		POSITION: [5.8, 8.5, 0, 240, 190, 1],
		TYPE: exports.shifterAutoGun
	}]
};
exports.railgun = {
	PARENT: [exports.genericTank],
	LABEL: 'Railgun',
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85,
		FOV: 1.35
	},
	DANGER: 7,
	GUNS: [{
		POSITION: [35, 1.8, 1.01, 0, 5, 0, 0],
	}, {
		POSITION: [35, 1.8, 1.01, 0, -5, 0, 0],
	}, {
		POSITION: [0.9, 8, 1.01, 12, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}, {
		POSITION: [0.9, 8, 1.01, 16, 0, 0, 0.025],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}, {
		POSITION: [0.9, 8, 1.01, 20, 0, 0, 0.05],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}, {
		POSITION: [0.9, 8, 1.01, 24, 0, 0, 0.075],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}, {
		POSITION: [0.9, 8, 1.01, 28, 0, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}, {
		POSITION: [0.9, 8, 1.01, 32, 0, 0, 0.125],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}, {
		POSITION: [0.9, 8, 1.01, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bit_more_damage, g.bigger, g.lots_more_recoil, g.bit_more_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.gunnerAutoGun = {
	LABEL: 'Gunner',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [14, 3.5, 1, 0, 7.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 3.5, 1, 0, -7.25, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 3.5, 1, 0, 3.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 3.5, 1, 0, -3.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}],
	HAS_NO_RECOIL: true
};
exports.TK5_Minion_1 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 28,
	BODY: {
		FOV: 0.5,
		SPEED: 1.1,
		ACCELERATION: 0.4,
		HEALTH: 10,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin',
	GUNS: [{
		POSITION: [11, 9, 1, 0, 0, 60, 0]
	}, {
		POSITION: [2.5, 9, 1.55, 11, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [11, 9, 1, 0, 0, 180, 0]
	}, {
		POSITION: [2.5, 9, 1.55, 11, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [11, 9, 1, 0, 0, 300, 0]
	}, {
		POSITION: [2.5, 9, 1.55, 11, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [15, 0, 0, 0, 360, 1],
		TYPE: exports.gunnerAutoGun
	}]
};
exports.TK5_Minion_2 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 25,
	BODY: {
		FOV: 0.5,
		SPEED: 1,
		ACCELERATION: 0.35,
		HEALTH: 12,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [32, 14, 1.88, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_fourth_reload, g.smaller, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 2, 1, -2, 9, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 2, 1, -2, -9, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.minion]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [12.8, 0.4, 0, 0, 360, 1],
		TYPE: [exports.machineGunAuto, {
			LABEL: 'Gatling',
			CONTROLLERS: ['nearestDifferentMaster'],
			INDEPENDENT: true
		}]
	}]
};
exports.xPredatorAutoGun = {
	LABEL: 'X-Predator',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [26, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 12, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 15, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 20, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.TK5_Minion_3 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 30,
	BODY: {
		FOV: 0.5,
		SPEED: 0.9,
		ACCELERATION: 0.3,
		HEALTH: 14,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [8, 10, 1.55, 8, 2, 196, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.minion, g.smaller, g.half_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 10, 1.55, 8, -2, 164, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.minion, g.smaller, g.half_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 10, 1.6, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.minion, g.smaller, g.half_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 5, 1, 0, 5.2, 60, 0]
	}, {
		POSITION: [1.85, 5, 1.54, 11, 5.2, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller, g.no_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [11, 5, 1, 0, -5.2, 60, 0]
	}, {
		POSITION: [1.85, 5, 1.54, 11, -5.2, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller, g.no_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [11, 5, 1, 0, -5.2, -60, 0]
	}, {
		POSITION: [1.85, 5, 1.54, 11, -5.2, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller, g.no_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [11, 5, 1, 0, 5.2, -60, 0]
	}, {
		POSITION: [1.85, 5, 1.54, 11, 5.2, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow, g.smaller, g.no_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.xPredatorAutoGun
	}]
};
exports.assassinAutoGun = {
	LABEL: 'Assassin',
	BODY: {
		FOV: 2.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 2,
	GUNS: [{
		POSITION: [32.6, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 9, -1.8, 6, 0, 0, 0]
	}]
};
exports.heavyArtilleryAutoGun = {
	LABEL: 'Heavy Artillery',
	BODY: {
		FOV: 1.8
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 2,
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [17, 3.2, 1, 0, -6, -8, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 3.2, 1, 0, 6, 8, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21.2, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.half_reload]),
			TYPE: exports.halfReloadMissile
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.half_reload]),
			TYPE: exports.bullet
		}
	}],
	HAS_NO_RECOIL: true
};
exports.pounderMinion = {
	PARENT: [exports.minion],
	LABEL: 'Pounder Minion',
	HITS_OWN_TYPE: 'hard',
	GUNS: [{
		POSITION: [19.6, 13, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
var triangleBossProps1 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.smaller]),
	TYPE: exports.pounderMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 3
}
exports.TK5_Minion_4 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 46,
	BODY: {
		FOV: 0.5,
		SPEED: 0.8,
		ACCELERATION: 0.25,
		HEALTH: 16,
		SHIELD: 1,
		DAMAGE: 1.26,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [3.15, 5.4, 1, 8.3, 0, 60, 0]
	}, {
		POSITION: [1.65, 7.9, 1, 11.1, 0, 60, 0],
		PROPERTIES: triangleBossProps1
	}, {
		POSITION: [5.9, 7.15, 1, 3.6, 0, 60, 0]
	}, {
		POSITION: [3.15, 5.4, 1, 8.3, 0, -60, 0]
	}, {
		POSITION: [1.65, 7.9, 1, 11.1, 0, -60, 0],
		PROPERTIES: triangleBossProps1
	}, {
		POSITION: [5.9, 7.15, 1, 3.6, 0, -60, 0]
	}, {
		POSITION: [3.15, 5.4, 1, 8.3, 0, 180, 0]
	}, {
		POSITION: [1.65, 7.9, 1, 11.1, 0, 180, 0],
		PROPERTIES: triangleBossProps1
	}, {
		POSITION: [5.9, 7.15, 1, 3.6, 0, 180, 0]
	}],
	TURRETS: [{
		POSITION: [8, 12, 0, 0, 165, 1],
		TYPE: exports.assassinAutoGun
	}, {
		POSITION: [8, 12, 0, 120, 165, 1],
		TYPE: exports.assassinAutoGun
	}, {
		POSITION: [8, 12, 0, 240, 165, 1],
		TYPE: exports.assassinAutoGun
	}, {
		POSITION: [9, -2.5, 0, 180, 361, 1],
		TYPE: exports.heavyArtilleryAutoGun
	}]
};
exports.hexaCruiserAutoGun = {
	LABEL: '',
	BODY: {
		FOV: 1.75
	},
	COLOR: 2,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [11.3, 6.4, 0.58, 5, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, 4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11.3, 6.4, 0.58, 5, -4, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_range, g.half_reload, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.carrierMinion = {
	PARENT: [exports.minion],
	HITS_OWN_TYPE: 'hard',
	LABEL: 'Carrier Minion',
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.minion]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.minion]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.minion]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.TK5_Minion_5 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 50,
	BODY: {
		FOV: 0.5,
		SPEED: 0.7,
		ACCELERATION: 0.2,
		HEALTH: 18,
		SHIELD: 1,
		DAMAGE: 1.26,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [5.65, 3.35, 0.63, 7, 10.4, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, 5.5, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, -10.4, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, -5.5, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [3.15, 5.25, 1, 9.3, 0, 60, 0]
	}, {
		POSITION: [1.5, 7.45, 1, 12.1, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.bit_smaller]),
			TYPE: exports.carrierMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.9, 7, 1, 4.6, 0, 60, 0]
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, 10.4, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, 5.5, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, -10.4, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, -5.5, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [3.15, 5.25, 1, 9.3, 0, -60, 0]
	}, {
		POSITION: [1.5, 7.45, 1, 12.1, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.bit_smaller]),
			TYPE: exports.carrierMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.9, 7, 1, 4.6, 0, -60, 0]
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, 10.4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, 5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, -10.4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5.65, 3.35, 0.63, 7, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [3.15, 5.25, 1, 9.3, 0, 180, 0]
	}, {
		POSITION: [1.5, 7.45, 1, 12.1, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.bit_smaller]),
			TYPE: exports.carrierMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.9, 7, 1, 4.6, 0, 180, 0]
	}],
	TURRETS: [{
		POSITION: [12, 0, 0, 0, 360, 1],
		TYPE: exports.hexaCruiserAutoGun
	}]
};
exports.rangerMinion = {
	PARENT: [exports.minion],
	LABEL: 'Ranger Minion',
	HITS_OWN_TYPE: 'hard',
	BODY: {
		FOV: 0.6,
		SPEED: 2.75,
		ACCELERATION: 0.25,
		HEALTH: 5,
		SHIELD: 0,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.4
	},
	GUNS: [{
		POSITION: [33, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
var railgunProps1 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.half_reload]),
	TYPE: exports.bullet
};
exports.railgunAuto = {
	LABEL: 'Railgun',
	BODY: {
		FOV: 2
	},
	COLOR: 2,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [41, 1.7, 1, 0, 3.96, 0, 0],
	}, {
		POSITION: [41, 1.7, 1, 0, -3.96, 0, 0],
	}, {
		POSITION: [0.65, 6.7, 1.01, 11.5, 0, 0, 0],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 14, 0, 0, 0.015],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 16.5, 0, 0, 0.03],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 19, 0, 0, 0.045],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 21.5, 0, 0, 0.06],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 24, 0, 0, 0.075],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 26.5, 0, 0, 0.09],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 29, 0, 0, 0.105],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 31.5, 0, 0, 0.12],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 34, 0, 0, 0.135],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 36.5, 0, 0, 0.15],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 39, 0, 0, 0.165],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 6.7, 1.01, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.half_reload, g.fast]),
			TYPE: exports.bullet
		}
	}]
};
exports.TK5_Minion_6 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 3,
	COLOR: 2,
	SIZE: 50,
	BODY: {
		FOV: 0.5,
		SPEED: 0.7,
		ACCELERATION: 0.18,
		HEALTH: 20,
		SHIELD: 1,
		DAMAGE: 1.28,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [3.15, 5.25, 1, 9.3, 0, 60, 0]
	}, {
		POSITION: [1.5, 7.45, 1, 12.1, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.bit_smaller]),
			TYPE: exports.rangerMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.9, 7, 1, 4.6, 0, 60, 0]
	}, {
		POSITION: [3.15, 5.25, 1, 9.3, 0, -60, 0]
	}, {
		POSITION: [1.5, 7.45, 1, 12.1, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.bit_smaller]),
			TYPE: exports.rangerMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.9, 7, 1, 4.6, 0, -60, 0]
	}, {
		POSITION: [3.15, 5.25, 1, 9.3, 0, 180, 0]
	}, {
		POSITION: [1.5, 7.45, 1, 12.1, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.one_third_reload, g.fast_launch, g.bit_smaller]),
			TYPE: exports.rangerMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.9, 7, 1, 4.6, 0, 180, 0]
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 11.2, 60, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 8.2, 60, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 5.2, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -11.2, 60, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -8.2, 60, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -5.2, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 11.2, -60, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 8.2, -60, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 5.2, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -11.2, -60, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -8.2, -60, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -5.2, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 11.2, 180, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 8.2, 180, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, 5.2, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -11.2, 180, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -8.2, 180, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.1, 2.1, 1.01, 8, -5.2, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [12, 0, 0, 0, 360, 1],
		TYPE: exports.railgunAuto
	}]
};
exports.twinRailgunAuto = {
	LABEL: 'Dual Railgun',
	BODY: {
		FOV: 1.9
	},
	COLOR: 2,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 1.8, 1.01, 0, 9.1, 0, 0]
	}, {
		POSITION: [20, 1.8, 1.01, 0, 1.9, 0, 0]
	}, {
		POSITION: [0.9, 5.6, 1.01, 10.5, 5.5, 0, 0.025],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 13, 5.5, 0, 0.05],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 15.5, 5.5, 0, 0.075],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 18, 5.5, 0, 0.1],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 8, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.more_power, g.bigger, g.half_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 1.8, 1.01, 0, -1.9, 0, 0]
	}, {
		POSITION: [20, 1.8, 1.01, 0, -9.1, 0, 0]
	}, {
		POSITION: [0.9, 5.6, 1.01, 10.5, -5.5, 0, 0.525],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 13, -5.5, 0, 0.55],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 15.5, -5.5, 0, 0.575],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 18, -5.5, 0, 0.6],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.9, 5.6, 1.01, 8, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.more_power, g.bigger, g.half_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdDualAutoGun2 = {
	LABEL: '',
	COLOR: 2,
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [14.6, 5.8, 1, -2, 0, 12, 0]
	}, {
		POSITION: [2.5, 5.8, 1.75, 12.6, 0, 12, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload, g.smaller]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14.6, 5.8, 1, -2, 0, -12, 0]
	}, {
		POSITION: [2.5, 5.8, 1.75, 12.6, 0, -12, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload, g.smaller]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14.6, 5.8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2.5, 5.8, 1.75, 14.6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_reload, g.smaller]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [10, 7, 1, 0, 5.4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 7, 1, 0, -5.4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.5, 1, 0, 5.75, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8, 1, 0, -5.75, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.no_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleBossTier5 = {
	PARENT: [exports.genericTank],
	LABEL: 'TK-5',
	DANGER: 9,
	SHAPE: 3,
	COLOR: 2,
	SIZE: 90,
	BOSS_TIER_TYPE: 2,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.85,
		SPEED: 1,
		ACCELERATION: 0.4,
		HEALTH: 3000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	//FACING_TYPE: 'spinSlowly2',
	GUNS: [{
		POSITION: [3.15, 5, 1, 9.8, -8, 180, 0]
	}, {
		POSITION: [1.5, 7.2, 1, 12.5, -8, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.near_double_size]),
			TYPE: exports.TK5_Minion_4,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [6.5, 6.75, 1, 4.6, -8, 180, 0]
	}, {
		POSITION: [3.15, 4.8, 1, 8.3, 8, 60, 0]
	}, {
		POSITION: [1.5, 7, 1, 11, 8, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size]),
			TYPE: exports.TK5_Minion_6,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.5, 6.55, 1, 5.1, 8, 60, 0]
	}, {
		POSITION: [3.15, 4.8, 1, 8.3, 8, -60, 0]
	}, {
		POSITION: [1.5, 7, 1, 11, 8, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size]),
			TYPE: exports.TK5_Minion_5,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.5, 6.55, 1, 5.1, 8, -60, 0]
	}, {
		POSITION: [2, 2.2, 1, 8, -6, -60, 0]
	}, {
		POSITION: [0.8, 3.3, 1, 10.1, -6, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size, g.smaller]),
			TYPE: exports.TK5_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 3.08, 1, 5.1, -6, -60, 0]
	}, {
		POSITION: [2, 2.2, 1, 8, -10.2, -60, 0]
	}, {
		POSITION: [0.8, 3.3, 1, 10.1, -10.2, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size, g.smaller]),
			TYPE: exports.TK5_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 3.08, 1, 5.1, -10.2, -60, 0]
	}, {
		POSITION: [2, 2.2, 1, 7.6, 6, 180, 0]
	}, {
		POSITION: [0.8, 3.3, 1, 9.7, 6, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size, g.bit_smaller]),
			TYPE: exports.TK5_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 3.08, 1, 4.7, 6, 180, 0]
	}, {
		POSITION: [2, 2.2, 1, 7.6, 10.2, 180, 0]
	}, {
		POSITION: [0.8, 3.3, 1, 9.7, 10.2, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size, g.bit_smaller]),
			TYPE: exports.TK5_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 3.08, 1, 4.7, 10.2, 180, 0]
	}, {
		POSITION: [2, 2.2, 1, 8, -6, 60, 0]
	}, {
		POSITION: [0.8, 3.3, 1, 10.1, -6, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size]),
			TYPE: exports.TK5_Minion_3,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 3.08, 1, 5.1, -6, 60, 0]
	}, {
		POSITION: [2, 2.2, 1, 8, -10.2, 60, 0]
	}, {
		POSITION: [0.8, 3.3, 1, 10.1, -10.2, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.double_size]),
			TYPE: exports.TK5_Minion_3,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 3.08, 1, 5.1, -10.2, 60, 0]
	}],
	TURRETS: [{
		POSITION: [12, -1.68, 0, 0, 360, 1],
		TYPE: exports.twinRailgunAuto
	}, {
		POSITION: [3.4, 12.9, 0, 0, 190, 1],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.4, 12.9, 0, 120, 190, 1],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.4, 12.9, 0, 240, 190, 1],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [6.8, 8, 0, 60, 190, 0],
		TYPE: exports.weirdDualAutoGun2
	}, {
		POSITION: [6.8, 8, 0, -60, 190, 0],
		TYPE: exports.weirdDualAutoGun2
	}, {
		POSITION: [6.8, 8, 0, 180, 190, 0],
		TYPE: exports.weirdDualAutoGun2
	}]
};
exports.twinMinigunAuto = {
	LABEL: 'Dual Minigun',
	BODY: {
		FOV: 2
	},
	COLOR: 14,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20.6, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18.6, 8, 1, 0, 5.5, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.6, 8, 1, 0, 5.5, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20.6, 8, 1, 0, -5.5, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18.6, 8, 1, 0, -5.5, 0, 0.433],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.6, 8, 1, 0, -5.5, 0, 0.767],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
var pentagonBossProps1 = {
	SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
	TYPE: exports.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	STAT_CALCULATOR: gunCalcNames.drone,
	WAIT_TO_CYCLE: true,
	MAX_CHILDREN: 3
};
var pentagonBossProps3 = c => {
	return {
		SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.one_fourth_reload]),
		TYPE: [exports.swarm, {
			CONTROLLERS: [c]
		}],
		STAT_CALCULATOR: gunCalcNames.swarm
	};
};
exports.pentagonBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'PK-1',
	DANGER: 8,
	SHAPE: 5,
	COLOR: 14,
	SIZE: 28,
	BOSS_TIER_TYPE: 3,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.9,
		SPEED: 1.5,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [7.8, 2, 0.61, 7, 5.44, 36, 0],
		PROPERTIES: pentagonBossProps3('nearestDifferentMaster')
	}, {
		POSITION: [7.8, 2, 0.61, 7, -5.44, 36, 0.5],
		PROPERTIES: pentagonBossProps3('canRepel')
	}, {
		POSITION: [7.8, 2, 0.61, 7, 5.44, 108, 0],
		PROPERTIES: pentagonBossProps3('nearestDifferentMaster')
	}, {
		POSITION: [7.8, 2, 0.61, 7, -5.44, 108, 0.5],
		PROPERTIES: pentagonBossProps3('canRepel')
	}, {
		POSITION: [7.8, 2, 0.61, 7, 5.44, 180, 0],
		PROPERTIES: pentagonBossProps3('nearestDifferentMaster')
	}, {
		POSITION: [7.8, 2, 0.61, 7, -5.44, 180, 0.5],
		PROPERTIES: pentagonBossProps3('canRepel')
	}, {
		POSITION: [7.8, 2, 0.61, 7, 5.44, -108, 0],
		PROPERTIES: pentagonBossProps3('nearestDifferentMaster')
	}, {
		POSITION: [7.8, 2, 0.61, 7, -5.44, -108, 0.5],
		PROPERTIES: pentagonBossProps3('canRepel')
	}, {
		POSITION: [7.8, 2, 0.61, 7, 5.44, -36, 0],
		PROPERTIES: pentagonBossProps3('nearestDifferentMaster')
	}, {
		POSITION: [7.8, 2, 0.61, 7, -5.44, -36, 0.5],
		PROPERTIES: pentagonBossProps3('canRepel')
	}, {
		POSITION: [2.7, 3.7, 2.2, 8, 0, 36, 0],
		PROPERTIES: pentagonBossProps1
	}, {
		POSITION: [2.7, 3.7, 2.2, 8, 0, 108, 0.2],
		PROPERTIES: pentagonBossProps1
	}, {
		POSITION: [2.7, 3.7, 2.2, 8, 0, 180, 0.4],
		PROPERTIES: pentagonBossProps1
	}, {
		POSITION: [2.7, 3.7, 2.2, 8, 0, -108, 0.6],
		PROPERTIES: pentagonBossProps1
	}, {
		POSITION: [2.7, 3.7, 2.2, 8, 0, -36, 0.8],
		PROPERTIES: pentagonBossProps1
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.twinMinigunAuto
	}]
};
exports.destroyerAutoGun = {
	LABEL: 'Destroyer',
	BODY: {
		FOV: 1.8
	},
	COLOR: 14,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.more_reload, g.minion, g.fast]),
			TYPE: exports.bullet
		}
	}]
};
exports.PK2_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 5,
	COLOR: 14,
	SIZE: 15,
	BODY: {
		FOV: 0.6,
		SPEED: 1.2,
		ACCELERATION: 0.2,
		HEALTH: 10,
		SHIELD: 1,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin',
	GUNS: [],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.destroyerAutoGun
	}]
};
exports.minigunAuto = {
	LABEL: 'Minigun',
	BODY: {
		FOV: 2
	},
	COLOR: 14,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [21, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 9, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 9, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.less_reload]),
			TYPE: exports.bullet
		}
	}]
};
var pentagonBossProps2 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.smaller]),
	TYPE: exports.PK2_Minion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1
};
exports.pentagonBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'PK-2',
	DANGER: 8,
	SHAPE: 5,
	COLOR: 14,
	SIZE: 34,
	BOSS_TIER_TYPE: 3,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.85,
		SPEED: 1.5,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [2.86, 6.49, 1, 11.5, 0, 36, 0]
	}, {
		POSITION: [1.6, 8.8, 1, 14.36, 0, 36, 0],
		PROPERTIES: pentagonBossProps2
	}, {
		POSITION: [5.5, 8.2, 1, 7.07, 0, 36, 0]
	}, {
		POSITION: [2.86, 6.49, 1, 11.5, 0, 108, 0]
	}, {
		POSITION: [1.6, 8.8, 1, 14.36, 0, 108, 0.2],
		PROPERTIES: pentagonBossProps2
	}, {
		POSITION: [5.5, 8.2, 1, 7.07, 0, 108, 0]
	}, {
		POSITION: [2.86, 6.49, 1, 11.5, 0, 180, 0]
	}, {
		POSITION: [1.6, 8.8, 1, 14.36, 0, 180, 0.4],
		PROPERTIES: pentagonBossProps2
	}, {
		POSITION: [5.5, 8.2, 1, 7.07, 0, 180, 0]
	}, {
		POSITION: [2.86, 6.49, 1, 11.5, 0, -108, 0]
	}, {
		POSITION: [1.6, 8.8, 1, 14.36, 0, -108, 0.6],
		PROPERTIES: pentagonBossProps2
	}, {
		POSITION: [5.5, 8.2, 1, 7.07, 0, -108, 0]
	}, {
		POSITION: [2.86, 6.49, 1, 11.5, 0, -36, 0]
	}, {
		POSITION: [1.6, 8.8, 1, 14.36, 0, -36, 0.8],
		PROPERTIES: pentagonBossProps2
	}, {
		POSITION: [5.5, 8.2, 1, 7.07, 0, -36, 0]
	}],
	TURRETS: [{
		POSITION: [6.4, 7.4, 0, 0, 160, 1],
		TYPE: exports.minigunAuto
	}, {
		POSITION: [6.4, 7.4, 0, 72, 160, 1],
		TYPE: exports.minigunAuto
	}, {
		POSITION: [6.4, 7.4, 0, 144, 160, 1],
		TYPE: exports.minigunAuto
	}, {
		POSITION: [6.4, 7.4, 0, -144, 160, 1],
		TYPE: exports.minigunAuto
	}, {
		POSITION: [6.4, 7.4, 0, -72, 160, 1],
		TYPE: exports.minigunAuto
	}]
};
exports.autoPounder = makeAuto(exports.pounder);
exports.autoFlankPound = makeAuto(exports.flankPound);
exports.tripletMinigunAuto = {
	LABEL: 'Minigun',
	BODY: {
		FOV: 2.1
	},
	COLOR: 14,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 7.5, 1, 0, 5.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7.5, 1, 0, 5.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 7.5, 1, 0, 5.75, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 7.5, 1, 0, 5.75, 0, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 7.5, 1, 0, -5.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7.5, 1, 0, -5.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 7.5, 1, 0, -5.75, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 7.5, 1, 0, -5.75, 0, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26, 7.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 7.5, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 7.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7.5, 1, 0, 0, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.gatlingAutoGun = {
	LABEL: 'Gatling',
	BODY: {
		FOV: 2
	},
	COLOR: 14,
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [14, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.weirdNailerGun1 = {
	LABEL: 'Nailer',
	BODY: {
		FOV: 1.8
	},
	COLOR: 16,
	CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 1.3, 1, 0, 6.1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 1.3, 1, 0, -6.1, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26.2, 1.3, 1, 0, -3, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26.2, 1.3, 1, 0, 3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 20, 0.68, 0, 0, 0, 0]
	}]
};
exports.weirdNailerGun2 = {
	LABEL: 'Nailer',
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 14,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 1.1, 1, 0, 6.6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 1.1, 1, 0, -6.6, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26, 1.1, 1, 0, -3.85, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26, 1.1, 1, 0, 3.85, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [29, 1.1, 1, 0, -1.26, 0, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [29, 1.1, 1, 0, 1.26, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 20, 0.75, 0, 0, 0, 0]
	}]
};
exports.triangleProp1 = {
	SHAPE: 3,
	COLOR: 14,
	GUNS: [{
		POSITION: [8.5, 5.2, 1.55, 6, -5.5, 168, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.5, 4.4, 1.75, 2, 7.2, 168, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleProp2 = {
	SHAPE: 3,
	COLOR: 14,
	GUNS: [{
		POSITION: [8.5, 5.2, 1.55, 6, 5.5, 192, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.5, 4.4, 1.75, 2, -7.2, 192, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.pentagonBossTier3 = {
	PARENT: [exports.genericTank],
	LABEL: 'PK-3',
	DANGER: 8,
	SHAPE: 5,
	COLOR: 14,
	SIZE: 45,
	BOSS_TIER_TYPE: 3,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.8,
		SPEED: 1.15,
		ACCELERATION: 0.7,
		HEALTH: 2000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	GUNS: [{
		POSITION: [18.2, 11.3, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.a_lotta_damage, g.fast, g.less_recoil, g.smaller]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [2.5, 4.6, 1, 13, 0, 0, 0]
	}, {
		POSITION: [1.6, 6.9, 1, 15.3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.machineMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 6
		}
	}, {
		POSITION: [5.6, 6.3, 1, 8.35, 0, 0, 0]
	}],
	TURRETS: [{
		POSITION: [9.9, -6.7, -11.6, 12, 0, 1],
		TYPE: exports.triangleProp1
	}, {
		POSITION: [9.9, -6.7, 11.6, -12, 0, 1],
		TYPE: exports.triangleProp2
	}, {
		POSITION: [6.2, 6.4, 0, 0, 160, 1],
		TYPE: exports.gatlingAutoGun
	}, {
		POSITION: [6.2, -5.4, 3.8, 0, 360, 1],
		TYPE: exports.tripletMinigunAuto
	}, {
		POSITION: [6.2, -5.4, -3.8, 0, 360, 1],
		TYPE: exports.tripletMinigunAuto
	}, {
		POSITION: [5, 6.2, 7.2, 0, 190, 0],
		TYPE: exports.weirdNailerGun1
	}, {
		POSITION: [5, 6.2, -7.2, 0, 190, 0],
		TYPE: exports.weirdNailerGun1
	}, {
		POSITION: [6.2, -4.1, -13.2, 0, 360, 1],
		TYPE: exports.weirdNailerGun2
	}, {
		POSITION: [6.2, -4.1, 13.2, 0, 360, 1],
		TYPE: exports.weirdNailerGun2
	}]
};
exports.railgunAuto2 = {
	LABEL: 'Railgun',
	BODY: {
		FOV: 2
	},
	COLOR: 14,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [41, 1.8, 1, 0, 4.5, 0, 0],
	}, {
		POSITION: [41, 1.8, 1, 0, -4.5, 0, 0],
	}, {
		POSITION: [0.65, 7.8, 1.01, 11.5, 0, 0, 0],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 14, 0, 0, 0.015],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 16.5, 0, 0, 0.03],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 19, 0, 0, 0.045],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 21.5, 0, 0, 0.06],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 24, 0, 0, 0.075],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 26.5, 0, 0, 0.09],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 29, 0, 0, 0.105],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 31.5, 0, 0, 0.12],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 34, 0, 0, 0.135],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 36.5, 0, 0, 0.15],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 39, 0, 0, 0.165],
		PROPERTIES: railgunProps1
	}, {
		POSITION: [0.65, 7.8, 1.01, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.half_reload, g.fast, g.minion, g.more_power]),
			TYPE: exports.bullet
		}
	}]
};
exports.PK4_Minion_1 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 5,
	COLOR: 14,
	SIZE: 22,
	BODY: {
		FOV: 0.6,
		SPEED: 1.21,
		ACCELERATION: 0.2,
		HEALTH: 10,
		SHIELD: 1,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin',
	GUNS: [],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.railgunAuto2
	}]
};
exports.spikeMinion = {
	PARENT: [exports.genericTank],
	LABEL: 'Spike Minion',
	TYPE: 'minion',
	DAMAGE_CLASS: 0,
	HITS_OWN_TYPE: 'hard',
	FACING_TYPE: 'smoothToTarget',
	BODY: {
		FOV: 0.5,
		SPEED: 3.5,
		ACCELERATION: 0.5,
		HEALTH: 8,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 200
	},
	AI: {
		BLIND: true
	},
	DRAW_HEALTH: false,
	CLEAR_ON_MASTER_UPGRADE: true,
	GIVE_KILL_MESSAGE: false,
	CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal', 'hangOutNearMaster'],
	TURRETS: [{
		POSITION: [20.5, 0, 0, 0, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20.5, 0, 0, 120, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20.5, 0, 0, 240, 360, 0],
		TYPE: exports.spikeBody
	}]
};
exports.PK4_Minion_2 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 5,
	COLOR: 14,
	SIZE: 32,
	BODY: {
		FOV: 0.6,
		SPEED: 1.15,
		ACCELERATION: 0.2,
		HEALTH: 15,
		SHIELD: 1,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [3, 8.5, 1, 12, 0, 36, 0]
	}, {
		POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.spikeMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
	}, {
		POSITION: [3, 8.5, 1, 12, 0, 108, 0]
	}, {
		POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.spikeMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
	}, {
		POSITION: [3, 8.5, 1, 12, 0, 180, 0]
	}, {
		POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.spikeMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
	}, {
		POSITION: [3, 8.5, 1, 12, 0, -108, 0]
	}, {
		POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.spikeMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
	}, {
		POSITION: [3, 8.5, 1, 12, 0, -36, 0]
	}, {
		POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.spikeMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
	}],
	TURRETS: [{
		POSITION: [9.5, 0, 0, 0, 360, 1],
		TYPE: exports.gunnerAutoGun
	}]
};
exports.longAssassinAutoGun = {
	LABEL: 'Guardsman',
	BODY: {
		FOV: 2
	},
	COLOR: 14,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [42, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.minion, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [7, 8, 0.6, 1, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.PK4_Minion_3 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 5,
	COLOR: 14,
	SIZE: 32,
	BODY: {
		FOV: 0.6,
		SPEED: 1.15,
		ACCELERATION: 0.2,
		HEALTH: 15,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [11, 4.6, 0.6, 7, 3.3, 36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, -3.3, 36, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, 3.3, 108, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, -3.3, 108, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, 3.3, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, -3.3, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, 3.3, -108, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, -3.3, -108, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, 3.3, -36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [11, 4.6, 0.6, 7, -3.3, -36, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.less_range, g.one_fourth_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [9.7, 0, 0, 0, 360, 1],
		TYPE: exports.longAssassinAutoGun
	}]
};
exports.triangleProp3 = {
	SHAPE: 3,
	COLOR: 14,
	GUNS: [{
		POSITION: [8.5, 5.2, 1.55, 6, -5.5, 168, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.5, 4.4, 1.75, 2, 7.2, 168, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 1.2, 1, -3, -13, -12, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.minion, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 1.2, 1, -1, -9, -12, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.minion, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleProp4 = {
	SHAPE: 3,
	COLOR: 14,
	GUNS: [{
		POSITION: [8.5, 5.2, 1.55, 6, 5.5, 192, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12.5, 4.4, 1.75, 2, -7.2, 192, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.half_recoil, g.less_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 1.2, 1, -3, 13, 12, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.minion, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 1.2, 1, -1, 9, 12, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.minion, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.skimmerAutoGun = {
	LABEL: 'Skimmer',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [10, 14, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [17, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.minion, g.more_speed, g.half_reload]),
			TYPE: exports.halfReloadMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.hyperMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Hyper Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 140
	},
	GUNS: [{
		POSITION: [12.5, 20, 1, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 9.6, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.skim, g.double_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [7, 10, 1.6, 8, 0, 180, 0.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.skim, g.double_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.PK4_Minion_4 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 5,
	COLOR: 14,
	SIZE: 34,
	BODY: {
		FOV: 0.6,
		SPEED: 1.11,
		ACCELERATION: 0.19,
		HEALTH: 18,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [18.2, 11.3, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.a_lotta_damage, g.fast, g.smaller, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [6, 3.5, 1.5, 19, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.minion, g.less_reload, g.fake]),
			TYPE: exports.hyperMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [6, 3.5, 1.5, 17, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.minion, g.less_reload, g.fake]),
			TYPE: exports.hyperMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [21, 6.5, 1.01, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.minion, g.more_power, g.more_speed, g.more_speed, g.less_reload]),
			TYPE: exports.hyperMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [13.1, 15, 0.433, 0, 0, 0, 0]
	}],
	TURRETS: [{
		POSITION: [9.9, -6.7, -11.6, 12, 0, 1],
		TYPE: exports.triangleProp3
	}, {
		POSITION: [9.9, -6.7, 11.6, -12, 0, 1],
		TYPE: exports.triangleProp4
	}, {
		POSITION: [5.5, -4.1, -13.2, 0, 360, 1],
		TYPE: exports.skimmerAutoGun
	}, {
		POSITION: [5.5, -4.1, 13.2, 0, 360, 1],
		TYPE: exports.skimmerAutoGun
	}, {
		POSITION: [9.5, 0, 0, 0, 360, 1],
		TYPE: exports.gunnerAutoGun
	}]
};
exports.insectMinion = {
	PARENT: [exports.minion],
	LABEL: 'Insect Minion',
	HAS_NO_RECOIL: true,
	HITS_OWN_TYPE: 'hard',
	GUNS: [{
		POSITION: [20, 6, 1, 0, 0, 90, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, -90, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, 52, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, -52, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, 126, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, -126, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, 162, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, -162, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5.5, 1.5, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.double_reload, g.minion]),
			TYPE: exports.bullet
		}
	}]
};
exports.stackedSkimmerAutoGun = {
	LABEL: 'Stacked Skimmer',
	BODY: {
		FOV: 1.9
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [4, 5, 1.26, 19.6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.halfReloadMissile
		}
	}, {
		POSITION: [23, 8, 1, -1, 0, 0, 0]
	}, {
		POSITION: [4, 11, 1.2, 15, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.halfReloadMissile
		}
	}, {
		POSITION: [18, 15, 1, -1, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch]),
			TYPE: exports.insectMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}]
};
exports.PK4_Minion_5 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 5,
	COLOR: 14,
	SIZE: 40,
	BODY: {
		FOV: 0.6,
		SPEED: 1.1,
		ACCELERATION: 0.18,
		HEALTH: 20,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [18.2, 11.3, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.a_lotta_damage, g.fast, g.smaller, g.minion]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [9.9, -6.7, -11.6, 12, 0, 1],
		TYPE: exports.triangleProp1
	}, {
		POSITION: [9.9, -6.7, 11.6, -12, 0, 1],
		TYPE: exports.triangleProp2
	}, {
		POSITION: [6.2, -4.1, -13.2, 0, 360, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [6.2, -4.1, 13.2, 0, 360, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [13, -0.75, 0, 0, 360, 1],
		TYPE: exports.stackedSkimmerAutoGun
	}]
};
exports.obliteratorAutoGun = {
	LABEL: 'Obliterator',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 14,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [35, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.pound, g.fast, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15.5, 20, 0.7, 0, 0, 0, 0]
	}]
};
exports.pentagonBossTier4 = {
	PARENT: [exports.genericTank],
	LABEL: 'PK-4',
	DANGER: 9,
	SHAPE: 5,
	COLOR: 14,
	SIZE: 76,
	BOSS_TIER_TYPE: 3,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.75,
		SPEED: 1.1,
		ACCELERATION: 0.6,
		HEALTH: 2500,
		DAMAGE: 5,
		REGEN: 0.015
	},
	GUNS: [{
		POSITION: [1.667, 4.42, 1, 10.267, -3.2, 36, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, -3.2, 36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, -3.2, 36, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, 3.2, 36, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, 3.2, 36, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, 3.2, 36, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, -3.2, 108, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, -3.2, 108, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_3,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, -3.2, 108, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, 3.2, 108, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, 3.2, 108, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_4,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, 3.2, 108, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, 3.2, -36, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, 3.2, -36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_1,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, 3.2, -36, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, -3.2, -36, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, -3.2, -36, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_2,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, -3.2, -36, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, 3.2, -108, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, 3.2, -108, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_3,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, 3.2, -108, 0]
	}, {
		POSITION: [1.667, 4.42, 1, 10.267, -3.2, -108, 0]
	}, {
		POSITION: [1.25, 5.81, 1.01, 12, -3.2, -108, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.near_double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_4,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.06, 5.367, 1, 7.81, -3.2, -108, 0]
	}, {
		POSITION: [3, 9.5, 1, 13.5, 0, 180, 0]
	}, {
		POSITION: [2.3, 12, 1.01, 16.5, 0, 180, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bit_bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.PK4_Minion_5,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [5.5, 11.2, 1, 9.07, 0, 180, 0]
	}],
	TURRETS: [{
		POSITION: [3.45, 5.7, 1.85, 36, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, -1.85, 36, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, 1.85, 108, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, -1.85, 108, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, 1.85, 180, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, -1.85, 180, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, 1.85, -108, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, -1.85, -108, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, 1.85, -36, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [3.45, 5.7, -1.85, -36, 160, 1],
		TYPE: [exports.gunnerAutoGun, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [5.85, 0, 0, 0, 360, 1],
		TYPE: exports.obliteratorAutoGun
	}]
};
var pelletGuns = a => {
	return [{
		POSITION: [17, 2, 1, 0, 3, a, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, -3, a, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, a, 0]
	}];
};
var borerGuns = a => {
	return [{
		POSITION: [22, 2, 1, 0, 3, a, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 2, 1, 0, -3, a, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, a, 0]
	}];
};
var hewnPelletGuns = a => {
	return [{
		POSITION: [17, 2, 1, 0, 3, a, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 1.95, 1, 0, -3, a, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 1.95, 1, -2.7, 2, 22.5 + a, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.more_reload, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, -2.7, -2, -22.5 + a, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.more_reload, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, a, 0]
	}];
};
var hewnPelletGuns2 = a => {
	return [{
		POSITION: [17, 2, 1, -2.7, 0, -36 + a, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.fast, g.more_reload, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}];
};
var puntGuns = a => {
	return [{
		POSITION: [18, 2, 1, 0, 3, a, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, a, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, a, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, a, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, a, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, a, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, a, 0]
	}];
};
exports.triPellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Pelleter',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.85
	},
	GUNS: []
};
exports.pentaPellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta-Pelleter',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: []
};
exports.gunborer = {
	PARENT: [exports.genericTank],
	DANGER: 7,
	LABEL: 'Gunner Borer',
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [20, 2.5, 1, 0, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2.5, 1, 0, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 2.5, 1, 0, 2, 0, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 2.5, 1, 0, -2, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.6, 7, 0, 0, 0]
	}]
};
exports.scorpion = {
	PARENT: [exports.genericTank],
	DANGER: 7,
	LABEL: 'Scorpion',
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [23, 3.5, 1, 0, 3.2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 3.5, 1, 0, -3.2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.bit_more_damage]),
			TYPE: exports.bullet,
		},
	}, {
		POSITION: [5, 9.9, -1.5, 7, 0, 0, 0]
	}]
};
exports.piercer = {
	PARENT: [exports.genericTank],
	LABEL: 'Piercer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [23, 2.5, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 2.5, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.6, 7, 0, 0, 0]
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.punter = {
	PARENT: [exports.genericTank],
	LABEL: 'Punter',
	DANGER: 7,
	GUNS: [{
		POSITION: [18, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0.9],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, 0, 0, 1.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 0, 0, 3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triple, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.puntMini = {
	PARENT: [exports.genericTank],
	LABEL: 'Punt Mini',
	DANGER: 7,
	GUNS: [{
		POSITION: [20, 2, 1, 0, 3, 0, 1.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, -3, 0, 3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.sword = {
	PARENT: [exports.genericTank],
	LABEL: 'Sword',
	DANGER: 7,
	GUNS: [{
		POSITION: [24, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 5, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 5, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet,
		},
	}, {
		POSITION: [18, 5, 1, 0, 0, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 5, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 5, 1, 0, 0, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 9, -1.6, 7, 0, 0, 0.9]
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.warship = {
	PARENT: [exports.genericTank],
	LABEL: 'Warship',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.moonburst = {
	PARENT: [exports.genericTank],
	LABEL: 'Moonburst',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [13, 4, 1, 0, -3, -30, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 4, 1, 0, 3, 30, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, -3, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 3, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 4, 1, 0, -2, -10, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 4, 1, 0, 2, 10, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_power, g.less_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoPellet = makeAuto(exports.pellet);
exports.autoBorer = makeAuto(exports.borer);
exports.autoPunt = makeAuto(exports.punt);
exports.autoHewnPellet = makeAuto(exports.hewnPellet);
exports.autoSail = makeAuto(exports.sail);
exports.hybridPellet = makeHybrid(exports.pellet);
exports.hybridBorer = makeHybrid(exports.borer);
exports.hybridPunt = makeHybrid(exports.punt, 'Spitter');
exports.hybridHewnPellet = makeHybrid(exports.hewnPellet, 'Blabber');
exports.hybridSail = makeHybrid(exports.sail);
exports.eagle = {
	PARENT: [exports.genericTank],
	LABEL: 'Eagle',
	DANGER: 7,
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bit_less_reload]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Pounder'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.octoAutoGun = {
	LABEL: 'Octo Tank',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 315, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.OPDualAutoGun1 = {
	LABEL: 'OP Dual',
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [13.2, 5.3, 1, 0, 5.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [11.6, 6.9, 1, 0, 5.75, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1, 0, 5.75, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [13.2, 5.3, 1, 0, -5.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [11.6, 6.9, 1, 0, -5.75, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1, 0, -5.75, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14.8, 5.3, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [13.2, 6.9, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [11.6, 8.5, 1, 0, 0, 0, 0.7],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.OPDualAutoGun2 = {
	LABEL: 'Mega Dual',
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [13.2, 5.3, 1, 0, 5.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [11.6, 6.9, 1, 0, 5.75, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1, 0, 5.75, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [13.2, 5.3, 1, 0, -5.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [11.6, 6.9, 1, 0, -5.75, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [10, 8.5, 1, 0, -5.75, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [21.8, 2.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20.6, 4, 1, 0, 0, 0, 0.55],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [19.4, 5.5, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_less_damage, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18.2, 7, 1, 0, 0, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 8.5, 1, 0, 0, 0, 0.7],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [8.2, 3, 1.56, 8, 3.2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [8.2, 3, 1.56, 8, -3.2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.less_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.scalerAutoGun = {
	LABEL: 'Scaler',
	BODY: {
		FOV: 1.9
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [16, 3, 1, 0, 7.9, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.one_fourth_reload, g.half_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 0, -7.9, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.one_fourth_reload, g.half_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 4, 1, 0, 5.1, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.half_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 4, 1, 0, -5.1, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.half_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.one_fourth_reload, g.half_reload, g.more_reload]),
			TYPE: exports.bullet,
		}
	}]
};
exports.OPPredatorAutoGun1 = {
	LABEL: 'Predator',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [19, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 15, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.5, 19, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.OPPredatorAutoGun2 = {
	LABEL: 'X-Predator',
	BODY: {
		FOV: 2.1
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 3, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20.5, 5.5, 1, 0, 0, 0, 0.11],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 0, 0, 0.22],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 10.5, 1, 0, 0, 0, 0.33],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 13, 1, 0, 0, 0, 0.44],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.5, 15.5, 1, 0, 0, 0, 0.55],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 18, 1, 0, 0, 0, 0.66],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.more_speed, g.half_reload, g.less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.ultraCannonMinion = {
	PARENT: [exports.minion],
	LABEL: 'Ultra Cannon Minion',
	HAS_NO_RECOIL: true,
	BODY: {
		FOV: 0.6,
		SPEED: 1,
		ACCELERATION: 0.2,
		HEALTH: 45,
		SHIELD: 1,
		DAMAGE: 1.5,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	GUNS: [{
		POSITION: [26, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 7, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 10, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 13, 1, 0, 0, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 16, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.minion]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [4.5, 7.5, 0, 60, 180, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [4.5, 7.5, 0, 180, 180, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [4.5, 7.5, 0, 300, 180, 1],
		TYPE: exports.superHeavyMach
	}, {
		POSITION: [5.5, 6.5, 0, 0, 120, 1],
		TYPE: exports.carnivoreAutoGun
	}, {
		POSITION: [5.5, 6.5, 0, 120, 120, 1],
		TYPE: exports.carnivoreAutoGun
	}, {
		POSITION: [5.5, 6.5, 0, 240, 120, 1],
		TYPE: exports.carnivoreAutoGun
	}, {
		POSITION: [5.5, 9.5, 0, 72, 180, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [5.5, 9.5, 0, 144, 120, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [5.5, 9.5, 0, -72, 180, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [5.5, 9.5, 0, -144, 120, 0],
		TYPE: [exports.autoRangerGun2, {
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}]
};
exports.ultraSmasherBody = {
	COLOR: 34,
	SHAPE: 6,
	INDEPENDENT: true
};
exports.eggBossCircleProp = {
	SHAPE: 0,
	COLOR: 8
};
exports.ultraSmasherMinion = {
	PARENT: [exports.minion],
	LABEL: 'Ultra Smasher Minion',
	SHAPE: 6,
	BODY: {
		FOV: 0.5,
		SPEED: 1.25,
		ACCELERATION: 0.25,
		HEALTH: 50,
		SHIELD: 1,
		DAMAGE: 2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin',
	GUNS: [],
	TURRETS: [{
		POSITION: [20.1, 0, 0, 0, 360, 1],
		TYPE: exports.ultraSmasherBody
	}, {
		POSITION: [16.5, 0, 0, 0, 360, 1],
		TYPE: exports.eggBossCircleProp
	}, {
		POSITION: [7.5, 9, 0, 0, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 120, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 180, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 240, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 300, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 0, 0, 30, 360, 1],
		TYPE: exports.weirdGunnerAuto1
	}]
};
exports.falconMinion = {
	PARENT: [exports.minion],
	LABEL: 'Falcon Minion',
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.eagleMinion = {
	PARENT: [exports.minion],
	LABEL: 'Eagle Minion',
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.one_fourth_reload]),
			TYPE: exports.bullet,
			LABEL: 'Pounder'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.eggBossTier5 = {
	PARENT: [exports.genericTank],
	LABEL: 'EK-5',
	DANGER: 9,
	SHAPE: 16,
	COLOR: 8,
	SIZE: 100,
	BOSS_TIER_TYPE: 0,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'spinSlowly2',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.74,
		SPEED: 0.9,
		ACCELERATION: 0.1,
		HEALTH: 3500,
		DAMAGE: 6,
		REGEN: 0.015
	},
	GUNS: [{
		POSITION: [1.67, 2.45, 1, 10.48, 0, 180, 0]
	}, {
		POSITION: [1, 3.7, 1.01, 12.2, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bit_smaller, g.half_reload, g.very_fast_launch]),
			TYPE: exports.ultraSmasherMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [3.4, 3.4, 1, 8, 0, 180, 0]
	}, {
		POSITION: [1.67, 2.45, 1, 10.48, 0, 0, 0]
	}, {
		POSITION: [1, 3.7, 1.01, 12.2, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bit_bigger, g.half_reload, g.very_fast_launch]),
			TYPE: exports.ultraCannonMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.4, 3.4, 1, 8, 0, 0, 0]
	}, {
		POSITION: [0.815, 1.25, 1, 10.11, 0.98, 90, 0]
	}, {
		POSITION: [0.49, 1.81, 1.01, 11, 0.98, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.eagleMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [1.66, 1.66, 1, 8.9, 0.98, 90, 0]
	}, {
		POSITION: [0.815, 1.25, 1, 10.11, -0.98, 90, 0]
	}, {
		POSITION: [0.49, 1.81, 1.01, 11, -0.98, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.falconMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [1.66, 1.66, 1, 8.9, -0.98, 90, 0]
	}, {
		POSITION: [0.815, 1.25, 1, 10.11, 0.98, 270, 0]
	}, {
		POSITION: [0.49, 1.81, 1.01, 11, 0.98, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.eagleMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [1.66, 1.66, 1, 8.9, 0.98, 270, 0]
	}, {
		POSITION: [0.815, 1.25, 1, 10.11, -0.98, 270, 0]
	}, {
		POSITION: [0.49, 1.81, 1.01, 11, -0.98, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.half_reload, g.very_fast_launch]),
			TYPE: exports.falconMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [1.66, 1.66, 1, 8.9, -0.98, 270, 0]
	}],
	TURRETS: [{
		POSITION: [4.6, 10, 0, 22.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 67.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 112.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 157.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 202.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 247.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 292.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [4.6, 10, 0, 337.5, 190, 0],
		TYPE: exports.OPPredatorAutoGun2
	}, {
		POSITION: [3.1, 10, 0, 45, 190, 0],
		TYPE: exports.OPPredatorAutoGun1
	}, {
		POSITION: [3.1, 10, 0, 135, 190, 0],
		TYPE: exports.OPPredatorAutoGun1
	}, {
		POSITION: [3.1, 10, 0, 225, 190, 0],
		TYPE: exports.OPPredatorAutoGun1
	}, {
		POSITION: [3.1, 10, 0, 315, 190, 0],
		TYPE: exports.OPPredatorAutoGun1
	}, {
		POSITION: [2.2, 6.8, 0, 90, 220, 1],
		TYPE: exports.scalerAutoGun
	}, {
		POSITION: [2.2, 6.8, 0, 270, 220, 1],
		TYPE: exports.scalerAutoGun
	}, {
		POSITION: [2.1, 6.2, 4.1, 0, 360, 1],
		TYPE: exports.octoAutoGun
	}, {
		POSITION: [2.1, 6.2, -4.1, 0, 360, 1],
		TYPE: exports.octoAutoGun
	}, {
		POSITION: [2.1, -6.2, 4.1, 0, 360, 1],
		TYPE: exports.octoAutoGun
	}, {
		POSITION: [2.1, -6.2, -4.1, 0, 360, 1],
		TYPE: exports.octoAutoGun
	}, {
		POSITION: [4.75, 6.5, 0, 0, 220, 1],
		TYPE: exports.OPDualAutoGun1
	}, {
		POSITION: [4.75, 6.5, 0, 180, 220, 1],
		TYPE: exports.OPDualAutoGun1
	}, {
		POSITION: [6.2, 0, 0, 90, 361, 1],
		TYPE: exports.OPDualAutoGun2
	}]
};
exports.clicker = {
	PARENT: [exports.genericTank],
	LABEL: 'Clicker',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.5, -1.3, 5, 0, 0, 0]
	}]
};
exports.rifleClicker = {
	PARENT: [exports.genericTank],
	LABEL: 'Basher',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.8,
		FOV: 1.225
	},
	GUNS: [{
		POSITION: [17, 8.5, 1, 5, 0, 0, 0]
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.click]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.click]),
			TYPE: exports.bullet
		}
	}]
};
exports.megaClicker = {
	PARENT: [exports.genericTank],
	LABEL: 'Puncher',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.power, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.power, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.power, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.power, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}	
	}, {
		POSITION: [24, 4, 1.1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.power, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 8.5, -1.4, 5, 0, 0, 0]
	}]
};
exports.longClicker = {
	PARENT: [exports.genericTank],
	LABEL: 'Clipper',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.8,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [25, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.click, g.faster]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.click, g.faster]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.click, g.faster]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.click, g.faster]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.click, g.faster]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.5, -1.3, 5, 0, 0, 0]
	}]
};
exports.eggBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'EK-1',
	DANGER: 8,
	BOSS_TIER_TYPE: 0,
	COLOR: 34,
	COLOR_OVERRIDE: 8,
	SHAPE: 6,
	SIZE: 25,
	FACING_TYPE: 'autospin',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.85,
		SPEED: 1.3,
		ACCELERATION: 0.3,
		HEALTH: 500,
		DENSITY: base.DENSITY * 2
	},
	TURRETS: [{
		POSITION: [16.5, 0, 0, 0, 360, 1],
		TYPE: exports.eggBossCircleProp
	}, {
		POSITION: [7.5, 9, 0, 0, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 120, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 180, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 240, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 9, 0, 300, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.5, 0, 0, 30, 360, 1],
		TYPE: exports.weirdGunnerAuto1
	}]
};
exports.weirdGunnerAuto3 = {
	LABEL: 'Gunner',
	BODY: {
		FOV: 1.5
	},
	COLOR: 8,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [14, 2, 1, 0, 9, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -9, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.5, 1, 0, 2.65, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3.5, 1, 0, -2.65, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}],
	HAS_NO_RECOIL: true
};
exports.eggBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'EK-2',
	DANGER: 8,
	BOSS_TIER_TYPE: 0,
	LEVEL: 45,
	VALUE: 26302,
	COLOR: 34,
	COLOR_OVERRIDE: 8,
	SHAPE: 6,
	SIZE: 32,
	FACING_TYPE: 'autospin',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.85,
		SPEED: 1.25,
		ACCELERATION: 0.25,
		HEALTH: 1000,
		DAMAGE: 6,
		REGEN: 0.015,
		DENSITY: base.DENSITY * 2
	},
	GUNS: [{
		POSITION: [6, 3, 0.5, 8, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_more_damage]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 3, 0.5, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_more_damage]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 3, 0.5, 8, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_more_damage]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [16, 0, 0, 0, 360, 1],
		TYPE: exports.eggBossCircleProp
	}, {
		POSITION: [2.5, 10, 3.7, 60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10, -3.7, 60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10, 3.7, 180, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10, -3.7, 180, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10, 3.7, 300, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10, -3.7, 300, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [10.2, 9.6, 0, 0, 190, 0],
		TYPE: exports.weirdGunnerAuto3
	}, {
		POSITION: [10.2, 9.6, 0, 120, 190, 0],
		TYPE: exports.weirdGunnerAuto3
	}, {
		POSITION: [10.2, 9.6, 0, 240, 190, 0],
		TYPE: exports.weirdGunnerAuto3
	}, {
		POSITION: [5.6, 0, 0, 0, 360, 1],
		TYPE: [exports.autoTurret, {
			CONTROLLERS: ['nearestDifferentMaster']
		}]
	}]
};
exports.sparkBullet1 = {
	PARENT: [exports.missile],
	LABEL: 'Sparkler Bullet',
	HITS_OWN_TYPE: 'hardOnlyDrones',
	SHAPE: 6,
	BODY: {
		RANGE: 200
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 0, 3],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 1, 3.1],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -1, 3.2],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 2, 3.3],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -2, 3.4],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 3, 3.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -3, 3.6],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 4, 3.7],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 0, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.sparkBullet2 = {
	PARENT: [exports.missile],
	LABEL: 'Sparkler Bullet',
	HITS_OWN_TYPE: 'hardOnlyDrones',
	SHAPE: 6,
	BODY: {
		RANGE: 200
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 0, 3],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -1, 3.1],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 1, 3.2],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -2, 3.3],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 2, 3.4],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -3, 3.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 3, 3.6],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, -4, 3.7],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 0, 3.8],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.more_reload, g.low_power, g.more_recoil, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.spark = {
	PARENT: [exports.genericTank],
	LABEL: 'Sparkler',
	DANGER: 7,
	BODY: {
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [10, 14, -0.9, 9, 0, 0, 0]
	}, {
		POSITION: [14, 15, 1.2, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim, g.hyperspeed, g.hyperspeed, g.half_reload]),
			TYPE: exports.sparkBullet1,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [14, 15, 1.2, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim, g.hyperspeed, g.hyperspeed, g.half_reload]),
			TYPE: exports.sparkBullet2,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.twinAutoGun3 = {
	LABEL: 'Twin',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 7, 1, 0, 6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 7, 1, 0, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.half_reload, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.shifterAutoGun2 = {
	LABEL: 'Shifter',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.half_reload, g.more_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17.5, 15, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.half_reload, g.more_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.eggBossTier3 = {
	PARENT: [exports.genericTank],
	LABEL: 'EK-3',
	DANGER: 8,
	BOSS_TIER_TYPE: 0,
	LEVEL: 45,
	VALUE: 26302,
	COLOR: 34,
	COLOR_OVERRIDE: 8,
	SHAPE: 12,
	SIZE: 42,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.78,
		SPEED: 1.15,
		ACCELERATION: 0.2,
		HEALTH: 1500,
		DAMAGE: 6,
		REGEN: 0.015,
		DENSITY: base.DENSITY * 2
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [8, 2.3, 0.46, 7, 1.3, 30, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, -1.3, 30, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, 1.3, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, -1.3, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, 1.3, 150, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, -1.3, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, 1.3, 210, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, -1.3, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, 1.3, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, -1.3, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, 1.3, 330, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [8, 2.3, 0.46, 7, -1.3, 330, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload, g.no_recoil]),
			TYPE: [exports.autoSwarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [16.6, 0, 0, 0, 360, 1],
		TYPE: exports.eggBossCircleProp
	}, {
		POSITION: [3.5, 5.5, 0, 0, 361, 1],
		TYPE: [exports.directorAutoGun, {
			MAX_CHILDREN: 5
		}]
	}, {
		POSITION: [3.5, 5.5, 0, 120, 361, 1],
		TYPE: [exports.directorAutoGun, {
			MAX_CHILDREN: 5
		}]
	}, {
		POSITION: [3.5, 5.5, 0, 240, 361, 1],
		TYPE: [exports.directorAutoGun, {
			MAX_CHILDREN: 5
		}]
	}, {
		POSITION: [2, 10.2, 1.5, 0, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, -1.5, 0, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, 1.5, 60, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, -1.5, 60, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, 1.5, 120, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, -1.5, 120, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, 1.5, 180, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, -1.5, 180, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, 1.5, 240, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, -1.5, 240, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, 1.5, 300, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [2, 10.2, -1.5, 300, 190, 0],
		TYPE: exports.twinAutoGun3
	}, {
		POSITION: [6.4, 0, 0, 180, 361, 1],
		TYPE: exports.shifterAutoGun2
	}]
};
exports.pentaAutoGun = {
	LABEL: 'Penta Shot',
	BODY: {
		FOV: 1.9
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [16, 8, 1, 0, -3, -30, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.minion, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, 0, 3, 30, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.minion, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -2, -15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.minion, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.minion, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.minion, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.EK4_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 8,
	COLOR: 8,
	SIZE: 26,
	BODY: {
		FOV: 0.6,
		SPEED: 0.6,
		ACCELERATION: 0.26,
		HEALTH: 25,
		SHIELD: 1,
		DAMAGE: 1.5,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	HAS_NO_RECOIL: true,
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [7, 2.3, 0.46, 7, 1.3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.swarm, {
				LAYER: 5.5,
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, -1.3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 5.5
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, 1.3, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.swarm, {
				LAYER: 5.5,
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, -1.3, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 5.5
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, 1.3, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.swarm, {
				LAYER: 5.5,
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, -1.3, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 5.5
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, 1.3, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.swarm, {
				LAYER: 5.5,
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 2.3, 0.46, 7, -1.3, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_third_reload]),
			TYPE: [exports.autoSwarm, {
				LAYER: 5.5
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [2.5, 10.6, 0, 22.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 67.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 112.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 157.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 202.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 247.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 292.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [2.5, 10.6, 0, 337.5, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [5.1, 10, 0, 45, 180, 0],
		TYPE: exports.pentaAutoGun
	}, {
		POSITION: [5.1, 10, 0, 135, 180, 0],
		TYPE: exports.pentaAutoGun
	}, {
		POSITION: [5.1, 10, 0, 225, 180, 0],
		TYPE: exports.pentaAutoGun
	}, {
		POSITION: [5.1, 10, 0, 315, 180, 0],
		TYPE: exports.pentaAutoGun
	}, {
		POSITION: [12, 0, 0, 22.5, 361, 1],
		TYPE: exports.weirdGunnerAuto2
	}]
};
exports.weirdTwinAutoGun = {
	LABEL: 'Dual Single',
	BODY: {
		FOV: 1.9
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [19.4, 5, 1, 0, 6, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.half_reload, g.half_recoil]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [9.5, 7.5, 0.65, 2, 6, 0, 0]
	}, {
		POSITION: [19.4, 5, 1, 0, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.half_reload, g.half_recoil]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [9.5, 7.5, 0.65, 2, -6, 0, 0]
	}]
};
var eggBossProps1 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.one_fourth_reload]),
	TYPE: exports.bullet
};
exports.eggBossTier4 = {
	PARENT: [exports.genericTank],
	LABEL: 'EK-4',
	DANGER: 8,
	BOSS_TIER_TYPE: 0,
	LEVEL: 45,
	VALUE: 26302,
	COLOR: 34,
	COLOR_OVERRIDE: 8,
	SHAPE: 12,
	SIZE: 56,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.75,
		SPEED: 1.1,
		ACCELERATION: 0.15,
		HEALTH: 2000,
		DAMAGE: 6,
		REGEN: 0.015,
		DENSITY: base.DENSITY * 2
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [6, 3, 0.5, 8, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 3, 0.5, 8, 0, 150, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 3, 0.5, 8, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 3, 0.5, 8, 0, 330, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [12.5, 0.39, 1, 0, 1.91, 30, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, 0.9, 30, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, 1.4, 30, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, 1.4, 30, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, -1.91, 30, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, -0.9, 30, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, -1.4, 30, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, -1.4, 30, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, 1.91, 120, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, 0.9, 120, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, 1.4, 120, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, 1.4, 120, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, -1.91, 120, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, -0.9, 120, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, -1.4, 120, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, -1.4, 120, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, 1.91, 210, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, 0.9, 210, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, 1.4, 210, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, 1.4, 210, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, -1.91, 210, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, -0.9, 210, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, -1.4, 210, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, -1.4, 210, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, 1.91, 300, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, 0.9, 300, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, 1.4, 300, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, 1.4, 300, 0]
	}, {
		POSITION: [12.5, 0.39, 1, 0, -1.91, 300, 0.667],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.5, 0.39, 1, 0, -0.9, 300, 0.333],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [12.833, 0.39, 1, 0, -1.4, 300, 0],
		PROPERTIES: eggBossProps1
	}, {
		POSITION: [2.4, 1.6, -2.5, 8.5, -1.4, 300, 0]
	}, {
		POSITION: [1.79, 3, 1, 10.71, 0, 0, 0]
	}, {
		POSITION: [1, 4.31, 1, 12.2, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.bigger, g.fast_launch]),
			TYPE: exports.EK4_Minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.31, 4, 1, 7.94, 0, 0, 0]
	}, {
		POSITION: [1.79, 3, 1, 10.71, 0, 180, 0]
	}, {
		POSITION: [1, 4.31, 1, 12.2, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.bigger, g.fast_launch]),
			TYPE: exports.EK4_Minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.31, 4, 1, 7.94, 0, 180, 0]
	}, {
		POSITION: [1.79, 3, 1, 10.71, 0, 90, 0]
	}, {
		POSITION: [1, 4.31, 1, 12.2, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.fast_launch]),
			TYPE: exports.falconMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.31, 4, 1, 7.94, 0, 90, 0]
	}, {
		POSITION: [1.79, 3, 1, 10.71, 0, 270, 0]
	}, {
		POSITION: [1, 4.31, 1, 12.2, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.fast_launch]),
			TYPE: exports.eagleMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [3.31, 4, 1, 7.94, 0, 270, 0]
	}],
	TURRETS: [{
		POSITION: [18, 0, 0, 0, 360, 1],
		TYPE: exports.eggBossCircleProp
	}, {
		POSITION: [4.7, 6.1, 0, 45, 360, 1],
		TYPE: exports.weirdTwinAutoGun
	}, {
		POSITION: [4.7, 6.1, 0, 135, 360, 1],
		TYPE: exports.weirdTwinAutoGun
	}, {
		POSITION: [4.7, 6.1, 0, 225, 360, 1],
		TYPE: exports.weirdTwinAutoGun
	}, {
		POSITION: [4.7, 6.1, 0, 315, 360, 1],
		TYPE: exports.weirdTwinAutoGun
	}]
};
exports.boomerAutoGun = {
	LABEL: 'Boomer',
	BODY: {
		FOV: 1.15
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [7, 10, 1, 12, 0, 0, 0]
	}, {
		POSITION: [6, 10, -1.5, 7, 0, 0, 0]
	}, {
		POSITION: [2, 10, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.half_reload]),
			TYPE: exports.boomerang
		}
	}]
};
exports.hexagonBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'HK-1',
	DANGER: 8,
	SHAPE: -6,
	COLOR: 22,
	SIZE: 35,
	BOSS_TIER_TYPE: 4,
	LEVEL: 45,
	VALUE: 26302,
	HAS_NO_RECOIL: true,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.9,
		SPEED: 1.25,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [11, 8, 0, 120, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [11, 8, 0, 240, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [9, 8, 0, 60, 190, 0],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [9, 8, 0, 180, 190, 0],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [9, 8, 0, 300, 190, 0],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [11, 0, 0, 0, 361, 1],
		TYPE: [exports.weirdBoomerTurret, {
			INDEPENDENT: false,
			HAS_NO_RECOIL: true,
			COLOR: 22
		}]
	}]
};
exports.dualAutoGun2 = {
	LABEL: '',
	BODY: {
		FOV: 1.9
	},
	COLOR: 22,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 7, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.predatorAutoGun2 = {
	LABEL: 'Predator',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 22,
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 16, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.hexagonBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'HK-2',
	DANGER: 8,
	SHAPE: -6,
	COLOR: 22,
	SIZE: 40,
	BOSS_TIER_TYPE: 4,
	LEVEL: 45,
	VALUE: 26302,
	HAS_NO_RECOIL: true,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.9,
		SPEED: 1.22,
		ACCELERATION: 0.75,
		HEALTH: 1500,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [12, 8, 0, 120, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [12, 8, 0, 240, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [9, 8, 0, 60, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [9, 8, 0, 180, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [9, 8, 0, 300, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [6, 9, 0, 30, 190, 0],
		TYPE: exports.dualAutoGun2
	}, {
		POSITION: [6, 9, 0, 90, 190, 0],
		TYPE: exports.dualAutoGun2
	}, {
		POSITION: [6, 9, 0, 150, 190, 0],
		TYPE: exports.dualAutoGun2
	}, {
		POSITION: [6, 9, 0, 210, 190, 0],
		TYPE: exports.dualAutoGun2
	}, {
		POSITION: [6, 9, 0, 270, 190, 0],
		TYPE: exports.dualAutoGun2
	}, {
		POSITION: [6, 9, 0, 330, 190, 0],
		TYPE: exports.dualAutoGun2
	}, {
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.predatorAutoGun2
	}]
};
exports.masterGun = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	MAX_CHILDREN: 6,
	AI: {
		NO_LEAD: true,
		SKYNET: true,
		FULL_VIEW: true
	},
	GUNS: [{
		POSITION: [6, 11, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master]),
			TYPE: [exports.drone, {
				LAYER: 6
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.hexagonBossTier3 = {
	PARENT: [exports.genericTank],
	LABEL: 'HK-3',
	DANGER: 8,
	SHAPE: -6,
	COLOR: 22,
	SIZE: 45,
	BOSS_TIER_TYPE: 4,
	LEVEL: 45,
	VALUE: 26302,
	HAS_NO_RECOIL: true,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.88,
		SPEED: 1.2,
		ACCELERATION: 0.7,
		HEALTH: 2000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	GUNS: [{
		POSITION: [0, 5.5, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.twinMinion,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 6
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.blockTrap,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.trap,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.blockTrap,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.trap,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 8, 1.2, 8, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow]),
			TYPE: exports.blockTrap,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.trap,
			WAIT_TO_CYCLE: true
		}
	}],
	TURRETS: [{
		POSITION: [4, 6.5, 0, 0, 360, 1],
		TYPE: exports.bigAuto3Gun
	}, {
		POSITION: [4, 6.5, 0, 120, 360, 1],
		TYPE: exports.bigAuto3Gun
	}, {
		POSITION: [4, 6.5, 0, 240, 360, 1],
		TYPE: exports.bigAuto3Gun
	}, {
		POSITION: [6, 8, 0, 0, 160, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [6, 8, 0, 120, 160, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [6, 8, 0, 240, 160, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [6, 8, 0, 60, 0, 0],
		TYPE: exports.masterGun
	}, {
		POSITION: [6, 8, 0, 180, 0, 0],
		TYPE: exports.masterGun
	}, {
		POSITION: [6, 8, 0, 300, 0, 0],
		TYPE: exports.masterGun
	}, {
		POSITION: [6, 9, 0, 30, 160, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [6, 9, 0, 90, 160, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [6, 9, 0, 150, 160, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [6, 9, 0, 210, 160, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [6, 9, 0, 270, 160, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [6, 9, 0, 330, 160, 0],
		TYPE: exports.machine3gun
	}, {
		POSITION: [8, 0, 0, 180, 361, 1],
		TYPE: [exports.sniperAutoGun, {
			CONTROLLERS: ['nearestDifferentMaster'],
			COLOR: 22
		}]
	}]
};
exports.HK1_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: -6,
	BODY: {
		FOV: 0.6,
		SPEED: 1,
		ACCELERATION: 0.15,
		HEALTH: 25,
		SHIELD: 1,
		DAMAGE: 1.5,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin2',
	HAS_NO_RECOIL: true,
	GUNS: [],
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [11, 8, 0, 120, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [11, 8, 0, 240, 190, 0],
		TYPE: exports.boomerAutoGun
	}, {
		POSITION: [9, 8, 0, 60, 190, 0],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [9, 8, 0, 180, 190, 0],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [9, 8, 0, 300, 190, 0],
		TYPE: [exports.constructAuto, {
			LABEL: 'Mega Trapper',
			HAS_NO_RECOIL: true,
			CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster']
		}]
	}]
};
exports.hexagonBossTier4 = {
	PARENT: [exports.genericTank],
	LABEL: 'HK-4',
	DANGER: 8,
	SHAPE: -6,
	COLOR: 22,
	SIZE: 50,
	BOSS_TIER_TYPE: 4,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.85,
		SPEED: 1.15,
		ACCELERATION: 0.5,
		HEALTH: 2500,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'spinSlowly2',
	GUNS: [{
		POSITION: [0, 6, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.fast_launch]),
			TYPE: exports.HK1_Minion,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [0, 6, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size, g.bigger, g.fast_launch]),
			TYPE: exports.HK1_Minion,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [10, 4, -1.6, 9, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 0, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [10, 4, -1.6, 9, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [10, 4, -1.6, 9, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 0, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [5, 6, 1.3, 8, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.smaller]),
			TYPE: [exports.drone, {
				LAYER: 6
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [5, 6, 1.3, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.smaller]),
			TYPE: [exports.drone, {
				LAYER: 6
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [5, 6, 1.3, 8, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.smaller]),
			TYPE: [exports.drone, {
				LAYER: 6
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.blockTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 120, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.blockTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 240, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.blockTrap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [8, 10, 0, 0, 180, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [8, 10, 0, 120, 180, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [8, 10, 0, 240, 180, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [4, 6.5, 0, 0, 360, 1],
		TYPE: exports.bigAuto3Gun
	}, {
		POSITION: [4, 6.5, 0, 120, 360, 1],
		TYPE: exports.bigAuto3Gun
	}, {
		POSITION: [4, 6.5, 0, 240, 360, 1],
		TYPE: exports.bigAuto3Gun
	}, {
		POSITION: [8, 0, 0, 180, 361, 1],
		TYPE: [exports.shifterAutoGun2, {
			COLOR: 22
		}]
	}]
};
exports.falconBot = {
	PARENT: [exports.falcon],
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Assassin'
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.eagleBot = {
	PARENT: [exports.eagle],
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.one_fourth_reload]),
			TYPE: exports.bullet,
			LABEL: 'Pounder'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.woodpeckBot = {
	PARENT: [exports.genericTank],
	LABEL: 'Woodpecker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.85,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [32, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload, g.bit_more_damage, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Ranger'
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.constructionistMinion = {
	PARENT: [exports.minion],
	SHAPE: 4,
	BODY: {
		FOV: 0.5,
		SPEED: 2.5,
		ACCELERATION: 0.3,
		HEALTH: 10,
		SHIELD: 0,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.4,
		RANGE: 200
	},
	GUNS: [{
		POSITION: [17.6, 6.4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.single, g.low_power, g.slow]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.4, 6.4, -1.8, 7.5, 0, 0, 0]
	}]
};
exports.smallSingleAutoGun = {
	LABEL: 'Single',
	BODY: {
		FOV: 1.3
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [17.6, 6.4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.single, g.pound, g.more_speed, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.4, 6.4, -1.8, 7.5, 0, 0, 0]
	}]
};
exports.constructionist = {
	PARENT: [exports.genericTank],
	LABEL: 'Constructionist',
	DANGER: 8,
	SHAPE: 4,
	COLOR: 3,
	SIZE: 28,
	BODY: {
		SPEED: 1.7,
		ACCELERATION: 0.5,
		HEALTH: 1000,
		DAMAGE: 6,
		REGEN: 0.015
	},
	MAX_CHILDREN: 6,
	GUNS: [{
		POSITION: [5, 8.6, 1, 8.5, 0, 0, 0]
	}, {
		POSITION: [1.85, 11, 1.01, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.constructionistMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [4, 11, 1, 7, 0, 0, 0]
	}],
	TURRETS: [{
		POSITION: [9.5, 0, 0, 0, 360, 1],
		TYPE: exports.smallSingleAutoGun
	}]
};
exports.autoRifle = makeAuto(exports.rifle);
exports.hybridRifle = makeHybrid(exports.rifle, 'Marksman');
exports.hybridBuilder = makeHybrid(exports.builder, 'Harvester');
exports.hybridAssassin = makeHybrid(exports.assassin, 'Assassinator');
exports.devastator = {
	PARENT: [exports.genericTank],
	LABEL: 'Devastator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [23, 13, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hunter, g.hunter2]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 15, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hunter]),
			TYPE: exports.bullet
		}
	}]
};
exports.lightning = {
	PARENT: [exports.genericTank],
	LABEL: 'Lightning',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	MAX_CHILDREN: 10,
	GUNS: [{
		POSITION: [6, 10, 1.2, 8, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.faster]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 10, 1.2, 8, 0, -45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.faster]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.line = {
	PARENT: [exports.bullet],
	LABEL: 'Line',
	SHAPE: -1
};
exports.laser = {
	PARENT: [exports.genericTank],
	LABEL: 'Laser',
	DANGER: 7,
	BODY: {
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
			TYPE: exports.line
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
			TYPE: exports.line
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
			TYPE: exports.line
		}
	}, {
		POSITION: [25, 1, 0, 0, 0, 0, 0]
	}]
};
exports.fatMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 11, 1, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.pound, g.more_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.littleSkimmer = {
	PARENT: [exports.genericTank],
	LABEL: 'Launcher',
	DANGER: 6,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [10, 12, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [17, 13, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bit_less_damage]),
			TYPE: exports.littleMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.fatSkimmer = {
	PARENT: [exports.genericTank],
	LABEL: 'Bumper',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [9, 17, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [16, 18, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty, g.arty, g.skim, g.low_power]),
			TYPE: exports.fatMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.harrower = {
	PARENT: [exports.genericTank],
	LABEL: 'Harrower',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [15, 10, 1, 9, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim, g.bigger, g.bigger, g.less_reload]),
			TYPE: exports.hyperMissile
		}
	}, {
		POSITION: [13, 10, -1.5, 0, 0, 0, 0]
	}]
};
exports.poundAngle = {
	PARENT: [exports.genericTank],
	LABEL: 'Slammer',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.6,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [18, 12, 1, 0, 0, 0, .6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.lots_more_recoil, g.pound, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 0, -2, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.pound, g.one_fourth_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 12, 1, 0, 2, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.pound, g.one_fourth_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.autoLauncher = makeAuto(exports.littleSkimmer);
exports.autoTwinSniper = makeAuto(exports.twinSniper);
exports.twinAssassin = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Assassin',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [27, 7.5, 1, 0, 5.4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.assassin, g.bit_less_damage, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [27, 7.5, 1, 0, -5.4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.assassin, g.bit_less_damage, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.8, 7.5, -1.24, 0, 5.4, 0, 0]
	}, {
		POSITION: [11.8, 7.5, -1.24, 0, -5.4, 0, 0]
	}]
};
exports.trapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Trapper',
	DANGER: 5,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.triTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Trapper',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 120, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 240, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autoTrapper = makeAuto(exports.trapper);
exports.mechaTrap = makeAuto(exports.trapper, 'Mecha Trapper', {
	type: exports.machineAutoTurret
});
exports.obliterator = {
	PARENT: [exports.genericTank],
	LABEL: 'Obliterator',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [12, 12, 1.01, 13.4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.57, 1.4, 5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.fake]),
			TYPE: exports.bullet
		}
	}]
};
exports.plow = {
	PARENT: [exports.genericTank],
	LABEL: 'Plow',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [12, 12, 1.4, 13.4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.mach, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 6, 2, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.mach, g.one_fourth_reload, g.more_reload, g.fake]),
			TYPE: exports.bullet
		}
	}]
};
exports.crusher = makeHybrid(exports.obliterator, 'Crusher');
exports.bulldozer = {
	PARENT: [exports.genericTank],
	LABEL: 'Bulldozer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [15, 12, 1.01, 13.4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assassin, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.57, 1.4, 5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assassin, g.fake]),
			TYPE: exports.bullet
		}
	}]
};
exports.heavyTwin = {
	PARENT: [exports.genericTank],
	LABEL: 'Heavy Twin',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [15, 10, 1, 6, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 10, 1, 6, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 15.2, 1.51, -4.4, 0, 0, 0]
	}]
};
exports.spinMissile = {
	PARENT: [exports.missile],
	FACING_TYPE: 'fastSpin',
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 90, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 270, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.spinner = {
	PARENT: [exports.genericTank],
	LABEL: 'Twister',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [10, 13, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [17, 14, -1.4, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.more_speed, g.double_range, g.less_range]),
			TYPE: exports.spinMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.miniClicker = {
	PARENT: [exports.genericTank],
	LABEL: 'Mini Clicker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.5, -1.3, 5, 0, 0, 0]
	}]
};
exports.doubleGuard = {
	PARENT: [exports.genericTank],
	LABEL: 'Double Guard',
	DANGER: 7,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.basicAutoGun = {
	LABEL: 'Basic',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.accelerator = {
	LABEL: '',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 11, 1.3, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.double_reload]),
			TYPE: [exports.bullet, {
				MOTION_TYPE: 'accelerate'
			}]
		}
	}]
};
exports.obpProp1 = {
	SYNC_TURRET_SKILLS: true,
	LABEL: '',
	SHAPE: 3,
	COLOR: 14,
	TURRETS: [{
		POSITION: [12, 0, 0, 0, 360, 1],
		TYPE: exports.accelerator
	}]
};
exports.obpProp2 = {
	SYNC_TURRET_SKILLS: true,
	LABEL: '',
	SHAPE: 3,
	COLOR: 14,
	TURRETS: [{
		POSITION: [12, 0, 0, 0, 360, 1],
		TYPE: exports.minigunAuto
	}],
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, -60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.obpProp3 = {
	SYNC_TURRET_SKILLS: true,
	LABEL: '',
	SHAPE: 3,
	COLOR: 14,
	TURRETS: [{
		POSITION: [12, 0, 0, 0, 360, 1],
		TYPE: exports.basicAutoGun
	}],
	GUNS: [{
		POSITION: [21, 8, 1, 0, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 13, 1, 0, 0, 60, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 8, 1, 0, 0, -60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 13, 1, 0, 0, -60, 0.7],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.obp1 = {
	PARENT: [exports.genericTank],
	LABEL: 'OBP-1',
	COLOR: 14,
	SHAPE: 5,
	SIZE: 26,
	BOSS_TIER_TYPE: 7,
	LEVEL: 45,
	VALUE: 26302,
	BODY: {
		FOV: 0.9,
		SPEED: 1.3,
		ACCELERATION: 0.6,
		HEALTH: 1000
	},
	TURRETS: [{
		POSITION: [8.5, 13, 0, -108, 0, 1],
		TYPE: exports.obpProp1
	}, {
		POSITION: [8.5, 13, 0, 108, 0, 1],
		TYPE: exports.obpProp1
	}],
	GUNS: [{
		POSITION: [12, 4, 1, 0, 0, 36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.more_speed, g.double_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 4, 1, 0, 0, -36, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.more_speed, g.double_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.obp2 = {
	PARENT: [exports.genericTank],
	LABEL: 'OBP-2',
	DANGER: 8,
	COLOR: 14,
	SHAPE: 5,
	SIZE: 30,
	BOSS_TIER_TYPE: 7,
	LEVEL: 45,
	VALUE: 26302,
	BODY: {
		FOV: 0.9,
		SPEED: 1.15,
		ACCELERATION: 0.5,
		HEALTH: 1500
	},
	TURRETS: [{
		POSITION: [8.5, 13, 0, -108, 0, 1],
		TYPE: exports.obpProp2
	}, {
		POSITION: [6.5, 13, 0, -180, 0, 1],
		TYPE: exports.obpProp1
	}, {
		POSITION: [8.5, 13, 0, 108, 0, 1],
		TYPE: exports.obpProp2
	}, {
		POSITION: [12.5, 0, 0, 0, 360, 1],
		TYPE: [exports.autoSmashTurret, {
			COLOR: 14,
			CONTROLLERS: ['nearestDifferentMaster']
		}]
	}]
};
exports.obp3 = {
	PARENT: [exports.genericTank],
	LABEL: 'OBP-3',
	DANGER: 8,
	COLOR: 14,
	SHAPE: 5,
	SIZE: 34,
	BOSS_TIER_TYPE: 7,
	LEVEL: 45,
	VALUE: 26302,
	BODY: {
		FOV: 0.9,
		SPEED: 1.1,
		ACCELERATION: 0.4,
		HEALTH: 2000
	},
	FACING_TYPE: 'spinSlowly',
	TURRETS: [{
		POSITION: [8.5, 13, 0, -108, 0, 1],
		TYPE: exports.obpProp3
	}, {
		POSITION: [8.5, 13, 0, 36, 0, 1],
		TYPE: exports.obpProp3
	}, {
		POSITION: [8.5, 13, 0, -36, 0, 1],
		TYPE: exports.obpProp3
	}, {
		POSITION: [8.5, 13, 0, 180, 0, 1],
		TYPE: exports.obpProp3
	}, {
		POSITION: [8.5, 13, 0, 108, 0, 1],
		TYPE: exports.obpProp3
	}, {
		POSITION: [12.5, 0, 0, 0, 360, 1],
		TYPE: [exports.autoSmashTurret, {
			COLOR: 14,
			CONTROLLERS: ['nearestDifferentMaster']
		}]
	}]
};
exports.obtProp1 = {
	SYNC_TURRET_SKILLS: true,
	LABEL: '',
	SHAPE: 4,
	COLOR: 2,
	TURRETS: [{
		POSITION: [12, 0, 0, 0, 230, 1],
		TYPE: exports.cruiserAutoGun
	}, {
		POSITION: [12, 7, 0, 90, 230, 0],
		TYPE: exports.cruiserAutoGun
	}, {
		POSITION: [12, 7, 0, -90, 230, 0],
		TYPE: exports.cruiserAutoGun
	}],
	GUNS: [{
		POSITION: [19, 5, 0.8, 0, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload]),
			TYPE: exports.swarm
		}
	}, {
		POSITION: [19, 5, 0.8, 0, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload]),
			TYPE: exports.swarm
		}
	}]
};
exports.obt1 = {
	PARENT: [exports.genericTank],
	LABEL: 'OBT-1',
	DANGER: 8,
	COLOR: 2,
	SHAPE: 3,
	SIZE: 28,
	//BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	BODY: {
		FOV: 1.2,
		SPEED: 1.2,
		ACCELERATION: 0.5,
		HEALTH: 1500
	},
	FACING_TYPE: 'spinSlowly',
	TURRETS: [{
		POSITION: [27.5, 20, 0, 60, 0, 0],
		TYPE: exports.obtProp1
	}, {
		POSITION: [27.5, 20, 0, -60, 0, 0],
		TYPE: exports.obtProp1
	}, {
		POSITION: [27.5, 20, 0, -180, 0, 0],
		TYPE: exports.obtProp1
	}]
};
exports.triContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Contagion',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 5.5, 1, 0, 0, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 5.5, 1, 0, 0, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 120, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 240, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.destroyerAutoGun2 = {
	LABEL: 'Destroyer',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.half_reload, g.more_speed]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.quadDestroyerAutoGun = {
	LABEL: 'Quad Destroyer',
	BODY: {
		FOV: 2
	},
	COLOR: 13,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.half_reload, g.more_speed, g.less_damage]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.half_reload, g.more_speed, g.less_damage]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.half_reload, g.more_speed, g.less_damage]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.half_reload, g.more_speed, g.less_damage]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.devastatorAutoGun = {
	LABEL: 'Devastator',
	BODY: {
		FOV: 2
	},
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [25, 13, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hunter, g.hunter2, g.half_reload, g.more_speed, g.more_speed]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [22, 15, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hunter, g.half_reload, g.more_speed, g.more_speed]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [7, 15, -1.18, 5, 0, 0, 0]
	}]
};
exports.squarefortProp1 = {
	SYNC_TURRET_SKILLS: true,
	SHAPE: 4,
	COLOR: 13,
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}]
};
exports.squarefortProp2 = {
	SYNC_TURRET_SKILLS: true,
	SHAPE: 16,
	COLOR: 13,
	TURRETS: [{
		POSITION: [2, 8.8, 0, 0, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 22.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 67.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 90, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 112.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 157.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 180, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 202.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 247.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 270, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 292.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [2, 8.8, 0, 337.5, 190, 1],
		TYPE: exports.destroyerAutoGun2
	}, {
		POSITION: [5.2, 0, 0, 0, 360, 1],
		TYPE: exports.devastatorAutoGun
	}/*, {
		POSITION: [2, 8.8, 0, 45, 190, 1],
		TYPE: exports.basicAutoGun
	}, {
		POSITION: [2, 8.8, 0, 315, 190, 1],
		TYPE: exports.basicAutoGun
	}*/]
};
exports.squarefort = {
	PARENT: [exports.genericTank],
	LABEL: 'Squarefort',
	DANGER: 9,
	COLOR: 13,
	SIZE: 10,
	BODY: {
		FOV: 2.75,
		SPEED: 1.3,
		ACCELERATION: 0.1,
		HEALTH: 3500,
		PUSHABILITY: 0
	},
	FACING_TYPE: 'spinSlowly2',
	TURRETS: [{
		POSITION: [30, 105, 0, 0, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 27.5, 0, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, -27.5, 0, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 0, 90, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 27.5, 90, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, -27.5, 90, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 0, 180, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 27.5, 180, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, -27.5, 180, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 0, 270, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, 27.5, 270, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [30, 105, -27.5, 270, 0, 1],
		TYPE: exports.squarefortProp1
	}, {
		POSITION: [126, 148, 0, 45, 0, 1],
		TYPE: exports.squarefortProp2
	}, {
		POSITION: [126, 148, 0, 135, 0, 1],
		TYPE: exports.squarefortProp2
	}, {
		POSITION: [126, 148, 0, 225, 0, 1],
		TYPE: exports.squarefortProp2
	}, {
		POSITION: [126, 148, 0, 315, 0, 1],
		TYPE: exports.squarefortProp2
	}, {
		POSITION: [25, 0, 0, 0, 360, 1],
		TYPE: exports.quadDestroyerAutoGun
	}]
};
exports.contagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Contagion',
	DANGER: 6,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autoContagion = makeAuto(exports.contagion);
exports.fort = {
	PARENT: [exports.genericTank],
	LABEL: 'Fort',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [22, 5.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.bit_less_damage]),
			TYPE: exports.block
		}
	}]
};
exports.droneContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Magician',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.gunCruiser = {
	PARENT: [exports.genericTank],
	LABEL: 'Gunner Cruiser',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.8,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [12, 6.5, 0.6, 0, 6.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [12, 6.5, 0.6, 0, -6.75, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16, 6.5, 0.6, 0, 3.50, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16, 6.5, 0.6, 0, -3.50, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.longBorer = {
	PARENT: [exports.genericTank],
	LABEL: 'Driller',
	DANGER: 7,
	BODY: {
		FOV: 1.25,
		SPEED: base.SPEED * 0.85,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [25, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [25, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.multishot = {
	PARENT: [exports.genericTank],
	LABEL: 'Multishot',
	DANGER: 6,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [4, 3, 1, 11, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 12, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [8, 12, -1.3, 4, 0, 0, 0]
	}]
};
exports.longshot = {
	PARENT: [exports.genericTank],
	LABEL: 'Buckshot',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [4, 3, 1, 11, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.sniper]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.sniper]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 12, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.sniper]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [2, 14, 1.01, 24, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.sniper]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [8, 12, -1.3, 4, 0, 0, 0]
	}]
};
exports.machshot = {
	PARENT: [exports.genericTank],
	LABEL: 'Overpowerer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [4, 3, 1, 11, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.double_reload, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.double_reload, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.double_reload, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.double_reload, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.double_reload, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.double_reload, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 12, 1.25, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.double_reload, g.one_fourth_reload]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [8, 13.4, -1.3, 4, 0, 0, 0]
	}]
};
var miniMultishotProps = type => {
	return {
		SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.mini, g.bit_more_reload]),
		TYPE: exports[type]
	};
};
exports.miniMultishot = {
	PARENT: [exports.genericTank],
	LABEL: 'Assaulter',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [4, 3, 1, 11, -3, 0, 0],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0],
		PROPERTIES: miniMultishotProps('casing')
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0],
		PROPERTIES: miniMultishotProps('casing')
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 3, 1, 11, -3, 0, 0.333],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0.333],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0.333],
		PROPERTIES: miniMultishotProps('casing')
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0.333],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0.333],
		PROPERTIES: miniMultishotProps('casing')
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0.333],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 3, 1, 11, -3, 0, 0.667],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0.667],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0.667],
		PROPERTIES: miniMultishotProps('casing')
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0.667],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0.667],
		PROPERTIES: miniMultishotProps('casing')
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0.667],
		PROPERTIES: miniMultishotProps('bullet')
	}, {
		POSITION: [18, 12, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.mini, g.bit_more_reload, g.fake]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [15.5, 12, 1, 6, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.mini, g.bit_more_reload, g.fake]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [13, 12, 1, 6, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.mini, g.bit_more_reload, g.fake]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [8, 12, -1.3, 4, 0, 0, 0]
	}]
};
exports.megaTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Mega Trapper',
	DANGER: 6,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.more_range, g.more_reload, g.bigger, g.fast]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.gigaTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Giga Trapper',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [14.5, 19.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 19.5, 1.7, 14.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.destroy, g.more_range, g.bigger, g.faster, g.bit_more_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autoMegaTrapper = makeAuto(exports.megaTrapper);
exports.megaContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Hammerer',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.76,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [19, 12, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.half_damage, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.more_range, g.more_reload, g.bigger, g.fast, g.bit_more_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.plaguer = {
	PARENT: [exports.genericTank],
	LABEL: 'Plaguer',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [23, 2, 1, 0, 3.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast, g.half_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 2, 1, 0, -3.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast, g.half_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.more_range, g.more_reload, g.bigger, g.fast, g.bit_more_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.triRocket = {
	PARENT: [exports.genericTank],
	LABEL: 'Rocket',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.7,
		SHIELD: base.SHIELD * 0.7,
		DENSITY: base.DENSITY * 0.5
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
		}
	}, {
		POSITION: [16, 8, 1.3, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.double_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1.3, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.double_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.spreadHunter = {
	PARENT: [exports.genericTank],
	LABEL: 'Spreadhunt',
	DANGER: 7,
	BODY: {
		FOV: 1.075,
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.667],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.667],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [15, 6, 1, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [12.2, 9, 1, 8, 0, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.refractor = {
	PARENT: [exports.genericTank],
	LABEL: 'Refractor',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [15.3, 4, 1, 0, 0, 22.5, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [15.3, 4, 1, 0, 0, -22.5, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [15.3, 4, 1, 0, 2, 55, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [15.3, 4, 1, 0, -2, -55, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [20, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [18, 7, 1, 0, 0, 45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [18, 7, 1, 0, 0, -45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.flankBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Flank Builder',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 180, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.less_damage]),
			TYPE: exports.block
		}
	}]
};
exports.swarmTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Swarming Trapper',
	DANGER: 6,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7, 8, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.swarmBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Swarming Builder',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.bit_less_damage]),
			TYPE: exports.block
		}
	}, {
		POSITION: [7, 8, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.swarmContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Zipper',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7, 8, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.swarmMegaTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Swarming Mega',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.7,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.more_range, g.more_reload, g.bigger, g.fast, g.bit_more_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7, 8, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.twinSpreadling = {
	PARENT: [exports.genericTank],
	LABEL: 'Twinling',
	DANGER: 7,
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 1.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 1],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [18.5, 4, 1, 0, -2, -16, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [18.5, 4, 1, 0, 2, 16, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14, 5.5, 1, 6, 3.4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.less_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [14, 5.5, 1, 6, -3.4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.less_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.fiveNailgunAuto = {
	LABEL: 'Nailgun',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 2, 1, 0, -5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 2, 1, 0, 5, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [6, 13, -1.3, 6, 0, 0, 0]
	}]
};
exports.twinAutoGun4 = {
	LABEL: 'Twin',
	BODY: {
		FOV: 1.8
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.heptagonBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'HPK-1',
	DANGER: 8,
	SHAPE: -7,
	COLOR: 24,
	SIZE: 38,
	BOSS_TIER_TYPE: 5,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.85,
		SPEED: 1.25,
		ACCELERATION: base.ACCEL * 0.5,
		HEALTH: 1000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	TURRETS: [{
		POSITION: [10.8, 0, 0, 25.71, 360, 1],
		TYPE: exports.fiveNailgunAuto
	}, {
		POSITION: [6, 9, 0, 25.71, 220, 0],
		TYPE: exports.twinAutoGun4
	}, {
		POSITION: [6, 9, 0, 77.15, 220, 0],
		TYPE: exports.twinAutoGun4
	}, {
		POSITION: [6, 9, 0, 128.48, 220, 0],
		TYPE: exports.twinAutoGun4
	}, {
		POSITION: [6, 9, 0, 180, 220, 0],
		TYPE: exports.twinAutoGun4
	}, {
		POSITION: [6, 9, 0, 231.43, 220, 0],
		TYPE: exports.twinAutoGun4
	}, {
		POSITION: [6, 9, 0, 282.86, 220, 0],
		TYPE: exports.twinAutoGun4
	}, {
		POSITION: [6, 9, 0, 334.29, 220, 0],
		TYPE: exports.twinAutoGun4
	}]
};
exports.protector = {
	PARENT: [exports.genericTank],
	LABEL: 'Protector',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [12, 12, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 13, 1, 6, 0, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 13, -1.3, 6, 0, 0, 0]
	}]
};
exports.gunCruiserAutoGun = {
	LABEL: 'Gunner Cruiser',
	BODY: {
		FOV: 1.75
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [12, 6.5, 0.6, 0, 6.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage, g.half_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [12, 6.5, 0.6, 0, -6.75, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage, g.half_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16, 6.5, 0.6, 0, 3.50, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage, g.half_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16, 6.5, 0.6, 0, -3.50, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage, g.half_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.heptaTrapperMinion = {
	PARENT: [exports.minion],
	SHAPE: -7,
	FACING_TYPE: 'autospin',
	GUNS: [{
		POSITION: [15, 7, 1, 0, 0, 25.72, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 25.72, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 77.15, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 77.15, 0.571],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 128.58, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 128.58, 0.143],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 180, 0.714],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 231.44, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 231.44, 0.286],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 282.87, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 282.87, 0.857],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 334.3, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 334.3, 0.429],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.minion]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.factoryAutoGun = {
	LABEL: 'Factory',
	BODY: {
		FOV: 1.7
	},
	CONTROLLERS: ['canRepel', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	MAX_CHILDREN: 1,
	GUNS: [{
		POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [1, 12, 1, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.bigger, g.slow, g.half_reload]),
			TYPE: exports.heptaTrapperMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 12, 1, 8, 0, 0, 0]
	}]
};
exports.builderAutoGun = {
	LABEL: 'Builder',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['canRepel', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.less_reload]),
			TYPE: exports.block
		}
	}]
};
exports.heptagonBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'HPK-2',
	DANGER: 8,
	SHAPE: -7,
	COLOR: 24,
	SIZE: 46,
	BOSS_TIER_TYPE: 5,
	LEVEL: 45,
	VALUE: 26302,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.82,
		SPEED: 1.15,
		ACCELERATION: 0.8,
		HEALTH: 1500,
		DAMAGE: 5,
		REGEN: 0.015
	},
	FACING_TYPE: 'autospin2',
	TURRETS: [{
		POSITION: [10.8, 0, 0, 180, 361, 1],
		TYPE: exports.gunCruiserAutoGun
	}, {
		POSITION: [7.75, 8, 0, 0, 220, 0],
		TYPE: exports.builderAutoGun
	}, {
		POSITION: [7.5, 8, 0, 51.43, 220, 0],
		TYPE: exports.factoryAutoGun
	}, {
		POSITION: [7.5, 8, 0, 102.86, 220, 0],
		TYPE: exports.factoryAutoGun
	}, {
		POSITION: [7.5, 8, 0, 154.29, 220, 0],
		TYPE: [exports.factoryAutoGun, {
			MAX_CHILDREN: 2
		}]
	}, {
		POSITION: [7.5, 8, 0, 205.72, 220, 0],
		TYPE: [exports.factoryAutoGun, {
			MAX_CHILDREN: 2
		}]
	}, {
		POSITION: [7.5, 8, 0, 257.15, 220, 0],
		TYPE: exports.factoryAutoGun
	}, {
		POSITION: [7.5, 8, 0, 308.58, 220, 0],
		TYPE: exports.factoryAutoGun
	}]
};
exports.comet = {
	PARENT: [exports.genericTank],
	LABEL: 'Comet',
	DANGER: 8,
	SIZE: 22,
	COLOR: 0,
	FACING_TYPE: 'looseWithMotion',
	BODY: {
		FOV: 0.96,
		SPEED: 2.5,
		ACCELERATION: 0.38,
		HEALTH: 1250,
		DAMAGE: 5,
		REGEN: 0.019
	},
	GUNS: [{
		POSITION: [4, 12, 1.3, 8, 0, 222, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.thruster, g.smaller]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4, 12, 1.3, 8, 0, 138, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.thruster, g.smaller]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [39, 9, 1.69, 5, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.much_more_recoil, g.thruster]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [5.25, 6.5, 0, 0, 361, 1],
		TYPE: [exports.weirdTwinAutoGun, {
			HAS_NO_RECOIL: false
		}]
	}, {
		POSITION: [5.25, 6.5, 0, 90, 361, 1],
		TYPE: [exports.weirdTwinAutoGun, {
			HAS_NO_RECOIL: false
		}]
	}, {
		POSITION: [5.25, 6.5, 0, 180, 361, 1],
		TYPE: [exports.weirdTwinAutoGun, {
			HAS_NO_RECOIL: false
		}]
	}, {
		POSITION: [5.25, 6.5, 0, 270, 361, 1],
		TYPE: [exports.weirdTwinAutoGun, {
			HAS_NO_RECOIL: false
		}]
	}]
};
exports.fastGatling = {
	PARENT: [exports.genericTank],
	LABEL: 'Chain Gun',
	DANGER: 7,
	BODY: {
		FOV: 1.2,
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [19, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.sniper]),
			TYPE: exports.bullet
		}
	}]
};
exports.huntsman = {
	PARENT: [exports.genericTank],
	LABEL: 'Huntsman',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [20, 4, 1, 10, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.pure_gunner, g.fast]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [27, 8.5, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
var palisadeProps2 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.less_reload]),
	TYPE: exports.halfReloadMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	MAX_CHILDREN: 1,
	SYNCS_SKILLS: true,
	WAIT_TO_CYCLE: true
};
exports.palisadeAI = {
	PARENT: [exports.miniboss],
	LABEL: 'Rogue Palisade',
	COLOR: 19,//17
	SHAPE: 6,
	SIZE: 28,
	VALUE: 4e5,
	SKILL: setSkill(2, 9, 0, 9, 9, 9, 9, 0, 0, 0),
	BODY: {
		FOV: 1.4,
		SPEED: base.SPEED * 0.05,
		HEALTH: base.HEALTH * 16,
		SHIELD: base.SHIELD * 3,
		DAMAGE: base.DAMAGE * 3
	},
	GUNS: [{
		POSITION: [4, 6, -1.6, 8, 0, 0, 0],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 60, 0.5],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 120, 0],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 180, 0.5],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 240, 0],
		PROPERTIES: palisadeProps
	}, {
		POSITION: [4, 6, -1.6, 8, 0, 300, 0.5],
		PROPERTIES: palisadeProps
	}],
	TURRETS: [{
		POSITION: [5, 10, 0, 30, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 90, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 150, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 210, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 270, 0, 0],
		TYPE: exports.trapTurret
	}, {
		POSITION: [5, 10, 0, 330, 0, 0],
		TYPE: exports.trapTurret
	}],
	BROADCAST_MESSAGE: 'A Rogue Palisade has been killed!'
};
exports.defenderAI = {
	PARENT: [exports.elite],
	LABEL: 'Defender',
	SIZE: 20,
	SHAPE: 3,
	COLOR: 2,
	COLOR_OVERRIDE: 13,
	VARIES_IN_SIZE: false,
	SKILL: setSkill(0, 8, 5, 7, 7, 8, 5, 0, 0, 0),
	TURRETS: [{
		POSITION: [4.85, 6.7, 0, 0, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [4.85, 6.7, 0, 120, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [4.85, 6.7, 0, 240, 360, 1],
		TYPE: exports.defenderGun
	}],
	GUNS: [{
		POSITION: [15, 7, 1, -2, 0, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 13, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [15, 7, 1, -2, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [15, 7, 1, -2, 0, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 13, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}],
	BROADCAST_MESSAGE: 'A Defender has been killed!'
};
exports.eliteSprayerAI = {
	PARENT: [exports.elite],
	LABEL: 'Elite Sprayer',
	SKILL: setSkill(0, 9, 3, 5, 5, 5, 3, 0, 0, 0),
	AI: {
		NO_LEAD: false
	},
	TURRETS: [{
		POSITION: [14, 6, 0, 180, 190, 0],
		TYPE: [exports.spray, {
			COLOR: 5,
			CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [14, 6, 0, 60, 190, 0],
		TYPE: [exports.spray, {
			COLOR: 5,
			CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster']
		}]
	}, {
		POSITION: [14, 6, 0, -60, 190, 0],
		TYPE: [exports.spray, {
			COLOR: 5,
			CONTROLLERS: ['onlyAcceptInArc', 'nearestDifferentMaster']
		}]
	}],
	BROADCAST_MESSAGE: 'An Elite Sprayer has been killed!'
};
exports.ultraPuntAutoGun1 = {
	LABEL: '',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 3, 1, 7, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 3, 1, 7, -4, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 7, 4, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 7, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 1, 7, 4, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 1, 7, -4, 0, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 11, -1.75, 2, 0, 0, 0]
	}]
};
exports.ultraPuntAutoGun2 = {
	LABEL: '',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	//INDEPENDENT: true,
	GUNS: [{
		POSITION: [20, 3, 1, 7, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 3, 1, 7, -4, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 3, 1, 7, 4, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 3, 1, 7, -4, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 7, 4, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 7, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 1, 7, 4, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 3, 1, 7, -4, 0, 0.7],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3, 1, 7, 4, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3, 1, 7, -4, 0, 0.9],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 11.5, -1.6, 2, 0, 0, 0]
	}]
};
exports.ultraPunt = {
	PARENT: [exports.genericTank],
	LABEL: 'Ultra Punt',
	DANGER: 8,
	SIZE: 32,
	COLOR: 0,
	FACING_TYPE: 'autospin',
	BODY: {
		FOV: 0.86,
		SPEED: 2.5,
		ACCELERATION: 0.38,
		HEALTH: 1250,
		DAMAGE: 5,
		REGEN: 0.019
	},
	TURRETS: [{
		POSITION: [6, 10, 0, 0, 190, 0],
		TYPE: exports.ultraPuntAutoGun1
	}, {
		POSITION: [6, 10, 0, 60, 190, 0],
		TYPE: exports.ultraPuntAutoGun1
	}, {
		POSITION: [6, 10, 0, 120, 190, 0],
		TYPE: exports.ultraPuntAutoGun1
	}, {
		POSITION: [6, 10, 0, 180, 190, 0],
		TYPE: exports.ultraPuntAutoGun1
	}, {
		POSITION: [6, 10, 0, 240, 190, 0],
		TYPE: exports.ultraPuntAutoGun1
	}, {
		POSITION: [6, 10, 0, 300, 190, 0],
		TYPE: exports.ultraPuntAutoGun1
	}, {
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.ultraPuntAutoGun2
	}]
};
exports.mortarAutoGun = {
	LABEL: 'Mortar',
	BODY: {
		FOV: 1.5
	},
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 34,
	GUNS: [{
		POSITION: [13, 3, 1, 0, -8, -7, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [13, 3, 1, 0, 8, 7, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3, 1, 0, -6, -7, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.half_reload]),
			TYPE: exports.bulletLayer6,
			LABEL: 'Pounder'
		}
	}]
};
exports.asteroidProp = {
	SYNC_TURRET_SKILLS: true,
	COLOR: 34,
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [14, 7.5, 0.8, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 7.5, 0.8, 0, 0, 45, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 7.5, 0.8, 0, 0, 90, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 7.5, 0.8, 0, 0, 270, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [14, 7.5, 0.8, 0, 0, 315, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}],
	TURRETS: [{
		POSITION: [12, 2, 0, 0, 220, 1],
		TYPE: exports.twinAutoGun4
	}]
};
exports.asteroid = {
	PARENT: [exports.genericTank],
	LABEL: 'Asteroid',
	DANGER: 8,
	SIZE: 40,
	COLOR: 34,
	FACING_TYPE: 'autospin2',
	BODY: {
		FOV: 0.75,
		SPEED: 2,
		ACCELERATION: 0.35,
		HEALTH: 1500,
		DAMAGE: 5,
		REGEN: 0.019
	},
	TURRETS: [{
		POSITION: [9.5, 0, 0, 0, 360, 1],
		TYPE: exports.mortarAutoGun
	}, {
		POSITION: [7, 12.1, 0, 0, 0, 0],
		TYPE: exports.asteroidProp
	}, {
		POSITION: [7, 12.1, 0, 90, 0, 0],
		TYPE: exports.asteroidProp
	}, {
		POSITION: [7, 12.1, 0, 180, 0, 0],
		TYPE: exports.asteroidProp
	}, {
		POSITION: [7, 12.1, 0, 270, 0, 0],
		TYPE: exports.asteroidProp
	}]
};
var railgunProps2 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.half_reload]),
	TYPE: exports.bullet,
	WAIT_TO_CYCLE: true
};
exports.railgunAuto3 = {
	LABEL: 'Railgun',
	BODY: {
		FOV: 2
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [42, 2.5, 1, 0, 6, 0, 0],
	}, {
		POSITION: [42, 2.5, 1, 0, -6, 0, 0],
	}, {
		POSITION: [1, 10, 1.01, 11.5, 0, 0, 0],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 15, 0, 0, 0.015],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 18.5, 0, 0, 0.03],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 22, 0, 0, 0.045],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 25.5, 0, 0, 0.06],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 29, 0, 0, 0.075],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 32.5, 0, 0, 0.09],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 36, 0, 0, 0.105],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 39.5, 0, 0, 0.12],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.half_reload, g.more_speed, g.more_power]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.rocketBossProp1 = {
	COLOR: 13,
	SHAPE: 4
};
exports.rocketBossProp2 = {
	COLOR: 13,
	SHAPE: 4,
	GUNS: [{
		POSITION: [4.5, 3.5, 1.5, 10.5, 5.7, 180, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 3.5, 1.5, 7.5, 5.7, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 3.5, 1.5, 10.5, -5.7, 180, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 3.5, 1.5, 7.5, -5.7, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 3.5, 1.5, 13.5, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 3.5, 1.5, 10.5, 0, 180, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 3.5, 1.5, 7.5, 0, 180, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_third_reload, g.half_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.rocketBossProp3 = {
	HAS_NO_RECOIL: true,
	COLOR: 13,
	SHAPE: 3,
	SIZE: 40,
	GUNS: [{
		POSITION: [29, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26.5, 11, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 11, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21.5, 11, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 11, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [3.15, 6.3, 1, 8.3, 6, 60, 0]
	}, {
		POSITION: [1.8, 8.5, 1, 11, 6, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.bigger, g.fast]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 8, 1, 5.1, 6, 60, 0]
	}, {
		POSITION: [3.15, 6.3, 1, 8.3, -6, 300, 0]
	}, {
		POSITION: [1.8, 8.5, 1, 11, -6, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.bigger, g.fast]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [4.2, 8, 1, 5.1, -6, 300, 0]
	}]
};
exports.rocketBossTier1 = {
	PARENT: [exports.genericTank],
	LABEL: 'RK-1',
	DANGER: 8,
	SIZE: 30,
	COLOR: 13,
	LEVEL: 45,
	VALUE: 26302,
	BOSS_TIER_TYPE: 6,
	FACING_TYPE: 'looseWithMotion',
	BODY: {
		FOV: 1.4,
		SPEED: 2,
		ACCELERATION: 0.3,
		HEALTH: 1500,
		DAMAGE: 5,
		REGEN: 0.019
	},
	TURRETS: [{
		POSITION: [15, 8, 8, 45, 220, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [15, 8, -8, -45, 220, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [15, -8, 24, 45, 220, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [15, -8, -24, -45, 220, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [25, -22.6, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp2
	}, {
		POSITION: [25, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [16.1, 17.8, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp3
	}]
};
exports.rocketBossProp4 = {
	COLOR: 13,
	SHAPE: 3,
	SIZE: 40,
	GUNS: [{
		POSITION: [29, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26.5, 11, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 11, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21.5, 11, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 11, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound, g.one_fourth_reload, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [3.15, 6.3, 1, 8.3, 6, 60, 0]
	}, {
		POSITION: [1.8, 8.5, 1, 11, 6, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.bigger, g.more_speed]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [4.2, 8, 1, 5.1, 6, 60, 0]
	}, {
		POSITION: [3.15, 6.3, 1, 8.3, -6, 300, 0]
	}, {
		POSITION: [1.8, 8.5, 1, 11, -6, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.bigger, g.more_speed]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [4.2, 8, 1, 5.1, -6, 300, 0]
	}]
};
exports.railgunAuto4 = {
	LABEL: 'Railgun',
	BODY: {
		FOV: 2
	},
	COLOR: 13,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	//INDEPENDENT: true,
	GUNS: [{
		POSITION: [24, 0.95, 1, 0, 2.18, 0, 0],
	}, {
		POSITION: [24, 0.95, 1, 0, -2.18, 0, 0],
	}, {
		POSITION: [0.36, 3.64, 1.01, 11, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 12.5, 0, 0, 0.015],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 14, 0, 0, 0.03],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 15.5, 0, 0, 0.045],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 17, 0, 0, 0.06],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 18.5, 0, 0, 0.075],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 20, 0, 0, 0.09],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 21.5, 0, 0, 0.105],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 23, 0, 0, 0.12],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.36, 3.64, 1.01, 9.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.faster, g.bit_more_damage]),
			TYPE: exports.bulletLayer6,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.rocketBossTier2 = {
	PARENT: [exports.genericTank],
	LABEL: 'RK-2',
	DANGER: 8,
	SIZE: 32,
	COLOR: 13,
	LEVEL: 45,
	VALUE: 26302,
	BOSS_TIER_TYPE: 6,
	FACING_TYPE: 'looseWithMotion',
	BODY: {
		FOV: 1.4,
		SPEED: 1.9,
		ACCELERATION: 0.28,
		HEALTH: 2000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	TURRETS: [{
		POSITION: [15, 8, 8, 45, 360, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [15, 8, -8, -45, 360, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [15, -8, 24, 45, 360, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [15, -8, -24, -45, 360, 0],
		TYPE: exports.railgunAuto3
	}, {
		POSITION: [25, -22.6, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp2
	}, {
		POSITION: [25, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [16.1, 17.8, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp4
	}, {
		POSITION: [15, -24.6, 0, 0, 360, 1],
		TYPE: exports.railgunAuto4
	}, {
		POSITION: [15, 2, 0, 0, 360, 1],
		TYPE: exports.railgunAuto4
	}]
};
exports.railgunAuto5 = {
	LABEL: 'Railgun',
	BODY: {
		FOV: 2
	},
	COLOR: 8,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	//INDEPENDENT: true,
	GUNS: [{
		POSITION: [40.6, 2.6, 1, 0, 7, 0, 0],
	}, {
		POSITION: [40.6, 2.6, 1, 0, -7, 0, 0],
	}, {
		POSITION: [1, 11.2, 1.01, 13, 0, 0, 0],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 11.2, 1.01, 18, 0, 0, 0.02],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 11.2, 1.01, 23, 0, 0, 0.04],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 11.2, 1.01, 28, 0, 0, 0.06],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 11.2, 1.01, 33, 0, 0, 0.08],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 11.2, 1.01, 38, 0, 0, 0.1],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 11.2, 1.01, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.half_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.Chandelier_Minion = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 6,
	COLOR: 8,
	SIZE: 26,
	BODY: {
		FOV: 0.6,
		SPEED: 1,
		ACCELERATION: 0.2,
		HEALTH: 10,
		SHIELD: 1,
		DAMAGE: 1.25,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.5,
		RANGE: 150
	},
	FACING_TYPE: 'autospin',
	GUNS: [],
	TURRETS: [{
		POSITION: [5.4, 11, 0, 30, 190, 0],
		TYPE: [exports.auto3gun, {
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [5.4, 11, 0, 90, 190, 0],
		TYPE: [exports.auto3gun, {
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [5.4, 11, 0, 150, 190, 0],
		TYPE: [exports.auto3gun, {
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [5.4, 11, 0, 210, 190, 0],
		TYPE: [exports.auto3gun, {
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [5.4, 11, 0, 270, 190, 0],
		TYPE: [exports.auto3gun, {
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [5.4, 11, 0, 330, 190, 0],
		TYPE: [exports.auto3gun, {
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [10, 0, 0, 0, 360, 1],
		TYPE: exports.railgunAuto5
	}]
};
exports.opStreamAutoGun = {
	LABEL: 'OP Streamliner',
	BODY: {
		FOV: 1.75
	},
	COLOR: 8,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	//INDEPENDENT: true,
	GUNS: [{
		POSITION: [30.8, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [28.6, 10, 1, 0, 0, 0, 0.111],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26.5, 10, 1, 0, 0, 0, 0.222],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24.5, 10, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22.6, 10, 1, 0, 0, 0, 0.444],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20.8, 10, 1, 0, 0, 0, 0.556],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.1, 10, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 10, 1, 0, 0, 0, 0.778],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1, 0, 0, 0, 0.889],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.half_reload, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
var Chandelier_Props = {
	SHOOT_SETTINGS: combineStats([g.factory, g.half_reload, g.fast_launch, g.bigger, g.bit_bigger]),
	TYPE: exports.Chandelier_Minion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1
};
exports.chandelier = {
	PARENT: [exports.genericTank],
	LABEL: 'Chandelier',
	DANGER: 8,
	SIZE: 38,
	COLOR: 8,
	SHAPE: 5,
	FACING_TYPE: 'autospin2',
	BODY: {
		FOV: 0.95,
		SPEED: 1.5,
		ACCELERATION: 0.25,
		HEALTH: 2000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	GUNS: [{
		POSITION: [2.5, 11.5, 1.3, 8, 0, 36, 0],
		PROPERTIES: Chandelier_Props
	}, {
		POSITION: [2.5, 11.5, 1.3, 8, 0, 108, 0.2],
		PROPERTIES: Chandelier_Props
	}, {
		POSITION: [2.5, 11.5, 1.3, 8, 0, 180, 0.4],
		PROPERTIES: Chandelier_Props
	}, {
		POSITION: [2.5, 11.5, 1.3, 8, 0, -108, 0.6],
		PROPERTIES: Chandelier_Props
	}, {
		POSITION: [2.5, 11.5, 1.3, 8, 0, -36, 0.8],
		PROPERTIES: Chandelier_Props
	}],
	TURRETS: [{
		POSITION: [8, 0, 0, 0, 360, 1],
		TYPE: exports.opStreamAutoGun
	}]
};
exports.gatlingSpray = {
	PARENT: [exports.genericTank],
	LABEL: 'Searcher',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.85,
		ACCELERATION: base.ACCEL * 0.6
	},
	GUNS: [{
		POSITION: [19, 6.5, 1.4, 8, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.low_power, g.mach]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
			TYPE: exports.bullet
		}
	}]
};
exports.bufferer = {
	PARENT: [exports.genericTank],
	LABEL: 'Bufferer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.8,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [24, 7, 1.5, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.mach]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 11, 1.4, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.mach]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoSpray = makeAuto(exports.spray);
exports.twinFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Spawner',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [4.5, 6, 1, 11, 5.5, 0, 0]
	}, {
		POSITION: [1, 8, 1.01, 15.5, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory, g.near_double_size]),
			TYPE: exports.twinMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [12, 8, 1, 0, 5.5, 0, 0]
	}, {
		POSITION: [4.5, 6, 1, 11, -5.5, 0, 0]
	}, {
		POSITION: [1, 8, 1.01, 15.5, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory, g.near_double_size]),
			TYPE: exports.twinMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [12, 8, 1, 0, -5.5, 0, 0]
	}]
};
exports.rifleTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Infantryman',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [20, 10.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [24, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.swarmArtillery = {
	PARENT: [exports.genericTank],
	LABEL: 'Swarmsman',
	DANGER: 7,
	BODY: {
		FOV: 1.15,
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [17, 6, -1.4, 0, -5.8, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage]),
			TYPE: exports.swarm
		}
	}, {
		POSITION: [17, 6, -1.4, 0, 5.8, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_damage]),
			TYPE: exports.swarm
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.shellerAutoGun = {
	LABEL: 'Sheller',
	BODY: {
		FOV: 1.3
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [17, 3, 1, 0, -7.5, -5, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 7.5, 5, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty, g.less_damage, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.steamrollAutoGun = {
	LABEL: 'Steamroller',
	BODY: {
		FOV: 1.3
	},
	COLOR: 13,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [10, 14, 1.01, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.more_speed, g.more_speed, g.half_reload]),
			TYPE: exports.bulletLayer6,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.basicAutoGun2 = {
	LABEL: 'Basic',
	BODY: {
		FOV: 2.25
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.more_speed, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.satelliteProp1 = {
	COLOR: 13,
	SHAPE: 3,
	GUNS: [{
		POSITION: [35, 5.6, 1.6, 0, 7.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.smaller, g.low_power]),
			TYPE: exports.bullet
		}
	}]
};
exports.satelliteProp2 = {
	COLOR: 13,
	SHAPE: 3,
	GUNS: [{
		POSITION: [35, 5.6, 1.6, 0, -7.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.smaller, g.low_power]),
			TYPE: exports.bullet
		}
	}]
};
exports.satelliteProp3 = {
	COLOR: 13,
	SHAPE: 3,
	GUNS: [{
		POSITION: [22, 20, 1.45, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lots_more_recoil, g.one_fourth_reload, g.smaller, g.low_power]),
			TYPE: exports.bullet
		}
	}]
};
exports.satelliteProp4 = {
	SYNC_TURRET_SKILLS: true,
	COLOR: 13,
	SHAPE: 4,
	TURRETS: [{
		POSITION: [9.1, 9.4, 0, 90, 220, 0],
		TYPE: exports.shellerAutoGun
	}, {
		POSITION: [9.1, 9.4, 0, -90, 220, 0],
		TYPE: exports.shellerAutoGun
	}]
};
exports.satelliteProp5 = {
	COLOR: 13,
	SHAPE: 3,
	GUNS: [{
		POSITION: [18.46, 1.18, 1, -4, 11.18, 0, 0],
	}, {
		POSITION: [18.46, 1.18, 1, -4, 5.18, 0, 0],
	}, {
		POSITION: [0.46, 5.1, 1.01, 1.91, 8, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 4.18, 8, 0, 0.02],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 6.46, 8, 0, 0.04],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 8.73, 8, 0, 0.06],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 11, 8, 0, 0.08],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 13.27, 8, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, -0.18, 8, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [18.46, 1.18, 1, -4, -11.18, 0, 0],
	}, {
		POSITION: [18.46, 1.18, 1, -4, -5.18, 0, 0],
	}, {
		POSITION: [0.46, 5.1, 1.01, 1.91, -8, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 4.18, -8, 0, 0.52],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 6.46, -8, 0, 0.54],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 8.73, -8, 0, 0.56],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 11, -8, 0, 0.58],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, 13.27, -8, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.fake, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [0.46, 5.1, 1.01, -0.18, -8, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.less_reload]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}]
};
exports.rocketBossTier4 = {
	PARENT: [exports.genericTank],
	LABEL: 'RK-4',//Satellite
	DANGER: 8,
	SIZE: 32,
	COLOR: 13,
	FACING_TYPE: 'looseWithMotion',
	BOSS_TIER_TYPE: 6,
	BODY: {
		FOV: 1.5,
		SPEED: 1.7,
		ACCELERATION: 0.25,
		HEALTH: 2000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	TURRETS: [{
		POSITION: [25, 34.2, 0, 0, 0, 1],
		TYPE: exports.satelliteProp4
	}, {
		POSITION: [25, 11.4, 0, 0, 0, 1],
		TYPE: exports.satelliteProp4
	}, {
		POSITION: [25, -11.4, 0, 0, 0, 1],
		TYPE: exports.satelliteProp4
	}, {
		POSITION: [25, -34.2, 0, 0, 0, 1],
		TYPE: exports.satelliteProp4
	}, {
		POSITION: [16.1, 52, 0, 0, 0, 1],
		TYPE: exports.satelliteProp5
	}, {
		POSITION: [8, 48.9, 5.6, 180, 0, 1],
		TYPE: exports.satelliteProp1
	}, {
		POSITION: [8, 48.9, -5.6, 180, 0, 1],
		TYPE: exports.satelliteProp2
	}, {
		POSITION: [8, -52, 0, 0, 0, 1],
		TYPE: exports.satelliteProp3
	}, {
		POSITION: [4.2, 9, 3.5, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -3.5, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 3.5, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -3.5, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 19.4, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -19.4, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 19.4, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -19.4, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 26.3, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -26.3, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 26.3, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -26.3, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 42.2, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -42.2, 90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, 42.2, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.2, 9, -42.2, -90, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [11, 55, 0, 0, 240, 1],
		TYPE: [exports.railgunAuto5, {
			COLOR: 13
		}]
	}, {
		POSITION: [12, -36, 0, 0, 360, 1],
		TYPE: exports.steamrollAutoGun
	}, {
		POSITION: [12, -12, 0, 0, 360, 1],
		TYPE: exports.steamrollAutoGun
	}, {
		POSITION: [12, 12, 0, 0, 360, 1],
		TYPE: exports.steamrollAutoGun
	}, {
		POSITION: [12, 35, 0, 0, 360, 1],
		TYPE: exports.steamrollAutoGun
	}]
};
exports.twinRifle = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Rifle',
	DANGER: 7,
	BODY: {
		FOV: 1.225,
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [20, 19.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [23, 7, 1, 0, 4.15, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.rifle, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 7, 1, 0, -4.15, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.rifle, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.quadGuard = {
	PARENT: [exports.genericTank],
	LABEL: 'Quad Guard',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [12, 10, 1.5, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.5, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoTurret2 = {
	LABEL: 'Auto Turret',
	BODY: {
		FOV: 1.5
	},
	COLOR: 16,
	GUNS: [{
		POSITION: [21.5, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.auto_turret, g.half_damage, g.slow]),
			TYPE: [exports.bulletLayer6, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.autoDrone = makeAuto(exports.drone, 'Drone', {
	type: exports.autoTurret2,
	size: 11
});
exports.squareProp = {
	SHAPE: 4,
	COLOR: 16
};
exports.overdrive = {
	PARENT: [exports.genericTank],
	LABEL: 'Overdrive',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 6,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.skimBossAI = {
	PARENT: [exports.miniboss],
	LABEL: 'Elite Skimmer',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 2,
	SIZE: 24,
	FACING_TYPE: 'autospin',
	VARIES_IN_SIZE: true,
	VALUE: 25e4,
	BODY: {
		FOV: 1.25,
		SPEED: base.SPEED * 0.1,
		HEALTH: base.HEALTH * 12,
		REGEN: base.REGEN * 0.5,
		DAMAGE: base.DAMAGE * 2.5
	},
	TURRETS: [{
		POSITION: [15, 5, 0, 60, 170, 0],
		TYPE: exports.skimTurret
	}, {
		POSITION: [15, 5, 0, 180, 170, 0],
		TYPE: exports.skimTurret
	}, {
		POSITION: [15, 5, 0, 300, 170, 0],
		TYPE: exports.skimTurret
	}],
	BROADCAST_MESSAGE: 'An Elite Skimmer has been killed!'
};
exports.thrower = {
	PARENT: [exports.genericTank],
	LABEL: 'Thrower',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	STAT_NAMES: statNames.trap,
	GUNS: [{
		POSITION: [19, 5.5, 1.4, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread, g.bit_more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.conq = {
	PARENT: [exports.genericTank],
	LABEL: 'Conqueror',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.flank]),
			TYPE: exports.block
		}
	}]
};
exports.spiker = {
	PARENT: [exports.genericTank],
	LABEL: 'Spiker',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 0.9
	},
	STAT_NAMES: statNames.trap,
	GUNS: [{
		POSITION: [19, 1.5, 1, 0, -2, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.more_reload, g.more_power]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [19, 1.5, 1, 0, 2, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.twin, g.more_reload, g.more_power]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}, {
		POSITION: [5.5, 6, 1.35, 16, 0, 0, 0]
	}]
};
exports.diver = {
	PARENT: [exports.genericTank],
	LABEL: 'Diver',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.8,
		SHIELD: base.SHIELD * 0.8,
		DENSITY: base.DENSITY * 0.6,
		FOV: 1.05
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [19, 5.5, 1, 0, 0, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.tons_more_recoil, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread, g.no_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.trapMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 160
	},
	GUNS: [{
		POSITION: [15, 6, 1, 0, 0, 140, 0]
	}, {
		POSITION: [3, 6, 1.3, 15, 0, 140, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_reload, g.more_recoil, g.half_range, g.half_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.sustained,
			AUTOFIRE: true
		}
	}, {
		POSITION: [15, 6, 1, 0, 0, 220, 0]
	}, {
		POSITION: [3, 6, 1.3, 15, 0, 220, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_reload, g.more_recoil, g.half_range, g.half_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.sustained,
			AUTOFIRE: true
		}
	}]
};
exports.trapSkimmer = {
	PARENT: [exports.genericTank],
	LABEL: 'Pather',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 11, 1.7, 13, 0, 0, 0]
	}, {
		POSITION: [10, 12, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [17, 13, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.bit_less_damage]),
			TYPE: exports.trapMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.hybridArtillery = makeHybrid(exports.artillery, 'General');
exports.autoSwarmGun = {
	LABEL: '',
	BODY: {
		FOV: 3
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [15, 10, -1.5, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
			TYPE: exports.swarm
		}
	}]
};
exports.autoMinigun = {
	LABEL: '',
	BODY: {
		FOV: 3
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 16,
	GUNS: [{
		POSITION: [26, 10, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 10, 1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.half_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.trapbox = {
	PARENT: [exports.trap],
	LABEL: 'Pillbox',
	MOTION_TYPE: 'motor',
	CONTROLLERS: ['nearestDifferentMaster'],
	INDEPENDENT: true,
	BODY: {
		SPEED: 1,
		DENSITY: 5
	},
	DIE_AT_RANGE: true,
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.autoTurret
	}]
};
exports.trapGun = {
	LABEL: '',
	COLOR: 16,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [20, 16, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 16, 1.1, 20, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
			TYPE: exports.block
		}
	}]
};
exports.basemaker = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 6,
	FACING_TYPE: 'autospin',
	COLOR: 1,
	GUNS: [{
		POSITION: [15, 0.001, 2e4, -15, 0, 60, 0]
	}, {
		POSITION: [15, 0.001, 2e4, -15, 0, 180, 0]
	}, {
		POSITION: [15, 0.001, 2e4, -15, 0, 300, 0]
	}, {
		POSITION: [12, 10, -2, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.basemaker]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [12, 10, -2, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.basemaker]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [12, 10, -2, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.basemaker]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [12, 5, 1.5, 0, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.basemaker]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [12, 5, 1.5, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.basemaker]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [12, 5, 1.5, 0, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.basemaker]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.trapGun
	}]
};
exports.rancher = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 6,
	MAX_CHILDREN: 9,
	FACING_TYPE: 'autospin',
	COLOR: 1,
	GUNS: [{
		POSITION: [12.5, 7.5, 1.5, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone]),
			TYPE: exports.drone,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [12.5, 7.5, 1.5, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone]),
			TYPE: exports.drone,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [12.5, 7.5, 1.5, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone]),
			TYPE: exports.drone,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.autoMinigun
	}]
};
exports.auto6 = {
	PARENT: [exports.minion],
	LABEL: 'Mega Minion',
	SHAPE: 6,
	FACING_TYPE: 'autospin',
	COLOR: 1,
	GUNS: [],
	TURRETS: [{
		POSITION: [8, 8, 0, 0, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [8, 8, 0, 60, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [8, 8, 0, 120, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [8, 8, 0, 180, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [8, 8, 0, 240, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [8, 8, 0, 300, 190, 0],
		TYPE: exports.auto3gun
	}, {
		POSITION: [7.6, 0, 0, 0, 360, 1],
		TYPE: exports.autoTurret
	}]
};
exports.hexaship = {
	PARENT: [exports.genericTank],
	LABEL: 'Hexaship',
	DANGER: 8,
	SHAPE: -6,
	FACING_TYPE: 'autospin2',
	COLOR: 1,
	SIZE: 36,
	BODY: {
		FOV: 1,
		HEALTH: 850,
		DAMAGE: 5,
		SPEED: base.SPEED * 0.2
	},
	GUNS: [{
		POSITION: [12.5, 7.5, 1.5, 0, 0, 0, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size]),
			TYPE: exports.basemaker,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 1,
			AUTOFIRE: true
		}
	}, {
		POSITION: [12.5, 7.5, 1.5, 0, 0, 120, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size]),
			TYPE: exports.auto6,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 1,
			AUTOFIRE: true
		}
	}, {
		POSITION: [12.5, 7.5, 1.5, 0, 0, 240, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.double_size]),
			TYPE: exports.rancher,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 1,
			AUTOFIRE: true
		}
	}, {
		POSITION: [5, 5, -2, 7.5, 0, 60, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.half_range]),
			TYPE: exports.trapbox,
			SYNCS_SKILLS: true,
			AUTOFIRE: true
		}
	}, {
		POSITION: [5, 5, -2, 7.5, 0, 180, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.half_range]),
			TYPE: exports.trapbox,
			SYNCS_SKILLS: true,
			AUTOFIRE: true
		}
	}, {
		POSITION: [5, 5, -2, 7.5, 0, 300, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.half_range]),
			TYPE: exports.trapbox,
			SYNCS_SKILLS: true,
			AUTOFIRE: true
		}
	}],
	TURRETS: [{
		POSITION: [5, 5, 0, 60, 361, 1],
		TYPE: exports.autoSwarmGun
	}, {
		POSITION: [5, 5, 0, 180, 361, 1],
		TYPE: exports.autoSwarmGun
	}, {
		POSITION: [5, 5, 0, 300, 361, 1],
		TYPE: exports.autoSwarmGun
	}]
};
exports.twinTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Trapper',
	DANGER: 6,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.twinContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Contagion',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [19, 5.5, 1, 0, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.low_power, g.half_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.5, 7, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_spread, g.twin]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [19, 5.5, 1, 0, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.low_power, g.half_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_spread, g.twin]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.swarmTwinTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Stronghold',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_spread, g.twin]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_spread, g.twin]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [10, 6.6, 0.7, 4, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [10, 6.6, 0.7, 4, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.one_fourth_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.longContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Virus',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [23, 6, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flank, g.low_power, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.doubleSwarm = {
	PARENT: [exports.genericTank],
	LABEL: 'Gladiator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.92
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.railgun2 = {
	PARENT: [exports.genericTank],
	LABEL: 'Railgun',
	DANGER: 7,
	BODY: {
		FOV: 1.2,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [1, 8, 1.01, 10, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.slow, g.half_range]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 8, 1.01, 15, 0, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.half_range]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 8, 1.01, 20, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.more_speed, g.half_range]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [1, 8, 1.01, 25, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.more_speed, g.more_speed, g.half_range]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [27, 2, 1, 0, 4, 0, 0]
	}, {
		POSITION: [27, 2, 1, 0, -4, 0, 0]
	}]
};
exports.submarine = {
	PARENT: [exports.genericTank],
	LABEL: 'Submarine',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	INVISIBLE: [0.08, 0.02, 0.02],
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7.1, 4, 10, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_recoil]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7.1, -4, -10, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_recoil]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.heavyOverseer = {
	PARENT: [exports.genericTank],
	LABEL: 'Apprentice',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 6,
	GUNS: [{
		POSITION: [7, 14.5, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [7, 14.5, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.rocketBossProp5 = {
	SHAPE: 3,
	COLOR: 13
};
exports.weirdGunnerAuto4 = {
	LABEL: 'Gunner',
	BODY: {
		FOV: 1.8
	},
	COLOR: 16,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [15, 5, 1, 0, 6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [15, 5, 1, 0, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.railgunAuto6 = {
	LABEL: 'Railgun',
	BODY: {
		FOV: 2
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [70, 2.5, 1, 0, 6, 0, 0],
	}, {
		POSITION: [70, 2.5, 1, 0, -6, 0, 0],
	}, {
		POSITION: [1, 10, 1.01, 11.5, 0, 0, 0],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 15, 0, 0, 0.01],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 18.5, 0, 0, 0.02],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 22, 0, 0, 0.03],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 25.5, 0, 0, 0.04],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 29, 0, 0, 0.05],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 32.5, 0, 0, 0.06],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 36, 0, 0, 0.07],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 39.5, 0, 0, 0.08],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 43, 0, 0, 0.09],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 46.5, 0, 0, 0.1],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 50, 0, 0, 0.11],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 53.5, 0, 0, 0.12],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 57, 0, 0, 0.13],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 60.5, 0, 0, 0.14],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 64, 0, 0, 0.15],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 67.5, 0, 0, 0.16],
		PROPERTIES: railgunProps2
	}, {
		POSITION: [1, 10, 1.01, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.sniper, g.bigger, g.half_reload, g.half_reload, g.more_speed, g.more_power]),
			TYPE: exports.bullet,
			WAIT_TO_CYCLE: true
		}
	}]
};
var rocketBossProp1 = {
	SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.tons_more_recoil, g.smaller, g.faster]),
	TYPE: [exports.swarm, {
		CONTROLLERS: ['canRepel']
	}],
	STAT_CALCULATOR: gunCalcNames.swarm
};
exports.rocketBossTier3 = {
	PARENT: [exports.genericTank],
	LABEL: 'RK-3',
	DANGER: 8,
	SIZE: 34,
	COLOR: 13,
	LEVEL: 45,
	VALUE: 26302,
	BOSS_TIER_TYPE: 6,
	FACING_TYPE: 'looseWithMotion',
	BODY: {
		FOV: 1.45,
		SPEED: 1.8,
		ACCELERATION: 0.27,
		HEALTH: 1750,
		DAMAGE: 5,
		REGEN: 0.015
	},
	GUNS: [{
		POSITION: [26, 8, 0.28, -14, -10, 135, 0],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, -4, 0, 135, 0.167],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, 5, 9, 135, 0.333],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, 13, 20, 135, 0.5],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, 20, 29, 135, 0.667],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [20, 8, 0.28, 30, 36, 135, 0.833],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, -14, 10, -135, 0],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, -4, 0, -135, 0.167],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, 5, -9, -135, 0.333],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, 13, -20, -135, 0.5],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [26, 8, 0.28, 20, -29, -135, 0.667],
		PROPERTIES: rocketBossProp1
	}, {
		POSITION: [20, 8, 0.28, 30, -36, -135, 0.833],
		PROPERTIES: rocketBossProp1
	}],
	TURRETS: [{
		POSITION: [5.1, 64.4, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, -60.1, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, 58, 3.8, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, 58, -3.8, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [16.7, 48.1, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [5.1, 36.15, 7.6, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, 36.15, -7.6, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, 36.15, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, -38.25, 3.8, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.1, -38.25, -3.8, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [25, 22.6, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [25, 0, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [8, 14.5, 5.6, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [8, 14.5, -5.6, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [8, -17.6, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [12.4, -26.6, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [1.7, 33.25, 1.4, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [1.7, 33.25, -1.4, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [1.7, 33.25, 4.3, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [1.7, 33.25, -4.3, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [1.7, -33.95, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [1.7, -33.95, 2.85, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [1.7, -33.95, -2.85, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [9.3, -39.25, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [9.3, -48, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [9.3, -56.75, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [9.3, -65.5, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [6.5, 0, -65.5, 90, 360, 1],
		TYPE: exports.weirdGunnerAuto4
	}, {
		POSITION: [6.5, 0, -56.75, 90, 360, 1],
		TYPE: exports.weirdGunnerAuto4
	}, {
		POSITION: [6.5, 0, -48, 90, 360, 1],
		TYPE: exports.weirdGunnerAuto4
	}, {
		POSITION: [6.5, 0, -39.25, 90, 360, 1],
		TYPE: exports.weirdGunnerAuto4
	}, {
		POSITION: [8, -26.6, 0, 180, 360, 1],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [16.6, -1, 0, 180, 361, 1],
		TYPE: exports.railgunAuto6
	}]
};
exports.shotgunAutoGun = {
	LABEL: 'Shotgun',
	BODY: {
		FOV: 1.5
	},
	COLOR: 13,
	CONTROLLERS: ['nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [4, 3, 1, 11, -3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [4, 3, 1, 11, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [4, 4, 1, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.casingLayer6
		}
	}, {
		POSITION: [1, 4, 1, 12, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.casingLayer6
		}
	}, {
		POSITION: [1, 4, 1, 11, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.casingLayer6
		}
	}, {
		POSITION: [1, 3, 1, 13, -1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [1, 3, 1, 13, 1, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [1, 2, 1, 13, 2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.casingLayer6
		}
	}, {
		POSITION: [1, 2, 1, 13, -2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.half_reload, g.faster]),
			TYPE: exports.casingLayer6
		}
	}, {
		POSITION: [15, 14, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.fake, g.half_reload, g.faster]),
			TYPE: exports.casingLayer6
		}
	}, {
		POSITION: [8, 14, -1.3, 4, 0, 0, 0]
	}]
};
exports.flooderAutoGun = {
	LABEL: 'Shotgun',
	BODY: {
		FOV: 2.1
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [22, 8, 1.4, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [18, 8, 1.4, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [14, 8, 1.4, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.bit_more_damage, g.half_reload, g.one_third_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.virusAutoGun = {
	LABEL: 'Virus',
	BODY: {
		FOV: 1.8
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [23, 6, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.flank, g.low_power, g.half_recoil, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [13.5, 8.1, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 8.1, 1.86, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_range, g.less_spread, g.half_reload]),
			TYPE: [exports.trap, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.doubleGuardAutoGun = {
	LABEL: 'Double Guard',
	BODY: {
		FOV: 1.9
	},
	COLOR: 13,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.barricadeAutoGun2 = {
	LABEL: 'Barricade',
	BODY: {
		FOV: 1.6
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.3, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.half_reload, g.less_reload]),
			TYPE: [exports.trap, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.half_reload, g.less_reload]),
			TYPE: [exports.trap, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.half_reload, g.less_reload]),
			TYPE: [exports.trap, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
var spreadshotProps2 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.minion]),
	TYPE: exports.bullet
};
exports.spreadGuardMinion = makeHybrid({
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps2
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps2
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps2
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps2
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps2
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps2
	}, {
		POSITION: [13, 8.5, 1.25, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.minion, g.one_third_reload]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
}, 'Minion');
let rocketBossProps3 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.fast_launch, g.even_smaller, g.bit_bigger, g.half_reload, g.half_reload]),
	TYPE: exports.spreadGuardMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1//2
};
exports.rocketBossProp6 = {
	SYNC_TURRET_SKILLS: true,
	SHAPE: 4,
	COLOR: 13,
	GUNS: [{
		POSITION: [2.5, 5.5, 1, 11.25, 4.7, 90, 0]
	}, {
		POSITION: [2, 7.2, 1.01, 12.8, 4.7, 90, 0],
		PROPERTIES: rocketBossProps3
	}, {
		POSITION: [4, 6.7, 1, 7.3, 4.7, 90, 0]
	}, {
		POSITION: [2.5, 5.5, 1, 11.25, -4.7, 90, 0]
	}, {
		POSITION: [2, 7.2, 1.01, 12.8, -4.7, 90, 0.5],
		PROPERTIES: rocketBossProps3
	}, {
		POSITION: [4, 6.7, 1, 7.3, -4.7, 90, 0]
	}, {
		POSITION: [2.5, 5.5, 1, 11.25, 4.7, 270, 0]
	}, {
		POSITION: [2, 7.2, 1.01, 12.8, 4.7, 270, 0],
		PROPERTIES: rocketBossProps3
	}, {
		POSITION: [4, 6.7, 1, 7.3, 4.7, 270, 0]
	}, {
		POSITION: [2.5, 5.5, 1, 11.25, -4.7, 270, 0]
	}, {
		POSITION: [2, 7.2, 1.01, 12.8, -4.7, 270, 0.5],
		PROPERTIES: rocketBossProps3
	}, {
		POSITION: [4, 6.7, 1, 7.3, -4.7, 270, 0]
	}],
	TURRETS: [{
		POSITION: [5, 0, 0, 0, 360, 1],
		TYPE: exports.shotgunAutoGun
	}, {
		POSITION: [2.7, 6.1, 6, 90, 220, 1],
		TYPE: exports.barricadeAutoGun2
	}, {
		POSITION: [2.7, 6.1, 0, 90, 220, 1],
		TYPE: exports.flooderAutoGun
	}, {
		POSITION: [2.7, 6.1, -6, 90, 220, 1],
		TYPE: exports.barricadeAutoGun2
	}, {
		POSITION: [2.7, 6.1, 6, 270, 220, 1],
		TYPE: exports.barricadeAutoGun2
	}, {
		POSITION: [2.7, 6.1, 0, 270, 220, 1],
		TYPE: exports.flooderAutoGun
	}, {
		POSITION: [2.7, 6.1, -6, 270, 220, 1],
		TYPE: exports.barricadeAutoGun2
	}]
};
exports.rocketBossProp7 = {
	SYNC_TURRET_SKILLS: true,
	SHAPE: 3,
	COLOR: 13,
	GUNS: [{
		POSITION: [11.5, 7, 1.9, 40, 0, 0, 0.889],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 36, 0, 0, 0.778],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 32, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 28, 0, 0, 0.556],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 24, 0, 0, 0.444],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 20, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 16, 0, 0, 0.222],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 12, 0, 0, 0.111],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.5, 7, 1.9, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.half_reload, g.less_reload, g.smaller, g.half_recoil, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.2, 3, 1.81, -7, 11.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.smaller, g.half_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14.2, 3, 1.81, -7, -11.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.smaller, g.half_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [4.3, 3.9, 0, 180, 361, 1],
		TYPE: exports.shotgunAutoGun
	}, {
		POSITION: [4.3, 3.9, 7.6, 180, 361, 1],
		TYPE: exports.virusAutoGun
	}, {
		POSITION: [4.3, 3.9, -7.6, 180, 361, 1],
		TYPE: exports.virusAutoGun
	}, {
		POSITION: [4.3, -2, 3.8, 180, 361, 1],
		TYPE: exports.virusAutoGun
	}, {
		POSITION: [4.3, -2, -3.8, 180, 361, 1],
		TYPE: exports.virusAutoGun
	}, {
		POSITION: [4.3, -8.1, 0, 180, 361, 1],
		TYPE: exports.virusAutoGun
	}]
};
exports.rocketBossProp8 = {
	SYNC_TURRET_SKILLS: true,
	SHAPE: 3,
	COLOR: 13,
	TURRETS: [{
		POSITION: [4.3, -3.9, 0, 0, 361, 1],
		TYPE: exports.shotgunAutoGun
	}, {
		POSITION: [4.3, -3.9, 7.6, 0, 361, 1],
		TYPE: exports.doubleGuardAutoGun
	}, {
		POSITION: [4.3, -3.9, -7.6, 0, 361, 1],
		TYPE: exports.doubleGuardAutoGun
	}, {
		POSITION: [4.3, 8.1, 0, 0, 361, 1],
		TYPE: exports.doubleGuardAutoGun
	}]
};
exports.rocketBossTier5 = {
	PARENT: [exports.genericTank],
	LABEL: 'RK-5',
	DANGER: 8,
	SIZE: 65,
	COLOR: 13,
	LEVEL: 45,
	VALUE: 26302,
	BOSS_TIER_TYPE: 6,
	FACING_TYPE: 'looseWithMotion',
	BODY: {
		FOV: 1.42,
		SPEED: 1.4,
		ACCELERATION: 0.25,
		HEALTH: 2000,
		DAMAGE: 5,
		REGEN: 0.015
	},
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp6
	}, {
		POSITION: [22, 19.7, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp6
	}, {
		POSITION: [22, -19.7, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp6
	}, {
		POSITION: [14.4, 35.4, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp8
	}, {
		POSITION: [14.4, 35.4, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp7
	}]
};
var manyshotProps = {
	SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.gunner, g.faster, g.more_power, g.more_power, g.more_power]),
	TYPE: exports.bullet
};
exports.manyshot = {
	PARENT: [exports.genericTank],
	LABEL: 'Birdshot',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 1.5, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [4, 2, 1, 11, -3, 0, 0],
		PROPERTIES: manyshotProps
	}, {
		POSITION: [15, 10, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sgun, g.gunner, g.fast, g.fake]),
			TYPE: exports.casing
		}
	}, {
		POSITION: [8, 10, -1.3, 4, 0, 0, 0]
	}]
};
exports.AWP_1 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-1',
	DANGER: 8,
	COLOR: 13,
	SIZE: 26,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.9,
		SPEED: 1.5,
		ACCELERATION: 0.8,
		HEALTH: 500
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [7.35, 13.5, 5.15, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, 5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [13, 0, 0, 0, 360, 1],
		TYPE: [exports.assassinAuto, {
			COLOR: 13,
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [4.1, 14.5, 8.2, 0, 190, 0],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.1, 14.5, -8.2, 0, 190, 0],
		TYPE: exports.basicAutoGun2
	}]
};
exports.smashMinion = {
	PARENT: [exports.genericTank],
	LABEL: 'Smasher Minion',
	TYPE: 'minion',
	DAMAGE_CLASS: 0,
	HITS_OWN_TYPE: 'hardWithBuffer',
	FACING_TYPE: 'smoothToTarget',
	BODY: {
		FOV: 0.5,
		SPEED: 3,
		ACCELERATION: 0.4,
		HEALTH: 5,
		SHIELD: 0,
		DAMAGE: 1.2,
		RESIST: 1,
		PENETRATION: 1,
		DENSITY: 0.4,
		RANGE: 100
	},
	AI: {
		BLIND: true
	},
	DRAW_HEALTH: false,
	CLEAR_ON_MASTER_UPGRADE: true,
	GIVE_KILL_MESSAGE: false,
	CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal', 'hangOutNearMaster'],
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 360, 0],
		TYPE: exports.smasherBody
	}],
	IS_SMASHER: true
};
var AWP_Props_1 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.fast_launch, g.half_reload, g.bit_bigger, g.bit_bigger]),
	TYPE: exports.smashMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1
};
exports.AWP_Prop_1 = {
	SHAPE: 4,
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [2.5, 5.5, 1, 11.25, 4.7, 90, 0]
	}, {
		POSITION: [2, 7.2, 1, 12.8, 4.7, 90, 0],
		PROPERTIES: AWP_Props_1
	}, {
		POSITION: [4, 6.7, 1, 7.3, 4.7, 90, 0]
	}, {
		POSITION: [2.5, 5.5, 1, 11.25, -4.7, 90, 0]
	}, {
		POSITION: [2, 7.2, 1, 12.8, -4.7, 90, 0.5],
		PROPERTIES: AWP_Props_1
	}, {
		POSITION: [4, 6.7, 1, 7.3, -4.7, 90, 0]
	}, {
		POSITION: [2.5, 5.5, 1, 11.25, 4.7, 270, 0]
	}, {
		POSITION: [2, 7.2, 1, 12.8, 4.7, 270, 0],
		PROPERTIES: AWP_Props_1
	}, {
		POSITION: [4, 6.7, 1, 7.3, 4.7, 270, 0]
	}, {
		POSITION: [2.5, 5.5, 1, 11.25, -4.7, 270, 0]
	}, {
		POSITION: [2, 7.2, 1, 12.8, -4.7, 270, 0.5],
		PROPERTIES: AWP_Props_1
	}, {
		POSITION: [4, 6.7, 1, 7.3, -4.7, 270, 0]
	}]
};
exports.hybridShiftAuto = makeHybrid(exports.hunterAuto, 'Hybrid Shifter');
exports.sniperAutoGun2 = {
	LABEL: 'Sniper',
	BODY: {
		FOV: 2.4
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [24, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
};
exports.AWP_Prop_2 = {
	SHAPE: 4,
	COLOR: 13,
	GUNS: [{
		POSITION: [15.1, 8.2, 1.65, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.lots_more_recoil, g.more_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.AWP_3 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-3',
	DANGER: 8,
	COLOR: 13,
	SIZE: 28,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.89,
		SPEED: 1.45,
		ACCELERATION: 0.75,
		HEALTH: 750
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.AWP_Prop_1
	}, {
		POSITION: [15, 16.6, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, 5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [3.5, 21.15, 2.55, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [3.5, 21.15, -2.55, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [3.5, -22.65, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.36, 26.9, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [5.36, 32, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [5.36, 37.1, 0, 180, 0, 1],
		TYPE: exports.AWP_Prop_2
	}, {
		POSITION: [3.7, -26.9, 0, 0, 360, 1],
		TYPE: [exports.hybridShiftAuto, {
			COLOR: 13,
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [3.7, -37.1, 0, 0, 360, 1],
		TYPE: exports.sniperAutoGun2
	}]
};
exports.sunburstAutoGun = {
	LABEL: 'Sunburst',
	BODY: {
		FOV: 2
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [19, 3, 1, 0, 0, 19, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, 0, -19, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 3, 1, 0, 2.2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.less_reload]),
			TYPE: exports.bullet
		}
	},{
		POSITION: [22, 3, 1, 0, -2.2, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.AWP_Prop_3 = {
	SHAPE: 4,
	COLOR: 13,
	GUNS: [{
		POSITION: [8.6, 4, 1.7, 8, 4.8, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.lots_more_recoil, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8.6, 4, 1.7, 8, -4.8, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.lots_more_recoil, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.AWP_4 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-4',
	DANGER: 8,
	COLOR: 13,
	SIZE: 30,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.88,
		SPEED: 1.4,
		ACCELERATION: 0.7,
		HEALTH: 1000
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [15, 16.6, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, 5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7, 10.5, 5, 90, 225, 0],
		TYPE: exports.sunburstAutoGun
	}, {
		POSITION: [7, 10.5, -5, 90, 225, 0],
		TYPE: exports.sunburstAutoGun
	}, {
		POSITION: [7, 10.5, 5, -90, 225, 0],
		TYPE: exports.sunburstAutoGun
	}, {
		POSITION: [7, 10.5, -5, -90, 225, 0],
		TYPE: exports.sunburstAutoGun
	}, {
		POSITION: [11.2, 24.7, 0, 180, 0, 1],
		TYPE: exports.AWP_Prop_3
	}, {
		POSITION: [7, 5.2, 24.7, 90, 225, 0],
		TYPE: [exports.carnivoreAutoGun, {
			COLOR: 13,
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [7, 5.2, -24.7, -90, 225, 0],
		TYPE: [exports.carnivoreAutoGun, {
			COLOR: 13,
			HAS_NO_RECOIL: true
		}]
	}]
};
var spreadshotProps3 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
	TYPE: exports.bulletLayer6
};
exports.autoSpreadlingGun = makeAuto({
	LABEL: 'Spreadling',
	BODY: {
		FOV: 1.9
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	HAS_NO_RECOIL: true,
	SYNC_TURRET_SKILLS: true,
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [13, 8.5, 1.25, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
});
exports.huntsmanAutoGun = {
	LABEL: 'Huntsman',
	BODY: {
		FOV: 2.1
	},
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [20, 4, 1, 10, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.pure_gunner, g.fast]),
			TYPE: exports.bulletLayer6,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [27, 8.5, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.doubleGuardMinion = {
	PARENT: [exports.minion],
	LABEL: 'Double Guard Minion',
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.flank, g.minion]),
			TYPE: exports.bullet
		}
	}]
};
var AWP_Props_2 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.fast_launch, g.half_reload, g.bigger]),
	TYPE: exports.doubleGuardMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1
};
exports.AWP_Prop_4 = {
	SHAPE: 4,
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [5, 8, 1, 10, 0, 90, 0]
	}, {
		POSITION: [2.5, 11.7, 1, 14.5, 0, 90, 0],
		PROPERTIES: AWP_Props_2
	}, {
		POSITION: [4.3, 11, 1, 7.5, 0, 90, 0]
	}, {
		POSITION: [5, 8, 1, 10, 0, 270, 0]
	}, {
		POSITION: [2.5, 11.7, 1, 14.5, 0, 270, 0],
		PROPERTIES: AWP_Props_2
	}, {
		POSITION: [4.3, 11, 1, 7.5, 0, 270, 0]
	}]
};
exports.AWP_5 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-5',
	DANGER: 8,
	COLOR: 13,
	SIZE: 20,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.12,
		SPEED: 1.4,
		ACCELERATION: 0.7,
		HEALTH: 1250
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.AWP_Prop_4
	}, {
		POSITION: [15, 16.6, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, 5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [11.2, 24.85, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [11.2, 35.4, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [11.2, 46, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [11.2, 56.5, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [11.2, 67, 0, 180, 0, 1],
		TYPE: exports.AWP_Prop_2
	}, {
		POSITION: [7.8, -24.85, 0, 0, 360, 1],
		TYPE: [exports.assassinAuto, {
			COLOR: 13,
			HAS_NO_RECOIL: true
		}]
	}, {
		POSITION: [7.8, -46, 0, 0, 360, 1],
		TYPE: exports.autoSpreadlingGun
	}, {
		POSITION: [7.8, -67, 0, 0, 360, 1],
		TYPE: exports.huntsmanAutoGun
	}]
};
exports.traplingAutoGun = {
	LABEL: 'Trapling',
	BODY: {
		FOV: 1.5
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [13, 8.5, 1, 8, 0, 0, 0],
	}, {
		POSITION: [3, 8.5, 1.3, 21, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_range]),
			TYPE: [exports.trap, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
var spreadshotProps4 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.half_reload]),
	TYPE: exports.bullet
};
exports.traplingAutoGun2 = {
	LABEL: 'Trapling',
	BODY: {
		FOV: 1.5
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps4
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps4
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps4
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps4
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps4
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps4
	}, {
		POSITION: [13, 8.5, 1, 8, 0, 0, 0],
	}, {
		POSITION: [3, 8.5, 1.3, 21, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.less_range, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.sprayerAutoGun2 = {
	LABEL: 'Sprayer',
	BODY: {
		FOV: 1.6
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [23, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.low_power, g.mach, g.half_reload, g.bit_smaller]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.less_damage, g.bit_smaller]),
			TYPE: exports.bullet
		}
	}]
};
exports.AWP_Prop_5 = {
	SHAPE: 4,
	COLOR: 13,
	GUNS: [{
		POSITION: [5.1, 3, 1.55, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.more_recoil, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.1, 3, 1.55, 8, 6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.1, 3, 1.55, 8, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.one_fourth_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.AWP_6 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-6',
	DANGER: 8,
	COLOR: 13,
	SIZE: 26,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: 1.35,
		ACCELERATION: 0.7,
		HEALTH: 1750
	},
	TURRETS: [{
		POSITION: [23, 29, 0, 180, 0, 1],
		TYPE: exports.AWP_Prop_5
	}, {
		POSITION: [23, -8, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [23, 13, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [15, 29.6, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [14, -29, 0, 0, 360, 1],
		TYPE: [exports.sprayerAutoGun, {
			COLOR: 13,
			CONTROLLERS: ['nearestDifferentMaster']
		}]
	}, {
		POSITION: [14, 10.7, 29, 90, 225, 0],
		TYPE: exports.sprayerAutoGun2
	}, {
		POSITION: [14, 10.7, -29, 270, 225, 0],
		TYPE: exports.sprayerAutoGun2
	}, {
		POSITION: [14, 13, 0, 0, 360, 1],
		TYPE: exports.traplingAutoGun
	}, {
		POSITION: [14, 10.7, -13, 90, 225, 0],
		TYPE: exports.traplingAutoGun2
	}, {
		POSITION: [14, 10.7, 13, 270, 225, 0],
		TYPE: exports.traplingAutoGun2
	}]
};
exports.spreadbowAutoGun = {
	LABEL: 'Spreadbow',
	BODY: {
		FOV: 1.9
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, 135, 0.75],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, 152.5, 0.5],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [19, 4, 1, 0, -2, 170, 0.25],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [16, 4, 1, 0, 1, 225, 0.75],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 207.5, 0.5],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [19, 4, 1, 0, 2, 190, 0.25],
		PROPERTIES: spreadshotProps3
	}, {
		POSITION: [13, 7.5, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [13, 7, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload]),
			TYPE: [exports.swarm, {
				LAYER: 6
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.sniperRifleAutoGun = {
	LABEL: 'Sniper Rifle',
	BODY: {
		FOV: 2.2
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [28, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.rifle, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [12, 10.5, 0.8, 13, 0, 0, 0]
	}, {
		POSITION: [8, 10.5, -1.6, 5, 0, 0, 0]
	}]
};
exports.plaguerAutoGun = {
	LABEL: 'Plaguer',
	BODY: {
		FOV: 1.8
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [23, 2, 1, 0, 3.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast, g.half_damage, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 2, 1, 0, -3.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast, g.half_damage, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.more_range, g.more_reload, g.bigger, g.fast, g.bit_more_damage, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.AWP_7 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-7',
	DANGER: 8,
	COLOR: 13,
	SIZE: 32,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.92,
		SPEED: 1.35,
		ACCELERATION: 0.7,
		HEALTH: 1500
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [4.7, 12.5, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 12.5, 7, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 12.5, -7, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, -14.45, 3.5, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, -14.45, -3.5, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 12.5, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 12.5, 7, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 12.5, -7, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, -14.45, 3.5, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, -14.45, -3.5, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 18.55, 3.5, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, 18.55, -3.5, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [4.7, -20.45, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [15.3, 23.55, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [9.92, 34.7, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.2, 26, 0, 180, 0, 1],
		TYPE: exports.AWP_Prop_2
	}, {
		POSITION: [4.7, -26, 0, 0, 360, 1],
		TYPE: exports.sniperRifleAutoGun
	}, {
		POSITION: [9.7, 7.1, -23.55, 90, 225, 0],
		TYPE: exports.plaguerAutoGun
	}, {
		POSITION: [9.7, 7.1, 23.55, 270, 225, 0],
		TYPE: exports.plaguerAutoGun
	}, {
		POSITION: [4.6, 0, 0, 0, 360, 1],
		TYPE: exports.spreadbowAutoGun
	}, {
		POSITION: [4.6, 0, 7, 0, 360, 1],
		TYPE: exports.spreadbowAutoGun
	}, {
		POSITION: [4.6, 0, -7, 0, 360, 1],
		TYPE: exports.spreadbowAutoGun
	}]
};
var AWP_Props_3 = {
	SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.bigger, g.bigger, g.low_power, g.less_reload, g.faster]),
	TYPE: exports.swarm,
	STAT_CALCULATOR: gunCalcNames.swarm
};
exports.AWP_8 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-8',
	DANGER: 8,
	COLOR: 13,
	SIZE: 48,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'spinSlowly',
	STAT_NAMES: statNames.generic,
	SHAPE: 4,
	BODY: {
		FOV: 0.8,
		SPEED: 1.32,
		ACCELERATION: 0.56,
		HEALTH: 2000
	},
	GUNS: [{
		POSITION: [2.5, 0.8, 0.5, 8, 0.6, 0, 0],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -0.6, 0, 0.5],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 4.4, 0, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 3.2, 0, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 8.2, 0, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 7, 0, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -3.2, 0, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -4.4, 0, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -7, 0, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -8.2, 0, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 0.6, 90, 0],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -0.6, 90, 0.5],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 4.4, 90, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 3.2, 90, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 8.2, 90, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 7, 90, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -3.2, 90, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -4.4, 90, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -7, 90, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -8.2, 90, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 0.6, 180, 0],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -0.6, 180, 0.5],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 4.4, 180, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 3.2, 180, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 8.2, 180, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 7, 180, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -3.2, 180, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -4.4, 180, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -7, 180, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -8.2, 180, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 0.6, 270, 0],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -0.6, 270, 0.5],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 4.4, 270, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 3.2, 270, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 8.2, 270, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, 7, 270, 0.8],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -3.2, 270, 0.2],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -4.4, 270, 0.4],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -7, 270, 0.6],
		PROPERTIES: AWP_Props_3
	}, {
		POSITION: [2.5, 0.8, 0.5, 8, -8.2, 270, 0.8],
		PROPERTIES: AWP_Props_3
	}],
	TURRETS: [{
		POSITION: [4.5, 6.55, 0, 45, 360, 1],
		TYPE: [exports.twinAutoGun4, {
			COLOR: 13
		}]
	}, {
		POSITION: [4.5, 6.55, 0, 135, 360, 1],
		TYPE: [exports.twinAutoGun4, {
			COLOR: 13
		}]
	}, {
		POSITION: [4.5, 6.55, 0, 225, 360, 1],
		TYPE: [exports.twinAutoGun4, {
			COLOR: 13
		}]
	}, {
		POSITION: [4.5, 6.55, 0, 315, 360, 1],
		TYPE: [exports.twinAutoGun4, {
			COLOR: 13
		}]
	}]
};
exports.autoDoubleAutoGun = makeAuto({
	BODY: {
		FOV: 2
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	SYNC_TURRET_SKILLS: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.half_reload]),
			TYPE: exports.bulletLayer6
		}
	}]
}, 'Auto-Double');
exports.autoDoubleMinion = makeAuto({
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.minion]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.minion]),
			TYPE: exports.bullet
		}
	}]
}, 'Auto-Double Minion');
exports.AWP_Prop_6 = {
	SHAPE: 4,
	COLOR: 13,
	GUNS: [{
		POSITION: [4.6, 1.65, 2, 8, 6.45, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.less_reload, g.half_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.6, 1.65, 2, 8, 2.15, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.less_reload, g.half_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.6, 1.65, 2, 8, -2.15, 180, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.less_reload, g.half_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.6, 1.65, 2, 8, -6.45, 180, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.thruster, g.less_reload, g.half_recoil, g.less_recoil]),
			TYPE: exports.bullet
		}
	}]
};
var AWP_Props_4 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.fast_launch, g.half_reload, g.bigger]),
	TYPE: exports.autoDoubleMinion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 1
};
exports.AWP_Prop_7 = {
	SHAPE: 4,
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [5, 8.1, 1, 10, 0, 90, 0]
	}, {
		POSITION: [2.7, 12.3, 1, 14.5, 0, 90, 0],
		PROPERTIES: AWP_Props_4
	}, {
		POSITION: [4.3, 11.5, 1, 7.5, 0, 90, 0]
	}, {
		POSITION: [5, 8.1, 1, 10, 0, 270, 0]
	}, {
		POSITION: [2.7, 12.3, 1, 14.5, 0, 270, 0],
		PROPERTIES: AWP_Props_4
	}, {
		POSITION: [4.3, 11.5, 1, 7.5, 0, 270, 0]
	}]
};
exports.AWP_9 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-9',
	DANGER: 8,
	COLOR: 13,
	SIZE: 36,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.94,
		SPEED: 1.26,
		ACCELERATION: 0.52,
		HEALTH: 2250
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.AWP_Prop_6
	}, {
		POSITION: [7.35, 13.5, 5.15, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [11.2, 24.7, 0, 0, 0, 1],
		TYPE: exports.AWP_Prop_7
	}, {
		POSITION: [7.3, 32.9, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [5.65, -6.8, 5, 90, 360, 1],
		TYPE: exports.autoDoubleAutoGun
	}, {
		POSITION: [5.65, -6.8, -5, 90, 360, 1],
		TYPE: exports.autoDoubleAutoGun
	}, {
		POSITION: [5.65, -6.8, 5, 270, 360, 1],
		TYPE: exports.autoDoubleAutoGun
	}, {
		POSITION: [5.65, -6.8, -5, 270, 360, 1],
		TYPE: exports.autoDoubleAutoGun
	}]
};
exports.trapDweller = {
	PARENT: [exports.genericTank],
	LABEL: 'Trap Dweller',
	DANGER: 8,
	SIZE: 25,
	COLOR: 13,
	FACING_TYPE: 'autospin2',
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.08,
		HEALTH: 1750
	},
	SHAPE: 4,
	GUNS: [{
		POSITION: [15, 10, 1, 0, 0, 270, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 90, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [0, 8, 1.2, 8, 0, 25, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.trapminion,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 6
		}
	}],
	TURRETS: [{
		POSITION: [6, 10, 0, 45, 180, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [6, 10, 0, 135, 180, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [6, 10, 0, -135, 180, 0],
		TYPE: exports.sniper3gun
	}, {
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: [exports.hexaTrap, {
			COLOR: 13,
			SYNC_TURRET_SKILLS: true
		}]
	}, {
		POSITION: [6, 10, 0, -45, 180, 0],
		TYPE: exports.sniper3gun
	}]
};
exports.testboss2 = {
	PARENT: [exports.genericTank],
	LABEL: 'Unnamed Boss',
	DANGER: 9,
	SIZE: 32,
	COLOR: 13,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.075,
		HEALTH: 1250
	},
	FACING_TYPE: 'spinSlowly',
	GUNS: [{
		POSITION: [0, 8, 1.2, 8, 0, 25, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.more_reload, g.more_power]),
			TYPE: exports.twinMinion,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 6
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 4, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, -4, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, -4, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, 4, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 4, -1.6, 9, -4, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [9, 14, 1, 4, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 14, 1, 4, 0, 90, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 14, 1, 4, 0, 180, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 14, 1, 4, 0, 270, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 90, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 270, 0]
	}, {
		POSITION: [3, 10, 1.7, 15, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [6, 10, 0, 45, 180, 0],
		TYPE: exports.masterGun
	}, {
		POSITION: [6, 10, 0, 135, 180, 0],
		TYPE: exports.masterGun
	}, {
		POSITION: [6, 10, 0, -135, 180, 0],
		TYPE: exports.masterGun
	}, {
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: [exports.bigAuto3Gun, {
			INDEPENDENT: true
		}]
	}, {
		POSITION: [6, 10, 0, -45, 180, 0],
		TYPE: exports.masterGun
	}]
};
exports.multitool = {
	PARENT: [exports.genericTank],
	LABEL: 'Multitool',
	DANGER: 8,
	BODY: {
		SPEED: base.SPEED * 0.85,
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.8
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.bit_less_damage, g.one_fourth_reload, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 6, -1.6, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_less_damage, g.half_recoil, g.flank]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [6, 12, 1.2, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.less_reload]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 3
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.bit_less_damage, g.slow, g.flank]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4.5, 8, 1, 10.5, 0, 180, 0]
	}, {
		POSITION: [1, 10, 1, 15, 0, 180, 0],
		PROPERTIES: {
			MAX_CHILDREN: 1,
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory, g.one_fourth_reload, g.bit_less_damage, g.flank]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 7, 1, 8, 0, 180, 0]
	}, {
		POSITION: [18, 7, 1, 0, 0, 180, 0]
	}, {
		POSITION: [2, 7, 1.1, 18, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.quadtrap, g.bit_less_damage, g.one_fourth_reload, g.bit_less_damage]),
			TYPE: exports.block
		}
	}, {
		POSITION: [4, 9, 1, 14, 0, 180, 0]
	}, {
		POSITION: [5, 9, -1.5, 6, 0, 180, 0]
	}, {
		POSITION: [2, 7, 1.3, 16, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.flank, g.flank, g.half_reload, g.bit_less_damage]),
			TYPE: exports.boomerang
		}
	}]
};
exports.undergunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Undergunner',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	SHAPE: 4,
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.meta]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro,
			MAX_CHILDREN: 8
		}
	}, {
		POSITION: [19, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}]
};
exports.undertrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Undertrapper',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.15
	},
	SHAPE: 4,
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.meta]),
			TYPE: exports.sunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro,
			MAX_CHILDREN: 8
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.commander = {
	PARENT: [exports.genericTank],
	LABEL: 'Commander',
	DANGER: 7,
	MAX_CHILDREN: 3,
	BODY: {
		FOV: 1.2
	},
	STAT_NAMES: statNames.minion,
	GUNS: [{
		POSITION: [5, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.command]),
			TYPE: [exports.annihilator, {
				HITS_OWN_TYPE: 'hardWithBuffer',
				FACING_TYPE: 'smoothToTarget',
				BODY: {
					FOV: 0.4,
					SPEED: 1,
					ACCELERATION: 0.4,
					HEALTH: 3,
					SHIELD: 0,
					DAMAGE: 1,
					RESIST: 1,
					PENETRATION: 1,
					DENSITY: 0.4
				},
				AI: {
					blind: true
				},
				CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal', 'hangOutNearMaster'],
				//CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
				DRAW_HEALTH: false,
				ACCEPTS_SCORE: false,
				CLEAR_ON_MASTER_UPGRADE: true,
				GIVE_KILL_MESSAGE: false,
				CAN_BE_ON_LEADERBOARD: false
			}],
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [18.1, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.command, g.fake]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.6]
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.6]
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0.1]
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0.1]
	}]
};
exports.machineTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Machine Trapper',
	DANGER: 6,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.95,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 7, 1.75, 0, 0, 0, 0]
	}, {
		POSITION: [3, 13.1, 1.5, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.less_range, g.smaller, g.bit_smaller, g.less_spread, g.double_reload, g.bit_less_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.blasterTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Blazer',//Barber
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [12.5, 8.1, 2, 0, 0, 0, 0]
	}, {
		POSITION: [2.5, 16.2, 1.4, 12.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.blast, g.less_range, g.smaller, g.smaller, g.double_reload, g.bit_less_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.gatlingTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Roadblock',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.9,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [17, 8, 1.7, 0, 0, 0, 0]
	}, {
		POSITION: [3, 13.7, 1.5, 17, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.chain, g.smaller, g.bit_smaller, g.double_reload, g.bit_less_reload, g.bit_less_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.machineBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Planter',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 12, 1.4, 0, 0, 0, 0]
	}, {
		POSITION: [2, 16.8, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mach, g.less_range, g.smaller]),
			TYPE: exports.block
		}
	}]
};

let AWP_Props_5 = {
	SHOOT_SETTINGS: combineStats([g.factory, g.fast_launch, g.half_reload, g.half_reload, g.bigger]),
	TYPE: exports.minion,
	STAT_CALCULATOR: gunCalcNames.drone,
	AUTOFIRE: true,
	SYNCS_SKILLS: true,
	MAX_CHILDREN: 3
};
exports.AWP_Prop_8 = {
	SHAPE: 4,
	COLOR: 13,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [1, 1.95, 1, 9.64, -7, 0, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, -7, 0, 0],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, -7, 0, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, -3.5, 0, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, -3.5, 0, 0.2],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, -3.5, 0, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, 0, 0, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, 0, 0, 0.4],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, 0, 0, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, 3.5, 0, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, 3.5, 0, 0.6],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, 3.5, 0, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, 7, 0, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, 7, 0, 0.8],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, 7, 0, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, -7, 180, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, -7, 180, 0],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, -7, 180, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, -3.5, 180, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, -3.5, 180, 0.2],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, -3.5, 180, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, 0, 180, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, 0, 180, 0.4],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, 0, 180, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, 3.5, 180, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, 3.5, 180, 0.6],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, 3.5, 180, 0]
	}, {
		POSITION: [1, 1.95, 1, 9.64, 7, 180, 0]
	}, {
		POSITION: [0.8, 2.8, 1.01, 10.7, 7, 180, 0.8],
		PROPERTIES: AWP_Props_5
	}, {
		POSITION: [1.8, 2.45, 1, 8.13, 7, 180, 0]
	}],
	TURRETS: []
};
exports.AWP_10 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-10',
	DANGER: 8,
	COLOR: 13,
	SIZE: 38,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.92,
		SPEED: 1.25,
		ACCELERATION: 0.5,
		HEALTH: 2500
	},
	TURRETS: [{
		POSITION: [23, 0, 10.3, 90, 0, 1],
		TYPE: exports.AWP_Prop_8
	}, {
		POSITION: [23, 0, -10.3, 90, 0, 1],
		TYPE: exports.AWP_Prop_8
	}, {
		POSITION: [7.35, 23.7, 5.15, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 23.7, -5.15, 0, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -26.6, 0, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 23.7, 5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 23.7, -5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -26.6, 0, 0, 0, 1],
		TYPE: exports.satelliteProp3
	}, {
		POSITION: [4.1, 24.8, 8.2, 0, 190, 0],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [4.1, 24.8, -8.2, 0, 190, 0],
		TYPE: exports.basicAutoGun2
	}, {
		POSITION: [6.5, 30, 0, 0, 220, 0],
		TYPE: [exports.basicAutoGun, {
			COLOR: 13
		}]
	}]
};
exports.megaTrapAutoGun = {
	LABEL: 'Mega Trapper',
	BODY: {
		FOV: 1.5
	},
	COLOR: 13,
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
	GUNS: [{
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.more_range, g.more_reload, g.bigger, g.fast, g.bit_more_damage, g.half_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.AWP_Prop_9 = {
	COLOR: 13,
	SHAPE: 3,
	GUNS: [{
		POSITION: [20, 4, 2, 2, 7, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lots_more_recoil, g.smaller, g.thruster, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 2, 2, -7, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lots_more_recoil, g.smaller, g.thruster, g.half_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.AWP_2 = {
	PARENT: [exports.genericTank],
	LABEL: 'AWP-2',
	DANGER: 8,
	COLOR: 13,
	SIZE: 27,
	BOSS_TIER_TYPE: 8,
	LEVEL: 45,
	VALUE: 26302,
	FACING_TYPE: 'looseWithMotion',
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 0.89,
		SPEED: 1.5,
		ACCELERATION: 0.8,
		HEALTH: 500
	},
	TURRETS: [{
		POSITION: [23, 0, 0, 0, 0, 1],
		TYPE: exports.rocketBossProp1
	}, {
		POSITION: [7.35, 13.5, 5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, 13.5, -5.15, 180, 0, 1],
		TYPE: exports.rocketBossProp5
	}, {
		POSITION: [7.35, -16.4, 0, 0, 0, 1],
		TYPE: exports.AWP_Prop_9
	}, {
		POSITION: [5.6, 10.5, 0, 0, 220, 0],
		TYPE: exports.megaTrapAutoGun
	}, {
		POSITION: [5.6, 10.5, 7, 0, 220, 0],
		TYPE: [exports.basicAutoGun, {
			COLOR: 13
		}]
	}, {
		POSITION: [5.6, 10.5, -7, 0, 220, 0],
		TYPE: [exports.basicAutoGun, {
			COLOR: 13
		}]
	}]
};
exports.eliteTwinAI = makeAuto({
	PARENT: [exports.elite],
	SKILL: setSkill(0, 9, 6, 5, 6, 5, 8, 0, 0, 0),
	FACING_TYPE: 'smoothToTarget',
	GUNS: [{
		POSITION: [16, 8, 1, -5.5, 7, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.no_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, -5.5, -7, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.no_recoil, g.half_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 12, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_third_reload, g.smaller]),
			TYPE: exports.bullet
		}
	}],
	BROADCAST_MESSAGE: 'An Elite Twin has been killed!'
}, 'Elite Twin', {
	type: exports.twinAuto,
	size: 12,
	angle: 0
});
exports.eliteMachineAI = makeAuto({
	PARENT: [exports.elite],
	SKILL: setSkill(2, 9, 7, 8, 8, 9, 9, 2, 1, 0),
	GUNS: [{
		POSITION: [5, 3.5, 1.4, 8, -10, 60, 0],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 10, 60, 0.25],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -3.5, 60, 0.5],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 3.5, 60, 0.75],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -10, 180, 0],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 10, 180, 0.25],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -3.5, 180, 0.5],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 3.5, 180, 0.75],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -10, 300, 0],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 10, 300, 0.25],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, -3.5, 300, 0.5],
		PROPERTIES: eliteMachineProps
	}, {
		POSITION: [5, 3.5, 1.4, 8, 3.5, 300, 0.75],
		PROPERTIES: eliteMachineProps
	}],
	BROADCAST_MESSAGE: 'An Elite Machine has been killed!'
}, 'Elite Machine', {
	type: exports.autoPound,
	size: 12
});
exports.eliteTrapAI = makeAuto({
	PARENT: [exports.elite],
	SKILL: setSkill(0, 9, 6, 5, 5, 5, 8, 0, 0, 0),
	GUNS: [{
		POSITION: [7.1, 7, 1, 7.9, 9.75, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 9.75, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, -9.75, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, -9.75, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, 9.75, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 9.75, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, -9.75, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, -9.75, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, 9.75, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 9.75, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7.1, 7, 1, 7.9, -10, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, -10, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.defend, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [3, 13, 0, 0, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [3, 13, 0, 120, 360, 1],
		TYPE: exports.defenderGun
	}, {
		POSITION: [3, 13, 0, 240, 360, 1],
		TYPE: exports.defenderGun
	}],
	BROADCAST_MESSAGE: 'An Elite Trapper has been killed!'
}, 'Elite Trapper', {
	type: exports.constructAuto,
	independent: false,
	size: 13.5
});
exports.eliteBorerAI = makeAuto({
	PARENT: [exports.elite],
	SKILL: setSkill(0, 9, 5, 5, 5, 6, 7, 1, 0, 0),
	FACING_TYPE: 'smoothToTarget',
	GUNS: [{
		POSITION: [17.5, 1.5, 1, 0, 1.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 1.5, 1, 0, -1.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 15.25, 1.3, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.more_recoil, g.one_third_reload, g.smaller, g.smaller]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [12, 7, 0, 60, 190, 0],
		TYPE: exports.borerAutoGun
	}, {
		POSITION: [12, 7, 0, 300, 190, 0],
		TYPE: exports.borerAutoGun
	}],
	BROADCAST_MESSAGE: 'An Elite Borer has been killed!'
}, 'Elite Borer', {
	type: exports.eliteBorerAuto,
	size: 12,
	x: 0.85
});
exports.bentTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Bastoin',//Bent Trapper
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 2, 20, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -2, -20, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [16.5, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 16.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.doubleTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Corporal',//Double Trapper
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, 6.5, 180, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 180, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autoTwinTrapper = makeAuto(exports.twinTrapper, 'Waller');
exports.autoMachineTrapper = makeAuto(exports.machineTrapper, 'Denier');
exports.trapperAutoTrapper = makeAuto(exports.trapper, 'Trapception', {
	type: exports.trapAutoTurret
});
exports.summonerAI = {
	PARENT: [exports.miniboss],
	LABEL: 'Summoner',
	DANGER: 8,
	BODY: {
		FOV: 0.9,
		SPEED: base.SPEED * 0.1,
		HEALTH: base.HEALTH * 7,
		DAMAGE: base.DAMAGE * 2.6
	},
	COLOR: 13,
	COLOR_OVERRIDE: 32,
	SHAPE: 4,
	FACING_TYPE: 'spinSlowly',
	MAX_CHILDREN: 28,
	SIZE: 25,
	VALUE: 2e5,
	SKILL: setSkill(2, 9, 3, 6, 6, 5, 9, 1, 2, 2),
	GUNS: [{
		POSITION: [3.5, 8.65, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [3.5, 8.65, 1.2, 8, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [3.5, 8.65, 1.2, 8, 0, 180, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.summon]),
			TYPE: exports.squareDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}],
	BROADCAST_MESSAGE: 'A Summoner has been killed!'
};
exports.marine = {
	PARENT: [exports.genericTank],
	LABEL: 'Marine',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.6,
		SHIELD: base.SHIELD * 0.6,
		DENSITY: base.DENSITY * 0.2
	},
	INVISIBLE: [0.08, 0.02, 0.02],
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 106, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, -106, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.torpedo = {
	PARENT: [exports.bullet],
	LABEL: 'Torpedo',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1.4, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.lots_more_recoil, g.mach, g.bit_less_reload]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.torpedoer = {
	PARENT: [exports.genericTank],
	LABEL: 'Torpedoer',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [10, 10, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [15, 10, -1.6, 0, 0, 180, 0]
	}, {
		POSITION: [17, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.double_reload, g.less_damage, g.faster, g.bit_less_reload]),
			TYPE: exports.torpedo,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.eliteSniperAI = {
	PARENT: [exports.elite],
	LABEL: 'Elite Sniper',
	SKILL: setSkill(1, 9, 9, 7, 7, 8, 9, 5, 1, 1),
	TURRETS: [{
		POSITION: [11, 6, 0, 180, 190, 0],
		TYPE: exports.bigSniper3Gun
	}, {
		POSITION: [11, 6, 0, 60, 190, 0],
		TYPE: exports.bigSniper3Gun
	}, {
		POSITION: [11, 6, 0, -60, 190, 0],
		TYPE: exports.bigSniper3Gun
	}],
	BROADCAST_MESSAGE: 'An Elite Sniper has been killed!'
};
exports.octagronAI = {
	PARENT: [exports.miniboss],
	LABEL: 'Octagron',
	DANGER: 8,
	SHAPE: 8,
	COLOR: 2,
	SIZE: 28,
	FACING_TYPE: 'autospin2',
	VARIES_IN_SIZE: true,
	VALUE: 4e5,
	BODY: {
		FOV: 4,
		SPEED: base.SPEED * 0.05,
		HEALTH: base.HEALTH * 10,
		REGEN: base.REGEN * 0.25,
		DAMAGE: base.DAMAGE * 2
	},
	TURRETS: [{
		POSITION: [6.5, 9, 0, 45, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [6.5, 9, 0, 135, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [6.5, 9, 0, 225, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [6.5, 9, 0, 315, 80, 0],
		TYPE: [exports.bansheeGun, {
			INDEPENDENT: false
		}]
	}, {
		POSITION: [14.5, 0, 0, 0, 0, 1],
		TYPE: exports.weirdAutoTurret
	}],
	GUNS: [{
		POSITION: [13.75, 6.25, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.75, 6.25, 1, 0, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.75, 6.25, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13.75, 6.25, 1, 0, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}],
	BROADCAST_MESSAGE: 'An Octagron has been killed!'
};
exports.triBorer = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Borer',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: []
};
exports.triHewnPellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Hewn Pelleter',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: []
};
exports.triPunt = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Punt Gun',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: []
};
exports.arenaCloser5 = {
	PARENT: [exports.arenaCloser],
	LABEL: 'Penta Closer',
	GUNS: [{
		POSITION: [11, 9, 1, 0, 3, 30, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}, {
		POSITION: [11, 9, 1, 0, -3, -30, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}, {
		POSITION: [13, 9, 1, 0, 2, 15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}, {
		POSITION: [13, 9, 1, 0, -2, -15, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}, {
		POSITION: [15, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
			TYPE: [exports.bullet, {
				DIES_TO_TEAM_BASE: false,
				DONT_HIT_OBSTACLES: true,
				LAYER: 12
			}]
		}
	}],
	DIES_TO_TEAM_BASE: false,
	DRAW_HEALTH: false,
	HITS_OWN_TYPE: 'never',
	DONT_HIT_OBSTACLES: true
};
exports.snipewark = {
	PARENT: [exports.genericTank],
	LABEL: 'Snipewark',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.85,
		FOV: 1.2
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [22, 7.75, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.bit_less_damage, g.less_reload, g.bit_more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 5.5, 190, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 5.5, 190, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.less_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [22, 7.75, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.bit_less_damage, g.less_reload, g.bit_more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, -5.5, 170, 0.5]
	}, {
		POSITION: [4, 8, 1.7, 13, -5.5, 170, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.less_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.twinRanger = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Ranger',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.8,
		FOV: 1.4
	},
	GUNS: [{
		POSITION: [30, 7.5, 1, 0, 5.4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.assassin, g.bit_less_damage, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 7.5, 1, 0, -5.4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.assassin, g.bit_less_damage, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11.8, 7.5, -1.24, 0, 5.4, 0, 0]
	}, {
		POSITION: [11.8, 7.5, -1.24, 0, -5.4, 0, 0]
	}]
};
exports.megaAnnihilator = {
	PARENT: [exports.genericTank],
	LABEL: 'Decentralizer',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [21, 19.5, 1.2, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.decentralize]),
			TYPE: exports.bullet
		}
	}]
};
exports.tripleDual = {
	PARENT: [exports.genericTank],
	LABEL: 'Triplet Dual',
	DANGER: 7,//7.5
	BODY: {
		ACCELARATION: base.ACCEL * 0.5,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 7, 1, 0, 5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple, g.low_power, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.65],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8.5, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.triple, g.bit_more_damage]),
			TYPE: exports.bullet
		}
	}]
};
exports.starbomber = {
	PARENT: [exports.genericTank],
	LABEL: 'Starbomber',
	DANGER: 7,//7.5
	BODY: {
		HEALTH: base.HEALTH * 0.6,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.lots_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.more_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.quadMachine = {
	PARENT: [exports.genericTank],
	LABEL: 'Quad Machine',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.85
	},
	GUNS: [{
		POSITION: [12, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 10, 1.4, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.quadTwin = {
	PARENT: [exports.genericTank],
	LABEL: 'Quad Twin',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.hyperMissile2 = {
	PARENT: [exports.missile],
	BODY: {
		RANGE: 125
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, -2, 150, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_recoil, g.more_speed, g.more_speed, g.less_range]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 2, 210, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_recoil, g.more_speed, g.more_speed, g.less_range]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, -2, 90, 0.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.less_range]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}, {
		POSITION: [14, 6, 1, 0, 2, 270, 0.5],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.less_range]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.hyperSkimmer = {
	PARENT: [exports.genericTank],
	LABEL: 'Hyperskimmer',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.15,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [10, 14, -0.5, 12, 0, 0, 0]
	}, {
		POSITION: [10, 14, -0.5, 10, 0, 0, 0]
	}, {
		POSITION: [18, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.more_power, g.less_reload, g.bit_more_reload]),
			TYPE: exports.hyperMissile2,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.rangerGatling = {
	PARENT: [exports.genericTank],
	LABEL: 'Ultling',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.3,
		SPEED: base.SPEED * 0.75,
		ACCELERATION: base.ACCEL * 0.5
	},
	GUNS: [{
		POSITION: [22, 10, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.sniper]),
			TYPE: exports.bullet
		}
	}]
};
exports.widespread = {
	PARENT: [exports.genericTank],
	LABEL: 'Wideshot',
	DANGER: 7,//7.5
	GUNS: [{
		POSITION: [11.5, 4, 1, 0, -0.2, -90, 0.857],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 4, 1, 0, -0.4, -75, 0.714],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14.5, 4, 1, 0, -1.0, -60, 0.571],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, -1.6, -45, 0.429],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -2.4, -30, 0.286],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -3.0, -15, 0.143],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [11.5, 4, 1, 0, 0.2, 90, 0.857],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 4, 1, 0, 0.4, 75, 0.714],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [14.5, 4, 1, 0, 1.0, 60, 0.571],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1.6, 45, 0.429],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 2.4, 30, 0.286],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 3.0, 15, 0.143],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [13, 8.75, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.bit_more_damage, g.bit_bigger]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.longRanger = {
	PARENT: [exports.genericTank],
	LABEL: 'Viewfinder',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.75,
		FOV: 1.5
	},
	GUNS: [{
		POSITION: [36, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.fast, g.bit_less_reload, g.no_spread]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}]
};
exports.auto7 = {
	PARENT: [exports.genericTank],
	LABEL: 'Auto-7',
	DANGER: 7,//7.5
	BODY: {
		SPEED: base.SPEED * 0.9
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [8.8, 9, 0, 0, 160, 0],
		TYPE: exports.auto7gun
	}, {
		POSITION: [8.8, 9, 0, 51.43, 160, 0],
		TYPE: exports.auto7gun
	}, {
		POSITION: [8.8, 9, 0, 102.86, 160, 0],
		TYPE: exports.auto7gun
	}, {
		POSITION: [8.8, 9, 0, 154.29, 160, 0],
		TYPE: exports.auto7gun
	}, {
		POSITION: [8.8, 9, 0, -154.29, 160, 0],
		TYPE: exports.auto7gun
	}, {
		POSITION: [8.8, 9, 0, -102.86, 160, 0],
		TYPE: exports.auto7gun
	}, {
		POSITION: [8.8, 9, 0, -54.43, 160, 0],
		TYPE: exports.auto7gun
	}]
};
var spreadshotProps5 = {
	SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread, g.mach, g.bit_less_reload]),
	TYPE: exports.bullet
};
exports.spreadMach = {
	PARENT: [exports.genericTank],
	LABEL: 'Spreadmach',
	DANGER: 7,//7.5
	GUNS: [{
		POSITION: [13, 4, 1.3, 0, -0.8, -75, 0.833],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [14.5, 4, 1.3, 0, -1, -60, 0.667],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [16, 4, 1.3, 0, -1.6, -45, 0.5],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [17.5, 4, 1.3, 0, -2.4, -30, 0.333],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [19, 4, 1.3, 0, -3, -15, 0.167],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [13, 4, 1.3, 0, 0.8, 75, 0.833],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [14.5, 4, 1.3, 0, 1, 60, 0.667],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [16, 4, 1.3, 0, 1.6, 45, 0.5],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [17.5, 4, 1.3, 0, 2.4, 30, 0.333],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [19, 4, 1.3, 0, 3, 15, 0.167],
		PROPERTIES: spreadshotProps5
	}, {
		POSITION: [13, 8.5, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.mach, g.bit_bigger, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.autoDoubleTrapper = makeAuto(exports.doubleTrapper);
exports.autoDoubleTrapper.DANGER = 7.5;
exports.tripleTwinTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Slicer',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.85
	},
	STAT_NAMES: statNames.trap,
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.spam, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, 6.5, 120, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.spam, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, 6.5, 240, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.spam, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.spam, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 120, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.spam, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 240, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.double, g.spam, g.more_range, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.streamTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Trapliner',
	DANGER: 7,//7.5
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.2,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.3, 30, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.stream, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 26, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.stream, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 22, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.stream, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 18, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.stream, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 8, 1.3, 14, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.stream, g.barricade]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.miniBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Blockade',
	DANGER: 7,//7.5
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.2,
		SPEED: base.SPEED * 0.8
	},
	GUNS: [{
		POSITION: [12, 10, 1, 10, 0, 0, 0]
	}, {
		POSITION: [2.5, 10.1, 1.1, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini/*, g.barricade*/]),
			TYPE: exports.block
		}
	}, {
		POSITION: [12, 10, 1, 6, 0, 0, 0]
	}, {
		POSITION: [2.5, 10.1, 1.1, 18, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini/*, g.barricade*/]),
			TYPE: exports.block
		}
	}, {
		POSITION: [12, 10, 1, 2, 0, 0, 0]
	}, {
		POSITION: [2.5, 10.1, 1.1, 14, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini/*, g.barricade*/]),
			TYPE: exports.block
		}
	}]
};
exports.heavy5 = {
	PARENT: [exports.genericTank],
	LABEL: 'Mega-5',
	DANGER: 7,//7.5
	BODY: {
		SPEED: base.SPEED * 0.8
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 180, 0],
		TYPE: exports.heavy5gun
	}, {
		POSITION: [12, 8, 0, 72, 180, 0],
		TYPE: exports.heavy5gun
	}, {
		POSITION: [12, 8, 0, 144, 180, 0],
		TYPE: exports.heavy5gun
	}, {
		POSITION: [12, 8, 0, -144, 180, 0],
		TYPE: exports.heavy5gun
	}, {
		POSITION: [12, 8, 0, -72, 180, 0],
		TYPE: exports.heavy5gun
	}]
};
exports.sniper5 = {
	PARENT: [exports.genericTank],
	LABEL: 'Sniper-5',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.75,
		FOV: 1.2
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 170, 0],
		TYPE: exports.sniper5gun
	}, {
		POSITION: [12, 8, 0, 72, 170, 0],
		TYPE: exports.sniper5gun
	}, {
		POSITION: [12, 8, 0, 144, 170, 0],
		TYPE: exports.sniper5gun
	}, {
		POSITION: [12, 8, 0, -144, 170, 0],
		TYPE: exports.sniper5gun
	}, {
		POSITION: [12, 8, 0, -72, 170, 0],
		TYPE: exports.sniper5gun
	}]
};
exports.machine5 = {
	PARENT: [exports.genericTank],
	LABEL: 'Machine-5',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.9
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 180, 0],
		TYPE: exports.machine5gun
	}, {
		POSITION: [12, 8, 0, 72, 180, 0],
		TYPE: exports.machine5gun
	}, {
		POSITION: [12, 8, 0, 144, 180, 0],
		TYPE: exports.machine5gun
	}, {
		POSITION: [12, 8, 0, -144, 180, 0],
		TYPE: exports.machine5gun
	}, {
		POSITION: [12, 8, 0, -72, 180, 0],
		TYPE: exports.machine5gun
	}]
};
exports.auto6 = {
	PARENT: [exports.genericTank],
	LABEL: 'Auto-6',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.9
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [11, 7, 0, 0, 150, 0],
		TYPE: exports.auto6gun
	}, {
		POSITION: [11, 7, 0, 60, 150, 0],
		TYPE: exports.auto6gun
	}, {
		POSITION: [11, 7, 0, 120, 150, 0],
		TYPE: exports.auto6gun
	}, {
		POSITION: [11, 7, 0, 180, 150, 0],
		TYPE: exports.auto6gun
	}, {
		POSITION: [11, 7, 0, 240, 150, 0],
		TYPE: exports.auto6gun
	}, {
		POSITION: [11, 7, 0, 300, 150, 0],
		TYPE: exports.auto6gun
	}]
};
exports.assassin3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Assassin-3',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.7,
		FOV: 1.35
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [13, 8, 0, 0, 170, 0],
		TYPE: exports.assassin3gun
	}, {
		POSITION: [13, 8, 0, 120, 170, 0],
		TYPE: exports.assassin3gun
	}, {
		POSITION: [13, 8, 0, 240, 170, 0],
		TYPE: exports.assassin3gun
	}]
};
exports.giga3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Giga-3',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.7
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [14.5, 8.1, 0, 0, 180, 0],
		TYPE: exports.giga3gun
	}, {
		POSITION: [14.5, 8.1, 0, 120, 180, 0],
		TYPE: exports.giga3gun
	}, {
		POSITION: [14.5, 8.1, 0, 240, 180, 0],
		TYPE: exports.giga3gun
	}]
};
exports.obliterator3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Obliterator-3',
	DANGER: 7,//7.5
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [14, 8, 0, 0, 190, 0],
		TYPE: exports.obliterator3gun
	}, {
		POSITION: [14, 8, 0, 120, 190, 0],
		TYPE: exports.obliterator3gun
	}, {
		POSITION: [14, 8, 0, 240, 190, 0],
		TYPE: exports.obliterator3gun
	}]
};
exports.overwork = {
	PARENT: [exports.genericTank],
	LABEL: 'Overworker',
	DANGER: 7,//7.5
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	MAX_CHILDREN: 6,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.hottershot = {
	PARENT: [exports.genericTank],
	LABEL: 'Giga Shot',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [16, 12, 1, 9, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 6, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 3, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, -3, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}]
};
exports.hybridStream = makeHybrid(exports.stream, 'Seeder');
exports.builderMinion = {
	PARENT: [exports.minion],
	//LABEL: 'Builder Minion',
	GUNS: [{
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.minion]),
			TYPE: exports.block
		}
	}]
};
exports.builderFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Constructionist',
	DANGER: 7,//7.5
	STAT_NAMES: statNames.minion,
	SHAPE: -4,
	BODY: {
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1, 15.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory]),
			TYPE: exports.builderMinion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [4, 14, 1, 8, 0, 0, 0]
	}]
};
exports.boostRocket = {
	PARENT: [exports.genericTank],
	LABEL: 'Shooting Star',
	DANGER: 7,//7.5
	BODY: {
		HEALTH: base.HEALTH * 0.6,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
		}
	}, {
		POSITION: [13, 8, 1.3, 0, 0, 140, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.bit_less_reload, g.double_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1.3, 0, 0, 220, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.bit_less_reload, g.double_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1.3, 0, 0, 150, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.bit_less_reload, g.double_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1.3, 0, 0, 210, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.bit_less_reload, g.double_reload]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.longHotshot = {
	PARENT: [exports.genericTank],
	LABEL: 'Steam Shot',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [22, 12, 1, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 12, 1, 3, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 12, 1, 3, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini, g.sniper]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 12, -1.5, 3, 0, 0, 0]
	}]
};
exports.smother = {
	PARENT: [exports.genericTank],
	LABEL: 'Smotherer',
	DANGER: 7,
	BODY: {
		FOV: 1.35,
		SPEED: base.SPEED * 0.95
	},
	GUNS: [{
		POSITION: [13, 8, 1, 12, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 10, 0, 0, 0.143],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 8, 0, 0, 0.286],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 6, 0, 0, 0.429],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 4, 0, 0, 0.571],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 2, 0, 0, 0.714],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0.857],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.smother]),
			TYPE: exports.bullet
		}
	}]
};
exports.mini2 = {
	PARENT: [exports.genericTank],
	LABEL: 'Mini Gunner',
	DANGER: 7,
	BODY: {
		FOV: 1.25,
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [22, 6, 1, 0, 5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 5, 0, 0.111],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 6, 1, 0, 5, 0, 0.222],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 6, 1, 0, -5, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, -5, 0, 0.444],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 6, 1, 0, -5, 0, 0.556],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 6, 1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 6, 1, 0, 0, 0, 0.778],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 6, 1, 0, 0, 0, 0.889],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [10, 6, -1.2, 3, 5, 0, 0]
	}, {
		POSITION: [10, 6, -1.2, 3, -5, 0, 0]
	}, {
		POSITION: [10, 6, -1.2, 5, 0, 0, 0]
	}]
};
exports.siloStream = {
	PARENT: [exports.genericTank],
	LABEL: 'Sealer',//Striker
	DANGER: 7,
	BODY: {
		FOV: 1.4,
		ACCELERATION: base.ACCEL * 0.75
	},
	GUNS: [{
		POSITION: [34, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [30, 8, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [26, 8, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8, -1.6, 8, 0, 0, 0]
	}]
};
exports.heavyOverlord = {
	PARENT: [exports.genericTank],
	LABEL: 'Professor',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	MAX_CHILDREN: 7,
	GUNS: [{
		POSITION: [7, 14.5, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.half_power, g.more_power]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [7, 14.5, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.half_power, g.more_power]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [7, 14.5, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.half_power, g.more_power]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [7, 14.5, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.half_power, g.more_power]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.quadDestroy = {
	PARENT: [exports.genericTank],
	LABEL: 'Quad Destroyer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 14, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.hexaPound = {
	PARENT: [exports.genericTank],
	LABEL: 'Death Star',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 12, 1, 0, 0, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoHexaTrap = makeAuto(exports.hexaTrap);
exports.xPredator = {
	PARENT: [exports.genericTank],
	LABEL: 'X-Predator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21.5, 11, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 14, 1, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16.5, 17, 1, 0, 0, 0, 0.45],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
			TYPE: exports.bullet
		}
	}]
};
exports.boomer3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Boomer-3',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.1
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 190, 0],
		TYPE: exports.boomer3gun
	}, {
		POSITION: [12, 8, 0, 120, 190, 0],
		TYPE: exports.boomer3gun
	}, {
		POSITION: [12, 8, 0, 240, 190, 0],
		TYPE: exports.boomer3gun
	}]
};
exports.teraTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Tera Trapper',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [16, 20, 1.4, 0, 0, 0, 0]
	}, {
		POSITION: [3.6, 28, 1.6, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.destroy, g.anni, g.decentralize, g.more_range, g.bigger, g.more_power, g.more_power, g.much_more_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.malefictDrone = {
	LABEL: 'Drone',
	TYPE: 'drone',
	ACCEPTS_SCORE: false,
	DANGER: 2,
	CONTROL_RANGE: 0,
	SHAPE: 4,
	MOTION_TYPE: 'chase',
	FACING_TYPE: 'smoothToTarget',
	CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal'],
	BODY: {
		PENETRATION: 1.2,
		PUSHABILITY: 0.6,
		ACCELERATION: 0.05,
		HEALTH: 0.3,
		DAMAGE: 3.375,
		SPEED: 3.8,
		RANGE: 200,
		DENSITY: 0.03,
		RESIST: 1.5,
		FOV: 0.5
	},
	HITS_OWN_TYPE: 'hardOnlyDrones',
	DRAW_HEALTH: false,
	CLEAR_ON_MASTER_UPGRADE: true,
	BUFF_VS_FOOD: true,
	NECRO: true,
	AI: {
		BLIND: true,
		FARMER: true
	}
};
exports.maleficitor = {
	PARENT: [exports.genericTank],
	LABEL: 'Maleficitor',
	DANGER: 7,
	STAT_NAMES: statNames.necro,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	SHAPE: 4,
	MAX_CHILDREN: 12,
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.malefict]),
			TYPE: [exports.malefictDrone, {
				INVISIBLE: [0.06, 0.02, 0.03]
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}]
};
exports.gundrive = {
	PARENT: [exports.genericTank],
	LABEL: 'Gundrive',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [6, 11, 1.2, 8, 0, 125, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.less_damage, g.bit_slow, g.bit_bigger]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [6, 11, 1.2, 8, 0, 235, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.less_damage, g.bit_slow, g.bit_bigger]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [19, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.trapdrive = {
	PARENT: [exports.genericTank],
	LABEL: 'Trapdrive',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.75,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [6, 11, 1.2, 8, 0, 125, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.less_damage, g.bit_slow, g.bit_bigger]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 2
		}
	}, {
		POSITION: [6, 11, 1.2, 8, 0, 235, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta, g.less_damage, g.bit_slow, g.bit_bigger]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 1
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.bit_less_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.harddrive = {
	PARENT: [exports.genericTank],
	LABEL: 'Hard-drive',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	INVISIBLE: [0.08, 0.02, 0.02],
	MAX_CHILDREN: 4,
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.more_reload, g.half_recoil, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.hyperdrive = {
	PARENT: [exports.genericTank],
	LABEL: 'Hyperdrive',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.7,
		FOV: 1.2
	},
	MAX_CHILDREN: 8,
	GUNS: [{
		POSITION: [6, 10, 1.2, 8, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.faster, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 10, 1.2, 8, 0, -45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_damage, g.faster, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 45, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.juggernaut = {
	PARENT: [exports.genericTank],
	LABEL: 'Juggernaut',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.drone,
			MAX_CHILDREN: 2,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.drone,
			MAX_CHILDREN: 2,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.drone,
			MAX_CHILDREN: 2,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.drone,
			MAX_CHILDREN: 2,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.less_power]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.less_power]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.less_power]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.less_power]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.quadCarrier = {
	PARENT: [exports.genericTank],
	LABEL: 'Quad Carrier',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -2, -40, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.pentaCarrier = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta Carrier',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 2, 35, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -2, -35, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 70, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, -70, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.megaBarricade = {
	PARENT: [exports.genericTank],
	LABEL: 'Clogger',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [24, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 12, 1.3, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.pound, g.more_power, g.bit_more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 12, 1.3, 18, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.pound, g.more_power, g.bit_more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [4, 12, 1.3, 14, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.barricade, g.pound, g.more_power, g.bit_more_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.minion2 = {
	PARENT: [exports.minion],
	GUNS: [{
		POSITION: [17, 9, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.bit_less_damage, g.bit_less_reload]),
			WAIT_TO_CYCLE: true,
			TYPE: exports.bullet
		}
	}]
};
exports.fatFactory = {
	PARENT: [exports.genericTank],
	LABEL: 'Industrialist',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.75,
		FOV: 1.15
	},
	MAX_CHILDREN: 8,
	GUNS: [{
		POSITION: [5, 12, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [2.5, 15.5, 1.01, 15.25, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.more_power, g.bit_less_reload]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [6, 15, 1, 6, 0, 0, 0]
	}]
};
exports.hybridBarricade = makeHybrid(exports.minitrap, 'Divider');
exports.heavyDouble = {
	PARENT: [exports.genericTank],
	LABEL: 'Knocker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.95
	},
	GUNS: [{
		POSITION: [15, 10, 1, 6, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 10, 1, 6, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 15.2, 1.51, -4.4, 0, 0, 0]
	}, {
		POSITION: [15, 10, 1, 6, 6.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 10, 1, 6, -6.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 15.2, 1.51, -4.4, 0, 180, 0]
	}]
};
exports.autoHeavyDouble = makeAuto(exports.heavyDouble);
exports.flankAnni = {
	PARENT: [exports.genericTank],
	LABEL: 'Exterminator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20.5, 19.5, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.flankSeeker = {
	PARENT: [exports.genericTank],
	LABEL: 'Double Seeker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.95,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [19, 8, 1, 0, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.more_speed]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -2, 160, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 200, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 8.5, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.more_speed]),
			TYPE: exports.bullet
		}
	}]
};
exports.quadBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Architect-4',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9,
		FOV: 1.05
	},
	STAT_NAMES: statNames.trap,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 170, 0],
		TYPE: exports.builder4gun
	}, {
		POSITION: [12, 8, 0, 90, 170, 0],
		TYPE: exports.builder4gun
	}, {
		POSITION: [12, 8, 0, 180, 170, 0],
		TYPE: exports.builder4gun
	}, {
		POSITION: [12, 8, 0, 270, 170, 0],
		TYPE: exports.builder4gun
	}]	
};
exports.twinTri = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin-Angle',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.7,
		SHIELD: base.SHIELD * 0.7,
		DENSITY: base.DENSITY * 0.5
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.wideCannon = {
	PARENT: [exports.genericTank],
	LABEL: 'Siege',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.95
	},
	GUNS: [{
		POSITION: [17, 3, 1, 0, 7.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double_reload, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, -7.75, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.double_reload, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty, g.less_damage, g.bit_more_reload]),
			TYPE: exports.bullet,
			LABEL: 'Destroyer'
		}
	}]
};
exports.shellerMortar = {
	PARENT: [exports.genericTank],
	LABEL: 'Mega Mortar',
	DANGER: 7,
	GUNS: [{
		POSITION: [13, 3, 1, 0, -8.6, -8, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [13, 3, 1, 0, 8.6, 8, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, -6.7, -7, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6.7, 7, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 15, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Destroyer'
		}
	}]
};
exports.anniSheller = {
	PARENT: [exports.genericTank],
	LABEL: 'X-Annihilator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [17, 3, 1, 0, -8.5, -5, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 8.5, 5, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 18, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Annihilator'
		}
	}]
};
exports.pentaSunburst = {
	PARENT: [exports.genericTank],
	LABEL: 'Sunshine',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.95,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [16, 3, 1, 0, -2, -40, 0.9],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 0, 2, -40, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 0, -2, 40, 0.7],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 1, 0, 2, 40, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, 2, -20, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, -2, 20, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 3, 1, 0, 2, 20, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 3, 1, 0, -2, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	},{
		POSITION: [22, 3, 1, 0, 2, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner]),
			TYPE: exports.bullet
		}
	}]
};
exports.sniperSingle = {
	PARENT: [exports.genericTank],
	LABEL: 'Lumberjack',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.95,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [25, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.single]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8.5, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.machineSingle = {
	PARENT: [exports.genericTank],
	LABEL: 'Machinist',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.95
	},
	GUNS: [{
		POSITION: [13, 8.5, 1.5, 12, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.single, g.bigger]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8.5, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.autoSingle = makeAuto(exports.single);
exports.hybridSingle = makeHybrid(exports.single);
exports.flankSingle = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Single',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.95
	},
	GUNS: [{
		POSITION: [19, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}, {
		POSITION: [19, 8, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 120, 0]
	}, {
		POSITION: [19, 8, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 240, 0]
	}]
};
exports.twinSingle = {
	PARENT: [exports.genericTank],
	LABEL: 'Double',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.95
	},
	GUNS: [{
		POSITION: [20, 7.5, 1, 0, 4.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 7.5, 1, 0, -4.75, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 17, -1.177, 1, 0, 0, 0]
	}]
};
exports.tripleTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Traplet',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [13.5, 8, 1, 0, 6, 0, 0]
	}, {
		POSITION: [3, 8, 1.6, 13.5, 6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.triple, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 8, 1, 0, -6, 0, 0]
	}, {
		POSITION: [3, 8, 1.6, 13.5, -6, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.triple, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15.5, 8, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 8, 1.6, 15.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.triple, g.less_spread, g.faster]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.deca = {
	PARENT: [exports.genericTank],
	LABEL: 'Tornado',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.95
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 36, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 108, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 252, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 324, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 72, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 144, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 216, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 288, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.anniHybrid = makeHybrid(exports.annihilator, 'Annybrid');
exports.twinTrapperConq = {
	PARENT: [exports.genericTank],
	LABEL: 'Hewn Trapper',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 6.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.flank, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -6.5, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.flank, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 180, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.flank]),
			TYPE: exports.block
		}
	}]
};
exports.brutalizer = {
	PARENT: [exports.genericTank],
	LABEL: 'Brutalizer',
	DANGER: 7,
	BODY: {
		DENSITY: base.DENSITY * 0.5
	},
	GUNS: [{
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.flank, g.tons_more_recoil]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.twinAngleFighter = {
	PARENT: [exports.genericTank],
	LABEL: 'Rager',
	BODY: {
		DENSITY: base.DENSITY * 0.5
	},
	DANGER: 7,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [16, 8, 1, 0, -1, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Side'
		}
	}, {
		POSITION: [16, 8, 1, 0, 1, -90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Side'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.anniSteamroll = {
	PARENT: [exports.genericTank],
	LABEL: 'Flattener',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [18, 11.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [11, 20, 1.01, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.steam]),
			TYPE: exports.bullet
		}
	}]
};
exports.hexaContagion = {
	PARENT: [exports.genericTank],
	LABEL: 'Hexa Contagion',
	DANGER: 7,
	SHAPE: 6,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.75
	},
	STAT_NAMES: statNames.generic,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [19.5, 5.5, 1, 0, 0, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 5.5, 1, 0, 0, 120, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 5.5, 1, 0, 0, 240, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 5.5, 1, 0, 0, 60, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 5.5, 1, 0, 0, 180, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19.5, 5.5, 1, 0, 0, 300, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam, g.low_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 60, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 120, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 240, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 300, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.rangerObliterator = {
	PARENT: [exports.genericTank],
	LABEL: 'Bobcat',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.75,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [17, 12, 1.01, 18.4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assassin, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.57, 1.4, 10, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assassin, g.fake]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 9.75, -1.6, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assassin, g.fake]),
			TYPE: exports.bullet
		}
	}]
};
exports.builderArtillery = {
	PARENT: [exports.genericTank],
	LABEL: 'Lieutenant',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [17, 3, 1, 0, -6, -7, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.arty, g.less_power, g.bit_slow]),
			TYPE: exports.block,
			LABEL: 'Builder'
		}
	}]
};
exports.builderMortar = {
	PARENT: [exports.genericTank],
	LABEL: 'Deputy',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [13, 3, 1, 0, -8, -7, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [13, 3, 1, 0, 8, 7, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, -6, -7, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.arty, g.less_power, g.bit_slow]),
			TYPE: exports.block,
			LABEL: 'Builder'
		}
	}]
};
exports.pebbler = {
	PARENT: [exports.genericTank],
	LABEL: 'Pebbler',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [19, 1.25, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 1.25, 1, 0, -2.5, 0, 0.125],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 1.25, 1, 0, -2.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 1.25, 1, 0, -2.5, 0, 0.375],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 1.25, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 1.25, 1, 0, 2.5, 0, 0.625],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 1.25, 1, 0, 2.5, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 1.25, 1, 0, 2.5, 0, 0.875],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.pebble]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
	}]
};
exports.nanogun = {
	PARENT: [exports.genericTank],
	LABEL: 'Nanogun',
	DANGER: 7,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [19, 0.75, 1, 0, -5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, -4.25, 0, 0.125],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, -3.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, -2.25, 0, 0.375],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, 4.25, 0, 0.625],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, 3.5, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 0.75, 1, 0, 2.25, 0, 0.875],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.gunner, g.power, g.twin, g.nail, g.nano]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, -1.4, 2, 0, 0, 0]
	}]
};
exports.tripleHeavyTwin = {
	PARENT: [exports.genericTank],
	LABEL: 'Decimator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [15, 9.5, 1, 6, 6.25, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 9.5, 1, 6, -6.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 9.5, 1, 6, 6.25, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 9.5, 1, 6, -6.25, 120, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 9.5, 1, 6, 6.25, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 9.5, 1, 6, -6.25, 240, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 22.75, 0.01, -6.25, 0, 60, 0]
	}]
};
exports.predatorDual = {
	PARENT: [exports.genericTank],
	LABEL: 'X-Dual',
	DANGER: 7,
	BODY: {
		ACCELARATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.95,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 5.5, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 5.5, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 7, 1, 0, 5.5, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_more_damage, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 7, 1, 0, -5.5, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.low_power, g.bit_more_damage, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8.5, 1, 0, 5.5, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8.5, 1, 0, -5.5, 0, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.one_third_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.megafort = {
	PARENT: [exports.genericTank],
	LABEL: 'Megafort',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.7,
		FOV: 1.05
	},
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 190, 0],
		TYPE: exports.builder4gun
	}, {
		POSITION: [12, 8, 0, 120, 190, 0],
		TYPE: exports.builder4gun
	}, {
		POSITION: [12, 8, 0, 240, 190, 0],
		TYPE: exports.builder4gun
	}],
	GUNS: [{
		POSITION: [14, 9, 1, 0, 0, 60, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 60, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 300, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 300, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.half_range]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.assassinTrapGuard = {
	PARENT: [exports.genericTank],
	LABEL: 'Overlooker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8,
		FOV: 1.375
	},
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.longFalcon = {
	PARENT: [exports.woodpeckBot],
	GUNS: [{
		POSITION: [32, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Ranger'
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.miniMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Launched Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 80
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed, g.gunner, g.tons_more_recoil]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.multiMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 130, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 230, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.more_range, g.less_reload, g.bit_bigger, g.fast, g.half_power]),
			TYPE: [exports.miniMissile, {
				PERSISTS_AFTER_DEATH: true
			}]
		}
	}]
};
exports.missileTurret = {
	PARENT: [exports.genericTank],
	LABEL: 'Turret',
	COLOR: 16,
	BODY: {
		FOV: 0.8
	},
	HAS_NO_RECOIL: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	GUNS: [{
		POSITION: [22, 11, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.turret, g.slow, g.more_reload, g.twin]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 125
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 180, 0.25],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.missileTurret
	}]
};
exports.littleMissile2 = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [14, 6, 1, 0, 0, 0, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [15, 6, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 6, 1.3, 15, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_reload, g.more_recoil, g.half_range, g.half_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 230, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [14, 6, 1, 0, 0, 130, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.double_reload, g.low_power, g.more_recoil, g.more_speed, g.more_speed]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.rewinder = {
	PARENT: [exports.genericTank],
	LABEL: 'Rewinder',
	DANGER: 7,
	BODY: {
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [10, 13, -0.5, 12, 0, 0, 0]
	}, {
		POSITION: [6, 13, 1.5, 14.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.bit_more_reload]),
			TYPE: exports.littleMissile2,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}, {
		POSITION: [14, 13, -0.5, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload, g.bit_more_reload, g.fake]),
			TYPE: exports.bullet
		}
	}]
};
exports.trebuchet = {
	PARENT: [exports.genericTank],
	LABEL: 'Trebuchet',
	DANGER: 7,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [15, 6, -1.4, 9, 0, 0, 0]
	}, {
		POSITION: [17, 14, -1.1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.half_reload]),
			TYPE: exports.multiMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.scythe = {
	PARENT: [exports.genericTank],
	LABEL: 'Scythe',
	DANGER: 7,
	BODY: {
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [10, 14, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [17, 15, 1.3, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
			TYPE: exports.autoMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.snipeBuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Sniper Builder',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		ACCELERATION: base.ACCEL * 0.95,
		SPEED: base.SPEED * 0.8,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [21, 12.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12.5, 1.1, 21, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.sniper]),
			TYPE: exports.block
		}
	}]
};
exports.twinAutoTwin = makeAuto(exports.twin, 'Twinception', {
	type: exports.twinAuto2,
	size: 11
});
exports.interceptAnniGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [11, 17.5, -0.5, 9.25, 0, 0, 0]
	}, {
		POSITION: [18, 17.5, 1, 0, 0, 0, 0]
	}]
};
exports.anniIntercept = {
	PARENT: [exports.genericTank],
	LABEL: 'Enforcer',
	DANGER: 7,
	GUNS: [{
		POSITION: [18.5, 19.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.intercept]),
			TYPE: [exports.basicAutoBullet, {
				LABEL: 'Enforcing Bullet'
			}]
		}
	}],
	TURRETS: [{
		POSITION: [9.25, 17.5, 0, 0, 0, 0],
		TYPE: exports.interceptAnniGun
	}]
};
exports.xCarnivore = {
	PARENT: [exports.genericTank],
	LABEL: 'X-Carnivore',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.75,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [26, 7, 1, 4, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [23, 11, 1, 4, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.hunter, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 15, 1, 4, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.hunter, g.preda, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 15, -1.3, 2, 0, 0, 0]
	}]
};
exports.bentTripleTwin = {
	PARENT: [exports.genericTank],
	LABEL: 'Bent Triple',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [19, 8, 1, 0, 1, 25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -1, -25, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 1, 145, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -1, 95, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 1, 265, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -1, 215, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.heavyTriple = {
	PARENT: [exports.genericTank],
	LABEL: 'Poundlet',//Decimator
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.95,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [15, 10, 1, 6, 6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 10, 1, 6, -6.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17.5, 10, 1, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 15.2, 1.51, -4.4, 0, 0, 0]
	}]
};
exports.invisibuilder = {
	PARENT: [exports.genericTank],
	LABEL: 'Nightworker',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.75,
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.15
	},
	INVISIBLE: [0.08, 0.01, 0.02],
	GUNS: [{
		POSITION: [18, 12, -1.4, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block]),
			TYPE: exports.block
		}
	}]
};
exports.megaConstruct = {
	PARENT: [exports.genericTank],
	LABEL: 'Decalibrator',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.675,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [18, 19, 1.37, 0, 0, 0, 0]
	}, {
		POSITION: [2, 26, 1.2, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.decalibrate]),
			TYPE: exports.block
		}
	}]
};
exports.machTriple = {
	PARENT: [exports.genericTank],
	LABEL: 'Machlet',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 10, 1.4, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mach, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 10, 1.4, 0, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mach, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 10, 1.4, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mach, g.triple]),
			TYPE: exports.bullet
		}
	}]
};
exports.snipeTriple = {
	PARENT: [exports.genericTank],
	LABEL: 'Snipelet',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [21, 10, 1, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 10, 1, 0, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.triple]),
			TYPE: exports.bullet
		}
	}]
};
exports.flankTriTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Trap Guard',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 90, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 270, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.twinAutoBullet = makeAuto(exports.bullet, 'Exasperating Bullet', {
	type: exports.twinAuto2
});
exports.interceptTwinGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 8, 1, 0, 5.5, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, -5.5, 0, 0]
	}]
};
exports.interceptTwin = {
	PARENT: [exports.genericTank],
	LABEL: 'Exasperator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.twinAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptTwinGun
	}]
};
exports.flankTriple = {
	PARENT: [exports.genericTank],
	LABEL: 'Flanklet',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.95,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 10, 1, 0, 5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 10, 1, 0, -5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 10, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 10, 1, 0, 5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 10, 1, 0, -5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 10, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.flank]),
			TYPE: exports.bullet
		}
	}]
};
exports.dreadning = {
	PARENT: [exports.genericTank],
	LABEL: 'Bolt',
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.75,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [6, 10, 1.2, 8, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power, g.faster]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 5
		}
	}, {
		POSITION: [6, 10, 1.2, 8, 0, -45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power, g.faster]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 5
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, -45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.drivenaught = {
	PARENT: [exports.genericTank],
	LABEL: 'Drivenaught',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.75,
		SPEED: base.SPEED * 0.85,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [6, 12, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.autoDrone,
			MAX_CHILDREN: 3,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 12, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power]),
			TYPE: exports.autoDrone,
			MAX_CHILDREN: 3,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 90, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [9, 8.5, 0.6, 7, 0, 270, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.interceptMachGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [14, 11, 1.3, 8, 0, 0, 0]
	}]
};
exports.machAutoBullet = makeAuto(exports.bullet, 'Anticipating Bullet', {
	type: exports.machineAutoTurret
});
exports.interceptMach = {
	PARENT: [exports.genericTank],
	LABEL: 'Anticipator',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.8
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.machAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptMachGun
	}]
};
exports.interceptSnipeGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [26, 10, 1, 0, 0, 0, 0]
	}]
};
exports.snipeAutoBullet = makeAuto(exports.bullet, 'Chopping Bullet', {
	type: exports.sniperAutoTurret
});
exports.interceptSnipe = {
	PARENT: [exports.genericTank],
	LABEL: 'Chopper',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.75,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.snipeAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptSnipeGun
	}]
};
exports.machineAutoMachine = makeAuto(exports.machine, 'Machception', {
	type: exports.machineAutoTurret
});
exports.flankBentTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Bent Bastoin',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.85
	},
	GUNS: [{
		POSITION: [13.5, 7, 1, 0, 2, 20, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 2, 20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -2, -20, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -2, -20, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [16.5, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 16.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, 2, 200, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 2, 200, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -2, -200, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -2, -200, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [16.5, 7, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.6, 16.5, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.double, g.less_spread]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.interceptPoundGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0]
	}]
};
exports.poundAutoBullet = makeAuto(exports.bullet, 'Exploiting Bullet', {
	type: exports.poundAutoTurret
});
exports.interceptPound = {
	PARENT: [exports.genericTank],
	LABEL: 'Exploiter',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.7
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.poundAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptPoundGun
	}]
};
exports.interceptTrapGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [16, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 14, 1.8, 16, 0, 0, 0]
	}]
};
exports.trapAutoBullet = makeAuto(exports.bullet, 'Blocking Bullet', {
	type: exports.trapAutoTurret
});
exports.interceptTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Blocker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.trapAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptTrapGun
	}]
};
exports.interceptFlankGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 60, 0]
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [18, 8, 1, 0, 0, 300, 0]
	}]
};
exports.flankAutoBullet = makeAuto(exports.bullet, 'Harassing Bullet', {
	type: exports.flankAutoTurret
});
exports.interceptFlank = {
	PARENT: [exports.genericTank],
	LABEL: 'Harasser',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.7,
		FOV: 1.05
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.flankAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [9, 16.5, 0, 0, 0, 0],
		TYPE: exports.interceptFlankGun
	}]
};
exports.doubleInsect = {
	PARENT: [exports.genericTank],
	LABEL: 'Double Insect',
	DANGER: 7,
	GUNS: [{
		POSITION: [20, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 5.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 245, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 295, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 115, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 65, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.spam]),
			TYPE: exports.bullet
		}
	}]
};
exports.predaNightseeker = {
	PARENT: [exports.genericTank],
	LABEL: 'Flier',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.3
	},
	INVISIBLE: [0.08, 0.01, 0.02],
	GUNS: [{
		POSITION: [24, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [21, 12, 1, 0, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 16, -1.2, 0, 0, 0, 0.3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
			TYPE: exports.bullet
		}
	}]
};
exports.triangleProp = {
	COLOR: 16,
	SHAPE: 3
};
exports.invisianni = {
	PARENT: [exports.genericTank],
	LABEL: 'Recentralizer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.85
	},
	INVISIBLE: [0.08, 0.0075, 0.03],
	GUNS: [{
		POSITION: [20.5, 19.75, 0.9, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.bit_less_damage]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [7.25, 0, 0, 0, 360, 1],
		TYPE: exports.triangleProp
	}]
};
exports.pistol = {
	PARENT: [exports.genericTank],
	LABEL: 'Pistol',
	DANGER: 7,
	BODY: {
		FOV: 0.925,
		SPEED: base.SPEED * 1.05,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [16, 10.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [19, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pistol]),
			TYPE: exports.bullet
		}
	}]
};
exports.snipeception = makeAuto(exports.sniper, 'Snipeception', {
	type: exports.sniperAutoTurret
});
exports.xSpreadHunter = {
	PARENT: [exports.genericTank],
	LABEL: 'X-Spreadhunt',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.85,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.667],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.667],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.333],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.4, 4, 1, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.hunter2, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [14.8, 6.5, 1, 8, 0, 0, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [12.2, 9, 1, 8, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.ySpreadHunter = {
	PARENT: [exports.genericTank],
	LABEL: 'Y-Spreadhunt',
	DANGER: 7,
	BODY: {
		FOV: 1.075,
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.85
	},
	GUNS: [{
		POSITION: [16, 4, 1, 0, -1, -45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, -1.75, -30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, -2, -15, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [16, 4, 1, 0, 1, 45, 0.75],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [17.5, 4, 1, 0, 1.75, 30, 0.5],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [19, 4, 1, 0, 2, 15, 0.25],
		PROPERTIES: spreadshotProps
	}, {
		POSITION: [15, 6, 1, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [12.2, 9, 1, 8, 0, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spread_main, g.spread, g.less_damage, g.hunter2, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.hawk = {
	PARENT: [exports.genericTank],
	LABEL: 'Hawk',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.one_fourth_reload]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Destroyer'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.hawkBot = {
	PARENT: [exports.genericTank],
	LABEL: 'Hawk',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.one_fourth_reload]),
			TYPE: exports.bullet,
			LABEL: 'Destroyer'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.pentaBorer = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta-Borer',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.925,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: []
};
exports.pentaPunt = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta-Punt Gun',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.95,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: []
};
exports.pentaHewnPellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta-Hewn Pelleter',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.95,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: []
};
var a = 0;
for (let i = 0; i < 3; i++) {
	exports.triPellet.GUNS = exports.triPellet.GUNS.concat(pelletGuns(a));
	exports.triBorer.GUNS = exports.triBorer.GUNS.concat(borerGuns(a));
	exports.triPunt.GUNS = exports.triPunt.GUNS.concat(puntGuns(a));
	exports.triHewnPellet.GUNS = exports.triHewnPellet.GUNS.concat(hewnPelletGuns(a));
	a += 120;
}
for (let i = 0; i < 4; i++) {
	exports.hexadecagor.GUNS = exports.hexadecagor.GUNS.concat(hexadecagorGuns(0, a));
	exports.hexadecagor.GUNS = exports.hexadecagor.GUNS.concat(hexadecagorGuns(0.25, a + 22.5));
	exports.hexadecagor.GUNS = exports.hexadecagor.GUNS.concat(hexadecagorGuns(0.5, a + 45));
	exports.hexadecagor.GUNS = exports.hexadecagor.GUNS.concat(hexadecagorGuns(0.75, a + 67.5));
	exports.MK5_Minion_2.GUNS = exports.MK5_Minion_2.GUNS.concat(squareBossProps2('sniperMinion', a));
	exports.MK5_Minion_2.GUNS = exports.MK5_Minion_2.GUNS.concat(squareBossProps2('twinMinion', a + 45));
	exports.MK5_Minion_2.GUNS = exports.MK5_Minion_2.GUNS.concat(squareBossProps3(4.5, 0, a));
	exports.MK5_Minion_2.GUNS = exports.MK5_Minion_2.GUNS.concat(squareBossProps3(-4.5, 0.5, a));
	a += 90;
}
for (let i = 0; i < 5; i++) {
	exports.pentaHewnPellet.GUNS = exports.pentaHewnPellet.GUNS.concat(hewnPelletGuns2(a));
	a += 72;
}
for (let i = 0; i < 5; i++) {
	exports.pentaPellet.GUNS = exports.pentaPellet.GUNS.concat(pelletGuns(a));
	exports.pentaBorer.GUNS = exports.pentaBorer.GUNS.concat(borerGuns(a));
	exports.pentaPunt.GUNS = exports.pentaPunt.GUNS.concat(puntGuns(a));
	exports.pentaHewnPellet.GUNS = exports.pentaHewnPellet.GUNS.concat(pelletGuns(a));
	a += 72;
}
exports.anniConq = {
	PARENT: [exports.genericTank],
	LABEL: 'Orderer',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.775,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [20.5, 19.5, 1, 0, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.flank, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 12, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 12, 1.1, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.flank]),
			TYPE: exports.block
		}
	}]
};
exports.poundception = makeAuto(exports.pounder, 'Poundception', {
	type: exports.poundAutoTurret
});
exports.mortarMarauder = {
	PARENT: [exports.genericTank],
	LABEL: 'Slaughterer',
	DANGER: 7,
	GUNS: [{
		POSITION: [13, 3, 1, 0, -8, -7, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [13, 3, 1, 0, 8, 7, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, -6, -7, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.flank]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload, g.flank]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.pelletception = makeAuto(exports.pellet, 'Pelletception', {
	type: exports.pelletAutoTurret,
	size: 11
});
exports.destroyception = makeAuto(exports.destroyer, 'Destroyception', {
	type: exports.destroyAutoTurret
});
exports.overdriveHybrid = {
	PARENT: [exports.genericTank],
	LABEL: 'Hybrid Overdrive',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.95,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 12, 1.2, 8, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.bit_slow, g.bit_less_damage]),
			TYPE: [exports.autoDrone, {
				INDEPENDENT: true
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: false,
			MAX_CHILDREN: 2
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.gatlingMachGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Gatling Gunner',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [16, 3, 4, -3, 5, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.chain]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 4, -3, -5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.chain]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 4, 0, 2.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.chain]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 4, 0, -2.5, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.chain]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 3, 4, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.chain]),
			TYPE: exports.bullet
		}
	}]
};
exports.blasterMachGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Blaster Gunner',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.9,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [12, 3, 4, -3, 5, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.blast, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3, 4, -3, -5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.blast, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3, 4, 0, 2.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.blast, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3, 4, 0, -2.5, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.blast, g.fast]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 3, 4, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pure_gunner, g.machgun, g.blast, g.fast]),
			TYPE: exports.bullet
		}
	}]
};
exports.floodStream = {
	PARENT: [exports.genericTank],
	LABEL: 'Flash Flooder',//Floodliner
	DANGER: 7,
	BODY: {
		FOV: 1.3,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [14, 8, 1.4, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8, 1.4, 12, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8, 1.4, 8, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8, 1.4, 4, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 8, 1.4, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}]
};
exports.interceptPelletGun = {
	COLOR: 16,
	GUNS: [{
		POSITION: [17, 2, 1, 0, 3, 0, 0]
	}, {
		POSITION: [17, 2, 1, 0, -3, 0, 0.5]
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.pelletAutoBullet = makeAuto(exports.bullet, 'Tapping Bullet', {
	type: exports.pelletAutoTurret,
	size: 11
});
exports.interceptPellet = {
	PARENT: [exports.genericTank],
	LABEL: 'Tapper',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.7
	},
	GUNS: [{
		POSITION: [18, 14.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.intercept]),
			TYPE: exports.pelletAutoBullet
		}
	}],
	TURRETS: [{
		POSITION: [10, 16.75, 0, 0, 0, 0],
		TYPE: exports.interceptPelletGun
	}]
};
exports.hybridFlooder = makeHybrid(exports.flooder, 'Grainer');
exports.puntStream = {
	PARENT: [exports.genericTank],
	LABEL: 'Punt Streamer',
	DANGER: 7,
	GUNS: [{
		POSITION: [24, 2, 1, 0, 3, 0, 0.083],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 2, 1, 0, -3, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 2, 1, 0, 3, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 2, 1, 0, -3, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, 3, 0, 0.417],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, 3, 0, 0.583],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, 0, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, 0, 0.917],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, 0, 1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.stream, g.half_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}]
};
exports.wreckingBall = {
	PARENT: [exports.genericTank],
	LABEL: 'Wrecking Ball',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [22, 6, 2, 5, 0, 0, 0]
	}, {
		POSITION: [12, 13, 1.01, 22, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.steam, g.wreck, g.hunter2]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 15, 1.01, 20, 0, 0, 0.15],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.steam, g.wreck]),
			TYPE: exports.bullet
		}
	}]
};
exports.hepta = {
	PARENT: [exports.genericTank],
	LABEL: 'Hepta Shot',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [13, 8, 1, 0, -3, -45, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 3, 45, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, 0, -3, -30, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 8, 1, 0, 3, 30, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, -2, -15, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 8, 1, 0, 2, 15, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.less_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.nailtrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Nailgun Trapper',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [13, 11, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 11, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.half_recoil]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.invisispawner = {
	PARENT: [exports.genericTank],
	LABEL: 'Reaper',
	DANGER: 7,
	STAT_NAMES: statNames.minion,
	BODY: {
		SPEED: base.SPEED * 0.775,
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.1
	},
	MAX_CHILDREN: 4,
	INVISIBLE: [0.08, 0.01, 0.02],
	GUNS: [{
		POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [1, 12, 1.01, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.factory, g.baby_factory]),
			TYPE: exports.minion,
			STAT_CALCULATOR: gunCalcNames.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [3.5, 12, 1, 8, 0, 0, 0]
	}]
};
exports.pentamancer = {
	PARENT: [exports.genericTank],
	LABEL: 'Pentamancer',
	DANGER: 7,
	STAT_NAMES: statNames.necro,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	SHAPE: 5,
	FACING_TYPE: 'autospin',
	MAX_CHILDREN: 13,
	GUNS: [{
		POSITION: [4, 11, 1.2, 8, 0, 36, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.penta_sunchip]),
			TYPE: exports.pentaSunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [4, 11, 1.2, 8, 0, 108, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.penta_sunchip]),
			TYPE: exports.pentaSunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [4, 11, 1.2, 8, 0, 180, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.penta_sunchip]),
			TYPE: exports.pentaSunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [4, 11, 1.2, 8, 0, 252, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.penta_sunchip, g.weak, g.double_reload]),
			TYPE: exports.pentaSunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}, {
		POSITION: [4, 11, 1.2, 8, 0, 324, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.penta_sunchip, g.weak, g.double_reload]),
			TYPE: exports.pentaSunchip,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 2,
			STAT_CALCULATOR: gunCalcNames.necro
		}
	}]
};
exports.blockMissile = {
	PARENT: [exports.bullet],
	LABEL: 'Missile',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [15, 10, 1, 0, 0, 140, 0]
	}, {
		POSITION: [3, 10, 1.1, 15, 0, 140, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed, g.half_range]),
			TYPE: [exports.block, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 220, 0]
	}, {
		POSITION: [3, 10, 1.1, 15, 0, 220, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.skim, g.double_reload, g.low_power, g.much_more_recoil, g.more_speed, g.more_speed, g.half_range]),
			TYPE: [exports.block, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}]
};
exports.blockSkimmer = {
	PARENT: [exports.genericTank],
	LABEL: 'Crane',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [13, 13, -1.5, 0, 0, 0, 0]
	}, {
		POSITION: [4, 11, 1.7, 13, 0, 0, 0]
	}, {
		POSITION: [10, 12, -0.5, 9, 0, 0, 0]
	}, {
		POSITION: [2, 13, 1.2, 17, 0, 0, 0]
	}, {
		POSITION: [17, 13, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.less_reload]),
			TYPE: exports.blockMissile,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.overdriveMaster = {
	PARENT: [exports.genericTank],
	LABEL: 'Masterdrive',
	FACING_TYPE: 'autospin',
	STAT_NAMES: statNames.generic,
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.7,
		FOV: 1.125
	},
	GUNS: [{
		POSITION: [5, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master, g.less_damage, g.bit_slow]),//g.less_power
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 5
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 120, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master, g.less_damage, g.bit_slow]),
			TYPE: exports.autoDrone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 5
		}
	}, {
		POSITION: [5, 12, 1.2, 8, 0, 240, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.master, g.less_damage, g.bit_slow]),
			TYPE: [exports.autoDrone, {
				INDEPENDENT: true
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 5
		}
	}],
	TURRETS: [{
		POSITION: [9, 0, 0, 0, 360, 1],
		TYPE: exports.squareProp
	}]
};
exports.staplegun = {
	PARENT: [exports.genericTank],
	LABEL: 'Staplegun',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.85
	},
	GUNS: [{
		POSITION: [18, 2, 1, 0, -5, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.staple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, 5, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.staple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, -2.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.staple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.staple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 2, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.staple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 12, -1.6, 1, 0, 0, 0]
	}]
};
exports.invisispike = {
	PARENT: [exports.genericTank],
	LABEL: 'Booby Trap',//Landspike
	INVISIBLE: [0.08, 0.01, 0.02],
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		DAMAGE: base.DAMAGE * 1.1,
		SPEED: base.SPEED * 1.05,
		DENSITY: base.DENSITY * 2
	},
	TURRETS: [{
		POSITION: [20.5, 0, 0, 0, 360, 0],
		TYPE: exports.weirdSpikeBody1
	}, {
		POSITION: [20.5, 0, 0, 180, 360, 0],
		TYPE: exports.weirdSpikeBody2
	}],
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher
};
exports.chainsaw = {
	PARENT: [exports.genericTank],
	LABEL: 'Chainsaw',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		DAMAGE: base.DAMAGE * 1.2,
		SPEED: base.SPEED * 1.05,
		DENSITY: base.DENSITY * 2
	},
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher,
	TURRETS: [{
		POSITION: [20, 0, 0, 0, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20, 0, 0, 72, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20, 0, 0, 144, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20, 0, 0, -144, 360, 0],
		TYPE: exports.spikeBody
	}, {
		POSITION: [20, 0, 0, -72, 360, 0],
		TYPE: exports.spikeBody
	}]
};
exports.overmaster = {
	PARENT: [exports.genericTank],
	LABEL: 'Overmaster',
	FACING_TYPE: 'autospin',
	STAT_NAMES: statNames.drone,
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.7,
		FOV: 1.125
	},
	GUNS: [{
		POSITION: [5, 11, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.master, g.little_bit_bigger]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 5
		}
	}, {
		POSITION: [5, 11, 1.2, 8, 0, 72, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.master, g.little_bit_bigger]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 4
		}
	}, {
		POSITION: [5, 11, 1.2, 8, 0, 144, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.master, g.little_bit_bigger]),
			TYPE: [exports.drone, {
				INDEPENDENT: true
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 4
		}
	}, {
		POSITION: [5, 11, 1.2, 8, 0, -144, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.master, g.little_bit_bigger]),
			TYPE: [exports.drone, {
				INDEPENDENT: true
			}],
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 4
		}
	}, {
		POSITION: [5, 11, 1.2, 8, 0, -72, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.master, g.little_bit_bigger]),
			TYPE: exports.drone,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			MAX_CHILDREN: 4
		}
	}]
};
exports.flankception = makeAuto(exports.flank, 'Flankception', {
	type: exports.flankAutoTurret
});
exports.battlenaught = {
	PARENT: [exports.genericTank],
	LABEL: 'Overship',//Battlenaught
	DANGER: 7,
	STAT_NAMES: statNames.drone,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.75,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [6, 14.29, 1.2, 8, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power, g.bit_smaller]),
			TYPE: exports.drone,
			MAX_CHILDREN: 4,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [6, 14.29, 1.2, 8, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.over, g.less_power, g.bit_smaller]),
			TYPE: exports.drone,
			MAX_CHILDREN: 4,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: gunCalcNames.drone,
			WAIT_TO_CYCLE: true
		}
	}, {
		POSITION: [8, 7.5, 0.6, 7, 3.8, 90, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [8, 7.5, 0.6, 7, 3.8, 270, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [8, 7.5, 0.6, 7, -3.8, 90, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}, {
		POSITION: [8, 7.5, 0.6, 7, -3.8, 270, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.half_reload, g.less_power, g.bit_more_reload]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.drone
		}
	}]
};
exports.guardianAI = {
	PARENT: [exports.miniboss],
	LABEL: 'Guardian',
	DANGER: 8,
	SHAPE: 3,
	COLOR: 5,
	SIZE: 20,
	MAX_CHILDREN: 24,
	STAT_NAMES: statNames.drone,
	VARIES_IN_SIZE: false,
	FACING_TYPE: 'smoothToTarget',
	VALUE: 6e4,
	SKILL: setSkill(1, 1, 9, 7, 7, 7, 9, 1, 1, 1),
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.1,
		HEALTH: base.HEALTH * 7.5,
		DAMAGE: base.DAMAGE * 2.5,
		REGEN: base.REGEN * 0.75
	},
	HAS_NO_SKILL_POINTS: true,
	GUNS: [{
		POSITION: [6, 12, 1.25, 6, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.more_recoil, g.guardian]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'hangOutNearMaster'],
				HITS_OWN_TYPE: 'hard',
				DIES_TO_TEAM_BASE: false
			}],
			STAT_CALCULATOR: gunCalcNames.swarm,
			AUTOFIRE: true
		}
	}],
	BROADCAST_MESSAGE: 'A Guardian has been killed!'
};
exports.pentaBlaster = {
	PARENT: [exports.genericTank],
	LABEL: 'Penta Blaster',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.8
	},
	GUNS: [{
		POSITION: [7, 10, 1.6, 8, 3, 32, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.bit_less_damage, g.less_reload, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [7, 10, 1.6, 8, -3, -32, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.bit_less_damage, g.less_reload, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 10, 1.6, 8, 2, 16, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.bit_less_damage, g.less_reload, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [9, 10, 1.6, 8, -2, -16, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.bit_less_damage, g.less_reload, g.less_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [11, 10, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blast, g.twin, g.bent, g.bit_less_damage, g.less_reload, g.less_recoil]),
			TYPE: exports.bullet
		}
	}]
};
exports.bentBlasterHybrid = makeHybrid(exports.bentBlaster, 'Twisted Hybrid');
exports.twinDestroyer = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin Destroyer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.925
	},
	GUNS: [{
		POSITION: [15, 12, 1, 6, 7, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.destroy, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 12, 1, 6, -7, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.destroy, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 17.2, 1.51, -4.4, 0, 0, 0]
	}]
};
exports.extraHeavyDouble = {
	PARENT: [exports.genericTank],
	LABEL: 'Slanderer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.9
	},
	GUNS: [{
		POSITION: [15, 12, 1, 6, 7, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.destroy, g.double, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 12, 1, 6, -7, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.destroy, g.double, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 17.2, 1.51, -4.4, 0, 0, 0]
	}, {
		POSITION: [15, 12, 1, 6, 7, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.destroy, g.double, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 12, 1, 6, -7, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound, g.destroy, g.double, g.less_power]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 17.2, 1.51, -4.4, 0, 180, 0]
	}]
};
exports.puntTrapGuard = {
	PARENT: [exports.genericTank],
	LABEL: 'Trooper',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.95
	},
	GUNS: [{
		POSITION: [18, 2, 1, 0, 3, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 2, 1, 0, -3, 0, 0.167],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, 3, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 2, 1, 0, -3, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, 3, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [14, 2, 1, 0, -3, 0, 0.833],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.twinBoost = {
	PARENT: [exports.genericTank],
	LABEL: 'Screamer',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.5,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.blower = {
	PARENT: [exports.genericTank],
	LABEL: 'Blower',
	DANGER: 7,
	BODY: {
		FOV: 1.05,
		SPEED: base.SPEED * 0.95,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [21, 14, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank, g.bit_less_reload, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, -2.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.flank, g.power, g.slow, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, 2.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.flank, g.power, g.slow, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 180, 0]
	}]
};
exports.buttbuttin = {
	PARENT: [exports.genericTank],
	LABEL: 'Lurker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.55,
		SPEED: base.SPEED * 0.8,
		FOV: 1.35
	},
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.flank, g.bit_less_reload, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [17, 2, 1, 0, -2.5, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.flank, g.power, g.slow, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [17, 2, 1, 0, 2.5, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.flank, g.power, g.slow, g.lots_more_recoil]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 180, 0]
	}]
};
exports.twin3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin-3',
	DANGER: 7,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 190, 0],
		TYPE: exports.twin3gun
	}, {
		POSITION: [11, 8, 0, 120, 190, 0],
		TYPE: exports.twin3gun
	}, {
		POSITION: [11, 8, 0, 240, 190, 0],
		TYPE: exports.twin3gun
	}]
};
exports.twin5 = {
	PARENT: [exports.genericTank],
	LABEL: 'Twin-5',
	DANGER: 7,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 180, 0],
		TYPE: exports.twin5gun
	}, {
		POSITION: [11, 8, 0, 72, 180, 0],
		TYPE: exports.twin5gun
	}, {
		POSITION: [11, 8, 0, 144, 180, 0],
		TYPE: exports.twin5gun
	}, {
		POSITION: [11, 8, 0, -144, 180, 0],
		TYPE: exports.twin5gun
	}, {
		POSITION: [11, 8, 0, -72, 180, 0],
		TYPE: exports.twin5gun
	}]
};
exports.trapCircle = {
	PARENT: [exports.block],
	LABEL: 'Trap Launcher',
	FACING_TYPE: 'autospin',
	INDEPENDENT: true,
	GUNS: [{
		POSITION: [12, 5.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 5.5, 1.7, 12, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.less_power, g.less_reload, g.less_power, g.less_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [12, 5.5, 1, 0, 0, 90, 0]
	}, {
		POSITION: [3, 5.5, 1.7, 12, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.less_power, g.less_reload, g.less_power, g.less_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [12, 5.5, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 5.5, 1.7, 12, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.less_power, g.less_reload, g.less_power, g.less_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}, {
		POSITION: [12, 5.5, 1, 0, 0, 270, 0]
	}, {
		POSITION: [3, 5.5, 1.7, 12, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.less_power, g.less_reload, g.less_power, g.less_range]),
			TYPE: [exports.trap, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.trap,
			AUTOFIRE: true
		}
	}]
};
exports.operator = {
	PARENT: [exports.genericTank],
	LABEL: 'Operator',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.7,
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [7, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.circle]),
			TYPE: exports.trapCircle,
			SYNCS_SKILLS: true,
			MAX_CHILDREN: 3,
			DESTROY_OLDEST_CHILD: true
		}
	}, {
		POSITION: [4, 14, 1, 8, 0, 0, 0]
	}]
};
exports.doubleception = makeAuto(exports.double, 'Doubleception', {
	type: exports.doubleAutoTurret
});
exports.hexaception = makeAuto(exports.hexa, 'Hexaception', {
	type: exports.hexaAutoTurret
});
exports.octoTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Octo Trapper',
	DANGER: 7,//7.5
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 0.75
	},
	STAT_NAMES: statNames.trap,
	HAS_NO_RECOIL: true,
	GUNS: [{
		POSITION: [15, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 45, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 45, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 90, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 135, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 180, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 225, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 270, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 7, 1, 0, 0, 315, 0]
	}, {
		POSITION: [3, 7, 1.7, 15, 0, 315, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.warhorseAuto4 = {
	LABEL: '',
	SYNC_TURRET_SKILLS: true,
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	COLOR: 16,
	TURRETS: [{
		POSITION: [11, 8, 0, 0, 190, 0],
		TYPE: exports.warhorse4gun
	}, {
		POSITION: [11, 8, 0, 90, 190, 0],
		TYPE: exports.warhorse4gun
	}, {
		POSITION: [11, 8, 0, 180, 190, 0],
		TYPE: exports.warhorse4gun
	}, {
		POSITION: [11, 8, 0, 270, 190, 0],
		TYPE: exports.warhorse4gun
	}]
};
exports.warhorse = {
	PARENT: [exports.genericTank],
	LABEL: 'Warhorse',
	DANGER: 7,
	BODY: {
		SPEED: base.SPEED * 0.8,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
			TYPE: exports.bullet
		}
	}],
	TURRETS: [{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: exports.warhorseAuto4
	}]
};
exports.pistolTrap = {
	PARENT: [exports.genericTank],
	LABEL: 'Impulser',
	DANGER: 7,
	BODY: {
		FOV: 0.925,
		ACCELERATION: base.ACCEL * 0.675
	},
	GUNS: [{
		POSITION: [16, 10.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [19, 7, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pistol, g.flank]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [13, 8, 1, 0, 0, 180, 0]
	}, {
		POSITION: [4, 8, 1.7, 13, 0, 180, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.machPistol = {
	PARENT: [exports.genericTank],
	LABEL: 'AP Pistol',
	DANGER: 7,
	BODY: {
		FOV: 0.925,
		ACCELERATION: base.ACCEL * 0.7
	},
	GUNS: [{
		POSITION: [16, 10.6, 1, 0, 0, 0, 0]
	}, {
		POSITION: [19, 7, 1.4, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pistol, g.mach, g.bit_less_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.destroyerDominatorAI = {
	PARENT: [exports.destroyerDominator],
	SIZE: 30,
	SKILL: setSkill(0, 0, 9, 9, 9, 9, 9, 0, 0),
	CONTROLLERS: ['nearestDifferentMaster', 'spinWhileIdle'],
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 360, 0],
		TYPE: exports.dominationBody
	}],
	CAN_BE_ON_LEADERBOARD: false,
	GIVE_KILL_MESSAGE: false,
	ACCEPTS_SCORE: false
};
exports.gunnerDominatorAI = {
	PARENT: [exports.gunnerDominator],
	SIZE: 30,
	SKILL: setSkill(0, 0, 9, 9, 9, 9, 9, 0, 0),
	CONTROLLERS: ['nearestDifferentMaster', 'spinWhileIdle'],
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 360, 0],
		TYPE: exports.dominationBody
	}],
	CAN_BE_ON_LEADERBOARD: false,
	GIVE_KILL_MESSAGE: false,
	ACCEPTS_SCORE: false
};
exports.trapperDominatorAI = {
	PARENT: [exports.trapperDominator],
	SIZE: 30,
	SKILL: setSkill(0, 0, 9, 9, 9, 9, 9, 0, 0),
	CONTROLLERS: ['nearestDifferentMaster', 'spinWhileIdle'],
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 360, 0],
		TYPE: exports.dominationBody
	}],
	CAN_BE_ON_LEADERBOARD: false,
	GIVE_KILL_MESSAGE: false,
	ACCEPTS_SCORE: false
};
exports.droneDominatorAI = {
	PARENT: [exports.droneDominator],
	SIZE: 30,
	SKILL: setSkill(0, 0, 9, 9, 9, 9, 9, 0, 0),
	CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'spinWhileIdle'],
	TURRETS: [{
		POSITION: [22, 0, 0, 0, 360, 0],
		TYPE: exports.dominationBody
	}],
	CAN_BE_ON_LEADERBOARD: false,
	GIVE_KILL_MESSAGE: false,
	ACCEPTS_SCORE: false
};
exports.moreFortress = {
	PARENT: [exports.genericTank],
	LABEL: 'Citadel',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.75,
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [14, 9, 1, 0, 0, 45, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 45, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 135, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 225, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 225, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [14, 9, 1, 0, 0, 315, 0]
	}, {
		POSITION: [4, 9, 1.5, 14, 0, 315, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.half_range, g.slow]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.bit_less_damage]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [7, 7.5, 0.6, 7, 0, 270, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.gunAngle = {
	PARENT: [exports.genericTank],
	LABEL: 'Infuser',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.7,
		SHIELD: base.SHIELD * 0.7,
		DENSITY: base.DENSITY * 0.5
	},
	GUNS: [{
		POSITION: [19, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.power, g.slow, g.lots_more_recoil, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.power, g.slow, g.lots_more_recoil, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.stalkFalcon = {
	PARENT: [exports.genericTank],
	LABEL: 'Owl',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.85,
		FOV: 1.2
	},
	INVISIBLE: [0.08, 0.02, 0.02],
	GUNS: [{
		POSITION: [25, 8.5, -1.75, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload, g.bit_more_damage]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Stalker'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.boostFalcon = {
	PARENT: [exports.genericTank],
	LABEL: 'Hummingbird',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.85,
		HEALTH: base.HEALTH * 0.5,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload, g.bit_more_damage, g.much_more_recoil]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Assassin'
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.boostEagle = {
	PARENT: [exports.genericTank],
	LABEL: 'Sparrow',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.5,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bit_less_reload, g.much_more_recoil]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Pounder'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.owlBot = {
	PARENT: [exports.stalkFalcon],
	GUNS: [{
		POSITION: [25, 8.5, -1.75, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload, g.bit_more_damage]),
			TYPE: exports.bullet,
			LABEL: 'Stalker'
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 150, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 210, 0.1],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 180, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.hummingbirdBot = {
	PARENT: [exports.boostFalcon],
	GUNS: [{
		POSITION: [27, 8.5, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.less_reload, g.bit_more_damage, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Assassin'
		}
	}, {
		POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.sparrowBot = {
	PARENT: [exports.boostEagle],
	GUNS: [{
		POSITION: [20, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bit_less_reload, g.much_more_recoil]),
			TYPE: exports.bullet,
			ALT_FIRE: true,
			LABEL: 'Pounder'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.less_recoil, g.less_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.gunBooster = {
	PARENT: [exports.genericTank],
	LABEL: 'Gun-Booster',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.5,
		SHIELD: base.SHIELD * 0.5,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [19, 2, 1, 0, -2.5, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.power, g.slow, g.lots_more_recoil, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flank, g.power, g.slow, g.lots_more_recoil, g.tri, g.tri_front]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [12, 11, 1, 0, 0, 0, 0]
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.megaEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Inventor',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [5, 15, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 18, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 18, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.stronger]),
			TYPE: exports.pillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [9, 18, 1, 3, 0, 0, 0]
	}]
};
exports.fatBattleship = {
	PARENT: [exports.genericTank],
	LABEL: 'Corvette',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.85,
		FOV: 1.2
	},
	GUNS: [{
		POSITION: [9, 12, 0.6, 5, 3, 115, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.pound]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [9, 12, 0.6, 5, -3, -115, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.pound]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [9, 12, 0.6, 5, 3, 295, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.pound]),
			TYPE: exports.autoSwarm,
			STAT_CALCULATOR: gunCalcNames.swarm,
			LABEL: 'AI'
		}
	}, {
		POSITION: [9, 12, 0.6, 5, -3, -295, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.pound]),
			TYPE: [exports.swarm, {
				CONTROLLERS: ['canRepel']
			}],
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.engineer3 = {
	PARENT: [exports.genericTank],
	LABEL: 'Engineer-3',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.8,
		SPEED: base.SPEED * 0.8,
		FOV: 1.05
	},
	STAT_NAMES: statNames.generic,
	FACING_TYPE: 'autospin',
	TURRETS: [{
		POSITION: [12, 8, 0, 0, 190, 0],
		TYPE: exports.engineer3gun
	}, {
		POSITION: [12, 8, 0, 120, 190, 0],
		TYPE: exports.engineer3gun
	}, {
		POSITION: [12, 8, 0, 240, 190, 0],
		TYPE: exports.engineer3gun
	}]	
};
exports.twinEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Convector',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [5, 5.5, 1, 10.5, 2.75, 0, 0]
	}, {
		POSITION: [5, 4.75, 1, 10.5, -2.75, 0, 0]
	}, {
		POSITION: [3, 14, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
			TYPE: exports.twinPillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [5, 7, 1, 7, 3.5, 0, 0]
	}, {
		POSITION: [5, 6.25, 1, 7, -3.5, 0, 0]
	}]
};
exports.machEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Mechanic',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 14, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
			TYPE: exports.machPillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [4, 11.5, 1.2, 8, 0, 0, 0]
	}]
};
exports.boomerEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Designer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [5, 10, 1, 14, 0, 0, 0]
	}, {
		POSITION: [6, 13, 1, 7, 0, 0, 0]
	}, {
		POSITION: [2, 10, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 7,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.stronger]),
			TYPE: exports.boomerangPillbox,
			SYNC_SKILLS: true
		}
	}]
};
exports.poundEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Programmer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [5, 12, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 14, -1.07, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.35, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
			TYPE: exports.poundPillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [4, 15, 1, 8, 0, 0, 0]
	}]
};
exports.speeder = {
	PARENT: [exports.genericTank],
	LABEL: 'Speeder',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.5,
		SHIELD: base.SHIELD * 0.5,
		ACCELARATION: base.ACCEL * 0.9,
		DENSITY: base.DENSITY * 0.2
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.tons_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 1/3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 1/3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 155, 2/3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [18, 8, 1, 0, 0, 205, 2/3],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.fatCarrier = {
	PARENT: [exports.genericTank],
	LABEL: 'Vessel',
	DANGER: 7,
	STAT_NAMES: statNames.swarm,
	BODY: {
		ACCELARATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [9, 12, 0.6, 5, 3, 27, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [9, 12, 0.6, 5, -3, -27, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}, {
		POSITION: [9, 11, 0.6, 6, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
			TYPE: exports.swarm,
			STAT_CALCULATOR: gunCalcNames.swarm
		}
	}]
};
exports.autoGunAngle = makeAuto(exports.gunAngle, 'Skirmisher');
exports.boostFighter = {
	PARENT: [exports.genericTank],
	LABEL: 'Dragon',
	DANGER: 7,
	BODY: {
		HEALTH: base.HEALTH * 0.75,
		SHIELD: base.SHIELD * 0.75,
		DENSITY: base.DENSITY * 0.25
	},
	GUNS: [{
		POSITION: [18, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.much_more_recoil]),
			TYPE: exports.bullet,
			LABEL: 'Front'
		}
	}, {
		POSITION: [16, 8, 1, 0, -1, 90, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Side'
		}
	}, {
		POSITION: [16, 8, 1, 0, 1, 270, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.tri_front, g.half_reload]),
			TYPE: exports.bullet,
			LABEL: 'Side'
		}
	}, {
		POSITION: [13, 8, 1, 0, -1, 135, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [13, 8, 1, 0, 1, 225, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.half_recoil]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 145, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [16, 8, 1, 0, 0, 215, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
			TYPE: exports.bullet,
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.triple2 = {
	PARENT: [exports.genericTank],
	LABEL: 'Triplet',
	DANGER: 7,
	GUNS: [{
		POSITION: [18, 8, 1, 0, 5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 8, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
			TYPE: exports.bullet
		}
	}]
};
exports.pentaTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Castle',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		FOV: 1.1,
		ACCELERATION: base.ACCEL * 0.9
	},
	GUNS: [{
		POSITION: [12, 7, 1, 0, 3, 37, 0]
	}, {
		POSITION: [3, 7, 1.6, 12, 3, 37, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_range, g.bit_less_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [12, 7, 1, 0, -3, -37, 0]
	}, {
		POSITION: [3, 7, 1.6, 12, -3, -37, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_range, g.bit_less_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, 2, 20, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, 2, 20, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_range, g.bit_less_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1, 0, -2, -20, 0]
	}, {
		POSITION: [3, 7, 1.6, 13.5, -2, -20, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_range, g.bit_less_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [16.5, 7, 1, 0, 0, 0, 0]
	}, {
		POSITION: [3, 7, 1.6, 16.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent, g.less_range, g.bit_less_damage]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.flankEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Deviser',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.875,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 14, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, -1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
			TYPE: exports.flankPillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [5, 14, 1, 7, 0, 0, 0]
	}]
};
exports.snipeEngineer = {
	PARENT: [exports.genericTank],
	LABEL: 'Technician',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		ACCELERATION: base.ACCEL * 0.875,
		SPEED: base.SPEED * 0.7,
		FOV: 1.15
	},
	GUNS: [{
		POSITION: [5, 11, 1, 10.5, 0, 0, 0]
	}, {
		POSITION: [3, 14, 1, 15.5, 0, 0, 0]
	}, {
		POSITION: [2, 14, 1.3, 18, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 6,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.stronger]),
			TYPE: exports.snipePillbox,
			SYNCS_SKILLS: true
		}
	}, {
		POSITION: [8, 14, -1.25, 4, 0, 0, 0]
	}]
};
exports.snake = {
	PARENT: [exports.bullet],
	LABEL: 'Snake',
	INDEPENDENT: true,
	BODY: {
		RANGE: 120
	},
	GUNS: [{
		POSITION: [6, 12, 1.4, 8, 0, 180, 0],
		PROPERTIES: {
			AUTOFIRE: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snake_skin]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}, {
		POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
		PROPERTIES: {
			AUTOFIRE: true,
			NEGATIVE_RECOIL: true,
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.snake]),
			TYPE: [exports.bullet, {
				PERSISTS_AFTER_DEATH: true
			}],
			STAT_CALCULATOR: gunCalcNames.thruster
		}
	}]
};
exports.sidewind = {
	PARENT: [exports.genericTank],
	LABEL: 'Sidewinder',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.7,
		SPEED: base.SPEED * 0.8,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [10, 11, -0.5, 14, 0, 0, 0]
	}, {
		POSITION: [21, 12, -1.1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
			TYPE: exports.snake,
			STAT_CALCULATOR: gunCalcNames.sustained
		}
	}]
};
exports.arsenal = {
	PARENT: [exports.genericTank],
	LABEL: 'Arsenal',
	DANGER: 6,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.9,
		ACCELERATON: base.ACCEL * 0.8
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [15, 10, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5, 13, 1, 5, 0, 0, 0]
	}, {
		POSITION: [3, 10, 1.5, 15, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 16,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.stronger, g.bit_slow]),
			TYPE: exports.miniPillbox,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.machArsenal = {
	PARENT: [exports.genericTank],
	LABEL: 'Armory',
	DANGER: 7,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.85,
		ACCELERATON: base.ACCEL * 0.7
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [15, 10, 1.25, 0, 0, 0, 0]
	}, {
		POSITION: [5, 13, 1.25, 5, 0, 0, 0]
	}, {
		POSITION: [3, 12.5, 1.5, 15, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 16,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.stronger, g.bit_slow, g.smaller]),
			TYPE: exports.miniPillbox,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.megaArsenal = {
	PARENT: [exports.genericTank],
	LABEL: 'Bearer',
	DANGER: 7,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.85,
		ACCELERATON: base.ACCEL * 0.7
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [13.5, 14, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5, 16, 1, 5, 0, 0, 0]
	}, {
		POSITION: [3.5, 14, 1.8, 13.5, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 16,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.stronger, g.bit_slow, g.bigger, g.more_range]),
			TYPE: exports.miniPillbox,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.triArsenal = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Arsenal',
	DANGER: 7,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.85,
		ACCELERATON: base.ACCEL * 0.7
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [15, 10, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5, 13, 1, 5, 0, 0, 0]
	}, {
		POSITION: [3, 10, 1.5, 15, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 10,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.stronger, g.bit_slow, g.bit_less_reload]),
			TYPE: exports.miniPillbox2,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 120, 0]
	}, {
		POSITION: [5, 13, 1, 5, 0, 120, 0]
	}, {
		POSITION: [3, 10, 1.5, 15, 0, 120, 0],
		PROPERTIES: {
			MAX_CHILDREN: 10,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.stronger, g.bit_slow, g.bit_less_reload]),
			TYPE: exports.miniPillbox2,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1, 0, 0, 240, 0]
	}, {
		POSITION: [5, 13, 1, 5, 0, 240, 0]
	}, {
		POSITION: [3, 10, 1.5, 15, 0, 240, 0],
		PROPERTIES: {
			MAX_CHILDREN: 10,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.stronger, g.bit_slow, g.bit_less_reload]),
			TYPE: exports.miniPillbox2,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.autoOcto = makeAuto(exports.octo);
exports.gigaArsenal = {
	PARENT: [exports.genericTank],
	LABEL: 'Giga Arsenal',
	DANGER: 7,
	STAT_NAMES: statNames.generic,
	BODY: {
		SPEED: base.SPEED * 0.8,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [14.5, 19.5, 1, 0, 0, 0, 0]
	}, {
		POSITION: [5, 20, 1.1, 5, 0, 0, 0]
	}, {
		POSITION: [3.5, 19.5, 1.7, 14.5, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 16,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.destroy, g.stronger, g.more_range, g.bigger]),
			TYPE: exports.miniPillbox3,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.trapGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Pursuer',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [12, 3.5, 1, 0, 7.25, 0, 0]
	}, {
		POSITION: [2, 3.5, 1.3, 12, 7.25, 0, 0.5],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.fast, g.stronger, g.bit_more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [12, 3.5, 1, 0, -7.25, 0, 0]
	}, {
		POSITION: [2, 3.5, 1.3, 12, -7.25, 0, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.fast, g.stronger, g.bit_more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [16, 3.5, 1, 0, 3.75, 0, 0]
	}, {
		POSITION: [2, 3.5, 1.3, 16, 3.75, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.fast, g.stronger, g.bit_more_reload]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [16, 3.5, 1, 0, -3.75, 0, 0]
	}, {
		POSITION: [2, 3.5, 1.3, 16, -3.75, 0, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.fast, g.stronger, g.bit_more_reload]),
			TYPE: exports.trap
		}
	}]
};
exports.triMachTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Fencer',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 7, 1.75, 0, 0, 0, 0]
	}, {
		POSITION: [3, 13.1, 1.5, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.flank, g.less_range, g.smaller, g.bit_smaller, g.less_spread, g.double_reload, g.one_fourth_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1.75, 0, 0, 120, 0]
	}, {
		POSITION: [3, 13.1, 1.5, 13.5, 0, 120, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.flank, g.less_range, g.smaller, g.bit_smaller, g.less_spread, g.double_reload, g.one_fourth_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [13.5, 7, 1.75, 0, 0, 240, 0]
	}, {
		POSITION: [3, 13.1, 1.5, 13.5, 0, 240, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.flank, g.less_range, g.smaller, g.bit_smaller, g.less_spread, g.double_reload, g.one_fourth_reload]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.machMegaTrapper = {
	PARENT: [exports.genericTank],
	LABEL: 'Logger',
	DANGER: 7,
	STAT_NAMES: statNames.trap,
	BODY: {
		SPEED: base.SPEED * 0.875,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [13.5, 14, 1.5, 0, 0, 0, 0]
	}, {
		POSITION: [3.5, 21, 1.7, 13.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.mach, g.smaller, g.bit_smaller, g.more_range, g.more_reload, g.bigger, g.fast]),
			TYPE: exports.trap,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.wideMortar = {
	PARENT: [exports.genericTank],
	LABEL: 'Bombarder',
	DANGER: 7,
	GUNS: [{
		POSITION: [10, 3, 1, 0, -8.5, -12, 0.714],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [10, 3, 1, 0, 8.5, 12, 0.857],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [13, 3, 1, 0, -8, -7, 0.429],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [13, 3, 1, 0, 8, 7, 0.571],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, -6, -7, 0.143],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 6, 7, 0.286],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.bit_less_reload]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [19, 12, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.bit_less_damage]),
			TYPE: exports.bullet,
			LABEL: 'Primary'
		}
	}]
};
exports.autoMachGunner = makeAuto(exports.machineGunner, 'Mischiefer');
exports.triMachArsenal = {
	PARENT: [exports.genericTank],
	LABEL: 'Tri-Armory',
	DANGER: 7,
	BODY: {
		FOV: 1.15,
		SPEED: base.SPEED * 0.8,
		ACCELERATON: base.ACCEL * 0.7
	},
	STAT_NAMES: statNames.generic,
	GUNS: [{
		POSITION: [15, 10, 1.25, 0, 0, 0, 0]
	}, {
		POSITION: [5, 13, 1.25, 5, 0, 0, 0]
	}, {
		POSITION: [3, 12.5, 1.5, 15, 0, 0, 0],
		PROPERTIES: {
			MAX_CHILDREN: 14,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.flank, g.stronger, g.bit_slow, g.smaller, g.bit_less_reload]),
			TYPE: exports.miniPillbox2,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1.25, 0, 0, 120, 0]
	}, {
		POSITION: [5, 13, 1.25, 5, 0, 120, 0]
	}, {
		POSITION: [3, 12.5, 1.5, 15, 0, 120, 0],
		PROPERTIES: {
			MAX_CHILDREN: 14,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.flank, g.stronger, g.bit_slow, g.smaller, g.bit_less_reload]),
			TYPE: exports.miniPillbox2,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}, {
		POSITION: [15, 10, 1.25, 0, 0, 240, 0]
	}, {
		POSITION: [5, 13, 1.25, 5, 0, 240, 0]
	}, {
		POSITION: [3, 12.5, 1.5, 15, 0, 240, 0],
		PROPERTIES: {
			MAX_CHILDREN: 14,
			DESTROY_OLDEST_CHILD: true,
			SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.flank, g.stronger, g.bit_slow, g.smaller, g.bit_less_reload]),
			TYPE: exports.miniPillbox2,
			STAT_CALCULATOR: gunCalcNames.trap
		}
	}]
};
exports.trapMachGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Chaser',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.9,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [12, 4, 1, 0, 7, 0, 0]
	}, {
		POSITION: [4, 4, 2.75, 12, 7, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.machgun, g.less_range, g.stronger, g.bit_slow]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [12, 4, 1, 0, -7, 0, 0]
	}, {
		POSITION: [4, 4, 2.75, 12, -7, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.machgun, g.less_range, g.stronger, g.bit_slow]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [14, 4, 1, 0, 3.5, 0, 0]
	}, {
		POSITION: [4, 4, 2.75, 14, 3.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.machgun, g.less_range, g.stronger, g.bit_slow]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [14, 4, 1, 0, -3.5, 0, 0]
	}, {
		POSITION: [4, 4, 2.75, 14, -3.5, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.machgun, g.less_range, g.stronger, g.bit_slow]),
			TYPE: exports.trap
		}
	}, {
		POSITION: [16, 4, 1, 0, 0, 0, 0]
	}, {
		POSITION: [4, 4, 2.75, 16, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.pure_gunner, g.machgun, g.less_range, g.stronger, g.bit_slow]),
			TYPE: exports.trap
		}
	}]
};
exports.superMachGunner = {
	PARENT: [exports.genericTank],
	LABEL: 'Super Gunner',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.9,
		SPEED: base.SPEED * 0.875
	},
	GUNS: [{
		POSITION: [15, 3, 4.5, -3, 5, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun, g.more_power, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 3, 4.5, -3, -5, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun, g.more_power, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 3, 4.5, 0, 2.5, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun, g.more_power, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 3, 4.5, 0, -2.5, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun, g.more_power, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [15, 3, 4.5, 3, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.machgun, g.more_power, g.more_reload, g.more_reload]),
			TYPE: exports.bullet
		}
	}]
};
exports.autoTripleTwin = makeAuto(exports.tripleTwin, 'Auto-Triple');
exports.megamine = {
	PARENT: [exports.genericTank],
	LABEL: 'Megamine',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 1.15,
		DENSITY: base.DENSITY * 4
	},
	STAT_NAMES: statNames.smasher,
	INVISIBLE: [0.08, 0.01, 0.02],
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher,
	TURRETS: [{
		POSITION: [24, 0, 0, 0, 330, 0],
		TYPE: exports.megamineBody
	}, {
		POSITION: [24, 0, 0, 90, 360, 0],
		TYPE: exports.megaSmashBody
	}]
};
exports.gigaSmash = {
	PARENT: [exports.genericTank],
	LABEL: 'Giga Smasher',
	DANGER: 7,
	BODY: {
		FOV: 1.1,
		SPEED: base.SPEED * 1.05,
		HEALTH: base.HEALTH * 1.1,
		DENSITY: base.DENSITY * 5
	},
	IS_SMASHER: true,
	SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
	STAT_NAMES: statNames.smasher,
	TURRETS: [{
		POSITION: [26, 0, 0, 0, 360, 0],
		TYPE: exports.megaSmashBody
	}]
};
exports.constructArtillery = {
	PARENT: [exports.genericTank],
	LABEL: 'Sergeant',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.5,
		SPEED: base.SPEED * 0.675,
		FOV: 1.1
	},
	GUNS: [{
		POSITION: [17, 3, 1, 0, -8.5, -5, 0.25],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [17, 3, 1, 0, 8.5, 5, 0.75],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
			TYPE: exports.bullet,
			LABEL: 'Secondary'
		}
	}, {
		POSITION: [18, 18, 1, 0, 0, 0, 0]
	}, {
		POSITION: [2, 18, 1.2, 18, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.arty, g.less_power, g.bit_slow]),
			TYPE: exports.block,
			LABEL: 'Constructor'
		}
	}]
};
exports.streamClicker = {
	PARENT: [exports.genericTank],
	LABEL: 'Stream Clicker',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.6,
		SPEED: base.SPEED * 0.75,
		FOV: 1.3
	},
	GUNS: [{
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1, 0, 0, 0, 0.2],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1, 0, 0, 0, 0.4],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 4, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 4, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [18, 4, 1, 0, 0, 0, 0.6],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [16, 4, 1, 0, 0, 0, 0.8],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.stream]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [8, 8.5, -1.3, 5, 0, 0, 0]
	}]
};
exports.miniPuncher = {
	PARENT: [exports.genericTank],
	LABEL: 'Mini Puncher',
	DANGER: 7,
	BODY: {
		ACCELERATION: base.ACCEL * 0.65,
		SPEED: base.SPEED * 0.75,
		FOV: 1.25
	},
	GUNS: [{
		POSITION: [24, 4, 1.1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1.1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [24, 4, 1.1, 0, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1.1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1.1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [22, 4, 1.1, 0, 0, 0, 0.333],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1.1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1.1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [20, 4, 1.1, 0, 0, 0, 0.667],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.click, g.mini, g.power, g.slow, g.slow, g.less_reload]),
			TYPE: exports.bullet
		}
	}, {
		POSITION: [10, 8.5, -1.4, 5, 0, 0, 0]
	}]
};
exports.autoStream = makeAuto(exports.stream);
exports.hybridSilo = makeHybrid(exports.silo, 'Granuler');
exports.hybridSealer = makeHybrid(exports.siloStream, 'Farmer');
//exports.testbed.UPGRADES_TIER_3 = [exports.];

//gk-x series
//exports.machHexaTrap
//exports.trapClicker
//exports.buildception//Blockception
//exports.megaPuncher//Giga Clicker
//exports.minigunRifle
//exports.minigunClicker
//exports.constructContagion
//exports.engineerContagion//Litterer
//exports.engineerArtillery//Sheriff
//exports.triSail
//exports.pentaSail
//exports.invisiCarrier//Submersible//Sonar
//exports.machAngle//a tri-angle with a machine gun front turret, level 45
//exports.boostMach//same as above but is a booster, level 60
//exports.huntception
//exports.autoHunter
//exports.masterBanshee
//exports.invisimaster
//exports.pentaSeeker
//exports.homingRifle//Caliber//has a circle prop, same for bullets
//exports.cruiserOverdrive
//exports.singleFactory
//exports.inverseAutoTrapper
//exports.tripleSniper//Longshot
//exports.pentaSniper
//exports.megaShotgun//Tsunami

// TESTBED
exports.testbed.UPGRADES_TIER_4 = [exports.testbed_boss, exports.testbed_dominator, exports.testbed_misc, exports.testbed_sentry, exports.testbed_beta_tanks, exports.testbed_X_K_X_bosses];
exports.testbed_boss.UPGRADES_TIER_4 = [exports.eliteSprayer, exports.eliteGunner, exports.eliteDestroyer, exports.palisade, exports.blitzkrieg, exports.defender, exports.octogeddon, exports.skimBoss, exports.fallenBooster, exports.eliteTwin, exports.eliteTrap, exports.derogator, exports.eliteMachine, exports.eliteBorer, exports.testbed_boss_2];
exports.testbed_boss_2.UPGRADES_TIER_4 = [exports.hexadecagor, exports.fallenOverlord, exports.guardian, exports.summoner, exports.nailer, exports.ultimateDestroyer, exports.eliteSniper, exports.cutter, exports.awp_neph, exports.awp_snipe, exports.awp_machine, exports.legendaryCrasher, exports.lamper, exports.clock, exports.testbed_boss_3];
exports.testbed_boss_3.UPGRADES_TIER_4 = [exports.ultraCannon, exports.octagron, exports.swarmSquare, exports.constructionist, exports.squarefort, exports.ultraPunt, exports.asteroid, exports.comet, exports.chandelier, exports.leviathan, exports.demolisher, exports.hexaship, exports.testboss2, exports.trapDweller];
exports.testbed_dominator.UPGRADES_TIER_4 = [exports.destroyerDominator, exports.gunnerDominator, exports.trapperDominator, exports.droneDominator];
exports.testbed_sentry.UPGRADES_TIER_4 = [exports.sentrySwarm, exports.sentryTrap, exports.sentryGun, exports.sentryRanger];
exports.testbed_misc.UPGRADES_TIER_4 = [exports.mothership, exports.arenaCloser, exports.commander, exports.observer, exports.weirdSpike, exports.ball, exports.opAnnihilator, exports.trishot3, exports.lib, exports.k, exports.deathStar, exports.multitool, exports.harrower, exports.bufferer, exports.testbed_misc_2];
exports.testbed_misc_2.UPGRADES_TIER_4 = [exports.arenaCloser5, exports.triple2, exports.warhorse];
exports.testbed_beta_tanks.UPGRADES_TIER_4 = [exports.quadTrapper, exports.sent, exports.vulcan, exports.array, exports.flamethrow, exports.corroder, exports.sandstm, exports.foghorn, exports.cart, exports.spark, exports.laser, exports.protector, exports.huntsman, exports.spiker, exports.testbed_beta_tanks_2];
exports.testbed_beta_tanks_2.UPGRADES_TIER_4 = [exports.railgun2, exports.mini2, exports.quadCarrier, exports.pentaCarrier];
exports.testbed_X_K_X_bosses.UPGRADES_TIER_4 = [exports.eggBossTier1, exports.squareBossTier1, exports.triangleBossTier1, exports.pentagonBossTier1, exports.hexagonBossTier1, exports.heptagonBossTier1, exports.obp1, exports.obt1, exports.rocketBossTier1, exports.AWP_1];
// BASIC
exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.flank, exports.director, exports.pounder, exports.pellet, exports.trapper];
exports.basic.UPGRADES_TIER_2 = [exports.smash];
exports.basic.UPGRADES_TIER_3 = [exports.single];
// TWIN
exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.hexa, exports.twinSniper, exports.twinTrapper, exports.heavyTwin];
exports.twin.UPGRADES_TIER_3 = [exports.boxer, exports.doubleSwarm, exports.twinTri, exports.twinAutoTwin];
exports.double.UPGRADES_TIER_3 = [exports.tripleTwin, exports.hewnDouble, exports.autoDouble, exports.bentDouble, exports.doubleGuard, exports.battleship, exports.doubleTrapper, exports.heavyDouble, exports.bulwark];
exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid, exports.bentDouble, exports.triple, exports.sunburst, exports.bentBlaster, exports.moonburst, exports.seek, exports.bentTrapper];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.autohexa, exports.hexaTrap, exports.hurricane, exports.insect, exports.clover, exports.doubleGuard, exports.quadGuard, exports.heavyQuad];
exports.twinSniper.UPGRADES_TIER_3 = [exports.dual, exports.sounder, exports.twinAssassin, exports.autoTwinSniper, exports.seek, exports.twinRifle];
exports.twinSniper.UPGRADES_TIER_4 = [exports.snipewark];
exports.bulwark.UPGRADES_TIER_4 = [exports.snipewark];
exports.twinAssassin.UPGRADES_TIER_4 = [exports.twinRanger];
exports.triple.UPGRADES_TIER_4 = [exports.quint, exports.tripleDual, exports.tripleTrapper, exports.snipeTriple, exports.machTriple, exports.heavyTriple, exports.flankTriple];
exports.tripleTwin.UPGRADES_TIER_4 = [exports.quadTwin, exports.tripleTwinTrapper, exports.tripleHeavyTwin, exports.bentTripleTwin, exports.autoTripleTwin];
exports.doubleGuard.UPGRADES_TIER_4 = [exports.quadTwin, exports.doubleInsect];
exports.autoDouble.UPGRADES_TIER_4 = [exports.autoDoubleTrapper, exports.autoHeavyDouble, exports.autoTripleTwin];
exports.doubleTrapper.UPGRADES_TIER_4 = [exports.autoDoubleTrapper, exports.tripleTwinTrapper, exports.flankBentTrapper];
exports.dual.UPGRADES_TIER_4 = [exports.tripleDual, exports.predatorDual];
exports.heavyTwin.UPGRADES_TIER_3 = [exports.heavyDouble, exports.twinDestroyer];
exports.heavyDouble.UPGRADES_TIER_4 = [exports.autoHeavyDouble, exports.tripleHeavyTwin, exports.extraHeavyDouble];
exports.seek.UPGRADES_TIER_4 = [exports.flankSeeker];
exports.bentDouble.UPGRADES_TIER_4 = [exports.bentTripleTwin, exports.flankTriple, exports.flankSeeker];
exports.penta.UPGRADES_TIER_4 = [exports.pentaSunburst, exports.hepta, exports.pentaBlaster, exports.pentaTrapper];
exports.sunburst.UPGRADES_TIER_4 = [exports.pentaSunburst];
exports.bentTrapper.UPGRADES_TIER_4 = [exports.tripleTrapper, exports.flankBentTrapper, exports.pentaTrapper];
exports.octo.UPGRADES_TIER_4 = [exports.deca, exports.octoTrap, exports.autoOcto];
exports.heavyTwin.UPGRADES_TIER_4 = [exports.heavyTriple];
exports.moonburst.UPGRADES_TIER_4 = [exports.hepta];
exports.bentBlaster.UPGRADES_TIER_4 = [exports.pentaBlaster, exports.bentBlasterHybrid];
exports.benthybrid.UPGRADES_TIER_4 = [exports.bentBlasterHybrid];
exports.autohexa.UPGRADES_TIER_4 = [exports.hexaception, exports.autoOcto];
exports.autoDouble.UPGRADES_TIER_4 = [exports.doubleception];
// SNIPER
exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini, exports.rifle, exports.clicker, exports.twinSniper];
exports.sniper.UPGRADES_TIER_3 = [exports.snipeGuard, exports.snipeception];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon, exports.autoAssassin, exports.hybridAssassin, exports.stalk, exports.swarmAssassin, exports.silo, exports.railgun, exports.twinAssassin, exports.assassinTrapGuard, exports.buttbuttin];
exports.hunter.UPGRADES_TIER_3 = [exports.predator, exports.poach, exports.sidewind, exports.rocketeer, exports.shift, exports.demoman, exports.carnivore, exports.devastator, exports.nightseeker, exports.dual, exports.spreadHunter];
exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.nailgun, exports.hybridMini, exports.autoMini, exports.autoMaton, exports.hotshot, exports.silo, exports.flooder, exports.minitrap, exports.miniClicker, exports.puntMini];
exports.rifle.UPGRADES_TIER_3 = [exports.gunRifle, exports.heavyRifle, exports.spreadRifle, exports.assaultRifle, exports.sniperRifle, exports.stalkRifle, exports.rifleClicker, exports.autoRifle, exports.hybridRifle, exports.rifleTrap, exports.twinRifle, exports.pistol];
exports.clicker.UPGRADES_TIER_3 = [exports.rifleClicker, exports.megaClicker, exports.longClicker, exports.miniClicker];
exports.ranger.UPGRADES_TIER_4 = [exports.twinRanger, exports.longRanger, exports.longFalcon];
exports.stream.UPGRADES_TIER_4 = [exports.streamTrap, exports.hottershot, exports.hybridStream, exports.smother, exports.siloStream, exports.floodStream, exports.puntStream, exports.streamClicker, exports.autoStream];
exports.minitrap.UPGRADES_TIER_4 = [exports.streamTrap, exports.miniBuilder, exports.megaBarricade, exports.hybridBarricade];
exports.hotshot.UPGRADES_TIER_4 = [exports.hottershot, exports.longHotshot];
exports.hybridMini.UPGRADES_TIER_4 = [exports.hybridStream, exports.hybridBarricade, exports.hybridFlooder, exports.hybridSilo];
exports.silo.UPGRADES_TIER_4 = [exports.longHotshot, exports.siloStream, exports.hybridSilo];
exports.predator.UPGRADES_TIER_4 = [exports.xPredator, exports.predatorDual, exports.xCarnivore, exports.predaNightseeker, exports.xSpreadHunter];
exports.snipeGuard.UPGRADES_TIER_4 = [exports.snipewark];
exports.falcon.UPGRADES_TIER_4 = [exports.longFalcon, exports.stalkFalcon, exports.boostFalcon];
exports.carnivore.UPGRADES_TIER_4 = [exports.xCarnivore];
exports.nightseeker.UPGRADES_TIER_4 = [exports.predaNightseeker];
exports.spreadHunter.UPGRADES_TIER_4 = [exports.xSpreadHunter, exports.ySpreadHunter];
exports.flooder.UPGRADES_TIER_4 = [exports.floodStream, exports.hybridFlooder];
exports.guntrap.UPGRADES_TIER_4 = [exports.nailtrap];
exports.nailgun.UPGRADES_TIER_4 = [exports.nailtrap, exports.nanogun, exports.staplegun];
exports.assaultRifle.UPGRADES_TIER_4 = [exports.machPistol];
exports.rifleTrap.UPGRADES_TIER_4 = [exports.pistolTrap];
exports.pistol.UPGRADES_TIER_4 = [exports.machPistol, exports.pistolTrap];
exports.stalk.UPGRADES_TIER_4 = [exports.stalkFalcon];
exports.miniClicker.UPGRADES_TIER_4 = [exports.streamClicker, exports.miniPuncher];
exports.megaClicker.UPGRADES_TIER_4 = [exports.miniPuncher];
exports.autoMini.UPGRADES_TIER_4 = [exports.autoStream];
exports.siloStream.UPGRADES_TIER_4 = [exports.hybridSealer];
exports.hybridSilo.UPGRADES_TIER_4 = [exports.hybridSealer];
// MACHINE GUN
exports.machine.UPGRADES_TIER_2 = [exports.mini, exports.gunner, exports.blaster, exports.gatling, exports.flankMachine, exports.autoMachine, exports.spray, exports.machineTrapper];
exports.autoMachine.UPGRADES_TIER_3 = [exports.autoSpray, exports.machineAutoMachine];
exports.spray.UPGRADES_TIER_3 = [exports.autoSpray, exports.blasterSpray, exports.gatlingSpray, exports.volcano];
exports.gunner.UPGRADES_TIER_3 = [exports.autoGunner, exports.nailgun, exports.auto4, exports.machineGunner, exports.guntrap, exports.hurricane, exports.battery, exports.scaler, exports.hewnGunner, exports.gunCruiser, exports.overgunner, exports.undergunner, exports.trapGunner];
exports.blaster.UPGRADES_TIER_3 = [exports.twinBlaster, exports.bentBlaster, exports.half, exports.blasterSpray, exports.blasterTrapper];
exports.gatling.UPGRADES_TIER_3 = [exports.charger, exports.half, exports.fastGatling, exports.gatlingSpray, exports.gatlingTrapper];
exports.flankMachine.UPGRADES_TIER_3 = [exports.triMachine, exports.half, exports.quadGuard];
exports.quadGuard.UPGRADES_TIER_4 = [exports.quadMachine];
exports.triMachine.UPGRADES_TIER_4 = [exports.quadMachine];
exports.fastGatling.UPGRADES_TIER_4 = [exports.rangerGatling];
exports.machineGunner.UPGRADES_TIER_4 = [exports.gatlingMachGunner, exports.blasterMachGunner, exports.autoMachGunner, exports.trapMachGunner, exports.superMachGunner];
exports.autoGunner.UPGRADES_TIER_4 = [exports.autoMachGunner];
exports.trapGunner.UPGRADES_TIER_4 = [exports.trapMachGunner];
// FLANK GUARD
exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flankTrap, exports.triPellet, exports.triTrapper];
exports.flank.UPGRADES_TIER_3 = [exports.tripleTwin, exports.triMachine, exports.flankception];
exports.tri.UPGRADES_TIER_3 = [exports.fighter, exports.booster, exports.falcon, exports.bomber, exports.autotri, exports.surfer, exports.eagle, exports.poundAngle, exports.triRocket, exports.diver, exports.marine, exports.twinTri, exports.gunAngle];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.sniper3, exports.builder3, exports.machine3, exports.shuriken, exports.banshee, exports.twin3];
exports.flankTrap.UPGRADES_TIER_3 = [exports.snipeGuard, exports.guntrap, exports.fortress, exports.bomber, exports.chimera, exports.flankBuilder, exports.rifleTrap, exports.conq, exports.bulwark, exports.flankTriTrap, exports.assassinTrapGuard, exports.puntTrapGuard];
exports.bomber.UPGRADES_TIER_4 = [exports.starbomber];
exports.auto5.UPGRADES_TIER_4 = [exports.auto7, exports.heavy5, exports.auto6, exports.sniper5, exports.machine5, exports.twin5];
exports.heavy3.UPGRADES_TIER_4 = [exports.giga3, exports.obliterator3, exports.heavy5];
exports.sniper3.UPGRADES_TIER_4 = [exports.assassin3, exports.sniper5];
exports.machine3.UPGRADES_TIER_4 = [exports.machine5];
exports.auto4.UPGRADES_TIER_4 = [exports.auto6];
exports.booster.UPGRADES_TIER_4 = [exports.boostRocket, exports.twinBoost, exports.boostFalcon, exports.boostEagle, exports.gunBooster, exports.speeder, exports.boostFighter];
exports.triRocket.UPGRADES_TIER_4 = [exports.boostRocket];
exports.builder3.UPGRADES_TIER_4 = [exports.boomer3, exports.quadBuilder, exports.megafort, exports.engineer3];
exports.insect.UPGRADES_TIER_4 = [exports.hexaPound, exports.doubleInsect];
exports.surfer.UPGRADES_TIER_4 = [exports.brutalizer];
exports.twinTri.UPGRADES_TIER_4 = [exports.twinAngleFighter, exports.twinBoost];
exports.fighter.UPGRADES_TIER_4 = [exports.twinAngleFighter, exports.boostFighter];
exports.eagle.UPGRADES_TIER_4 = [exports.hawk, exports.boostEagle];
exports.twin3.UPGRADES_TIER_4 = [exports.twin5];
exports.flankception.UPGRADES_TIER_4 = [exports.hexaception];
exports.gunAngle.UPGRADES_TIER_4 = [exports.gunBooster, exports.autoGunAngle];
exports.autotri.UPGRADES_TIER_4 = [exports.autoGunAngle];
// DIRECTOR
exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.underseer, exports.littleFactory];
exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.overtrap, exports.overgunner, exports.autoOverseer, exports.master, exports.dreadnought, exports.lightning, exports.overdrive, exports.manager, exports.heavyOverseer];
exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.battleship, exports.fortress, exports.autoCruiser, exports.fatCruiser, exports.triCruiser, exports.sounder, exports.beehive, exports.gunCruiser, exports.swarmArtillery, exports.marauder, exports.doubleSwarm, exports.submarine];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.autoUnderseer, exports.maleficitor, exports.undergunner, exports.undertrap];
exports.littleFactory.UPGRADES_TIER_3 = [exports.factory, exports.sniperFactory, exports.machineFactory, exports.trapperFactory, exports.twinFactory, exports.invisispawner];
exports.overdrive.UPGRADES_TIER_4 = [exports.overwork, exports.trapdrive, exports.gundrive, exports.harddrive, exports.hyperdrive, exports.drivenaught, exports.overdriveMaster];
exports.overlord.UPGRADES_TIER_4 = [exports.overwork, exports.heavyOverlord, exports.juggernaut];
exports.trapperFactory.UPGRADES_TIER_4 = [exports.builderFactory];
exports.heavyOverseer.UPGRADES_TIER_4 = [exports.heavyOverlord];
exports.overgunner.UPGRADES_TIER_4 = [exports.gundrive];
exports.overtrap.UPGRADES_TIER_4 = [exports.trapdrive];
exports.manager.UPGRADES_TIER_4 = [exports.harddrive];
exports.lightning.UPGRADES_TIER_4 = [exports.hyperdrive, exports.dreadning];
exports.dreadnought.UPGRADES_TIER_4 = [exports.juggernaut, exports.dreadning, exports.drivenaught, exports.battlenaught];
exports.factory.UPGRADES_TIER_4 = [exports.fatFactory];
exports.necromancer.UPGRADES_TIER_4 = [exports.pentamancer];
exports.master.UPGRADES_TIER_4 = [exports.overdriveMaster, exports.overmaster];
exports.battleship.UPGRADES_TIER_4 = [exports.battlenaught, exports.fatBattleship];
exports.fatCruiser.UPGRADES_TIER_4 = [exports.fatBattleship, exports.fatCarrier];
exports.carrier.UPGRADES_TIER_4  = [exports.fatCarrier];
// POUNDER
exports.pounder.UPGRADES_TIER_2 = [exports.destroyer, exports.builder, exports.artillery, exports.flankPound, exports.miniSpread, exports.autoPounder, exports.littleSkimmer, exports.obliterator, exports.multishot, exports.heavyTwin];
exports.pounder.UPGRADES_TIER_3 = [exports.eagle];
exports.destroyer.UPGRADES_TIER_3 = [exports.annihilator, exports.hybrid, exports.autoDestroy, exports.steamroll, exports.sheller, exports.griefer, exports.intercept, exports.conq, exports.hiveShooter, exports.flankDestroy, exports.twinDestroyer, exports.blower];
exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.autoArtillery, exports.marauder, exports.cannon, exports.sheller, exports.howitzer, exports.fieldGun, exports.aagun, exports.swarmArtillery, exports.hybridArtillery, exports.hiveShooter, exports.builderArtillery];
exports.flankPound.UPGRADES_TIER_3 = [exports.insect, exports.heavyQuad, exports.flankDestroy, exports.autoFlankPound, exports.boxer, exports.poundAngle];
exports.miniSpread.UPGRADES_TIER_3 = [exports.spread, exports.autoMiniSpread, exports.spreadbow, exports.fielder, exports.guardSpreadling, exports.spreadTrap, exports.spreadHunter, exports.scaler, exports.refractor, exports.twinSpreadling];
exports.autoPounder.UPGRADES_TIER_3 = [exports.autoDestroy, exports.autoFlankPound, exports.heavy3, exports.poundception];
exports.littleSkimmer.UPGRADES_TIER_3 = [exports.skimmer, exports.fatSkimmer, exports.autoLauncher, exports.spinner, exports.fieldGun, exports.hiveShooter, exports.rocketeer, exports.trapSkimmer, exports.torpedoer, exports.scythe, exports.sidewind];
exports.obliterator.UPGRADES_TIER_3 = [exports.bulldozer, exports.crusher, exports.heavyRifle, exports.plow, exports.steamroll];
exports.multishot.UPGRADES_TIER_3 = [exports.shotgun, exports.longshot, exports.machshot, exports.miniMultishot, exports.musket, exports.manyshot];
exports.annihilator.UPGRADES_TIER_4 = [exports.megaAnnihilator, exports.flankAnni, exports.anniSheller, exports.anniHybrid, exports.anniSteamroll, exports.anniIntercept, exports.invisianni, exports.anniConq];
exports.skimmer.UPGRADES_TIER_4 = [exports.hyperSkimmer, exports.trebuchet];
exports.spread.UPGRADES_TIER_4 = [exports.widespread, exports.spreadMach];
exports.heavyQuad.UPGRADES_TIER_4 = [exports.quadDestroy, exports.hexaPound];
exports.flankDestroy.UPGRADES_TIER_4 = [exports.quadDestroy, exports.flankAnni];
exports.sheller.UPGRADES_TIER_4 = [exports.wideCannon, exports.shellerMortar, exports.anniSheller];
exports.cannon.UPGRADES_TIER_4 = [exports.wideCannon];
exports.mortar.UPGRADES_TIER_4 = [exports.shellerMortar, exports.builderMortar, exports.mortarMarauder, exports.wideMortar];
exports.hybrid.UPGRADES_TIER_4 = [exports.anniHybrid, exports.overdriveHybrid];
exports.steamroll.UPGRADES_TIER_4 = [exports.anniSteamroll, exports.wreckingBall];
exports.bulldozer.UPGRADES_TIER_4 = [exports.rangerObliterator];
exports.builderArtillery.UPGRADES_TIER_4 = [exports.builderMortar, exports.constructArtillery];
exports.trapSkimmer.UPGRADES_TIER_4 = [exports.rewinder, exports.blockSkimmer];
exports.intercept.UPGRADES_TIER_4 = [exports.anniIntercept, exports.interceptTwin, exports.interceptSnipe, exports.interceptMach, exports.interceptFlank, exports.interceptPound, exports.interceptTrap, exports.interceptPellet];
exports.griefer.UPGRADES_TIER_4 = [exports.invisianni];
exports.destroyer.UPGRADES_TIER_4 = [exports.hawk];
exports.conq.UPGRADES_TIER_4 = [exports.anniConq];
exports.marauder.UPGRADES_TIER_4 = [exports.mortarMarauder];
exports.autoDestroy.UPGRADES_TIER_4 = [exports.destroyception];
exports.poundception.UPGRADES_TIER_4 = [exports.destroyception];
exports.twinDestroyer.UPGRADES_TIER_4 = [exports.extraHeavyDouble];
// PELLETER
exports.pellet.UPGRADES_TIER_2 = [exports.triPellet, exports.sail, exports.borer, exports.punt, exports.hewnPellet, exports.autoPellet, exports.hybridPellet, exports.gunner];
exports.triPellet.UPGRADES_TIER_3 = [exports.pentaPellet, exports.triBorer, exports.triHewnPellet, exports.triPunt];
exports.sail.UPGRADES_TIER_3 = [exports.autoSail, exports.hybridSail];
exports.borer.UPGRADES_TIER_3 = [exports.gunborer, exports.scorpion, exports.piercer, exports.autoBorer, exports.hybridBorer, exports.nailgun, exports.gunRifle, exports.longBorer, exports.triBorer];
exports.punt.UPGRADES_TIER_3 = [exports.punter, exports.puntMini, exports.sword, exports.autoPunt, exports.hybridPunt, exports.warship, exports.triPunt, exports.pebbler, exports.puntTrapGuard];
exports.hewnPellet.UPGRADES_TIER_3 = [exports.hewnGunner, exports.moonburst, exports.autoHewnPellet, exports.hybridHewnPellet, exports.split, exports.hewnDouble, exports.triHewnPellet];
exports.hybridPellet.UPGRADES_TIER_3 = [exports.hybridBorer, exports.hybridPunt, exports.hybridHewnPellet, exports.hybridSail];
exports.autoPellet.UPGRADES_TIER_3 = [exports.autoBorer, exports.autoPunt, exports.autoHewnPellet, exports.autoSail, exports.pelletception, exports.autoGunner];
exports.pentaPellet.UPGRADES_TIER_4 = [exports.pentaBorer, exports.pentaPunt, exports.pentaHewnPellet];
exports.triBorer.UPGRADES_TIER_4 = [exports.pentaBorer];
exports.triPunt.UPGRADES_TIER_4 = [exports.pentaPunt];
exports.triHewnPellet.UPGRADES_TIER_4 = [exports.pentaHewnPellet];
exports.puntMini.UPGRADES_TIER_4 = [exports.puntStream];
// TRAPPER
exports.trapper.UPGRADES_TIER_2 = [exports.builder, exports.triTrapper, exports.flankTrap, exports.autoTrapper, exports.contagion, exports.megaTrapper, exports.swarmTrapper, exports.twinTrapper, exports.machineTrapper, exports.arsenal];
exports.trapper.UPGRADES_TIER_3 = [exports.musket, exports.undertrap, exports.overtrap, exports.trapGunner];
exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autoBuilder, exports.hybridBuilder, exports.engineer, exports.boomer, exports.twinBuilder, exports.fort, exports.flankBuilder, exports.swarmBuilder, exports.conq, exports.machineBuilder, exports.builderArtillery, exports.snipeBuilder, exports.invisibuilder];
exports.triTrapper.UPGRADES_TIER_3 = [exports.fortress, exports.hexaTrap, exports.builder3, exports.shuriken, exports.triContagion, exports.diver, exports.clover, exports.flankTriTrap, exports.triArsenal, exports.triMachTrapper];
exports.autoTrapper.UPGRADES_TIER_3 = [exports.autoBuilder, exports.mechaTrap, exports.autoContagion, exports.autoMegaTrapper, exports.autoTwinTrapper, exports.autoMachineTrapper, exports.trapperAutoTrapper];
exports.contagion.UPGRADES_TIER_3 = [exports.triContagion, exports.autoContagion, exports.droneContagion, exports.fort, exports.megaContagion, exports.plaguer, exports.swarmContagion, exports.thrower, exports.longContagion, exports.twinContagion, exports.diver];
exports.megaTrapper.UPGRADES_TIER_3 = [exports.construct, exports.gigaTrapper, exports.autoMegaTrapper, exports.megaContagion, exports.plaguer, exports.swarmMegaTrapper, exports.megaArsenal, exports.machMegaTrapper];
exports.swarmTrapper.UPGRADES_TIER_3 = [exports.swarmBuilder, exports.swarmMegaTrapper, exports.swarmContagion, exports.swarmTwinTrapper];
exports.twinTrapper.UPGRADES_TIER_3 = [exports.twinBuilder, exports.bulwark, exports.twinContagion, exports.swarmTwinTrapper, exports.bentTrapper, exports.doubleTrapper, exports.autoTwinTrapper];
exports.machineTrapper.UPGRADES_TIER_3 = [exports.machineBuilder, exports.blasterTrapper, exports.gatlingTrapper, exports.minitrap, exports.autoMachineTrapper, exports.machArsenal, exports.triMachTrapper, exports.machMegaTrapper];
exports.arsenal.UPGRADES_TIER_3 = [exports.engineer, exports.machArsenal, exports.megaArsenal, exports.triArsenal];
exports.hexaTrap.UPGRADES_TIER_4 = [exports.autoHexaTrap, exports.octoTrap, exports.hexaContagion];
exports.boomer.UPGRADES_TIER_4 = [exports.bentBoomer, exports.boomer3, exports.boomerEngineer];
exports.gigaTrapper.UPGRADES_TIER_4 = [exports.teraTrapper, exports.megaConstruct, exports.gigaArsenal];
exports.twinTrapper.UPGRADES_TIER_4 = [exports.twinTrapperConq];
exports.builder.UPGRADES_TIER_4 = [exports.twinTrapperConq];
exports.triTrapper.UPGRADES_TIER_4 = [exports.tripleTwinTrapper];
exports.triContagion.UPGRADES_TIER_4 = [exports.hexaContagion];
exports.builder.UPGRADES_TIER_4 = [exports.miniBuilder];
exports.construct.UPGRADES_TIER_4 = [exports.megaConstruct, exports.megaEngineer, exports.constructArtillery];
exports.engineer.UPGRADES_TIER_4 = [exports.twinEngineer, exports.snipeEngineer, exports.machEngineer, exports.flankEngineer, exports.poundEngineer, exports.megaEngineer, exports.engineer3, exports.operator, exports.boomerEngineer];
exports.fortress.UPGRADES_TIER_4 = [exports.moreFortress];
exports.megaArsenal.UPGRADES_TIER_4 = [exports.megaEngineer, exports.gigaArsenal];
exports.machArsenal.UPGRADES_TIER_4 = [exports.triMachArsenal];
exports.triMachTrapper.UPGRADES_TIER_4 = [exports.triMachArsenal];
exports.triArsenal.UPGRADES_TIER_4 = [exports.triMachArsenal];
// SMASHER
exports.smash.UPGRADES_TIER_3 = [exports.megaSmash, exports.spike, exports.autoSmash, exports.landmine, exports.jumpSmash];
exports.landmine.UPGRADES_TIER_4 = [exports.invisispike, exports.megamine];
exports.spike.UPGRADES_TIER_4 = [exports.invisispike, exports.chainsaw];
exports.megaSmash.UPGRADES_TIER_4 = [exports.megamine, exports.gigaSmash];
// SINGLE
exports.single.UPGRADES_TIER_4 = [exports.twinSingle, exports.sniperSingle, exports.machineSingle, exports.flankSingle, exports.autoSingle, exports.hybridSingle];