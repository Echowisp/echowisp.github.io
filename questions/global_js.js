var wrong_count = 0;

function wrongAnswer() {
    var sound = new Audio('wrong_answer.mp3');
    sound.volume = 0.01;
    sound.play();
    wrong_count++;
}