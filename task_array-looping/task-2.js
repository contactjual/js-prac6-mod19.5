
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
        // console.log(evenNumber);
    }
}
// const resultsArray = evenNumbers.join([', '])
// console.log(resultsArray);
console.log(evenNumbers);
