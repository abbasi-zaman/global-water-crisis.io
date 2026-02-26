/* =============================
   Active JS - Academics Theme
============================= */

(function ($) {
    "use strict";

    /* Nivo Slider */
    $('#ensign-nivoslider').nivoSlider({
        effect: 'fade',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 800,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        pauseOnHover: true,
        manualAdvance: false
    });

    /* WOW Animation */
    if (typeof WOW === 'function') {
        new WOW().init();
    }

})(jQuery);