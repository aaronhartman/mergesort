var fileOpen = false;
var noFileText = "Please select click \"Choose File\" to select a file to sort";
var inputArray;
// Accept file as input
var openFile = function(event) {
    clearContent();
    var input = event.target;
    if (input.files[0]) {
        // clear results upon selection of a new file
        // TODO: handle if user "Cancels" in file dialogue

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
		      var inputFooterText = ("Unsorted length: " + inputArray.length);
          var inputHeader = document.getElementById('inputHeader');
          var outputHeader = document.getElementById('outputHeader');
          var inputContent = document.getElementById('inputContent');
          var inputHeaderText = ("Unsorted Array: ");
          var outputHeaderText = ("Sorted Array: ");
          inputContent.innerText = inputArray.join("\n");
          inputFooter.innerText = inputFooterText;
          inputHeader.innerText = inputHeaderText;
          outputHeader.innerText = outputHeaderText;
          
          // make numberList boxes visible if they aren't already
         
          document.getElementById("inputCol").style.visibility = "visible";
          document.body.style.cursor='default';

        }

var doMergesort = function() {
  if (!fileOpen) {
    alert(noFileText);
  } else {
// Apply mergesort and store results (mergesort.js)
        clearResults();

        var result = sort(inputArray);
        var invSortInput = (inputArray, Number(0));
        var outputFooterText = ("Sorted length: " + result.length);
        var outputContent  = document.getElementById('outputContent');
        var outputFooter = document.getElementById('outputFooter');
        var invFooter = document.getElementById('invFooter');        
        outputContent.innerText  = result.join("\n");
        outputFooter.innerText = outputFooterText;
        invFooter.innerText = "";
        document.getElementById("outputCol").style.visibility = "visible";
        // release resources
        result = null;
  };
};

var countInversions = function() {
  if (!fileOpen) {
    alert(noFileText);
  } else {
        clearResults();
        
        var invResult = sortInv(inputArray, 0);
        var invList = invResult[0];
        var outputFooterText = ("Sorted length: " + invList.length);
        var invFooterText = ("Inversions counted: " + invResult[1]);
        var outputContent  = document.getElementById('outputContent');
        var outputFooter = document.getElementById('outputFooter');
        var invFooter = document.getElementById('invFooter');
        var inputHeaderText = ("Unsorted Array: ");
        var outputHeaderText = ("Sorted Array: ");
        outputContent.innerText  = invList.join("\n");
        outputFooter.innerText = outputFooterText;
        invFooter.innerText = invFooterText;
        document.getElementById("outputCol").style.visibility = "visible";
        // release resources
        invResult = null;
  };
};

var isBlank = function(str) {
    return (!str || /^\s*$/.test(str));
};

var clearResults = function() {
  outputContent.innerText  = null;
  outputContent.innerText  = null;
  outputFooter.innerText = null;
  document.getElementById("outputCol").style.visibility = "hidden";
};

var clearContent = function() {
  document.getElementById("outputCol").style.visibility = "hidden";
  document.getElementById("inputCol").style.visibility = "hidden";
  inputContent.innerText = null;
  outputContent.innerText  = null;
  outputContent.innerText  = null;
  outputFooter.innerText = null;  
  invFooter.innerText = null;
  inputArray = null;
};

function setCursorByID(id,cursorStyle) {
 var elem;
 if (document.getElementById &&
    (elem=document.getElementById(id)) ) {
  if (elem.style) elem.style.cursor=cursorStyle;
 }
}