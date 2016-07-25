// Implement Mergesort
function sort(list) {
	// Handle base case
	if (list.length <= 1) {
		return list;
	}; 
	// split list in half and sort both halves recursively
	var left = sort(list.slice(0, list.length 
		/ 2));
	var right = sort(list.slice(list.length 
		/ 2, list.length));
	// merge recursively sorted branches
	return merge(left, right);
}

function merge(left, right) {
	var leftI = 0;
	var rightI = 0;
	var sorted = [];
	
	while (leftI < left.length && rightI < right.length) {
		if (left[leftI] <= right[rightI]) {
			sorted.push(left[leftI]);
			leftI++;			
		} else {
			sorted.push(right[rightI]);		
			rightI++;
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
	return sorted;
}

