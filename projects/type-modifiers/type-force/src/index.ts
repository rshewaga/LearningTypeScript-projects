// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

function createCharacter(
	name: string,
	mutations: (keyof typeof mutationsLibrary)[]
) {
	const character: Character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

interface DuelInput {
	mutations: (keyof typeof mutationsLibrary)[];
	name: string;
}

export function duel(good: DuelInput, bad: DuelInput) {
	const hero: Character = createCharacter(good.name, good.mutations);
	const villain: Character = createCharacter(bad.name, bad.mutations);

	if (hero.power / villain.toughness > villain.power / hero.toughness) {
		return ["hero", hero] as const;
	} else {
		return ["villain", villain] as const;
	}
}
