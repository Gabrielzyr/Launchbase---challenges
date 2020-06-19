const users = [
    {
        name: "Suzan",
        revenue: [123.5,243.8,60.1,33.4],
        expenses: [50.6, 75.9, 112.3, 23.4]
    },

    {
        name: "Eliza",
        revenue: [1000.0,350.3,160.1,359.9],
        expenses: [150.2, 125.9, 100.6, 53.7]
    },

    {
        name: "Henry",
        revenue: [225.9,145.5,20.4,130.6],
        expenses: [310.6, 25.9, 210.9, 45.8]
    }
    
]

function calcBalance (revenue, expenses) {

    let revenueSum = numbersSum(revenue)
    let expensesSum = numbersSum(expenses)
    return revenueSum - expensesSum
}

function numbersSum(numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum += number
    }
    return sum
}

for (let user of users) {
    const balance = calcBalance(user.revenue, user.expenses)
    const positiveBalance = balance > 0
    let positiveOrNegative
    if (positiveBalance) {
        positiveOrNegative ="positive"
        console.log(`${user.name} you have a ${positiveOrNegative} balance of ${balance.toFixed(2)}`)
    } else {
        positiveOrNegative ="negative"
        console.log(`${user.name} you have a ${positiveOrNegative} balance of ${balance.toFixed(2)}`)

    }
}

