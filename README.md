# FreeCodeCamp Daily Javascript Challenge
A collection of my solutions to FreeCodeCamps series of daily challenges

# 2026

## May

### 19 - Sleep Debt
Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.
- Include tonight's hours in the total time needed to catch up.
- If you've slept enough to cover tonight's target or more, return 0.

### 18 - Longest Domino Chain
Given a 2D array representing a set of dominoes, return the longest valid chain.

- Each domino is a pair of numbers from 0–6, e.g. [3, 2].
- A chain is valid when the second number of each domino matches the first number of the next.
- The first number of the first domino and the second number of the last one don't need to match anything.
- Any domino can be flipped, so [3, 2] can be played as [2, 3].
- There is always exactly one longest valid chain.

For example, given [[1, 2], [4, 5], [2, 3]], return [[1, 2], [2, 3]].

### 17 - Mongo ID Date
Given a MongoDB ID string, return its creation time as an ISO 8601 string.

- A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.

For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".

### 16 - Bingo Range
Given a bingo letter, return the number range associated with that letter.

Letter	Number Range
"B"		1-15
"I"		16-30
"N"		31-45
"G"		46-60
"O"		61-75

Return an array with all numbers in the range from smallest to largest.

### 15 - Coffee Order Parser
Given a string for a coffee order, identify any menu items and return a formatted order.

Use the following menu items and prices:

Item				Price
"cold brew"			$4.50
"oat latte"			$5.00
"cappuccino"		$4.75
"espresso"			$3.00
"vanilla syrup"		$0.75
"caramel drizzle"	$0.60
"extra shot"		$0.50
"oat milk"			$0.75
"cream"				$0.75
Return a string with the matched items joined by " + ", followed by a colon and space (": "), and the total price.

For example, given "I'd like an oat latte with vanilla syrup and an extra shot please.", return "oat latte + vanilla syrup + extra shot: $6.25"

Items should appear in the order they appear in the menu and the total price should always have two decimal places.

### 14 - Mirror Image
Given two strings, determine if the second string is a mirror image of the first.

A mirror image is formed by reversing the string and replacing each character with its mirror equivalent.

Symmetric characters look like themselves in a mirror:
W, T, Y, U, I, O, H, A, X, V, M, w, o, x, v, 0, 8, =, +, :, |, -, _, *, ^, !, ., and the space ( ).

Mirrored pairs swap with each other in a mirror:
Character	Swaps with
[			]
{			}
<			>
b			d
p			q
(			)
If either string includes a character not in the lists above, it doesn't have mirror image that can be created from the characters.

For example, the mirrored image of "[HOW]" is "[WOH]".

### 13 - Offending Element
Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

- If more than one element could be considered out of place, return the index of the first one.

### 12 - Character Frequency
Given a string, return an object (JavaScript) or dictionary (Python) mapping each character to the number of times it appears.

### 11 - Oldest Person
Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.

### 10 - ISBN-13 Validator
Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:
- Contains only digits and hyphens
- Has exactly 13 digits after removing hyphens

Passes the following check:
- Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
- The sum of the results must be divisible by 10.

### 9 - Transposed Matrix
Given a matrix (an array of arrays), return the transposed version of it.

To transpose the matrix, swap the rows and columns. E.g: a value at index [0, 1] should move to index [1, 0].

For example, given:
[
  [1, 2, 3],
  [4, 5, 6]
]

Return:
[
  [1, 4],
  [2, 5],
  [3, 6]
]

### 8 - Medication Reminder
Given an array of medications and a string representing the current time, return the next medication you need to take and how long until you need to take it.

Each medication is in the format [name, lastTaken], where name is the name of the medication and lastTaken is the time it was last taken.
All given times will be in "HH:MM" (24-hour) format.
Use the following medication schedule:

Name			Schedule
Deployxitrin	08:00, 16:00
Debuggamanizole	07:00, 13:00, 21:00
Mergeflictamine	every 4 hours

Return a string in the format "{name} in Hh Mm". For example, "Debuggamanizole in 2h 0m" or "Deployxitrin in 1h 5m".

### 7- Longest Common Substring
Given a string, return the longest substring that appears more than once.

- The substrings can overlap.

### 6 - Allergen Friendly Meals

Given an array of meals and an array of allergens to avoid, return the names of all the meals that contain none of the given allergens.

- Each meal is in the format [meal, allergens], where meal is the name of the meal, and allergens is an array of the allergens the meal contains. For example, ["pasta", ["wheat", "milk"]].
- Allergens to avoid will be an array of strings.

Return safe meal names in the same order given. If no meal is safe, return an empty array.

### 5 - Narcissistic Number
Given a positive integer, determine whether it is a narcissistic number.

A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
For example, 153 has 3 digits, and 13 + 53 + 33 = 153, so it is narcissistic.

### 4 - Parsec Converter
In a distant galaxy, parsecs are used to measure both time and distance. Given an integer number of parsecs, return its equivalent in time or distance.

- If the given integer is odd, it represents time. If it's even, it represents distance.

Use these conversion rates:
Parsecs	Time/Distance
1		2 hours
2		6 light years
Return the converted value as an integer.

### 3 - Good Day
Given a time string in "HH:MM" format (24-hour clock), return:
- "Good morning" for times 05:00 to 11:59
- "Good afternoon" for times 12:00 to 17:59
- "Good evening" for times 18:00 to 21:59
- "Good night" for times 22:00 to 04:59

### 2 - Deepest Brackets
Given a string containing balanced brackets, return the content of the deepest nested brackets.
- Brackets can be any of the three types: (), [], and {}.
- The input will always have a single deepest group.
For example, given "(hello (world))", return "world".

### 1 - Anagram Groups
Given an array of words, return a 2d array of the words grouped into anagrams.

- Words are anagrams if they contain the same letters in any order.
- Each word belongs to exactly one group.
- Return order doesn't matter.

For example, given ["listen", "silent", "hello", "enlist", "world"], return [["listen", "silent", "enlist"], ["hello"], ["world"]].

## April
### 30 - Binary Crossword
Given a character, determine if its 8-bit binary representation can be found in the following grid, horizontally or vertically in either direction:

