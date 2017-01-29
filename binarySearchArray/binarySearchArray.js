/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 	array=array.sort();
 	console.log(array);
 	*/

var binarySearch =  (array, target) => {
	var min = 0, max = array.length - 1, guessNum;
	console.log(array=array.sort());
	while(min <= max) {
		guessNum = Math.ceil((max + min) / 2);
		// return array[guessNum] === target ? guessNum : array[guessNum] < target ? min = guessNum + 1 : max = guessNum - 1
		if (array[guessNum] === target) {
			return guessNum;
		}
		else if (array[guessNum] < target) {
			min = guessNum + 1;
		}
		else {
			max = guessNum - 1;
		}
	}
	return "your number not exist";
}
console.log(binarySearch([1,2,3,4,7,9,5],3));