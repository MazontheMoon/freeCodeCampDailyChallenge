/*
Challenge - Too Much Screen TIme

Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

- If any single day has 10 hours or more, it's too much.
- If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
- If the average of the seven days is greater than or equal to 6 hours, it's too much.
*/

/**
 * Returns boolean to indicate if accumulated screen time over a week is too high.
 *
 * @param {number } hours - an array of 7 positive integers
 * @return {boolean} if criteria met.
 */

function tooMuchScreenTime(hours) {
  let result = false;
  let totalHours = 0;

  for(let i = 0; i < hours.length; i++){
    totalHours += hours[i];
    
    if(hours[i] >= 10){
      result = true;
      break;
    }

    if(i > 1){
      let avgOf3Days = (hours[i] + hours[i-1] + hours[i-2]) / 3;
      if(avgOf3Days >= 8){
        result = true;
        break;
      }
    }
  }

  if(totalHours / hours.length >= 6){
    result = true;
  }

  return result;
}



