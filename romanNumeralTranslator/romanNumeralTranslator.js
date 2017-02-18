
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
<<<<<<< HEAD
  romanNumeral= romanNumeral.split(''),
    result = 0, num = 0; 
=======
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
<<<<<<< HEAD
	if (!romanNumeral.indexOf(DIGIT_VALUES) === 0){
		return null; 
	}
    while (romanNumeral.length) {
    	num = DIGIT_VALUES[romanNumeral.shift()];
    	 var num1 = num < DIGIT_VALUES[romanNumeral[0]] ? -1:1
    	result += num * num1;
    }
	return result;
}

console.log(translateRomanNumeral("XXI"))

	// var array= Object.keys(DIGIT_VALUES);
	// for (var i = 0; i < numeral.length; i++) {
	// if (!romanNumeral.indexOf(array[i]) === 0){
	// 	return null; 
	// }
	// 		if (array[i]=== array[j]){
	// 			if (i>j){
	// 				var value= DIGIT_VALUES.numeral[i]-DIGIT_VALUES.numeral[j];

	// 			}else if(i<j) {
	// 				var value= DIGIT_VALUES.numeral[i]+DIGIT_VALUES.numeral[j];
	// 			}
	// 		}
	// 	}
	// }
    //	return value;
=======
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
