const friends = ['Tom hanks', 'Tom cruise', 'Tom Brady'];
const allfriend = friends.map(friend => friend+' mia');
console.log(allfriend);

const products = [
    {name: 'water bottle', price: 59, color: 'red'},
    {name: 'coke bottle', price: 59, color: 'yellow'},
    {name: '7up bottle', price: 59, color: 'green'}
]
const productsName = products.map(x=>x.name);
console.log(productsName);

const bigProducts = products.map(product=> product.color = 'black');
console.log(bigProducts);