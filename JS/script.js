$(document).ready (function(){

  var square = prompt("Please enter the amount of squares per row that you want");



  function grid(){
    for (i=0; i<square * square; i++){
      $('.container').append('<div class=square></div>');
    }
  }

  grid();

  alert($('.square').length);


  $('.square').on('mouseenter', function(){
    $(this).addClass('color');
  })

  $('button').on('click', function(){
    $('.square').removeClass('color');
  })

});
