const nouns = [
    "Country",
    "Uniform",
    "Holiday",
    "Table",
    "Fork",
    "Poetry",
    "Symphony",
    "Novel",
    "Sonnet",
    "Drama",
    "Ballad",
    "Opera",
    "Prose",
    "Lyric",
    "Melody",
    "Harmony",
    "Rhapsody",
    "Overture",
    "Sonnets",
    "Tragedy",
    "Comedy",
    "Fiction",
    "Literature",
    "Classic",
    "Chorus",
    "Verse",
    "Muse",
    "Author",
    "Composer",
    "Piano",
    "Orchestra",
    "Cello",
    "Violin",
    "Guitar",
    "Diction",
    "Rhyme",
    "Metaphor",
    "Allegory",
    "Singer",
    "Tenor",
    "Baritone",
    "Soprano",
    "Harmonica",
    "Aria",
    "Concerto",
    "Ode",
    "Libretto",
    "Prelude",
    "Crescendo",
    "Refrain",
    "Literary",
    "Tale",
    "Epic",
];

const adjectives = [
    "Sweet",
    "Mystical",
    "Fast",
    "Grotesque",
    "Windy",
    "Passionate",
    "Romantic",
    "Tender",
    "Melodic",
    "Harmonious",
    "Enchanting",
    "Sensual",
    "Euphoric",
    "Soulful",
    "Intimate",
    "Emotional",
    "Dreamy",
    "Serene",
    "Blissful",
    "Amorous",
    "Inspirational",
    "Devotional",
    "Affectionate",
    "Rhythmic",
    "Poetic",
    "Loving",
    "Tumultuous",
    "Enraptured",
    "Captivating",
    "Enamored",
    "Resonant",
    "Lyrical",
    "Whimsical",
    "Passion-filled",
    "Harmonic",
    "Yearning",
    "Ethereal",
    "Adoring",
    "Magnetic",
    "Seductive",
    "Serenading",
    "Heartfelt",
    "Ardent",
    "Tonal",
    "Fervent",
    "Cherished",
    "Entrancing",
    "Devotionate",
    "Caring",
    "Alluring",
    "Affectionate",
    "Tuneful",
    "Mellifluous",
    "Ardent",
    "Sentimental",
];

const verbs = [
    "Running",
    "Remembering",
    "Writing",
    "Building",
    "Washing",
    "Dancing",
    "Singing",
    "Celebrating",
    "Grooving",
    "Jamming",
    "Partying",
    "Boogying",
    "Rocking",
    "Mingling",
    "Chanting",
    "Clapping",
    "Cheering",
    "Mixing",
    "Dj-ing",
    "Twisting",
    "Bouncing",
    "Vibing",
    "Funking",
    "Raving",
    "Jiving",
    "Swinging",
    "Swaying",
    "Reveling",
    "Shaking",
    "Bopping",
    "Flirting",
    "Headbanging",
    "Gyrating",
    "Clinking",
    "Beats",
    "Spinning",
    "Gathering",
    "Feasting",
    "Laughing",
    "Pulsating",
    "Lively",
    "Thumping",
    "Ecstatic",
    "Discoing",
    "Clubbing",
    "Glowing",
    "Gleaming",
    "Thriving",
    "Pumping",
    "Socializing",
    "Entertaining",
    "Hopping",
    "Rejoicing",
    "Rhythm",
];

const names = [
    "Katarina",
    "Dávid",
    "Norbi",
    "Igor",
    "Barnabás",
    "Elena",
    "Hiroshi",
    "Sophia",
    "Matías",
    "Léa",
    "Carlos",
    "Amara",
    "Alessio",
    "Isabella",
    "Youssef",
    "Emilia",
    "Katarina",
    "Anton",
    "Mila",
    "Sebastian",
    "Ava",
    "Elsa",
    "Maximilian",
    "Leila",
    "Luca",
    "Yuki",
    "Sofia",
    "Oscar",
    "Eva",
    "Raphael",
    "Carmen",
    "Leo",
    "Mia",
    "Luis",
    "Aria",
    "Hana",
    "Gabriel",
    "Zara",
    "Diego",
    "Eleanor",
    "Mateo",
    "Luna",
    "Liam",
    "Amina",
    "Nikolai",
    "Hannah",
    "Oliver",
    "Nina",
    "Lucas",
    "Selma",
    "Daniel",
    "Rosa",
    "Adam",
];

