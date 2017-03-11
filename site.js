
bio = "i lern me a gud. am smort.";
/*
bio[4] = "Blorange Enthusiast";
bio[5] = "What's Gucci?"
bio[6] = "I cry Based tears";
bio[7] = "Sloths, mang";
bio[8] = "Is this how I use Tumblr?";
*/


$(document).ready(function(){

//GEE THIS ISN'T HACKY AT ALL

	$('#swag').text(bio);

	setTimeout(function(){

          $('#name').hide().css("visibility", "visible").fadeIn(1000);
      },500);

	setTimeout(function(){

          $('#swag').hide().css("visibility", "visible").fadeIn(1000);
      },1000);
	  
	  setTimeout(function(){

          $('.link').hide().css("visibility", "visible").fadeIn(1000);
      },1500);



      });
