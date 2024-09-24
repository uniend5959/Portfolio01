$(function(){

  var mmenu = $('.main-cont '),
      contents = $('.content section'),
      navi = $('#nav ul li a');
  var aside = $('.topup');

      mmenu.click(function(x){
        x.preventDefault();
        var idx = mmenu.index(this);
        var section = contents.eq(idx);
        var scollDistance = section.offset().top;
        console.log(scollDistance);
        $('html,body').stop().animate({scrollTop :scollDistance }, 700);
      });


      $(window).scroll(function(){
          contents.each(function(){
              if($(this).offset().top <= $(window).scrollTop() + 200 ){
                var idx = $(this).index();
                navi.removeClass('on');
                navi.eq(idx).addClass('on');
              }
          })
      });

      aside.click(function(){
        $('html,body').animate({scrollTop: 0}, 1000);

      });

      var popup = $('.d-container ul li');
      var pop = $('.pup-img img');
      popup.click(function(x){
        x.preventDefault();
        var idx3 = popup.index(this);
        var popsection = pop.eq(idx3);
        $('pop').show(popsection);
      });


      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        disableScrolling: true,
        fitImagesInViewport:false
      });


});

function clickmbtn(x){
  x.classList.toggle("change");
  $('body').toggleClass("change");
};
