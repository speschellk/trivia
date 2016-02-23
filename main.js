jQuery(function(){

// add links to each category that open content on that page and hide content home page
	
	$("div").click(
  function(){ 
	  //hide main context section on click of div element
		$("#main-content").hide();
  //show the element with id of what was clicked 
  	 	var id = $(this).attr("id");
		$(id).show();
	}
  )
});
