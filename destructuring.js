const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '01764567366', address: 'Chandpur', dress: 'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone, price, dress, id} = fish;


// console.log(phone);
// console.log(price);
// console.log(dress);


const company = {
    name: 'gp',
    ceo: {name: 'Md Niamul hasan', id: 23, address: 'Bhaluka'},
    web: {work: 'wesite-development', framework:"react", employee: 22}
}
const {framework, employee} = company.web;

console.log(framework, employee)
console.log(company.web.data?.value?.nid);
