// JavaScript basic

var ans = document.getElementById("ans");
//QUES 1
function date() {
    let d = new Date;
    let day = d.getDay();
    let options = { weekday: 'long' }
    let dName = d.toLocaleDateString('en-US', options)
    console.log(dName);
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h > 12) {
        h = h - 12 + "PM";
    }
    else if (h == 0) {
        h = 12 + "AM";
    }
    else {
        h = h + "AM";
    }
    if (m < 10) {
        m = '0' + m;
    } else {
        m = m
    }
    if (s < 10) {
        s = '0' + s;
    } else {
        s = s
    }
    ans.innerHTML = `Today is: ${dName} time is ${h}-${m}-${s}`;
}

// Ques-2
function printWindow() {
    window.print()
}

// QUES 3
function currentDate() {
    let d = new Date;
    day = d.getDate();
    m = d.getMonth()
    y = d.getFullYear();
    ans.innerHTML = `${day}-${m}-${y}`
}

// Ques 4
function area() {
    let [a, b, c] = [5, 6, 7];//USED HERONS FORMULA
    p = (a + b + c) / 2
    d = p * (p - a) * (p - b) * (p - c)
    ar = Math.sqrt(d)
    ans.innerHTML = "Area is " + ar;
}

//  QUES 5
var myVar = setInterval(myFunction, 100);

var word = 'w3resource';
var newArray = word.split('');

function myFunction() {
    var letter = newArray.pop();
    var newWord = newArray.unshift(letter);
    var theWord = newArray.join('');
    document.getElementById('moveIt').innerHTML = theWord;
}

// QUES 6
function check() {
    var year = document.getElementById("year").value;
    function leapyear(y) {
        return (y % 100 === 0) ? (y % 4 === 0) : (y % 400 === 0)
    }
    ans = document.querySelector("span");
    var html = '';
    if (leapyear()) {
        html = "true";
    }
    else {
        html = "false";
    }
    ans.innerHTML = html;
}

// QUES 7
function isSunday() {
    let year = 2014;
    for (year; year <= 2050; year++) {
        d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            ans.innerHTML += "1st Jan of " + year + " is sunday \n" + "\n";
        }
        else {
            ans.innerHTML += "1st Jan of " + year + " is not a sunday \n" + '\n';
        }
    }
}

// QUES 8
function inp() {
    var p = prompt("Enter a number bw 1-10");
    if ((p <= 10) && (p > 0)) {
        var r = Math.round(Math.random * 10);
        if (p == r) {
            alert("Congrats!!")
        } else {
            alert("Better luck next time")
        }
    }
}

// QUES 9
function daysLeft() {
    let d = new Date;
    let c = new Date(d.getFullYear(), 11, 25);
    if ((d.getMonth() === 11) && (d.getDate() === 25)) {
        c.setFullYear(d.getFullYear() + 1)
    }
    let day1 = 1000 * 60 * 60 * 24;
    let tl = Math.ceil((c.getTime() - d.getTime()) / day1)
    // console.log(d.getTime())
    ans.innerHTML = tl + " days left";
}

// Ques 10
function div() {
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    ans.innerHTML = n1 / n2 + " is the answer";
}
function mul() {
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    ans.innerHTML = n1 * n2 + " is the answer";
}
