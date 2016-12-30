$(document).ready (function(){







  function grid(){

    function randomcolor(){
      function random(){
        return Math.floor(Math.random()*(255-0+1))+0;
      }

      r = random();
      g = random();
      b = random();
      var value = "rgb("+r+","+g+","+b+")";
      return value

    }

    function square(){
      value = prompt("Please enter the amount of squares per row that you want. \rMin value: 1 \rMax value: 100");
      return value;
    }
    square = square();



    if (square < 1 || square > 100){
      alert("This is an invalid entry, please enter a number between 1 or 100.");
      // You need to figure out how to get this to loop again if you end up with another <0 or >100 entry.
    } else {
      for (i=0; i<Math.pow(square, 2); i++){
        $('.container').append('<div class=square></div>');
      }
      var height = parseInt($('.container').css("height"));
      var value = height / square;
      $('.square').css({'width': value, 'height': value});

      $('.square').on('mouseenter', function(){
        $(this).addClass('color');
        rgb = randomcolor();
        $(this).css('background-color', rgb)
      })

    }

  }




  $('.reset').on('click', function(){
    $('.container').empty();
    grid();
  })

  $('.create').on('click', function(){
    grid();
  })


});
