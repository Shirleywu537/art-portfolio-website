const SLIDES = $("#carousel-school figure");
const DOTS = $("#dot-collection button span");

function nextSlide() {
    let nextNum = SLIDES.index($('#carousel-school figure:not(.hidden)')) + 1 + 1;
    if (nextNum > SLIDES.length) {
        nextNum = 1;
    }
    showSlide(nextNum);
}


function prevSlide() {
    let prevNum = SLIDES.index($('#carousel-school figure:not(.hidden)')) - 1 + 1;
    if (prevNum <= 0) {
    prevNum = SLIDES.length;
}
showSlide(prevNum);
}


function showSlide(num) {
    let index = num - 1;
    let currentSlide = SLIDES.eq(index);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
    let currentDot = DOTS.eq(index);
    DOTS.removeClass("clicked");
    currentDot.addClass("clicked");
}

$("#next-button").on('click', function() {
    nextSlide();
});

$("#prev-button").on('click', function() {
    prevSlide();
});

$("#dot1").on('click', function() {
    showSlide(1);
    $("#dot1").addClass("clicked");
    $("#dot2").removeClass("clicked");
    $("#dot3").removeClass("clicked");
    $("#dot4").removeClass("clicked");
    $("#dot5").removeClass("clicked");
    $("#dot6").removeClass("clicked");
});

$("#dot2").on('click', function() {
    showSlide(2);
    $("#dot2").addClass("clicked");
    $("#dot1").removeClass("clicked");
    $("#dot3").removeClass("clicked");
    $("#dot4").removeClass("clicked");
    $("#dot5").removeClass("clicked");
    $("#dot6").removeClass("clicked");
});

$("#dot3").on('click', function() {
    showSlide(3);
    $("#dot3").addClass("clicked");
    $("#dot2").removeClass("clicked");
    $("#dot1").removeClass("clicked");
    $("#dot4").removeClass("clicked");
    $("#dot5").removeClass("clicked");
    $("#dot6").removeClass("clicked");
});

$("#dot4").on('click', function() {
    showSlide(4);
    $("#dot4").addClass("clicked");
    $("#dot2").removeClass("clicked");
    $("#dot3").removeClass("clicked");
    $("#dot1").removeClass("clicked");
    $("#dot5").removeClass("clicked");
    $("#dot6").removeClass("clicked");
});

$("#dot5").on('click', function() {
    showSlide(5);
    $("#dot5").addClass("clicked");
    $("#dot2").removeClass("clicked");
    $("#dot3").removeClass("clicked");
    $("#dot4").removeClass("clicked");
    $("#dot1").removeClass("clicked");
    $("#dot6").removeClass("clicked");
});

$("#dot6").on('click', function() {
    showSlide(6);
    $("#dot6").addClass("clicked");
    $("#dot2").removeClass("clicked");
    $("#dot3").removeClass("clicked");
    $("#dot4").removeClass("clicked");
    $("#dot5").removeClass("clicked");
    $("#dot1").removeClass("clicked");
});
