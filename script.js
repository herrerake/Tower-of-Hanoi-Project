$(document).ready(function(){

  // Nice work commenting your code! also, just as a general note, this is some of the cleanest tower of hanoi code I've seen in my short time as an instructor. super readable and well-organized


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

  //is global # of moves? is it supposed to track whether or not the game has started?
  var global = 0;
  columns.on("click", function(){
    //This solves the problem of setting rings with larger values on top of smaller ones.
    //By establishing a value on the columns based upon the value of the top ring. Initially
    //I established a global value of 0 on the onset then by doing global++ the global value
    //will not go back to 0.

    //careful! use == for comparison
    if (global = 0){
      topRingValue = 0;
      global++;
    }
    //By giving the columns a class of select and move I am now able to toggle
    //between the two actions. When in class move and clicked on a new column
    //then the ring will append.

    // I really like how clean and readable your code is here
    if(columns.hasClass("select")) {
      //I'd use var or let here so that topRing isn't a global variable
      topRing = $(this).find(".rings").first()
      topRingValue = topRing.attr("value");
      // I might make the select class include the styling rule below, and then you can jsut toggle it using toggleClass
      topRing.css("border", "4px solid black");
      // I'd use toggleClass here for select, I think this would potentially eliminate the need for the move class as well!
      columns.addClass("move").removeClass("select");
    } else if ( columns.hasClass("move") ) {

      //There is a shadow ring of 99 that is used as a placeholder so that any ring
      //can sit on top. Solving the issue when a column is empty.

      // I'm not convinced you need the shadow ring, but perhaps I was just unable to reproduce the bug.
      // That being said, great practice to document a workaround! Your commenting practices are exemplary and commendable
      if ($(this).find(".rings").first().attr("value") > topRingValue){
        topRing.css("border", "none");
        columns.addClass("select").removeClass("move");
        $(this).prepend(topRing);
        console.log(topRingValue);
      }
    }
    //I'd add a checkWin each time a legal move is made, then your game would be complete!
    // This might be implemented as follows: select all the discs within one of the three containers, then if the length is the number of discs in the game, you win. You woudln't have to compare their sizes, since you already account for that when you are determining if a move is legal or not. If the move can be made, then it permits the div to be appended to another column. If there are 5 divs in the column, then that's a win. The only catch is that it should be only on column 2 or 3 that'd you should check for a win, since you start on column 1.
  })
});
