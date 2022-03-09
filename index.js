//1

document.getElementById("lastN").textContent = localStorage["nickname"];
document.getElementById('get').addEventListener('click', lastNickname);

function lastNickname(){
    let nickname = document.getElementById('nickname').value;
    if(nickname != ""){
        document.getElementById("lastN").textContent = nickname;
        localStorage["nickname"] = nickname;
    } 
}

//2
document.getElementById('getSquare').addEventListener('click', calculateSquare);

function calculateSquare(){

    let a = document.getElementById('a').value;
    let h = document.getElementById('h').value;

    document.getElementById("square").textContent = a*h/2;

}

//3
document.getElementById('getStrLen').addEventListener('click', checkStrLen);

function checkStrLen(){

    let str1 = document.getElementById('str1').value;
    let str2 = document.getElementById('str2').value;

    document.getElementById("strLen").textContent = str1.length==str2.length;

}

//4
document.getElementById('getMaxMin').addEventListener('click', getMaxMinElements);

function getMaxMinElements(){

    let massiveStr = document.getElementById('massive').value;

    let arr = massiveStr.split(' ');
    arr.sort((a, b) => a - b);

    document.getElementById("min").textContent = 'max = ' + arr[0] + " / ";
    document.getElementById("max").textContent = 'min = ' + arr[arr.length-1];

    for(let i=0; i<arr.length; i++){
        if(isNaN(parseFloat(arr[i])) || !isFinite(arr[i])){
            document.getElementById("min").textContent = 'Введите массив из чисел';
            document.getElementById("max").textContent = null;
            break;
        }
    }

}

//5 ТАЙМЕР

var time = document.getElementById('timer');
var start = document.getElementById('startButton');
var stop = document.getElementById('stopButton');
var reset = document.getElementById('clearButton');
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;
var ongoing = false;

function tick(){
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
}

function ongoingTime(){
    tick();
    time.textContent = (hours > 9 ? hours : "0" + hours) 
        	 + ":" + (minutes > 9 ? minutes : "0" + minutes)
       		 + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

function timer(){
    t = setTimeout(ongoingTime, 1000);
}

start.onclick = function(){

    if(!ongoing) setTimeout(ongoingTime, 1000);
    ongoing = true;

}

stop.onclick = function(){
    clearTimeout(t);
    ongoing = false;
}

reset.onclick = function(){
    clearTimeout(t);
    ongoing = false;
    seconds = 0; minutes = 0; hours = 0;

    time.textContent = "00:00:00";
}

//6 TEST

document.getElementById('getResult').addEventListener('click', calcResult);

function calcResult(){

    let count = 0;
    let qCount = 1;
    let Questions = [0,0,0,0,0,0,0,0,0,0];

    for(qCount; qCount <= 10; qCount++){
        let input = document.getElementsByName(`q${qCount}`);

        for(let i=0; i<input.length; i++){
            if(input[i].checked == 1){
                if(parseInt(input[i].value) == 1){
                    count++;
                    Questions[`${qCount}`] = 1;
                }
            }
        }
    }

    for(qCount = 6; qCount <= 9; qCount++){
        let input = document.getElementById(`q${qCount}`);
        if(input.dataset.right == input.value.toLowerCase()){
            count++;
            Questions[`${qCount}`] = 1;
        }
    }

    for(let i=1; i<=10; i++){
        if(Questions[i] == 1){
            document.getElementById(`result${i}`).textContent = "Правильный ответ";
            document.getElementById(`result${i}`).style.color = "lime";
        }
        else{
            document.getElementById(`result${i}`).textContent = "НЕправильный ответ";
            document.getElementById(`result${i}`).style.color = "tomato";
        }
    }

    document.getElementById("result").textContent = count + " правильных ответов";

}

//7 fon

document.getElementById('doInteractive').addEventListener('click', doInteractive);

function doInteractive(){
    let getStyle = document.getElementById('screensave');
    let getStyle2 = document.getElementById('body_window');
    document.getElementById("lastNick").textContent = localStorage["nickname"];
    document.getElementById("time").textContent = new Date().toLocaleString();

    if(getStyle.style.display == 'block'){
        getStyle.style.display = 'none';
        getStyle2.style.display = 'none';
        document.body.style.overflow = 'visible';
    }
    else{
        getStyle.style.display = 'block';
        getStyle2.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}


// КНОПКИ (ДОП) ------------------------------------------
function checkOtherFunc(){
    let example = document.getElementById('body_example1');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
    example = document.getElementById('body_example2');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
    example = document.getElementById('body_example3');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
    example = document.getElementById('body_example4');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
    example = document.getElementById('body_example5');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
    example = document.getElementById('body_example6');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
    
    example = document.getElementById('body_example7');
    if (getComputedStyle(example).display == 'block') {
        example.style.display = 'none';
    }
}

// кнопка 1
function doExample1(){

    let example1 = document.getElementById('body_example1');
    let actualDisplay1 = getComputedStyle(example1).display;

    if (actualDisplay1 == 'none') {
        checkOtherFunc();
        example1.style.display = 'block';
    } else {
        example1.style.display = 'none';
    }
}

// кнопка 2
function doExample2(){

    let example2 = document.getElementById('body_example2');
    let actualDisplay2 = getComputedStyle(example2).display;

    if (actualDisplay2 == 'none') {
        checkOtherFunc();
        example2.style.display = 'block';
    } else {
        example2.style.display = 'none';
    }

}

// кнопка 3
function doExample3(){

    let example3 = document.getElementById('body_example3');
    let actualDisplay3 = getComputedStyle(example3).display;

    if (actualDisplay3 == 'none') {
        checkOtherFunc();
        example3.style.display = 'block';
    } else {
        example3.style.display = 'none';
    }

}

// кнопка 4
function doExample4(){

    let example4 = document.getElementById('body_example4');
    let actualDisplay4 = getComputedStyle(example4).display;

    if (actualDisplay4 == 'none') {
        checkOtherFunc();
        example4.style.display = 'block';
    } else {
        example4.style.display = 'none';
    }

}

// кнопка 5
function doExample5(){

    let example5 = document.getElementById('body_example5');
    let actualDisplay5 = getComputedStyle(example5).display;

    if (actualDisplay5 == 'none') {
        checkOtherFunc();
        example5.style.display = 'block';
    } else {
        example5.style.display = 'none';
    }

}

// кнопка 6
function doExample6(){

    let example6 = document.getElementById('body_example6');
    let actualDisplay6 = getComputedStyle(example6).display;

    if (actualDisplay6 == 'none') {
        checkOtherFunc();
        example6.style.display = 'block';
    } else {
        example6.style.display = 'none';
    }

}

// кнопка 7
function doExample7(){

    let example7 = document.getElementById('body_example7');
    let actualDisplay7 = getComputedStyle(example7).display;

    if (actualDisplay7 == 'none') {
        checkOtherFunc();
        example7.style.display = 'block';
    } else {
        example7.style.display = 'none';
    }

}