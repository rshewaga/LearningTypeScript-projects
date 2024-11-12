// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function shallowDifferences(
	a: string[],
	b: string[]
): undefined | (string | undefined)[] {
	if (a.length != b.length) return undefined;

	let res: (string | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i] == b[i]) res.push(a[i]);
		else res.push(undefined);
	}

	return res;
}
