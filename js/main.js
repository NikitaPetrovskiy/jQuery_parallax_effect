$(document).ready(function () {
    $(window).scroll(function () {
        let $leftMountain = $('.left-mountain');
        let $rightMountain = $('.right-mountain');
        let $jqLogo = $('.jqLogo');
        let $scroll = $(window).scrollTop();
        //console.log(scroll);

        //перемещение левой картинки при скроле
        $leftMountain.css({
            left: - $scroll/10 + '%', // значение скрола делим на 15 и получаем значение, на которое двигаем картинку влево
            bottom: - $scroll/10 + '%', //так же и вниз
            width: 100 + $scroll/20 + '%', // увеличиваем
            height: 60 + $scroll/20 + '%' // приблежаем
        })
        $rightMountain.css({
            right: - $scroll/10 + '%',
            bottom: - $scroll/10 + '%',
            width: 100 + $scroll/20 + '%',
            height: 70 + $scroll/20 + '%'
        })
        $jqLogo.css({
            top: - $scroll/4 + '%',
            width: 40 + $scroll/25 + '%',
            height: 20 + $scroll/25 + '%'
        })
    });
});
