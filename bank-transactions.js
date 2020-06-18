
const user = {
    nome: "José",
    transactions: [],
    balance: 0
}


function createTransaction(type, value) {
    user.transactions.push( { type: type, value: value } )

    if ( type == "credit") {
        user.balance += value 
    } else {
        user.balance -= value
    }  
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let maxValue = 0
    for (let transaction of user.transactions) {
        if(transaction.type == type && transaction.value > maxValue) {
            maxValue = transaction.value
            higherTransaction = transaction
        } 
    }
    return higherTransaction,
    console.log("The higher transaction is:", higherTransaction)
}

function getAverageTransactionValue() {
    let valueSum = 0
    for (let i = 0; i < user.transactions.length; i++) {
        valueSum += user.transactions[i].value
    }
    const average = valueSum / user.transactions.length
    return average,
    console.log("The average is", average)
}

function getTransactionsCount() {
    let totalOfType = {credit: 0, debit: 0}
    for (let transaction of user.transactions) {
        if( transaction.type == 'credit') {
        totalOfType.credit++
        }else {
            totalOfType.debit++
        }
    } 
    return totalOfType,
    console.log(totalOfType)

}


createTransaction("credit", 50)
createTransaction("credit", 120)
createTransaction("credit", 80)
createTransaction("debit", 50)
createTransaction("debit", 100)

console.log("Balance:", user.balance)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")
getTransactionsCount()
getAverageTransactionValue()

