var questions = ['Which of the following is a valid in-built data-type in C language ?','Which of the following cannot be given as input to switch statement ?','Suppose int x = 3 , y = 4;  x = ++x + ++y; , the values of x and y are : ','Suppose int A[4] = {2}; , then value of A[2] = ','What will be the output of : printf("%03d", 12); : '];
var options = [['list', 'string' , 'unsigned' , 'bool'],['short', 'signed' , 'char' , 'float'],['10,5', '4,5' , '9,5' , '4,4'],['0', 'some garbage value' , 'compiler error' , 'none of these'],['12', '%03d' , '012' , '0312']];
var corr_opt = [['op3','que0','unsigned'] , ['op8','que1','float'] , ['op11','que2','9,5'] , ['op16','que3','none of these'] , ['op19','que4','012']];
var sec;
var int;
function startquiz() {
    document.querySelector(".start").style.display = "none";
    var data = document.querySelector("section");
    data.innerHTML = '';
    var id = 1;
    for(var i = 0 ; i < 5 ; i++) {
        var x = '';
        for(var j = 0 ; j < 4 ; j++) {
            x += '<li><input type = "radio" name = ' + i +' id = op' + id + '>' + '<label for=op' + id + '>' + options[i][j] + '</label>' + '</li>';
            id++;
        }
        data.innerHTML += '<div class = "list" >' + '<h3 class = "que" >' + 'Q.' + (i+1) + ' ' + questions[i] + '</h3>' + '<ul id = que' + i + '>' + x + '</ul>' + '</div>';
    }
    document.querySelector('section').innerHTML += '<div class = "submit"><button class = "btn" onclick = "submitquiz()">submit</button></div>';
    sec = 60;
    int = setInterval(timer, 1000);
}
function submitquiz() {
    window.clearInterval(int);
    document.querySelector('.time').className = 'time';
    document.querySelector('.time').innerHTML = "Timer";
    var marks = 0;
    var count = 1;
    for(var k = 0 ; k < 5 ; k++){
        if(document.getElementById(corr_opt[k][0]).checked === true){
            $('#' + corr_opt[k][1]).after('<h4 class = "crrt">Correct!!!😊😊</h4>');
            marks++;
        }
        else {
            $('#' + corr_opt[k][1]).after('<h4 class = "wrng">Wrong!!!😞😞</h4><h4 class = "crrt">Correct Answer is : ' + corr_opt[k][2] + '</h4>');
        }
    }
    $('.wrng').css('color' , 'red');
    $('.crrt').css('color' , 'green');
    for(var k = 0 ; k < 20 ; k++) {
        document.getElementById('op' + count).disabled = true;
        count++;
    }
    marks = marks * 20;
    document.querySelector('.submit').style.display = 'none';
    document.querySelector('section').innerHTML += '<div class = "score"><button class = "btn scr">Score = ' + marks + '/100</button></div>';
    document.querySelector('section').innerHTML += '<div class = "restart"><button class = "btn" onclick = "startquiz()">Retake</button></div>';
}
function timer() {
    sec--;
    var temp = document.querySelector('.time');
    if (typeof (temp) != undefined && temp != null) { }
    else
        document.querySelector('body').innerHTML += '<button class = "time"></button>';
    if (sec >= 0) {
        if (sec >= 10) {
            document.querySelector('.time').className = 'time';
            document.querySelector('.time').innerHTML = "Time : " + sec;
        }
        else {
            document.querySelector('.time').className = 'time red';
            document.querySelector('.time').innerHTML = "Time : 0" + sec;
        }
    }
    else {
        window.clearInterval(int);
        document.querySelector('audio').play();
        document.querySelector('.time').innerHTML = "Time : 00";
        window.confirm("Sorry!! TimeUp !!\n Click 'ok' to continue");
        submitquiz();
    }
    return;
}
