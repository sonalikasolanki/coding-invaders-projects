
// function findLongestWord(input) {
//     let words = input.split(' ');
//     let longestWord = '';
  
//     for (let i = 0; i < words.length; i++) {
//       let currentWord = words[i];
  
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//     }
  
//     return longestWord;
//   }
//   let input = 'i love javascript';
//   let longestWord = findLongestWord(input);
//   console.log(longestWord);
    
// function capitalizeFirstLetter(input) {
//     let words = input.split(' ');
//     let capitalizedWords = words.map(word => {
//       let firstLetter = word.charAt(0).toUpperCase();
//       let restOfWord = word.slice(1);
//       return firstLetter + restOfWord;
//     });
//     let output = capitalizedWords.join(' ');
  
//     return output;
//   }
//   let input = 'hello world';
// let newInput = capitalizeFirstLetter(input);
// console.log(newInput);
// function countNoOfVowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i].toLowerCase();
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   }
//   let str = 'hello';
// let vowelCount = countNoOfVowels(str);
// console.log(vowelCount);

// function compareObjects(obj1, obj2) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//       return false;
//     } 
//     for (let key of keys1) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let obj1 = { a: 1, b: 2 };
//   let obj2 = { a: 1, b: 2 };
//   let equal = compareObjects(obj1, obj2);
//   console.log(equal);
function groupObjects(data, property) {
    return data.reduce((result, obj) => {
      const key = obj[property];
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(obj);
      return result;
    }, {});
  }
  const data = [
    { name: 'John', category: 'A' },
    { name: 'Jane', category: 'B' },
    { name: 'Bob', category: 'A' },
    { name: 'Alice', category: 'B' }
  ]; 
  const groupedData = groupObjects(data, 'category');
  console.log(groupedData);
 // Get the button elements and content elements
const historyBtn = document.getElementById("historyBtn");
const visionBtn = document.getElementById("visionBtn");
const goalsBtn = document.getElementById("goalsBtn");

const historyContent = document.getElementById("historyContent");
const visionContent = document.getElementById("visionContent");
const goalsContent = document.getElementById("goalsContent");

// Add click event listeners to the buttons
historyBtn.addEventListener("click", function() {
  showContent(historyContent);
});

visionBtn.addEventListener("click", function() {
  showContent(visionContent);
});

goalsBtn.addEventListener("click", function() {
  showContent(goalsContent);
});

// Function to show the selected content and hide the others
function showContent(content) {
  // Hide all content elements
  historyContent.style.display = "none";
  visionContent.style.display = "none";
  goalsContent.style.display = "none";
  
  // Show the selected content
  content.style.display = "block";
}
   