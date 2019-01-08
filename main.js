var btn = document.getElementById("btn");
var menu = document.getElementById("menu");

btn.addEventListener("click", function () {
   btn.classList.toggle("active");
   menu.classList.toggle("activeMenu");
});


$('.owl-carousel-one').owlCarousel({
   loop:true,
   margin:10,
   items: 1 

})

$('.carousel-three').owlCarousel({
   loop: true,
   items: 3,
   margin: 25,
   nav: false,
   dots: true,
   slideBy: 3,
   autoplay: false,
   autoplayTimeout: 5000,
   responsive: {
      0: {
         items: 1
      },
      550: {
         items: 2
      },
      768: {
         items: 3
      },
   }
});
