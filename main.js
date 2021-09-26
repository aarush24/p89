function adduser(){
    Player1_name = document.getElementById("player_1 name_input").value;
    Player2_name = document.getElementById("player_2 name_input").value;

    localStorage.setItem("Player1_name",Player1_name);
    localStorage.setItem("Player2_name",Player2_name);
}