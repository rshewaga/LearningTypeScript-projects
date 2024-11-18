// Write your zip function here! ✨
// You'll need to export it so the tests can run it.

export function zip<T, U>(a: T[], b: U[]): (T | U)[] {
	let res: (T | U)[] = [];

	for (let i = 0; i < a.length && i < b.length; i++) {
		res.push(a[i]);
		res.push(b[i]);
	}

	if (a.length > b.length) {
		res = res.concat(a.slice(b.length));
	} else if (b.length > a.length) {
		res = res.concat(b.slice(a.length));
	}
	// else same size, already handled

	return res;
}
