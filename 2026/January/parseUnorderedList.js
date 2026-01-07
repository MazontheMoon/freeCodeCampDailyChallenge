/*
PSEUDOCODE:
- Split the input string into lines using the newline character
- Create an empty array to hold HTML list items
- Loop through each line:
    - Remove the leading dash and any spaces after it
    - Use the remaining text as the list item content
    - Wrap the content in <li> and </li>
    - Add it to the list items array
- Join all list items together into one string
- Wrap the result in <ul> and </ul>
- Return the final HTML string
*/

/**
 * Converts a Markdown unordered list into an HTML unordered list.
 *
 * Each list item must be on its own line and start with a dash (-)
 * followed by at least one space. Extra spaces after the dash are ignored.
 *
 * @param {string} markdown - A string representing a Markdown unordered list
 * @returns {string} The equivalent HTML unordered list
 */
 
 function parseUnorderedList(markdown) {
  const lines = markdown.split("\n");
  let items = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Remove the dash and trim remaining spaces
    const itemText = line.slice(1).trim();

    items.push(`<li>${itemText}</li>`);
  }

  return `<ul>${items.join("")}</ul>`;
}
