/**
 * Calculates three tip amounts (15%, 20%, and a custom percentage) 
 * based on the given meal price.
 *
 * Prices are provided as strings in the format "$N.NN" (e.g. "$10.00"), 
 * and custom tip percentages are provided as strings like "25%".
 * 
 * The function returns an array of three formatted strings representing 
 * the tip amounts for 15%, 20%, and the custom percentage, each rounded 
 * to two decimal places and prefixed with "$".
 *
 * @param {string} mealPrice - The price of the meal (e.g. "$10.00").
 * @param {string} customTip - The custom tip percentage (e.g. "25%").
 * @returns {string[]} An array of three tip amounts as strings, 
 *                     e.g. ["$1.50", "$2.00", "$2.50"].
 *
 * @example
 * // returns ["$1.50", "$2.00", "$2.50"]
 * calculateTips("$10.00", "25%");
 */
function calculateTips(mealPrice, customTip) {
  // Convert the meal price string to a number (e.g. "$10.00" -> 10.00)
  const price = parseFloat(mealPrice.replace("$", ""));
  
  // Extract the numeric value from the custom tip string (e.g. "25%" -> 25)
  const customPercent = parseFloat(customTip.replace("%", ""));
  
  // Define the standard tip percentages
  const tipPercents = [15, 20, customPercent];
  
  // Calculate and format each tip
  const tips = tipPercents.map(percent => {
    const tipValue = (price * (percent / 100)).toFixed(2);
    return `$${tipValue}`;
  });
  
  return tips;
}