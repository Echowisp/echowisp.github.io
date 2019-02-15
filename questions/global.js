function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function setTimeForCookies (minutes) {
	var now = new Date();
	var time = now.getTime();

	time += minutes * 60 * 1000;
	now.setTime(time);
	return now;
}

function rightAnswer() {
    var sound = new Audio('correct.wav');
    sound.volume = 0.02;
    sound.play();
}

function playWrongAnswer() {
    var sound = new Audio('wrong_answer.mp3');
    sound.volume = 0.02;
    sound.play();
}

function wrongAnswer() {
    new_val = readCookie('num_wrongs') + 1;
    eraseCookie('num_wrongs');
    createCookie('num_wrongs', new_val, 1);
    playWrongAnswer();
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function next_question(question_num) {
    rightAnswer();
    await sleep(1000);
    location.href = "./q" + question_num + ".html";
}