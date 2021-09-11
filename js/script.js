$(document).ready(function(){
    $("#owl1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true
    });
  });

  $(document).ready(function(){
    $("#owl2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1400,
        autoplayHoverPause: true
    });
  });
const links = document.querySelectorAll('.li');

  $('.burger_menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger_menu-btn_active');
    $('.burger_menu-list').toggleClass('burger_menu-list_active');
    links.forEach((link, index) =>{
      if (link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = `navLinksFade .5s ease forwards ${index/7 + 0.3}s`
      }
  })
  });
  $('.section_burger_btn').on('click', function(e) {
    e.preventDefault;
    $('.section_burger_menu').toggleClass('section_burger_menu_active');
  });
  $('.news_burger_btn').on('click', function(e) {
    e.preventDefault;
    $('.news_burger_menu').toggleClass('news_burger_menu_active');
  });
  
let fixedButton = document.getElementById('fixed-button');
window.onscroll = function ScrollToTop(){
  fixedButton.style.display = (window.pageYOffset > '300' ? 'block' : 'none');
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

const lengthBlock = document.getElementsByClassName("more_new_item").length
const heightBlock = document.getElementsByClassName("more_new_item")[0].clientHeight
const countBlock = lengthBlock * heightBlock + lengthBlock

document.getElementById("testjs").style.height = `${countBlock}px`