0 1 0 0 0 0 0 1
0 1 1 0 1 1 1 1
0 1 0 0 0 1 0 0
0 1 1 0 0 1 0 1
0 1 0 1 0 0 1 0
0 1 0 1 0 1 0 0
0 1 1 0 1 0 0 0
1 0 1 0 1 1 1 0

For example, "A" has the binary representation 01000001, which appears in the first row from left to right.

### 29 - URL Query Parser
Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.

- The query string begins after the "?",
- each parameter is separated by "&",
- each key/value pair is separated by "="

For example, given "https://example.com/search?name=Alice&age=30", return:
{
  "name": "Alice",
  "age": "30"
}
All values should be returned as strings.

### 28 - Number Words
Given an integer from 0 to 99, return its English word representation.
- 0 returns "zero".
- Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
- Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
- Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".

### 27 - Word Score
Given a word, return its score using a standard letter-value table:

Letter	Value
A		1
B		2
...		...
Z		26

Upper and lowercase letters have the same value.

### 26 - FizzBuzz Explosion

Given an integer, return the number of steps it takes to turn the word "fizzbuzz" into a string with at least the given number of "z"'s using the following rules:
- Start with the string "fizzbuzz".
- Each step, apply the standard FizzBuzz rules using the letter position in the string (the first "f" is position 1).
- If the letter position is divisible by 3, replace the letter with "fizz"
- If it's divisible by 5, replace the letter with "buzz"
- If it's divisible by 3 and 5, replace the letter with "fizzbuzz"

So after 1 step, "fizzbuzz" turns into "fifizzzbuzzfizzzz", which has 9 "z"'s

### 25 - Word Decompressor

Given a compressed string, return the decompressed version using the following rules:
- The given string is made up of words and numbers separated by spaces.
- Leave the words unchanged.
- Replace numbers with the word at that position, where the first word is at position 1.

For example, given "practice makes perfect and 3 1 2 3", return "practice makes perfect and perfect practice makes perfect".

### 24 - Word Compressor

Given a string, return a compressed version of the string using the following rules:
- The first occurrence of a word remains unchanged.
- Subsequent occurrences are replaced with the position of the first occurrence, where the first word is at position 1.
- Words are separated by a single space.

For example, given "practice makes perfect and perfect practice makes perfect", return "practice makes perfect and 3 1 2 3".

### 23 - Closest Time Direction

Given two times, determine whether you can get from the first to the second faster by moving forward or backward.
- Times are given in 24-hour format ("HH:MM")
- The clock wraps around (23:59 goes to 00:00 when moving forward, and 00:00 goes to 23:59 when moving backwards)

Return:
- "forward" if moving forward is shorter
- "backward" if moving backward is shorter
- "equal" if both directions take the same amount of time

### 22 - Earth Day Cleanup Crew

Today is Earth Day. Given an array of items you cleaned up, return your total cleanup score based on the rules below.

Given items will be one of:

Item		Base Value
"bottle"	10
"can"		6
"bag"		8
"tire"		35
"straw"		4
"cardboard"	3
"newspaper"	3
"shoe"		12
"electronics"	25
"battery"	18
"mattress"	38

A Rare item is represented as ["rare", value]. For example, ["rare", 80]. Rare items do not get a streak bonus.

- Streak bonus: If the same item appears consecutively, it gets increasing bonus points.
	- First consecutive occurrence: base value
	- Second: base value + 1
	- Third: base value + 2
	- etc.
- Fifth Item Multiplier: Every fifth item collected gets a multiplier.
	- Fifth item: *2
	- Tenth item: *3
	- etc.
- Apply the multiplier after calculating any bonuses.

### 21 - Odd Words

Given a string of words, return only the words with an odd number of letters.

- Words in the given string will be separated by a single space.

Return the words separated by a single space.

### 20 - Acronym Finder

Given a string representing an acronym, return the full name of the organization it belongs to from the list below:

- "National Avocado Storage Authority"
- "Cats Infiltration Agency"
- "Fluffy Beanbag Inspectors"
- "Department Of Jelly"
- "Wild Honey Organization"
- "Eating Pancakes Administration"

Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.

### 19 - Unique Stair Climber

Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.

### 18 - Array Sum Finder
Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.

- The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
- Each number in the array may only be used once.
- If no valid subset exists, return "Sum not found".

Return the matching numbers as an array in the order they appear in the original array.

### 17 - Hidden Key
Welcome to the 250th daily challenge!

Given an encoded string, decode it using an encryption key and return it.

To find the key:
- Look at all daily challenges up to today whose challenge number is a multiple of 25 (including this one).
- Take the first letter from each of those challenge titles and combine them into a string. If the title starts with a non-letter, find its first letter.
= VLHCGMDLNH

To decode the message, go over each letter in the encoded message and:
- Look at the corresponding letter in the key (repeat the key if the message is longer than the key).
- Convert the key letter to its corresponding number: "A" = 1, "B" = 2, ..., "Z" = 26.
- Shift the encoded letter backward in the alphabet by that number.
- If the shift goes before "A", wrap around to "Z".

For example, if the encoded message starts with "Y" and the first key letter is "V" (22), shift "Y" back 22 places to get "C". Repeat this process for each letter to decode the full message.
- Only letters are shifted, spaces are returned as-is.
- All given and returned letters are uppercase.

### 16 - String Math
Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.
- If the count of characters separating two numbers is even, use addition.
- If it's odd, use subtraction.
- Consecutive digits form a single number.
- Operations are applied left to right.
- Ignore leading and trailing characters that aren't digits.

For example, given "3ab10c8", return 5. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.

### 15 - Sorted Array Swap
Given an array of integers, return a new array using the following rules:
- Sort the integers in ascending order
- Then swap all values whose index is a multiple of 3 with the value before it.

### 14 - Last Letter

Given a string, return the letter from the string that appears last in the alphabet.
- If two or more letters tie for the last in the alphabet, return the first one.
- Ignore all non-letter characters.

### 13 - Name Initials
Given a full name as a string, return their initials.

- Names to initialize are separated by a space.
- Initials should be made uppercase.
- Initials should be separated by dots.
For example, "Tommy Millwood" returns "T.M.".

### 12 - Spiral Matrix
Given a 2D matrix, return a flat array with all of its values in clockwise order.

The returned array should have the top-left value first, move right along the top row, then down the right column, then left along the bottom row, then up the left column. Repeat inward for any remaining layers.

