$(document).ready(function(){
	$("#piton_logo").hover(function(){
		$(this).attr("src","./www/image/piton_logo_color.png");
	},
	function(){
		$(this).attr("src","./www/image/piton_logo.png");
	});
});