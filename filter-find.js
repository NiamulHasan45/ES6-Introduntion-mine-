const numbers = [5, 6, 7, 9];

const bigNumbers = numbers.filter(number=> number>5);
console.log(bigNumbers);

const products = [
    {name: 'water bottle', price: 59, color: 'red'},
    {name: 'coke bottle', price: 59, color: 'yellow'},
    {name: '7up bottle', price: 59, color: 'green'}
]

const bigProducts = products.filter(product=> product.color = 'black');
console.log(bigProducts);
const bigProductsMap = products.map(product=> product.color = 'black');
console.log(bigProductsMap);
const bigProductswfind = products.find(product=> product.color = 'black');
console.log(bigProductswfind);
