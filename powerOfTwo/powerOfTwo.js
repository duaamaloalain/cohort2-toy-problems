/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/
2**5
function power(exp) {
	var result = 1;
	while(exp--) {
		result *= 2;
	}
	return result;
}

var powerOfTwo = function(num){
	var sum=0, x = power(num) /*Math.pow(2,num)*/ , arr =x.toString().split("");
	if (typeof num !== 'number'){
		return 'Not a number'; 
	}else{
		for (var i = 0; i <arr.length; i++) {
			if ( arr[i] !== "+" || arr[i] !== "."){
				arr[i]= parseInt(arr[i]); 
				sum += arr[i];
			}
		}	
	}  
	return sum;
}