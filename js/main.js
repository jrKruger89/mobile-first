$(document).ready(function () {
    $('.nav_icon').click(function () {
        $(this).toggleClass('open');
        $('.navigation_list').slideToggle();
        $('.sub_nav').slideUp();
    });

    $('#toggle_sub_1').click(function () {
        $(this).toggleClass('sub_open');
        $('.sub_menu_1').slideToggle();
    });

    $('#toggle_sub_2').click(function () {
        $(this).toggleClass('sub_open');
        $('.sub_menu_2').slideToggle();
    });
});