const CODECK = {
    goTop: function () {
        document.body.scrollTop = 0;
    }
};

CODECK.addClass = function (element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
};


CODECK.removeClass = function (element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};

CODECK.filterSelection = function (c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
        CODECK.removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) CODECK.addClass(x[i], "show");
    }
};

$(document).ready(function () {

    $('#menuActive, .menu-close').click(function () {
        $('body').toggleClass("opened");
    });

    const datas = window.location.search.replace('?', '').split('=');
    const target = datas[1];
    const targetJ = $('#' + target);
    $('.btn-active').not(targetJ).removeClass('btn-active');
    targetJ.addClass('btn-active').trigger("click");
    $(".button-round a").click(CODECK.goTop);

    new WOW({mobile: false}).init();

    $('.mobil-logo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


//Full Page Slider
$(document).ready(function () {
    const isHomePage = document.getElementById('home-page');
    if (isHomePage) {


        const params = {
            container: document.getElementById('spaceanimation'),
            path: './assets/animations/space.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        };

        const anim = lottie.loadAnimation(params);

    }


    const projectPage = document.getElementById('project-page');

    if (projectPage) {

        CODECK.filterSelection("all");

        const btnContainer = document.getElementById("buttons");
        const btns = btnContainer.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                const current = document.getElementsByClassName("btn-active");
                if (current.length) {
                    current[0].className = current[0].className.replace(" btn-active", "");
                }
                this.className += " btn-active";
            });
        }

        $('.projectImages').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            speed: 300,
            scrollingSpeed: 1000,
            dragAndMove: true,
            touchSensitivity: 10,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
});

setTimeout(() => {
    $(window).resize()
}, 500);


$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

function scroll() {
    const target = $('.button-round, .button-github');
    window.pageYOffset > 100 ? target.addClass('visible') : target.removeClass('visible')
}

window.onscroll = scroll;


