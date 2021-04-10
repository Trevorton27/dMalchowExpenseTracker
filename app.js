document.getElementById("submitButton").addEventListener("click", append);
const tbodyElement = document.querySelector("tbody");
const formElement = document.querySelector("form");

function append(e) {
    e.preventDefault();

    const payment = document.getElementById("currency");
    const info = document.getElementById("description");
    const date = document.getElementById("date");
    const amount = document.getElementById("cost");
    const newRow = `
    <tr>
        <td>${payment.value}</td>
        <td>${info.value}</td>
        <td>${date.value}</td>
        <td>${amount.value}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>`;

    tbodyElement.innerHTML += newRow;
    payment.value = '';
    info.value = '';
    date.value = '';
    amount.value = '';
};

function deleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
};

tbodyElement.addEventListener("click", deleteRow);
