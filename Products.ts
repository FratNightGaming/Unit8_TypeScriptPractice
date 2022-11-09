interface IProduct
{
    name:string;
    price: number;
}

var product1 : IProduct = {name: "God of War", price: 59.99};
var product2 : IProduct = {name: "Dark Souls 5", price: 99.99};
var product3 : IProduct = {name: "Fall Guys", price: 19.99};

var products2 : IProduct[] = [product1, product2, product3];

console.log(products2);

function CalcAverageProductPrice(products : IProduct []) : number
{
    let total : number = 0;

    for (let i : number = 0; i < products.length; i++ )
    {
        total += products[i].price;
    }

    let average : number = total/products.length;
    
    return average;
}

var average : number = CalcAverageProductPrice(products2);

console.log(`The average price of all products is: ${average}`);


