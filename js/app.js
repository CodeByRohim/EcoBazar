// position fixed

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop(); 

  if (scrollTop >= 100) {
    $('nav').addClass('fixed').removeClass('fixed2');
  } else {
    $('nav').removeClass('fixed').addClass('fixed2');
  }
});
// SM CLOSE BUTTON AND SEARCH BUTTON
/*
$(document).ready(function () {
  $('.smSearchBtn .searchIcon').click(function () {
      
      $(this).hide();
      $('.smSearchBtn .closeIcon').show();// Hide the search icon and show the close icon
      
      $('.smSearchBtn').addClass('searchSm2');// Add the searchSm2 class to the parent or target element
  });

  $('.smSearchBtn .closeIcon').click(function () {
      // Hide the close icon and show the search icon
      $(this).hide();
      $('.smSearchBtn .searchIcon').show();
      
      // Remove the searchSm2 class from the parent or target element
      $('.smSearchBtn').removeClass('searchSm2');
  });
});
*/



$(document).ready(function () {
  $('.smSearchBtn .searchIcon').click(function () {
      // Toggle icons and add class
      $(this).hide(); // Hide search icon
      $('.smSearchBtn .closeIcon').show(); // Show close icon
      $('.smMsearch').addClass('searchSm2'); // Add the custom class
      
  });

  $('.smSearchBtn .closeIcon').click(function () {
      // Toggle icons and remove class
      $(this).hide(); // Hide close icon
      $('.smSearchBtn .searchIcon').show(); // Show search icon
      $('.smMsearch').removeClass('searchSm2'); // Remove the custom class
  });


  // SLIDER
 
    $('.slider').slick({
      autoplay: true,
  autoplaySpeed: 3000,
  dots:true,
  prevArrow:'#bannerLeftArrow',
  nextArrow: '#bannerRightArrow',
  dotsClass:'banner-dots',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          
          dots: false
        }
      },
      
    ]
  });
 
});

// COUNTDOWN TIME
// Set the target date
const targetDate = new Date("2024-12-18T23:59:59").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is finished
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").textContent = "Countdown Over!";
  }
}, 1000);






// darkmode on/off
$('.darkModeBtn').click(function () {
  $('body').toggleClass('darkMode');
});


//  preloader remove
$(window).on('load', function(){
  $('#preloader').fadeOut(1500);
});
// BACK TO TOP BUTTON

$("#backToTop").click(function(){
  $("html,body").animate({scrollTop: 0}, 500);
})

//  back to top button show/hide
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 0) {
    $('#backToTop').addClass('backToTop');
  } else {
    $('#backToTop').removeClass('backToTop');
  }
});


