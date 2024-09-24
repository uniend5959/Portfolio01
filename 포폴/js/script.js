$(document).ready(function(){
  $('.envent-top-btn').click(function(){
    $('.event-top').hide();
  })
});

$(window).scroll(function(){
  var height = $(document).scrollTop();
  if(height > 0 ){
    $('.fix-header').addClass('fixedinner');
  }else if(height == 0){
    $('.fix-header').removeClass('fixedinner');
  }
});

$(document).ready(function(){

  $('.nav').click(function(){
    $('.sub').slideToggle("slow");
    $('.overay').slideToggle("slow");
  });

  $('.f-btn').click(function(){
    $('.f-tab-list').toggle('slow');
  });


  var clickup = $('aside');
  clickup.click(function(){
    $('html,body').animate({scrollTop: 0}, 3000);
  });
});


function clickbutton(x){
  x.classList.toggle("change");
}
