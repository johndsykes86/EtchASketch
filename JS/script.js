$(document).ready (function(){




  function grid(){
    var square = prompt("Please enter the amount of squares per row that you want");
    var height = parseInt($('.container').css("height"));
    var value = height / square;


    for (i=0; i<Math.pow(square, 2); i++){
      $('.container').append('<div class=square></div>');
    }

    $('.square').css({'width': value, 'height': value});


  }

  grid();

  $('.square').on('mouseenter', function(){
    $(this).addClass('color');
  })

  $('button').on('click', function(){
    $('.container').empty();
    grid();
  })

});
