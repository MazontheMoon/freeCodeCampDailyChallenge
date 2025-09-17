/*
Challenge - Slug Generator
Given a string, return a URL-friendly version of the string using the following constraints:
- All letters should be lowercase.
- All characters that are not letters, numbers, or spaces should be removed.
- All spaces should be replaced with the URL-encoded space code %20.
- Consecutive spaces should be replaced with a single %20.
- The returned string should not have leading or trailing %20.
*/

/**
 * Returns string of slug generated from url.
 *
 * @param {string} str - a url.
 * @return {string} slug generated from url.
 */

function generateSlug(str) {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()                      // all letters lowercase
    .replace(/[^a-z0-9 ]+/g, '')        // remove chars that are not letters, numbers or spaces
    .trim()                             // drop leading/trailing spaces
    .replace(/\s+/g, '%20');           // replace one-or-more spaces with single %20
}