For example, given:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Return [1, 2, 3, 6, 9, 8, 7, 4, 5].

### 11 - Rook and Bishop Attack
Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1

- Rooks can move as many squares as they want in a horizontal or vertical direction.
- Bishops can move as many squares as they want in any diagonal direction.

One piece can attack another if it can move to the location of that piece.

Return:
- "rook" if the rook can attack the bishop.
- "bishop" if the bishop can attack the rook.
- "neither" if neither piece can attack one another.



### 10 - Rook Attack
Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1

Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.


### 9 - Next Bingo Number
Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:
Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".

### 8 - FizzBuzz Validator
Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:
- Multiples of 3 are replaced with "Fizz".
- Multiples of 5 are replaced with "Buzz".
- Multiples of both 3 and 5 are replaced with "FizzBuzz".
- All other numbers remain as integers.

### 7 - Palindrome Characters
Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).
- A palindrome is a string that is the same forward and backward.
- If it's not a palindrome, return "none".

### 6 - What Day Is It?
Given a Unix timestamp in milliseconds, return the day of the week.

Valid return days are:
"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.

### 5 - Digit Rotation Escape

Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.
- Check rotation 0 (the given number) first.
- Given numbers won't contain any zeros.
- Return the first rotation number if one is found, or "none" if not.

### 4 - Equation Validation

Given a string representing a math equation, determine whether it is correct.
- The left side may contain up to three positive integers and the operators +, -, *, and /.
- The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
- The right side will always be a single integer.
Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.

### 3 - Browser History
Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.

Valid commands are:
- "URL" - Where URL is a web address ("freecodecamp.org" for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
- "Back" - moves to the previous page in history, or stays on the current page if there isn't one.
- "Forward" - moves to the next page in history, or stays on the current page if there isn't one.

### 2 - Capitalized Fibonacci
Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
- The first character is at index 0.
- If the index of non-letter characters is a Fibonacci number, leave it unchanged.

### 1 - Prank Number
Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:
- The numbers increase from one to the next by a fixed amount (addition).
- The numbers decrease from one to the next by a fixed amount (subtraction).
For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].

## March

### 30 - Wake-Up Alarm:
Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

Both times will be given in "HH:MM" 24-hour format.
Return:
- "early" if you woke up before your alarm time.
- "on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
- "late" if you woke up more than 10 minutes after your alarm time.
Both times are on the same day.

### 29 - Due Date
Given a date string, return the date 9 months in the future.
- The given and return strings have the format "YYYY-MM-DD".
- If the month nine months into the future doesn't contain the original day number, return the last day of that month.

### 28 - ISBN-10 Validator
Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):
- The first 9 characters must be digits, and
- The final character may be a digit or the letter "X", which represents the number 10.

To validate it:
- Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
- Add all the results together.
- If the total is divisible by 11, it's valid.

### 27 - Pascal's Triangle Row
Given an integer n, return the nth row of Pascal's triangle as an array.

In Pascal's Triangle, each row begins and ends with 1, and each interior value is the sum of the two values directly above it.

Here's the first 5 rows of the triangle:

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

### 26 - Movie Night
Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:
-"Monday"
-"Tuesday"
-"Wednesday"
-"Thursday"
-"Friday"
-"Saturday"
-"Sunday"

The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:
- Weekend (Friday - Sunday): $12.00 per ticket.
- Weekday (Monday - Thursday): $10.00 per ticket.
- Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
- Tuesdays: all tickets are $5.00 each.

### 25 - Cooldown Time
Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

- Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
- A user must wait at least 48 hours before retaking an exam.


### 24 - Cooldown Time
Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
A user must wait at least 48 hours before retaking an exam.

### 23 - No Consecutive Repeats - 

Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.

### 22 - Coffee Roast Detector
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

