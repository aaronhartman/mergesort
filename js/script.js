var fileOpen = false;
var noFileText = "Please select click \"Choose File\" to select a file to sort";
var inputArray;
// Accept file as input
var openFile = function(event) {
    clearContent();

    var input = event.target;
    if (input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(){
          inputArray = [];
          inputArray = reader.result.split("\n");
          fileOpen = true;  
          main();
        };
  
      reader.readAsText(input.files[0]);
    } else {
      fileOpen = false;
    };
}; 


var main = function() {
    if (isBlank(inputArray[inputArray.length - 1])) {
          	inputArray.pop();
            };
		      inputArray = inputArray.map(Number);
        // store unsorted set and layout text
          var inputHeader = document.getElementById('inputHeader');
          var outputHeader = document.getElementById('outputHeader');
          var inputContent = document.getElementById('inputContent');
          var inputFooter = document.getElementById('inputFooter');
          
          inputHeader.innerText = ("Unsorted Array: ");
          outputHeader.innerText = ("Sorted Array: ");
          inputContent.innerText = inputArray.join("\n");
          inputFooter.innerText = ("Unsorted length: " + inputArray.length.toLocaleString());
          
          // make numberList boxes visible if they aren't already
         
          document.getElementById("inputCol").style.visibility = "visible";
          // document.body.classList.remove('wait');

        }

var doMergesort = function() {
  if (!fileOpen) {
    alert(noFileText);
  } else {
        clearResults();
        // Apply mergesort and store results (mergesort.js)
        var result = sort(inputArray);
        var outputContent  = document.getElementById('outputContent');
        var outputFooter = document.getElementById('outputFooter');
        
        outputContent.innerText  = result.join("\n");
        outputFooter.innerText = ("Sorted length: " + result.length.toLocaleString());
        document.getElementById("outputCol").style.visibility = "visible";

        // release resources
  };
};

var countInversions = function() {

  if (!fileOpen) {
    alert(noFileText);
  } else {
        clearResults();
        // Apply mergesort with inversion counter and store results as [Array[Number], number_of_inversions]
        // (countinversions.js)
        var invResult = sortInv(inputArray, 0);
        var outputContent  = document.getElementById('outputContent');
        var outputFooter = document.getElementById('outputFooter');
        var invFooter = document.getElementById('invFooter');
        
        outputContent.innerText  = invResult[0].join("\n");
        outputFooter.innerText = ("Sorted length: " + invResult[0].length.toLocaleString());
        invFooter.innerText = ("Inversions counted: " + invResult[1].toLocaleString());
        
        document.getElementById("outputCol").style.visibility = "visible";
  };
};

var isBlank = function(str) {
    return (!str || /^\s*$/.test(str));
};

var clearResults = function() {
  document.getElementById("outputCol").style.visibility = "hidden";
  document.getElementById('invFooter').innerText = null;        
};

var clearContent = function() {
  document.getElementById("outputCol").style.visibility = "hidden";
  document.getElementById("inputCol").style.visibility = "hidden";
  
};