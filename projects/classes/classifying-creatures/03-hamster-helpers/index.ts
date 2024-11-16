// Write your type and classes here! ✨
// You'll need to export the classes so the tests can run them.

export abstract class SmallFurryPet {
	readonly species: string;
	protected happiness: number;

	constructor(_species: string) {
		this.species = _species;
		this.happiness = 0;
	}

	abstract eats(food?: SmallPetFood): boolean;
	isHappy() {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}

	dig(): void {
		this.happiness++;
	}

	eats(food?: SmallPetFood): boolean {
		return (
			food == "insects" ||
			food == "plants" ||
			food == "seeds" ||
			food == "vegetables"
		);
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}

	run() {
		this.happiness++;
	}

	eats(food?: SmallPetFood): boolean {
		return true;
	}
}

export type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";
