ServerEvents.recipes(event => {
	event.remove([
		{ output: "sophisticatedbackpacks:backpack" },
		{ output: "sophisticatedbackpacks:upgrade_base" }
	]);
	
	event.shaped("sophisticatedbackpacks:backpack",
		[
			'ACA',
			'ADA',
			'BBB'
		],
		{
			'A': "minecraft:string",
			'B': "minecraft:leather",
			'C': "twilightforest:naga_scale",
			'D': "minecraft:shulker_box"
		}
	);

	event.shaped("sophisticatedbackpacks:upgrade_base",
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			'A': "minecraft:string",
			'B': "#forge:ingots/iron",
			'C': "minecraft:shulker_shell"
		}
	);
});