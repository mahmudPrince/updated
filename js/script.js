//owl carousel start
$(document).ready(function () {
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
     $('.navbar').removeClass("sticky");  
    }
    if(this.scrollY > 500){
     $('.scroll-up-btn').addClass("show"); 
    }else{
     $('.scroll-up-btn').removeClass("show");
    }
});
//slider up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});
 //toggle menu
 $('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
//carousel
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}