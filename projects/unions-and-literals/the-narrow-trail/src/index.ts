export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "Food" | "Water" | undefined = undefined;
	let day: number = 1;
	let food: number = 5;
	let water: number = 5;

	for (; day <= 7; day++) {
		let roll: number = Math.floor(Math.random() * 6 + 1);

		switch (roll) {
			case 1:
				availableResource = "Food";
				break;
			case 2:
				availableResource = "Water";
				break;
			case 3:
			case 4:
			case 5:
			case 6:
				if (!availableResource) {
					availableResource = roll % 2 ? "Water" : "Food";
				} else {
					if (availableResource == "Food") {
						food += roll;
					} else {
						water += roll;
					}
					availableResource = undefined;
				}
				break;
		}

		food--;
		water--;

		if (!(food && water)) {
			return false;
		}
	}

	return true;
}
