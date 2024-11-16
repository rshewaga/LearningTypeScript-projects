// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

interface City {
	catchphrase?: string;
	coordinates: {
		north: [number, number, number];
		west: [number, number, number];
	};
	name: string;
}

export function describeCity(city: City): string {
	let res: string = "";
	res += `${city.name}, New York`;

	if (city.catchphrase) res += `\n* "${city.catchphrase}"`;

	let coords = {
		n1: city.coordinates.north[0].toString().padStart(2, "0"),
		n2: city.coordinates.north[1].toString().padStart(2, "0"),
		n3: city.coordinates.north[2].toString().padStart(2, "0"),
		w1: city.coordinates.west[0].toString().padStart(2, "0"),
		w2: city.coordinates.west[1].toString().padStart(2, "0"),
		w3: city.coordinates.west[2].toString().padStart(2, "0"),
	};

	res += `\n* Located at ${coords.n1}°${coords.n2}'${coords.n3}"N ${coords.w1}°${coords.w2}'${coords.w3}"W`;

	return res;
}
