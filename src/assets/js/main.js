function myFunction() {
    // const myVar = setTimeout(showPage, 3000);
    // document.getElementById("visible").style.overflow = "hidden";
}

function showPage() {
    // document.getElementById("loader").style.display = "none";
    // document.getElementById("visible").style.overflow = "auto";
}

$('#menuActive').click(function () {
    $('.fullMenu').toggleClass('menu-active')
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
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);
});
//---------

window.onscroll = changePos;


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
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
