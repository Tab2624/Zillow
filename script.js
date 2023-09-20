function scrollToRight(idToSelect) {
    var element = document.getElementById(idToSelect);
    console.log(element)
    element.scrollLeft += 500;
}
function scrollToLeft(idToSelect) {
    var element = document.getElementById(idToSelect);
    console.log(element)
    element.scrollLeft -= 500;
}

var searchItem = ''
function search(elem){
    searchItem = elem.value;
}

function clickSearch(elem){
    window.open(`https://www.zillow.com/homes/${searchItem}_rb/`)
}




