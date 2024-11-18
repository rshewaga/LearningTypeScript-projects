// Write your collectTreasure function here! ✨
// You'll need to export it so the tests can run it.

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (object: Content) => object is Fake,
	isReal: (object: Content) => object is Real
) {
	let fakes: Fake[] = [];
	let reals: Real[] = [];
	let scraps: Content[] = [];

	function recurse(data: Buried<Content>) {
		const collected = collectTreasure(data, isFake, isReal);

		fakes.push(...collected.fake);
		reals.push(...collected.real);
		scraps.push(...collected.scrap);
	}

	if (buried instanceof Array) {
		for (const data of buried) {
			recurse(data);
		}
	} else {
		switch (buried.type) {
			case "treasure":
				if (isFake(buried.content)) {
					fakes.push(buried.content);
				} else if (isReal(buried.content)) {
					reals.push(buried.content);
				} else {
					scraps.push(buried.content);
				}
				break;

			case "tunnels":
				for (const entrance of buried.entrances) {
					recurse(entrance);
				}
				break;

			case "catacomb":
				recurse(buried.inside);
				break;
		}
	}

	return {
		fake: fakes,
		real: reals,
		scrap: scraps,
	};
}

export interface Catacomb<T> {
	inside: Buried<T>;
	type: "catacomb";
}

export interface TunnelSystem<T> {
	entrances: Buried<T>[];
	type: "tunnels";
}

export interface Treasure<T> {
	content: T;
	type: "treasure";
}

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;
