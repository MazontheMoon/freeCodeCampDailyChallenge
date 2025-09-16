# freeCodeCampDailyChallenge
A collection of my solutions to FreeCodeCamps series of daily frontend challenges

## 2025 September

### 1 - Tribonacci Sequence
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.
- Your function should handle sequences of any length greater than or equal to zero.
- If the length is zero, return an empty array.
- Note that the starting numbers are part of the sequence.

### 2 - RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.
- Make any letters lowercase.
- Return a # followed by six characters. Don't use any shorthand values.

### 3 - Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.
- Ignore non-alphabetical characters in the word or sentence.
- Ignore letter casing in the word or sentence.

### 4 - Vowel Repeater
Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.
- The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
- The original vowel should keeps its case.
- Repeated vowels should be lowercase.
- All non-vowel characters should keep their original case.

### 5 - IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:
- It is between 0 and 255 inclusive.
- It does not have leading zeros (e.g. 0 is allowed, 01 is not).
- Only numeric characters are allowed.

### 6 - Matrix Rotate
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4

You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2

### 7 - Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.
Roman numerals consist of the following symbols and values:
Symbol	Value
I		1
V		5
X		10
L		50
C		100
D		500
M		1000

- Numerals are read left to right. 
- If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

### 8 - Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:
- The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
- The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
- The acronym letters should be returned in the order they are given.
- The acronym should not contain any spaces.

### 9 - Unique Characters
Given a string, determine if all the characters in the string are unique.
- Uppercase and lowercase letters should be considered different characters.

### 10 - Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.
- The returned array should be sorted in alphabetical order.

### 11 - Reverse Sentence
Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.
- In the given string, words can be separated by one or more spaces.
- The returned string should only have one space between words.


### 12 - Too Much Screen TIme
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:
- If any single day has 10 hours or more, it's too much.
- If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
- If the average of the seven days is greater than or equal to 6 hours, it's too much.

### 13 - Missing Numbers
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).
- The given array may be unsorted and may contain duplicates.
- The returned array should be in ascending order.
- If no integers are missing, return an empty array.

### 14 - Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.
- Words in the paragraph will be separated by spaces.
- Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
- Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
- The returned array should have all lowercase words.
- The returned array should be in descending order with the most frequently occurring word first.

### 15 - Thermostat Adjuster
Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:
- Return "heat" if the current temperature is below the target.
- Return "cool" if the current temperature is above the target.
- Return "hold" if the current temperature is equal to the target.

### 16 - Sentence Capitalizer
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.
- All other characters should be preserved.
- Sentences can end with:
    - a period (.), 
    - one or more question marks (?), 
    - or one or more exclamation points (!).