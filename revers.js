
const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);



// other process

const revNumbers = [];

// for (const num of numbers){
//     // console.log(numbers);
//     // revNumbers.push(num);
//     revNumbers.unshift(num);
// }
// console.log(revNumbers);



// other process ---- normal for loop

// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     revNumbers.unshift(num);
// }
// console.log(revNumbers);






// start from revers site  or decremental

for (let i = numbers.length - 1; i>=0; i--){
    const num = numbers[i];
    // console.log(num);
    revNumbers.push(num);
}
console.log(revNumbers);
