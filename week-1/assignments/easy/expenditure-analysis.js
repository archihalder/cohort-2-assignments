/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
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
  if (transactions === null) {
    return [];
  }

  const res = [];

  for (let i = 0; i < transactions.length; i++) {
    let type = transactions[i]["category"];
    let amount = transactions[i]["price"];

    let categoryFound = false;

    for (let j = 0; j < res.length; j++) {
      if (res[j]["category"] === type) {
        res[j]["totalSpent"] += amount;
        categoryFound = true;
        break;
      }
    }

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
