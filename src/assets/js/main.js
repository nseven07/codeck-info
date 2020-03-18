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
    $('.staff-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 300,
        autoplay: true
    });
    $('.mobil-logo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
    })
});
//---------

//Full Page Slider
$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);
});
//---------

window.onscroll = changePos;

function changePos() {
    var navNorm = document.getElementById("nav-norm");
    var navFix = document.getElementById("nav-fix");
    if (window.pageYOffset > 20) {
        navNorm.style.display = "none";
        navFix.style.display = "flex";
    } else {
        navNorm.style.display = "";
        navFix.style.display = "none";
    }
}