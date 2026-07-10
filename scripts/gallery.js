$("#buttonA").on("click", function () {
    $("#imgA").removeClass('hidden');
    $("#imgB, #imgC, #imgD, #imgE").addClass('hidden');
  });

  $("#buttonB").on("click", function () {
    $("#imgB").removeClass('hidden');
    $("#imgA, #imgC, #imgD, #imgE").addClass('hidden');
  });

  $("#buttonC").on("click", function () {
    $("#imgC").removeClass('hidden');
    $("#imgA, #imgB, #imgD, #imgE").addClass('hidden');
  });

  $("#buttonD").on("click", function () {
    $("#imgD").removeClass('hidden');
    $("#imgA, #imgB, #imgC, #imgE").addClass('hidden');
  });

  $("#buttonE").on("click", function () {
    $("#imgE").removeClass('hidden');
    $("#imgA, #imgB, #imgC, #imgD").addClass('hidden');
  });

  $("#buttonF").on("click", function () {
    $("#imgF").removeClass('hidden');
    $("#imgG, #imgH, #imgI").addClass('hidden');
  });

  $("#buttonG").on("click", function () {
    $("#imgG").removeClass('hidden');
    $("#imgF, #imgH, #imgI").addClass('hidden');
  });

  $("#buttonH").on("click", function () {
    $("#imgH").removeClass('hidden');
    $("#imgF, #imgG, #imgI").addClass('hidden');
  });

  $("#buttonI").on("click", function () {
    $("#imgI").removeClass('hidden');
    $("#imgF, #imgG, #imgH").addClass('hidden');
  });
