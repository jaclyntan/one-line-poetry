$(document).ready(function () {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(hueStepMin, lightness, saturation) {
        var
            // stepMin = rand(1,360),
            // stepMax = stepMin+30,
						h = rand(hueStepMin, hueStepMin + 70),
						s = saturation,
            l = rand(lightness, lightness + 5);
            
        return "hsl(" + h + "," + s + "%," + l + "%)";
    }

    function cycle() {
        var hue = rand(1, 360),
            comp = hue + 90;
        $(".shape").each(function () {
            $(this).css({
                'fill': randomColor(hue, 60, 80)
            });
        });
        $("#poetry-matter").css({
            'backgroundColor': randomColor(comp, 5, 5)
        });
        $(".line").css({
            'fill': randomColor(comp, 10, 10)
        });
    }
    cycle();

    $('.matter').on("mouseenter mouseleave", cycle);

    $(".shape").each(function () {
        var $el = $(this);
        $el.css('fill', randomColor(30, 60));
        setTimeout(function () {
            $el.addClass('bob');
        }, rand(1, 100));
    });

    var morphing = anime({
        targets: '.line',
        d: [{
                value: 'M 161,54.69 C 230.4,4.986 303.7,8.661 414.4,92.19 465.7,130.9 432.3,211.4 460,279.5 481,331.2 449.7,430.4 381.1,427 287.1,422.3 172.4,503.8 99.27,444.6 21.03,381.1 10.32,258.3 55.25,145.6 73.73,99.3 129.3,77.36 161,54.69 Z'
            },
            {
                value: 'M 119.8,69.41 C 213.5,18.01 367.2,-1.306 440.4,76.58 482.9,121.9 435.3,200.8 432.9,262.9 431.1,310.6 461.3,372.1 427.7,406 342.4,492 158.3,499.3 64.62,422.5 10.09,377.8 18.76,282.6 32.51,213.5 43.46,158.4 70.61,96.36 119.8,69.41 Z'
            },
            {
                value: 'M 49.94,386.5 C 9.795,286.4 7.674,129.7 94.72,65.99 188.4,-2.586 371.8,28.99 438.1,124.3 486.9,194.5 503.7,389.2 390.4,376.4 277.1,363.5 238.6,482 155.1,469.7 110.9,463.2 66.57,428 49.94,386.5 Z'
            },
            {
                value: 'M 38.35,160.1 C 74.92,86.34 178.1,44.04 260.1,51.51 348.2,59.54 441.6,126.9 473.5,209.4 499.3,276 485,371.9 431.9,419.6 348.2,494.9 185.6,517.4 95.49,449.9 16.71,390.8 -5.393,248.3 38.35,160.1 Z'
            },

        ],
        easing: 'easeOutQuad',
        duration: 5000,
        // direction: 'alternate',
        loop: true
    });
});