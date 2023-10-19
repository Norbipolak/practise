// Add all members
const ourTeam = {
	name: "heroes",
	members: [
		{
			name: "Katarina",
			birthday: { year: 1986, month: 11, day: 7 },
			location: { country: "Hungary", city: "Budapest" },
			codingLevel: { level: 1, seniority: "" },
			favorites: {
				favBooks: [
					{
						title: "One Hundred Years of Solitude",
						author: "Gabriel Garcia Marquez",
						year: 1967,
						characters: ["Aureliano Buendia", "Rebeca", "Ursula Iguaran", "Jose Arcadio"],
						review: "One Hundred Years of Solitude is the history of the isolated town of Macondo and of the family who founds it, the Buendías. For years, the town has no contact with the outside world, except for gypsies who occasionally visit, peddling technologies like ice and telescopes.",
					},
					{
						title: "The Old Man and the Sea",
						author: "Ernest Hemingway",
						year: 1952,
						characters: ["Santiago", "Manolin", "The Marlin-the fish"],
						review: "The Old Man and the Sea is the story of an epic struggle between an old, seasoned fisherman and the greatest catch of his life. For eighty-four days, Santiago, an aged Cuban fisherman, has set out to sea and returned empty-handed."
					}
				],
				favMovies: [
					{
						title: "Frida",
						year: 2002,
						rating: 7.4,
						directors: ["Julie Taymor"],
						writers: ["Hayden Herrera", "Clancy Sigal"],
						stars: ["Salma Hayek", "Alfred Molina", "Geoffrey Rush"],
						genres: ["Biography", "Drama"],
						review: "The story of this Mexican artist is wonderfully presented in this movie, with a stunning performance of Salma Hayek. Frida is showed as a great artist, revolutionary human being, having a great sexuality, feeling pain due to her accident, but having a great pleasure in life."
					},
					{
						title: "The Best Offer",
						year: 2013,
						rating: 7.8,
						directors: ["Giuseppe Tornatore"],
						writers: ["Giuseppe Tornatore"],
						stars: ["Geoffrey Rush", "Jim Sturgess", "Sylvia Hoeks"],
						genres: ["Crime", "Drama", "Mystery"],
						review: "An intriguing, suspenseful, and sometimes tense film, The Best Offer is fascinating. As the elderly expert, Rush is elegant, erudite, and on the snobby side. Gradually, as he becomes interested in Claire, he softens.",
					},
					{
						title: "Casablanca",
						year: 1942,
						rating: 8.5,
						directors: ["Michael Curtiz"],
						writers: ["Julius J. Epstein", "Philip G. Epstein", "Howard Koch"],
						stars: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
						genres: ["Drama", "Romance", "War"],
						review: "With an incredibly gripping narrative, filled with unforgettable characters and endlessly quotable dialogue, Casablanca is a heart-wrenching and inspiring tale of sacrifice, love, integrity, and the power of patriotism. The greatest movie ever made.",
					},
					{
						title: "Gone with the Wind",
						year: 1939,
						rating: 8.1,
						directors: ["Victor Fleming", "George Cukor", "Sam Wood"],
						writers: ["Margaret Mitchell", "Sidney Howard"],
						stars: ["Clark Gable", "Vivien Leigh", "Thomas Mitchell"],
						genres: ["Drama", "Romance", "History"],
						review: "Gone with the Wind is a superb piece of cinema shot in a beautiful way like no other film, a great story with amazing performances all around. A film about love, perseverance, deception, and tragedy. This film captures the pure attitude and idea of the south after the civil war and during the reconstruction period.",
					}
				]
			}
		},
		{
			name: "Igor",
			birthday: { year: 1999, month: 6, day: 17 },
			location: { country: "Hungary", city: "Etyek" },
			codingLevel: { level: 10, seniority: "" },
			favorites: {
				favBooks: [
					{
						title: "The Lord of the Rings: The Return of the King",
						author: "J. R. R. Tolkien",
						year: 1955,
						characters: ["Aragorn", "Frodo Baggins", "Samwise Gamgee", "Gollum"],
						review: "The culmination of the famous Lord of the Rings trilogy, this book concludes the epic journey our heroes have embarked upon at the start of the story. It is emotional, exciting and  the ending perfectly satisfies any expectation one would have. The concepts of heroism, positive masculinity, companionship and the importance of little things' impact in opposition of evil are all present, but my favorite part is the very end, which showcases the aftermath of war and the toll it takes on the people.",
					},
					{
						title: "The Hobbit",
						author: "J. R. R. Tolkien",
						year: 1937,
						characters: ["Bilbo Baggins", "Gandalf", "Thorin Oakenshield", "Bolg"],
						review: "Written by the famous J. R. R. Tolkien, this book estabilishes the world of Middle Earth, and beloved characters such as Bilbo Baggins, Gandalf and Gollum. The story tackles interesting topics, such as personal growth through hardships, the importance of company and the horrors of war. The world building, unique creatures and the author's descriptive style makes this 'children's book' one of my favorites.",
					}
				],
				favMovies: [
					{
						title: "Star Wars: Episode III - Revenge of the Sith",
						year: 2005,
						rating: 7.6,
						directors: ["George Lucas"],
						writers: ["George Lucas", "John Ostrander", "Jan Duursema"],
						stars: ["Hayden Christensen", "Natalie Portman", "Ewan McGregor"],
						genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
						review: "The ending episode of the prequel trilogy of the beloved Star Wars series, which is one of the most influential works in the history of cinema and sci-fi. The emotional impact of this movie for me is almost unmeasurable, the characters go through the hardest struggles of their lives, while the world reshapes around them. The fall from grace topic always had me interested, and seeing the literal and figurative births of characters from the original trilogy is always a highly emotional part. Accompanied by the beautiful score of John Williams, this movie will always be the closest to my heart.",
					},

					{
						title: "Baby Driver",
						year: 2017,
						rating: 7.6,
						directors: ["Edgar Wright"],
						writers: ["Edgar Wright"],
						stars: ["Ansel Elgort", "Jon Bernthal", "Jon Hamm"],
						genres: ["Action", "Crime", "Drama", "Music"],
						review: "Dynamic, musical and exciting, this movie combines elements from heist movies, musicals and racing movies. We follow the extremely talented driver, nicknamed Baby, who has to work for a criminal mastermind after accidentally crossing paths with him, paying back his debts in the form of being the getaway driver of his crew of bank robbers. The main character suffers from tinnitus, and copes with it in the form of constantly listening to music, making every scene full of life and energy. The direction might be my favorite part, it builds around the songs extremely well, always stringing us along with the vibes."
					},

					{
						title: "The Lord of the Rings: The Return of the King",
						year: 2003,
						rating: 9.0,
						directors: ["Peter Jackson"],
						writers: ["J. R. R. Tolkien", "Fran Walsh", "Philippa Boyens"],
						stars: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
						genres: ["Action", "Adventure", "Drama", "Fantasy"],
						review: "The epic conclusion to the legendary Lord of the Rings series, this production stands as one of the most awarded movies of all time. From start to finish, this story does not fail to capture the audience and elicit an emotional response. From the high-scale battle of Pelennor Fields, to the small-scale struggle of Frodo and Sam, the movie excels in all aspects, perfectly adapting Tolkien's story to the big screen. The extreme runtime might be a deterrent to some, but the true experience the director's cut provides is unmatched on a cinematic scale, especially with the beautiful music composed by Howard Shore.",
					},

					{
						title: "Jurassic Park",
						year: 1993,
						rating: 8.2,
						directors: ["Steven Spielberg"],
						writers: ["Michael Crichton", "David Koepp"],
						stars: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
						genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
						review: "One of the most ambitious projects of the 1980s, this movie captured their audience with ground-breaking technology, blowing away every viewer with its massive scale dinosaur animatronics. The almost horror-like story, which tackles the perversion of science and greed of mankind, is highlighted by the bone-chilling atmosphere the huge reptiles provide with their earthquake-like stomps and blood-curdling growls. The music and sound design elevate this movie above the rest, while the dinosaurs pull in everyone's attention."
					}
				]

			}
		},
		{
			name: "Norbert",
			birthday: { year: 1992, month: 7, day: 12 },
			location: { country: "Hungary", city: "Budapest" },
			codingLevel: { level: 7, seniority: "" },
			favorites: {
				favBooks: [
					{
						title: "Harry Potter",
						author: "J.K.Rowling",
						year: 1997,
						characters: ["Hermione", "Ron", "Harry", "Hagrid"],
						review: "Whether it was because of the miraculous spells, the fascinating creatures, or the amazing friendships, Harry Potter has captivated so many of us. Hogwarts is obviously one-of-a-kind, but reading one of these enchanting tales will help you relive the magic of Harry Potter.",
					},
					{
						title: "Lord of the Rings",
						author: "J.R.R.Tolkien",
						year: 1954,
						characters: ["Sam", "Legolas", "Gandalf", "Aragorn"],
						review: "The Lord of the Rings is a profound, classic example of well-written fiction. Whether you are an aspiring author yourself or someone who simply enjoys literature for its beauty, The Lord of the Rings is both a joy and a standard",

					}
				],
				favMovies: [
					{
						title: "Lost Bullet",
						year: 2020,
						rating: 6.3,
						directors: "Guillaume Pierret",
						writers: ["Guillaume Pierret", "Alban Lenoir", "Kamel Guemra"],
						stars: ["Alban Lenoir", "Nicolas Duvauchelle", "Ramzy Bedia"],
						genres: ["Action", "Crime", "Thriller"],
						review: "It may not reinvent the standard action formula, but Lost Bullet's relentless pursuit of genre thrills offers a satisfactory low-rent diversion.",
					},
					{
						title: "Godfather",
						year: 1972,
						rating: 9.2,
						directors: "Francis Ford Coppola",
						writers: ["Mario Puzo", "Francis Ford Coppola"],
						stars: ["Marlon Brando", "Al Pacino", "James Caan"],
						genres: ["Crime", "Drama"],
						review: "The Godfather is a Masterpiece is because it has powerful action scenes that no other movie of the time had. The movie is not a normal action movie, but there are a few violent and brutal scenes in it. The way these scenes are shot and put together is what makes them stand out.",
					},
					{
						title: "Belle and Sebastian",
						year: 2013,
						rating: 6.9,
						directors: "Nicolas Vanier",
						writers: ["Juliette Sales", "Fabien Suarez", "Nicolas Vanier"],
						stars: ["Felix Bossuet", "Tcheky Karyo", "Margaux Chatelier"],
						genres: ["Adventure", "Drama", "Family"],
						review: "Simple and charming, Belle & Sebastian is not without fault, but still has plenty of lovable traits that come together to form a warm and largely undemanding view.",
					},
					{
						title: "Mafioso",
						year: 1962,
						rating: 7.6,
						directors: "Alberto Lattuada",
						writers: ["Rafael Azcona", "Bruno Caruso", "Marco Ferreri"],
						stars: ["Alberto Sordi", "Norma Bengell", "Gabriella Conti"],
						genres: ["Comedy", "Crime", "Drama"],
						review: "The film ripens in an unanticipated way, nimbly shifting from near farce to something quite a bit darker.",
					}
				]
			}
		},
		{
			name: "Dávid",
			birthday: { year: 1989, month: 7, day: 25 },
			location: { country: "Hungary", city: "Miskolc" },
			codingLevel: { level: 99, seniority: "" },
			favorites: {
				favBooks:
					[
						{
							title: "The Andromeda Strain",
							author: "Michael Crichton",
							characters: ["George Black", "Harry Franko", "Lisa Gaterfield", "Celia Hoover"],
							review: "Four American scientists, chosen in advance for their experimental achievements in the fields of clinical microbiology, epidemiology, pathology, and electrolyte chemistry, are summoned under conditions of total news blackout and utmost urgency to Wildfire's secret laboratory five stories beneath the Nevada desert. There -- surrounded by banks of the most sophisticated computer-assisted equipment, and sealed off from the outside world except for a telecommunications link with the national security apparatus -- they work against the threat of a worldwide epidemic to find an antidote to the unknown microorganism that has inexplicably killed all but two inhabitants (an elderly derelict and an infant) of the tiny Arizona town where the satellite was retrieved. Step by step they begin to unravel the puzzle of the Andromeda Strain, until, terrifyingly, their microbacterial adversary ruptures the hypersterile seal of the laboratory and their already desperate search for a biomedical answer becomes a split-second race against an atomic deadline.",
						},
						{

							title: "Hobbit",
							author: "J.R.R. Tolkien",
							characters: ["Gandalf", "Bilbo", "Thorin", "Ori"],
							review: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
						}
					],
					favMovies: [
						{
							title: "The Matrix",
							year: 1999,
							rating: 8.7,
							directors: ["The Wachowskis"],
							writers: ["The Wachowskis"],
							stars: ["Keanu Reeves", "Laurance Fishburne", "Carrie-Anne Moss"],
							genres: ["Sci-Fi"],
							review: "Matrix :  Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life",
						},
						{
							title: " Yellowstone series",
							year: 2018,
							rating: 8.7,
							directors: ["Taylor Sheridan"],
							writers: ["John Linson"],
							stars: ["Kevin Costner", "Luke Grimes", "Kelly Reilly", "Wes Bentley"],
							genres: ["Drama"],
							review: "Yellowstone follows the Dutton family, led by John Dutton, who controls the largest contiguous ranch in the United States, under constant attack by those it borders - land developers, an Indian reservation, and America's first National Park. It is an intense study of a violent world far from media scrutiny - where land grabs make developers billions, and politicians are bought and sold by the world's largest oil and lumber corporations. Where drinking water poisoned by fracking wells and unsolved murders are not news: they are a consequence of living in the new frontier. It is the best and worst of America seen through the eyes of a family that represents both",

						},
						{
							title: "Men Of Honor",
							year: 2001,
							rating: 7.2,
							directors: ["George Tillman Jr"],
							writers: ["Scott Marshall Smith"],
							stars: ["Cuba Gooding Jr", "Robert De Niro", "Charlize Theron"],
							genres: ["Drama", "Biography"],
							review: "Carl Brashear (Cuba Gooding Jr.) is an ambitious sharecropper who joins the U.S. Navy to become the world's first black master diver. But as he works through diving training, the bitter and racist Master Chief Billy Sunday (Robert De Niro) sets out to make Carl's journey as difficult as possible. Despite the entire Navy doubting his potential and sabotaging his training, the determined Carl proves that he can overcome the discrimination around him",
						},
						{
							title: "Hell Or High Water",
							year: 2016,
							rating: 7.6,
							directors: ["David Mackenzie"],
							writers: ["Taylor Sheridan"],
							stars: ["Chris Pine", "Ben Foster", "Jeff Bridges"],
							genres: ["Drama", "Thriller"],
							review: "Toby is a divorced father who's trying to make a better life for his son. His brother Tanner is an ex-convict with a short temper and a loose trigger finger. Together, they plan a series of heists against the bank that's about to foreclose on their family ranch. Standing in their way is Marcus, a Texas Ranger who's only weeks away from retirement. As the siblings plot their final robbery, they must also prepare for a showdown with a crafty lawman who's not ready to ride off into the sunset.",
						}
					]
			}
		},
	],
};
console.log(ourTeam);

