$(document).ready(function() {
	$('.search-select').selectric();
	var mySwiper = new Swiper ('.discount-slider', {
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	});

	$(".horiz-slider").each(function(index, element){
	    var $this = $(this);
	    $this.addClass("instance-" + index);
	    var x = $this.closest('div[class$="-row"]');
	    x.find(".swiper-btn-prev").addClass("btn-prev-" + index);
	    x.find(".swiper-btn-next").addClass("btn-next-" + index);
	    var swiper = new Swiper(".instance-" + index, {
	        loop: true,
	    	spaceBetween: 10,
	        nextButton: ".btn-next-" + index,
	        prevButton: ".btn-prev-" + index,
	        slidesPerView: $(this).hasClass('brands-slider') ? 6 : 5,
	    });
	});
	var hotSwiper = new Swiper ('.hot-slider', {
	    loop: true,
	    slidesPerView: 2,
	    spaceBetween: 20,
	    nextButton: ".hot-next",
	    prevButton: ".hot-prev",
	});
	$(".cat-row__buttons a").click(function(event) {
		event.preventDefault();
		var index = $(this).index();
		$(".cat-row__buttons a").removeClass('active');
		$(this).addClass('active');
		$("ul.cat-row__list").removeClass('active');
		$("ul.cat-row__list").eq(index).addClass('active');
	});

	$('.open-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
    $('input[type=tel]').inputmask("+7 (999) 999-99-99");
});