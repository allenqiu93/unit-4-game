

//jquery runs with ready function
$( document ).ready(function() {

    //global variable

    // random score to guess
    var randomScore;
    //pics value
    var one;
    var two;
    var three;
    var four;
    //score
    var score;
    var wins = 0;
    var losses = 0;
    
    function randomScoreToGuess(){
        randomScore = Math.floor(Math.random() * 255);
        $("#scoreToGuess").text(randomScore)
    }

    //initial the game
    function initial() {
        randomScoreToGuess()
        one = Math.floor(Math.random() * 12 + 1)
        two = Math.floor(Math.random() * 12 + 1)
        three = Math.floor(Math.random() * 12 + 1)
        four = Math.floor(Math.random() * 12 + 1)
        score = 0
        $("#yourScore").text(score)
    }

    $("#one").on("click", function() {
        score += one
        if (score === randomScore) {
            wins++
            $("#win").text(wins)
            initial()
        } else if (score > randomScore) {
            losses++
            $("#lose").text(losses)
            initial()
        } else {
            $("#yourScore").text(score)
        }     
    })

    $("#two").on("click", function() {
        score += two
        if (score === randomScore) {
            wins++
            $("#win").text(wins)
            initial()
        } else if (score > randomScore) {
            losses++
            $("#lose").text(losses)
            initial()
        } else {
            $("#yourScore").text(score)
        }     
    })

    $("#three").on("click", function() {
        score += three
        if (score === randomScore) {
            wins++
            $("#win").text(wins)
            initial()
        } else if (score > randomScore) {
            losses++
            $("#lose").text(losses)
            initial()
        } else {
            $("#yourScore").text(score)
        }     
    })

    $("#four").on("click", function() {
        score += four
        if (score === randomScore) {
            wins++
            $("#win").text(wins)
            initial()
        } else if (score > randomScore) {
            losses++
            $("#lose").text(losses)
            initial()
        } else {
            $("#yourScore").text(score)
        }     
    });
    
    initial()

});





