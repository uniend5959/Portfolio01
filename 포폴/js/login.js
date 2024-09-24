
  $(document).ready(function(){
    var btnSubmit = $('.in');
    var inputError = $('.red');

    btnSubmit.click(function(x){
      x.preventDefault();
      inputError.each(function(){
        var valu = $(this).val();
        if(!valu){
          $(this).addClass('error');
          $(this).parent().find('.validation').show(1000);//앤좀길어
          //$('.validation').show(); //각각적용이 안된다.
        }else {
          $(this).removeClass('error');
          $(this).parent().find('.validation').hide(1000);
        } // 여기다 적지 않는이유 :  누르면 입력하는거니깐 사라져야함

      });// each end
      //통합심사 시작
      //prop 요소의 기능을 끄는 메소드
      //attr 과 prop 의 비교
      // a태그를 에시 ) 콘솔로 확인 시  atttr 은 #xx 속성의 값만 가져옴(html 값을 )  prop은 링크 주소를 가져옴 (기능을 )
      var errornum = $('.error').length;
      console.log(errornum);
      if( errornum > 0){
        btnSubmit.prop('disabled', true).text('폼을 완성해주세요');
      }
    }); // 버튼이 눌렀을때 : 보더 빨강색/ 필수사항 안내  폼을 완성해달라 노출


    inputError.click(function(){
      $(this).removeClass('error');
      $(this).parent().find('.validation').hide(1000);
      btnSubmit.prop('disabled', false).text('로그인');
    }); // 인풋을 눌렀을때 빨강색 삭제 필수문구 삭제 로그인 으로 명칭 변경
  });
