// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Play";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 

// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Play";
//   }
// })

$(document).ready(function(){
    
    jQuery(window).scroll(function(){
      var windowScrollPosTop = jQuery(window).scrollTop();
      
      if((windowScrollPosTop*(100 / document.documentElement.clientWidth))>100 ){
       
          $('.title_language').addClass('is-visible');
        
        $('.language').each(function(i){
          setTimeout(function(){
              $('.language').eq(i).addClass('is-visible');
          }, 200*i);  
        });
      }
    });  
    
    
    $(".author_desc").addClass("tada");
    $(".author_desc").addClass("animated");
    $(".card").addClass("fadeInDown");
    $(".card").addClass("animated");
    setTimeout(function() {
  // Code a executer
   $(".card").removeClass("fadeInDown");
    $(".card").removeClass("animated");
  }, 2000);
    
    
     $(".toggle-menu").click(function(){
       $(".sidebar_menu").toggleClass("open");
       $(".wrapper").addClass("right");
       $(".wrapper").removeClass("left");
       $(".toggle-menu").fadeOut(200);
    });
    
    $(".x-button").click(function(){
      $(".sidebar_menu").toggleClass("open");
      $(".wrapper").addClass("left");
      $(".wrapper").removeClass("right");
      $(".toggle-menu").fadeIn(1000);
    });
    
   // Get the modal
  var modal = document.getElementById('more_modal');
  
  // Get the button that opens the modal
  var btn = document.getElementById("see_more");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
    $(".see_more").click(function() {
      $(".more_modal").addClass("reveal_more");
      $(".see_more").hide();
      $(".pulsed").hide();
      $(".toggle-menu").hide();
  });
  
  // When the user clicks on <span> (x), close the modal
  $(".x-button").click(function() {
      $(".more_modal").removeClass("reveal_more");
      $(".see_more").show();
      $(".pulsed").show();
      $(".toggle-menu").show();
  });
  
  // When the user clicks anywhere outside of the modal, close it
//   window.click = function(event) {
//       if (event.target == modal) {
//           $(".more_modal").removeClass("reveal_more");
//           $(".see_more").show();
//           $(".pulsed").show();
//           $(".toggle-menu").show();
//       }
//   }
  });