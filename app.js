// app.js
function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    listItem.classList.add(`type-${type}`);
    listItem.innerHTML = `
        <span>${description}</span>
        <span>${type === 'income' ? '+' : '-'}$${Math.abs(amount).toFixed(2)}</span>
    `;
    transactionList.appendChild(listItem);

    // Clear input fields
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

let transactions = [];

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const transaction = {
        description: description,
        amount: type === 'income' ? amount : -amount,
        type: type
    };

    transactions.push(transaction);
    updateTransactionList();
    updateTotalBalance();

    // Clear input fields
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.classList.add(`type-${transaction.type}`);
        listItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${transaction.type === 'income' ? '+' : '-'}$${Math.abs(transaction.amount).toFixed(2)}</span>
        `;
        transactionList.appendChild(listItem);
    });
}

function updateTotalBalance() {
    const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    const balanceElement = document.getElementById('totalBalance');
    balanceElement.textContent = `Total Balance: $${totalBalance.toFixed(2)}`;

    // Add custom styling based on balance (e.g., change color for positive/negative balance)
    balanceElement.className = totalBalance >= 0 ? 'positive-balance' : 'negative-balance';
}
