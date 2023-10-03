const letters = ["a", "v", "h", "j", "y"]

// named function

function repeatLetter3Times(letter){
    console.log(letter.repeat(3))
}

// anonymus callback function

letters.forEach(function(letter) {
    console.log(letter.repeat(3))
})

letters.forEach(console.log)

// 3 same ways to write a function

letters.forEach(function(letter) {
    console.log(letter)
})

// 2. arrow style with brackets 

letters.forEach((letter) => {
    console.log(letter)
})

// 3. arrow style without rackets

letters.forEach((letter) => console.log(letter))

// függvénymeghívás

const result = letters.forEach(repeatLetter3Times)
console.log(result)

// map ahol fontos a return, visszakapjuk amit akarunk egy arrayben

const results = letters.map(function(letter) {
    return letter.repeat(3)
})

console.log(letters)
console.log(results)

// map de leröviditett arrow függvénnyel

const result2 = letters.map(letter => /* mintha itt lenne a return */ letter.repeat(3))

console.log(result2)