/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter and return a list of objects where each object is unique category-wise and has total price spent as its value. 
  Transactions is an array where each transaction - an object like 
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // if the transaction list is empty or null
  if (transactions === null || transactions.length === 0) {
    return [];
  }

  // to store the resulted list
  const res = [];

  for (let i = 0; i < transactions.length; i++) {
    const type = transactions[i].category; // current category
    const amount = transactions[i].price; // current price

    // checking if such category is present in the result list
    let categoryFound = false;

    // if other object found with same category, increment the amount
    for (let j = 0; j < res.length; j++) {
      if (res[j].category === type) {
        res[j].totalSpent += amount;
        categoryFound = true;
      }
    }

    // if only one such category is present
    // create an object of such category and add it to the result list
    if (!categoryFound) {
      const obj = {
        category: type,
        totalSpent: amount,
      }
      res.push(obj);
    }
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
