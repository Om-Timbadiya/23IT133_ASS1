let cart=[
    { productName: "PlayStation", price: 2200, quantity: 1 },
    { productName: "Laptop", price: 2500, quantity: 2 },
    { productName: "HeadSet", price: 450, quantity: 1 }
]

const addProduct = (cart, product) => {
cart.push(product);
};

addProduct(cart,{productName: "Pendrive", price: 500, quantity: 1})
console.log(cart);

const calculateTotal = (cart)=>{
return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

console.log(calculateTotal(cart));

const removeProduct = (cart, productName) => {
return cart.filter(product => product.productName !== productName);
};

cart = removeProduct(cart,"Mouse");

console.log(cart);

const logProductDetails=(cart)=>{
cart.forEach(({productName, price, quantity }) => {console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);});
}
