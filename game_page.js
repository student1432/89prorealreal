player1_name = localStorage.getItem("Player 1");
player2_name = localStorage.getItem("Player 2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send() 
{
    number1 = document.getElementById("word").value;
    number2 = document.getElementById("word").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    word_question = "<h4 id='id_question'>Q."+actual_answer+"</h4>";
    Text_Input = "<br>Ans: <input id='input_answer'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = word_question + Text_Input + button;
    document.getElementById("output").innerHTML = row;
}