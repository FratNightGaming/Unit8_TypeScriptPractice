interface IInventory
{
    product : IProduct;
    quantity : number;
}

var products2 : IProduct[] = [];
products2[0] = {name: "motor", price: 10};
products2[1] = {name: "sensor", price: 12.50};
products2[2] = {name: "LED", price: 1.00};

var inventory : IInventory[] = 
[
    {product : products2[0], quantity : 10},
    {product : products2[1], quantity : 4},
    {product : products2[2], quantity : 20},
];

function CalcInventoryValue(objects : IInventory []) : number
{
    let total : number = 0;

    for (let i : number = 0; i < objects.length; i++ )
    {
        total += objects[i].product.price * objects[i].quantity;
    }

    return total;
}

var total:number = CalcInventoryValue(inventory);
console.log(`The total value of all inventory is: ${total}`);
