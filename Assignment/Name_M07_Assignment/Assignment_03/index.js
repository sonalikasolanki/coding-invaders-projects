let bookList = prompt("Enter a list of books (titles separated by commas): ");
let books = bookList.split(",").map((book) => book.trim());

let promoGift = ["Set of Stickers"];

if (books.includes("The Little Prince") && books.includes("Pinocchio")) {
  books.unshift(...promoGift);
}

console.log("Items in the cart:");
console.log("A special gift —", promoGift)
console.log(books);