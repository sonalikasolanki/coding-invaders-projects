let text = "If you want to do something right, you make a list.";
let word = "you";
let firstIndex = text.indexOf(word);
let lastIndex = firstIndex + word.length - 1;
let lastFirstIndex = text.lastIndexOf(word);
let lastLastIndex = lastFirstIndex + word.length - 1;
console.log("The position of first and last letter for first occurrence of the word" ,word, "is", firstIndex , "and",  lastIndex, "and the position of letters for its last occurrence is" ,lastFirstIndex ,"and" ,lastLastIndex)
