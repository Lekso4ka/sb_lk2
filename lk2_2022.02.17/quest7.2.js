let arr = [10, 3, 4, 12, 8, 9];

let max = 0;

for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
}

console.log(max);


list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
]
let maxPrice = 0;
for (let i = 0; i < list.length; i++) {
    maxPrice = Math.max(maxPrice, list[i].price);
}
console.log(maxPrice);

for (let i = 0; i < list.length; i++) {
    if (list[i].price === maxPrice) {
        console.log(list[i].product);
        break;
    }
}