//swiper
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,

  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  //navigation bar effect on scroll

  window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  //Responsive navigation menu toggle
   const menuBtn = document.getElementById("menu-res");
  const closeBtn = document.getElementById("menu-res-clo");
  const navigation = document.getElementById("nav-res");

  menuBtn.addEventListener("click", () => 
  {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => 
  {
    navigation.classList.remove("active");
  });


  ////////////////////////////////////////////////////////////
  const responsive= {
    0:
    {
        items:1
    },
    
    320 : {
        items:1
    },
    560:
    {
        items:2
    },
    960:
    {
        items:3
    },
}


$(document).ready(function(){

    $nav=$('.nav')
    $togglecollapse=$('.toggle-collapse');
    
    $togglecollapse.click(function(){
    $nav.toggleClass('collapse');
    })
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
   responsive: responsive
    });
   
    // click to scrool top
    $('.move-up span').click(function(){
$('html,body').animate({
scrollTop:0
    },1000);
    })
    
});
////////////////////////////////////contact page///////////////////////////////////