- The given string will contain the following characters, each representing a type of bean:
	- An apostrophe (') is a light roast bean worth 1 point each.
	- A dash (-) is a medium roast bean worth 2 points each.
	- A period (.) is a dark roast bean worth 3 points each.
- The roast level is determined by the average of all the beans.

Return:
"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.


### 21 - QR Decoder
Given a 6x6 matrix (array of arrays), representing a QR code, return the string of binary data in the code.

- The QR code may be given in any rotation of 90 degree increments.
- A correctly oriented code has a 2x2 group of 1's (orientation markers) in the bottom-left, top-left, and top-right corners.
- The three 2x2 orientation markers are not part of the binary data.
- The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
- A code will always have exactly one valid orientation.

For example, given:

[
  "110011",
  "110011",
  "000000",
  "000000",
  "110000",
  "110001"
]
or given the same code with a different orientation:

[
  "110011",
  "110011",
  "000000",
  "000000",
  "000011",
  "100011"
]
Return "000000000000000000000001", all the binary data excluding the three 2x2 orientation markers.


### 20 - Equinox Shadows
Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. Given a time, determine the shadow cast by a 4-foot vertical pole.

The time will be a string in "HH:MM" 24-hour format (for example, "15:00" is 3pm).
You will only be given a time in 30 minute increments.

Rules:
- The sun rises at 6am directly "east", and sets at 6pm directly "west".
- A shadow always points opposite the sun.
- The shadow's length (in feet) is the number of hours away from noon, cubed.
- There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at noon.

Return:
- If a shadow exists, return "(length)ft (direction)". For example, "8ft west".
- Otherwise, return "No shadow".
For example, given "10:00", return "8ft west" because 10am is 2 hours from noon, so 23 = 8 feet, and the shadow points west because the sun is in the east at 10am.

### 19 - Inverted Matrix
Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:
[
  ["a", "b"],
  ["a", "a"]
]

Return:
[
  ["b", "a"],
  ["b", "b"]
]

### 18 - Largest Number

Given a string of numbers separated by various punctuation, return the largest number.

- The given string will only contain numbers and separators.
- Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").


### 17 - Anniversary Milestones

Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1				"Paper"
5				"Wood"
10				"Tin"
25				"Silver"
40				"Ruby"
50				"Gold"
60				"Diamond"
70				"Platinum"
If they haven't reached the first milestone, return "Newlyweds".


### 16 - Evenly Divisible

Given two integers, determine if you can evenly divide the first one by the second one.

function isEvenlyDivisible(a, b) {

  return a%b == 0;
}

### 15 - Captured Chess Pieces
Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

Piece	Abbreviation	Quantity	Value
Pawn	"P"				8			1
Rook	"R"				2			5
Knight	"N"				2			3
Bishop	"B"				2			3
Queen	"Q"				1			9
King	"K"				1			0
- The given array will only contain the abbreviations above.
- Any of the 16 pieces not included in the given array have been captured.
- Return the total value of all captured pieces, unless...
- If the King has been captured, return "Checkmate".

### 14 -  Pi Day

Happy pi (π) day!

Given an integer (n), where n is between 1 and 1000 (inclusive), return the nth decimal of π.

Make sure to return a number not a string.
π with its first five decimals is 3.14159. So given 5 for example, return 9, the fifth decimal.

You may have to find the first 1000 decimals of π somewhere.

### 13 - Parking Fee Calculator

Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

- The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
- The first string will be the time you parked your car, and the second will be the time you picked it up.
- If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.

Fee rules:
- Each hour parked costs $3.
- Partial hours are rounded up to the next full hour.
- If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
- There is a minimum fee of $5 (only used if the total would be less than $5).

Return the total cost in the format "$cost", "$5" for example.

### 12 - Domino Chain Validator
Given a 2D array representing a sequence of dominoes, determine whether it forms a valid chain.

- Each element in the array represents a domino and will be an array of two numbers from 1 to 6, (inclusive).
- For the chain to be valid, the second number of each domino must match the first number of the next domino.
- The first number of the first domino and the last number of the last domino don't need to match anything.


### 11 - Array Insertion
Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.

### 10 - Word Length Converter
Given a string of words, return a new string where each word is replaced by its length.

Words in the given string will be separated by a single space
Keep the spaces in the returned string.
For example, given "hello world", return "5 5".


### 9 - Array Sum
Given an array of numbers, return the sum of all the numbers.

### 8 - HSL Validator
Given a string, determine whether it is a valid CSS hsl() color value.

A valid HSL value must be in the format "hsl(h, s%, l%)", where:
- h (hue) must be a number between 0 and 360 (inclusive).
- s (saturation) must be a percentage between 0% and 100%.
- l (lightness) must be a percentage between 0% and 100%.

Spaces are only allowed:
- After the opening parenthesis
- Before and/or after the commas
- Before and/or after closing parenthesis

Optionally, the value can end with a semi-colon (";").

For example, "hsl(240, 50%, 50%)" is a valid HSL value.


### 7 - Element Size
Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.
- The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.
- "vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.
- "vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.


### 6 - Trail Traversal
Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.

The given strings will contain the values:

- "C": Your current location
- "G": Your goal
- "T": Traversable parts of the trail
- "-": Untraversable parts of the map
Return a string with the moves needed to follow the trail from your location to your goal where:
- "R" is a move right
- "D" is a move down
- "L" is a move left
- "U" is a move up

There will always be a single continuous trail, without any branching, from your current location to your goal.

Each trail location will have a maximum of two traversable locations touching it.

For example, given:

[
  "-CT--",
  "--T--",
  "--TT-",
  "---T-",
  "---G-"
]
Return "RDDRDD".

### 5 - Smallest Gap
Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

- There will always be at least one pair of matching characters.
- The returned substring should exclude the matching characters.
- If two or more gaps are the same length, return the characters from the first one.

For example, given "ABCDAC", return "DA".
- Only "A" and "C" repeat in the string.
- The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
- So return the string between the two "C" characters.

### 4 - Playing Card Values
Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:
- An Ace ("A") has a value of 1.
- Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
- Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.

Suits:
Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").

Card Format:
- Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.


### 3 - Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

- The lower number is not garanteed to be the first argument.
- A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.

### 2 - Sum the Letters
Given a string, return the sum of its letters.

- Letters are A-Z in uppercase or lowercase
- Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
- Uppercase and lowercase letters have the same value.
- Ignore all non-letter characters.

### 1 - Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.

## February

### 28 - Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.

### 27 - Matrix Shift
Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

A positive shift moves values to the right.
A negative shift moves values to the left.

Values should wrap:
- Treat the matrix as one continuous sequence of values.
- When a value moves past the end of a row, it continues at the beginning of the next row.
- When a value moves past the last position in the matrix, it wraps to the first position.
- The same applies in reverse when shifting left.

For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
with a shift of 1, move all the numbers to the right one:

[
  [6, 1, 2],
  [3, 4, 5]
]

### 26 - Letter and Number Count

Given a string, return a message with the count of how many letters and numbers it contains.
- Letters are A-Z and a-z.
- Numbers are 0-9.
- Ignore all other characters.

Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".


### 25 - Sequential Difference
Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].


### 24 - Business Day Count
Given a start date and an end date, return the number of business days between the two.

- Given dates are in the format "YYYY-MM-DD".
- Weekdays are business days (Monday through Friday).
- Weekends are not business days (Saturday and Sunday).
- Include both the start and end dates when counting.

### - 23
Blood Type Compatibility

Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:
- A letter: "A", "B", "AB", or "O"
- And an Rh factor: "+" or "-"

Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:
- "O" can donate to other letter type.
- "A" can donate to "A" and "AB".
- "B" can donate to "B" and "AB".
- "AB" can donate only to "AB".

Rh Rules:
- Negative ("-") can donate to both "-" and "+".
- Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

### 22 - 2026 Winter Games Day 17: Closing Day
Given a 2D array of medal winners, return a medal count for each country as a CSV string.

In the given array, each sub-array represents a single event: [gold_winner, silver_winner, bronze_winner]

The returned CSV string should have the following format, with the first line being headers:
- Country,Gold,Silver,Bronze,Total
country_name,gold_count,silver_count,bronze_count,total_medals
- Separate new lines with the new line character ("\n").
- Do not include spaces around commas or at the end of lines.
- Sort the returned CSV by gold medal count, highest first. If two countries have the same gold medal count, sort the tied ones alphabetically.

For example, given:

[
  ["USA", "CAN", "NOR"],
  ["NOR", "USA", "CAN"],
  ["USA", "NOR", "SWE"]
]
Return:

"Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
Which looks like this when printed:

Country,Gold,Silver,Bronze,Total
USA,2,1,0,3
NOR,1,1,1,3
CAN,0,1,1,2
SWE,0,0,1,1


### 21 - 2026 Winter Games Day 16: Curling
Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:
- The center cell (index [2, 2]) is the "button".
- The 8 cells directly surrounding the button represent ring 1.
- And the 16 cells on the outer edge of the house represent ring 2.

