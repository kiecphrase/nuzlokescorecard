function score_calc(){
    var caught = 1 * $("#pc").val();
    var missed = 1 * $("#pm").val();
    var faint = 1 * $("#pf").val();
    var trainers = 1 * $("#tb").val();
    var gym = 1 * $("#gb").val();
    var legend = 1 * $("#lc").val();
    var time = 1 * $("#tt").val();
    var n = 0;
    var d = 0;

    console.log(caught);
    console.log(missed);
    console.log(faint);
    console.log(trainers);
    console.log(gym);
    console.log(legend);
    console.log(time);

    n = (((trainers * 75) + (gym * 150)) + (legend * 50) + (caught * 15));
    d = (((time / 8) + (missed) + (faint * 2)) / 5);

    console.log("numerator: " + n);
    console.log("denominator: " + d);

    if(d == 0){
        d = 10000000000;
    }

    var score = Math.round(n / d);

    scoreColor(score);

    $("#score_board").text(score);
}


function scoreColor(s) {
    if (s < 50){
        $("#score_board").css("color", "red");
    }
    else if (s < 200){
        $("#score_board").css("color", "green");
    }
    else {
        $("#score_board").css("color", "gold");
        $("#score_board").css("text-shadow", "0 0 5px rgba(0,0,0,1)");
    }
}

$("#calc").click( function() {
    score_calc();
    $("#title_text").css("display", "none");
    $("#get").css("display", "none");
    $("#calc").css("display", "none");
    $("#show").css("display", "inline");
    $("#flex_box").css("justify-content", "center");
});