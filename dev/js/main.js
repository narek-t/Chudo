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
    
});