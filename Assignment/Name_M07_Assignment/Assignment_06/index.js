let goods = [
    ["Apples", "fruit"],
    ["Milk 3.2%", "dairy products"],
    ["Potato", "vegetables"],
    ["Brinjal", "vegetables"],
    ["Mango", "fruit"],
    ["Cheese", "dairy products"]
  ];
  let categorizedGoods = {};
  for (let [name, category] of goods) {
    if (!categorizedGoods[category]) {
      categorizedGoods[category] = [];
    }
    categorizedGoods[category].push(name);
  }
  
  for (let category in categorizedGoods) {
    console.log(category + ":");
    console.log(categorizedGoods[category].join(", "));
  }