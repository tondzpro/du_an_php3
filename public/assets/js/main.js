(function ($) {
 "use strict";

 /*--
    Off Canvas Menu
-----------------------------------*/
/*Variables*/
var $offCanvasNav = $('.offcanvas-menu'),
$offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu, .mega-menu, .menu-item ');

/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();

/*Category Sub Menu Toggle*/
$offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
    var $this = $(this);
    if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length) {
            $this.parent('li').removeClass('active-expand');
            $this.siblings('ul').slideUp();
        } else {
            $this.parent('li').addClass('active-expand');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.closest('li').siblings('li').removeClass('active-expand');
            $this.siblings('ul').slideDown();
        }
    }
});

$( ".sub-menu, .mega-menu, .menu-item" ).parent( "li" ).addClass( "menu-item-has-children" );
 
/*----------------------------
  Header Top JS
------------------------------ */
 	$(".slide-toggle").on('click', function(){
        $(".show-toggle").slideToggle();
		$(".show-toggle-2").css("display","none");
		$(".show-toggle-3").css("display","none");
    });
 	$(".slide-toggle-2").on('click', function(){
        $(".show-toggle-2").slideToggle();
		$(".show-toggle").css("display","none");
		$(".show-toggle-3").css("display","none");
    });
 	$(".slide-toggle-3").on('click', function(){
        $(".show-toggle-3").slideToggle();
		$(".show-toggle").css("display","none");
		$(".show-toggle-2").css("display","none");
    });

/*-------------------------
  showlogin toggle function
--------------------------*/
	 $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
	
/*-------------------------
  showcoupon toggle function
--------------------------*/
	 $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });	
		
/*----------------------------
  hide-show menu
------------------------------ */
 	$(".hide-menu").on('click', function(){
        $(".mainmenu-area-2").fadeToggle(400);
    });



/*----------------------------
  static-product-active
------------------------------ */	
$('.slider-active').owlCarousel({
    loop:true,
    dots: false,
    items:1,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
})	



/*----------------------------
  static-product-active
------------------------------ */	
$('.static-product-active').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        },
        1000:{
            items:1
        }
    }
})	

/*----------------------------
  propular-product-active
------------------------------ */	
$('.propular-product-active').owlCarousel({
    loop:true,
    dots: false,
    nav: true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:2
        }
    }
})
/*----------------------------
  feature-product-active
------------------------------ */	
$('.feature-product-active').owlCarousel({
    loop:true,
    nav:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*----------------------------
  feature-product-active-4
------------------------------ */	
$('.feature-product-active-4').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*----------------------------
  blog-active
------------------------------ */	
$('.blog-active').owlCarousel({
    loop:true,
    nav:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
/*----------------------------
  image-slide-active
------------------------------ */	
$('.image-slide-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        991:{
            items:6
        },
        1200:{
            items:8
        }
    }
})
/*----------------------------
  brand-active
------------------------------ */	
$('.brand-active').owlCarousel({
    loop:true,
	autoplay:true,
	autoplayTimeout:2000,
    nav:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items: 2
        },
        576:{
            items: 3
        },
        768:{
            items: 3
        },
        992:{
            items: 4
        },
        1200:{
            items: 5
        }
    }
})

/*----------------------------
  brand-active
------------------------------ */	
$('.brand-active').owlCarousel({
    loop:true,
	autoplay:true,
	autoplayTimeout:2000,
    nav:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
/*----------------------------
  active-hot-deal-product
------------------------------ */	
$('.active-hot-deal-product').owlCarousel({
    loop:true,
	autoplay:false,
	autoplayTimeout:2000,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*----------------------------
 product-details-active
------------------------------ */	
$('.product-details-active').owlCarousel({
    loop:true,
	autoplay:false,
	autoplayTimeout:2000,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



 /*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	  
  
/*----------------------------
  tooltip-js
------------------------------ */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up "></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   

/*----------------------------
  Sticky Header
------------------------------ */
$(window).on('scroll',function() {    
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
	$("#main_h").removeClass("sticky");
	}else{
	$("#main_h").addClass("sticky");
	}
});


/*----------------------------
 price-slider active
------------------------------ */  
  $( "#slider-range" ).slider({
   range: true,
   min: 40,
   max: 600,
   values: [ 60, 570 ],
   slide: function( event, ui ) {
	$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
   }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
   


	$('.popup-link').magnificPopup({
	  type: 'image',
	  gallery:{
			enabled:true
		}
	});	

/*----------------------------
  MagnificPopup
------------------------------ */

$('.image-link').magnificPopup({
	type: 'image',
	gallery:{
	enabled:true
	}
});



   
})(jQuery);  


 