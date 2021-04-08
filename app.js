document.getElementById("submitButton").addEventListener("click", append);
const tbodyElement = document.querySelector("tbody");
const formElement = document.querySelector("form");

function append(e) {
    e.preventDefault();

    const payment = document.getElementById("currency").value;
    const info = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const amount = document.getElementById("cost").value;
    const newRow = `
    <tr>
        <td>${payment}</td>
        <td>${info}</td>
        <td>${date}</td>
        <td>${amount}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>`;

    tbodyElement.innerHTML += newRow;
};

function deleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
};

tbodyElement.addEventListener("click", deleteRow);
