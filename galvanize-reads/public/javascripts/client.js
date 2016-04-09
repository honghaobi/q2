$(document).ready(function() {

  $('.text').on('click', function(event) {
    $(this).toggleClass('text-show');
  });

  $('.addAuthor').on('click', function () {
      var authorID = $('.authorSelection').val();
      var authorName = $('.authorSelection option:selected').text();
      $('.addedAuthor').append("<option value=" + authorID + ">" + authorName + "</option>");
    });

  $('.removeAuthor').on("click", function () {
      $('.addedAuthor option:selected').remove();
  });

});
