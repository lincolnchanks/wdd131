nums = [14, 25, 3, 1];

// nums.sort() returns 1, 14, 25, 3
console.log(nums.sort(compareFn));

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

console.log(simpleList.sort());

let lowerList = simpleList.map(function(fruit){
    return fruit.toLowerCase();
})

console.log(lowerList.sort());

let searchTerm = 's';

let filterFruit = lowerList.filter(searchFruit);

function searchFruit(fruit){
    return fruit.includes(searchTerm);
}

console.log(filterFruit);

// **Very re-usable code**
function compareFn(a, b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

console.log(products.sort(compareFn));

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

let query = 'dog';

let filterAnimalsList = animals.filter(searchAnimals);

function searchAnimals(animal){
    return animal.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filterAnimalsList);

let queryTrait = 'strong';

let filteredTraits = animals.filter(searchTraits);

function searchTraits(animal){
    return animal.traits.find((trait) =>
        trait.toLowerCase().includes(queryTrait.toLowerCase())
    );
}

console.log(filteredTraits);