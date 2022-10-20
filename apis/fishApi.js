// https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide/22759538/fish-locations-times-month-day-list-critterpedia

// https://acnhcritterpedia.com/

const fish = [
    {
        id: 'fishBitterling', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/bitterling.webp",
        title: "Bitterling",
    },
    {
        id: 'fishPaleChub', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/pale_chub.webp",
        title: "Pale Chub",
    },
    {
        id: 'fishCrucianCarp', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/crucian_carp.webp",
        title: "Crucian Carp",
    },
    {
        id: 'fishDace', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/dace.webp",
        title: "Dace",
    },
    {
        id: 'fishCarp', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/carp.webp",
        title: "Carp",
    },
    {
        id: 'fishKoi', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/koi.webp",
        title: "Koi",
    },
    {
        id: 'fishGoldfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/goldfish.webp",
        title: "Goldfish",
    },
    {
        id: 'fishPop-eyedGoldfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/pop-eyed_goldfish.webp",
        title: "Pop-eyed Goldfish",
    },
    {
        id: 'fishRanchuGoldfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/ranchu_goldfish.webp",
        title: "Ranchu Goldfish",
    },
    {
        id: 'fishKillifish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/killifish.webp",
        title: "Killifish",
    },
    {
        id: 'fishCrawfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/crawfish.webp",
        title: "Crawfish",
    },
    {
        id: 'fishSoft-shelledTurtle', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/soft-shelled_turtle.webp",
        title: "Soft-shelled Turtle",
    },
    {
        id: 'fishSnappingTurtle', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/snapping_turtle.webp",
        title: "Snapping Turtle",
    },
    {
        id: 'fishTadpole', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/tadpole.webp",
        title: "Tadpole",
    },
    {
        id: 'fishFrog', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/frog.webp",
        title: "Frog",
    },
    {
        id: 'fishFreshwaterGoby', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/freshwater_goby.webp",
        title: "Freshwater Goby",
    },
    {
        id: 'fishLoach', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/loach.webp",
        title: "Loach",
    },
    {
        id: 'fishCatfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/catfish.webp",
        title: "Catfish",
    },
    {
        id: 'fishGiantSnakehead', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/giant_snakehead.webp",
        title: "Giant Snakehead",
    },
    {
        id: 'fishBluegill', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/bluegill.webp",
        title: "Bluegill",
    },
    {
        id: 'fishYellowPerch', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/yellow_perch.webp",
        title: "Yellow Perch",
    },
    {
        id: 'fishBlackBass', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/black_bass.webp",
        title: "Black Bass",
    },
    {
        id: 'fishTilapia', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/tilapia.webp",
        title: "Tilapia",
    },
    {
        id: 'fishPike', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/pike.webp",
        title: "Pike",
    },
    {
        id: 'fishPondSmelt', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/pond_smelt.webp",
        title: "Pond Smelt",
    },
    {
        id: 'fishSweetfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/sweetfish.webp",
        title: "Sweetfish",
    },
    {
        id: 'fishCherrySalmon', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/cherry_salmon.webp",
        title: "Cherry Salmon",
    },
    {
        id: 'fishChar', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/char.webp",
        title: "Char",
    },
    {
        id: 'fishGoldenTrout', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/golden_trout.webp",
        title: "Golden Trout",
    },
    {
        id: 'fishStringfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/stringfish.webp",
        title: "Stringfish",
    },
    {
        id: 'fishSalmon', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/salmon.webp",
        title: "Salmon",
    },
    {
        id: 'fishKingSalmon', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/king_salmon.webp",
        title: "King Salmon",
    },
    {
        id: 'fishMittenCrab', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/mitten_crab.webp",
        title: "Mitten Crab",
    },
    {
        id: 'fishGuppy', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/guppy.webp",
        title: "Guppy",
    },
    {
        id: 'fishNibbleFish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/nibble_fish.webp",
        title: "Nibble Fish",
    },
    {
        id: 'fishAngelfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/angelfish.webp",
        title: "Angelfish",
    },
    {
        id: 'fishBetta', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/betta.webp",
        title: "Betta",
    },
    {
        id: 'fishNeonTetra', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/neon_tetra.webp",
        title: "Neon Tetra",
    },
    {
        id: 'fishRainbowfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/rainbowfish.webp",
        title: "Rainbowfish",
    },
    {
        id: 'fishPiranha', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/piranha.webp",
        title: "Piranha",
    },
    {
        id: 'fishArowana', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/arowana.webp",
        title: "Arowana",
    },
    {
        id: 'fishDorado', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/dorado.webp",
        title: "Dorado",
    },
    {
        id: 'fishGar', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/gar.webp",
        title: "Gar",
    },
    {
        id: 'fishArapaima', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/arapaima.webp",
        title: "Arapaima",
    },
    {
        id: 'fishSaddledBichir', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/saddled_bichir.webp",
        title: "Saddled Bichir",
    },
    {
        id: 'fishSturgeon', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/sturgeon.webp",
        title: "Sturgeon",
    },
    {
        id: 'fishSeaButterfly', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/sea_butterfly.webp",
        title: "Sea Butterfly",
    },
    {
        id: 'fishSeaHorse', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/seahorse.webp",
        title: "Sea Horse",
    },
    {
        id: 'fishClownFish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/clownfish.webp",
        title: "Clown Fish",
    },
    {
        id: 'fishSurgeonfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/surgeonfish.webp",
        title: "Surgeonfish",
    },
    {
        id: 'fishButterflyFish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/butterfly_fish.webp",
        title: "Butterfly Fish",
    },
    {
        id: 'fishNapoleonfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/napoleonfish.webp",
        title: "Napoleonfish",
    },
    {
        id: 'fishZebraTurkeyfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/zebra_turkeyfish.webp",
        title: "Zebra Turkeyfish",
    },
    {
        id: 'fishBlowfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/blowfish.webp",
        title: "Blowfish",
    },
    {
        id: 'fishPufferFish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/puffer_fish.webp",
        title: "Puffer Fish",
    },
    {
        id: 'fishAnchovy', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/anchovy.webp",
        title: "Anchovy",
    },
    {
        id: 'fishHorseMackerel', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/horse_mackerel.webp",
        title: "Horse Mackerel",
    },
    {
        id: 'fishBarredKnifejaw', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/barred_knifejaw.webp",
        title: "Barred Knifejaw",
    },
    {
        id: 'fishSeaBass', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/sea_bass.webp",
        title: "Sea Bass",
    },
    {
        id: 'fishRedSnapper', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/red_snapper.webp",
        title: "Red Snapper",
    },
    {
        id: 'fishDab', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/dab.webp",
        title: "Dab",
    },
    {
        id: 'fishOliveFlounder', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/olive_flounder.webp",
        title: "Olive Flounder",
    },
    {
        id: 'fishSquid', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/squid.webp",
        title: "Squid",
    },
    {
        id: 'fishMorayEel', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/moray_eel.webp",
        title: "Moray Eel",
    },
    {
        id: 'fishRibbonEel', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/ribbon_eel.webp",
        title: "Ribbon Eel",
    },
    {
        id: 'fishTuna', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/tuna.webp",
        title: "Tuna",
    },
    {
        id: 'fishBlueMarlin', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/blue_marlin.webp",
        title: "Blue Marlin",
    },
    {
        id: 'fishGiantTrevally', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/giant_trevally.webp",
        title: "Giant Trevally",
    },
    {
        id: 'fishMahi-mahi', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/mahi-mahi.webp",
        title: "Mahi-mahi",
    },
    {
        id: 'fishOceanSunfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/ocean_sunfish.webp",
        title: "Ocean Sunfish",
    },
    {
        id: 'fishRay', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/ray.webp",
        title: "Ray",
    },
    {
        id: 'fishSawShark', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/saw_shark.webp",
        title: "Saw Shark",
    },
    {
        id: 'fishHammerheadShark', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/hammerhead_shark.webp",
        title: "Hammerhead Shark",
    },
    {
        id: 'fishGreatWhiteShark', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/great_white_shark.webp",
        title: "Great White Shark",
    },
    {
        id: 'fishWhaleShark', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/whale_shark.webp",
        title: "Whale Shark",
    },
    {
        id: 'fishSuckerfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/suckerfish.webp",
        title: "Suckerfish",
    },
    {
        id: 'fishFootballFish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/football_fish.webp",
        title: "Football Fish",
    },
    {
        id: 'fishOarfish', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/oarfish.webp",
        title: "Oarfish",
    },
    {
        id: 'fishBarreleye', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/barreleye.webp",
        title: "Barreleye",
    },
    {
        id: 'fishCoelacanth', 
        img: "https://acnhcritterpedia.com/images/critters/fish/webp/coelacanth.webp",
        title: "Coelacanth",
    },
    
]
module.exports = fish