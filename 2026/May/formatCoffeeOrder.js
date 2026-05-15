/*
PSEUDOCODE:

function formatCoffeeOrder(str):

    lower = lowercase string

    menu = ordered list of (name, price)

    result = []
    total = 0

    for each item in menu:
        if item.name exists in string:
            add item.name to result
            add price to total

    return "item1 + item2: $total"
*/

/**
 * Formats a coffee order and calculates total price.
 *
 * @param {string} str
 * @returns {string}
 */
function formatCoffeeOrder(str) {
    const menu = [
        ["cold brew", 4.50],
        ["oat latte", 5.00],
        ["cappuccino", 4.75],
        ["espresso", 3.00],
        ["vanilla syrup", 0.75],
        ["caramel drizzle", 0.60],
        ["extra shot", 0.50],
        ["oat milk", 0.75],
        ["cream", 0.75]
    ];

    const input = str.toLowerCase();

    const items = [];
    let total = 0;

    for (const [name, price] of menu) {
        if (input.includes(name)) {
            items.push(name);
            total += price;
        }
    }

    return `${items.join(" + ")}: $${total.toFixed(2)}`;
}
