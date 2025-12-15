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

### 18 - Missing Socks

Given an integer representing the number of pairs of socks you started with, and another integer representing how many wash cycles you have gone through, return the number.
- Every 2 wash cycles, you lose a single sock.• Every 3 wash cycles, you find a single missing sock.
- Every 5 wash cycles, a single sock is worn out and must be thrown away.
- Every 10 wash cycles, you buy a pair of socks.
- You can never have less than zero total socks.
- Rules can overlap. For example, on wash cycle 10, you will lose a single sock, throw away a single sock, and buy a new pair of socks.
- Return the number of complete pairs of socks.
function sockPairs(pairs, cycles) {...}

### 19 - HTML Attribute Extractor

Given a string of a valid HTML element, return the attributes of the element using the following criteria:
- You will only be given one element.
- Attributes will be in the format: attribute="value".
- Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
- Return attributes in the order they are given.
- If no attributes are found, return an empty array.
function extractAttributes(element) {...}

### 20 - Tip Calculator
Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.
Prices will be given in the format: "$N.NN".
- Custom tip percents will be given in this format: "25%".
- Return amounts in the same "$N.NN" format, rounded to two decimal places.
For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].
function calculateTips(mealPrice, customTip) {...}

### 21 - Thermostat Adjuster 2

Given the current temperature of a room in Fahrenheit and a target temperature in Celsius, return a string indicating how to adjust the room temperature based on these constraints:
- Return "Heat: X degrees Fahrenheit" if the current temperature is below the target. With X being the number of degrees in Fahrenheit to heat the room to reach the target, rounded to 1 decimal place.
- Return "Cool: X degrees Fahrenheit" if the current temperature is above the target. With X being the number of degrees in Fahrenheit to cool the room to reach the target, rounded to 1 decimal place.
- Return "Hold" if the current temperature is equal to the target.

To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and add 32 to the result (F = (C * 1.8) + 32).
function adjustThermostat(currentF, targetC) {...}

### 22 - Speak wisely, you must!

Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:
- Words are separated by a single space.
- Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
- Move all words before and including that word to the end of the sentence and:
    - Preserve the order of the words when you move them.
    - Make them all lowercase.
    - And add a comma and space before them.
    - Capitalize the first letter of the new first word of the sentence.
    - All given sentences will end with a single punctuation mark. 
    - Keep the original punctuation of the sentence and move it to the end of the new sentence.
- Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

For example, given "You must speak wisely." return "Speak wisely, you must."

function wiseSpeak(sentence) {...}

### 23 - Favourite Songs

Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.
Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.
Each object will have a "title" property (string), and a "plays" property (integer).
function favoriteSongs(playlist) {...}

### 24 - Hidden Treasure
Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates ([row, column]) for the next dive of your treasure search, return "Empty", "Found", or "Recovered" using the following rules:

The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.

Each cell in the 2D array will contain one of the following values:
- "-": No treasure.
- "O": A part of the treasure that has not been found.
- "X": A part of the treasure that has already been found.
- If the dive location has no treasure, return "Empty".
- If the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found".
- If the dive location finds the last unfound part of the treasure, return "Recovered".

### 25 - Complemantary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:
 - DNA consists of the letters "A", "C", "G", and "T".
 - The letters "A" and "T" complement each other.
 - The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".

function complementaryDNA(strand) {...}

### 26 - Duration Formatter
Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following:
- Seconds: Should always be two digits.
- Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
- Hours: Should be included only if they're greater than zero.

function format(seconds) {...}

### 27 - Integer Sequence

Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345"

function sequence(n) {...}

### 28 - Navigator
On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:
- You always start on the "Home" page, which will not be included in the commands array.

Valid commands are:
- "Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the - "About" page. When you visit a new page, make sure to discard any forward history you have.
- "Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
- "Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.

For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

function navigate(commands) {...}

### 29 - Email Sorter
On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the @), and username second (the part before the @).

- Sorting should be case-insensitive.
- If more than one email has the same domain, sort them by their username.
- Return an array of the sorted addresses.
- Returned addresses should retain their original case.

function sort(emails) {...}

### 30 - Nth Prime
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. 
The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

function nthPrime(n) {...}

### 31 - SpOoKy~CaSe
Given a string representing a variable name, convert it to "spooky case" using the following constraints:
- Replace all underscores (_), and hyphens (-) with a tilde (~).
- Capitalize the first letter of the string, and every other letter after that. 
- Ignore the tilde character when counting. 
- Make all other letters lowercase.

For example, given hello_world, return HeLlO~wOrLd.

