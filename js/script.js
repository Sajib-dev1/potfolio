$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "freelancer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});


	$(document).ready(function (){
		  $(".progress-bar").ProgressBar();
		});
	// ===================slider=============
	// ============faq quation===================
	$('.faq-quation').click (function (){
		$('.toggle') .toggle ()
	});
	$('.faq-quation').click (function (){
		$('.border-faq') .toggle ()
	});
	// ============faq quation===================

	// ============faq quation2===================
	$('.faq-quation2').click (function (){
		$('.toggle2') .toggle ()
	});
	$('.faq-quation2').click (function (){
		$('.border-faq2') .toggle ()
	});
	// ============faq quation2===================

	// ============faq quation3===================
	$('.faq-quation3').click (function (){
		$('.toggle3') .toggle ()
	});
	$('.faq-quation3').click (function (){
		$('.border-faq3') .toggle ()
	});
	// ============faq quation3===================

	// ============faq quation4===================
	$('.faq-quation4').click (function (){
		$('.toggle4') .toggle ()
	});
	$('.faq-quation4').click (function (){
		$('.border-faq4') .toggle ()
	});
	// ============faq quation4===================

	// ============faq quation5===================
	$('.faq-quation5').click (function (){
		$('.toggle5') .toggle ()
	});
	$('.faq-quation5').click (function (){
		$('.border-faq5') .toggle ()
	});
	// ============faq quation5===================

	// ============faq quation6===================
	$('.faq-quation6').click (function (){
		$('.toggle6') .toggle ()
	});
	$('.faq-quation6').click (function (){
		$('.border-faq6') .toggle ()
	});
	// ============faq quation===================

	// ============faq quation7===================
	$('.faq-quation7').click (function (){
		$('.toggle7') .toggle ()
	});
	$('.faq-quation7').click (function (){
		$('.border-faq7') .toggle ()
	});
	// ============faq quation===================

	// ============faq quation8===================
	$('.faq-quation8').click (function (){
		$('.toggle8') .toggle ()
	});
	$('.faq-quation8').click (function (){
		$('.border-faq8') .toggle ()
	});
	// ============faq quation===================
	// ===========back to top==========
	$(".back-to-top") .on("click",function (){
	  $("html,boddy") .animate({scrollTop:0},1000)
	});

	$(window).on ('scroll',function (){
        var scroll=$(this).scrollTop()
        if(scroll > 50) {
          $(".back-to-top") .fadeIn(500)
        }
        else{
          $('.back-to-top') .fadeOut(500)
        }
        if(scroll>50){
          $('.navbar').addClass('sticke-menu')
      }
        else{
          $('.navbar').removeClass('sticke-menu')
        }
      })

	// ============side bar part============
	$('.show').on('click',function (){
		$('.slide-bar').css('left','0px')
		   });
		$('.close').on('click',function (){
		   $('.slide-bar').css('left','-100%')
			  });
		$('.nav-link').on('click',function (){
			$('.slide-bar').css({left:'-100%'});
	});
	// ============side bar part============
	// ============side bar start============
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	  });
	// ============side bar part============

});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	  },
	breakpoints: {
		0: {
		  slidesPerView: 1,
		},
		576: {
		  slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		992: {
		  slidesPerView: 2,
		},
		1200: {
		  slidesPerView: 3,
		},
	}
  });