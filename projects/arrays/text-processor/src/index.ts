// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(
	texts: string[],
	options: AlignmentOptions
): string[][] {
	let res: string[][] = [];

	// The alignment to use. If not set in input options, use left
	const align: "left" | "middle" | "right" =
		options.align != undefined ? options.align : "left";

	for (let i = 0; i < texts.length; i++) {
		let lineResult: string[] = [];

		let tokens: string[] = texts[i].split(" ");

		for (let j = 0; j < tokens.length; j++) {
			// Attempt to add the current token to the previous one, if it fits with a space in between
			if (
				lineResult.length == 0 ||
				lineResult[lineResult.length - 1].length + 1 + tokens[j].length <=
					options.width
			) {
				lineResult[lineResult.length - 1] += " " + tokens[j];
			} else {
				lineResult.push(tokens[j]);
			}
		}

		// For each of the lineResult entries, pad them as necessary to fit the alignment
		for (let j = 0; j < lineResult.length; j++) {
			let addedSpaces: number = 0;
			while (lineResult[j].length != options.width) {
				if (align == "left") {
					lineResult[j] += " ";
				} else if (align == "right") {
					lineResult[j] = " " + lineResult[j];
				} else {
					// centered, starting by adding to right
					if (addedSpaces % 2 == 0) {
						lineResult[j] += " ";
					} else {
						lineResult[j] = " " + lineResult[j];
					}
				}
				addedSpaces++;
			}
		}

		res.push(lineResult);
	}

	// This is returning the correct result but the test suite is showing extra elements in the res array equal
	// to the length of the input texts... not sure why.
	return res;
}
