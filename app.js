//for of
//for in 

const brinks = [`coke`, `water`, `fanta`, `orange juice`]
const filter = [
  { title: 'Dragon fruit', price: 10, id: 1 },
  { title: 'Kiwi', price: 5, id: 2 },
  { title: 'Watermelon', price: 20, id: 3 },
]

for (let drink of brinks) {
  console.log(`Today we have: ${drink}`);

}

for (let fruit of filter) {
  console.log(`This is ${fruit.title}and the price is${fruit.price}$`);

}

const student = {
  name: `John`,
  age: 22,
  year: `Senior`,
  nursing: false

}
for (let info in student) {
  console.log(info);

}