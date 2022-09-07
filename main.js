// DOM Elements
const time = document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
focus = document.getElementById("focus"),
body = document.body;

const showamPm = true;

// showTime
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // set amPm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // set 12hr format
    hour = hour % 12 || 12;

    // output
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showamPm ? amPm : ''}`;

    // add zero
    function addZero(n){
        return(parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    
    setTimeout(showTime, 1000);
}

function showBg(){
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12){
        greeting.textContent = "Good Morning";
        body.style.backgroundImage = "url('./img/Morning.jpg')";
        body.classList.add('bg');
        body.style.color = "#fff";
    }

    else if(hour < 18){
        greeting.textContent = "Good Afternoon";
        body.style.backgroundImage = "url('./img/Afternoon.jpg')";
        body.classList.add('bg');
        body.style.color = "#fff";
    }

    else{
        greeting.textContent = "Good Night";
        body.style.backgroundImage = "url('./img/Night.jpg')";
        body.classList.add('bg');
        body.style.color = "#fff";
    }
}

// get Name and Focus
function getName(){
    if(localStorage.getItem("name") === null){
        name.textContent = '[Enter Name]';
    }

    else{
        name.textContent = localStorage.getItem("name");
    }
}

function getFocus(){
    if(localStorage.getItem("focus") === null){
        focus.textContent = '[Enter Focus]';
    }

    else{
        focus.textContent = localStorage.getItem("focus");
    }
}

// set Name and Focus
function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    }

    else{
        localStorage.setItem("name", e.target.innerText);
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    }

    else{
        localStorage.setItem("focus", e.target.innerText);
    }
}

// JS EVENTS
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run Function
showTime();
showBg();
getName();
getFocus();