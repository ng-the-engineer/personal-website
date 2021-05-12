function filterSelection(c) {
  var x, j;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (j = 0; j < x.length; j++) {
    w3RemoveClass(x[j], "show");
    if (x[j].className.indexOf(c) > -1) w3AddClass(x[j], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var k, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (k = 0; k < arr2.length; k++) {
    if (arr1.indexOf(arr2[k]) == -1) {
      element.className += " " + arr2[k];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var j, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (j = 0; j < arr2.length; j++) {
    while (arr1.indexOf(arr2[j]) > -1) {
      arr1.splice(arr1.indexOf(arr2[j]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var j = 0; j < btns.length; j++) {

  console.log('add event')
  btns[j].addEventListener("click", function(){
    console.log(' button clicked')
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}