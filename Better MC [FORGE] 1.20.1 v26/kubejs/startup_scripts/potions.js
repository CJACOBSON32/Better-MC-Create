StartupEvents.registry('item', event => {
	event.create('sky_tear')
		.displayName('Sky Tear')
		.unstackable()
		.glow(true);
});

MoreJSEvents.registerPotionBrewing(event => {
	event.removeByPotion(null, null, "cyclic:flight");
	event.removeByPotion(null, null, "apotheosis:flying");
	event.addPotionBrewing("kubejs:sky_tear", "apotheosis:levitation", "apotheosis:flying");
});