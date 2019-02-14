function rightAnswer() {
    var sound = new Audio('correct.wav');
    sound.volume = 0.02;
    sound.play();
}

function wrongAnswer() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var old_value = decodedCookie.split('=')[1];
    var sound = new Audio('wrong_answer.mp3');
    sound.volume = 0.02;
    sound.play();
    document.cookie = "num_wrongs=" + (old_value + 1);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function next_question(question_num) {
    rightAnswer();
    await sleep(1000);
    location.href = "./q" + question_num + ".html";
}