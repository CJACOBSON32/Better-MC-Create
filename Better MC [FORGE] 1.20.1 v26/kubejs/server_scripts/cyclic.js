ServerEvents.recipes(event => {
	// Generate a list of all armor and tool recipes
	const materials = ['amethyst', 'copper', 'emerald', 'sandstone', 'netherbrick'];
	const types = ['helmet', 'chestplate', 'leggings', 'boots', 'pickaxe', 'sword', 'axe', 'hoe', 'shovel', 'sword'];
	const outputs = [];
	for (const material of materials) {
		for (const type of types) {
			outputs.push({ output: `cyclic:${material}_${type}` });
		}
	}

	outputs.push(
		{ output: 'apotheosis:potion_charm' }
	);

	console.info(outputs);
	
	event.remove({
		mod: 'cyclic',
		not: outputs
	});
});