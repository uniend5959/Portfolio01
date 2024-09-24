function hbtn(x){
  x.classList.toggle("change");
  $('body').toggleClass("change");
};


$(document).ready(function(){
  var scrollTop = $('.ancur-top');

  $(window).scroll(function(){
    var height = $(document).scrollTop();

    if(height > 100 ){
      $(scrollTop).css('opacity', "1");
    }else {
      $(scrollTop).css("opacity", "0");
    }
  });


  $(scrollTop).click(function(){
    $('html, body').animate({scrollTop: 0}, 100);
    return false;
  });


});


$(window).scroll(function(){
  var height2 = $(document).scrollTop();

  if(height2 > 0){
    $('.header').addClass('headchange');
  }else if(height2 == 0){
      $('.header').removeClass('headchange');
  };
});


document.getElementById("defaultOpen").click();
function openTab(tabName, elmnt){
  var i, tobcont, tablinks;
  tobcont = document.getElementsByClassName("tob-cont");
  for (i = 0; i < tobcont.length; i++) {
    tobcont[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
};
