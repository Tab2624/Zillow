function scrollToRight(idToSelect) {
  var element = document.getElementById(idToSelect);
  console.log(element);
  element.scrollLeft += 500;
}
function scrollToLeft(idToSelect) {
  var element = document.getElementById(idToSelect);
  console.log(element);
  element.scrollLeft -= 500;
}

var searchItem = "";
function search(elem) {
  searchItem = elem.value;
}

function clickSearch(elem) {
  window.open(`https://www.zillow.com/homes/${searchItem}_rb/`);
}


// document.getElementById('buyDropdown').onclick = function() {myFunction()};

function myFunction(idToSelect){
  document.getElementById(idToSelect).classList.toggle("show")
}

function onmouseLeave(idToSelect){
  document.getElementById(idToSelect).classList.toggle('show')
}


var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchIcon").click();
  }
});