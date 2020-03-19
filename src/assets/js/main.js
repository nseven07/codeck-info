$('#menuActive').click(function () {
    $('.fullMenu, .menuItems').toggleClass("menu-aktif");
    $('.fullMenu').toggleClass('hidden');
    $('#hamburgerMenu').toggleClass("aktif");
    $('#menuActive').addClass('kapat')

});
//Slick
$(document).ready(function () {
    $('.staff-slider, .projectImages').slick({
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
    $('.mobil-logo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
    })
});
//---------

//Full Page Slider
$(document).ready(function () {
    const isHomePage = document.getElementById('home-page')
    if (isHomePage) {
        $('#home-page').fullpage({
            //options here
            autoScrolling: true,
            navigation: true,
            responsiveHeight: 600,
            scrollHorizontally: true,
            scrollBar: true,
            dragAndMove: true,
            touchSensitivity: 10,
        });
    }
});
//---------

const projectPage = document.getElementById('project-page')

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
            const current = document.getElementsByClassName("aktif");
            current[0].className = current[0].className.replace(" aktif", "");
            this.className += " aktif";
        });
    }
}