In the given matrix:
- "." represents an empty space.
- "R" represents a space with a red stone.
- "Y" represents a space with a yellow stone.

Scoring rules:
- Only one team can score per round.
- The team with the stone closest to the button scores.
- The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
- The lower the ring number, the closer to the center the stone is.
- If both teams' closest stone is the same distance from the center, no team scores.

Return:
A string in the format "team: number_of_points". e.g: "R: 2".
or "No points awarded" if neither team scored any points.
For example, given:

[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.

### 20 - 2026 Winter Games Day 15: Freestyle Skiing
Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.

Valid first words:
"Misty"
"Ghost"
"Thunder"
"Solar"
"Sky"
"Phantom"
"Frozen"
"Polar"

Valid second words:
"Twister"
"Icequake"
"Avalanche"
"Vortex"
"Snowstorm"
"Frostbite"
"Blizzard"
"Shadow"

### 19 - 2026 Winter Games Day 14: Ski Mountaineering
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

           "Shallow"	"Moderate"	"Deep"
"Gentle"	"Safe"	"Safe"	"Safe"
"Steep"	"Safe"	"Risky"	"Risky"
"Very Steep"	"Safe"	"Risky"	"Risky"

### 18 - 2026 Winter Games Day 13: Nordic Combined
Given an array of jump scores for athletes, calculate their start delay times for the cross-country portion of the Nordic Combined.

The athlete with the highest jump score starts first (0 second delay). All other athletes start later based on how far behind their jump score is compared to the best jump.

To calculate the delay for each athlete, subtract the athlete's jump score from the best overall jump score and multiply the result by 1.5. Round the delay up to the nearest integer.


### 17 - 2026 Winter Games Day 12: Bobsled
Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.
All given weight values are in kilograms (kg).
The bobsled (sled by itself) must have a minimum weight of:
- 162 kg for a 1-person team
- 170 kg for a 2-person team
- 210 kg for a 4-person team

The total weight of the bobsled (athletes plus sled) must not exceed:
- 247 kg for a 1-person team
- 390 kg for a 2-person team
- 630 kg for a 4-person team
Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.

### 16 - 2026 Winter Games Day 11: Ice Hockey
Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.

Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
- "W" is the number of wins in regulation, worth 3 points each
- "OTW" is the number of overtime wins, worth 2 points each
- "OTL" is the number of overtime losses, worth 1 point each
- "L" is the number of losses, worth 0 points each
For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.

Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". For example, "The semi-final games will be FIN vs SWE and CAN vs USA."

### 15 - 2026 Winter Games Day 10: Alpine Skiing
Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

To determine the rating:
- Calculate the steepness of the hill by taking the drop divided by the distance.
- Then, calculate the adjusted steepness based on the hill type:
	- "Downhill" multiply steepness by 1.2
	- "Slalom": multiply steepness by 0.9
	- "Giant Slalom": multiply steepness by 1.0

Return:
- "Green" if the adjusted steepness is less than or equal to 0.1
- "Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
- "Black" if the adjusted steepness is greater than 0.25

### 14 - 2026 Winter Games Day 9: Skeleton
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

The given string will only consist of the letters:
- "L" for a left turn
- "R" for a right turn
- "S" for a straight segment
Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

All other curves add 5 points each (all other "L" or "R" characters).

Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:
- "Easy" if the total is 0 - 100
- "Medium" if the total is 101-200
- "Hard" if the total is over 200

2026 Winter Games Day 9: Skeleton
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

The given string will only consist of the letters:
- "L" for a left turn
- "R" for a right turn
- "S" for a straight segment
Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

All other curves add 5 points each (all other "L" or "R" characters).

Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:
- "Easy" if the total is 0 - 100
- "Medium" if the total is 101-200
- "Hard" if the total is over 200

### 13 - 2026 Winter Games Day 8: Luge
Given an array of five numbers, each representing the time (in seconds) it took a luger to complete a segment of a track, determine which segment had the fastest speed and what that speed was.

The track is divided into the following segments:
- Segment 1: 320 meters
- Segment 2: 280 meters
- Segment 3: 350 meters
- Segment 4: 300 meters
- Segment 5: 250 meters
The first value in the given array corresponds to the time for segment 1, the second value to segment 2, and so on.

To calculate the speed (in meters per second) for a segment, divide the distance by the time.

Return "The luger's fastest speed was X m/s on segment Y.". Where X is the fastest speed, rounded to two decimal places, and Y is the segment number where the fastest speed occurred.

### 12 - 2026 Winter Games Day 7: Speed Skating
Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.

### 11 - 2026 Winter Games Day 6: Figure Skating
Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.

### 10 - 2026 Winter Games Day 5: Cross-Country Skiing
Given an array of finish times for a cross-country ski race, convert them into times behind the winner.
- Given times are strings in "H:MM:SS" format.
- Given times will be in order from fastest to slowest.
- The winners time (fastest time) should correspond to "0".
- Each other time should show the time behind the winner, in the format "+M:SS".

For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].

### 9 - 2026 Winter Games Day 4: Ski Jumping
Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

Your score is calculated by summing the above four values.
The current total scores of the other jumpers are:

165.5
172.0
158.0
180.0
169.5
175.0
162.0
170.0
If your score is the best, return "Gold"
If it's second best, return "Silver"
If it's third best, return "Bronze"
Otherwise, return "No Medal"

### 8 - 2026 Winter Games Day 3: Biathlon
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.
- Each round consists of 5 targets.
- Each missed target results in a 150 meter penalty loop.

### 7 - 2026 Winter Games Day 2: Snowboarding
Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.
- A snowboarder's stance is either "Regular" or "Goofy".
- Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
- The landing stance flips every 180 degrees of rotation.

For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".

A snowboarder's stance is either "Regular" or "Goofy".
Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
The landing stance flips every 180 degrees of rotation.
For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".

### 6 - 2026 Winter Games Day 1: Opening Day
Today marks the start of the 2026 Winter Games. The next 17 days will bring you coding challenges inspired by them.

For the first one, you are given a two-letter country code and need to return the flag emoji for that country.

Use this list:
Country	Code	Flag
Albania	"AL"	"🇦🇱"
Andorra	"AD"	"🇦🇩"
Argentina	"AR"	"🇦🇷"
Armenia	"AM"	"🇦🇲"
Australia	"AU"	"🇦🇺"
Austria	"AT"	"🇦🇹"
Azerbaijan	"AZ"	"🇦🇿"
Belgium	"BE"	"🇧🇪"
Benin	"BJ"	"🇧🇯"
Bolivia	"BO"	"🇧🇴"
Bosnia and Herzegovina	"BA"	"🇧🇦"
Brazil	"BR"	"🇧🇷"
Bulgaria	"BG"	"🇧🇬"
Canada	"CA"	"🇨🇦"
Chile	"CL"	"🇨🇱"
China	"CN"	"🇨🇳"
Colombia	"CO"	"🇨🇴"
Croatia	"HR"	"🇭🇷"
Cyprus	"CY"	"🇨🇾"
Czech Republic	"CZ"	"🇨🇿"
Denmark	"DK"	"🇩🇰"
Ecuador	"EC"	"🇪🇨"
Eritrea	"ER"	"🇪🇷"
Estonia	"EE"	"🇪🇪"
Finland	"FI"	"🇫🇮"
France	"FR"	"🇫🇷"
Georgia	"GE"	"🇬🇪"
Germany	"DE"	"🇩🇪"
Great Britain	"GB"	"🇬🇧"
Greece	"GR"	"🇬🇷"
Guinea-Bissau	"GW"	"🇬🇼"
Haiti	"HT"	"🇭🇹"
Hong Kong	"HK"	"🇭🇰"
Hungary	"HU"	"🇭🇺"
Iceland	"IS"	"🇮🇸"
India	"IN"	"🇮🇳"
Iran	"IR"	"🇮🇷"
Ireland	"IE"	"🇮🇪"
Israel	"IL"	"🇮🇱"
Italy	"IT"	"🇮🇹"
Jamaica	"JM"	"🇯🇲"
Japan	"JP"	"🇯🇵"
Kazakhstan	"KZ"	"🇰🇿"
Kenya	"KE"	"🇰🇪"
Kosovo	"XK"	"🇽🇰"
Kyrgyzstan	"KG"	"🇰🇬"
Latvia	"LV"	"🇱🇻"
Lebanon	"LB"	"🇱🇧"
Liechtenstein	"LI"	"🇱🇮"
Lithuania	"LT"	"🇱🇹"
Luxembourg	"LU"	"🇱🇺"
Madagascar	"MG"	"🇲🇬"
Malaysia	"MY"	"🇲🇾"
Malta	"MT"	"🇲🇹"
Mexico	"MX"	"🇲🇽"
Moldova	"MD"	"🇲🇩"
Monaco	"MC"	"🇲🇨"
Mongolia	"MN"	"🇲🇳"
Montenegro	"ME"	"🇲🇪"
Morocco	"MA"	"🇲🇦"
Netherlands	"NL"	"🇳🇱"
New Zealand	"NZ"	"🇳🇿"
Nigeria	"NG"	"🇳🇬"
North Macedonia	"MK"	"🇲🇰"
Norway	"NO"	"🇳🇴"
Pakistan	"PK"	"🇵🇰"
Philippines	"PH"	"🇵🇭"
Poland	"PL"	"🇵🇱"
Portugal	"PT"	"🇵🇹"
Puerto Rico	"PR"	"🇵🇷"
Romania	"RO"	"🇷🇴"
San Marino	"SM"	"🇸🇲"
Saudi Arabia	"SA"	"🇸🇦"
Serbia	"RS"	"🇷🇸"
Singapore	"SG"	"🇸🇬"
Slovakia	"SK"	"🇸🇰"
Slovenia	"SI"	"🇸🇮"
South Africa	"ZA"	"🇿🇦"
South Korea	"KR"	"🇰🇷"
Spain	"ES"	"🇪🇸"
Sweden	"SE"	"🇸🇪"
Switzerland	"CH"	"🇨🇭"
Thailand	"TH"	"🇹🇭"
Trinidad & Tobago	"TT"	"🇹🇹"
Turkey	"TR"	"🇹🇷"
Ukraine	"UA"	"🇺🇦"
United Arab Emirates	"AE"	"🇦🇪"
United States	"US"	"🇺🇸"
Uruguay	"UY"	"🇺🇾"
Uzbekistan	"UZ"	"🇺🇿"
Venezuela	"VE"	"🇻🇪"

### 5 - Pocket Change
Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.

### 4 - Truncate the Text
Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.

function truncateText(text) {
  if (text.length <= 20) {
    return text;
  }

  return text.slice(0, 17) + "...";
}

### 3 - String Mirror
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.

function mirror(str) {
  const reversed = str.split("").reverse().join("");
  return str + reversed;
}

### 2 - Groundhog Day
Today is Groundhog Day, in which a groundhog predicts the weather based on whether or not it sees its shadow.

Given a value representing the groundhog's appearance, return the correct prediction:
- If the given value is the boolean true (the groundhog saw its shadow), return "Looks like we'll have six more weeks of winter.".
- If the value is the boolean false (the groundhog did not see its shadow), return "It's going to be an early spring.".
- If the value is anything else (the groundhog did not show up), return "No prediction this year.".

### 1 - Digital Detox
Given an array of your login logs, determine whether you have met your digital detox goal.

Each log is a string in the format "YYYY-MM-DD HH:mm:ss".

You have met your digital detox goal if both of the following statements are true:
- You logged in no more than once within any four-hour period.
- You logged in no more than 2 times on any single day.

## January

### 31 - Zodiac
Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:

Date Range	Zodiac Sign
March 21 - April 19	"Aries"
April 20 - May 20	"Taurus"
May 21 - June 20	"Gemini"
June 21 - July 22	"Cancer"
July 23 - August 22	"Leo"
August 23 - September 22	"Virgo"
September 23 - October 22	"Libra"
October 23 - November 21	"Scorpio"
November 22 - December 21	"Sagittarius"
December 22 - January 19	"Capricorn"
January 20 - February 18	"Aquarius"
February 19 - March 20	"Pisces"
Zodiac signs are based only on the month and day, you can ignore the year.

### 30 - Valid Pawn Moves
Given the position of one of your pawns on a chessboard, return an array of all the valid squares it can move to in ascending order.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1

