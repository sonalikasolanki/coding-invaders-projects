// let allProducts = [
//   {
//     productName: "Shampoo",
//     quantity: 100,
//   },
// ];

// // Add 2 new products
// allProducts.push({ productName: "conditioner", quantity: 50 });
// allProducts.push({ productName: "showergel", quantity: 75 });

// // Update quantity of products 2 and 4 to 100
// if (allProducts.length >= 2) {
//   allProducts[1].quantity = 100;
// }
// if (allProducts.length >= 4) {
//   allProducts[3].quantity = 100;
// }

// // Display all product details 
// if (allProducts.length === 0) {
//   console.log("Inventory is empty.");
// } else {
//   console.log("Current Inventory:");
//   for (let i = 0; i < allProducts.length; i++) {
//     console.log(`Product ${i + 1}: ${allProducts[i].productName} | Quantity: ${allProducts[i].quantity}`);
//   }
// }
//   let studentData = [
//     {
//       name: "John",
//       grade: 89,
//     },
//     {
//       name: "Bob",
//       grade: 75,
//     },
//     {
//       name: "Jenny",
//       grade: 90,
//     },
//     {
//       name: "Kevin",
//       grade: 92,
//     },
//     {
//       name: "Scott",
//       grade: 95,
//     },
//   ];
//   let totalGrade = 0;

//   for (let i = 0; i < studentData.length; i++) {
//     totalGrade += studentData[i].grade;
//   }
  
//   let averageGrade = totalGrade / studentData.length;
  
//   console.log("Student Names:");
//   studentData.forEach((student) => {
//     console.log(student.name);
//   });
//   console.log("Average Grade:", averageGrade);

// let weatherData = [20, 40, 25];
// let highestTemp = weatherData[0];
// let lowestTemp = weatherData[0];
// for (let i = 1; i < weatherData.length; i++) {
//   if (weatherData[i] > highestTemp) {
//     highestTemp = weatherData[i];
//   }
//   if (weatherData[i] < lowestTemp) {
//     lowestTemp = weatherData[i];
//   }
// }
// console.log("Temperature Data:", weatherData);
// console.log("Highest Temperature:", highestTemp);
// console.log("Lowest Temperature:", lowestTemp);

// let postData = [
//     {
//       content: "This is post one",
//       noOfLikes: 100,
//       noOfComments: 30,
//     },
//     {
//       content: "This is post two",
//       noOfLikes: 50,
//       noOfComments: 10,
//     },
//     {
//       content: "This is post three",
//       noOfLikes: 10,
//       noOfComments: 3,
//     },
//     {
//       content: "This is post four",
//       noOfLikes: 103,
//       noOfComments: 33,
//     },
//     {
//       content: "This is post five",
//       noOfLikes: 120,
//       noOfComments: 50,
//     },
//     {
//       content: "This is post six",
//       noOfLikes: 30,
//       noOfComments: 3,
//     },
//     {
//       content: "This is post seven",
//       noOfLikes: 34,
//       noOfComments: 30,
//     },
//     {
//       content: "This is post eight",
//       noOfLikes: 200,
//       noOfComments: 60,
//     },
//   ];
// postData.sort((a, b) => b.noOfLikes - a.noOfLikes);
// console.log("The Three Most Popular Posts:");
// for (let i = 0; i < 3 && i < postData.length; i++) {
//   console.log(`Content: ${postData[i].content}`);
//   console.log(` Likes: ${postData[i].noOfLikes}`);
//   console.log(`Comments: ${postData[i].noOfComments}`);
// }
// let items =["The Lord of the Rings", "Avengers", "Titanic", "Star Wars", "The Hunger Games", "The Jungle Book", "Inside Out"]
// console.log("items are longer than 10 characters:");
// for(const item of items ){
//     if(item.length > 10){
//         console.log(item);
//     }
// }
// function divideby(){
//     let x=49;
//     let y=7;
//     console.log(x/y);
// }
// divideby();
// function hellomassage(){
//     console.log('“Greetings,programmers!”');

// }
// hellomassage();
// function stringChecker(str, num) {
//     const len = str.length;
//     if (len === num) console.log(true);
//     console.log(false);
// }
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(sumArray(numbers)); 
  
// function countOccurrences(words) {
//     let occurrences = {};
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       if (occurrences[word]) {
//         occurrences[word] += 1;
//       } else {
//         occurrences[word] = 1;
//       }
//     }
//     return occurrences;
//   }
//   let words = ["apple", "banana", "apple", "orange", "banana", "apple"];
//   console.log(countOccurrences(words));
// function findLongestWord(words) {
//     let longestWord = '';
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
  
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
//   let words = ["apple", "banana", "orange", "grapefruit"];
//   console.log(findLongestWord(words)); 
  
// function getAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
//     let sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     let average = sum / numbers.length;
//     return average;
//   }
//   let numbers = [10, 15, 20, 25, 30];
//   console.log(getAverage(numbers)); 
  