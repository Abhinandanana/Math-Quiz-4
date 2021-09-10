player_1_n= localStorage.getItem("play1_name");
player_2_n= localStorage.getItem("play2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("name_player1").innerHTML= player_1_n;
document.getElementById("name_player2").innerHTML= player_2_n;

document.getElementById("score_player1").innerHTML= player1_score;
document.getElementById("score_player2").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn- " + player_1_n;
document.getElementById("player_answer").innerHTML= "Answer Turn- " + player_2_n;

function send() {
number1= document.getElementById("n1").value ;
number2= document.getElementById("n2").value ;
actual_answer= parseInt(number1) * parseInt(number2);
question_number= "<h4>" + number1 + "X" + number2 + "</h4>"
input_box= "<br> Answer: <input type='text' id='input_check_box'>";
check_button= "<br><br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row= question_number+input_box+check_button;
document.getElementById("data").innerHTML= row;
document.getElementById("n1").value= "";
document.getElementById("n2").value= "";
}
question_turn="player1";
answer_turn="player2";

function check() {
    answer_get= document.getElementById("input_check_box").value;
    if(answer_get==actual_answer){
        if(answer_turn=="player1")
        {
            update_player1_score= player1_score +1;
            document.getElementById("score_player1").innerHTML= update_player1_score;
        }
        else{
            update_player2_score= player2_score +1;
            document.getElementById("score_player2").innerHTML= update_player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML= "Question Turn- " +  player_2_n;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML= "Question Turn- " +  player_1_n;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn- " +  player_2_n;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn- " +  player_1_n;
    }
    document.getElementById("data").innerHTML="";
}
