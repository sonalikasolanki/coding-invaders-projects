let cartItems = {
    shampoo: {
      quantity: 5,
      price: 278
    },
    butter: {
      quantity: 4,
      price: 80
    },
    oil: {
      quantity: 2,
      price: 142
    }
  };
  
  function calculateCartTotal(cart) {
    let total = 0;
    for (let item in cart) {
      if (cart.hasOwnProperty(item)) {
        let quantity = cart[item].quantity;
        let price = cart[item].price;
        total += quantity * price;
      }
    }
    return total;
  }
  
  let cartTotal = calculateCartTotal(cartItems);
  console.log('Total Cart value is ' + cartTotal);
  