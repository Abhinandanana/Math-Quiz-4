function addUser() {
    player1_name= document.getElementById("text_in_1").value;
    player2_name= document.getElementById("text_in_2").value;

    localStorage.setItem("play1_name", player1_name);
    localStorage.setItem("play2_name", player2_name);

    window.location= "math.html";
}