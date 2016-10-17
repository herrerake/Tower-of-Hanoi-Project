$(document).ready(function(){

//GLOBAL VARIABLES - THE RINGS
var one = $("#one")
var two = $("#two")
var three = $("#three")
var left = $("#left")
var middle = $("#middle")
var right = $("#right")
var columns = $(".columns")
var rings = $(".rings")



//THE COLUMNS
var game = {
  left:[one,two,three],
  middle:[],
  right:[]
}

//Functionality Code - MOVING THE RINGS

columns.on("click", function(){

  if(columns.hasClass("select")) {

  topRing = $(this).find(".rings").first()
  topRing.css("border", "4px solid black")
  columns.addClass("move").removeClass("select")

} else if (columns.hasClass("move")) {
    topRing.css("border", "none")
    columns.addClass("select").removeClass("move")
      $(this).prepend(topRing)
    }

})


});




// function allowDrop(ev) {
//     ev.preventDefault();
// }
//
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }
