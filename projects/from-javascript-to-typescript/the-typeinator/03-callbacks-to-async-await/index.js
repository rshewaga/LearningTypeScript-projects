// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 1000);
	});
	await promise;

	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase) {
	let promise = checkEmotion(knownEmotions, newEmotion);
	let result = await promise;

	if (!result)
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);

	return `"${phrase}" (${newEmotion})`;
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
