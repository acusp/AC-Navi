// common.js

$(document).ready(function () {
    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });
    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

// masthead background
$('.ui.inverted.masthead.segment').addClass('bg' + Math.ceil(Math.random() * 14)).removeClass('zoomed');

// progress bar
$('#page-loading-progress').progress({
    total: 2,
    onSuccess: function () {
        $('#page-loading-progress').fadeOut(1000, function () {
            $('#page-loading-progress').remove();
        });
    }
});

document.onreadystatechange = function () {
    $('#page-loading-progress').progress('increment');
    if (document.readyState == "complete") {
        $('#page-loading-progress').progress('increment');
    }
};

// $('#page-loading-progress').progress('increment');
// window.onload = function() {
//     $('#page-loading-progress').progress('increment');
// };
