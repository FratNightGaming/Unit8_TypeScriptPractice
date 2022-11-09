var products2 = [];
products2[0] = { name: "motor", price: 10 };
products2[1] = { name: "sensor", price: 12.50 };
products2[2] = { name: "LED", price: 1.00 };
var inventory = [
    { product: products2[0], quantity: 10 },
    { product: products2[1], quantity: 4 },
    { product: products2[2], quantity: 20 },
];
function CalcInventoryValue(objects) {
    var total = 0;
    for (var i = 0; i < objects.length; i++) {
        total += objects[i].product.price * objects[i].quantity;
    }
    return total;
}
var total = CalcInventoryValue(inventory);
console.log("The total value of all inventory is: ".concat(total));
