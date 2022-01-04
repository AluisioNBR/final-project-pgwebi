$(document).ready(function () {
    var Responsive = {
        resize: function () {
            if (window.innerWidth <= 720) {
                Responsive.desactiveMenu();
                Responsive.activeMenuButton();
            }
            else {
                $('#float-menu').removeClass('not-active');
                $('#float-menu').addClass('active');
                Responsive.desactiveMenuButton();
            }
        },
        desactiveMenu: function () {
            $('#float-menu').removeClass('active');
            $('#float-menu').addClass('not-active');
        },
        activeMenuButton: function () {
            $('#float-button').removeClass('not-active');
            $('#float-button').addClass('active');
        },
        desactiveMenuButton: function () {
            $('#float-button').removeClass('active');
            $('#float-button').addClass('not-active');
        }
    };
    if (screen.width <= 720 || window.innerWidth <= 720) {
        Responsive.desactiveMenu();
        Responsive.activeMenuButton();
    }
    window.onresize = Responsive.resize;
    $('#float-button').on('click', function () {
        $('#float-menu').toggleClass('active');
        $('#float-menu').toggleClass('not-active');
    });
});
