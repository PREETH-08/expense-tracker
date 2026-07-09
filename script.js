const form = document.querySelector("form");
const titleInput = document.querySelector('input[type="text"]');
const amountInput = document.querySelector('input[type="number"]');
const categoryInput = document.querySelector("select");
const dateInput = document.querySelector('input[type="date"]');

const table = document.querySelector("table");
const balanceElement = document.querySelector(".card h3");
const incomeElement = document.querySelector(".income p");
const expenseElement = document.querySelector(".expense p");

let income = 70000;
let expenses = 20000;

function updateSummary() {
    incomeElement.textContent = `₹${income}`;
    expenseElement.textContent = `₹${expenses}`;
    balanceElement.textContent = `₹${income - expenses}`;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    if (title === "" || amount <= 0 || category === "" || date === "") {
        alert("Please fill all fields correctly.");
        return;
    }

    const newRow = table.insertRow();

    const dateCell = newRow.insertCell(0);
    const categoryCell = newRow.insertCell(1);
    const amountCell = newRow.insertCell(2);

    dateCell.textContent = date;
    categoryCell.textContent = `${title} (${category})`;
    amountCell.textContent = `₹${amount}`;

    expenses += amount;

    updateSummary();

    form.reset();
});

updateSummary();
