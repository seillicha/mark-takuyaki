function calculateChange() {
  var personName = document.getElementById('personName').value;
  var itemName = document.getElementById('itemName').value;
  var price = parseFloat(document.getElementById('price').value);
  var payment = parseFloat(document.getElementById('payment').value);
  var change = payment - price;
  
  if (!personName || !itemName || isNaN(price) || isNaN(payment)) {
    alert('Please fill all fields correctly.');
    return;
  }
  
  if (change >= 0) {
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString();
    
    var table = document.getElementById('recordTable');
    var newRow = table.insertRow(-1);
    var dateCell = newRow.insertCell(0);
    var personNameCell = newRow.insertCell(1);
    var itemNameCell = newRow.insertCell(2);
    var priceCell = newRow.insertCell(3);
    var paymentCell = newRow.insertCell(4);
    var changeCell = newRow.insertCell(5);
    
    dateCell.textContent = dateString;
    personNameCell.textContent = personName;
    itemNameCell.textContent = itemName;
    priceCell.textContent = 'PHP ' + price.toFixed(2);
    paymentCell.textContent = 'PHP ' + payment.toFixed(2);
    changeCell.textContent = 'PHP ' + change.toFixed(2);
    
    table.style.display = 'table';
  } else {
    alert('Insufficient payment');
  }
}

function clearFields() {
  document.getElementById('personName').value = '';
  document.getElementById('itemName').value = '';
  document.getElementById('price').value = '';
  document.getElementById('payment').value = '';
}