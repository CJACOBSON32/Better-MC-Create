ServerEvents.recipes(event => {
	event.remove([
		{ output: 'storagenetwork:master' },
		{ output: 'storagenetwork:kabel' },
		{ output: 'storagenetwork:inventory' }
	]);

	event.shaped('storagenetwork:master',
		[
			'ACA',
			'BDB',
			'ABA'
		],
		{
			'A': 'cyclic:gem_amber',
			'B': 'storagenetwork:kabel',
			'C': 'minecraft:shulker_box',
			'D': 'cyclic:gem_obsidian'
		}
	);

	event.shaped('storagenetwork:kabel',
		[
			'ABA',
			'C C',
			'ABA'
		],
		{
			'A': 'minecraft:stone_slab',
			'B': 'minecraft:quartz',
			'C': '#forge:ingots/iron'
		}
	);

	event.shaped('storagenetwork:inventory',
		[
			'ABA',
			'BCB',
			'DBD'
		],
		{
			'A': 'minecraft:ender_pearl',
			'B': 'storagenetwork:kabel',
			'C': 'minecraft:dropper',
			'D': '#forge:nuggets/gold'
		}
	);
});