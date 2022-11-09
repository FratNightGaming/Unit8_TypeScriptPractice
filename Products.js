var product1 = { name: "God of War", price: 59.99 };
var product2 = { name: "Dark Souls 5", price: 99.99 };
var product3 = { name: "Fall Guys", price: 19.99 };
var products2 = [product1, product2, product3];
console.log(products2);
function CalcAverageProductPrice(products) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    var average = total / products.length;
    return average;
}
var average = CalcAverageProductPrice(products2);
console.log("The average price of all products is: ".concat(average));
