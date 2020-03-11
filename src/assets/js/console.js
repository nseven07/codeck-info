console.log("" +
    "════════════════════════ஜ۩۞۩ஜ════════════════════════\n" +
    "_________________Selam Ben Necip Seven_________________\n" +
    "════════════════════════ஜ۩۞۩ஜ════════════════════════");
console.log("" +
    "════════════════════════ஜ۩۞۩ஜ════════════════════════\n" +
    "____________Codeck Yazılım A.Ş de Stajyerim____________\n" +
    "════════════════════════ஜ۩۞۩ஜ════════════════════════");
console.log("" +
    "════════════════════════ஜ۩۞۩ஜ════════════════════════\n" +
    "__________Bizde Stajyerler Bile Böyle İş Yapar_________\n" +
    "════════════════════════ஜ۩۞۩ஜ════════════════════════");


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    document.getElementById("visible").style.overflow = "hidden";

}

function showPage() {

    document.getElementById("loader").style.display = "none";
    document.getElementById("visible").style.overflow = "auto";


}
jQuery(document).ready(function($) {
    $('.staff-md').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});



