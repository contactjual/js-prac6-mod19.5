
// const persons = ["akib", "rekib", "sakib"];
// const sortedPersons = persons.sort();

// console.log(sortedPersons);


const persons = ["akib", "Rekib", "sakib"];
const sortedPersons = persons.sort();

console.log(sortedPersons);


// sort -- mane hocche sajano
// 1. Ascending --- smaller to larger
// Descending --- larger to smaller 

// const numbers = [2, 4 , 1, 8, 5, 6, 3]

// const numAscen = numbers.sort();
// console.log(numAscen);


const numbers = [2, 14 , 11, 8, 35, 66, 93]

const numAscen = numbers.sort(function(a, b){return( a - b)});  // more understand in the nex class
console.log(numAscen);

const numDscen = numbers.sort(function(a, b){return( b - a)});  // more understand in the nex class
console.log(numDscen);