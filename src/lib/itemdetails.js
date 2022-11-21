export default{

    "template" : {
        "name" : "placeholder",
        "details": {
            "Health": 25,
            "Mana" : 25
        },
        "glyph" : "glypy stuff",
        "passive" : "gamer"
    },
    "beads" : {
        "name" : "Purification Beads",
        "active" : "Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 170s."
    },


    "blink" : {
        "name" : "Blink Rune",
        "active" : "Using this item will allow you to teleport up to 45 units away instantly. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 140s. "
    },

    "mace" : {
        "name" : "Mace",
        "details": {
            "Physical Power": 10
        }
    },
    "magic-focus" : {
        "name" : "Magic Focus",
        "details": {
            "Magical Power": 25
        }
    },

    "soulreaver" : {
        "name" : "Soul reaver",
        "details": {
            "Magical Power": 95,
            "Mana" : 300
        },
        "passive" : "Your abilities deal an additional 2% of the target's maximum Health as Magical Damage. If the target has over 2000 Health, your ability bonus damage scales up. This effect reaches a maximum of 9% Maximum Health damage at 2750 Health. Subsequent hits on the same target do half the bonus damage for the next 3s. "
    },

    "s_pendulum" : {
        "name" : "Pendulum of Ages",
        "details": {
            "Magical Power": 90,
            "MP5" : 20,
            "Cooldown Reduction" : "20%"
        },
        "passive" : "This item grants 4 MP5 per 10% of your missing Mana. This item grants 10 Magical power per 10% of your available Mana. "
    },

    "s_sands" : {
        "name" : "Sands of Time",
        "details": {
            "Magical Power": 25,
            "MP5" : 10,
            "Cooldown Reduction" : "10%"
        },
        "passive" : "This item grants 2 MP5 per 10% of your missing Mana. Your damaging abilities deal an extra 10 true damage to minions."
    },

    "tahuti" : {
        "name" : "Rod of Tahuti",
        "details": {
            "Magical Power": 135,
            "Magical Penetration" : "10%",
            "MP5" : 30
        },
        "passive" : "Basic Attacks and Abilities gain 25% additional Magical Power against targets below 50% Health."
    },
    "tahuti_calamitous" : {
        "name" : "Calamitous Rod of Tahuti",
        "base" : "tahuti",
        "glyph" : "Successfully hitting an enemy god with an ability calls down a meteor that lands after 1s, dealing 100 (+35% of your Magical Power) damage in a 15 unit radius. This effect can only occur once every 30s."
    },
    "tahuti_perfected" : {
        "name" : "Perfected Rod of Tahuti",
        "base" : "tahuti",
        "glyph" : "Successfully damaging an enemy god with an ability applies a mark for 3s. Damaging them a second time with another ability consumes the mark and provides you 10% movement speed for 2s and reduces your abilities cooldowns by 1.5s. Only one mark can be active at a time and cannot be applied for 8s after consuming a mark."
    },

    "arondight" : {
        "name" : "Arondight",
        "details": {
            "Physical Power": 75,
            "Cooldown Reduction" : "10%"
        },
        "passive" : "When your Ultimate ability has finished casting, reveal all enemy gods within 120 units for 8s. While moving towards revealed enemies gain 30% Movement Speed. When first striking a revealed target they take an additional 20 + 40% of your Physical Power. This can only occur once every 45 seconds. "
    },

    "trans" : {
        "name" : "Transcendence",
        "details": {
            "Physical Power": 45,
            "Cooldown Reduction" : "10%",
            "Mana" : 1050,
            "MP5" : 10
        },
        "passive" : "3% of your Mana is converted to Physical Power."
    },
    "heartseeker" : {
        "name" : "Heartseeker",
        "details": {
            "Physical Power": 65,
            "Physical Penetration" : "10%",
            "Mana" : 200,
            "MP5" : 20
        },
        "passive" : "Your abilities deal an additional 3% of the targets maximum Health as Physical Damage. If you have over 200 Physical Power, your ability bonus damage scales up. This effect reaches a maximum of 6% Maximum Health damage at 350 Physical Power. Subsequent hits on the same target do 75% bonus damage for the next 3s. "
    },
    "dom" : {
        "name" : "Dominance",
        "details": {
            "Physical Power": 55,
            "Physical Penetration" : "10%",
            "Mana" : 200,
            "MP5" : 20
        },
        "passive" : "Your Basic Attacks benefit from an additional 15% Physical Penetration. "
    },
    "hydras" : {
        "name" : "Hydra's Lament",
        "details": {
            "Physical Power": 40,
            "Physical Penetration" : "10%",
            "Cooldown Reduction" : "10%",
            "MP5" : 10
        },
        "passive" : "For 8s after using an ability, your next Basic Attack will deal an additional 35% damage. Abilities that function like basic attacks do not benefit from this.",
        "passive2" : "This item grants 2.5 MP5 per 10% of your missing Mana."
    },
    "souleater2" : {
        "name" : "Soul Eater",
        "details": {
            "Physical Power": 40,
            "Physical Lifesteal" : "15%",
            "Physical Penetration" : "10%",
            "Cooldown Reduction" : "10%"
        },
        "passive" : "Your abilities heal you for 20% of the damage dealt to targets. "
    },

    "jotunns" : {
        "name" : "Jotunn's Wrath",
        "details": {
            "Physical Power": 45,
            "Physical Penetration" : 10,
            "Cooldown Reduction" : "20%",
            "Mana" : 150
        },
    },
    "jotunnsvigor" : {
        "name" : "Jotunn's Vigor",
        "base" : "jotunns",
        "glyph" : "If you drop beneath 40% health, gain 10% Movement Speed and 30% Physical Ability Lifesteal for 5s. This effect may only occur once every 15s."
    },

    "titans" : {
        "name" : "Titan's Bane",
        "details": {
            "Physical Power": 50,
            "Physical Penetration" : "20%"
        },
        "passive" : "Your first ability cast gains 20% Physical Penetration. This can only occur once every 6 seconds."
    },

    "crusher" : {
        "name" : "The Crusher",
        "details": {
            "Physical Power": 45,
            "Attack Speed" : "10%",
            "Physical Penetration" : 15
        },
        "passive" : "Enemies hit by your damaging Abilities take an additional 20 Physical Damage + 20% of your Physical Power over 2s."
    },

    "obshard" : {
        "name" : "Obsidian Shard",
        "details": {
            "Magical Power": 100,
            "Magical Penetration" : "20%"
        },
        "passive" : "Your first ability cast gains 10% Magical Penetration. This can only occur once every 10 seconds. "
    },

    "spearofdeso" : {
        "name" : "Spear of Desolation",
        "details": {
            "Magical Power": 110,
            "Magical Penetration": 15,
            "Cooldown Reduction" : "10%"
        },
        "passive" : "If you receive a kill or assist on an Enemy God all of you non-ultimate cooldowns are reduced by 2 seconds and your ultimate cooldown is reduced by 6s. "
    },


    "s_bumbas": {
        "name" : "Bumba's Dagger",
        "details" : {
            "Physical Power" : 7,
            "Magical Power" : 12,
            "Health" : 50,
            "Mana" : 50
        },
        "passive" : "Your Basic Attacks deal +25 True Damage and your Abilities deal +35% Damage versus Jungle Monsters. When a Jungle Monster is killed you are restored for 10% of the Monster's Health and 25 Mana."
    },
    "bancrofts":{
        "name" : "Bancroft's Talon",
        "details" : {
            "Magical Power" : 100,
            "Magical Lifesteal" : "20%",
            "Mana": 150
        },
        "passive": " Gain up to 100 Magical Power and 20% Magical Lifesteal based on % missing Health"
    },
    "s_bumbasspear" : {
        "name" : "Bumba's Spear",
        "details": {
            "Physical Power" : 70,
            "Magical Power" : 105,
            "Penetration" : "10%",
            "Cooldown Reduction" : "10%",
        },
        "passive" : "Your Basic Attacks deal +50 True Damage and your Abilities deal +35% damage against Jungle Camps, Structures, and Jungle Bosses. When any of these die you gain a 10% power buff for 30s and are healed for 10% of their Health, 10% of your Mana."
    },
    "s_manikin" : {
        "name" : "Manikin's Scepter",
        "details": {
            "Basic Attack Damage" : 10,
            "Phyiscal Protection" : 30,
        },
        "passive" : "Enemies hit by your Basic Attacks are burned, taking 16 Physical Damage (+5% of your Physical and Magical Power) over 2s and have their Attack Speed reduced by 4.5%. Jungle Monsters restore 3% Health and 5% Mana when they die if they are burned. This effect can stack up to 3 times."
    },
    "s_hidden" : {
        "name" : "Manikin's Hidden Blade",
        "details": {
            "Physical Power" : 60,
            "Magical Power" : 90,
            "Phyiscal Protection" : 30,
            "Damage Reduction" : 5,
        },
        "passive" : "If you have not taken or dealt damage in the last 5s and hit an enemy god, Jungle Monster, or Jungle Boss, they immediately take 20% of their Maximum Health as Physical Damage and are slowed by 20% for 5s."
    },
    "myrdin" : {
        "name" : "Staff of Myrddin",
        "details": {
            "Magical Power" : 110,
            "Magical Penetration" : "10%",
            "Cooldown Reduction" : "10%",
        },
        "passive" : "When your ultimate ability has finished casting you gain Myrddins Rage which provides 25% Increased Damage Dealt, decaying to 2.5% Increased Damage Dealt over 8s. At the end of the 8s you lose Myrddins Rage. This can only occur once every 45s."
    },



    "spearmagus":{
        "name" : "Spear of the Magus",
        "details" : {
            "Magical Power" : 110,
            "Magical Penetration" : 15,
            "Magical Lifesteal" : "12%"
        },
        "passive" : "Whenever you damage an enemy god with an ability you mark them to take 7.5% increased damage from all sources. This effect lasts for 7s and can only occur once every 15s."
    }
}