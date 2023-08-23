let cashBalance = 1000;
let stocks = {
  pen: 100,
  pencil: 100,
  eraser: 100,
  sharpener: 100,
  geometryBox: 100
};

function updateCashBalance(amount) {
  cashBalance += amount;
  document.getElementById('cashBalance').textContent = cashBalance;
}

function updateStock(item, qty) {
  stocks[item] += qty;
  document.getElementById(`${item}Stock`).textContent = stocks[item];
}

function purchaseItem(item, price) {
  const qty = parseInt(prompt(`Enter the quantity of ${item} to purchase:`));
  if (isNaN(qty) || qty <= 0) {
    alert('Invalid quantity.');
    return;
  }

  const totalCost = price * qty;
  if (totalCost <= cashBalance) {
    updateCashBalance(-totalCost);
    updateStock(item, qty);
    alert(`Purchased ${qty} ${item}(s).`);
  } else {
    alert('Insufficient funds.');
  }
}

function sellItem(item, price) {
  const qty = parseInt(prompt(`Enter the quantity of ${item} to sell:`));
  if (isNaN(qty) || qty <= 0) {
    alert('Invalid quantity.');
    return;
  }

  if (qty <= stocks[item]) {
    updateCashBalance(price * qty);
    updateStock(item, -qty);
    alert(`Sold ${qty} ${item}(s).`);
  } else {
    alert('Insufficient stock.');
  }
}
