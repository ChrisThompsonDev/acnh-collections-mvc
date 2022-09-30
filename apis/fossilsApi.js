const fossils = [
    {
        id: 'fossilAcanthostega', 
        img: "https://acnhapi.com/v1/images/fossils/acanthostega",
        title: "Acanthostega",
    },
    {
        id: 'fossilAmber', 
        img: "https://acnhapi.com/v1/images/fossils/amber",
        title: "Amber",
    },
    {
        id: 'fossilAmmonite', 
        img: "https://acnhapi.com/v1/images/fossils/ammonite",
        title: "Ammonite",
    },
    {
        id: 'fossilAnkyloSkull', 
        img: "https://acnhapi.com/v1/images/fossils/ankylo_skull",
        title: "Ankylo skull",
    },
    {
        id: 'fossilAnkyloTail', 
        img: "https://acnhapi.com/v1/images/fossils/ankylo_tail",
        title: "Ankylo tail",
    },
    {
        id: 'fossilAnkyloTorso', 
        img: "https://acnhapi.com/v1/images/fossils/ankylo_torso",
        title: "Ankylo torso",
    },
    {
        id: 'fossilAnomalocaris', 
        img: "https://acnhapi.com/v1/images/fossils/anomalocaris",
        title: "Anomalocaris",
    },
    {
        id: 'fossilArchaeopteryx', 
        img: "https://acnhapi.com/v1/images/fossils/archaeopteryx",
        title: "Archaeopteryx",
    },
    {
        id: 'fossilArchelonSkull', 
        img: "https://acnhapi.com/v1/images/fossils/archelon_skull",
        title: "Archelon skull",
    },
    {
        id: 'fossilArchelonTail', 
        img: "https://acnhapi.com/v1/images/fossils/archelon_tail",
        title: "Archelon tail",
    },
    {
        id: 'fossilAustralopith', 
        img: "https://acnhapi.com/v1/images/fossils/australopith",
        title: "Australopith",
    },
    {
        id: 'fossilBrachioChest', 
        img: "https://acnhapi.com/v1/images/fossils/brachio_chest",
        title: "Brachio chest",
    },
    {
        id: 'fossilBrachioPelvis', 
        img: "https://acnhapi.com/v1/images/fossils/brachio_pelvis",
        title: "Brachio pelvis",
    },
    {
        id: 'fossilBrachioSkull', 
        img: "https://acnhapi.com/v1/images/fossils/brachio_skull",
        title: "Brachio skull",
    },
    {
        id: 'fossilBrachioTail', 
        img: "https://acnhapi.com/v1/images/fossils/brachio_tail",
        title: "Brachio tail",
    },
    {
        id: 'fossilCoprolite', 
        img: "https://acnhapi.com/v1/images/fossils/coprolite",
        title: "Coprolite",
    },
    {
        id: 'fossilDeinonyTail', 
        img: "https://acnhapi.com/v1/images/fossils/deinony_tail",
        title: "Deinony tail",
    },
    {
        id: 'fossilDeinonyTorso', 
        img: "https://acnhapi.com/v1/images/fossils/deinony_torso",
        title: "Deinony torso",
    },
    {
        id: 'fossilDimetrodonSkull', 
        img: "https://acnhapi.com/v1/images/fossils/dimetrodon_skull",
        title: "Dimetrodon skull",
    },
    {
        id: 'fossilDimetrodonTorso', 
        img: "https://acnhapi.com/v1/images/fossils/dimetrodon_torso",
        title: "Dimetrodon torso",
    },
    {
        id: 'fossilDinosaurTrack', 
        img: "https://acnhapi.com/v1/images/fossils/dinosaur_track",
        title: "Dinosaur track",
    },
    {
        id: 'fossilDiploChest', 
        img: "https://acnhapi.com/v1/images/fossils/diplo_chest",
        title: "Diplo chest",
    },
    {
        id: 'fossilDiploNeck', 
        img: "https://acnhapi.com/v1/images/fossils/diplo_neck",
        title: "Diplo neck",
    },
    {
        id: 'fossilDiploPelvis', 
        img: "https://acnhapi.com/v1/images/fossils/diplo_pelvis",
        title: "Diplo pelvis",
    },
    {
        id: 'fossilDiploSkull', 
        img: "https://acnhapi.com/v1/images/fossils/diplo_skull",
        title: "Diplo skull",
    },
    {
        id: 'fossilDiploTail', 
        img: "https://acnhapi.com/v1/images/fossils/diplo_tail",
        title: "Diplo tail",
    },
    {
        id: 'fossilDiploTailTip', 
        img: "https://acnhapi.com/v1/images/fossils/diplo_tail_tip",
        title: "Diplo tail tip",
    },
    {
        id: 'fossilDunkleosteus', 
        img: "https://acnhapi.com/v1/images/fossils/dunkleosteus",
        title: "Dunkleosteus",
    },
    {
        id: 'fossilEusthenopteron', 
        img: "https://acnhapi.com/v1/images/fossils/eusthenopteron",
        title: "Eusthenopteron",
    },
    {
        id: 'fossilIguanodonSkull', 
        img: "https://acnhapi.com/v1/images/fossils/iguanodon_skull",
        title: "Iguanodon skull",
    },
    {
        id: 'fossilIguanodonTail', 
        img: "https://acnhapi.com/v1/images/fossils/iguanodon_tail",
        title: "Iguanodon tail",
    },
    {
        id: 'fossilIguanodonTorso', 
        img: "https://acnhapi.com/v1/images/fossils/iguanodon_torso",
        title: "Iguanodon torso",
    },
    {
        id: 'fossilJuramaia', 
        img: "https://acnhapi.com/v1/images/fossils/juramaia",
        title: "Juramaia",
    },
    {
        id: 'fossilLeftMegaloSide', 
        img: "https://acnhapi.com/v1/images/fossils/left_megalo_side",
        title: "Left megalo side",
    },
    {
        id: 'fossilLeftPteraWing', 
        img: "https://acnhapi.com/v1/images/fossils/left_ptera_wing",
        title: "Left Ptera wing",
    },
    {
        id: 'fossilLeftQuetzalWing', 
        img: "https://acnhapi.com/v1/images/fossils/left_quetzal_wing",
        title: "Left Quetzal wing",
    },
    {
        id: 'fossilMammothSkull', 
        img: "https://acnhapi.com/v1/images/fossils/mammoth_skull",
        title: "Mammoth skull",
    },
    {
        id: 'fossilMammothTorso', 
        img: "https://acnhapi.com/v1/images/fossils/mammoth_torso",
        title: "Mammoth torso",
    },
    {
        id: 'fossilMegaceroSkull', 
        img: "https://acnhapi.com/v1/images/fossils/megacero_skull",
        title: "Megacero skull",
    },
    {
        id: 'fossilMegaceroTail', 
        img: "https://acnhapi.com/v1/images/fossils/megacero_tail",
        title: "Megacero tail",
    },
    {
        id: 'fossilMegaceroTorso', 
        img: "https://acnhapi.com/v1/images/fossils/megacero_torso",
        title: "Megacero torso",
    },
    {
        id: 'fossilMyllokunmingia', 
        img: "https://acnhapi.com/v1/images/fossils/myllokunmingia",
        title: "Myllokunmingia",
    },
    {
        id: 'fossilOphthalmoSkull', 
        img: "https://acnhapi.com/v1/images/fossils/ophthalmo_skull",
        title: "Ophthalmo skull",
    },
    {
        id: 'fossilOphthalmoTorso', 
        img: "https://acnhapi.com/v1/images/fossils/ophthalmo_torso",
        title: "Ophthalmo torso",
    },
    {
        id: 'fossilPachySkull', 
        img: "https://acnhapi.com/v1/images/fossils/pachy_skull",
        title: "Pachy skull",
    },
    {
        id: 'fossilPachyTail', 
        img: "https://acnhapi.com/v1/images/fossils/pachy_tail",
        title: "Pachy tail",
    },
    {
        id: 'fossilParasaurSkull', 
        img: "https://acnhapi.com/v1/images/fossils/parasaur_skull",
        title: "Parasaur skull",
    },
    {
        id: 'fossilParasaurTail', 
        img: "https://acnhapi.com/v1/images/fossils/parasaur_tail",
        title: "Parasaur tail",
    },
    {
        id: 'fossilParasaurTorso', 
        img: "https://acnhapi.com/v1/images/fossils/parasaur_torso",
        title: "Parasaur torso",
    },
    {
        id: 'fossilPlesioSkull', 
        img: "https://acnhapi.com/v1/images/fossils/plesio_skull",
        title: "Plesio skull",
    },
    {
        id: 'fossilPlesioTail', 
        img: "https://acnhapi.com/v1/images/fossils/plesio_tail",
        title: "Plesio tail",
    },
    {
        id: 'fossilPlesioTorso', 
        img: "https://acnhapi.com/v1/images/fossils/plesio_torso",
        title: "Plesio torso",
    },
    {
        id: 'fossilPteraBody', 
        img: "https://acnhapi.com/v1/images/fossils/ptera_body",
        title: "Ptera body",
    },
    {
        id: 'fossilQuetzalTorso', 
        img: "https://acnhapi.com/v1/images/fossils/quetzal_torso",
        title: "Quetzal torso",
    },
    {
        id: 'fossilRightMegaloSide', 
        img: "https://acnhapi.com/v1/images/fossils/right_megalo_side",
        title: "Right megalo side",
    },
    {
        id: 'fossilRightPteraWing', 
        img: "https://acnhapi.com/v1/images/fossils/right_ptera_wing",
        title: "Right ptera wing",
    },
    {
        id: 'fossilRightQuetzalWing', 
        img: "https://acnhapi.com/v1/images/fossils/right_quetzal_wing",
        title: "Right quetzal wing",
    },
    {
        id: 'fossilSabertoothSkull', 
        img: "https://acnhapi.com/v1/images/fossils/sabertooth_skull",
        title: "Sabertooth skull",
    },
    {
        id: 'fossilSabertoothTail', 
        img: "https://acnhapi.com/v1/images/fossils/sabertooth_tail",
        title: "Sabertooth tail",
    },
    {
        id: 'fossilSharkToothPattern', 
        img: "https://acnhapi.com/v1/images/fossils/shark-tooth_pattern",
        title: "Shark-tooth pattern",
    },
    {
        id: 'fossilSpinoSkull', 
        img: "https://acnhapi.com/v1/images/fossils/spino_skull",
        title: "Spino skull",
    },
    {
        id: 'fossilSpinoTail', 
        img: "https://acnhapi.com/v1/images/fossils/spino_tail",
        title: "Spino tail",
    },
    {
        id: 'fossilSpinoTorso', 
        img: "https://acnhapi.com/v1/images/fossils/spino_torso",
        title: "Spino torso",
    },
    {
        id: 'fossilStegoSkull', 
        img: "https://acnhapi.com/v1/images/fossils/stego_skull",
        title: "Stego skull",
    },
    {
        id: 'fossilStegoTail', 
        img: "https://acnhapi.com/v1/images/fossils/stego_tail",
        title: "Stego tail",
    },
    {
        id: 'fossilStegoTorso', 
        img: "https://acnhapi.com/v1/images/fossils/stego_torso",
        title: "Stego torso",
    },
    {
        id: 'fossilTRexSkull', 
        img: "https://acnhapi.com/v1/images/fossils/trex_skull",
        title: "T. Rex skull",
    },
    {
        id: 'fossilTRexTail', 
        img: "https://acnhapi.com/v1/images/fossils/trex_tail",
        title: "T. Rex tail",
    },
    {
        id: 'fossilTRexTorso', 
        img: "https://acnhapi.com/v1/images/fossils/trex_torso",
        title: "T. Rex torso",
    },
    {
        id: 'fossilTriceraSkull', 
        img: "https://acnhapi.com/v1/images/fossils/tricera_skull",
        title: "Tricera skull",
    },
    {
        id: 'fossilTriceraTail', 
        img: "https://acnhapi.com/v1/images/fossils/tricera_tail",
        title: "Tricera tail",
    },
    {
        id: 'fossilTriceraTorso', 
        img: "https://acnhapi.com/v1/images/fossils/tricera_torso",
        title: "Tricera torso",
    },
    {
        id: 'fossilTrilobite', 
        img: "https://acnhapi.com/v1/images/fossils/trilobite",
        title: "Trilobite",
    },
]
module.exports = fossils