For this challenge:
- You are the player on the bottom of the board.
- Pawns can only move one square "up".
- Unless the pawn is in the starting row (row 2), then it can move one or two squares up.

For example, given "D4", return ["D5"], the only square your pawn can move to. Given "B2", return ["B3", "B4"], because it's on the starting row and needs to be in ascending order.

### 29 - Letters-Numbers
Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

### 28 - Flatten the Array
Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays.

### 27 - Odd or Even Day
Given a timestamp (number of milliseconds since the Unix epoch), return:
- "odd" if the day of the month for that timestamp is odd.
- "even" if the day of the month for that timestamp is even.

For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

### 26 - FizzBuzz Mini
Given an integer, return a string based on the following rules:
- If the number is divisible by 3, return "Fizz".
- If the number is divisible by 5, return "Buzz".
- If the number is divisible by both 3 and 5, return "FizzBuzz".
- Otherwise, return the given number as a string.

### 25 - Scaled Image
Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format

Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format

### 24 - Bingo! Letter
Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

Letter	Number Range
"B"		1-15
"I"		16-30
"N"		31-45
"G"		46-60
"O"		61-75

### 23 - Hex Validator
Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:
- Start with a #, and
- be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

### 22 - Class Average
Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

Average Score	Letter Grade
97-100			"A+"
93-96			"A"
90-92			"A−"
87-89			"B+"
83-86			"B"
80-82			"B-"
77-79			"C+"
73–76			"C"
70-72			"C-"
67-69			"D+"
63-66			"D"
60–62			"D-"
below 60		"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores.

### 21 - Markdown Inline Code Parser
Given a string of Markdown that includes one or more inline code blocks, return the equivalent HTML string.

