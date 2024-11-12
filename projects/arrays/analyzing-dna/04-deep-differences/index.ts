// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(
	a: string[][],
	b: string[][]
): ((string | undefined)[] | undefined)[] {
	let res: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length != b[i].length) {
			res.push(undefined);
			continue;
		}

		res[i] = [];

		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] != b[i][j]) res[i]?.push(undefined);
			else res[i]?.push(a[i][j]);
		}
	}

	return res;
}
