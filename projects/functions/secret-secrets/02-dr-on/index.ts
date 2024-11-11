// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (input: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
): Cipher {
	return (text: string): string => {
		let result = "";

		for (const character of text) {
			if ("aeiouAEIOU".indexOf(character) != -1) {
				result += onVowel(character);
			} else if (
				"bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".indexOf(character) != -1
			) {
				result += onConsonant(character);
			} else {
				result += onPunctuation(character);
			}
		}

		return result;
	};
}
