player.onChat("\"fly\"", function () {
    mobs.applyEffect(LEVITATION, mobs.target(NEAREST_PLAYER), 2, 1)
})
player.onChat("jump", function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(NEAREST_PLAYER), 10, 1)
    blocks.fill(
    FIRE,
    pos(-5, 0, -5),
    pos(5, 0, 5),
    FillOperation.Replace
    )
})
player.onChat("\"night\"", function () {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
    mobs.applyEffect(NIGHT_VISION, mobs.target(NEAREST_PLAYER), 10, 120)
})
player.onItemInteracted(APPLE, function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 10, 120)
})
