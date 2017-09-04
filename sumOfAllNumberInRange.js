

function sumAll(arr) {

	var newArray = [];
	var bestArray;

	var high = newArray.push(Math.max(arr[0],arr[1]));
	var low = newArray.push(Math.min(arr[0],arr[1]));

	for (i = newArray[0]; i <= newArray[1]; i++) {
		bestArray.push(i);
	}

	/*var sumNum = newArray.reduce(function(sum,order) {
		
	});*/

	//return bestArray;

}

console.log(sumAll([1, 4]));//10
console.log(sumAll([4, 1]));//10
//sumAll([5, 10]);//45
//sumAll([10, 5]);//45

