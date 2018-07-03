$(document).ready(function () {

    //Sticky Header
    $(window).on('scroll', function () {
        var Y = $(this).scrollTop();
        $('.main-content__inner > section').each(function () {
            var $this = $(this),
                posY = $this.offset().top,
                posX = $this.offset().left,
                width = $this.width(),
                height = $this.height(),
                headerHeight = $this.find('.section-title').height(),
                stop = (posY + height) - headerHeight;
            // Fixed on position top / or else
            if (Y > posY) {
                $this.find('.section-title').css({
                    position: 'fixed',
                    top: 0, left: posX,
                    width: width
                });
            } else {
                $this.find('.section-title').css({
                    position: 'absolute',
                    top: 0, left: 0,
                    width: width
                });
            }
            // Absolute to bottom of post
            if (Y >= stop) {
                $this.find('.section-title').css({
                    position: 'absolute',
                    top: 'auto', left: 0, bottom: 0,
                    width: width
                });
            }
        });
    });

    //Accordion
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }
    var accordion = new Accordion($('#accordion'), false);

    //Plain-Dropdown
    $('.dropdown .button').click(function (e) {
        e.stopPropagation();
        $('#dropdown-menu').toggleClass('open');
        return $('#dropdown-menu li a').removeClass();
    });
    $('#dropdown-menu li a').click(function (e) {
        $(this).addClass("flash");
        return $('#dropdown-menu').removeClass('open');
    });
    $('html').click(function () {
        return $('#dropdown-menu').removeClass('open');
    });


    //Select-Dropdown
    var $html = $('html');
    $html.on('click.ui.select-dropdown', '.js-select-dropdown', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-open');
    });
    $html.on('click.ui.select-dropdown', '.js-select-dropdown [data-select-dropdown-value]', function (e) {
        e.preventDefault();
        var $item = $(this);
        var $dropdown = $item.parents('.js-select-dropdown');
        $dropdown.find('.js-select-dropdown__input').val($item.data('select-dropdown-value'));
        $dropdown.find('.js-select-dropdown__current').text($item.text());
    });
    $html.on('click.ui.select-dropdown', function (e) {
        var $target = $(e.target);
        if (!$target.parents().hasClass('js-select-dropdown')) {
            $('.js-select-dropdown').removeClass('is-open');
        }
    });

    //Modaal Initilization
    $(".inline").modaal();
    $('.fullscreen').modaal({
        fullscreen: true
    });
    $('.modaal-ajax').modaal({
        type: 'ajax'
    });
    $('.modaal-image').modaal({
        type: 'image'
    });
    $('.modaal-video').modaal({
        type: 'video'
    });
    $('.modaal-iframe').modaal({
        type: 'iframe',
        width: 700,
        height: 500
    });
    $('.modaal-confirm').modaal({
        type: 'confirm',
        confirm_button_text: 'Confirm',
        confirm_cancel_button_text: 'Cancel',
        confirm_title: 'Confirm Action',
        confirm_content: '<p>This is just a dummy confirmation description.</p>',
        confirm_callback: function() {
            alert('you have confirmed this action');
        },
        confirm_cancel_callback: function() {
            alert('you have cancelled this action');
        }
    });

    //Accordion Initialization
    $('#only-one [data-accordion]').accordion();
    $('#multiple [data-accordion]').accordion({
        singleOpen: false
    });
    $('#single[data-accordion]').accordion({
        transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
        transitionSpeed: 200
    });

    $('.default-demo').modaly({closeButton: false}).on('click',function () {
        $('body').addClass('overflow-hidden');
    });

    $('#modaly-overlay').on('click',function () {
        $('body').removeClass('overflow-hidden');
    });
});




//# sourceMappingURL=app.js.map
