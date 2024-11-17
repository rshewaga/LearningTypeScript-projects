import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.

export interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(input: string): Character {
	const parsed = JSON.parse(input);

	const result: Character = {
		name: parsed.name,
		powers: parsed.powers,
		side: parsed.side,
	};

	console.log(`I am ${result.name}.`);
	console.log(`My powers are: ${result.powers.join(", ")}.`);
	console.log(`I am ${result.side}.`);

	return result;
}
