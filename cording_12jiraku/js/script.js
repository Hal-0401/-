// JavaScript Document

//外部Javaファイル
/*なぜか下の文章がないと適応されない
*/
jQuery(function ($) {
  $('.header-button').on('click', function() {
    $('body').toggleClass('open');
  });
});