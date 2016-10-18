$(document).ready(function(){

//GLOBAL VARIABLES - THE RINGS & COLUMNS
var one = $("#one")
var two = $("#two")
var three = $("#three")
var four = $("#four")
var five = $("#five")
var left = $("#left")
var middle = $("#middle")
var right = $("#right")
var columns = $(".columns")
var rings = $(".rings")


//Functionality Code - MOVING THE RINGS
var global = 0;
columns.on("click", function(){
  if (global = 0){
  topRingValue = 0;
  global++;
}
  if(columns.hasClass("select")) {
  topRing = $(this).find(".rings").first()
  topRingValue = topRing.attr("value");
  console.log(topRingValue)
  topRing.css("border", "4px solid black");
  columns.addClass("move").removeClass("select");

} else if (columns.hasClass("move")) {
  console.log(topRingValue);
  console.log($(this).find(".rings").first().attr("value"));

   if ($(this).find(".rings").first().attr("value") > topRingValue){
    topRing.css("border", "none");
    columns.addClass("select").removeClass("move");
      $(this).prepend(topRing);
        console.log(topRingValue);
      }
    }
})

$("#five").click(function(){
    alert(".");
});

});
