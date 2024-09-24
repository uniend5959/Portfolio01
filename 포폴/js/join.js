$(function(){

  var btnSubmit = $('.btn');
  var inputError = $('.info');

  btnSubmit.click(function(x){
    x.preventDefault();
    inputError.each(function(){
      var valu = $(this).val();
        if(!valu){
          $(this).addClass('error');
          $(this).parent().find('.need').show(700);
          $(this).parent().find('.need2').show(700);
        };
    });

    var errornum = $('.error').length;
    console.log(errornum);
    if(errornum > 0 ){
      btnSubmit.prop('disabled', true).text('폼을 입력해주세요');
    }
  });

  inputError.click(function(){
        $(this).removeClass('error');
        $(this).parent().find('.need').hide(700);
        $(this).parent().find('.need2').hide(700);
        btnSubmit.prop('disabled', false).text('SIGN UP');
  });
});
