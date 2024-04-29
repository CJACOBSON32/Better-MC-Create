ServerEvents.recipes(event => {
	event.remove([
		{ output: "waystones:warp_stone" },
		{ output: "waystones:warp_dust" },
		{ output: "waystones:warp_scroll" },
		{ output: "waystones:bound_scroll" },
		{ output: "waystones:return_scroll" }
	]);
	
	event.shaped("waystones:warp_stone",
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			'A': "aether:enchanted_gravitite",
			'B': "minecraft:ender_eye",
			'C': "deeperdarker:soul_crystal"
		}
	);

	event.shapeless("waystones:warp_dust",
		[
			'minecraft:ender_pearl',
			'deeperdarker:soul_dust'
		]
	);

	// Scrolls
	event.shaped("3x waystones:warp_scroll",
		[
			'ACA',
			'ABA',
			'DDD'
		],
		{
			'A': "waystones:warp_dust",
			'B': "minecraft:ender_eye",
			'C': "minecraft:gold_nugget",
			'D': "minecraft:paper"
		}
	);

	event.shaped("3x waystones:bound_scroll",
		[
			'CCC',
			'ABA',
			'DDD'
		],
		{
			'A': "waystones:warp_dust",
			'B': "minecraft:ender_eye",
			'C': "minecraft:gold_nugget",
			'D': "minecraft:paper"
		}
	);

	event.shaped("3x waystones:return_scroll",
		[
			'   ',
			'ACA',
			'DDD'
		],
		{
			'A': "minecraft:ender_pearl",
			'C': "minecraft:gold_nugget",
			'D': "minecraft:paper"
		}
	);
});