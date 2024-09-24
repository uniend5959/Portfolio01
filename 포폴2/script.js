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
