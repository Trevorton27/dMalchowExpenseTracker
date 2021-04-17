const expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];
const tableBody = document.getElementById('tableBody');
document.getElementById('expense-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const payment = document.getElementById('currency');
  const info = document.getElementById('description');
  const date = document.getElementById('date');
  const amount = document.getElementById('cost');
  const location = document.getElementById('location');

  const expenseItem = {
    id: Date.now(),
    date: date.value,
    description: info.value,
    amount: amount.value,
    paymentType: payment.value,
    vendor: location.value
  };

  addExpense(expenseItem);

  document.getElementById('expense-form').reset();
});

function addExpense(expense) {
  appendRow(expense);
  expenseArray.push(expense);
  pushToLocalStorage(expense);
}
function appendRow(expense) {
  const tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);

  const methodCell = createCell(expense.paymentType);
  tableRow.appendChild(methodCell);

  const amountCell = createCell(expense.amount);
  tableRow.appendChild(amountCell);

  const descriptionCell = createCell(expense.description);
  tableRow.appendChild(descriptionCell);

  const dateCell = createCell(expense.date);
  tableRow.appendChild(dateCell);

  const vendorCell = createCell(expense.vendor);
  tableRow.appendChild(vendorCell);

  const deleteCell = document.createElement('td');

  const deleteButton = createDeleteButton(expense);
  tableRow.appendChild(deleteCell);
  deleteCell.appendChild(deleteButton);
}

function createCell(expense) {
  const dateCell = document.createElement('td');
  dateCell.textContent = expense;
  return dateCell;
}

function createDeleteButton(expense) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'deleteButton');

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteRow(deleteButton, expense.id);
  });
  return deleteButton;
}

function pushToLocalStorage(expense) {
  localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
}

function deleteRow(deleteButton, id) {
  deleteButton.parentElement.parentElement.remove();
  for (let i = 0; i < expenseArray.length; i++) {
    if (expenseArray[i].id === id) {
      expenseArray.splice(i, 1);
      pushToLocalStorage(expenseArray);
    }
  }
}

window.addEventListener('load', (e) => {
  e.preventDefault();
  expenseArray.forEach((expense) => {
    appendRow(expense);
  });
});
