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
          var inputHeader = document.getElementById('inputHeader');
          var outputHeader = document.getElementById('outputHeader');
          var inputFooter = document.getElementById('inputFooter');
          var outputFooter = document.getElementById('outputFooter');

          var inputText = inputArray.join("\n");

		  var inputHeaderText = ("Unsorted Array: ");
		  var inputFooterText = ("Unsorted length: " + inputArray.length);
          
          // Apply mergesort and display results
          var result = sort(inputArray);
		  var outputText = result.join("\n");
		  var outputHeaderText = ("Sorted Array: ");
		  var outputFooterText = ("Sorted length: " + result.length);

          inputContent.innerText = inputText;
          inputFooter.innerText = inputFooterText;
          inputHeader.innerText = inputHeaderText;
          
          outputContent.innerText  = outputText;
          outputFooter.innerText = outputFooterText;
          outputHeader.innerText = outputHeaderText;

          var numberLists = document.getElementsByClassName("numberList");

          for(var i = 0; i < numberLists.length; i++) {
          	numberLists[i].style.border = "2px solid black";
          	numberLists[i].style.backgroundColor = "#98DFEA";

          };
        };
        reader.readAsText(input.files[0]);
      };

// Implement Mergesort
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

