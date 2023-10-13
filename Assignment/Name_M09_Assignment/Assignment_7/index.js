
let numProducts = parseInt(prompt('Enter the number of products:'));
let products = [];
for (let i = 0; i < numProducts; i++) {
  let productName = prompt('Enter the name of Product ' + (i + 1) + ':');
  let productQuantity = parseInt(prompt('Enter the quantity of ' + productName + ':'));
  let product = {
    name: productName,
    quantity: productQuantity
  };
  
  products.push(product);
}
products.forEach(function(product) {
  console.log(product.name + ' : ' + product.quantity);
});
