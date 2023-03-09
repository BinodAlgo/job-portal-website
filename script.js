$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        var keywords = $('#keywords').val();
        var location = $('#location').val();
        $.ajax({
            url: 'search.php',
            method: 'POST',
            data: { keywords: keywords, location: location },
            success: function (response) {
                $('#search-results').html(response);
            }
        });
    });
});
``