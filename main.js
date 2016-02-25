console.log('hello world');

$(document).ready(function(){

/////PAGE NAVIGATION////////
//add event listener to make nav actually navigate
//create an click event listener
//do this when someone clicks on a link 
 //in the nav bar
    $("nav a").click(function(){
      //hide all article elements
      $("#main-content").hide();
      //provide value for clicked element's href attribute
      var id = $(this).attr("href");
      //show 
	  $(id).show();
	  $(id).slideDown();
      $(this).css("color","blue");
    }

});


// add links to each category that open content on that page and hide content home page
	$("div").click(
  function(){ 
	  //hide main context section on click of div element
		$("#main-content").hide();
  //show the element with id of what was clicked 
	}
  )
});
