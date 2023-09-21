function scrollToRight(idToSelect) {
  var element = document.getElementById(idToSelect);
  console.log(element);
  element.scrollLeft += 900;
}
function scrollToLeft(idToSelect) {
  var element = document.getElementById(idToSelect);
  console.log(element);
  element.scrollLeft -= 900;
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

function scrollDown(idToSelect){
  document.getElementById("scrollDownBtn")
  window.scrollTo(0, 1100)
}



// Modal Stuff
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 