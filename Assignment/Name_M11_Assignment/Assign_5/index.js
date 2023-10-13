function totalPrice(items, costs) {
    let orders = [];
    for (let i = 0; i < items.length; i++) {
      let order = {};
      order[items[i]] = costs[i];
      orders.push(order);
    }
    let maxCost = Math.max(...costs);
    let maxOrder = orders.find(order => order[items[costs.indexOf(maxCost)]] === maxCost);
    return { orders: [maxOrder] };
  }
  let items = ["item1", "item2", "item3"];
  let costs = [200, 400, 260];
  
  let result = totalPrice(items, costs);
  console.log(result);
    