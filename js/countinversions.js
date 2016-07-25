// function Result(list, invCount) {
// 	this.list = list;
// 	this.invCount = Number(invCount);
// };


// Implement Mergesort with Inversion calculation
function sortInv(list, count) {
	
	var left;
	var right;
	
	// Handle base case
	if (list.length <= 1) {
			return [list, count];
	}; 
	// split list in half and sort both halves recursively
	left = sortInv(list.slice(0, list.length / 2), count);
	right = sortInv(list.slice(list.length / 2, list.length), 0);
	
	// merge recursively sorted branches
	return mergeInv(left, right);
}

function mergeInv(leftResult, rightResult) {
	var leftI = 0;
	var rightI = 0;
	var count = leftResult[1] + rightResult[1];
	var left = leftResult[0];
	var right = rightResult[0];
	var length = left.length + right.length;
	var sorted = [];
	
	while (leftI < left.length && rightI < right.length) {
		if (left[leftI] <= right[rightI]) {
			sorted.push(left[leftI]);
			leftI++;			
		} else {
			sorted.push(right[rightI]);		
			rightI++;
			if (left.length > leftI) {
				count += (left.length - leftI);
			} else {
				count++;
			};
		};
	};
	
	while (leftI < (left.length)) {
		sorted.push(left[leftI]);
		leftI++;
	};
	while (rightI < (right.length)) {
		sorted.push(right[rightI]);
		rightI++;
	};
	res = [sorted, count];
	return res;
}

