$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_Si = $("#Si");
    var btn_No = $("#No");
    
    envelope.click( function() {
        Si();
    });
    btn_Si.click( function() {
        Si();
    });
    btn_No.click( function() {
        close();
    });

    function Si() {
        envelope.addClass("Si").removeClass("close");
        $('.confetti').fadeIn(); 
    }
    function No() {
        envelope.addClass("close")
           .removeClass("Si");
    }
   
});