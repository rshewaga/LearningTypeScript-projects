// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type Settings = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export type ReturnType = (text: string) => string | undefined;

export function createCodeCracker(settings: Settings): ReturnType {
	return (text: string): string | undefined => {
		for (let i = 0; i < settings.attempts; i += 1) {
			let guess: string = settings.makeGuess(text, i);
			if (settings.validateGuess(guess)) {
				return guess;
			}
		}
		return undefined;
	};
}
