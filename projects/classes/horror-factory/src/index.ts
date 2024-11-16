// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.
// Write your classes here! ✨
// You'll need to export them so the tests can run them.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface ConstructorObject {
	name: string;
	getPowerFrom: (opponent: Consumed) => number;
	isEvil: () => boolean;
}

export class Horror {
	readonly #name: string;
	#consumed: Consumed[];

	constructor(input: ConstructorObject) {
		this.#consumed = [];
		this.#name = input.name;
		this.getPowerFrom = input.getPowerFrom;
		this.isEvil = input.isEvil;
	}

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.#name,
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

	getPowerFrom: (opponent: Consumed) => number;
	isEvil: () => boolean;
}

export function createDemon(): Horror {
	return new Horror({
		name: "Demon",
		getPowerFrom: (opponent: Consumed): number => {
			return opponent.evil ? opponent.power / 2 : opponent.power * 2;
		},
		isEvil: (): boolean => {
			return true;
		},
	});
}

export function createSorcerer(_name: string, _evil: boolean): Horror {
	return new Horror({
		name: _name,
		getPowerFrom: (opponent: Consumed): number => {
			return _evil == opponent.evil ? opponent.power * 2 : opponent.power;
		},
		isEvil: (): boolean => {
			return _evil;
		},
	});
}
