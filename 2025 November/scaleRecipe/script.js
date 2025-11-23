/**
 * Scales the quantities of ingredients in a recipe.
 *
 * Each ingredient is provided as a string in the format:
 * "quantity unit ingredientName"
 * Example: "2 C Flour"
 *
 * Quantities are scaled by the provided scale factor.
 * Trailing zeros are removed (e.g., 3.0 → "3", 1.500 → "1.5").
 * Units and ingredient names are left unchanged.
 *
 * @param {string[]} ingredients - Array of ingredient strings.
 * @param {number} scale - The multiplier for scaling quantities.
 * @returns {string[]} - Array of scaled ingredient strings.
 */

function scaleRecipe(ingredients, scale) {
  return ingredients.map(item => {
    // Split into quantity, unit, and ingredient name
    const parts = item.split(" ");
    const quantity = parseFloat(parts[0]);
    const unit = parts[1];
    const ingredientName = parts.slice(2).join(" ");

    // Scale the quantity
    let scaledQuantity = quantity * scale;

    // Remove trailing zeros (e.g., 3.0 → "3", 1.50 → "1.5")
    if (Number.isInteger(scaledQuantity)) {
      scaledQuantity = scaledQuantity.toString(); 
    } else {
      scaledQuantity = scaledQuantity.toString().replace(/\.?0+$/, "");
    }

    // Return reconstructed string
    return `${scaledQuantity} ${unit} ${ingredientName}`;
  });
}

