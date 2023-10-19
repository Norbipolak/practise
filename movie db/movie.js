import * as fs from 'node:fs';

let dataJson = {}
let dataJson_2 = {}

try {
	const data = fs.readFileSync('data.json', 'utf8');
	//console.log(data);
	dataJson = JSON.parse(data)
	//console.log(dataJson_2)
	//console.log(dataJson);
} catch (err) {
	console.error('Error reading the file:', err);
}

dataJson_2 = dataJson;                        //Ez a kódrészlet először a products tömbet JSON stringgé alakítja, majd vissza JSON objektummá, létrehozva ezzel egy teljes mélymásolatot, amely különálló objektumokat tartalmaz

// *********** Task 1: Collect names in an array of names without duplications *************
let allNameArray = []

// Fill array with Director names (includes duplications) 
for (let i = 0; i < dataJson.movies.length; i++) {
	for (let j = 0; j < dataJson.movies[i].directors.length; j++) {
		allNameArray.push(dataJson.movies[i].directors[j])
	}
}

// Fill array with Actors names (includes duplications) 
for (let i = 0; i < dataJson.movies.length; i++) {
	for (let j = 0; j < dataJson.movies[i].actors.length; j++) {
		allNameArray.push(dataJson.movies[i].actors[j])
	}
}

// Fill array with Writers names (includes duplications) 
for (let i = 0; i < dataJson.movies.length; i++) {
	for (let j = 0; j < dataJson.movies[i].writers.length; j++) {
		allNameArray.push(dataJson.movies[i].writers[j])
	}
}
// Eliminate duplications
let allNameArrayNoDuplicate = [...new Set(allNameArray)]
//console.log(allNameArrayNoDuplicate)

// *********** Task 2. Check each name's origin in data.json and put it in roles ***********
let movieDB = []

//genres:{ id: i + 1 genresName: movieName: }

// run over all names
for (let i = 0; i < allNameArrayNoDuplicate.length; i++) {
	// fill movieDB arra with objects
	movieDB[i] = {
		professionals: { id: i + 1, name: allNameArrayNoDuplicate[i], roles: [] },
		movies: [],
		genres: []
	}
	// run over all movies			
	for (let j = 0; j < dataJson.movies.length; j++) {
		// fill writers
		for (let k = 0; k < dataJson.movies[j].writers.length; k++) {
			if (allNameArrayNoDuplicate[i].split(' ').join('') === dataJson.movies[j].writers[k].split(' ').join('')) {
				movieDB[i].professionals.roles[0] = "writers"
			}
		}
		// fill directors
		for (let k = 0; k < dataJson.movies[j].directors.length; k++) {
			if (allNameArrayNoDuplicate[i].split(' ').join('') === dataJson.movies[j].directors[k].split(' ').join('')) {
				movieDB[i].professionals.roles[1] = "directors"
			}
		}
		// fill actors
		for (let k = 0; k < dataJson.movies[j].actors.length; k++) {
			if (allNameArrayNoDuplicate[i].split(' ').join('') === dataJson.movies[j].actors[k].split(' ').join('')) {
				movieDB[i].professionals.roles[2] = "actors"
			}
		}
	}
}
//console.log(movieDB)

// *********** Task 3. ush data.js into movieDB of movies key AND change all writers, actors, directors name to ID numbers ***********
//push data.js into movieDB of movies key
for (let i = 0; i < dataJson_2.movies.length; i++) {
	movieDB[i].movies.push(dataJson_2.movies[i])
	movieDB[i].movies[0].ID = i+1
	//change all writers name to ID numbers
	for (let j = 0; j < movieDB[i].movies[0].writers.length; j++) {
		for (let k = 0; k < movieDB.length; k++) {
			if (movieDB[i].movies[0].writers[j] === movieDB[k].professionals.name) {
				movieDB[i].movies[0].writers[j] = movieDB[k].professionals.id
			}
		}
	}
	//change all directors name to ID numbers
	for (let j = 0; j < movieDB[i].movies[0].directors.length; j++) {
		for (let k = 0; k < movieDB.length; k++) {
			if (movieDB[i].movies[0].directors[j] === movieDB[k].professionals.name) {
				movieDB[i].movies[0].directors[j] = movieDB[k].professionals.id
			}
		}
	}
	//change all actors name to ID numbers
	for (let j = 0; j < movieDB[i].movies[0].actors.length; j++) {
		for (let k = 0; k < movieDB.length; k++) {
			if (movieDB[i].movies[0].actors[j] === movieDB[k].professionals.name) {
				movieDB[i].movies[0].actors[j] = movieDB[k].professionals.id
			}
		}
	}
}
console.log(movieDB)






export { movieDB };