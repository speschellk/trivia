var channelName = 'Sports';
var vidWidth = '500';
var vidHeight = '400';
var vidResults = 10;
var channels = ["Education", "Sports", "Sports News", "News", "Entertainment News"]
var Playlists = ["That's a Good Question",]

$(document).ready(function(){

	console.log('hello world');
	$("#contact").hide();
//hide all page content elements other than main
//$("#main").show();
/*$("#categories").show();
$("#main-content").hide();
$("#trivia-basics").hide();
$("#about").hide();

  /////PAGE NAVIGATION////////
  //add event listener to make nav actually navigate
  //create an click event listener
  //do this when someone clicks on a link 
  //in the nav bar
  /*$("nav a").click(function(){
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
  })*/

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  /////CATEGORY NAVIGATION////////
  // add links to each category that open content on that page
  // and hide content home page
  //$("div.trivia-category").click(function(){ 
   // $.getJSON("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCLowtBqq3Oo7jG0DJWvZwcNf3hmNM0n4A&part=snippet,contentDetails,statistics,status", function(data){
//      console.log(data);
 //   });

   /* console.log('category button clicked');
    //hide main cateogry buttons on click of a category div element
    $("#categories").hide();
    //provide value for clicked element's id
    var c = $(this).attr('class').split(' ')[1];
    console.log(c);
    console.log('clicked second class is ' + c)
    //show the content element with class of what was clicked
    // TODO: add if statement comparing if c===[second class of content]
    $("#main-content").show();*/
 // });

 	$.get("https://www.googleapis.com/youtube/v3/channels", {
	 		part: 'contentDetails',
			forUsername: channelName,
			//topicId: ,
			key: 'AIzaSyCLowtBqq3Oo7jG0DJWvZwcNf3hmNM0n4A'},
			function(data) {
				$.each(data.items, function(i, item){
					console.log(item);
					pid=item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);
				})
			}	
	);

	function getVids(pid){
 	$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems", {
	 		part: 'snippet' ,
			maxResults: vidResults,
			playlistId: pid,	
			key: 'AIzaSyCLowtBqq3Oo7jG0DJWvZwcNf3hmNM0n4A'},
			function(data) {
				var output;
				$.each(data.items, function(i, item){
					console.log(item);
					vidTitle= item.snippet.title;
					videoId = item.snippet.resourceId.videoId;
					//output = '<li>'+vidTitle+'</li>';
					output = '<li><iframe height="+vidHeight+" width="+vidWidth+" src=\"//www.youtube.com/embed/'+videoId+'"\></iframe></li>';
					//Append to results listStyleType
					$('#results').append(output);
				})
			}	
	);
	}


});
