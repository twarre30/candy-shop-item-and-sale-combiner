// Your code goes here


function getItemById(items, id) {
    return items.find(item => item.id === id)
}

function buildTransactions(sales, items) {
    return sales.map(sale => {
        return {
            ...sale,
            description: getItemById(items, sale.itemId).description,
            price: getItemById(items, sale.itemId).price,
        }
    })
}

function getTransactionsByItemDescription(transactions, description) {
    return transactions.filter(transaction => transaction.description === description)
}











module.exports = {
    // Uncomment these as you write them
        getItemById,
        buildTransactions,
        getTransactionsByItemDescription
}
