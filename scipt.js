function alea() {
    var i = document.getElementById("num1");
    var i2 = document.getElementById("num2");
    var rand = getRandom();
    i.value = rand;
    rand = getRandom();
    i2.value = rand;



}
// random number between -100 and 100
function getRandom() {
    var random = Math.floor(Math.random() * 100) // returns a random integer from 0 to 100   // -100 100 
    var negative = Math.random(); // returns a random integer from 0 to 1 0.5 0.4 .12425 0.8 0.9 
    if (negative < 0.5) {
        random = -1 * random;
    }
    return random;
}

function verefie() {
    //random numbers
    var i = document.getElementById("num1");
    var i2 = document.getElementById("num2");
    //operations
    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');
    var op4 = document.getElementById('op4');
    //solution
    let s1 = parseInt(i.value) + parseInt(i2.value)
    var s2 = parseInt(i.value) - parseInt(i2.value)
    var s3 = parseInt(i.value) * parseInt(i2.value)
    var s4 = parseInt(i.value) / parseInt(i2.value)



    if (op1.value == '' || op2.value == '' || op3.value == '' || op4.value == '') {
        if (op1.value == '') {
            showmsg('first answer is empty please fill it ');
            op1.style.borderColor = "#ff2187";

        } else {
            op1.style.borderColor = "#3580f1";
        }

        if (op2.value == '') {
            showmsg('second answer is empty please fill it ');
            op2.style.borderColor = "#ff2187";


        } else {
            op2.style.borderColor = "#3580f1";
        }
        if (op3.value == '') {
            showmsg('third answer is empty please fill it ');
            op3.style.borderColor = "#ff2187";

        } else {
            op3.style.borderColor = "#3580f1";

        }

        if (op4.value == '') {
            showmsg('fourth answer is empty please fill it ');
            op4.style.borderColor = "#ff2187";

        } else {
            op4.style.borderColor = "#3580f1";

        }
        showmsg('All the answer are empty please fill them ');

    } else {
        if (op1.value != s1) {
            op1.style.borderColor = "#ff2187";

        } else {
            op1.style.borderColor = "#3580f1";

        }
        if (op2.value != s2) {
            op2.style.borderColor = "#ff2187";

        } else {
            op2.style.borderColor = "#3580f1";

        }
        if (op3.value != s3) {
            op3.style.borderColor = "#ff2187";

        } else {
            op3.style.borderColor = "#3580f1";

        }
        if (op4.value != s4) {
            op4.style.borderColor = "#ff2187";

        } else {
            op4.style.borderColor = "#3580f1";

        }

    }


}

function showmsg(_msg) {
    var msg = document.getElementById('msg');
    msg.innerText = _msg
    msg.style.color = "#ff0000"
    msg.style.textAlign = 'center'
    msg.style.background = "#4c4c4c"
}

function ok() {
    //random numbers
    var i = document.getElementById("num1");
    var i2 = document.getElementById("num2");
    //solutions
    var sol1 = document.getElementById('sol1');
    var sol2 = document.getElementById('sol2');
    var sol3 = document.getElementById('sol3');
    var sol4 = document.getElementById('sol4');
    sol1.value = parseInt(i.value) + parseInt(i2.value)
    sol2.value = parseInt(i.value) - parseInt(i2.value)
    sol3.value = parseInt(i.value) * parseInt(i2.value)
    sol4.value = parseInt(i.value) / parseInt(i2.value)

}