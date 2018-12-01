// Services

$(function () {
    //init wow.js
    new WOW().init();
});

// Work

$(function() {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});