const conjunctions = [
    "of",
    "in",
    "and",
    "but",
    "or",
    "for",
    "before",
    "or",
    "after",
    "since",
];

const adverbs = [
    "Bluntly",
    "Early",
    "Poorly",
    "Gracefully",
    "Often",
    "Now",
    "Gently",
    "Sadly",
    "Mournfully",
    "Melancholically",
    "Lamentably",
    "Wistfully",
    "Tearfully",
    "Sorrowfully",
    "Elegiacally",
    "Pensively",
    "Regretfully",
    "Lugubriously",
    "Desolately",
    "Dolefully",
    "Woefully",
    "Pathetically",
    "Solemnly",
    "Remorsefully",
    "Aching",
    "Yearningly",
    "Longingly",
    "Tenderly",
    "Softly",
    "Quietly",
    "Slowly",
    "Gloomily",
    "Depressingly",
    "Dismally",
    "Darkly",
    "Hopelessly",
    "Bitterly",
    "Abyssmally",
    "Miserably",
    "Wretchedly",
    "Tragically",
    "Anguished",
    "Despairingly",
    "Regrettably",
    "Sighingly",
    "Despondently",
    "Disconsolately",
    "Heartbreakingly",
    "Forlornly",
    "Inwardly",
    "Emotionally",
    "Unhappily",
    "Inconsolably",
    "Inexpressibly",
    "Dispiritedly",
];

// adjective + noun / name 
// adjective + noun + VERB + adverb
// verb + conjunction + adjective + noun
// noun + conjunction + name

// alphabet position check function
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function alphabetCheck(string, position) {
    let numValue = 0;
    for (let i = 0; i < alphabet.length; i++) {
        if (string[position - 1] === alphabet[i]) {
            numValue = i + 1;
        }
    }
    return numValue;
}
// band name generator
function bandNameGenerator(string) {
    let bandName = "";
    alphabetCheck(string, 1)
    let generator = alphabetCheck(string, 1) % 4;
    if (generator === 0) {
        bandName = adjectives[alphabetCheck(string, 3) * alphabetCheck(string, 2) % adjectives.length] + " " + nouns[alphabetCheck(string, 4) * alphabetCheck(string, 3) % nouns.length];
    }
    else if (generator === 1) {
        bandName = adjectives[alphabetCheck(string, 4) * alphabetCheck(string, 3) % adjectives.length] + " " + nouns[alphabetCheck(string, 3) * alphabetCheck(string, 2) % nouns.length] + " " + verbs[alphabetCheck(string, 2) * alphabetCheck(string, 3) % verbs.length] + " " + adverbs[alphabetCheck(string, 2) * alphabetCheck(string, 4) % adverbs.length]
    }
    else if (generator === 2) {
        bandName = verbs[alphabetCheck(string, 4) * alphabetCheck(string, 3) % verbs.length] + " " + conjunctions[alphabetCheck(string, 2) * alphabetCheck(string, 4) % conjunctions.length] + " " + adjectives[alphabetCheck(string, 2) * alphabetCheck(string, 1) % adjectives.length] + " " + nouns[alphabetCheck(string, 3) * alphabetCheck(string, 2) % nouns.length]
    }
    else {
        bandName = nouns[alphabetCheck(string, 4) * alphabetCheck(string, 2) % nouns.length] + " " + conjunctions[alphabetCheck(string, 3) * alphabetCheck(string, 4) % conjunctions.length] + " " + names[alphabetCheck(string, 2) * alphabetCheck(string, 1) % names.length]
    }
    return bandName;
}
let chosenString = "ÉÁÁÁÉÁ"
console.log(bandNameGenerator(chosenString));

