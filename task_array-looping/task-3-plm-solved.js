
// Use a for...of loop to concatenate all the elements of an array into a single string.

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let stringOutput = [];
for (let keys of numbers){
    stringOutput.push(keys);
}
let stringResult = stringOutput.join('');
// let stringSplit = stringResult.split(' ');
let stringSplit = stringResult.split();
console.log(stringSplit);



// Output: 'TomTimTinTik'
