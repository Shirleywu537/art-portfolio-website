$(document).ready(function() {
    $('#view-emily').on('click', function() {
      $('#modal-img-emily').removeClass('hidden');
      $('#modal-img-miyazaki').addClass('hidden');
      $('#imageModal').removeClass('hidden');
      $('body').addClass('overflow');
    });

    $('#view-miyazaki').on('click', function() {
      $('#modal-img-miyazaki').removeClass('hidden');
      $('#modal-img-emily').addClass('hidden');
      $('#imageModal').removeClass('hidden');
      $('body').addClass('overflow');
    });

    $('#modalClose').on('click', function() {
      $('#imageModal').addClass('hidden');
      $('#modal-img-emily').addClass('hidden');
      $('#modal-img-miyazaki').addClass('hidden');
      $('body').removeClass('overflow');
    });

    $(document).on('keyup', function(event) {
      if (event.key === 'Escape') {
        if (!$('#imageModal').hasClass('hidden')) {
           $('#imageModal').addClass('hidden');
           $('#modal-img-emily').addClass('hidden');
           $('#modal-img-miyazaki').addClass('hidden');
           $('body').removeClass('overflow');
        }
      }
    });
  });
