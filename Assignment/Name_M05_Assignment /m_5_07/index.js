let bookname= '"the jungle book"';
 let quantity= 4;
 let perbookprice=149.99
 let discount=10.5
 let totalamountbeforediscount= quantity*perbookprice;
 let priceafterdiscount=totalamountbeforediscount-(totalamountbeforediscount*discount/100);
 console.log("You have successfully purchased 4 products titled ",bookname);
 console.log("Amount before the discount is Rs.",totalamountbeforediscount);
 console.log("Amount after the 10.5% discount is Rs.",priceafterdiscount);