for (const member of ourTeam.members) {
	if (member.codingLevel.level < 50)
		member.codingLevel.seniority = "junior"
	else if (member.codingLevel.level >= 50 && member.codingLevel.level <= 75)
		member.codingLevel.seniority = "medior"
	else
		member.codingLevel.seniority = "senior"
}

console.log(ourTeam)

for (const member of ourTeam.members) {
	console.log(member);
}

let averageAge = 0
for (const member of ourTeam.members) {
	averageAge += 2023 - member.birthday.year
	if (member.birthday.month === 9) {
		if (member.birthday.day > 8)
			averageAge--
	}
	else if (member.birthday.month > 9) {
		averageAge--
	}
}
averageAge /= ourTeam.members.length
console.log(averageAge)

let averageCodingLevel = 0
for (const member of ourTeam.members) {
	averageCodingLevel += member.codingLevel.level;
}
averageCodingLevel /= ourTeam.members.length
console.log(averageCodingLevel);

let youngestMember = "";
let youngestYear = 0;
for (let i = 0; i < ourTeam.members.length; i++) {
	if (youngestYear <= ourTeam.members[i].birthday.year) {
		youngestMember = ourTeam.members[i].name;
		youngestYear = ourTeam.members[i].birthday.year;
	}
	console.log(youngestMember);
}
let oldestMember = '';
let oldestYear = 3000;

