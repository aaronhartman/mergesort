var fileOpen = false;
var noFileText = "You must first choose a file to sort!";
var inputArray;
var inputContent = document.getElementById('inputContent');
var outputContent  = document.getElementById('outputContent');
var inputHeader = document.getElementById('inputHeader');
var outputHeader = document.getElementById('outputHeader');
var inputFooter = document.getElementById('inputFooter');
var outputFooter = document.getElementById('outputFooter');
var invFooter = document.getElementById('invFooter');
var inputHeaderText = ("Unsorted Array: ");
var outputHeaderText = ("Sorted Array: ");

// Accept file as input
var openFile = function(event) {
        
        var input = event.target;

        // clear results upon selection of a new file
        // TODO: handle if user "Cancels" in file dialogue
        clearOutput();

        var reader = new FileReader();
        reader.onload = function(){
          fileOpen = true;
          inputArray = [];
          inputArray = reader.result.split("\n");
          // release reader resources  
          reader = null;
          if (isBlank(inputArray[inputArray.length - 1])) {
          	inputArray.pop();
            };
		      inputArray = inputArray.map(Number);
        
         
        // store unsorted set and layout text
          var inputText = inputArray.join("\n");
		      var inputFooterText = ("Unsorted length: " + inputArray.length);

          inputContent.innerText = inputText;
          inputFooter.innerText = inputFooterText;
          inputHeader.innerText = inputHeaderText;
          outputHeader.innerText = outputHeaderText;
          
          // make numberList boxes visible if they aren't already
          if (!numberLists) {
          var numberLists = document.getElementsByClassName("numberList");
            for(var i = 0; i < numberLists.length; i++) {
              numberLists[i].style.border = "2px #07BEB8";
              numberLists[i].style.backgroundColor = "#C4BABA";
              };
          };
        };
        
      reader.readAsText(input.files[0]);
};

function mergesort() {
  if (!fileOpen) {
    alert(noFileText);
  } else {
// Apply mergesort and store results (mergesort.js)
        var result = sort(inputArray);
        var outputText = result.join("\n");
        var invSortInput = (inputArray, Number(0));
        var outputFooterText = ("Sorted length: " + result.length);
        outputContent.innerText  = outputText;
        outputFooter.innerText = outputFooterText;
        invFooter.innerText = "";
        // release resources
        result = null;
        outputText = null;
  };
}

function countInversions() {
  if (!fileOpen) {
    alert(noFileText);
  } else {
        var invResult = sortInv(inputArray, 0);
        var invList = invResult[0];
        var outputText = invList.join("\n");
        var outputFooterText = ("Sorted length: " + invList.length);
        var invFooterText = ("Inversions counted: " + invResult[1]);
        outputContent.innerText  = outputText;
        outputFooter.innerText = outputFooterText;
        invFooter.innerText = invFooterText;
        // release resources
        invResult = null;
        outputText = null;
  };
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
};

function clearOutput() {
  outputContent.innerText  = "";
  outputContent.innerText  = "";
  outputFooter.innerText = "";  
  invFooter.innerText = "";
}