$(function(){
    $('body').on('click','.goods__attention', function(event) {
        event.preventDefault();
        $(this).parents('.goods__card').find('.goods__popup').toggleClass('goods__popup--active');
    })

    $('.goods__popup-close').on('click', function(e) {
        e.preventDefault();
        $('.goods__popup').removeClass('goods__popup--active');
    })
})