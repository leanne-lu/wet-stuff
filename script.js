function finishFunction() {
    alert("Thank you for helping us paint a clearer picture of the wet-stuff in Manchester.")
}


//SECOND QUIZ

// assign "0" to the "score" variable
let score = 0

// define function:
function checkAnswers() {
    // assign "0" to the "score" variable
    let score = 0;
    let result = 0;

    // assign the quiz elements to the quiz variable: (the path to the quiz)
    let quiz = document.forms.quiz.elements;

    //assign the answer to the question to the answer1 variable:
    answer1 = quiz.colour.value;

    // check the answer to the first question:
    if (answer1 == "yellow"){
        score = score + 1;
    }
    else if (answer1 == "white"){
        score = score + 2;
    }
    else if (answer1 == "brown"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the answer to the question to the answer2 variable:
    answer2 = quiz.animal.value;

    // check the answer to the second question:
    if (answer2 == "dolphin"){
        score = score + 1;
    }
    else if (answer2 == "crocodile"){
        score = score + 2;
    }
    else if (answer2 == "swan"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the answer to the question to the answer3 variable:
    answer3 = quiz.season.value;

    // check the answer to the third question:
    if (answer3 == "summer"){
        score = score + 1;
    }
    else if (answer3 == "spring"){
        score = score + 2;
    }
    else if (answer3 == "autumn"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the answer to the question to the answer4 variable:
    answer4 = quiz.hobby.value;

    // check the answer to the fourth question:
    if (answer4 == "beach"){
        score = score + 1;
    }
    else if (answer4 == "hike"){
        score = score + 2;
    }
    else if (answer4 == "paddleboard"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }


    if (score < 6){
    result = "the sea!";
    }
    else if (score < 10){
    result = "a flowing river!";
    }
    else if (score < 13){
    result = "a lake!";
    }
    else {
    result = "the glaciers!";
    }
    // display the score variable in an alert:
    alert ('You belong by ' + result);
    }

    // CONTACT FORM
    function finishFormFunction() {
        alert("Thank you for expressing your interest in volunteering with us, we'll be in touch soon!")
    }