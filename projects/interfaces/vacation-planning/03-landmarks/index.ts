// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

interface Base {
	name: string;
}

interface Mountain extends Base {
	height: number;
	type: "mountain";
}

interface Waterfall extends Base {
	height: number;
	type: "waterfall";
}

interface Park extends Base {
	acres: number;
	type: "park";
}

interface Lake extends Base {
	miles: number;
	type: "lake";
}

interface River extends Base {
	length: number;
	depth: number;
	type: "river";
}

interface Fort extends Base {
	type: "fort";
}

interface Lighthouse extends Base {
	lit: number;
	height: number;
	type: "lighthouse";
}

export type Landmark =
	| Mountain
	| Waterfall
	| Park
	| Lake
	| River
	| Fort
	| Lighthouse;

export function describeLandmark(landmark: Landmark): string {
	let res: string = "";

	res = `${landmark.name} is a ${landmark.type} in Upstate New York.`;

	switch (landmark.type) {
		case "mountain":
			res += `\nIts peak is ${landmark.height} feet high.`;
			break;
		case "waterfall":
			res += `\nIt is ${landmark.height} feet high.`;
			break;
		case "park":
			res += `\nIt covers ${landmark.acres} square acres.`;
			break;
		case "lake":
			res += `\nIt covers ${landmark.miles} square miles of water.`;
			break;
		case "river":
			res += `\nIt flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "lighthouse":
			res += `\nIt was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
	}

	return res;
}
