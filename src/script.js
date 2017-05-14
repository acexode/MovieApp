$(function() {
    console.log($('.img').length)
    $('.next').click(() => {
        $current = $('.active')
        $next = $current.next();
        if ($next.length) {
            $current.removeClass('active', 500)
            $next.addClass('active', 500)
        }
        if (!$next.length) {
            $current.removeClass('active', 500)
            $('.slider-inner img:first-child').addClass('active', 500)
        }

    })
    $('.prev').click(() => {
        $current = $('.active')
        $prev = $current.prev();
        if ($prev.length) {
            $current.removeClass('active', 500)
            $prev.addClass('active', 500)
        }
        if (!$prev.length) {
            $current.removeClass('active', 500)
            $('.slider-inner img:last-child').addClass('active', 500)
        }

    })
})