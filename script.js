$(document).ready(function(){
    $('.catalog').click(function(event){
        $('.menu_block').toggleClass('active')
        $('body').toggleClass('lock')

    }); 

    $('.im1').hover(
        function() {
            $('.right_menu').removeClass('active');
            $('.m1').toggleClass('active')
        }
      );
      $('.im2').hover(
        function() {
            $('.right_menu').removeClass('act');
            $('.right_menu').removeClass('active');
            $('.m2').toggleClass('active')
        }
      );
      $('.im3').hover(
        function() {
         
            $('.right_menu').removeClass('active');
            $('.m3').toggleClass('active')
        }
      );
});