// Album title generator
function albumTitleGenerator(bandName) {
    let albumTitle = "";
    let numValue = 0;
    numValue = bandName.length;
    let generator = numValue % 4;
    if (generator === 0) {
        albumTitle = nouns[numValue % nouns.length];
    }
    else if (generator === 1) {
        albumTitle = verbs[numValue % verbs.length];
    }
    else if (generator === 2) {
        albumTitle = `${adjectives[numValue % adjectives.length]}  ${names[numValue % names.length]}`;
    }
    else {
        albumTitle = conjunctions[(numValue - 2) % conjunctions.length] + " " + nouns[numValue % nouns.length] + " " + conjunctions[(numValue + 2) % conjunctions.length] + " " + nouns[(numValue - 1) % nouns.length];
    }
    return albumTitle;

    // Noun
    // verb
    // adjective name
    // conjunction + noun + conjunction + noun
}
console.log(albumTitleGenerator(bandNameGenerator(chosenString)));
let albumTitle = (albumTitleGenerator(bandNameGenerator(chosenString)));
let bandName = bandNameGenerator(chosenString);
//Description Generator
function albumDescriptionGenerator(albumTitle) {
    let description = "";
    const descriptionTemplates = [
        "Get lost in the melodies of {{albumTitle}}, it is a true musical masterpiece, you can enjoy the {genre}.",
        "{{albumTitle}}, released in year, it is the first studio album of {bandname} in style {genre}.",
    ]
    let generator = wordCount(albumTitle) % descriptionTemplates.length;
    if (generator === 0) {
        description = `Get lost in the melodies of ${albumTitle}, it is a true musical masterpiece, you can enjoy the blend of ${musicalGenres[albumTitle.length % musicalGenres.length]} and ${musicalGenres[(albumTitle.length + 3) % musicalGenres.length]}, with hints of ${musicalThemes[albumTitle.length % musicalThemes.length]}.`
    }
    else {
        description = albumTitle + ", released in " + generateYear(albumTitle) + ", is the first studio album of " + bandName + " in " + musicalGenres[albumTitle.length % musicalGenres.length] + " and " + musicalGenres[(albumTitle.length + 3) % musicalGenres.length] + " style."
    }
    return description;
}
const musicalGenres = ["pop", "rock", "metal", "jazz", "hip-hop", "classical", "folk", "soul", "RnB", "drum and bass", "latino", "reggaeton", "EDM",];
const musicalThemes = ["loss", "drugs", "peace", "love", "romance", "partying", "politics", "religion", "history", "depression"];

function wordCount(albumTitle) {
    return albumTitle.split(" ").length
}
console.log(albumDescriptionGenerator(albumTitle))

//Year generator
function generateYear(albumTitle) {
    let year = 0;
    alphabetCheck(albumTitle, 1);
    let generator = alphabetCheck(albumTitle, 1) % 2;
    if (generator === 0) {
        year = 1900
        for (let i = 0; i < 10; i++) {
            if (alphabetCheck(albumTitle, 2) % 10 === i) {
                year += i * 10;
                for (let j = 0; j < 10; j++) {
                    if (alphabetCheck(albumTitle, 3) % 10 === j) {
                        year += j;
                    }
                }
            }
        }
    }
    else {
        year = 2000
        if (alphabetCheck(albumTitle, 3) % 3 === 0) {
            year += 0
            for (let i = 0; i < 10; i++) {
                if (alphabetCheck(albumTitle, 4) % 10 === i) {
                    year += i;
                }
            }
        }
        else if (alphabetCheck(albumTitle, 3) % 3 === 1) {
            year += 10;
            for (let i = 0; i < 10; i++) {
                if (alphabetCheck(albumTitle, 4) % 10 === i) {
                    year += i;
                }
            }
        }
        else {
            year += 20;
            for (let i = 0; i < 4; i++) {
                if (alphabetCheck(albumTitle, 4) % 4 === i) {
                    year += i;
                }
            }
        }
    }
    return year;
}

console.log(generateYear(albumTitle));

// album data generator

function albumDataGenerator(string) {
    let album = {
        bandName: "",
        title: "",
        description: "",
        year: 0
    };
    album.bandName = bandNameGenerator(string);
    album.title = albumTitleGenerator(album.bandName);
    album.description = albumDescriptionGenerator(album.title);
    album.year = generateYear(album.title);
    return album;
}

console.log(albumDataGenerator(chosenString));


let uresString = "";
uresString += 2;
uresString += 0;
uresString += 1;
uresString += 9;

console.log(uresString);
uresString = uresString * 1;

console.log(uresString);
2019 = 2 * 1000 + 1 * 10 + 9 *1;