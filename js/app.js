$(document).ready(function() {
	$('.imgborder').click( function (){
		$(".imgborder-active").removeClass('imgborder-active');
		$(this).addClass('imgborder-active');
		$('.cars').addClass('hidden');
		var car = $(this).data('car');
		$("#"+car).removeClass('hidden');
	});
});
