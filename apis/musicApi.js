const music = [
    {
        id: "musicAgentKK",
        img: "https://acnhapi.com/v1/images/songs/1",
        title: "Agent K.K.",
    },
    {
        id: "musicAlohaKK",
        img: "https://acnhapi.com/v1/images/songs/2",
        title: "Aloha K.K.",
    },
    {
        id: "musicAnimalCity",
        img: "https://acnhapi.com/v1/images/songs/3",
        title: "Animal City",
    },
    {
        id: "musicBubblegumKK",
        img: "https://acnhapi.com/v1/images/songs/4",
        title: "Bubblegum K.K.",
    },
    {
        id: "musicCafeKK",
        img: "https://acnhapi.com/v1/images/songs/5",
        title: "Café K.K.",
    },
    {
        id: "musicComradeKK",
        img: "https://acnhapi.com/v1/images/songs/6",
        title: "Comrade K.K.",
    },
    {
        id: "musicDJKK",
        img: "https://acnhapi.com/v1/images/songs/7",
        title: "DJ K.K.",
    },
    {
        id: "musicDrivin",
        img: "https://acnhapi.com/v1/images/songs/8",
        title: "Drivin'",
    },
    {
        id: "musicFarewell",
        img: "https://acnhapi.com/v1/images/songs/9",
        title: "Farewell",
    },
    {
        id: "musicForestLife",
        img: "https://acnhapi.com/v1/images/songs/10",
        title: "Forest Life",
    },
    {
        id: "musicGoKKRider",
        img: "https://acnhapi.com/v1/images/songs/11",
        title: "Go K.K. Rider",
    },
    {
        id: "musicHypnoKK",
        img: "https://acnhapi.com/v1/images/songs/12",
        title: "Hypno K.K.",
    },
    {
        id: "musicILoveYou",
        img: "https://acnhapi.com/v1/images/songs/13",
        title: "I Love You",
    },
    {
        id: "musicImperialKK",
        img: "https://acnhapi.com/v1/images/songs/14",
        title: "Imperial K.K.",
    },
    {
        id: "musicKingKK",
        img: "https://acnhapi.com/v1/images/songs/75",
        title: "King K.K.",
    },
    {
        id: "musicKKAdventure",
        img: "https://acnhapi.com/v1/images/songs/15",
        title: "K.K. Adventure",
    },
    {
        id: "musicKKAria",
        img: "https://acnhapi.com/v1/images/songs/16",
        title: "K.K. Aria",
    },
    {
        id: "musicKKBallad",
        img: "https://acnhapi.com/v1/images/songs/17",
        title: "K.K. Ballad",
    },
    {
        id: "musicKKBashment",
        img: "https://dodo.ac/np/images/thumb/b/b9/K.K._Bashment_NH_Texture.png/256px-K.K._Bashment_NH_Texture.png",
        title: "K.K. Bashment",
    },
    {
        id: "musicKkBazaar",
        img: "https://acnhapi.com/v1/images/songs/18",
        title: "K.K. Bazaar",
    },
    {
        id: "musicKKBirthday",
        img: "https://acnhapi.com/v1/images/songs/19",
        title: "K.K. Birthday",
    },
    {
        id: "musicKKBlues",
        img: "https://acnhapi.com/v1/images/songs/20",
        title: "K.K. Blues",
    },
    {
        id: "musicKkBossa",
        img: "https://acnhapi.com/v1/images/songs/21",
        title: "K.K. Bossa",
    },
    {
        id: "musicKKBreak",
        img: "https://dodo.ac/np/images/thumb/d/db/K.K._Break_NH_Texture.png/256px-K.K._Break_NH_Texture.png",
        title: "K.K. Break",
    },
    {
        id: "musicKKCalypso",
        img: "https://acnhapi.com/v1/images/songs/22",
        title: "K.K. Calypso",
    },
    {
        id: "musicKKCasbah",
        img: "https://acnhapi.com/v1/images/songs/23",
        title: "K.K. Casbah",
    },
    {
        id: "musicKKChillwave",
        img: "https://dodo.ac/np/images/thumb/a/a2/Chillwave_NH_Texture.png/256px-Chillwave_NH_Texture.png",
        title: "K.K. Chillwave",
    },
    {
        id: "musicKKChorale",
        img: "https://acnhapi.com/v1/images/songs/24",
        title: "K.K. Chorale",
    },
    {
        id: "musicKKChorinho",
        img: "https://dodo.ac/np/images/thumb/2/28/K.K._Chorinho_NH_Texture.png/256px-K.K._Chorinho_NH_Texture.png",
        title: "K.K. Chorinho",
    },
    {
        id: "musicKkCondor",
        img: "https://acnhapi.com/v1/images/songs/25",
        title: "K.K. Condor",
    },
    {
        id: "musicKKCountry",
        img: "https://acnhapi.com/v1/images/songs/26",
        title: "K.K. Country",
    },
    {
        id: "musicKKCruisin",
        img: "https://acnhapi.com/v1/images/songs/27",
        title: "K.K. Cruisin'",
    },
    {
        id: "musicKKD&B",
        img: "https://acnhapi.com/v1/images/songs/28",
        title: "K.K. D&amp;B",
    },
    {
        id: "musicKKDirge",
        img: "https://acnhapi.com/v1/images/songs/29",
        title: "K.K. Dirge",
    },
    {
        id: "musicKKDisco",
        img: "https://acnhapi.com/v1/images/songs/30",
        title: "K.K. Disco",
    },
    {
        id: "musicKKDixie",
        img: "https://acnhapi.com/v1/images/songs/31",
        title: "K.K. Dixie",
    },
    {
        id: "musicKKDub",
        img: "https://dodo.ac/np/images/9/9b/K.K._Dub_NH_Texture.png",
        title: "K.K. Dub",
    },
    {
        id: "musicKKEtude",
        img: "https://acnhapi.com/v1/images/songs/32",
        title: "K.K. Étude",
    },
    {
        id: "musicKKFaire",
        img: "https://acnhapi.com/v1/images/songs/33",
        title: "K.K. Faire",
    },
    {
        id: "musicKkFlamenco",
        img: "https://acnhapi.com/v1/images/songs/34",
        title: "K.K. Flamenco",
    },
    {
        id: "musicKKFolk",
        img: "https://acnhapi.com/v1/images/songs/35",
        title: "K.K. Folk",
    },
    {
        id: "musicKKFugue",
        img: "https://dodo.ac/np/images/4/4c/K.K._Fugue_NH_Texture.png",
        title: "K.K. Fugue",
    },
    {
        id: "musicKKFusion",
        img: "https://acnhapi.com/v1/images/songs/36",
        title: "K.K. Fusion",
    },
    {
        id: "musicKKGroove",
        img: "https://acnhapi.com/v1/images/songs/37",
        title: "K.K. Groove",
    },
    {
        id: "musicKKGumbo",
        img: "https://acnhapi.com/v1/images/songs/38",
        title: "K.K. Gumbo",
    },
    {
        id: "musicKKHop",
        img: "https://dodo.ac/np/images/thumb/a/a9/K.K._Hop_NH_Texture.png/256px-K.K._Hop_NH_Texture.png",
        title: "K.K. Hop",
    },
    {
        id: "musicKKHouse",
        img: "https://acnhapi.com/v1/images/songs/39",
        title: "K.K. House",
    },
    {
        id: "musicKKIsland",
        img: "https://acnhapi.com/v1/images/songs/40",
        title: "K.K. Island",
    },
    {
        id: "musicKKJazz",
        img: "https://acnhapi.com/v1/images/songs/41",
        title: "K.K. Jazz",
    },
    {
        id: "musicKKJongara",
        img: "https://acnhapi.com/v1/images/songs/42",
        title: "K.K. Jongara",
    },
    {
        id: "musicKKKhoomei",
        img: "https://dodo.ac/np/images/thumb/8/8d/K.K._Khoomei_NH_Texture.png/256px-K.K._Khoomei_NH_Texture.png",
        title: "K.K. Khoomei",
    },
    {
        id: "musicKKLament",
        img: "https://acnhapi.com/v1/images/songs/43",
        title: "K.K. Lament",
    },
    {
        id: "musicKKLoveSong",
        img: "https://acnhapi.com/v1/images/songs/44",
        title: "K.K. Love Song",
    },
    {
        id: "musicKKLovers",
        img: "https://dodo.ac/np/images/thumb/6/62/K.K._Lovers_NH_Texture.png/256px-K.K._Lovers_NH_Texture.png",
        title: "K.K. Lovers",
    },
    {
        id: "musicKKLullaby",
        img: "https://acnhapi.com/v1/images/songs/45",
        title: "K.K. Lullaby",
    },
    {
        id: "musicKKMambo",
        img: "https://acnhapi.com/v1/images/songs/46",
        title: "K.K. Mambo",
    },
    {
        id: "musicKKMarathon",
        img: "https://acnhapi.com/v1/images/songs/47",
        title: "K.K. Marathon",
    },
    {
        id: "musicKKMarch",
        img: "https://acnhapi.com/v1/images/songs/48",
        title: "K.K. March",
    },
    {
        id: "musicKKMariachi",
        img: "https://acnhapi.com/v1/images/songs/49",
        title: "K.K. Mariachi",
    },
    {
        id: "musicKKMetal",
        img: "https://acnhapi.com/v1/images/songs/50",
        title: "K.K. Metal",
    },
    {
        id: "musicKKMilonga",
        img: "https://acnhapi.com/v1/images/songs/51",
        title: "K.K. Milonga",
    },
    {
        id: "musicKKMoody",
        img: "https://acnhapi.com/v1/images/songs/52",
        title: "K.K. Moody",
    },
    {
        id: "musicKKOasis",
        img: "https://acnhapi.com/v1/images/songs/53",
        title: "K.K. Oasis",
    },
    {
        id: "musicKKParade",
        img: "https://acnhapi.com/v1/images/songs/54",
        title: "K.K. Parade",
    },
    {
        id: "musicKKPolka",
        img: "https://dodo.ac/np/images/a/af/K.K._Polka_NH_Texture.png",
        title: "K.K. Polka",
    },
    {
        id: "musicKKRagtime",
        img: "https://acnhapi.com/v1/images/songs/55",
        title: "K.K. Ragtime",
    },
    {
        id: "musicKKRally",
        img: "https://acnhapi.com/v1/images/songs/56",
        title: "K.K. Rally",
    },
    {
        id: "musicKKReggae",
        img: "https://acnhapi.com/v1/images/songs/57",
        title: "K.K. Reggae",
    },
    {
        id: "musicKKRobotSynth",
        img: "https://dodo.ac/np/images/thumb/8/8e/K.K._Robot_Synth_NH_Texture.png/256px-K.K._Robot_Synth_NH_Texture.png",
        title: "K.K. Robot Synth",
    },
    {
        id: "musicKKRock",
        img: "https://acnhapi.com/v1/images/songs/58",
        title: "K.K. Rock",
    },
    {
        id: "musicKKRockabilly",
        img: "https://acnhapi.com/v1/images/songs/59",
        title: "K.K. Rockabilly",
    },
    {
        id: "musicKKSafari",
        img: "https://acnhapi.com/v1/images/songs/60",
        title: "K.K. Safari",
    },
    {
        id: "musicKKSalsa",
        img: "https://acnhapi.com/v1/images/songs/61",
        title: "K.K. Salsa",
    },
    {
        id: "musicKKSamba",
        img: "https://acnhapi.com/v1/images/songs/62",
        title: "K.K. Samba",
    },
    {
        id: "musicKKSka",
        img: "https://acnhapi.com/v1/images/songs/63",
        title: "K.K. Ska",
    },
    {
        id: "musicKKSlackKey",
        img: "https://dodo.ac/np/images/5/5a/K.K._Slack-Key_NH_Texture.png",
        title: "K.K. Slack-Key",
    },
    {
        id: "musicKKSonata",
        img: "https://acnhapi.com/v1/images/songs/64",
        title: "K.K. Sonata",
    },
    {
        id: "musicKKSong",
        img: "https://acnhapi.com/v1/images/songs/65",
        title: "K.K. Song",
    },
    {
        id: "musicKKSoul",
        img: "https://acnhapi.com/v1/images/songs/66",
        title: "K.K. Soul",
    },
    {
        id: "musicKkSteppe",
        img: "https://acnhapi.com/v1/images/songs/67",
        title: "K.K. Steppe",
    },
    {
        id: "musicKKStroll",
        img: "https://acnhapi.com/v1/images/songs/68",
        title: "K.K. Stroll",
    },
    {
        id: "musicKKSwing",
        img: "https://acnhapi.com/v1/images/songs/69",
        title: "K.K. Swing",
    },
    {
        id: "musicKKSynth",
        img: "https://acnhapi.com/v1/images/songs/70",
        title: "K.K. Synth",
    },
    {
        id: "musicKKTango",
        img: "https://acnhapi.com/v1/images/songs/71",
        title: "K.K. Tango",
    },
    {
        id: "musicKKTechnopop",
        img: "https://acnhapi.com/v1/images/songs/72",
        title: "K.K. Technopop",
    },
    {
        id: "musicKKWaltz",
        img: "https://acnhapi.com/v1/images/songs/73",
        title: "K.K. Waltz",
    },
    {
        id: "musicKKWestern",
        img: "https://acnhapi.com/v1/images/songs/74",
        title: "K.K. Western",
    },
    {
        id: "musicLuckyKK",
        img: "https://acnhapi.com/v1/images/songs/76",
        title: "Lucky K.K.",
    },
    {
        id: "musicMarineSong2001",
        img: "https://acnhapi.com/v1/images/songs/77",
        title: "Marine Song 2001",
    },
    {
        id: "musicMountainSong",
        img: "https://acnhapi.com/v1/images/songs/78",
        title: "Mountain Song",
    },
    {
        id: "musicMrKK",
        img: "https://acnhapi.com/v1/images/songs/79",
        title: "Mr. K.K.",
    },
    {
        id: "musicMyPlace",
        img: "https://acnhapi.com/v1/images/songs/80",
        title: "My Place",
    },
    {
        id: "musicNeapolitan",
        img: "https://acnhapi.com/v1/images/songs/81",
        title: "Neapolitan",
    },
    {
        id: "musicOnlyMe",
        img: "https://acnhapi.com/v1/images/songs/82",
        title: "Only Me",
    },
    {
        id: "musicPondering",
        img: "https://acnhapi.com/v1/images/songs/83",
        title: "Pondering",
    },
    {
        id: "musicRockinKK",
        img: "https://acnhapi.com/v1/images/songs/84",
        title: "Rockin' K.K.",
    },
    {
        id: "musicSoulfulKK",
        img: "https://acnhapi.com/v1/images/songs/85",
        title: "Soulful K.K.",
    },
    {
        id: "musicSpaceKK",
        img: "https://acnhapi.com/v1/images/songs/86",
        title: "Space K.K.",
    },
    {
        id: "musicSpringBlossoms",
        img: "https://acnhapi.com/v1/images/songs/87",
        title: "Spring Blossoms",
    },
    {
        id: "musicStaleCupcakes",
        img: "https://acnhapi.com/v1/images/songs/88",
        title: "Stale Cupcakes",
    },
    {
        id: "musicSteepHill",
        img: "https://acnhapi.com/v1/images/songs/89",
        title: "SteepHill",
    },
    {
        id: "musicSurfinKK",
        img: "https://acnhapi.com/v1/images/songs/90",
        title: "Surfin' K.K.",
    },
    {
        id: "musicTheKFunk",
        img: "https://acnhapi.com/v1/images/songs/91",
        title: "The K. Funk",
    },
    {
        id: "musicToTheEdge",
        img: "https://acnhapi.com/v1/images/songs/92",
        title: "To The Edge",
    },
    {
        id: "musicTwoDaysAgo",
        img: "https://acnhapi.com/v1/images/songs/93",
        title: "Two Days Ago",
    },
    {
        id: "musicWandering",
        img: "https://acnhapi.com/v1/images/songs/94",
        title: "Wandering",
    },
    {
        id: "musicWelcomeHorizons",
        img: "https://acnhapi.com/v1/images/songs/95",
        title: "Welcome Horizons",
    }
]
module.exports = music