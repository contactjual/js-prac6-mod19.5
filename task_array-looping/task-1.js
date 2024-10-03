
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const revColor = [];

for (i = colors.length - 1; i >= 0; i--) {
    const num = colors[i];
    revColor.push(num);
}
console.log(revColor);


// "revers === push" be remember please.