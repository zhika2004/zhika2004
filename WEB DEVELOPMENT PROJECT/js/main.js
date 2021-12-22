$(document).ready(function(){
	
$(".tab_item").not(":first").hide();
$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
   $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false
      });
})