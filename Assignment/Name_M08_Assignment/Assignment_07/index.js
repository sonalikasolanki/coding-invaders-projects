function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');
    if (cleanStr === reversedStr) {
      return "A palindrome";
    } else {
      return "Not palindrome";
    }
  }
  console.log(isPalindrome("Coding")); 
  console.log(isPalindrome("Anna")); 
  console.log(isPalindrome("DESSERTS I DESIRE NOT SO LONG NO LOST ONE RISE DISTRESSED")); 