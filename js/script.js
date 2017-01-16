$(document).ready(function() {
    preparePage();

    centerPlaceholder();
});


function preparePage() {
    selectActiveMenu();
    callModule.init();
    stickyHeader();

    if( $('.slider').length > 0) {
        mainslider();
    }
}


function mainslider() {
    var owl = $('.slider ul'); 

    owl.owlCarousel({
        singleItem: true,
        pagination: true,
        navigation: false,
        autoPlay: 10000,
        stopOnHover: true,
        transitionStyle : "fade"
    });     

    $('.slider-right').click(function() {
        owl.trigger('owl.next');
    });

     $('.slider-left').click(function() {
        owl.trigger('owl.prev');
    });
}

function stickyHeader() {
    $(window).scroll(function() {
        if( $(this).scrollTop() > 100) {
            $('.content-header').fadeIn().addClass('sticky-header');
        } else {
            $('.content-header').fadeOut().removeClass('sticky-header');
        }
    });

    
}

var callModule = (function() {
    function _show() {
        $('.callback').fadeIn();
    }

    function _hide() {
        $('.callback').fadeOut();
    }    

    function _hideForm() {
        $('.callback-form').fadeOut();

        setTimeout(function() {
            $('.callback-thx').fadeIn();        
        }, 600);
    }

    function _h() {
        $('.header-right .btn').on('click', function(e) {
            e.preventDefault();

            _show();
        });

        $('.callback-inner .icon-close').on('click', function() {
            _hide();
        });

        $('.callback-form-right .input input.btn').on('click', function(e) {
            e.preventDefault();

            _hideForm();
        });
    }

     return {
        init: function() {
            _h();
        }
     };
})();

function selectActiveMenu() {
    var href = location.href/*.substr(87)*/,
        a    = $('.menu ul li a');


    a.each(function() {
      if( href.indexOf( $(this).attr('href') ) != -1 ) {
        /*if( $(this).attr('href') == 'index.html') {
            return;
        }*/

         if(!$(this).parent().hasClass('active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).parent().addClass('active');
         }
      } 
    });    
}



function centerPlaceholder() {
    jQuery(function () {

        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                if (this.originalType) {
                    this.type = this.originalType;
                    delete this.originalType;
                }
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '') {
                if (this.type == 'text') {
                    this.originalType = this.type;
                    this.type = 'text';
                }
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    
    });
}