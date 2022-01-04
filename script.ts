$(document).ready(function(){
    const Responsive = {
        resize(){
            if(window.innerWidth <= 720 && !$('#float-menu').hasClass('active')) {
                $('#float-menu').removeClass('active')
                $('#float-menu').addClass('not-active')
            }
            else if(window.innerWidth > 720) {
                console.log(window.innerWidth)
                $('#float-menu').removeClass('not-active')
                $('#float-menu').addClass('active')
            }
        }
    }
    if(window.innerWidth <= 720) $('#float-menu').addClass('not-active')
    window.onresize = Responsive.resize
})