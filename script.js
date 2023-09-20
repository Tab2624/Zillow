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