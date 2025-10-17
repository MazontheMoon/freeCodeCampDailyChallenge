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

### 17 - Slug Generator
Given a string, return a URL-friendly version of the string using the following constraints:
- All letters should be lowercase.
- All characters that are not letters, numbers, or spaces should be removed.
- All spaces should be replaced with the URL-encoded space code %20.
- Consecutive spaces should be replaced with a single %20.
- The returned string should not have leading or trailing %20.

### 18 - Fill The Tank
Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.
- tankSize is the total capacity of the tank in gallons.
- fuelLevel is the current amount of fuel in the tank in gallons.
- pricePerGallon is the cost of one gallon of fuel.
The returned value should be rounded to two decimal places in the format: "$d.dd".

### 19 - Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:
- 1 gigabyte equals 1000 megabytes.
- Return the number of whole photos the drive can store.

### 20 - File Storage
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:
- The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
- Return the number of whole files the drive can fit.

Use the following conversions:
Unit	Equivalent
1 B	    1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

### 21 - Video Storage
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:
- The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
- If not given one of the video units above, return "Invalid video unit".
- The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
- If not given one of the hard drive units above, return "Invalid drive unit".
- Return the number of whole videos the drive can fit.

Use the following conversions:
Unit	Equivalent
1 B	    1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB
For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.

### 22 - Digits vs Letters
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.
- Digits consist of 0-9.
- Letters consist of a-z in upper or lower case.
- Ignore any other characters.

### 23 - String Mirror
Given two strings, determine if the second string is a mirror of the first.
- A string is considered a mirror if it contains the same letters in reverse order.
- Treat uppercase and lowercase letters as distinct.
- Ignore all non-alphabetical characters.

### 24 - Perfect Square
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

### 25 - 2nd Largest
Given an array, return the second largest distinct number.

### 26 - Caught Speeding
Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.
- If there were no vehicles speeding, return [0, 0].

### 27 - Spam Detector
Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:
- A represents the country code and can be any number of digits.
- BBB represents the area code and will always be three digits.
- CCC and DDDD represent the local number and will always be three and four digits long, respectively.

Determine if it's a spam number based on the following criteria:
- The country code is greater than 2 digits long or doesn't begin with a zero (0).
- The area code is greater than 900 or less than 200.
- The sum of first three digits of the local number appears within last four digits of the local number.
- The number has the same digit four or more times in a row (ignoring the formatting characters).

### 28 - CSV Header Parser
Given the first line of a comma-separated values (CSV) file, return an array containing the headings.
- The first line of a CSV file contains headings separated by commas.
- Remove any leading or trailing whitespace from each heading.

### 29 - Longest Word
Given a sentence, return the longest word in the sentence.
- Ignore periods (.) when determining word length.
- If multiple words are ties for the longest, return the first one that occurs.

### 30 - Phone Number Formatter
Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".

## 2025 October

### 1 -  Binary to Decimal
Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.

### 2 - Decimal to Binary
Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits 0 and 1 to represent any number. To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first. 

### 3 - P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:
- It is at least 8 characters long.
- It contains both uppercase and lowercase letters.
- It contains at least one number.
- It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
- Return "weak" if the password meets fewer than two of the rules. 
- Return "medium" if the password meets 2 or 3 of the rules. 
- Return "strong" if the password meets all 4 rules.

### 4 - Space Week Day 1: Stellar Classification
October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.

For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:
- "O": 30,000 K or higher
- "B": 10,000 K - 29,999 K
- "A": 7,500 K - 9,999 K
- "F": 6,000 K - 7,499 K
- "G": 5,200 K - 5,999 K
- "K": 3,700 K - 5,199 K
- "M": 0 K - 3,699 K
Return the classification of the given star.

### 5 - Space Week Day 2: Exoplanet Search
For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
- Characters 0-9 correspond to luminosity levels 0-9.
- Characters A-Z correspond to luminosity levels 10-35.
- A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.

