// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export function createCipher(
	cipher: (input: string) => string
): (text: string) => string {
	return (text: string): string => {
		let result: string = "";

		for (let char of text) {
			result += cipher(char);
		}

		return result;
	};
}