Inline code blocks in Markdown use a single backtick (`) at the start and end of the code block text.

Return the given string with all code blocks converted to HTML code tags.

For example, given the string "Use `let` to declare the variable.", return "Use <code>let</code> to declare the variable.".

### 20 - Consonant Case
Given a string representing a variable name, convert it to consonant case using the following rules:
- All consonants should be converted to uppercase.
- All vowels (a, e, i, o, u in any case) should be converted to lowercase.
- All hyphens (-) should be converted to underscores (_).

### 19 - Energy Consumption
Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:
- 1 Calorie equals 4184 joules.
- 1 watt-hour equals 3600 joules.

Return:
- "Workout" if the workout used more energy.
- "Devices" if the device used more energy.
- "Equal" if both used the same amount of energy.

### 18 - Free Shipping
Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:
Item		Price
"shirt"		34.25
"jeans"		48.50
"shoes"		75.00
"hat"		19.95
"socks"		15.00
"jacket"	109.95

Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:
Item		Price
"shirt"		34.25
"jeans"		48.50
"shoes"		75.00
"hat"		19.95
"socks"		15.00
"jacket"	109.95

### 17 - Knight Moves
Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:
A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1

A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.

This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at A1, it could only move to B3 or C2.

### 16 - Integer Hypotenuse
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

### 15 - Array Swap
Given an array with two values, return an array with the values swapped.

### 14 - Markdown Link Parser
Given the string of a link in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "[link_text](link_url)". Return the string of the HTML a tag with the href set to the link_url and the link_text as the tag content.

For example, given "[freeCodeCamp](https://freecodecamp.org/)" return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';

function parseLink(markdown) {...}

### 13 - Odd or Even?
Given a positive integer, return "Odd" if it's an odd number, and "Even" is it's even.

function oddOrEven(n) {

  return n % 2 == 0 ? "Even" : "Odd";
}

### 12 - Plant the Crop
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.
- 1 acre equals 4046.86 square meters.
- 1 hectare equals 10,000 square meters.

Here's a list of crops that will be given as input and how much space a single plant takes:
Crop		Space per plant
"corn"		1 square meter
"wheat"		0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters

Return the number of plants that fit in the field, rounded down to the nearest whole plant.

function getNumberOfPlants(fieldSize, unit, crop) {...}

### 11 - Par for the Hole
Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:
- "Hole in one!" if it took one stroke.
- "Eagle" if it took two strokes less than par.
- "Birdie" if it took one stroke less than par.
- "Par" if it took the same number of strokes as par.
- "Bogey" if it took one stroke more than par.
- "Double bogey" if took two strokes more than par.

function golfScore(par, strokes) {...}

### 10 - Tic-Tac-Toe
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

Each element in the given matrix is either an "X" or "O".
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:
- "X wins" if player X has three in a row.
- "O wins" if player O has three in a row.
- "Draw" if no player has three in a row.

function ticTacToe(board) {...}

### 9 - Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

function isCircularPrime(n) {...}

### 8 - Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:
- In ascending order (lowest to highest), return "Ascending".
- In descending order (highest to lowest), return "Descending".
- Not sorted in ascending or descending order, return "Not sorted".

function isSorted(arr) {...}

### 7 - Markdown Unordered List Parser
Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:
- Starts with a dash ("-"), followed by
- At least one space, and then
- The list item text.

The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".

### 6 - vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.

function vowelCase(str) {...}

### 5 - Tire Pressure
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

- 1 bar equal 14.5038 psi.

Return an array with the following values for each tire:
- "Low" if the tire pressure is below the minimum allowed.
- "Good" if it's between the minimum and maximum allowed.
- "High" if it's above the maximum allowed.

### 4 - Leap Year Calculator
Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:
- The year is evenly divisible by 4, and
- The year is not evenly divisible by 100, unless
- The year is evenly divisible by 400.

function isLeapYear(year) {
	...
  return year;
}


### 3 - Left-Handed Seat at the Table
Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
In the given matrix:
- An "R" is a seat occupied by a right-handed person.
- An "L" is a seat occupied by a left-handed person.
- A "U" is an unoccupied seat.
- Only unoccupied seats are available to sit at.
- The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
- Corner seats only have one seat next to them.

For example, in the given matrix:
[
  ["U", "R", "U", "L"],
  ["U", "R", "R", "R"]
]
The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.

function findLeftHandedSeats(table) {
	...
  return table;
}

### 2 - Nth Fibonacci Number

Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. 
The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

function nthFibonacci(n) {...}

### 1 - Resolution Streak
Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.

The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:
- You walked at least 10,000 steps.
- You had no more than 120 minutes of screen time.
- You read at least five pages.

If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.

If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day.

function resolutionStreak(days) {...}

# 2025

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

### 12 - Inventory Update
Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

- Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
- Update items in the inventory by adding the quantity of any matching items from the shipment.
- If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
- Return inventory in the order it was given with new items at the end in the order they appear in the shipment.

For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].

function updateInventory(inventory, shipment) {...}

### 13 - Game of Life
Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:
- Each cell is either 1 (alive) or 0 (dead).
- A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
- Cells on the edges have fewer than eight neighbors.

Rules for updating each cell:
- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors lives on.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes alive (reproduction).

For example, given:

[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
return:

[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
Each cell updates according to the number of live neighbors. For instance, [0][0] stays dead (2 live neighbors), [0][1] stays alive (2 live neighbors), [0][2] dies (3 live neighbors), and so on.

function gameOfLife(grid) {...}

### 14 - Capitalize It
Given a string title, return a new string formatted in title case using the following rules:

- Capitalize the first letter of each word.
- Make all other letters in each word lowercase.
- Words are always separated by a single space.

function titleCase(title) {...}

### 15 - Speed Check
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.
- 1 mile equals 1.60934 kilometers.
- If you are travelling less than or equal to the speed limit, return "Not Speeding".
- If you are travelling 5 KPH or less over the speed limit, return "Warning".
- If you are travelling more than 5 KPH over the speed limit, return "Ticket".

function speedCheck(speedMph, speedLimitKph) {...}

### 16 - Consonant Count
Given a string and a target number, determine whether the string contains exactly the target number of consonants.
- Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
- Ignore digits, punctuation, spaces, and other non-letter characters when counting.
function hasConsonantCount(text, target) {...}

### 17 - Markdown Blockquote Parser
Given a string that includes a blockquote in Markdown, return the equivalent HTML string.
A blockquote in Markdown is any line that:
- Starts with zero or more spaces
- Followed by a greater-than sign (>)
- Then, one or more spaces
- And finally, the blockquote text.
Return the blockquote text surrounded by opening and closing HTML blockquote tags.
For example, given "> This is a quote", return <blockquote>This is a quote</blockquote>.
function parseBlockquote(markdown) {...}

### 18 - Checkerboard
Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.
- The characters should alternate like a checkerboard.
- The top-left cell must always be "X"
function createBoard(dimensions) {...}

### 19 - Pairwise
Given an array of integers and a target number, find all pairs of elements in the array whose values add up to the target and return the sum of their indices.

For example, given [2, 3, 4, 6, 8] and 10, you will find two valid pairs:
2 and 8 (2 + 8 = 10), whose indices are 0 and 4
4 and 6 (4 + 6 = 10), whose indices are 2 and 3
Add all the indices together to get a return value of 9.

function pairwise(arr, target) {...}

### 20 - Takeoff Fuel
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.
- 1 gallon equals 3.78541 liters.
- If the airplane already has enough fuel, return 0.
- You can only add whole gallons.
- Do not include decimals in the return number.

function fuelToAdd(currentGallons, requiredLiters) {...}

### 21 - Purge Most Frequent
Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.
- If multiple values are tied for most frequent, remove all of them.
- Do not change any of the other elements or their order.
function purgeMostFrequent(arr) {...}

### 22 - Daylight Hours
December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

Latitude	Daylight Hours
-90			24
-75			23
-60			21
-45			15
-30			13
-15			12
0			12
15			11
30			10
45			9
60			6
75			2
90			0
If the given latitude does not exactly match a table entry, use the value of the closest latitude.

function daylightHours(latitude) {...}

### 23 - Traveling Shopper
Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.

The given amount will be in the format ["Amount", "Currency Code"]. 
For example: ["150.00", "USD"] or ["6000", "JPY"].
Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:
Currency 1 Unit Equals:
USD	1.00 USD
EUR	1.10 USD
GBP	1.25 USD
JPY	0.0070 USD
CAD	0.75 USD
If you can afford all the items in the list, return "Buy them all!".
Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.
function buyItems(funds, items) {...}

### 24 - Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):
"fw:"
"fwd:"
"re:"
Return the total number of occurrences of these markers.

function emailChainCount(subject) {...}

### 25 - Markdown Image Parser
Given a string of an image in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "![alt text](image_url)". Where:
- alt text is the description of the image (the alt attribute value).
- image_url is the source URL of the image (the src attribute value).

Return a string of the HTML img tag with the src set to the image URL and the alt set to the alt text.

For example, given "![Cute cat](cat.png)" return '<img src="cat.png" alt="Cute cat">';

Make sure the tag, order of attributes, spacing, and quote usage is the same as above.

function parseImage(markdown) {...}

### 26 - Snowflake Generator
Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

Mirror a line by reversing all of its characters, including spaces.
For example, given "* \n *\n* ", which logs to the console as:

* 
 *
* 
Return "*  *\n ** \n*  *", which logs to the console as:

*  *
 ** 
*  *
Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.

function generateSnowflake(crystals) {...}

### 27 - Sum of Divisors
Given a positive integer, return the sum of all its divisors.

A divisor is any integer that divides the number evenly (the remainder is 0).
Only count each divisor once.
For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.

function sumDivisors(n) {...}

### 28 - Rock, Paper, Scissors
Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.

The input strings will always be "Rock", "Paper", or "Scissors".
"Rock" beats "Scissors".
"Paper" beats "Rock".
"Scissors" beats "Paper".

Return:
"Player 1 wins" if Player 1 wins.
"Player 2 wins" if Player 2 wins.
"Tie" if both players choose the same option.

function rockPaperScissors(player1, player2) {...}

### 29 - SCREAMING_SNAKE_CASE
Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

The given variable names will be written in one of the following formats:
camelCase
PascalCase
snake_case
kebab-case

In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

To convert to SCREAMING_SNAKE_CASE:
- Make all letters uppercase
- Separate words with an underscore (_)

function toScreamingSnakeCase(variableName) {...}

### 30 - Sum the String
Given a string containing digits and other characters, return the sum of all numbers in the string.

- Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
- Ignore any non-digit characters.

function stringSum(str) {...}

### 31 - Markdown Italic Parser

Given a string that may include some italic text in Markdown, return the equivalent HTML string.
- Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
- There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
- Convert all italic occurrences to HTML i tags and return the string.

For example, given "*This is italic*", return "<i>This is italic</i>".

function parseItalics(markdown) {...}
