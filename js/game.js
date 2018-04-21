
$(document).ready(function(){
    $(".questions").hide();
    $(".results").hide();
    $(".startButton").show();
    $('#show-number').hide();

});

    
$('.startButton').click(function(){
    $('.questions').show();
    $('.startButton').hide();
    $('#show-number').show();

});

startTimer();

var timeOn = false;
var time = 30;

function startTimer(){
    timeOn = true;

    if (timeOn == true){
    var interValId = setInterval(function(){
            time --;
            $('#show-number').html("Time Left: " + time + " Seconds");

            if (time === 0){
                timeOn = false;
                clearInterval(interValId);
                submitAnswers();
                final();
            }
        }, 1000);
    }
}
var total = 5;
var score = 0;
var wrong = 0;
var unanswered = 0;

function submitAnswers () {
    score = 0;
    wrong = 0;
    unanswered = 0;

 //Get user input
    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;

    
       var answers = ["b", "c", "a", "d", "d"];

    for (j = 1; j <= total; j++){
        if(eval('q'+ j) == answers[j - 1]){
            score++;
        }

        else if(eval('q' + j) == null || eval('q' + j) == ""){
            unanswered++;
        }

        else if(eval('q' + j) != answers[j-1]){
            wrong++
        }

    }
    return false;

    // if (q1 === answers[0]) {
    //     score++;
    // }
    
    // if (q2 === answers[1]) {
    //     score++;
    // }
    // if (q3 === answers[2]) {
    //     score++;
    // }
    // if (q4 === answers[3]) {
    //     score++;
    // }
    // if (q5 === answers[4]) {
    //     score++;
    // }
    // event.preventDefault();
    // return false;

};


//timer

// var number = 30;

// var intervalId;

// $("#stop").on("click", stop);

// $("#resume").on("click", run);

// function run() {
//   if(intervalId) {
//   clearInterval(intervalId);  
//   }
//   intervalId = setInterval(decrement, 1000);
  
// }
//   debugger;


// function stop() { //stopping the interval

//   clearInterval(intervalId);
// }

// run();
//timer ends


// }

$(".submitButton").click(function() {
    submitAnswers();
    final();
    
});

function final(){
    $('.questions').hide();
    $('.results').show();
    $('.startButton').hide();
    $('#show-number').remove();
    $('#done').html("All Done!");
    $('#correct').html("Correct Answers: " + score);
    $('#wrong').html("Wrong Answers: " + wrong);
    $('#unanswered').html("Unanswerd: " + unanswered);
}





