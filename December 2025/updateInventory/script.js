/*
PSEUDOCODE

FUNCTION updateInventory(inventory, shipment)
    FOR each item in shipment
        SET found to false

        FOR each item in inventory
            IF shipment item name equals inventory item name
                ADD shipment quantity to inventory quantity
                SET found to true
                BREAK inner loop
            END IF
        END FOR

        IF found is false
            ADD shipment item to the end of inventory
        END IF
    END FOR

    RETURN inventory
END FUNCTION
*/

/**
 * Updates a store inventory using a received shipment.
 *
 * Each inventory and shipment item is represented as:
 * [quantity, "itemName"]
 *
 * Rules:
 * - If an item exists in inventory, increase its quantity
 * - If an item does not exist, add it to the end of the inventory
 * - Preserve original inventory order
 * - Add new items in the order they appear in the shipment
 *
 * @param {Array<Array<number, string>>} inventory - Current store inventory
 * @param {Array<Array<number, string>>} shipment - Incoming shipment
 * @returns {Array<Array<number, string>>} The updated inventory
 *
 * @example
 * updateInventory(
 *   [[2, "apples"], [5, "bananas"]],
 *   [[1, "apples"], [3, "bananas"]]
 * );
 * // returns [[3, "apples"], [8, "bananas"]]
 */
function updateInventory(inventory, shipment) {
  for (const [shipQty, shipItem] of shipment) {
    let found = false;

    for (const item of inventory) {
      const [invQty, invItem] = item;

      if (invItem === shipItem) {
        item[0] += shipQty;
        found = true;
        break;
      }
    }

    if (!found) {
      inventory.push([shipQty, shipItem]);
    }
  }

  return inventory;
}
