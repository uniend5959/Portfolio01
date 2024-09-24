$(function(){

  $('.mbtn').click(function(){
    $('.mbtn').toggleClass('change');
    $(".m-menu").slideToggle('slow');
  });

  $('.navi-parent ul li').mouseover(function(){
      $('.navi-child').stop().slideToggle('slow');
  })

    $('.nt_cot ul li').click(function(){
      var tabt = $(this).attr('data-tab');

      $('.nt_cot ul li').removeClass('current');
      $('.tab_cot').removeClass('current');

      $(this).addClass('current');
      $("#"+ tabt).addClass('current')
    });

    $('.up').click(function(){
      $('html,body').stop().animate({scrollTop: 0}, 500);
     });

});
