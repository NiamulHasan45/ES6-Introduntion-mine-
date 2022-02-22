const numbers = [23, 45, 56, 67];
console.log(numbers);
console.log(...numbers);

const max = Math.max(12,34,23,67,33);
console.log(max);
console.log(Math.max(...numbers));

numbers.push(56);
console.log(numbers);

const numbers2 = [...numbers,88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
