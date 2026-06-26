let balance = 0;

function addTransaction() {

    const description =
        document.getElementById("description").value;

    const amount =
        Number(document.getElementById("amount").value);

    const type =
        document.getElementById("type").value;

    const list =
        document.getElementById("transactionList");

    const item = document.createElement("li");

    if(type === "income"){
        balance += amount;
        item.innerText = `${description} +₹${amount}`;
    }
    else{
        balance -= amount;
        item.innerText = `${description} -₹${amount}`;
    }

    list.appendChild(item);

    document.getElementById("balance").innerText = balance;
}