function spookify(boo) {...}

## 2025 November

### 1 - Signature Validation
Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:
- Letters in the message and secret key have these values:
	- a to z have values 1 to 26 respectively.
	- A to Z have values 27 to 52 respectively.
- All other characters have no value.
- Compute the signature by taking the sum of the message plus the sum of the secret key.

For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57

Check if the computed signature matches the provided signature.

function verify(message, key, signature) {...}

### 2 - Infected
On November 2nd, 1988, the first major internet worm was released, infecting about 10% of computers connected to the internet after only a day.

In this challenge, you are given a number of days that have passed since an internet worm was released, and you need to determine how many computers are infected using the following rules:
- On day 0, the first computer is infected.
- Each subsequent day, the number of infected computers doubles.
- Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected computers by 20%. Round the number of patched computers up to the nearest whole number.

For example, on:
Day 0: 1 total computer is infected.
Day 1: 2 total computers are infected.
Day 2: 4 total computers are infected.
Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.

Return the number of total infected computers after the given amount of days have passed.

function infected(days) {...}

### 3 - Word Counter
Given a sentence string, return the number of words that are in the sentence.

Words are any sequence of non-space characters and are separated by a single space.

### 4 - Image Search
On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.

Return the images in the same order they appear in the input array.

function imageSearch(images, term) {...}

### 5 - Matrix Builder
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:
[
  [0, 0, 0],
  [0, 0, 0]
]

### 6 - Weekday Finder
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.

function getWeekday(dateString) {...}

### 7 - Counting Cards
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.

For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.

function combinations(cards) {...}

### 8 - Character Limit
In this challenge, you are given a string and need to determine if it fits in a social media post. Return the following strings based on the rules given:
- "short post" if it fits within a 40-character limit.
- "long post" if it's greater than 40 characters and fits within an 80-character limit.
- "invalid post" if it's too long to fit within either limit.
function canPost(message) {...}

### 9 - Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
- left to right
- right to left
- top to bottom
- bottom to top

For example, given the matrix:
[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:
[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).
function findWord(matrix, word) {...}

### 10 - Extension Extractor
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.

function getExtension(filename) {...}

### 11 - Vowels and Consonants
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].

### 12 - Email Signature Generator
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:
- The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
	A-I: Use >> as the prefix.
	J-R: Use -- as the prefix.
	S-Z: Use :: as the prefix.
- A comma and space (, ) should follow the name.
- The title and company should follow the comma and space, separated by " at " (with spaces around it).

For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".

### 13 - Array Shift
Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

function shiftArray(arr, n) {...}

### 14 - Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

function daysUntilWeekend(dateString) {...}

### 15 - GCD
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

function gcd(x, y) {...}

### 16 - Rectangle Count
Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

function countRectangles(width, height) {...}

### 17 - Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
- They are the same length.
- The number of differing characters does not exceed 10% of the fingerprint length.

function isMatch(fingerprintA, fingerprintB) {...}

### 18 - 100 Characters
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.

function oneHundred(chars) {...}

### 19 - Markdown Heading Converter
Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