for (let i = 0; i < ourTeam.members.length; i++) {
	if (ourTeam.members[i].birthday.year < oldestYear) {
		oldestMember = ourTeam.members[i].name;
		oldestYear = ourTeam.members[i].birthday.year;
	}
	console.log(oldestMember);
}

let location = {};

for (const member of ourTeam.members) {
	if (!location[member.location.city])
		location[member.location.city] = member.name;
	else
		location[member.location.city] += ', ' + member.name;
}
console.log(location)

let commonGenres = {}

ourTeam.members[0].favorites.favAlbums = {
	artist: "Eagles",
	title: "Hotel California",
	year: 1976,
	genres: ["soft rock"],
	sale: 42000000,
}


ourTeam.members[1].favorites.favAlbums = {
	artist: "Shania Twain",
	title: "Come On Over",
	year: 1997,
	genres: ["country", "pop"],
	sale: 40000000,
}


ourTeam.members[2].favorites.favAlbums = {
	artist: "Michael Jackson",
	title: "Thriller",
	year: 1982,
	genres: ["pop", "post-disco", "funk", "rock"],
	sale: 70000000,
}


ourTeam.members[3].favorites.favAlbums = {
	artist: "Whitney Houston",
	title: "The Bodyguard",
	year: 1992,
	genres: ["r&b", "soul", "pop", "soundtrack"],
	sale: 45000000,
}
	

