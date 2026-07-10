$(document).ready(function() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      $("#menubutton").removeClass("hidden");
      $("nav menu").addClass("hidden");
    } else {
      $("#menubutton").addClass("hidden");
      $("nav menu").removeClass("hidden");
    }

    $("#menubutton").on("click", function() {
      if ($("nav menu").hasClass("hidden")) {
        $("nav menu").removeClass("hidden");
      } else {
        $("nav menu").addClass("hidden");
      }
    });

    $(window).on("resize", function() {
      if (window.matchMedia("(max-width: 700px)").matches) {
        $("#menubutton").removeClass("hidden");
        $("nav menu").addClass("hidden");
      } else {
        $("#menubutton").addClass("hidden");
        $("nav menu").removeClass("hidden");
      }
    });
  });
