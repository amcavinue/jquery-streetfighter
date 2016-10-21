$(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-reset').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-reset').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
          $('.ryu-reset').hide();
          $('.ryu-throwing').show();
          $('.hadouken').finish().show().animate(
              {'left': '1020px'},
              500,
              function() {
                  $('.hadouken').hide();
                  $('.hadouken').css('left', '520px');
              }
        );
    })
    .mouseup(function() {
        $('.ryu-reset').hide();
          $('.ryu-ready').show();
    });

    $(document).keydown(function(e) {
        if (e.which === 88) {
            $('.ryu-reset').hide();
            $('.ryu-cool').show();
        }
    }).keyup(function() {
        $('.ryu-reset').hide();
        $('.ryu-ready').show();
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
      $('#hadouken-sound')[0].load();
      $('#hadouken-sound')[0].play();
}
