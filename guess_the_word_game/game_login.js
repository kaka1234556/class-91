function addUser()
{
    input_1= document.getElementById("player1_name_input").value;
    input_2= document.getElementById("player2_name_input").value;
    
    localStorage.setItem("Nick-name1",input_1);
    localStorage.setItem("Nick-name2",input_2);

    window.location="game_page.html";

}