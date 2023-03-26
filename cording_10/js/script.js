// JavaScript Document

//外部Javaファイル
/*なぜか下の文章がないと適応されない
*/
// eslint-disable-next-line no-console
$(".gnav-btn").click(function () {
    $(this).toggleClass('active');
});
$('.gnav-btn').on('click', function(){
    $('#gnav-content').toggleClass('is-active');
});
/*↓スクロールするとヘッダー画像が縮小される */
$(window).scroll(function() {
  var scroll = $(window).scrollTop();//スクロール値を定義
//header-imgの背景
$('.main-bg').css({
transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
  });
});

$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });