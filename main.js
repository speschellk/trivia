console.log('hello world');

$(document).ready(function(){


//hide all page content elements other than main
//$("#main").show();
$("#categories").show();
$("#main-content").hide();
$("#trivia-basics").hide();
$("#about").hide();
$("#contact").hide();

  /////PAGE NAVIGATION////////
  //add event listener to make nav actually navigate
  //create an click event listener
  //do this when someone clicks on a link 
  //in the nav bar
  $("nav a").click(function(){
     //hide all content again
     $("#categories").hide(); 
     $("#main-content").hide();
     $("#trivia-basics").hide();
     $("#about").hide();
     $("#contact").hide();  
    //provide value for clicked element's href attribute
    var id = $(this).attr("href");
    //show the element with the id that was clicked
  	$(id).show();
  	$(id).fadeIn();
    $(this).css("color","grey");
  })

  /////CATEGORY NAVIGATION////////
  // add links to each category that open content on that page
  // and hide content home page
	$("div.trivia-category").click(function(){ 
	  console.log('category button clicked');
    //hide main cateogry buttons on click of a category div element
		$("#categories").hide();
    //provide value for clicked element's id
    var c = $(this).attr('class').split(' ')[1];
    console.log('clicked second class is ' + c)
    //show the content element with class of what was clicked
    // TODO: add if statement comparing if c===[second class of content]
      //$(c).show();

  });

});
