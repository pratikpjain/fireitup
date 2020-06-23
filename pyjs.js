var questions = ['Which special keyword is used to define constructor in python class ?','Suppose x=[1,2,3] ; x.extend([4,5]) ; x.append([6,7,8]) then what is output of : print(len(x)) ','Which of the following is ordered and mutable data-type in python ?','How we can overload print function in python ?',`Which of the following is valid way to specify the string literal foo'bar in python : `];
var options = [['__constructor__', '__const__' , '__init__' , '__def__'],['5', '7' , '6' , '8'],['tuple', 'list' , 'set' , 'str'],['We cannot do it in python', 'No need to overload we can simply print using `print` function' , 'using __str__ method' , 'None of these'],[`'foo'bar'`, `'foo''bar'` , `'foo\\'bar'` , `It's not possible`]];
var corr_opt = [['op3','que0','__init__'] , ['op7','que1','6'] , ['op10','que2','list'] , ['op15','que3','using __str__ method'] , ['op19','que4',`'foo\'bar'`]];
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