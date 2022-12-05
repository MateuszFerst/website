$("#moto_table").hide();
$("#tab_display").click(function() {
    $('.buttonInactive').not(this).removeClass('buttonInactive');
    $(this).toggleClass('buttonActive');
    if ($(this).hasClass("buttonActive")) {
        $("#moto_table").show();
    }
    else {
        $("#moto_table").hide();
    }
})