Start with zero or more spaces, followed by
1 to 6 hash characters (#) in a row, then
At least one space. And finally,
The heading text.
The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function convert(heading) {...}

### 20 - Longest Word
Given a sentence string, return the longest word in the sentence.
- Words are separated by a single space.
- Only letters (a-z, case-insensitive) count toward the word's length.
- If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.

function longestWord(sentence) {...}

### 21 - LCM
Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:
- Multiples of 4 are 4, 8, 12 and so on.
- Multplies of 6 are 6, 12, 18 and so on.
- 12 is the smallest number that is a multiple of both.

function lcm(a, b) {...}

### 22 - Recipe Scaler
Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

- Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
- Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
Return the scaled items in the same order they are given.

function scaleRecipe(ingredients, scale) {...}

### 23 - Character Count
Given a sentence string, return an array with a count of each character in alphabetical order.

- Treat upper and lowercase letters as the same letter when counting.
- Ignore numbers, spaces, punctuation, etc.
- Return the count and letter in the format "letter count". For instance, "a 3".
- All returned letters should be lowercase.
- Do not return a count of letters that are not in the given string.

function countCharacters(sentence) {...}

### 24 - Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.

function isValidMessage(message, validator) {...}

### 25 - FizzBuzz
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

3 with "Fizz".
5 with "Buzz".
3 and 5 with "FizzBuzz".

function fizzBuzz(n) {...}

### 26 - BuzzFizz
Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:
- Numbers that are multiples of 3 are replaced with "Fizz"
- Numbers that are multiples of 5 are replaced with "Buzz"
- Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
- All other numbers remain as integers in ascending order, starting from 1.
- The array must start at 1 and have no missing or extra elements.

function isFizzBuzz(sequence) {...}

### 27 - What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

- Assume all birthdays are valid dates before November 27th, 2025.
- Return the age as an integer.
- Be sure to account for whether the person has already had their birthday in 2025.

function calculateAge(birthday) {...}

### 28 - Word Guesser
Given two strings of the same length, a secret word and a guess, compare the guess to the secret word using the following rules:
- The secret word and guess will only consist of uppercase letters ("A" to "Z");
- For each letter in the guess, replace it with a number according to how it matches the secret word:
	- "2" if the letter is in the secret word and in the correct position.
	- "1" if the letter is in the secret word but in the wrong position.
	- "0" if the letter is not in the secret word.
-Each letter in the secret word can be used at most once.
-Exact matches ("2") are assigned first, then partial matches ("1") are assigned from left to right for remaining letters.
-If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.

For example, given a secret word of "APPLE" and a guess of "POPPA", return "10201":
The first "P" is not in the correct location ("1"), the "O" isn't in the secret word ("0"), the second "P" is in the correct location ("2"), the third "P" is a zero ("0") because the two "P"'s in the secret word have been used, and the "A" is not in the correct location ("1").

function compare(word, guess) {...}

### 29 - Ball Trajectory
Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous location of the ball (1), return the matrix indices for the next location of the ball.

The ball always moves in a straight line.
The movement direction is determined by how the ball moved from 1 to 2.
The edges of the matrix are considered walls. If the balls hits a:
top or bottom wall, it bounces by reversing its vertical direction.
left or right wall, it bounces by reversing its horizontal direction.
corner, it bounces by reversing both directions.

function getNextLocation(matrix) {...}

### 30 - Given a string of one or more sentences, determine if it was likely generated by AI using the following rules:

It contains two or more dashes (-).

It contains two or more sets of parenthesis (()). Text can be within the parenthesis.

It contains three or more words with 7 or more letters.

Words are separated by a single space and only consist of letters (A-Z). Don't include punctuation or other non-letters as part of a word.

If the given sentence meets any of the rules above, return "AI", otherwise, return "Human".

function detectAI(text) {...}

## 2025 December

### 1 - Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.

function convertToKm(miles) {...}

### 2 - Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).

function toSnake(camel) {...}

### 3 - Markdown Ordered List Item Converter
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:
- Start with zero or more spaces, followed by
- A number (1 or greater) and a period (.), followed by
- At least one space, and then
- The list item text.

If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

For example, given "1. My item", return "<li>My item</li>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function convertListItem(markdown) {...}

### 4 - Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.
A permutation is any reordering of the characters in the string.

- Do not count duplicate permutations.
- If the string contains repeated characters, repeated arrangements should only be counted once.
- The string will contain only letters (A-Z, a-z).

For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".

function countPermutations(str) {...}

### 5 - Symmetric Difference
Given two arrays, return a new array containing the symmetric difference of them.
- The symmetric difference between two sets is the set of values that appear in either set, but not both.
- Return the values in the order they first appear in the input arrays.
function difference(arr1, arr2) {...}

### 6 - String Compression
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.
- Only consecutive duplicates are compressed.• 
- Words are separated by single spaces.

For example, given "yes yes yes please", return "yes(3) please".

function compressString(sentence) {...}

### 7 - Symmetric  Difference 
Given two arrays, return a new array containing the symmetric difference of them.
The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays.

### 8 - Pounds to Kilograms
Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".
- Replace "(lbs)" with the input number.• Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
- 1 pound equals 0.453592 kilograms.
- If the input is 1, use "pound" instead of "pounds".
- If the converted value is 1, use "kilogram" instead of "kilograms".

function convertToKgs(lbs) {...}

### 9 - Most Frequent
Given an array of elements, return the element that appears most frequently(There will always be a single most frequent element).
function mostFrequent(arr) {...}

### 10 - Markdown Bold Parser
Given a string that may include some bold text in Markdown, return the equivalent HTML string.

Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
Convert all bold occurrences to HTML <b> tags and return the string.
For example, given "**This is bold**", return "<b>This is bold</b>".

function parseBold(markdown) {...}

### 11 - Roman Numeral Builder

Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Roman numerals are written from largest to smallest, left to right using the following rules:
- Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
- Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
- No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.

Example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

function toRoman(num) {...}
