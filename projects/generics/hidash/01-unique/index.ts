// Write your unique function here! ✨
// You'll need to export it so the tests can run it.

export function unique<T>(...items: T[][]): T[] {
	let res: T[] = [];

	items.forEach((arr) => {
		arr.forEach((item) => {
			if (!res.includes(item)) {
				res.push(item);
			}
		});
	});

	return res;
}
