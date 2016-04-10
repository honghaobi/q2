$(document).ready(function() {

  $('.text').on('click',function(event) {
    $(this).toggleClass( 'text-show');
  });

  $('.addAuthor').on('click', function(event) {
      var authorID = $('.authorSelection').val();
      var authorName = $('.authorSelection option:selected').text();
      $('.addedAuthor').append("<option value=" + authorID + ">" + authorName + "</option>");
    });

  $('.removeAuthor').on("click", function(event) {
    $('.addedAuthor option:selected').remove();
  });

  $('input.expanded.success.large.button').on('click', function(event) {
    $('.addedAuthor option').prop('selected', true);
  });
});
