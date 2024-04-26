ServerEvents.recipes(event => {
	// Generate a list of all armor and tool recipes
	const materials = ['amethyst', 'copper', 'emerald', 'sandstone', 'netherbrick'];
	const types = ['helmet', 'chestplate', 'leggings', 'boots', 'pickaxe', 'sword', 'axe', 'hoe', 'shovel', 'sword', 'carrot', 'apple', ];
	const outputs = [];
	for (const material of materials) {
		for (const type of types) {
			outputs.push({ output: `cyclic:${material}_${type}` });
		}
	}

	outputs.push(
		{ output: 'apotheosis:potion_charm' },
		{ output: 'cyclic:soulstone' },
		{ output: 'cyclic:evoker_fang' },
		{ output: 'cyclic:ender_eye_reuse' },
		{ output: 'cyclic:ender_pearl_reuse' },
		{ output: 'cyclic:ender_pearl_mounted' },
		{ output: 'cyclic:boomerang_carry' },
		{ output: 'cyclic:boomerang_damage' },
		{ output: 'cyclic:boomerang_stun' },
		{ output: 'cyclic:heart' },
		{ output: 'cyclic:netherite_nugget' },
		{ output: 'cyclic:fireball' },
		{ output: 'cyclic:netherite_nugget' },
		{ output: 'cyclic:glove_climb' },
		
		// Scepters
		{ output: 'cyclic:ice_scepter' },
		{ output: 'cyclic:fire_scepter' },
		{ output: 'cyclic:lightning_scepter' },

		// Charms
		{ output: 'cyclic:charm_fire' },
		{ output: 'cyclic:antigravity' },
		{ output: 'cyclic:charm_wither' },
		{ output: 'cyclic:charm_void' },
		{ output: 'cyclic:charm_antidote' },

		// Quivers
		{ output: 'cyclic:quiver_damage' },
		{ output: 'cyclic:quiver_lightning' },
		
		{ output: 'cyclic:gem_obsidian' }
	);

	console.info(outputs);
	
	event.remove({
		mod: 'cyclic',
		not: outputs
	});

	// Alternate recipes
	event.shapeless("cyclic:gem_amber",
		[
			'minecraft:magma_block',
			'minecraft:fire_charge',
			'minecraft:redstone',
			'minecraft:honey_bottle'
		]
	);

	event.shapeless("cyclic:gem_obsidian",
		[
			'cyclic:gem_amber',
			'minecraft:obsidian',
			'minecraft:wither_rose',
			'minecraft:slime_ball'
		]
	);
});