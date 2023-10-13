function validateUser() {
  let name = prompt("Enter the user's name:");
  let age = Number(prompt("Enter the user's age:"));
  let email = prompt("Enter the user's email:");
  if (
    typeof name !== 'string' &&
    typeof age !== 'number' &&
    typeof email !== 'string'
  ) {
    return false;
  }
  if (name === '' || email === '') {
    return false;
  }
  if (age > 120) {
    return false; 
  }
  return true;
}
console.log(validateUser());
function filteredProducts(products, maxPrice) {
  return products.filter(product => product.price <= maxPrice);
}

let products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
  { name: "Product 4", price: 40 },
];

let maxPrice = 25;

console.log(filteredProducts(products, maxPrice));

function paginate(items, pageNumber) {
  let sIndex = (pageNumber - 1) * 10;
  let eIndex = sIndex + 10;
  return items.slice(sIndex, eIndex);
}
let items = Array.from({ length: 50 }, (_, index) => index + 1);
console.log(paginate(items, 1));
console.log(paginate(items, 3));

function removeDuplicates(items, property) {
  let uniqueItems = items.filter((item, index) => {
    let currentIndex = items.findIndex(
      (obj) => obj[property] === item[property]
    );
    return currentIndex === index;
  });

  return uniqueItems;
}
// const products = [
//   {
//     id: 1,
//     name: "Wireless Bluetooth Earphones",
//     price: 29.99,
//     category: "Electronics",
//     brand: "SoundBlast",
//   },
//   {
//     id: 2,
//     name: "Smart Fitness Tracker",
//     price: 49.99,
//     category: "Fitness",
//     brand: "FitTech",
//   },
//   {
//     id: 3,
//     name: "Leather Messenger Bag",
//     price: 79.99,
//     category: "Fashion",
//     brand: "UrbanStyle",
//   },
//   {
//     id: 4,
//     name: "Portable Power Bank",
//     price: 39.99,
//     category: "Electronics",
//     brand: "PowerUP",
//   },
//   {
//     id: 5,
//     name: "Stainless Steel Water Bottle",
//     price: 19.99,
//     category: "Kitchen",
//     brand: "HydroFlow",
//   },
//   {
//     id: 6,
//     name: "Men's Classic Wrist Watch",
//     price: 99.99,
//     category: "Fashion",
//     brand: "TimeMaster",
//   },
//   {
//     id: 7,
//     name: "Professional DSLR Camera",
//     price: 899.99,
//     category: "Electronics",
//     brand: "CapturePro",
//   },
//   {
//     id: 8,
//     name: "Organic Green Tea",
//     price: 9.99,
//     category: "Food & Beverage",
//     brand: "Nature's Brew",
//   },
//   {
//     id: 9,
//     name: "Premium Leather Wallet",
//     price: 59.99,
//     category: "Fashion",
//     brand: "LuxuryCraft",
//   },
//   {
//     id: 10,
//     name: "Wireless Gaming Mouse",
//     price: 39.99,
//     category: "Gaming",
//     brand: "GamePro",
//   },
// ];
let uniqueProducts = removeDuplicates(products, 'id');
console.log(uniqueProducts);
