var questions = ['Which of the following is a valid in-built data-type in C++ language ?','Which of the following is NOT the access specifier in c++ ?','Scope of private data members is : ','Constructor in classes are used for : ','What is the output of : cout<<(char)51;  : '];
var options = [['list', 'string' , 'tuple' , 'dict'],['public', 'private' , 'protected' , 'friend'],['for the child classes', 'for whole program' , 'for main() function only' , 'for friend functions'],['returning values of data members', 'getters and setters' , 'initializing the data members' , 'All of these'],['Error', '2' , '3' , '4']];
var corr_opt = [['op2','que0','string'] , ['op8','que1','friend'] , ['op12','que2','for friend functions'] , ['op15','que3','initializing the data members'] , ['op19','que4','3']];
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
}
function submitquiz() {
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