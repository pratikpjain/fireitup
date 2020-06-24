var questions = ['Which of the following individuals is credited for first designing java ?','Within Java , each call to StdOut.println() does which of the following ?','Which company now owns Java ?','Which keyword is used to skip the current iteration in loop ?','Which keyword keeps the main method from returning any value to the caller ?'];
var options = [['James Gosling', 'Jim LeValley' , 'Ian Sheeler' , 'Tim Ritchey'],['Reads and then prints the contents of the current file', 'Prints the contents of the current file' , 'Appends text to the end of the file' , 'Overwrites the current contents of the file'],['PeopleSoft Inc.', 'Oracle Corporation' , 'SAP' , 'Apache Software Foundation'],['break;', 'skip;' , 'pass;' , 'continue;'],['exclusive', 'restricted' , 'void' , 'concealed']];
var corr_opt = [['op1','que0','James Gosling'] , ['op7','que1','Appends text to the end of the file'] , ['op10','que2','Oracle Corporation'] , ['op16','que3','continue;'] , ['op19','que4','void']];
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
