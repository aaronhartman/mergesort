// Implement Mergesort with Inversion calculation
function sortInv(list, count) {
	// Handle base case
	if (list.length <= 1) {
			return [list, count];
	}; 
	// split list in half and sort both halves recursively
	var left = sortInv(list.slice(0, list.length / 2), count);
	var right = sortInv(list.slice(list.length / 2, list.length), 0);
	
	// merge recursively sorted branches
	return mergeInv(left, right);
}

function mergeInv(leftResult, rightResult) {
	var leftI = 0;
	var rightI = 0;
	var count = leftResult[1] + rightResult[1];
	var sorted = [];
	
	while (leftI < leftResult[0].length && rightI < rightResult[0].length) {
		if (leftResult[0][leftI] <= rightResult[0][rightI]) {
			sorted.push(leftResult[0][leftI]);
			leftI++;			
		} else {
			sorted.push(rightResult[0][rightI]);		
			rightI++;
			if (leftResult[0].length > leftI) {
				count += (leftResult[0].length - leftI);
			} else {
				count++;
			};
		};
	};
	
	while (leftI < (leftResult[0].length)) {
		sorted.push(leftResult[0][leftI]);
		leftI++;
	};
	while (rightI < (rightResult[0].length)) {
		sorted.push(rightResult[0][rightI]);
		rightI++;
	};
	return [sorted, count];
}

