$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
// 바인드 스크롤 이벤트 애니메이션 주면서 이동




var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ), // 메뉴바 상단 고정
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener( 'scroll', function( event ) { // 이벤트 등록 . 스크롤 이벤트 대상에 복수의 동일 이벤트 타입 리스너를 등록
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() { // 스크롤 페이지
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})(); //https://gist.github.com/josh-jacobsen/a1bb0594e6c79f86e962ea94a03d1825 참고함



$('body').scrollspy({
    target: '.navbar',
    offset: 65
}) // 스크롤파이 = 스크롤이 긴 페이지에서 무엇을 보는지 알게해줌 ->네비게이션 기능



//페이지가 로딩되는 동안 이미지 표시
// 윈도우 로드를 기다림
$(window).load(function() {
    // 화면에 애니메이션 로드
    $(".page-loader").fadeOut("slow");
});




// Intro carousel
$("#owl-intro-text").owlCarousel({ // 슬라이더, 갤러리 이미지 원하는 위치로
    singleItem : true, // 하나씩 보여줌
    autoPlay : 6000, 
    stopOnHover : true,
    navigation : false,
    navigationText : false,
    pagination : true
})


// Partner carousel
$("#owl-partners").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 5000,
    stopOnHover : true,
    pagination : false
})

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true
})
//http://owlgraphic.com/owlcarousel/#how-to 참고


$.stellar({
    // 스크롤을 한 방향 또는 양 방향으로 설정
    horizontalScrolling: false,
    verticalScrolling: true,
});
//https://github.com/markdalgleish/stellar.js



new WOW().init();  // wow.js 스크롤 


$('.counter').counterUp({ // 지정된 숫자까지 숫자 증가
    delay: 10,
    time: 2000
}); // https://moon1z10.github.io/development/javascript-Counter-Up/ 참고


$(window).load(function() { // 이미지 로드 포트폴리오 text
$('.portfolio_menu ul li').click(function(){
	$('.portfolio_menu ul li').removeClass('active_prot_menu');
	$(this).addClass('active_prot_menu');
});

var $container = $('#portfolio');
$container.isotope({
  itemSelector: '.col-sm-4',
  layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  return false;
});
});




// 창이 상단에 있는지 확인하고 아닐경우 버튼을 표시
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// 이벤트를 클릭하여 맨 위로 스크롤
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});

// 메뉴바 클릭시 숨기기
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
