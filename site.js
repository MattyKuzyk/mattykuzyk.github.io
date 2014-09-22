var bio = new Array();
var randomnumber=Math.floor(Math.random()*4);

bio[0] = "Jack of all trades, master of some";
bio[1] = 'div id="yolo" because #yolo';
bio[2] = 'Not random, just psuedo-random';
bio[3] = "Girls say I can't commit, they should see my git log";
/*
bio[4] = "Blorange Enthusiast";
bio[5] = "What's Gucci?"
bio[6] = "I cry Based tears";
bio[7] = "Sloths, mang";
bio[8] = "Is this how I use Tumblr?";
*/


$(document).ready(function(){

//GEE THIS ISN'T HACKY AT ALL

	$('#swag').text(bio[randomnumber]);

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
