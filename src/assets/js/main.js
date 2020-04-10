$(document).ready(function () {

    $('#menuActive, .menu-close').click(function () {
        $('body').toggleClass("opened");
    });

    const datas = window.location.search.replace('?', '').split('=');
    const target = datas[1];
    const targetJ = $('#' + target);
    $('.btn-active').not(targetJ).removeClass('btn-active');
    targetJ.addClass('btn-active').trigger("click");
    $(".button-round a").click(function goTop() {
        document.body.scrollTop = 0;
    });

    new WOW({mobile: false}).init();

    $('.staff-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 300,
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

    $('.projectImages').slick({
        slidesToShow: 3,
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
//Slick


//Full Page Slider
$(document).ready(function () {
    const isHomePage = document.getElementById('home-page');
    if (isHomePage) {
        $('#home-page').fullpage({
            autoScrolling: true,
            navigation: true,
            responsiveHeight: 600,
            scrollBar: true,
            touchSensitivity: 10,
        });

        const params = {
            container: document.getElementById('spaceanimation'),
            path: './assets/animations/space.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        };

        const anim = lottie.loadAnimation(params);

    }
});
//

const projectPage = document.getElementById('project-page');

if (projectPage) {
    filterSelection("all");

    function filterSelection(c) {
        let x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c === "all") c = "";
        for (i = 0; i < x.length; i++) {
            removeClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
        }
    }

    function addClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function removeClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }


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
}

setTimeout(() => {
    $(window).resize()
}, 500);

window.onscroll = function () {
    scroll()
};

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});


function scroll() {
    if (window.pageYOffset > 100) {
        $('.button-round').addClass('visible')
    } else {
        $('.button-round').removeClass('visible')

    }

}



