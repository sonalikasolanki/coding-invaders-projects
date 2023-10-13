let friendsArray = [
    { id: 1, name: "Abhay", amount: 2000 },
    { id: 2, name: "Bunty", amount: 3000 },
    { id: 3, name: "Chinki", amount: 5900 },
    { id: 4, name: "Dimple", amount: 1000 },
    { id: 5, name: "Erica", amount: 2370 }
  ];
  
  function calculateTotalAmount(friendsArray) {
    let totalAmount = friendsArray.reduce((sum, friend) => sum + friend.amount, 0);
    return totalAmount;
  }
  
  function sortFriendsByAmountAscending(friendsArray) {
    let sortedArray = friendsArray.slice().sort((a, b) => a.amount - b.amount);
    return sortedArray;
  }
  
  function sortFriendsByAmountDescending(friendsArray) {
    let sortedArray = friendsArray.slice().sort((a, b) => b.amount - a.amount);
    return sortedArray;
  }
  
  function findFriendWithLargestAmount(friendsArray) {
    let friendWithLargestAmount = friendsArray.reduce((maxFriend, friend) => {
      return friend.amount > maxFriend.amount ? friend : maxFriend;
    });
    return friendWithLargestAmount;
  }
  
  function findFriendWithSmallestAmount(friendsArray) {
    let friendWithSmallestAmount = friendsArray.reduce((minFriend, friend) => {
      return friend.amount < minFriend.amount ? friend : minFriend;
    });
    return friendWithSmallestAmount;
  }
  
  console.log("Total Amount:", calculateTotalAmount(friendsArray));
  console.log("Sorted by Amount (Ascending):", sortFriendsByAmountAscending(friendsArray));
  console.log("Sorted by Amount (Descending):", sortFriendsByAmountDescending(friendsArray));
  console.log("Friend with Largest Amount:", findFriendWithLargestAmount(friendsArray));
  console.log("Friend with Smallest Amount:", findFriendWithSmallestAmount(friendsArray));
  