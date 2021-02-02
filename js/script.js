!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');

$(document).ready(function () {
    // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

    // Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Button Event Handler
    $("#submit").on('click', function () {
        var comment = $('.message-box').val();
        $('#visible-comment').html(`Your message has been sent. We'll be in contact soon.`);
        $('.message-box').hide();
        $('.email-form').hide();
        $("#char-count").hide();
        return false;
    });
});

$(".message-box").on("keyup", function () {
    let charCount = $(".message-box").val().length;
    $("#char-count").html(charCount);
    if (charCount > 50) {
        $("#char-count").css("color", "red");
        $("#message").css("border-color","red")
    } else {
        $("#char-count").css("color", "black");
    }
});





