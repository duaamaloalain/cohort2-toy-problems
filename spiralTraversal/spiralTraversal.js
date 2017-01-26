/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
<<<<<<< HEAD
    */

var spiralTraversal = function(matrix){
	var result=[];
	if (matrix.length == 0) {
		return;
	}
	result = result.concat(matrix.shift());
	for (var i = 0; i < matrix.length; i++) {
		result= result .concat(matrix[i][2])
	}
	result = result.concat(matrix.pop().reverse().slice(1));
	// for (var j = 0; j < matrix.length; j++) {
	// 	result= result.concat(matrix[1][j])
	// }

	// for (var k=matrix.length -2; k > 0; k--) {
	// 	result.push(matrix[k].shift());
	// }
	return result;
};
=======
 */

var spiralTraversal = function(matrix){

};
>>>>>>> 812640f2ad169de84a70e736efcb0f6864aaf56e
