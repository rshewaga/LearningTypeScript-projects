// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.

export function pickMany<T, K extends keyof T>(object: T, keys: K[]): T[K][] {
	let res: T[K][] = [];

	for (const key of keys) {
		res.push(object[key]);
	}

	return res;
}
