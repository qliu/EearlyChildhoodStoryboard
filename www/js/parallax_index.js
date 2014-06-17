/* =====================================
   Colorado's Youngest: A '0-5' Profile
   ------------------------------------
   JavaScript: 
		Manage Pages with Parallax.js
   ------------------------------------
   by Qing Liu
===================================== */

var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function(){
	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});
	
	//Add pages
	parallax.add($("#index"))
	       .add($("#page1"))
		   .add($("#page2"));
		   
	parallax.background = $("body");
	
	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};
	

	if (!window.location.hash.split('#')[1]){ var tHash = "index"; }
	else{ var tHash = window.location.hash.split('#')[1]; }

	
	//Setting up page navigation
	parallax.index.onload=function(){
		setRight("page1", "");
	};
	
	parallax.page1.onload=function(){
		setLeft("index", "");
		setRight("page2", "");
	};
	
	parallax.page2.onload=function(){
		setLeft("page1", "");
		setRight("index", "");
	};
	
	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}
	
	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});
	
	$(".control").hide();

	// Get Chart Data
	var getChartData = function(chart_id,chart_container){
		$.getJSON("./data/" + chart_id + ".json",function(data){
			percentageChangeBarChart(data.title,data.headers,data.data,chart_container);
		});
	};
	// Initiate Highcharts
	$.each($(".percentageChangeBarChart"),function(){
		chart_id = $(this).attr("id");
		chart_container = "#" + chart_id;
		getChartData(chart_id,chart_container);
	});
	
	parallax.index.show();
});