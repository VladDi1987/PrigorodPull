import $ from 'jquery';

const pollButton = (function () {
    'use strict';

    let pollButton  = $('.btn__inner');

    function buttonAnimation() {
        pollButton.on('click', function(e) {
            let $rippleElement = $('<span class="ripple-effect" />'),
              $buttonElement = $(this),
              btnOffset = $buttonElement.offset(),
              xPos = e.pageX - btnOffset.left,
              yPos = e.pageY - btnOffset.top,
              size = parseInt(Math.min($buttonElement.height(), $buttonElement.width()) * 0.5),
              animateSize = parseInt(Math.max($buttonElement.width(), $buttonElement.height()) * Math.PI);

            $rippleElement
              .css({
                  top: yPos,
                  left: xPos,
                  width: size,
                  height: size,
                  backgroundColor: $buttonElement.data("ripple-color")
              })
              .appendTo($buttonElement)
              .animate({
                  width: animateSize,
                  height: animateSize,
                  opacity: 0
              }, 700, function() {
                  $(this).remove();
              });
        });
    }


    function initButtonAnimation() {
        buttonAnimation();
    }

    return {
        initButtonAnimation: initButtonAnimation
    }


})();

export default pollButton;