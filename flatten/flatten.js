/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(){
	return [].concat.apply([], ...arguments);\
}

// function flatten(){
// 	var arr=[];
// 	// return [].concat.apply([], ...arguments);
// 	var args = Array.prototype.slice.call(arguments);
// 	for(var i=0; i<args.length ; i++){
// 		arr.concat.apply(arr, args[i]);
// 		if (Array.isArray(args[i])){
// 			flatten(args[i]) ; 
// 		}else {
// 			arr.concat.apply(arr,args[i]);
// 		}
// 	}
// 	return arr ; 
// }

const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);