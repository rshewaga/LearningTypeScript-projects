// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Ingredients;
export type RecipeFunc = (
	ingredients: Ingredients
) => RecipeFailure | RecipeSuccess;
export type Ingredients = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};
export type RecipeFailure = {
	succeeded: false;
};
export type RecipeSuccess = {
	succeeded: true;
	newStock: Ingredients;
};

export type Kitchen = {
	dirt: number;
	stock: Ingredients;
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: RecipeFunc) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	return {
		dirt: 0,
		stock: {
			breads: 0,
			fruits: 0,
			sauces: 0,
			vegetables: 0,
		},
		announce() {
			return [
				`I have ${this.dirt} much dirt`,
				`${budget} budget`,
				`${this.stock.breads} bread(s)`,
				`${this.stock.fruits} fruit(s)`,
				`${this.stock.sauces} sauce(s)`,
				`and ${this.stock.vegetables} vegetable(s).`,
			].join(", ");
		},
		clean(time?: number) {
			this.dirt = cleaner(this.dirt, time);
		},
		purchase(expense: number) {
			if (budget < expense) {
				return false;
			}

			const ingredients = supplier(expense);

			this.stock.breads += ingredients.breads;
			this.stock.fruits += ingredients.fruits;
			this.stock.sauces += ingredients.sauces;
			this.stock.vegetables += ingredients.vegetables;

			budget -= expense;

			return true;
		},
		prepare(recipe: RecipeFunc) {
			if (this.dirt >= 100) {
				return false;
			}

			const result = recipe(this.stock);
			this.dirt += 1;

			if (result.succeeded) {
				this.stock = result.newStock;
			}

			return result.succeeded;
		},
	};
}
