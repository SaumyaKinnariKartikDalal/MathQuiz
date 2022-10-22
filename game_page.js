p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");

p1_score = 0;
p2_score = 0;

aturn = "P2";
qturn = "P1";

document.getElementById("p1_name").innerHTML = p1_name + ":";
document.getElementById("p2_name").innerHTML = p2_name + ":";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("playerq").innerHTML = "Question Turn : " + p1_name;
document.getElementById("playera").innerHTML = "Answer Turn : " + p2_name;

function send() {
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;

    if (no1 == "") {
        alert("Please enter a number");
    }
    else if (no2 == "") {
        alert("Please enter a number");
    }
    else if (no1.length > 4) {
        alert("Enter a number which does not have more than four digits");
    }
    else if (no2.length > 4) {
        alert("Enter a number which does not have more than four digits");
    }

    else {
        qword = "<h4 id='word_display'> Q. " + no1 + "X" + no2 + "</h4>";
        input = "<br> Answer :  <input type='text' id='input_check_box'>";
        check_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
        row = qword + input + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("no1").value = "";
        document.getElementById("no2").value = "";
        document.getElementById("maindiv").style.display = 'none';
    }
}

function check() {
    answer = document.getElementById("input_check_box").value;

    if (answer == no1*no2) {
        document.getElementById("Correct").play();
        if (aturn == "P1") {
            p1_score = p1_score + 1;
            document.getElementById("p1_score").innerHTML = p1_score;
        }
        else {
        p2_score = p2_score + 1;
        document.getElementById("p2_score").innerHTML = p2_score;
        }
    }
    else {
        document.getElementById("Wrong").play();
        if (aturn == "P1") {
            p1_score = p1_score - 1;
            document.getElementById("p1_score").innerHTML = p1_score;
        }
        else {
            p2_score = p2_score - 1;
            document.getElementById("p2_score").innerHTML = p2_score;
        }
    }
    if (qturn == "P1") {
        qturn = "P2";
        document.getElementById("playerq").innerHTML = "Question Turn : " + p2_name;
    }
    else {
        qturn = "P1";
        document.getElementById("playerq").innerHTML = "Question Turn : " + p1_name;
    }
    if (aturn == "P1") {
        aturn = "P2";
        document.getElementById("playera").innerHTML = "Answer Turn : " + p2_name;
    }
    else {
        aturn = "P1";
        document.getElementById("playera").innerHTML = "Answer Turn : " + p1_name;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("maindiv").style.display = 'inline-block';
}