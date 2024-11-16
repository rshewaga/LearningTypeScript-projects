// Write your classes here! ✨
// You'll need to export them so the tests can run them.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	protected abstract readonly name: string;
	#consumed: Consumed[];

	constructor() {
		this.#consumed = [];
	}

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower(): number {
		let power: number = this.#consumed.length;

		// for each previously consumed opponent, sum its power
		this.#consumed.forEach((victim) => {
			power += this.getPowerFrom(victim);
		});

		return power;
	}

	protected abstract getPowerFrom(opponent: Consumed): number;
	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	protected name = "Demon";

	protected getPowerFrom(opponent: Consumed): number {
		return opponent.evil ? opponent.power / 2 : opponent.power * 2;
	}
	protected isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	protected name: string;
	#evil: boolean;

	constructor(_name: string, _evil: boolean) {
		super();
		this.name = _name;
		this.#evil = _evil;
	}

	protected getPowerFrom(opponent: Consumed): number {
		return this.#evil == opponent.evil ? opponent.power * 2 : opponent.power;
	}
	protected isEvil(): boolean {
		return this.#evil;
	}
}
