while (true) {
    const promoCode = prompt("Enter a promo code: ");
  
    if (promoCode === "HOLIDAYS22") {
      console.log("10% discount has been applied.");
      break;
    } else {
      console.log("Incorrect! Please try again.");
    }
  }