function rightAnswer() {
    
}

function wrongAnswer() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var old_value = decodedCookie.split('=')[1];
    var sound = new Audio('wrong_answer.mp3');
    sound.volume = 0.01;
    sound.play();
    document.cookie = "num_wrongs=" + (old_value + 1);
}