/* 
Copyright 2011 Shothub - All Rights Reserved

This code, and all derivative work, is the exclusive property of Shothub. and may not be used without Shuthub's authorization

Author:Kenny Khek
*/   

$(function() {
  $('.dropdown').hide();
  $('.user').click(function() {
    $(this).addClass('active');
    $('.dropdown').slideDown(100);
    $('html').one('click',function() {
      $('.dropdown').hide();
      $('.user').removeClass('active');
    });
    event.stopPropagation();
  });
});