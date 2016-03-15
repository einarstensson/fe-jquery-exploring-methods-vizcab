// initialize jQuery command after all page elements load
	    			
$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide(1000);
	});
		
	//show
	$("#b2").click(function(){
		$("#p1").show(1000);
	});
			
	//toggle
	$("#b3").click(function(){
		$("#p1").toggle();
	});
		
	//css
	$("#b4").click(function(){
		$("#p2").css({ 'background-color': 'rgb(204,204,204)' });
	});
		
	//css (multiple property changes)
	$("#b5").click(function(){
		$("#p2").css({ 'background-color': 'blue' });
		$("#p2").css({ 'color': 'white' });
	});
		
	//html
	$("#b6").click(function(){
		$('#p3').html('change html text to this!');
	});
		
	//prepend
	$("#b7").click(function(){
		$('#p3').prepend('<p><b>Before</b></p>');
	});	
		 
	//append
	$("#b8").click(function(){
		$('#p3').append('<p><b>After</b></p>');
	});	
		 
	//before
	$("#b9").click(function(){
		$('#p4').before('<p><b>Before E</b></p>');
	});	
		 
	//after
	$("#b10").click(function(){
		$('#p4').after('<p><b>After E</b></p>');
	});	
		 
	//wrap
	$('#b11').click(function(){
		$('#p5').wrap("<div class='pinky'></div>");
	});
		 
	//addClass
	$('#b12').click(function(){
		$('#p5').addClass("texty");
	});
		 
	//clone
	$('#b13').click(function(){
		$('li').clone().appendTo('ul');
	});
		 
	//fadeOut
	$('#b14').click(function(){
		$('#p6').fadeOut('slow');
	});
		 
	//fadeIn
	$('#b15').click(function(){
		$('#p6').fadeIn('slow');
	});
		  
	//fadeToggle
	$('#b16').click(function(){
		$('#p6').fadeToggle();
	});
		  
	//slideUp
	$('#b17').click(function(){
		$('.box-content').slideUp('slow');
	});
		 
	//slideDown
	$('#b18').click(function(){
		$('.box-content').slideDown('slow');
	});

	 //slideToggle
	$('.box-header').click(function(){
		$('.box-content').slideToggle('slow');
	});	 
		  
	//animate
	$('#b19').click(function(){
		$('.box-animate').animate({
			height: '+=100' 
		}, '5000');
		$('.box-animate').animate({
			width: '+=100' 
		}, '5000');
		$('.box-animate').animate({
			height: '-=150' 
		}, '5000');
		$('.box-animate').animate({
			width: '-=150' 
		}, '5000');
		$('.box-animate').animate({
			width: '+=50' 
		}, '5000');
		$('.box-animate').animate({
			height: '+=50' 
		}, '5000');
	});
});