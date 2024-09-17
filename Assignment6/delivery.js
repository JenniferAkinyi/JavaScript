const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400},
    {id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500},
    {id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200},
];

let total = 0;

let filteredFoods = availableFoods.filter((foodPrices) => {
    return foodPrices.price > 450;
});

filteredFoods.forEach((filterPrice) => {
    total += filterPrice.price;
});

console.log(filteredFoods);
console.log(total);

console.log(`My total bill for items above 450 is ${total}`);
