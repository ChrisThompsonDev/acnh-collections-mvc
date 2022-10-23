//https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide/22757882/bug-insect-locations-times-month-day-list-critterpedia

const insects = [
    {
        id: 'insectsCommonButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/common_butterfly.webp",
        title: "Common Butterfly",
    },
    {
        id: 'insectsYellowButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/yellow_butterfly.webp",
        title: "Yellow Butterfly",
    },
    {
        id: 'insectsTigerButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/tiger_butterfly.webp",
        title: "Tiger Butterfly",
    },
    {
        id: 'insectsPeacockButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/peacock_butterfly.webp",
        title: "Peacock Butterfly",
    },
    {
        id: 'insectsCommonBluebottle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/common_bluebottle.webp",
        title: "Common Bluebottle",
    },
    {
        id: 'insectsPaperKiteButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/paper_kite_butterfly.webp",
        title: "Paper Kite Butterfly",
    },
    {
        id: 'insectsGreatPurpleEmperor', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/great_purple_emperor.webp",
        title: "Great Purple Emperor",
    },
    {
        id: 'insectsMonachButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/monarch_butterfly.webp",
        title: "Monach Butterfly",
    },
    {
        id: 'insectsEmperorButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/emperor_butterfly.webp",
        title: "Emperor Butterfly",
    },
    {
        id: 'insectsAgriasButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/agrias_butterfly.webp",
        title: "Agrias Butterfly",
    },
    {
        id: 'insectsRajaBrookesBirdwing', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/rajah_brookes_birdwing.webp",
        title: "Raja Brooke's Birdwing",
    },
    {
        id: 'insectsQueenAlexandrasBirdwing', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/queen_alexandras_birdwing.webp",
        title: "Queen Alexandra's Birdwing",
    },
    {
        id: 'insectsMoth', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/moth.webp",
        title: "Moth",
    },
    {
        id: 'insectsAtlasMoth', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/atlas_moth.webp",
        title: "Atlas Moth",
    },
    {
        id: 'insectsMadagascanSunsetMoth', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/madagascan_sunset_moth.webp",
        title: "Madagascan Sunset Moth",
    },
    {
        id: 'insectsLongLocust', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/long_locust.webp",
        title: "Long Locust",
    },
    {
        id: 'insectsMigratoryLocust', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/migratory_locust.webp",
        title: "Migratory Locust",
    },
    {
        id: 'insectsRiceGrasshopper', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/rice_grasshopper.webp",
        title: "Rice Grasshopper",
    },
    {
        id: 'insectsGrasshopper', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/grasshopper.webp",
        title: "Grasshopper",
    },
    {
        id: 'insectsCricket', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/cricket.webp",
        title: "Cricket",
    },
    {
        id: 'insectsBellCricket', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/bell_cricket.webp",
        title: "Bell Cricket",
    },
    {
        id: 'insectsMantis', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/mantis.webp",
        title: "Mantis",
    },
    {
        id: 'insectsOrchidMantis', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/orchid_mantis.webp",
        title: "Orchid Mantis",
    },
    {
        id: 'insectsHoneybee', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/honeybee.webp",
        title: "Honeybee",
    },
    {
        id: 'insectsWasp', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/wasp.webp",
        title: "Wasp",
    },
    {
        id: 'insectsBrownCicada', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/brown_cicada.webp",
        title: "Brown Cicada",
    },
    {
        id: 'insectsRobustCicada', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/robust_cicada.webp",
        title: "Robust Cicada",
    },
    {
        id: 'insectsGiantCicada', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/giant_cicada.webp",
        title: "Giant Cicada",
    },
    {
        id: 'insectsWalkerCicada', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/walker_cicada.webp",
        title: "Walker Cicada",
    },
    {
        id: 'insectsEveningCicada', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/evening_cicada.webp",
        title: "Evening Cicada",
    },
    {
        id: 'insectsCicadaShell', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/cicada_shell.webp",
        title: "Cicada Shell",
    },
    {
        id: 'insectsRedDragonfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/red_dragonfly.webp",
        title: "Red Dragonfly",
    },
    {
        id: 'insectsDarnerDragonfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/darner_dragonfly.webp",
        title: "Darner Dragonfly",
    },
    {
        id: 'insectsBandedDragonfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/banded_dragonfly.webp",
        title: "Banded Dragonfly",
    },
    {
        id: 'insectsDamselfly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/damselfly.webp",
        title: "Damselfly",
    },
    {
        id: 'insectsFirefly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/firefly.webp",
        title: "Firefly",
    },
    {
        id: 'insectsMoleCricket', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/mole_cricket.webp",
        title: "Mole Cricket",
    },
    {
        id: 'insectsPondskater', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/pondskater.webp",
        title: "Pondskater",
    },
    {
        id: 'insectsDivingBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/diving_beetle.webp",
        title: "Diving Beetle",
    },
    {
        id: 'insectsGiantWaterBug', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/giant_water_bug.webp",
        title: "Giant Water Bug",
    },
    {
        id: 'insectsStinkbug', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/stinkbug.webp",
        title: "Stinkbug",
    },
    {
        id: 'insectsMan-facedStinkBug', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/man-faced_stink_bug.webp",
        title: "Man-faced Stink Bug",
    },
    {
        id: 'insectsLadybug', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/ladybug.webp",
        title: "Ladybug",
    },
    {
        id: 'insectsTigerBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/tiger_beetle.webp",
        title: "Tiger Beetle",
    },
    {
        id: 'insectsJewelBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/jewel_beetle.webp",
        title: "Jewel Beetle",
    },
    {
        id: 'insectsViolinBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/violin_beetle.webp",
        title: "Violin Beetle",
    },
    {
        id: 'insectsCitrusLong-hornedBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/citrus_long-horned_beetle.webp",
        title: "Citrus Long-horned Beetle",
    },
    {
        id: 'insectsRosaliaBatesiBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/rosalia_batesi_beetle.webp",
        title: "Rosalia Batesi Beetle",
    },
    {
        id: 'insectsBlueWeevilBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/blue_weevil_beetle.webp",
        title: "Blue Weevil Beetle",
    },
    {
        id: 'insectsDungBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/dung_beetle.webp",
        title: "Dung Beetle",
    },
    {
        id: 'insectsEarth-boringDungBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/earth-boring_dung_beetle.webp",
        title: "Earth-boring Dung Beetle",
    },
    {
        id: 'insectsScarabBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/scarab_beetle.webp",
        title: "Scarab Beetle",
    },
    {
        id: 'insectsDroneBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/drone_beetle.webp",
        title: "Drone Beetle",
    },
    {
        id: 'insectsGoliathBeetle', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/goliath_beetle.webp",
        title: "Goliath Beetle",
    },
    {
        id: 'insectsSawStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/saw_stag.webp",
        title: "Saw Stag",
    },
    {
        id: 'insectsMiyamaStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/miyama_stag.webp",
        title: "Miyama Stag",
    },
    {
        id: 'insectsGiantStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/giant_stag.webp",
        title: "Giant Stag",
    },
    {
        id: 'insectsRainbowStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/rainbow_stag.webp",
        title: "Rainbow Stag",
    },
    {
        id: 'insectsCyclommatusStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/cyclommatus_stag.webp",
        title: "Cyclommatus Stag",
    },
    {
        id: 'insectsGoldenStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/golden_stag.webp",
        title: "Golden Stag",
    },
    {
        id: 'insectsGiraffeStag', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/giraffe_stag.webp",
        title: "Giraffe Stag",
    },
    {
        id: 'insectsHornedDynastid', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/horned_dynastid.webp",
        title: "Horned Dynastid",
    },
    {
        id: 'insectsHornedAtlas', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/horned_atlas.webp",
        title: "Horned Atlas",
    },
    {
        id: 'insectsHornedElephant', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/horned_elephant.webp",
        title: "Horned Elephant",
    },
    {
        id: 'insectsHornedHerucles', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/horned_hercules.webp",
        title: "Horned Herucles",
    },
    {
        id: 'insectsWalkingStick', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/walking_stick.webp",
        title: "Walking Stick",
    },
    {
        id: 'insectsWalkingLeaf', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/walking_leaf.webp",
        title: "Walking Leaf",
    },
    {
        id: 'insectsBagworm', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/bagworm.webp",
        title: "Bagworm",
    },
    {
        id: 'insectsAnt', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/ant.webp",
        title: "Ant",
    },
    {
        id: 'insectsHermitCrab', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/hermit_crab.webp",
        title: "Hermit Crab",
    },
    {
        id: 'insectsWharfRoach', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/wharf_roach.webp",
        title: "Wharf Roach",
    },
    {
        id: 'insectsFly', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/fly.webp",
        title: "Fly",
    },
    {
        id: 'insectsMosquito', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/mosquito.webp",
        title: "Mosquito",
    },
    {
        id: 'insectsFlea', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/flea.webp",
        title: "Flea",
    },
    {
        id: 'insectsSnail', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/snail.webp",
        title: "Snail",
    },
    {
        id: 'insectsPillBug', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/pill_bug.webp",
        title: "Pill Bug",
    },
    {
        id: 'insectsCentipede', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/centipede.webp",
        title: "Centipede",
    },
    {
        id: 'insectsSpider', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/spider.webp",
        title: "Spider",
    },
    {
        id: 'insectsTarantula', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/tarantula.webp",
        title: "Tarantula",
    },
    {
        id: 'insectsScorpion', 
        img: "https://acnhcritterpedia.com/images/critters/bug/webp/scorpion.webp",
        title: "Scorpion",
    },
    
]
module.exports = insects