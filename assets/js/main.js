jQuery(function ($) {

  $('.tabCarusel').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 15,
    nav: true,
    rtl:true,
    dots:false,
    navText : ["<i class='lni lni-arrow-left'></i>","<i class='lni lni-arrow-right'></i>"],

    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,

      }
      

    }
  });
 
  function onScroll(event){
			
		var scrollPosition = $(document).scrollTop();
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		//   console.log($(this).attr("href")); //log
		  if (refElement.length&&refElement.position().top <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);

    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top  - 5 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      return false;
    });
    
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('header').height()) {
      $("#counter").css("padding-top", "150px");
      $('header').addClass('scrollNav');


    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  })
      
});