### 6 - Space Week Day 3: Phone Home
For day three of Space Week, you are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:
- The first value in the array is the distance from your location to the first satellite.
- Each subsequent value, except for the last, is the distance to the next satellite.
- The last value in the array is the distance from the previous satellite to your home planet.
- The message travels at 300,000 km/s.
- Each satellite the message passes through adds a 0.5 second transmission delay.
- Return a number rounded to 4 decimal places, with trailing zeros removed.

### 7 - Space Week Day 4: Landing Spot
In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

Each spot in the matrix will contain a number from 0-9, inclusive.
Any 0 represents a potential landing spot.
Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
Return the indices of the safest landing spot. There will always only be one safest spot.

### 8 - Space Week Day 5: Goldilocks Zone
For the fifth day of Space Week, you will calculate the "Goldilocks zone" of a star - the region around a star where conditions are "just right" for liquid water to exist.

Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.

To calculate the Goldilocks Zone:

Find the luminosity of the star by raising its mass to the power of 3.5.
The start of the zone is 0.95 times the square root of its luminosity.
The end of the zone is 1.37 times the square root of its luminosity.
Return the distances rounded to two decimal places.
For example, given 1 as a mass, return [0.95, 1.37].

### 9 - Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:
 - Use a simplified lunar cycle of 28 days, divided into four equal phases:
  - "New": days 1 - 7
  - "Waxing": days 8 - 14
  - "Full": days 15 - 21
  - "Waning": days 22 - 28
 - After day 28, the cycle repeats with day 1, a new moon.
- Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
- You will not be given any dates before the reference date.
- Return the correct phase as a string.

### 10 - Space Week Day 7: Launch Fuel
For the final day of Space Week, you will be given the mass in kilograms (kg) of a payload you want to send to orbit. Determine the amount of fuel needed to send your payload to orbit using the following rules:

Rockets require 1 kg of fuel per 5 kg of mass they must lift.
Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
To calculate the total fuel needed:
- start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
- Ignore the mass of the rocket itself. - Only compute fuel needed to lift the payload and its own fuel.

For example, given a payload mass of 50 kg, you would need 10 kg of fuel to lift it (payload / 5), which increases the total mass to 60 kg, which needs 12 kg to lift (2 additional kg), which increases the total mass to 62 kg, which needs 12.4 kg to lift - 0.4 additional kg - which is less 1 additional kg, so we stop here. The total mass to lift is 62.4 kg, 50 of which is the initial payload and 12.4 of fuel.

Return the amount of fuel needed rounded to one decimal place.

### 11 - Hex to Decimal
Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.
Hexadecimal is a number system that uses 16 digits:
• 0-9 represent values 0 through 9.
• A-F represent values 10 through 15.

### 12 - Battle of Words

Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
• Words are separated by a single space and will only contain letters.
• The value of each word is the sum of its letters.
• Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
• A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
• Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
• A word wins if its value is greater than the opposing word's value.
• The team with more winning words is the winner.

Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

### 13 - 24 to 12

Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour.
The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
function to12(time) {...}

### 14 - String Count

Given two strings, determine how many times the second string appears in the first.Given two strings, determine how many times the second string appears in the first.
- The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
function count(text, pattern) {...}

### 15 - HTML Tag Stripper

Given a string of HTML code, remove the tags and return the plain text content.
- The input string will contain only valid HTML.
- HTML tags may be nested.
- Remove the tags and any attributes.

function stripTags(html) {...}

### 16 - Email Validator

Given a string, determine if it is a valid email address using the following constraints:
- It must contain exactly one @ symbol. 
- The local part (before the @) can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
- Cannot start or end with a dot.
- The domain part (after the @): must contain at least one dot.
- Must end with a dot followed by at least two letters.
- Neither the local or domain part can have two dots in a row.

function validate(email) {...}

### 17 - Credit Card Masker

Given a string of credit card numbers, return a masked version of it using the following constraints:
- The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
- Replace all numbers, except the last four, with an asterisk (*).
- Leave the remaining characters unchanged.
For example, given "4012-8888-8888-1881" return "****-****-****-1881".
function mask(card) {}