// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
		$('#orderedlist2').css("background-color","#00FF44");
		$('#orderedlist2  li').css("color","#0000FF");
		$('#orderedlist2 li:last').hover(function(){$(this).css("color","red")}, function(){$(this).css("color","#0000FF")});
	})
