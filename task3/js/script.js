let num;
let sum = 0;
let max;

alert(`Taks 3
A program that calculates the sum of cubes of all numbers from 1 to the number to be entered`)

max = prompt(`Include some number: `);

for (let i = 1; i <= max; i++) {
    num = i;
    sum += num**3;
    console.log(sum)
}

alert(`Your answer is ${sum}`)