// Accept file as input

 var openFile = function(event) {
        var input = event.target;
        var inputArray = [];
        var reader = new FileReader();
        reader.onload = function(){
          inputArray = reader.result.split("\n");	
          if (inputArray[inputArray.length - 1] == "") {
          	inputArray.pop();
          };
		  inputArray = inputArray.map(Number);
          var inputContent = document.getElementById('inputContent');
          var outputContent  = document.getElementById('outputContent');
          var inputFooter = document.getElementById('inputFooter');
          var outputFooter = document.getElementById('outputFooter');

          var inputText = inputArray.join("\n");

		  var inputFooterText = ("Unsorted length: " + "\n"  + inputArray.length + "\n");
          
          // Apply mergesort and display results
          var result = sort(inputArray);
		  var outputText = result.join("\n");
		  var outputFooterText = ("Sorted length: " + result.length);

          inputContent.innerText = inputText;
          inputFooter.innerText = inputFooterText;
          outputContent.innerText  = outputText;
          outputFooter.innerText = outputFooterText;
          
        };
        reader.readAsText(input.files[0]);
      };
// Iplement Mergesort


function sort(list) {
	var len = list.length;
	var left;
	var right;
	// Handle base case
	if (list.length <= 1) {
			return list;
	}; 
	// split list in half and sort both halves recursively
	left = sort(list.slice(0, len / 2));
	right = sort(list.slice(len / 2, len));
	
	// merge recursively sorted branches
	return merge(left, right);
}

function merge(left, right) {
	var leftI = 0;
	var rightI = 0;
	var length = left.length + right.length;
	var sorted = [];
	var k;
	
	while (leftI < left.length && rightI < right.length) {
		if (left[leftI] <= right[rightI]) {
			sorted.push(left[leftI]);
			leftI++;			
		} else {
			sorted.push(right[rightI]);		
			rightI++;
		};
	}
	
	while (leftI < (left.length)) {
		sorted.push(left[leftI]);
		leftI++;
	}
	while (rightI < (right.length)) {
			sorted.push(right[rightI]);
			rightI++;
	}
	return sorted;
}

