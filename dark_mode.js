$(document).ready(function (){
    $(".dark").click(function() {
        $('.buttonInactive').not(this).removeClass('buttonInactive');
        $(this).toggleClass('buttonActive');
        if ($(this).hasClass("buttonActive")) {
            $("#dark_mode-btn").text("Jasny motyw");
            $(".dark").css({
                "background-color": "grey",
                "color": "black"
            });
            $(".content-area").css({
                "background-color": "black",
                "color": "grey"
            });
            $(".to-top").css({
                "background-color": "grey",
                "color": "black"
            });
            $("header").css({
                "background-color": "#990000",
                "color": "darkgrey"
            })
            $(".logo a").css({
                "color": "#CCCCCC"
            })
            $(".tera").css({
                "color": "#990000",
                "background-color": "#CCCCCC"
            })
            $(".nie_tera").css({
                "color": "#CCCCCC"
            })
            $(".arrow span").css({
                "border-bottom": "5px solid #990000",
                "border-right": "5px solid #990000"
            })
            $(".news, .kontakt").css({
                "background-color": "black",
                "color": "grey"
            });
            $(".wiadomosc, .email").css({
                "border": "3px solid grey",
                "background-color": "black"
            })
            $("#guzik").css({
                "background-color": "black",
                "border": "3px solid #990000",
                "color": "#990000"
            })
            $("#tab_display").css({
                "background-color": "black",
                "border": "2px solid #990000",
                "color": "#990000"
            })
        }
        else {
            $("#dark_mode-btn").text("Ciemny motyw");
            $(".dark").css({
                "background-color": "black",
                "color": "white"
            });
            $(".content-area").css({
                "background-color": "white",
                "color": "black"
            });
            $(".to-top").css({
                "background-color": "black",
                "color": "white"
            });
            $("header").css({
                "background-color": "red",
                "color": "white"
            })
            $(".logo a").css({
                "color": "white"
            })
            $(".nie_tera").css({
                "color": "white"
            })
            $(".tera").css({
                "color": "red",
                "background-color": "white"
            })
            $(".arrow span").css({
                "border-bottom": "5px solid red",
                "border-right": "5px solid red"
            })
            $(".news, .kontakt").css({
                "background-color": "white",
                "color": "black"
            });
            $(".wiadomosc, .email").css({
                "border": "3px solid black",
                "background-color": "white"
            })
            $("#guzik").css({
                "background-color": "white",
                "border": "3px solid red",
                "color": "red"
            })
            $("#tab_display").css({
                "background-color": "white",
                "border": "2px solid red",
                "color": "red"
            })
        }

    });
})