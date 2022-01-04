$(document).ready(function () {
    var Responsive = {
        resize: function () {
            if (window.innerWidth <= 720) {
                $('#float-menu').removeClass('active');
                $('#float-menu').addClass('not-active');
            }
            else if (window.innerWidth > 720) {
                $('#float-menu').removeClass('not-active');
                $('#float-menu').addClass('active');
            }
        }
    };
    if (window.innerWidth <= 720)
        $('#float-menu').addClass('not-active');
    window.onresize = Responsive.resize;
});
