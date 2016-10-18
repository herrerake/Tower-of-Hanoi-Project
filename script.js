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
  //This solves the problem of setting rings with larger values on top of smaller ones.
  //By establishing a value on the columns based upon the value of the top ring. Initially
  //I established a global value of 0 on the onset then by doing global++ the global value
  //will not go back to 0.
  if (global = 0){
  topRingValue = 0;
  global++;
}
//By giving the columns a class of select and move I am now able to toggle
//between the two actions. When in class move and clicked on a new column
//then the ring will append.
  if(columns.hasClass("select")) {
    topRing = $(this).find(".rings").first()
    topRingValue = topRing.attr("value");
    console.log(topRingValue)
    topRing.css("border", "4px solid black");
    columns.addClass("move").removeClass("select");
}
  else if (columns.hasClass("move")) {
    console.log(topRingValue);
    console.log($(this).find(".rings").first().attr("value"));


    //There is a shadow ring of 99 that is used as a placeholder so that any ring
    //can sit on top. Solving the issue when a column is empty.
  if ($(this).find(".rings").first().attr("value") > topRingValue){
    topRing.css("border", "none");
    columns.addClass("select").removeClass("move");
      $(this).prepend(topRing);
      console.log(topRingValue);
      }
    }
})
});
