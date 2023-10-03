function emailGenerator(firstName, lastName) {
    return `${firstName}.${lastName}.gmail.com`
}

console.log(emailGenerator("norbert", "lengyel"))

// foodlist 

const foodList = [1, 3, 5, 6, 7, 8];
console.log(Math.max(...foodList));

function foodTime(foodList) {
    const min = Math.min(...foodList);
    const max = Math.max(...foodList);
    const newList = [];

    for (let i = min; i <= max; i++) {
        newList.push(i);
    }

    return newList;
}

console.log(foodTime(foodList));

// phone number 

console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))

function phoneNumberGenerator() {

    const digits = []
    for (let i = 0; i < 9; i++) {
        const rand = Math.floor(Math.random() * 10)
        digits.push(rand)
    }
    return "+" + digits.join("")
}
console.log(phoneNumberGenerator())

// male cats 

function positiveSum(cats) {
    let males = 0;

    for (let i = 0; i < cats.length; i++)
        if (cats[i] > 0)
            males++;

    return males;
}


const cats = [-5, -8, -9, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const maleCats = positiveSum(cats);
console.log("Number of the male cats: " + maleCats);

// where is Mimi

function searchCat(name, catz) {
    for (let i = 0; i < catz.length; i++) {
        if (catz[i].name === name) {
            return catz[i]
        }
    }
    return 0
}

const catz = [
    { name: "Mimi" },
    { name: "Cirmos" },
    { name: "Sanyi" },
    { name: "Kormos" }]

console.log(searchCat("Mimi", catz))
console.log(searchCat("asdf", catz))

// wrong names 

function removeChar(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].substring(1, names[i].length - 1)
    }
    return names
}

const names = ["zAladari", "kSanyif", "-Marcsid"]
const goodNames = removeChar(names)

console.log(goodNames)

// youngest cat

function youngestCat(catAges) {
    let minAge = catAges[0]

    for (let i = 0; i < catAges.length; i++) {
        if (catAges[i] < minAge)
        minAge = catAges[i]
    }
    return `our youngest cat will be ${minAge} years old`
}

const catAges = [1, 5, 9, 4, 3, 2, 10, 15];

console.log(youngestCat(catAges));

// create ID 

function createId(nums) {
    return parseInt(nums.toString().split("").reverse().join(""));
}

console.log([1,2,3,4,5].join(""));

console.log(createId(987));

// second solution

const num1 = 123456;
const arr1 = num1.toString().split("");
console.log(arr1.reverse());

// third solution

const arr2 = [];
const numStr = num1.toString();
const maxIndex = numStr.length-1;

for(let i = maxIndex; i >= 0; i--) {
    //arr2[maxIndex-i] = numStr[i];
    arr2.push(numStr[i]);
}

console.log(arr2);