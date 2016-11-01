$(document).ready(function() {
	$('.search-select').selectric();
	var mySwiper = new Swiper ('.discount-slider', {
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	});
	$('.filter-select').selectric();

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
    //GOOGLE MAPS
    if(document.getElementById('map')) {
    	var image = '../img/marker.png'
    	var locations = [
	      ['Bondi Beach', -33.890542, 151.274856, 4],
	      ['Coogee Beach', -33.923036, 151.259052, 5],
	      ['Cronulla Beach', -34.028249, 151.157507, 3],
	      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
	      ['Maroubra Beach', -33.950198, 151.259302, 1]
	    ];
	    var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 10,
	      center: new google.maps.LatLng(-33.92, 151.25),
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    });
	    var infowindow = new google.maps.InfoWindow();
	    var marker, i;
	    for (i = 0; i < locations.length; i++) {  
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map,
	        icon: image
	      });
	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(locations[i][0]);
	          infowindow.open(map, marker);
	        }
	      })(marker, i));
	    }
    }

    var rangeSlider = document.getElementById('range-slider');
	if(rangeSlider) {
	  noUiSlider.create(rangeSlider, {
	    start: [ 500, 5000 ],
	    connect: true,
	    step: 50,
	    range: {
	      'min': [ 500 ],
	      'max': [ 5000 ]
	    },
	    format: wNumb({
	      decimals: 0,
	      thousand: ' ',
	    })
	  });

	var snapValues = [
	    document.getElementById('range-slider-min'),
	    document.getElementById('range-slider-max')
	  ];
	  var snapInputs = [
	    document.getElementById('range_min'),
	    document.getElementById('range_max')
	];

	rangeSlider.noUiSlider.on('update', function( values, handle ) {

	    snapValues[handle].innerHTML = values[handle];
	    snapInputs[handle].value = values[handle];
	  });
	}

	var galleryTop = new Swiper('.item-slider', {
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.item-slider__thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    $(".to-fav").click(function(event) {
    	$(this).toggleClass('active');
    });

    $('.item-slider .full-link').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });

    $(".tabs-title a").click(function(event) {
    	event.preventDefault();
    	var index = $(this).parents('li').index()
    	$(this).parents('.tabs-title').find('li').removeClass('active');
    	$(this).parents('li').addClass('active');
    	$(".item-tabs__inner .item-tab").removeClass('active');
    	$(".item-tabs__inner .item-tab").eq(index).addClass('active');
    });

     $(".lk__menu a").click(function(event) {
    	event.preventDefault();
    	var index = $(this).parents('li').index();
    	$(this).parents('.lk__menu').find('a').removeClass('active');
    	$(this).addClass('active');
    	$(".lk__content .lk-tab").removeClass('active');
    	$(".lk__content .lk-tab").eq(index).addClass('active');
    });
     $("#show-pass").on('change', function(event) {
     	if($("#show-pass").prop('checked')) {
     		$(".change-pass .pass-inp").prop("type", "text");
     	}else {
     		$(".change-pass .pass-inp").prop("type", "password");
     	}
     });


     //update spinners

     $('.cart-items li').each(function() {
     	var spins = $(this).find('.count-inner');
		for (var i = 0, len = spins.length; i < len; i++) {
		    var spin = spins[i],
		        span = spin.getElementsByTagName("span"),
		        input = spin.getElementsByTagName("input")[0];
		    
		    input.onchange = function() { input.value = +input.value || 1; };
		    span[0].onclick = function() { input.value = Math.max(1, input.value - 1); };
		    span[1].onclick = function() { input.value -= -1; };
		}
     });

     $('.delivery-col label').on('click', function(event) {
     	$('.delivery-col .delivery-txt').removeClass('active');
     	if($(this).hasClass('courier')) {
     		$('.delivery-col .courier-txt').addClass('active');
     	}else {
     		$('.delivery-col .from-mag-txt').addClass('active');
     	}
     });
    

    
});