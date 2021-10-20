
$(document).ready(function() {
    var nomorPosisi = $(".slide.active").attr('id').substr(5, 1);
    var jmlSlide = $(".slide").length;

    hideControl(nomorPosisi);

    function hideControl(nomorPosisi) {
        if (nomorPosisi === "1") { 
            // $('#leftControl').css("background", "none");
            $('#leftControl').removeClass("leftControl");
            $("#imgLeft").css("display", "none");
        }
        else {
            $("#imgLeft").css("display", "block");
            $('#leftControl').addClass("leftControl");
        }

        if (nomorPosisi === "3") { 
            $('#rightControl').removeClass("rightControl");
            $("#imgRight").css("display", "none");
        } 
        else {
            $("#imgRight").css("display", "block");
            $('#rightControl').addClass("rightControl");
        }
    } 

    
    $('#leftControl').on("click", function() {
        if (nomorPosisi == "2") {
            $("#slide2").css("display", "none")
            $("#slide2").css("opacity", "0");
            $("#slide1").animate( {
                opacity: 1
            });
            $("#slide1").css("display", "flex")
            nomorPosisi = "1";
        }

        else if (nomorPosisi == "3") {
            $("#slide3").css("display", "none")
            $("#slide3").css("opacity", "0");
            $("#slide2").animate( {
                opacity: 1
            });
            $("#slide2").css("display", "flex")
            nomorPosisi = "2";
        }

        hideControl(nomorPosisi);
    })

    $('#rightControl').on("click", function() {
        if (nomorPosisi == "1") {
            $("#slide1").css("display", "none");
            $("#slide1").css("opacity", "0");
            $('#slide2').animate({
                opacity: 1
            });
            $("#slide2").css("display", "flex")
            nomorPosisi = "2";
        }

        else if (nomorPosisi == "2") {
            $("#slide2").css("display", "none");
            $("#slide2").css("opacity", "0");
            $('#slide3').animate({
                opacity: 1
            });
            $("#slide3").css("display", "flex")
            nomorPosisi = "3";
        }

        hideControl(nomorPosisi);
    })
    
})