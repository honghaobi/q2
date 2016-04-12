$(document).ready(function() {

  $('.text').on('click',function(event) {
    $(this).toggleClass( 'text-show');
  });

  $('.addAuthor').on('click', function(event) {
      var authorID = $('.authorSelection').val();
      var authorName = $('.authorSelection option:selected').text();
      var addedAuthors = ($('.addedAuthor option').text());

        if (addedAuthors.indexOf(authorName) < 0) {
          $('.addedAuthor').append("<option value=" + authorID + ">" + authorName + "</option>");
        } else {
          return;
        }
    });

  $('.removeAuthor').on("click", function(event) {
    $('.addedAuthor option:selected').remove();
  });

  $('.addBook').on('click', function(event) {
      var bookID = $('.bookSelection').val();
      var bookName = $('.bookSelection option:selected').text();
      var addedBooks = ($('.addedBook option').text());

      if (addedBooks.indexOf(bookName) < 0) {
        $('.addedBook').append("<option value=" + bookID + ">" + bookName + "</option>");
      } else {
        return;
      }
    });

  $('.removeBook').on("click", function(event) {
    $('.addedBook option:selected').remove();
  });

  $('input.expanded.success.large.button').on('click', function(event) {
    $('.addedAuthor option').prop('selected', true);
    $('.addedBook option').prop('selected', true);
  });
});
