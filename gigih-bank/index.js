const express = require('express');
const app = express();

app.use(express.json());

app.post('/transaction', (req, res) => {
    try {
        const { sourceAccount, destinationAccount, amount } = req.body;
        if (!sourceAccount || !destinationAccount || !amount) {
            throw new Error("Insufficient Parameter")
        }
        transfer(sourceAccount, destinationAccount, amount)
        res.status(201).json({ message: "Transaction Created Succesfully"})
    } catch (e) {
        res.status(500).json({ message: e.message });
    } 
});

const port = 3000;
app.listen(port, () => {
    console.log("GIGIH Bank running on port " + port);
});

// Service
function transfer(sourceId, destinationId, amount) {
    sourceAccount = getCostumer(sourceId)
    destinationAccount = getCostumer(destinationId)

    if (!sourceAccount || !destinationAccount) {
        throw new Error("Invalid source or destination account")
    }

    if (sourceAccount.balance < amount) {
        throw new Error("Insufficient balance in the source account")
    }

    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    createTransaction(sourceAccount.customerId, destinationAccount.destinationId, amount);
    return
}

// Model
