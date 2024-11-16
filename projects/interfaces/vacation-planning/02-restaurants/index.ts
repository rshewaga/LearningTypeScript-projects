// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.

interface Restaurant {
	city: string;
	name: string;
}

interface GroupedRestaurants {
	[i: string]: string[];
}

export function groupRestaurants(
	restaurants: Restaurant[]
): GroupedRestaurants {
	let res: GroupedRestaurants = {};

	restaurants.forEach((element) => {
		if (res[element.city]) res[element.city].push(element.name);
		else res[element.city] = [element.name];
	});

	return res;
}

/*

...the function would output the following object:

```js
{
  Troy: ["Muddaddy Flats", "Nighthalks"],
  Albany: ["Bombers"],
}
```
*/