for (const member of ourTeam.members) {
for (const genre of member.favorites.favAlbums.genres) {
	if (!commonGenres[genre])
		commonGenres[genre] = 1;
	else
		commonGenres[genre] += 1;

	}
}
console.log(commonGenres);

for (let i = 0; i < ourTeam.members.length; i++) {
	if(ourTeam.members[i].name === "Katarina")
	{ourTeam.members[i].colors = {}
	ourTeam.members[i].colors.primary = {red:252, green:182, blue:182}
	ourTeam.members[i].colors.secondary = {red:0, green:0, blue:0}

}
	else if(ourTeam.members[i].name === "Igor")
	{ourTeam.members[i].colors = {}
	ourTeam.members[i].colors.primary = {red:63, green:72, blue:204}
	ourTeam.members[i].colors.secondary = {red:0, green:162, blue:232}

	}
	else if(ourTeam.members[i].name === "Norbert")
	{ourTeam.members[i].colors = {}
	ourTeam.members[i].colors.primary = {red:255, green:165, blue: 0}
	ourTeam.members[i].colors.secondary = {red:0, green:255, blue:255}
	}


	else if(ourTeam.members[i].name === "Dávid")
	{ourTeam.members[i].colors = {}
	ourTeam.members[i].colors.primary = {red: 25, green: 111, blue:176}
	ourTeam.members[i].colors.secondary = {red:123, green:43, blue:215}
	
}
}

console.log(ourTeam.members[0].colors);
console.log(ourTeam.members[1].colors);
console.log(ourTeam.members[2].colors);
console.log(ourTeam.members[3].colors);







	// DON'T MODIFY THE CODE BELOW THIS LINE

	let toExport;

	try {
		//{ourTeam, averageAge, youngestMember, location, }
		toExport = [
			{ name: "ourTeam", content: ourTeam, type: "object" },
			{ name: "averageAge", content: averageAge, type: "number" },
			{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
			{ name: "youngestMember", content: youngestMember, type: "string" },
			{ name: "oldestMember", content: oldestMember, type: "string" },
			{ name: "location", content: location, type: "object" },
			{ name: "commonGenres", content: commonGenres, type: "object" },
		]

	} catch (error) {
		toExport = { error: error.message }
	}

	export { toExport };
